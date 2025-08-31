const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Vallabha, passionate about transforming data into actionable insights. 
                Skilled in Power BI, analytics, and business intelligence, I specialize in 
                creating dashboards that empower decision makers.
              </p>
              
              <p>
                With a strong foundation in data visualization and continuous learning, 
                my mission is to bridge the gap between raw data and meaningful outcomes. 
                I believe that every dataset tells a story, and I'm here to help uncover it.
              </p>
              
              <p>
                Whether you're a student looking to learn, a CXO seeking insights, or a 
                technology leader exploring new possibilities, I'm always excited to connect 
                and collaborate on meaningful projects.
              </p>
            </div>
          </div>
          
          <div className="fade-in">
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What drives me
              </h3>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Turning complex data into clear, actionable insights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Empowering teams with beautiful, functional dashboards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Continuous learning and staying at the forefront of technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mentoring others and sharing knowledge with the community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;