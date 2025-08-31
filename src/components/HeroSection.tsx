import { Button } from '@/components/ui/button';
import profileImage from '@/assets/vallabha-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    // Placeholder for resume download - can be updated with actual resume link
    window.open('#', '_blank');
  };

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center justify-center section-spacing">
      <div className="container-custom">
        <div className="text-center fade-in visible">
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Vallabha Gumpili - Professional headshot"
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Vallabha Gumpili
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
            Data & Technology Enthusiast · Power BI Specialist · Lifelong Learner
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={downloadResume}
              size="lg"
              className="px-8 py-3"
            >
              Download Resume
            </Button>
            
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline"
              size="lg"
              className="px-8 py-3"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;