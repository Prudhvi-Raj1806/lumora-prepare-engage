import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, Target, Star } from 'lucide-react';

const Analytics = () => {
  const [sessionsCount, setSessionsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    // Animated counter for sessions
    const sessionsTarget = 2847;
    const successTarget = 94.7;
    const duration = 2000;
    const steps = 60;
    const sessionIncrement = sessionsTarget / steps;
    const successIncrement = successTarget / steps;

    let currentSession = 0;
    let currentSuccess = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      currentSession = Math.min(currentSession + sessionIncrement, sessionsTarget);
      currentSuccess = Math.min(currentSuccess + successIncrement, successTarget);
      
      setSessionsCount(Math.floor(currentSession));
      setSuccessRate(Number(currentSuccess.toFixed(1)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: 'Training Sessions',
      value: sessionsCount.toLocaleString(),
      icon: Users,
      color: 'text-primary',
      trend: '+12.5%',
    },
    {
      label: 'Success Rate',
      value: `${successRate}%`,
      icon: Target,
      color: 'text-green-500',
      trend: '+2.3%',
    },
    {
      label: 'Avg Response Time',
      value: '1.2s',
      icon: TrendingUp,
      color: 'text-blue-500',
      trend: '-0.3s',
    },
    {
      label: 'Satisfaction',
      value: '4.9/5',
      icon: Star,
      color: 'text-yellow-500',
      trend: '+0.2',
    },
  ];

  const [liveFeed, setLiveFeed] = useState([
    { user: 'Alex M.', action: 'completed Earthquake Response', time: '2 min ago' },
    { user: 'Sarah K.', action: 'started Medical Triage', time: '5 min ago' },
    { user: 'Jordan P.', action: 'achieved 100% on Flood Evacuation', time: '8 min ago' },
  ]);

  useEffect(() => {
    // Simulate live feed updates
    const names = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan'];
    const actions = [
      'completed Earthquake Response',
      'started Wildfire Escape',
      'achieved 95% on Urban Crisis',
      'unlocked new achievement',
      'completed Medical Triage',
    ];

    const interval = setInterval(() => {
      const newEntry = {
        user: names[Math.floor(Math.random() * names.length)] + ' ' + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + '.',
        action: actions[Math.floor(Math.random() * actions.length)],
        time: 'just now',
      };

      setLiveFeed((prev) => [newEntry, ...prev.slice(0, 2)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="analytics" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Real-Time Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track performance, progress, and engagement across the platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">{stat.trend}</span>
                    <span className="text-muted-foreground">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Scenario Completion Progress */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Scenario Completion Rates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Medical Triage', value: 97 },
                { name: 'Earthquake Response', value: 93 },
                { name: 'Flood Evacuation', value: 89 },
                { name: 'Urban Crisis', value: 86 },
              ].map((scenario) => (
                <div key={scenario.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{scenario.name}</span>
                    <span className="font-medium">{scenario.value}%</span>
                  </div>
                  <Progress value={scenario.value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Live Activity Feed */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>Live Activity Feed</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {liveFeed.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 animate-fade-in"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                    {entry.user.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{entry.user}</span>{' '}
                      <span className="text-muted-foreground">{entry.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{entry.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
