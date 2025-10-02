import { Button } from '@/components/ui/button';
import { Play, Zap } from 'lucide-react';
import heroMockup from '@/assets/hero-vr-mockup.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Next-Gen VR Training Platform</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Train. Adapt.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Survive.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Lumora prepares the next generation for real-world disasters through 
              immersive VR experiences, AI-powered guidance, and gamified learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Start Training
                <Zap className="ml-2 w-4 h-4 group-hover:animate-pulse" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">2,847</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">94.7%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Scenarios</div>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img
                src={heroMockup}
                alt="VR Training Interface"
                className="w-full rounded-2xl shadow-2xl glow-purple"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
