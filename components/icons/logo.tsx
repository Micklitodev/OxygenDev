import React from "react";
import Image from "next/image";

type LogoProps = {
  size?: number | null;
};

export default function LogoIcon({ size }: LogoProps) {
  let h = 100;
  let w = 100;

  if (size) {
    h = size;
    w = size;
  }

  return (
    <Image
      className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
      height={h}
      width={w}
      src="/oxygendevlogo.svg"
      alt="logo"
      priority
    />
  );
}
