import Link from "next/link";
import {
  Code,
  Database,
  Mail,
  Rocket,
  Server,
  Terminal,
  ArrowRight,
} from "lucide-react";

import { GITHUB_URL } from "@/data/constants";
import { LINKEDIN_URL } from "@/data/constants";
import { MAIL_ADDRESS } from "@/data/constants";
import Linkedin from "@/assets/linkedin.svg";
import Github from "@/assets/github.svg";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getProjects } from "./project/utils";
import { Button } from "@/components/ui/button";
import { toTitleCase } from "@/lib/utils";
import MorphHandler from "@/components/morph/morph-handler";

import { getBlogs } from "./blog/utils";
const skills = [
  { name: "Python", level: 100 },
  { name: "Go", level: 90 },
  { name: "Rust", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 75 },
];

function Hero() {
  return (
    <section className=" overflow-hidden select-none   mb-33 ">
      <div className="max-w-7xl mx-auto flex  items-center flex-col ">
        <div className="flex items-end relative mt-30">
          <h2 className="text-4xl font-mono font-bold">whoami</h2>
          <span className="h-1 w-4 animate-blink absolute bg-foreground right-0 top-6 translate-x-full"></span>
        </div>

        <h1 className="text-7xl font-bold text-gradient-primary p-2 text-primary ">
          Dhruva Kushwaha
        </h1>
        <p className="text-muted-foreground text-xl font-mono my-3">
          Software Engineer | Full Stack Developer | Open Source Enthusiast
        </p>
        <p className="text-2xl max-w-4xl text-center text-muted-foreground mb-12 ">
          Software Engineer passionate about{" "}
          <span className="text-green-500">system-level programming</span>,
          clean code, and building performant web applications with
          <span className="text-blue-600"> Go</span>,
          <span className="text-orange-500"> Rust</span>, and modern web
          technologies.
        </p>

        <div className="flex gap-10 items-center mb-16">
          <Button variant="flicker" size={"xl"} asChild>
            <Link href={"/projects"}>
              <Rocket className="animate-bounce delay-800" />
              View my Work
            </Link>
          </Button>
          <Button variant={"secondaryFlicker"} size={"secondaryXL"} asChild>
            <Link href={"/contact"}>
              <Rocket className="animate-bounce delay-800" />
              <span className="text-secondary-foreground">Get in Touch</span>
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-4">
          {[
            { value: "10+", label: "Projects" },
            { value: "5+", label: "Languages" },
            { value: "2+", label: "Year of Experience" },
            { value: "2+", label: "Open Source Contributions" },
          ].map((item) => (
            <div className="text-center" key={item.label}>
              <div className="text-3xl font-bold text-primary mb-2">
                {item.value}
              </div>
              <div className="text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 p-4">
          <Github
            href={GITHUB_URL}
            className="text-muted-foreground size-9 hover:text-primary "
          />
          <Linkedin
            href={LINKEDIN_URL}
            className="text-muted-foreground size-9 hover:text-primary"
          />
          <Mail
            href={MAIL_ADDRESS}
            className="text-muted-foreground size-9 hover:text-primary  "
          />
        </div>
      </div>
      <div className="flex gap-17 fixed left-0 right-0 bottom-0 scale-230 top-200 h-screen w-screen max-w-7xl mx-auto -z-50">
        <MorphHandler />
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="py-24 relative mb-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-primary text-gradient-primary text-5xl font-bold mb-5">
            ABOUT ME
          </h2>
          <span className="h-2 w-50 bg-primary rounded-full "></span>
          <h3 className="text-xl p-4 text-muted-foreground ">
            Get to know the person behind the code
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 items-center ">
          <div className="grid grid-cols-2 gap-2">
            {[
              {
                icon: <Code />,
                title: "Frontend",
                description: "React, Next.js, TypeScript",
              },
              {
                icon: <Server />,
                title: "Backend",
                description: "Go, Rust, Node.js",
              },
              {
                icon: <Database />,
                title: "Database",
                description: "PostgreSQL, MongoDB",
              },
              {
                icon: <Terminal />,
                title: "System",
                description: "Linux, Docker, AWS",
              },
            ].map((item) => (
              <div
                className="flex items-center gap-3 border border-muted-background rounded-xl p-4 "
                key={item.title}
              >
                <div className="p-3 bg-primary/20 text-primary rounded-xl w-12 h-12">
                  {item.icon}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <span className="text-muted-foreground">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className=" space-y-4">
            <h1 className="text-foreground text-4xl font-bold">
              Passionate Developer with interest in
              <span> Backend Technologies</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              I am a passionate software engineer with a strong foundation in
              system-level programming and web development. I love building
              scalable, efficient, and user-friendly applications that solve
              real-world problems.
            </p>
            <p className="text-muted-foreground text-lg">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing my knowledge
              through blog posts and talks.
            </p>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

async function Portfolio() {
  const allProjects = await getProjects();
  const featuredProjects = allProjects.filter((project) => project.featured);
  return (
    <section className="py-24 bg-page-background/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-primary text-gradient-primary text-5xl font-bold mb-5">
            Featured Projects
          </h2>
          <span className="h-2 w-50 bg-primary rounded-full "></span>
          <h3 className="text-xl p-4 text-muted-foreground ">
            A showcase of my skills in web development, system programming, and
            open-source contributions.
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card card-hover group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto font-medium group-hover:text-primary"
                          asChild
                        >
                          <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                          </Link>
                        </Button>
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {toTitleCase(project.status)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="xl" variant="flicker" className="" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
async function Blog() {
  const blogs = await getBlogs();
  const latestPosts = blogs
    .filter((post) => post.published)
    .sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
    .slice(0, 3);
  return (
    <section className="py-24 bg-page-background/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-primary text-gradient-primary text-5xl font-bold mb-5">
            Latest Insight
          </h2>
          <span className="h-2 w-50 bg-primary rounded-full "></span>
          <h3 className="text-xl p-4 text-muted-foreground ">
            Get to know the person behind the code
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-30">
          {latestPosts.map((post, index) => (
            <Card
              key={post.title}
              className="glass-card card-hover group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.readingTime}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {post.pubDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-medium group-hover:text-primary"
                  asChild
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="xl" variant="flicker" className="" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Blog />
    </>
  );
}
