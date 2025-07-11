import React from "react";

export default function Hexagon({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <path
      className={className}
      id={id}
      fill="currentColor"
      d="M97.6314,77.5 C81.75426,86.66667 65.87713,95.83333 50,105 34.12287,95.83333 18.24574,86.66667 2.3686,77.5 2.3686,59.16667 2.3686,40.83333 2.3686,22.5 18.24574,13.33333 34.12287,4.16667 50,-5 65.87713,4.16667 81.75426,13.33333 97.6314,22.5 97.6314,40.83333 97.6314,59.16667 97.6314,77.5 z"
    ></path>
  );
}
