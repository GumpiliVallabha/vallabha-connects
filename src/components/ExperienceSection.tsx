const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led development of enterprise-wide Power BI dashboards, resulting in 40% faster decision-making processes and improved data-driven insights across multiple departments.'
    },
    {
      title: 'Business Intelligence Developer',
      company: 'Analytics Corp',
      period: '2020 - 2022',
      description: 'Designed and implemented automated reporting solutions using Power BI and SQL, reducing manual reporting time by 60% and improving data accuracy.'
    },
    {
      title: 'Data Analyst',
      company: 'Data Insights Ltd.',
      period: '2018 - 2020',
      description: 'Created comprehensive data analysis reports and visualizations, supporting strategic business decisions and identifying key performance trends.'
    }
  ];

  return (
    <section id="experience" className="section-spacing bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous growth in data analytics and business intelligence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } fade-in`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:-ml-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-card p-6 rounded-2xl border border-border card-hover">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;