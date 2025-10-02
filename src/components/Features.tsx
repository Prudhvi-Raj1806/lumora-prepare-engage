import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Gamepad2, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Spirit Guides',
    description: 'Intelligent companions that adapt to your learning style and provide real-time guidance during critical moments.',
  },
  {
    icon: Gamepad2,
    title: 'Gamified Learning',
    description: 'Earn XP, unlock achievements, and compete on leaderboards while mastering life-saving skills.',
  },
  {
    icon: Shield,
    title: 'Realistic Simulations',
    description: 'Experience hyper-realistic disaster scenarios powered by cutting-edge VR technology and physics engines.',
  },
  {
    icon: Users,
    title: 'Collaborative Training',
    description: 'Train with peers in multiplayer scenarios, building teamwork and communication under pressure.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Game-Changing Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for the future of disaster preparedness training
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
