"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamPath {
  path: string;
  gradientConfig: {
    initial: {
      x1: string;
      x2: string;
      y1: string;
      y2: string;
    };
    animate: {
      x1: string | string[];
      x2: string | string[];
      y1: string | string[];
      y2: string | string[];
    };
    transition?: {
      duration?: number;
      repeat?: number;
      repeatType?: string;
      ease?: string;
      repeatDelay?: number;
      delay?: number;
    };
  };
  connectionPoints?: Array<{
    cx: number;
    cy: number;
    r: number;
  }>;
}

const defaultBeams: BeamPath[] = [
  {
    path: "M100 350C150 200 300 200 400 220C500 240 600 100 758 100",
    gradientConfig: {
      initial: { x1: "-10%", x2: "-20%", y1: "-10%", y2: "-20%" },
      animate: { x1: ["-10%", "120%"], x2: ["-20%", "110%"], y1: ["-10%", "120%"], y2: ["-20%", "110%"] },
      transition: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 0, delay: 0 },
    },
    connectionPoints: [{ cx: 100, cy: 350, r: 4 }, { cx: 758, cy: 100, r: 4 }],
  },
  {
    path: "M100 100C200 250 400 300 500 250C600 200 700 300 758 350",
    gradientConfig: {
      initial: { x1: "-10%", x2: "-20%", y1: "-10%", y2: "-20%" },
      animate: { x1: ["-10%", "120%"], x2: ["-20%", "110%"], y1: ["-10%", "120%"], y2: ["-20%", "110%"] },
      transition: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 0, delay: 1 },
    },
    connectionPoints: [{ cx: 100, cy: 100, r: 4 }, { cx: 758, cy: 350, r: 4 }],
  },
  {
    path: "M100 220C250 100 500 350 758 220",
    gradientConfig: {
      initial: { x1: "-10%", x2: "-20%", y1: "-10%", y2: "-20%" },
      animate: { x1: ["-10%", "120%"], x2: ["-20%", "110%"], y1: ["-10%", "120%"], y2: ["-20%", "110%"] },
      transition: { duration: 3.5, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 0, delay: 0.5 },
    },
    connectionPoints: [{ cx: 100, cy: 220, r: 4 }, { cx: 758, cy: 220, r: 4 }],
  },
];

interface PulseBeamsProps {
  children?: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
  beams?: BeamPath[];
  width?: number;
  height?: number;
  baseColor?: string;
  accentColor?: string;
  gradientColors?: {
    start: string;
    middle: string;
    end: string;
  };
}

export const PulseBeams = ({
  children,
  className,
  background,
  beams = defaultBeams,
  width = 858,
  height = 434,
  baseColor = "var(--slate-800)",
  accentColor = "var(--slate-600)",
  gradientColors,
}: PulseBeamsProps) => {
  return (
    <div
      className={cn(
        "w-full h-screen relative flex items-center justify-center antialiased overflow-hidden",
        className
      )}
    >
      {background}
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs
          beams={beams}
          width={width}
          height={height}
          baseColor={baseColor}
          accentColor={accentColor}
          gradientColors={gradientColors}
        />
      </div>
    </div>
  );
};

interface SVGsProps {
  beams: BeamPath[];
  width: number;
  height: number;
  baseColor: string;
  accentColor: string;
  gradientColors?: {
    start: string;
    middle: string;
    end: string;
  };
}

const SVGs = ({ beams, width, height, baseColor, accentColor, gradientColors }: SVGsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      {beams.map((beam, index) => (
        <React.Fragment key={index}>
          <path
            d={beam.path}
            stroke={baseColor}
            strokeWidth="1"
          />
          <path
            d={beam.path}
            stroke={`url(#grad${index})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {beam.connectionPoints?.map((point, pointIndex) => (
            <circle
              key={`${index}-${pointIndex}`}
              cx={point.cx}
              cy={point.cy}
              r={point.r}
              fill={baseColor}
              stroke={accentColor}
            />
          ))}
        </React.Fragment>
      ))}

      <defs>
        {beams.map((beam, index) => (
          <motion.linearGradient
            key={index}
            id={`grad${index}`}
            gradientUnits="userSpaceOnUse"
            initial={beam.gradientConfig.initial}
            animate={beam.gradientConfig.animate}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            transition={beam.gradientConfig.transition as any}
          >
            <GradientColors colors={gradientColors} />
          </motion.linearGradient>
        ))}
      </defs>
    </svg>
  );
};

const GradientColors = ({ colors = {
  start: "#3ca2fa",
  middle: "#9333EA",
  end: "#06B6D4"
} }: { colors?: { start: string; middle: string; end: string } }) => {
  return (
    <>
      <stop offset="0%" stopColor={colors.start} stopOpacity="0" />
      <stop offset="20%" stopColor={colors.start} stopOpacity="1" />
      <stop offset="50%" stopColor={colors.middle} stopOpacity="1" />
      <stop offset="100%" stopColor={colors.end} stopOpacity="0" />
    </>
  );
};

export { type BeamPath, type PulseBeamsProps };
