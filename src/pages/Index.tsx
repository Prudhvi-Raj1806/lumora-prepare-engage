import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import CinematicOrb from '@/components/CinematicOrb';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Scenarios from '@/components/Scenarios';
import AIGuides from '@/components/AIGuides';
import Analytics from '@/components/Analytics';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import StartDialog from '@/components/StartDialog';

const Index = () => {
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [showCinematic, setShowCinematic] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleStart = () => {
    setShowStartDialog(false);
    setShowCinematic(true);
  };

  const handleCinematicComplete = () => {
    setShowCinematic(false);
    setShowContent(true);
  };

  const handleScenarioStart = () => {
    setShowCinematic(true);
    setShowContent(false);
  };

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setShowStartDialog(false);
      setShowContent(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      
      {/* Start Dialog */}
      <StartDialog open={showStartDialog} onStart={handleStart} />

      {/* Cinematic Orb Animation */}
      {showCinematic && <CinematicOrb onComplete={handleCinematicComplete} />}

      {/* Main Content */}
      {showContent && (
        <div className="animate-fade-in">
          <Header />
          <main>
            <Hero />
            <Features />
            <Scenarios onStartScenario={handleScenarioStart} />
            <AIGuides />
            <Analytics />
            <Testimonials />
            <Team />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
