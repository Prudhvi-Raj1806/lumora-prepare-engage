import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Dr. Emily Chen',
    role: 'Professor, Emergency Management',
    content: 'Lumora has revolutionized how we prepare students for real-world disasters. The AI guides provide personalized feedback that accelerates learning.',
    rating: 5,
    institution: 'Stanford University',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Director of Safety',
    content: 'The gamification aspect keeps students engaged while learning critical life-saving skills. Our preparedness metrics have improved by 40%.',
    rating: 5,
    institution: 'Boston Public Schools',
  },
  {
    name: 'Sarah Thompson',
    role: 'Training Coordinator',
    content: 'The VR scenarios are incredibly realistic. Students report feeling much more confident in their ability to handle emergencies.',
    rating: 5,
    institution: 'UC Berkeley',
  },
  {
    name: 'James Park',
    role: 'Student, Senior Year',
    content: 'This is the most engaging training I\'ve ever experienced. The AI guides make it feel like you\'re really there, and the scenarios are intense!',
    rating: 5,
    institution: 'MIT',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            What Educators Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading institutions worldwide
          </p>
        </div>

        {/* Featured Testimonial */}
        <Card className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 backdrop-blur">
          <CardContent className="p-8 md:p-12">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
              "{testimonials[0].content}"
            </blockquote>
            <div>
              <div className="font-semibold text-lg">{testimonials[0].name}</div>
              <div className="text-muted-foreground">{testimonials[0].role}</div>
              <div className="text-sm text-primary">{testimonials[0].institution}</div>
            </div>
          </CardContent>
        </Card>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.slice(1).map((testimonial, index) => (
                <div key={index} className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <Card className="h-full bg-card/50 backdrop-blur border-border/50">
                    <CardContent className="p-6">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm mb-4 text-muted-foreground leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-primary">{testimonial.institution}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
