import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([]);

  useEffect(() => {
    // Create floating particles
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: ['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)]
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`particle bg-${particle.color} float opacity-20`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Modern</span>
          <br />
          <span className="text-foreground">Interactive</span>
          <br />
          <span className="gradient-text">Experience</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Crafting beautiful, responsive websites with cutting-edge animations and seamless user interactions
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <button className="btn-primary ripple group">
            <span className="flex items-center">
              Get Started 
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </span>
          </button>
          
          <button className="btn-secondary ripple group">
            <span className="flex items-center">
              <Play className="mr-2 transition-transform group-hover:scale-110" size={20} />
              Watch Demo
            </span>
          </button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
          {[
            { number: '50+', label: 'Projects' },
            { number: '99%', label: 'Uptime' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;