import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import asfiyaImg from '@/assets/team/asfiya.jpg';
import koelImg from '@/assets/team/koel.jpg';
import utkarshImg from '@/assets/team/utkarsh.jpg';
import asmitaImg from '@/assets/team/asmita.jpg';
import prudhviImg from '@/assets/team/prudhvi.jpg';
import khushiImg from '@/assets/team/khushi.jpg';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Asfiya',
    role: 'Lead Developer',
    bio: 'Passionate about creating innovative solutions for disaster preparedness.',
    image: asfiyaImg,
  },
  {
    name: 'Koel',
    role: 'VR Specialist',
    bio: 'Expert in immersive technology and virtual reality experiences.',
    image: koelImg,
  },
  {
    name: 'Utkarsh',
    role: 'AI Engineer',
    bio: 'Specializes in machine learning and intelligent agent systems.',
    image: utkarshImg,
  },
  {
    name: 'Asmita',
    role: 'UX Designer',
    bio: 'Focused on creating intuitive and engaging user experiences.',
    image: asmitaImg,
  },
  {
    name: 'Prudhvi',
    role: 'Backend Architect',
    bio: 'Builds scalable infrastructure for real-time analytics.',
    image: prudhviImg,
  },
  {
    name: 'Khushi',
    role: 'Product Manager',
    bio: 'Drives product vision and coordinates team efforts.',
    image: khushiImg,
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Meet Team Lumora
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The innovators behind the future of disaster preparedness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-3xl p-0 bg-card border-border overflow-hidden">
          <button
            onClick={() => setSelectedMember(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedMember && (
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2">{selectedMember.name}</h3>
                <p className="text-lg text-primary mb-4">{selectedMember.role}</p>
                <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Team;
