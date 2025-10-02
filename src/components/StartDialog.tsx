import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Zap } from 'lucide-react';

interface StartDialogProps {
  open: boolean;
  onStart: () => void;
}

const StartDialog = ({ open, onStart }: StartDialogProps) => {
  return (
    <Dialog open={open} modal>
      <DialogContent className="max-w-md bg-card border-border [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center space-x-2">
            <Zap className="w-8 h-8 text-primary animate-pulse" />
            <span>Welcome to Lumora</span>
          </DialogTitle>
          <DialogDescription className="text-base pt-4">
            Experience the future of disaster preparedness training. Begin your journey with 
            an immersive cinematic introduction to the Lumora platform.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground">
              This experience includes dynamic animations and visual effects. You can skip 
              the animation if you prefer reduced motion.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onStart} size="lg" className="w-full group">
            Begin Experience
            <Zap className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StartDialog;
