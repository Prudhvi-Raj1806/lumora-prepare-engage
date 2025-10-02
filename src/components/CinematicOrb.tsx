import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import orbImage from '@/assets/orb-core.png';

interface CinematicOrbProps {
  onComplete: () => void;
}

const CinematicOrb = ({ onComplete }: CinematicOrbProps) => {
  const orbRef = useRef<HTMLDivElement>(null);
  const trailCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    const canvas = trailCanvasRef.current;
    const container = containerRef.current;
    if (!orb || !canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setup canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Trail positions
    const trail: { x: number; y: number; alpha: number }[] = [];
    const maxTrailLength = 30;

    // Waypoints for roaming
    const waypoints = [
      { x: centerX + 200, y: centerY - 150 },
      { x: centerX - 250, y: centerY + 100 },
      { x: centerX + 150, y: centerY + 180 },
      { x: centerX - 180, y: centerY - 120 },
    ];

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      trail.forEach((point, index) => {
        const size = (index / trail.length) * 20 + 5;
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size);
        gradient.addColorStop(0, `rgba(108, 63, 207, ${point.alpha * 0.6})`);
        gradient.addColorStop(1, `rgba(108, 63, 207, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateTrail = (x: number, y: number) => {
      trail.push({ x, y, alpha: 1 });
      if (trail.length > maxTrailLength) {
        trail.shift();
      }
      // Fade out trail
      trail.forEach((point, index) => {
        point.alpha = index / trail.length;
      });
      drawTrail();
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animation
      gsap.set(orb, { scale: 3, opacity: 0 });
      setTimeout(onComplete, 300);
      return;
    }

    // Create GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 300);
      }
    });

    // Initial state
    gsap.set(orb, { x: 0, y: 0, scale: 0.95, opacity: 1 });

    // Roam through waypoints
    waypoints.forEach((point) => {
      tl.to(orb, {
        x: point.x - centerX,
        y: point.y - centerY,
        duration: 0.8,
        ease: 'sine.inOut',
        onUpdate: () => {
          const rect = orb.getBoundingClientRect();
          updateTrail(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }
      });
    });

    // Return to center
    tl.to(orb, {
      x: 0,
      y: 0,
      duration: 1.0,
      ease: 'power2.inOut',
      onUpdate: () => {
        const rect = orb.getBoundingClientRect();
        updateTrail(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    });

    // Expand and fade out
    tl.to(orb, {
      scale: 4,
      opacity: 0,
      duration: 1.6,
      delay: 0.4,
      ease: 'power2.inOut'
    });

    // Fade out trail
    tl.to(canvas, {
      opacity: 0,
      duration: 0.5
    }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <canvas
        ref={trailCanvasRef}
        className="absolute inset-0"
      />
      <div
        ref={orbRef}
        className="relative w-32 h-32"
      >
        <img
          src={orbImage}
          alt="Lumora Orb"
          className="w-full h-full animate-pulse-glow"
        />
        {/* Outer glow rings */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-ping" />
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
      </div>
    </div>
  );
};

export default CinematicOrb;
