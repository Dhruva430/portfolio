import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getCaseStudy, getProject, getProjects } from "../utils";
import { Button } from "@/components/ui/button";
import Github from "@/assets/github.svg";
import { toTitleCase } from "@/lib/utils";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects
    .filter((project) => !project.hideDetail)
    .map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  const title = `${project.title} — Case Study`;
  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

const LABEL = "font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground";

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project || project.hideDetail) notFound();

  const caseStudy = await getCaseStudy(slug);
  const headings = caseStudy?.headings ?? [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to projects
          </Link>

          <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-9">
              <p className={`${LABEL} text-primary`}>
                {project.freelance ? "Freelance Case Study" : "Case Study"}
              </p>
              <h1 className="mt-5 text-4xl md:text-5xl font-bold text-balance leading-tight">
                {project.tagline ?? project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Right meta rail */}
            <div className="mt-8 lg:col-span-3 lg:mt-1">
              <dl className="border-t border-border font-mono text-xs">
                <div className="flex items-center justify-between gap-4 border-b border-border py-2.5">
                  <dt className={LABEL}>Year</dt>
                  <dd className="text-foreground">{project.date}</dd>
                </div>
                {caseStudy && (
                  <div className="flex items-center justify-between gap-4 border-b border-border py-2.5">
                    <dt className={LABEL}>Read</dt>
                    <dd className="text-foreground">{caseStudy.readingTime}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between gap-4 border-b border-border py-2.5">
                  <dt className={LABEL}>Status</dt>
                  <dd className="text-foreground">
                    {toTitleCase(project.status)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Role / Timeline / Stack */}
          <div className="mt-10 border-t border-border pt-6">
            <dl className="grid gap-6 sm:grid-cols-3">
              <div>
                <dt className={LABEL}>Role</dt>
                <dd className="mt-2 text-sm text-foreground">
                  {project.role ?? "Developer"}
                </dd>
              </div>
              <div>
                <dt className={LABEL}>Timeline</dt>
                <dd className="mt-2 text-sm text-foreground">
                  {project.timeline ?? project.date}
                </dd>
              </div>
              <div>
                <dt className={LABEL}>Stack</dt>
                <dd className="mt-2 text-sm text-foreground">
                  {project.technologies.join(", ")}
                </dd>
              </div>
            </dl>

            {(project.demo || project.github) && (
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="group inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="group inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source code
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {project.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border mb-12">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
              priority
            />
          </div>
        )}

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <article className="prose prose-invert min-w-0 max-w-none lg:col-span-8">
            {caseStudy ? (
              caseStudy.content
            ) : (
              <>
                <h2>Overview</h2>
                <p>{project.description}</p>
                <h2>Key Features</h2>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </article>

          {/* On this page */}
          {headings.length > 0 && (
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24">
                <p className={`${LABEL} mb-4`}>On this page</p>
                <ul className="space-y-2.5 border-l border-border">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="-ml-px block border-l border-transparent pl-4 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 border-t border-border pt-12 text-center">
          <p className={`${LABEL} text-primary`}>Let&apos;s talk</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold">
            Interested in working together?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            I'm open to freelance work and interesting collaborations. Tell me
            what you're building.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
