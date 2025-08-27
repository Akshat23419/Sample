import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm mb-8">
          <Sparkles className="w-8 h-8 text-accent animate-pulse" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Ready to Build Something
          <br />
          <span className="text-accent">Amazing?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto">
          Let's create a stunning, interactive website that will captivate your audience 
          and drive real results for your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-background text-background hover:bg-foreground px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow ripple">
            <span className="flex items-center gradient-text">
              Start Your Project
              <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" size={24} />
            </span>
          </button>
          
          <button className="glass text-foreground px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
            Get Free Consultation
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-12 border-t border-foreground/20">
          <p className="text-foreground/60 mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <div
                key={index}
                className="text-foreground font-semibold text-lg hover:text-accent transition-colors cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;