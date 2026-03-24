"use client";

import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'python' | 'openai' | 'docker' | 'nodejs' | 'aws' | 'postgresql';

type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  python: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.35-3.403h5.766s3.24.052 3.24-3.132V3.19S18.28 0 11.914 0zM8.708 1.84a1.048 1.048 0 1 1 0 2.096 1.048 1.048 0 0 1 0-2.096z" fill="#3776AB"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.403-3.35 3.403H9.451s-3.24-.052-3.24 3.132v5.337S5.72 24 12.086 24zm3.206-1.84a1.048 1.048 0 1 1 0-2.096 1.048 1.048 0 0 1 0 2.096z" fill="#FFD43B"/>
      </svg>
    ),
    color: '#3776AB'
  },
  openai: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.05 6.05 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#f5f5f7"/>
      </svg>
    ),
    color: '#f5f5f7'
  },
  docker: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.187.186v1.887c0 .102.084.185.187.185zm-2.954-5.43h2.118a.186.186 0 0 0 .187-.185V3.576a.186.186 0 0 0-.187-.186h-2.118a.186.186 0 0 0-.187.186v1.887c0 .102.084.185.187.185zm0 2.716h2.118a.187.187 0 0 0 .187-.186V6.29a.187.187 0 0 0-.187-.186h-2.118a.187.187 0 0 0-.187.186v1.887c0 .102.084.186.187.186zm-2.93 0h2.12a.186.186 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.186h-2.12a.186.186 0 0 0-.184.186v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.186.186 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.187.187 0 0 0-.187.186v1.887c0 .102.084.185.187.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.083.185.185.185zm-2.964 0h2.119a.186.186 0 0 0 .185-.185V9.006a.186.186 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185zm-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.082.185.185.185zM23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.72 3.13 1.13 5.312 1.13 .983 0 1.978-.098 2.96-.287a11.385 11.385 0 0 0 3.315-1.287 8.71 8.71 0 0 0 2.339-2.033c1.087-1.305 1.738-2.768 2.214-4.037h.192c1.186 0 1.918-.475 2.32-.869.265-.254.478-.56.625-.9l.087-.257-.207-.157z" fill="#2496ED"/>
      </svg>
    ),
    color: '#2496ED'
  },
  nodejs: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.548-.19.659-.233 1.244-.564.062-.034.142-.021.205.015l2.255 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.956a.28.28 0 0 0-.137-.242l-8.791-5.07a.278.278 0 0 0-.271 0L3.175 6.714a.28.28 0 0 0-.138.24v10.153a.27.27 0 0 0 .137.236l2.41 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.11.255.253v10.058c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.309-1.33A1.85 1.85 0 0 1 1.453 17.1V6.948c0-.678.362-1.308.953-1.647L11.2.225a1.931 1.931 0 0 1 1.846 0l8.794 5.076c.588.34.952.97.952 1.647V17.1c0 .68-.364 1.307-.952 1.649L13.046 23.82c-.28.16-.607.247-.924.247l-.124-.067z" fill="#339933"/>
      </svg>
    ),
    color: '#339933'
  },
  aws: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.374 6.18 6.18 0 0 1-.248-.467c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104-.296.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.024c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.152c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.549.549 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.216-.151-.248-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415a3.48 3.48 0 0 1 1.005-.144c.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.87.44l1.133.358c.574.184.99.44 1.237.767.248.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" fill="#FF9900"/>
        <path d="M21.725 16.92C19.16 18.89 15.38 19.94 12.17 19.94c-4.478 0-8.51-1.657-11.56-4.414-.24-.216-.025-.511.263-.343 3.294 1.917 7.37 3.07 11.582 3.07 2.838 0 5.96-.59 8.834-1.81.431-.192.798.279.383.527l.053-.05zM22.853 15.607c-.327-.42-2.167-.199-2.996-.1-.25.032-.29-.19-.063-.343 1.468-1.03 3.875-.734 4.157-.39.28.352-.073 2.788-1.45 3.95-.212.176-.414.08-.32-.152.311-.775 1.005-2.51.672-2.965z" fill="#FF9900"/>
      </svg>
    ),
    color: '#FF9900'
  },
  postgresql: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.011.21.025.424.05.644.075.67.237 1.452.652 2.108.096.15.2.3.322.44l.002.003c.382.44.881.696 1.47., .538-.064 1.072-.321 1.553-.6.937-.543 1.738-1.29 2.262-1.81a.825.825 0 0 0 .064-.076c.458-.594.803-1.244 1.042-1.907.24-.662.378-1.333.441-1.964.031-.31.044-.595.042-.852 0-.064-.002-.127-.005-.188a10.457 10.457 0 0 0 .706-.58c.637-.58 1.252-1.312 1.723-2.225.47-.913.803-2.022.856-3.413.025-.65-.039-1.238-.18-1.772-.14-.534-.357-1.014-.636-1.448a10.3 10.3 0 0 0-.148-.22l-.003-.004C20.882 1.1 19.504.27 17.773.07a7.488 7.488 0 0 0-.645-.07z" fill="#336791"/>
        <path d="M12 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="white" fillOpacity="0.8"/>
      </svg>
    ),
    color: '#336791'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit: Python, OpenAI, Docker
  {
    id: 'python',
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: 'python',
    phaseShift: 0,
    glowColor: 'cyan',
    label: 'Python'
  },
  {
    id: 'openai',
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: 'openai',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'OpenAI'
  },
  {
    id: 'docker',
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: 'docker',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'Docker'
  },
  // Outer Orbit: Node.js, AWS, PostgreSQL
  {
    id: 'nodejs',
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: 'nodejs',
    phaseShift: 0,
    glowColor: 'purple',
    label: 'Node.js'
  },
  {
    id: 'aws',
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: 'aws',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'AWS'
  },
  {
    id: 'postgresql',
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: 'postgresql',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'PostgreSQL'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'cyan', delay: 0 },
    { radius: 180, glowColor: 'purple', delay: 1.5 }
  ];

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-[#06B6D4]/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-[#9333EA]/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </main>
  );
}

export { OrbitingSkills };
