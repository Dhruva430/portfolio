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
    <header className="top-0 left-0 right-0 z-50 border bg-black/20">
      <div className="px-4 py-4 flex  items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 cursor-pointer group">
          <Code />
          <div className="flex flex-col">
            <span className="text-3xl">Dhruva</span>
            <span className="text-xs">Software Engineer</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-4 border border-white/10 rounded-full p-2 backdrop-blur-sm">
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
                "flex items-center space-x-2 px-4 py-2 hover:bg-muted/30 hover:text-muted-foreground rounded-xl transition-all duration-250 cursor-pointer text-white/70 text-sm font-medium",
                isActive(item.href) && "border border-green-500 text-green-500"
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
