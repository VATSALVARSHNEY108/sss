"use client";

import Image from "next/image";
import { useState, useRef } from "react";

type TeamMemberCardProps = {
  name: string;
  title: string;
  imgSrc: string;
  linkedin: string;
  width?: number;
  height?: number;
  offsetX?: number;
  offsetY?: number;
};

export default function TeamMemberCard({ name, title, imgSrc, linkedin, width, height, offsetX, offsetY: propOffsetY }: TeamMemberCardProps) {
  const presets = {
    "Vinayak Pandey": { scale: 1.2, offsetY: 0 },
    "Tanya Ojha": { scale: 1.2, offsetY: 0 },
    "Vatsal Varshney": { scale: 1, offsetY: 0 },
    "Aditi Mall": { scale: 1, offsetY: 0 },
    "Shifa Parveen": { scale: 1, offsetY: 0 },
    "Raushan Singh": { scale: 1, offsetY: 0 },
  } as Record<string, { scale: number; offsetY: number }>;
  const [scale, setScale] = useState(presets[name]?.scale ?? 1);
  // Use offset from data if provided, otherwise fallback to preset
  const [offsetY, setOffsetY] = useState(propOffsetY ?? presets[name]?.offsetY ?? 0);
  const containerRef = useRef<HTMLDivElement>(null);
  // Optional custom dimensions
  const containerStyle = {
    width: width ? `${width}px` : "128px",
    height: height ? `${height}px` : "128px",
  } as React.CSSProperties;


  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.1 : -0.1;
    setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 2));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startOffset = offsetY;
    const onMouseMove = (moveEvt: MouseEvent) => {
      const diff = moveEvt.clientY - startY;
      setOffsetY(startOffset + diff);
    };
    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4 rounded-xl bg-white/5 p-4 text-center transition-shadow hover:shadow-xl"
    >
      <div
        className="team-photo relative overflow-hidden rounded-md border border-white/30 shadow-lg"
        style={{
          ...containerStyle,
          transform: `scale(${scale})`,
          transition: "transform 0.2s",
        }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        ref={containerRef}
      >
        <Image src={imgSrc} alt={name} fill style={{ objectFit: "cover", transform: `translateY(${offsetY}px) translateX(${offsetX ?? 0}px)`, transition: "transform 0.2s" }} />
      </div>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-300">{title}</p>
    </a>
  );
}
