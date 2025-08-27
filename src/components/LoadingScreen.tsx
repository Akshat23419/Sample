import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative">
        {/* Animated Logo */}
        <div className="w-20 h-20 mb-8 rounded-full bg-gradient-primary animate-pulse-glow flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-primary animate-spin"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-display font-bold gradient-text mb-6 text-center">
          Loading Experience
        </h2>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Text */}
        <p className="text-muted-foreground text-center mt-4">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;