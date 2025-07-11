"use client";
import Link from "next/link";
import { Code, Database, Mail, Rocket, Server, Terminal } from "lucide-react";
import { MorphSvg } from "@/components/morph/morphSvg";

import Circle from "@/components/morph/morph1/circle";
import Triangle from "@/components/morph/morph1/triangle";
import Square from "@/components/morph/morph1/square";
import Hexagon from "@/components/morph/morph1/hexagon";

import Building from "@/components/morph/morph2/building";
import Car from "@/components/morph/morph2/car";
import WalkingDog from "@/components/morph/morph2/walkingDog";
import House from "@/components/morph/morph2/house";

import Atom from "@/components/morph/morph3/atom";
import Flower from "@/components/morph/morph3/flower";
import Globe from "@/components/morph/morph3/globe";
import Entina from "@/components/morph/morph3/entina";

import IceCream from "@/components/morph/morph4/iceCream";
import Pizza from "@/components/morph/morph4/pizza";
import Dinner from "@/components/morph/morph4/dinner";
import Burger from "@/components/morph/morph4/burger";

import Linkedin from "@/assets/linkedin.svg";
import Github from "@/assets/github.svg";

const skills = [
  { name: "Python", level: 100 },
  { name: "Go", level: 90 },
  { name: "Rust", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 75 },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden select-none ">
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
          <p className="text-2xl max-w-4xl text-center text-muted-foreground mb-12">
            Software Engineer passionate about{" "}
            <span className="text-green-500">system-level programming</span>,
            clean code, and building performant web applications with
            <span className="text-blue-600"> Go</span>,
            <span className="text-orange-500"> Rust</span>, and modern web
            technologies.
          </p>

          <div className="flex gap-10 items-center mb-16">
            <Link
              href={"/projects"}
              className="text-primary-foreground text-gradiant-primary text-sm flex justify-center border-4 border-primary border-text-gradiant-primary gap-4 px-8 py-4 rounded-full font-medium shadow-2xl shadow-primary hover:scale-105 transition-transform delay cursor-none bg-gradient-to-r from-primary/80 to-primary"
            >
              <Rocket className="animate-bounce delay-800" />
              <span>View My Work</span>
            </Link>
            <Link
              href={"/contact"}
              className="flex gap-4 justify-center bg-secondary/90 border-4 border-border font-medium px-8 py-4 text-sm rounded-full hover:scale-105 transition-transform delay cursor-none"
            >
              <Rocket className="animate-bounce delay-800" />
              <span className="text-secondary-foreground">Get in Touch</span>
            </Link>
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
          <div className="flex gap-6 mb-30 p-4">
            <Github className="text-muted-foreground size-9 hover:text-primary " />
            <Linkedin className="text-muted-foreground size-9 hover:text-primary" />
            <Mail className="text-muted-foreground size-9 hover:text-primary  " />
          </div>
        </div>
        <div className="flex gap-17 absolute h-screen w-screen left-0 right-0 bottom-0 top-130 -z-50">
          {Array.from({ length: 15 }).map((_, i) => {
            const index = i + 1;
            const shapes = [
              [Circle, Triangle, Square, Hexagon][i % 4],
              [Building, Car, WalkingDog, House][i % 4],
              [Atom, Flower, Globe, Entina][i % 4],
              [IceCream, Pizza, Dinner, Burger][i % 4],
            ];
            const ids = [
              `morph-${index}-1`,
              `morph-${index}-2`,
              `morph-${index}-3`,
              `morph-${index}-4`,
            ];
            return (
              <MorphSvg
                key={index}
                shapes={shapes}
                ids={ids}
                duration={7000}
                className={`size-15 anim anim-${index}`}
              />
            );
          })}
        </div>
      </section>
      <section className="py-24 relative">
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
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-primary text-gradient-primary text-5xl font-bold mb-5">
              Featured Projects
            </h2>
            <span className="h-2 w-50 bg-primary rounded-full "></span>
            <h3 className="text-xl p-4 text-muted-foreground ">
              Get to know the person behind the code
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
