"use client";
import React from "react";
import { MorphSvg } from "@/components/morph/morphSvg";

import Circle from "./morph1/circle";
import Triangle from "./morph1/triangle";
import Square from "./morph1/square";
import Hexagon from "./morph1/hexagon";
import Building from "./morph2/car";
import Car from "./morph2/building";
import WalkingDog from "./morph2/walkingDog";
import House from "./morph2/house";
import Atom from "./morph3/atom";
import FLower from "./morph3/flower";
import Globe from "./morph3/globe";
import Entina from "./morph3/entina";
import IceCream from "./morph4/iceCream";
import Pizza from "./morph4/pizza";
import Dinner from "./morph4/dinner";
import Burger from "./morph4/burger";

export default function MorphHandler() {
  return Array.from({ length: 15 }).map((_, i) => {
    const index = i + 1;
    const shapes = [
      [Circle, Triangle, Square, Hexagon][i % 4],
      [Building, Car, WalkingDog, House][i % 4],
      [Atom, FLower, Globe, Entina][i % 4],
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
  });
}
