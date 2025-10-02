import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Star, Users, Play } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  rating: number;
  users: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
}

const scenarios: Scenario[] = [
  {
    id: 'earthquake',
    title: 'Earthquake Response',
    description: 'Learn drop, cover, and hold techniques. Navigate structural hazards and rescue trapped individuals.',
    rating: 4.8,
    users: 1247,
    difficulty: 'Intermediate',
    icon: '🏚️',
  },
  {
    id: 'flood',
    title: 'Flood Evacuation',
    description: 'Master water rescue protocols, emergency communication, and safe evacuation procedures.',
    rating: 4.9,
    users: 892,
    difficulty: 'Advanced',
    icon: '🌊',
  },
  {
    id: 'wildfire',
    title: 'Wildfire Escape',
    description: 'Navigate smoke-filled environments, identify safe zones, and execute rapid evacuation plans.',
    rating: 4.7,
    users: 653,
    difficulty: 'Advanced',
    icon: '🔥',
  },
  {
    id: 'urban',
    title: 'Urban Crisis',
    description: 'Respond to multi-hazard urban emergencies including power outages and building collapses.',
    rating: 4.6,
    users: 1089,
    difficulty: 'Intermediate',
    icon: '🏙️',
  },
  {
    id: 'medical',
    title: 'Medical Triage',
    description: 'Practice emergency first aid, patient prioritization, and basic life support in disaster scenarios.',
    rating: 4.9,
    users: 1534,
    difficulty: 'Beginner',
    icon: '🚑',
  },
  {
    id: 'chemical',
    title: 'Chemical Spill',
    description: 'Identify hazardous materials, use protective equipment, and execute contamination protocols.',
    rating: 4.5,
    users: 423,
    difficulty: 'Advanced',
    icon: '☢️',
  },
];

interface ScenariosProps {
  onStartScenario: () => void;
}

const Scenarios = ({ onStartScenario }: ScenariosProps) => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const handleStart = () => {
    setSelectedScenario(null);
    onStartScenario();
  };

  return (
    <section id="scenarios" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            VR Training Scenarios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master real-world disaster response in immersive virtual environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <Card
              key={scenario.id}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur border-border/50"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="text-5xl mb-4">{scenario.icon}</div>
                <CardTitle className="text-xl">{scenario.title}</CardTitle>
                <CardDescription>{scenario.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-medium">{scenario.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{scenario.users.toLocaleString()}</span>
                  </div>
                </div>
                <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {scenario.difficulty}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full group"
                  onClick={() => setSelectedScenario(scenario)}
                >
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Start Scenario
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={!!selectedScenario} onOpenChange={(open) => !open && setSelectedScenario(null)}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center space-x-3">
              <span className="text-4xl">{selectedScenario?.icon}</span>
              <span>{selectedScenario?.title}</span>
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              {selectedScenario?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">Difficulty</span>
              <span className="font-medium">{selectedScenario?.difficulty}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">Rating</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-medium">{selectedScenario?.rating}</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">Trainees</span>
              <span className="font-medium">{selectedScenario?.users.toLocaleString()}</span>
            </div>
          </div>
          <DialogFooter className="flex space-x-2">
            <Button variant="outline" onClick={() => setSelectedScenario(null)}>
              Cancel
            </Button>
            <Button onClick={handleStart}>
              Begin Training
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Scenarios;
