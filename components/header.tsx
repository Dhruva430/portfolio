"use client";
import React from "react";
import { Code } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 left-0 right-0 z-50  border-b border-muted-foreground/10 bg-black/80">
      <div className="px-4 py-4 flex  items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 group">
          <div className="text-primary-foreground bg-primary p-2 rounded-full">
            <Code className="size-6 animate-oscillate" />
          </div>

          <Link href={"/"} className="cursor-none flex flex-col">
            <span className="text-3xl text-primary text-gradient-primary">
              Dhruva
            </span>
            <span className="text-xs">Software Engineer</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4  p-2 backdrop-blur-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                "flex items-center space-x-2 px-4 py-2 hover:bg-muted/15 hover:text-foreground rounded-xl transition-all duration-100 text-white/70 text-sm font-medium cursor-none",
                isActive(item.href) && " bg-primary/20 text-primary"
              )}
            >
              <span className="hover:animate-opacity-fade-out">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
