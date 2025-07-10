"use client";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useEffect, useState } from "react";

import Circle from "@/components/morph/morph1/circle";
import Triangle from "@/components/morph/morph1/triangle";
import Square from "@/components/morph/morph1/square";
import Hexagon from "@/components/morph/morph1/hexagon";
import Building from "@/components/morph/morph2/building";
import Car from "@/components/morph/morph2/car";
import WalkingDog from "@/components/morph/morph2/walkingDog";
import House from "@/components/morph/morph2/house";

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);

    // delayed morph loop
    const morphs = [
      { from: "#circle", to: "#car" },
      { from: "#triangle", to: "#building" },
      { from: "#square", to: "#house" },
      { from: "#hexagon", to: "#walkingDog" },
    ];

    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

    (async () => {
      await wait(30000); // Wait 20s before first morph
      morphs.forEach(({ from, to }) => {
        gsap.to(from, {
          morphSVG: to,
          duration: 2,
          repeat: 0,
          yoyo: false,
          ease: "power1.inOut",
        });
      });
    })();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto  flex items-center flex-col select-none ">
        <div className="flex items-end  relative mt-30">
          <h2 className="text-4xl font-mono font-bold">whoami</h2>
          <span className="h-1 w-4 animate-blink absolute bg-foreground right-0 top-6 translate-x-full"></span>
        </div>

        <h1 className="text-7xl font-bold text-gradient-primary p-2 text-primary ">
          Dhruva Kushwaha
        </h1>
        <p className="text-muted-foreground text-lg font-mono my-3">
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

        <div className="flex gap-10 items-center ">
          <Link
            href={"/projects"}
            className=" text-primary-foreground  text-gradiant-primary text-sm flex justify-center border-4 border-primary gap-4  px-8 py-4 rounded-full font-medium shadow-2xl shadow-primary hover:scale-105 transition-transform delay cursor-none bg-gradient-to-r from-primary/80 to-primary"
            datatype="button"
          >
            <Rocket className=" animate-bounce delay-800 " />
            <span>View My Work</span>
          </Link>

          <Link
            href={"/contact"}
            className="flex gap-4 justify-center bg-secondary/90 border-4  border-border font-medium px-8 py-4 text-sm rounded-full hover:scale-105 transition-transform delay cursor-none "
            datatype="button"
          >
            <Rocket className=" animate-bounce delay-800 " />
            <span className="text-secondary-foreground">Get in Touch</span>
          </Link>
        </div>
        <div className="flex gap-17 ">
          <svg className="size-15 anim anim-1" viewBox="0 0 100 100">
            <Circle />
            <Building className="invisible " />
          </svg>
          <svg className="size-15 anim anim-2 " viewBox="0 0 100 100">
            <Triangle />
            <Car className="invisible" />
          </svg>
          <svg className="size-15 anim anim-3" viewBox="0 0 100 100">
            <Square />
            <WalkingDog className="invisible" />
          </svg>
          <svg className="size-15 anim anim-4" viewBox="0 0 100 100">
            <Hexagon />
            <House className="invisible" />
          </svg>

          <svg className="size-15 anim anim-5" viewBox="0 0 100 100">
            <Circle />
            <Building className="invisible " />
          </svg>
          <svg className="size-15 anim anim-6 " viewBox="0 0 100 100">
            <Triangle />
            <Car className="invisible" />
          </svg>
          <svg className="size-15 anim anim-7" viewBox="0 0 100 100">
            <Square />
            <WalkingDog className="invisible" />
          </svg>
          <svg className="size-15 anim anim-8" viewBox="0 0 100 100">
            <Hexagon />
            <House className="invisible" />
          </svg>
          <svg className="size-15 anim anim-9" viewBox="0 0 100 100">
            <Circle />
            <Building className="invisible " />
          </svg>
          <svg className="size-15 anim anim-10 " viewBox="0 0 100 100">
            <Triangle />
            <Car className="invisible" />
          </svg>
          <svg className="size-15 anim anim-11" viewBox="0 0 100 100">
            <Square />
            <WalkingDog className="invisible" />
          </svg>
          <svg className="size-15 anim anim-12" viewBox="0 0 100 100">
            <Hexagon />
            <House className="invisible" />
          </svg>
          <svg className="size-15 anim anim-13" viewBox="0 0 100 100">
            <Hexagon />
            <House className="invisible" />
          </svg>
          <svg className="size-15 anim anim-14" viewBox="0 0 100 100">
            <Circle />
            <Building className="invisible " />
          </svg>
          <svg className="size-15 anim anim-15" viewBox="0 0 100 100">
            <Triangle />
            <Car className="invisible" />
          </svg>
        </div>
      </div>
    </>
  );
}
