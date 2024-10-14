"use client";

import React from "react";
import { motion } from "framer-motion";

interface CircularDotsLoaderProps {
  size?: number;
  color?: string;
  speed?: number;
}

export default function CircularDotsLoader({
  size = 48,
  color = "#3B82F6",
  speed = 1.5,
}: CircularDotsLoaderProps) {
  const dotSize = size / 5;
  const dotVariants = {
    animate: (i: number) => ({
      scale: [0.5, 1, 0.5],
      opacity: [0.25, 1, 0.25],
      rotate: 360,
      transition: {
        duration: speed,
        repeat: Infinity,
        delay: (i * speed) / 3,
        ease: "easeInOut",
      },
    }),
  };

  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div role="status" className="flex items-center justify-center">
      <span className="sr-only">Loading...</span>
      <motion.div
        className="relative"
        style={{ width: size, height: size }}
        variants={containerVariants}
        animate="animate"
      >
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
              transformOrigin: `${size / 2}px ${size / 2}px`,
            }}
            variants={dotVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </motion.div>
    </div>
  );
}
