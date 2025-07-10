import React from "react";

export default function Triangle({ className }: { className?: string }) {
  return (
    <path
      className={className}
      id="triangle"
      fill="currentColor"
      d="M75,93.30127 C50,78.86751 25,64.43376 0,50 25,35.56624 50,21.13249 75,6.69873 75,35.56624 75,64.43376 75,93.30127 z"
    ></path>
  );
}
