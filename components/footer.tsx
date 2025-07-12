"use client";

import Link from "next/link";
import Github from "@/assets/github.svg";
import Linkedin from "@/assets/linkedin.svg";
import { Mail, Twitter, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dhruvakushwaha",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dhruvakushwaha",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/dhruvakushwaha",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@dhruvakushwaha.dev",
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 glass-card border-0 border-t border-primary backdrop-blur-md">
      {/* Ocean wave decoration at top */}
      <div className="absolute top-0 left-0 w-full h-1  opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="text-2xl">🌊</span>
              About
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital
              experiences. Currently building scalable web applications and
              exploring new technologies.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              Quick Links
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <Button className="mt-4" variant="footer" size="sm" asChild>
              <Link href="/about">
                View all skills
                <ExternalLink className="size-3" />
              </Link>
            </Button>
          </div>

          {/* Current Status & Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="text-2xl">📡</span>
              Current Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  Building next-gen web apps
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  Learning AI/ML integration
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  Open to collaborations
                </span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3">
                Connect with me:
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    asChild
                    variant="ghost"
                    size="sm"
                    className="hover:bg-accent/20 hover:scale-110 transition-all duration-200"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Dhruva Kushwaha.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>and</span>
              <span className="text-primary">Next.js</span>
            </div>

            <Separator orientation="vertical" className="h-4 bg-border/50" />

            <Button variant="footer" size="sm" asChild>
              <Link href="/contact">Let's work together</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
