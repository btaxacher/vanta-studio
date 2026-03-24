"use client";

import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'python' | 'anthropic' | 'docker' | 'supabase' | 'azure' | 'git';

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
  anthropic: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0L0 20.48h3.602l1.375-3.615h6.749l1.375 3.615h3.602L10.133 3.52H6.57zm1.782 10.295l1.782-4.687 1.782 4.687H8.35z" fill="#D4A27F"/>
      </svg>
    ),
    color: '#D4A27F'
  },
  docker: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.187.186v1.887c0 .102.084.185.187.185zm-2.954-5.43h2.118a.186.186 0 0 0 .187-.185V3.576a.186.186 0 0 0-.187-.186h-2.118a.186.186 0 0 0-.187.186v1.887c0 .102.084.185.187.185zm0 2.716h2.118a.187.187 0 0 0 .187-.186V6.29a.187.187 0 0 0-.187-.186h-2.118a.187.187 0 0 0-.187.186v1.887c0 .102.084.186.187.186zm-2.93 0h2.12a.186.186 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.186h-2.12a.186.186 0 0 0-.184.186v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.186.186 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.187.187 0 0 0-.187.186v1.887c0 .102.084.185.187.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.083.185.185.185zm-2.964 0h2.119a.186.186 0 0 0 .185-.185V9.006a.186.186 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185zm-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.082.185.185.185zM23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.72 3.13 1.13 5.312 1.13 .983 0 1.978-.098 2.96-.287a11.385 11.385 0 0 0 3.315-1.287 8.71 8.71 0 0 0 2.339-2.033c1.087-1.305 1.738-2.768 2.214-4.037h.192c1.186 0 1.918-.475 2.32-.869.265-.254.478-.56.625-.9l.087-.257-.207-.157z" fill="#2496ED"/>
      </svg>
    ),
    color: '#2496ED'
  },
  supabase: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M13.684 21.942c-.533.696-1.636.2-1.621-.728l.215-13.254h8.911c1.614 0 2.501 1.874 1.48 3.127L13.684 21.942z" fill="#3ECF8E"/>
        <path d="M10.316 2.058c.533-.696 1.636-.2 1.621.728L11.72 16.04H2.81c-1.614 0-2.501-1.874-1.48-3.127L10.316 2.058z" fill="#3ECF8E" fillOpacity="0.5"/>
      </svg>
    ),
    color: '#3ECF8E'
  },
  azure: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M13.05 4.24L6.56 18.05l-4.27.74L8.72 4.24h4.33zm-2.24 5.15L17.14 19.76H4.46l.28-.5 6.07-9.87zm2.93-5.15l3.98 14.07.28.5-8.89.01 7.88-14.07-3.25-.51z" fill="#0089D6"/>
      </svg>
    ),
    color: '#0089D6'
  },
  git: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.66 2.66a1.838 1.838 0 1 1-1.103 1.073l-2.48-2.48v6.53a1.838 1.838 0 1 1-1.514-.076V8.762a1.838 1.838 0 0 1-.998-2.41L7.629 3.623.453 10.798a1.545 1.545 0 0 0 0 2.187l10.48 10.48a1.545 1.545 0 0 0 2.186 0l10.427-10.427a1.545 1.545 0 0 0 0-2.188" fill="#F05032"/>
      </svg>
    ),
    color: '#F05032'
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
  // Inner Orbit: Python, Anthropic/Claude, Docker
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
    id: 'anthropic',
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: 'anthropic',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'Anthropic / Claude'
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
  // Outer Orbit: Azure, Supabase, Git
  {
    id: 'azure',
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: 'azure',
    phaseShift: 0,
    glowColor: 'purple',
    label: 'Azure'
  },
  {
    id: 'supabase',
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: 'supabase',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'Supabase'
  },
  {
    id: 'git',
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: 'git',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'Git'
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
