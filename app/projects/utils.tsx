import { readdir, readFile } from "fs/promises";
import z from "zod";
import { parse } from "yaml";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import rehypeShiki from "@shikijs/rehype";
import readingDuration from "reading-duration";
import { slugify } from "@/lib/utils";

const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
  tagline: z.string().optional(),
  role: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string(),
  date: z.string(),
  featured: z.boolean().optional(),
  freelance: z.boolean().optional(),
  hideDetail: z.boolean().optional(),
  technologies: z.array(z.string()),
  features: z.array(z.string()),
  github: z.string().url().optional(),
  demo: z.string().url().optional(),
  image: z.string().optional(),
  order: z.number().default(0),
  status: z.enum(["completed", "early", "beta"]).default("completed"),
});

export type Project = z.infer<typeof ProjectSchema> & { slug: string };

export async function getProjects(): Promise<Project[]> {
  const projects: Project[] = [];
  let dirs;
  try {
    dirs = await readdir("content/projects");
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return projects;
  }
  for (const dir of dirs) {
    const filePath = `content/projects/${dir}`;
    let fileContent;
    try {
      fileContent = await readFile(filePath);
      if (!fileContent) continue;
    } catch (error) {
      console.error(`Error importing project ${dir}:`, error);
      continue;
    }
    const yaml = parse(fileContent.toString());
    const project = await ProjectSchema.parseAsync(yaml);
    projects.push({ ...project, slug: project.slug ?? slugify(project.title) });
  }
  return projects.sort((a, b) => b.order - a.order);
}

export async function getProject(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getCaseStudy(slug: string) {
  const basePath = `content/case-studies/${slug}`;
  const filePath = path.join(basePath, "index.mdx");
  let fileContent;
  try {
    fileContent = await readFile(filePath, "utf-8");
  } catch {
    return null;
  }

  const { content } = matter(fileContent);
  // A stub with only comments/frontmatter has no real prose to render.
  if (content.trim().length === 0) return null;

  // Build the "On this page" table of contents from the top-level (##) headings,
  // ignoring anything inside fenced code blocks.
  const withoutCode = content.replace(/```[\s\S]*?```/g, "");
  const headings = Array.from(withoutCode.matchAll(/^##\s+(.+?)\s*$/gm)).map(
    (m) => {
      const text = m[1].replace(/[*_`]/g, "").trim();
      return { text, id: slugify(text) };
    }
  );

  let rehypePlugins: any[] = [];
  if (process.env.NODE_ENV === "production") {
    rehypePlugins = [[rehypeShiki, { theme: "tokyo-night", lazy: true }]];
  }

  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { mdxOptions: { rehypePlugins } },
    components: {
      h2: ({ children }) => {
        const id = slugify(mdxText(children));
        return (
          <h2 id={id} className="scroll-mt-24">
            {children}
          </h2>
        );
      },
      img: ({ src, ...props }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          {...props}
          src={"/" + path.join(basePath, src as string)}
          alt={(props as { alt?: string }).alt ?? ""}
          className="aspect-auto w-fit mx-auto h-auto rounded-lg"
        />
      ),
    },
  });

  return {
    content: compiledContent,
    readingTime: readingDuration(content, { emoji: false }),
    headings,
  };
}

// Flatten MDX heading children (string | element | array) to plain text so a
// slug can be derived that matches the TOC ids.
function mdxText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(mdxText).join("");
  if (typeof node === "object" && "props" in node) {
    return mdxText((node as { props: { children?: React.ReactNode } }).props.children);
  }
  return "";
}
