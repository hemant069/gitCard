"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface DownloadAnimationBtnProps {
  size?: number;
  color?: string;
  speed?: number;
}

function DownloadAnimationBtn({
  size = 24,
  color = "#ffffff",
  speed = 1.5,
}: DownloadAnimationBtnProps) {
  const dotSize = size / 8;
  const radius = size / 2 - dotSize / 2;

  const dotVariants = {
    animate: (i: number) => ({
      scale: [0.5, 1, 0.5],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: speed,
        repeat: Infinity,
        delay: (i * speed) / 3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div role="status" className="flex items-center justify-center">
      <span className="sr-only">Loading...</span>
      <div className="relative" style={{ width: size, height: size }}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: color,
              top: size / 2 - dotSize / 2,
              left: size / 2 - dotSize / 2,
              transformOrigin: `${radius}px center`,
              transform: `rotate(${i * 120}deg) translateX(${radius}px)`,
            }}
            variants={dotVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>
    </div>
  );
}
