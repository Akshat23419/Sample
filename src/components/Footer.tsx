import { Github, Twitter, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://www.instagram.com/cswithraj/?hl=en', label: 'Instagram' },
    { Icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-background"></div>
              </div>
              <span className="font-display font-bold text-2xl gradient-text">ModernWeb</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Creating beautiful, interactive websites that captivate audiences and drive results. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">cswithraj@poornima.edu.in</p>
              <p className="text-muted-foreground">+91 000000</p>
              <p className="text-muted-foreground">Jaipur</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialIcons.map(({ Icon, href, label }, index) => (
            <a
              key={label}
              href={href}
              className="group w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={label}
            >
              <Icon 
                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" 
              />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
        
           <span>All rights reserved.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="glass px-4 py-2 rounded-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
