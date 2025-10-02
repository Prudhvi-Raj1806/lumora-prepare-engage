import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">L</span>
              </div>
              <div>
                <h3 className="font-bold">Project Lumora</h3>
                <p className="text-xs text-muted-foreground">Team Akuno</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Preparing the next generation for real-world disasters through immersive VR training.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#scenarios" className="hover:text-primary transition-colors">Scenarios</a></li>
              <li><a href="#analytics" className="hover:text-primary transition-colors">Analytics</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Project Lumora. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center space-x-2">
            <span>Powered by AI</span>
            <span>•</span>
            <span>Built for Resilience</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
