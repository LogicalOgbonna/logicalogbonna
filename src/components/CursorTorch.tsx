'use client';

import { useEffect, useState } from 'react';

export function CursorTorch() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
      
      // Hide/show default cursor based on theme
      if (dark) {
        document.body.style.cursor = 'none';
      } else {
        document.body.style.cursor = '';
      }
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = '';
      observer.disconnect();
    };
  }, []);

  if (!isDark || !isVisible) return null;

  return (
    <>
      {/* Ambient glow that follows cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(
              600px circle at ${position.x}px ${position.y}px,
              rgba(251, 191, 36, 0.06),
              transparent 40%
            )
          `,
        }}
      />
      
      {/* The torch light cursor */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: 40,
            height: 40,
            left: -20,
            top: -20,
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0) 70%)',
            filter: 'blur(4px)',
          }}
        />
        {/* Middle glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: 24,
            height: 24,
            left: -12,
            top: -12,
            background: 'radial-gradient(circle, rgba(253, 224, 71, 0.6) 0%, rgba(251, 191, 36, 0.2) 60%, transparent 100%)',
            filter: 'blur(2px)',
          }}
        />
        {/* Core light */}
        <div
          className="absolute rounded-full"
          style={{
            width: 8,
            height: 8,
            left: -4,
            top: -4,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(253, 224, 71, 0.8) 50%, rgba(251, 191, 36, 0.4) 100%)',
            boxShadow: '0 0 10px 2px rgba(251, 191, 36, 0.6), 0 0 20px 4px rgba(251, 191, 36, 0.3)',
          }}
        />
      </div>
    </>
  );
}

