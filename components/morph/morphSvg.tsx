import { useEffect } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

type MorphSvgProps = {
  shapes: Array<React.FC<{ className?: string; id?: string }>>;
  ids: string[];
  duration?: number;
  className?: string;
};

export function MorphSvg({
  shapes,
  ids,
  duration = 2000,
  className = "",
}: MorphSvgProps) {
  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);

    const morphs = [[ids[0], ids[1], ids[2], ids[3]]];

    const wait = (ms: number): Promise<void> =>
      new Promise((res) => setTimeout(res, ms));

    async function loop() {
      await wait(duration);
      // 1 → 2
      morphs.forEach(([from, to]) => {
        gsap.to(`#${from}`, {
          morphSVG: { shape: `#${to}`, shapeIndex: 0 },
          duration: 2,
          ease: "power1.inOut",
          immediateRender: false,
        });
      });
      // 2 → 3
      morphs.forEach(([_, from, to]) => {
        gsap.to(`#${from}`, {
          morphSVG: { shape: `#${to}`, shapeIndex: 0 },
          duration: 2,
          ease: "power1.inOut",
          immediateRender: false,
        });
      });
      // 3 → 4
      morphs.forEach(([, , from, to]) => {
        gsap.to(`#${from}`, {
          morphSVG: { shape: `#${to}`, shapeIndex: 0 },
          duration: 2,
          ease: "power1.inOut",
          immediateRender: false,
        });
      });
      // 4 → 1
      morphs.forEach(([to, , , from]) => {
        gsap.to(`#${from}`, {
          morphSVG: { shape: `#${to}`, shapeIndex: 0 },
          duration: 2,
          ease: "power1.inOut",
          immediateRender: false,
        });
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }, [ids]);

  return (
    <svg className={className} viewBox="0 0 100 100">
      {shapes.map((Shape, i) => (
        <Shape
          key={ids[i]}
          id={ids[i]}
          className={i === 0 ? "" : "opacity-0"}
        />
      ))}
    </svg>
  );
}
