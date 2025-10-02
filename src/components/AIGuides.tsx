import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Heart, Shield, Zap } from 'lucide-react';

interface Guide {
  name: string;
  role: string;
  icon: typeof Brain;
  color: string;
  scenarios: number;
  successRate: number;
  responseTime: string;
  description: string;
}

const guides: Guide[] = [
  {
    name: 'Aurora',
    role: 'Emergency Response Specialist',
    icon: Zap,
    color: 'from-primary to-blue-500',
    scenarios: 847,
    successRate: 96.2,
    responseTime: '0.8s',
    description: 'Expert in rapid decision-making and crisis coordination',
  },
  {
    name: 'Atlas',
    role: 'Structural Safety Advisor',
    icon: Shield,
    color: 'from-secondary to-purple-500',
    scenarios: 623,
    successRate: 94.8,
    responseTime: '1.1s',
    description: 'Specialized in building safety and evacuation protocols',
  },
  {
    name: 'Mercy',
    role: 'Medical Triage Guide',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    scenarios: 1234,
    successRate: 97.1,
    responseTime: '0.6s',
    description: 'Trained in emergency medicine and patient care',
  },
  {
    name: 'Sage',
    role: 'Psychological Support',
    icon: Brain,
    color: 'from-green-500 to-teal-500',
    scenarios: 456,
    successRate: 95.5,
    responseTime: '1.0s',
    description: 'Provides emotional support and stress management',
  },
];

const AIGuides = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            AI Spirit Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your intelligent companions for every crisis scenario
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card
                key={guide.name}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${guide.color} flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
                  </div>
                  <CardTitle className="text-xl">{guide.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{guide.role}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-center text-muted-foreground">{guide.description}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Scenarios</span>
                      <span className="font-medium">{guide.scenarios}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Success Rate</span>
                      <span className="font-medium text-primary">{guide.successRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg Response</span>
                      <span className="font-medium">{guide.responseTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIGuides;
