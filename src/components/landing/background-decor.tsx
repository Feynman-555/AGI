"use client";

import { useEffect, useState } from 'react';

const Dodecahedron = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  return (
    <div className={`absolute ${className}`} style={style}>
      <svg width="100" height="100" viewBox="-55 -55 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-28.91,46.77L0,50L28.91,46.77L46.77,28.91L50,0L46.77,-28.91L28.91,-46.77L0,-50L-28.91,-46.77L-46.77,-28.91L-50,0L-46.77,28.91Z" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L0,50" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L28.91,46.77" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L46.77,28.91" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L50,0" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L46.77,-28.91" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L28.91,-46.77" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L0,-50" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L-28.91,-46.77" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L-46.77,-28.91" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L-50,0" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L-46.77,28.91" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
        <path d="M0,0L-28.91,46.77" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1"/>
      </svg>
    </div>
  );
}


export function BackgroundDecor() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const shapes = [
    { size: 150, x: '10vw', y: '20vh', duration: 25 },
    { size: 50, x: '80vw', y: '10vh', duration: 30 },
    { size: 100, x: '90vw', y: '80vh', duration: 20 },
    { size: 60, x: '20vw', y: '90vh', duration: 35 },
    { size: 80, x: '50vw', y: '50vh', duration: 18 },
  ];

  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,180,216,0.15),rgba(255,255,255,0))]"></div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        .float-anim {
          animation: float linear infinite;
        }
      `}</style>

      {shapes.map((s, i) => (
        <Dodecahedron
          key={i}
          className="float-anim opacity-50"
          style={{ 
            width: s.size, 
            height: s.size, 
            left: s.x, 
            top: s.y, 
            animationDuration: `${s.duration}s`,
            animationDelay: `-${i * 5}s`
          }}
        />
      ))}
    </div>
  );
}
