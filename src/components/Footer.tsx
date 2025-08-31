import { Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vallabhagumpili'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/GumpiliVallabha'
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container-custom">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 Vallabha Gumpili. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for data enthusiasts worldwide</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;