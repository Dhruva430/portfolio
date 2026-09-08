import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Project } from "./utils";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Github from "@/assets/github.svg";
import { cn, toTitleCase } from "@/lib/utils";

const MAX_TECH = 6;
const MAX_FEATURES = 5;

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const primaryHref = project.demo ?? project.github;
  const shownTech = project.technologies.slice(0, MAX_TECH);
  const extraTech = project.technologies.length - shownTech.length;
  const shownFeatures = project.features.slice(0, MAX_FEATURES);
  const extraFeatures = project.features.length - shownFeatures.length;

  return (
    <Card
      className={cn(
        "group relative flex flex-col gap-0 overflow-hidden p-0 animate-slide-up card-hover transition-colors duration-300 hover:border-primary/40",
        project.featured && "glass-card"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Media banner (only when an image is provided) */}
      {project.image && (
        <Link
          href={primaryHref ?? "#"}
          target={primaryHref ? "_blank" : undefined}
          aria-label={`Open ${project.title}`}
          className="relative block aspect-[16/9] overflow-hidden"
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
          {project.freelance && (
            <Badge className="absolute left-3 top-3 border-0 bg-primary text-primary-foreground shadow">
              Freelance
            </Badge>
          )}
          <Badge className="absolute right-3 top-3 border border-border bg-background/70 text-foreground backdrop-blur">
            {toTitleCase(project.status)}
          </Badge>
        </Link>
      )}

      {/* Header */}
      <div className={cn("px-6 pt-5", !project.image && "pt-6")}>
        <div className="mb-2 flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {project.date}
            {project.freelance && (
              <Badge className="ml-1 border-0 bg-primary text-primary-foreground text-[10px]">
                Freelance
              </Badge>
            )}
          </span>
          {!project.image && (
            <Badge
              variant="outline"
              className="text-[10px] uppercase tracking-wide"
            >
              {toTitleCase(project.status)}
            </Badge>
          )}
        </div>
        <h3 className="mb-2 text-xl font-semibold leading-tight transition-colors group-hover:text-primary">
          {primaryHref ? (
            <Link href={primaryHref} target="_blank">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-grow flex-col gap-4 px-6 py-4">
        <div className="flex flex-wrap gap-1.5">
          {shownTech.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {extraTech > 0 && (
            <Badge variant="outline" className="text-xs">
              +{extraTech} more
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Key Features</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {shownFeatures.map((feature, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
            {extraFeatures > 0 && (
              <li className="pl-3.5 text-xs italic text-muted-foreground/70">
                + {extraFeatures} more feature{extraFeatures > 1 ? "s" : ""}
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex gap-2 border-t border-border px-6 py-4">
        {project.demo && (
          <Button size="sm" className="flex-1" asChild>
            <Link
              href={project.demo}
              target="_blank"
              aria-label="View live demo"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {project.github && (
          <Button
            size="sm"
            variant={project.demo ? "outline" : "default"}
            className="flex-1"
            asChild
          >
            <Link
              href={project.github}
              target="_blank"
              aria-label="View source on GitHub"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
