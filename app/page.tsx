"use client";
import Link from "next/link";
import { Mail, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useEffect } from "react";

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

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);

    const morphs = Array.from({ length: 15 }).map((_, i) => [
      `#morph-${i + 1}-1`,
      `#morph-${i + 1}-2`,
      `#morph-${i + 1}-3`,
      `#morph-${i + 1}-4`,
    ]);

    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
    const DURATION = 3000;

    async function loop() {
      await wait(DURATION);
      console.log("Starting morphing loop");

      // 1 → 2
      morphs.forEach(([from, to]) => {
        console.log(from, to);
        gsap.to(from, {
          morphSVG: { shape: to, shapeIndex: 0 },
          duration: 2,
          ease: "power1.inOut",
          immediateRender: false,
        });
      });

      // 2 → 3
      morphs.forEach(([_, from, to]) => {
        gsap.to(from, {
          morphSVG: { shape: to, shapeIndex: 0 },
          duration: 2,
          ease: "power1.inOut",
          immediateRender: false,
        });
      });

      // 3 → 4
      morphs.forEach(([, , from, to]) => {
        gsap.to(from, {
          morphSVG: { shape: to, shapeIndex: 0 },
          duration: 2,
          ease: "power1.inOut",
          immediateRender: false,
        });
      });

      // 4 → 1
      morphs.forEach(([to, , , from]) => {
        gsap.to(from, {
          morphSVG: { shape: to, shapeIndex: 0 },
          duration: 2,
          ease: "power1.inOut",
          immediateRender: false,
        });
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }, []);

  return (
    <div className="relative overflow-hidden select-none ">
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
            className="text-primary-foreground text-gradiant-primary text-sm flex justify-center border-4 border-primary gap-4 px-8 py-4 rounded-full font-medium shadow-2xl shadow-primary hover:scale-105 transition-transform delay cursor-none bg-gradient-to-r from-primary/80 to-primary"
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
        <div className="flex gap-6 mb-10 p-4">
          <Github className="text-muted-foreground size-9 hover:text-primary " />
          <Linkedin className="text-muted-foreground size-9 hover:text-primary" />
          <Mail className="text-muted-foreground size-9 hover:text-primary  " />
        </div>
      </div>
      <div className="flex gap-17 absolute h-screen w-screen left-0 right-0 bottom-0 top-100 -z-50">
        {Array.from({ length: 15 }).map((_, i) => {
          const index = i + 1;
          const Component1 = [Circle, Triangle, Square, Hexagon][i % 4];
          const Component2 = [Building, Car, WalkingDog, House][i % 4];
          const Component3 = [Atom, Flower, Globe, Entina][i % 4];
          const Component4 = [IceCream, Pizza, Dinner, Burger][i % 4];

          return (
            <svg
              key={index}
              className={`size-15 anim anim-${index}`}
              viewBox="0 0 100 100"
            >
              <Component1 id={`morph-${index}-1`} />
              <Component2 id={`morph-${index}-2`} className="opacity-0" />
              <Component3 id={`morph-${index}-3`} className="opacity-0" />
              <Component4 id={`morph-${index}-4`} className="opacity-0" />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
