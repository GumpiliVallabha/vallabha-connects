import { BarChart3, Database, Eye, RefreshCw, FileSpreadsheet } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: BarChart3,
      title: 'Data Visualization',
      subtitle: 'Power BI',
      description: 'Creating compelling visual stories from complex datasets'
    },
    {
      icon: Eye,
      title: 'Business Intelligence',
      subtitle: 'Analytics & Insights',
      description: 'Transforming data into strategic business decisions'
    },
    {
      icon: FileSpreadsheet,
      title: 'Data Analytics',
      subtitle: 'Statistical Analysis',
      description: 'Advanced analytics and statistical modeling'
    },
    {
      icon: RefreshCw,
      title: 'Power Query & ETL',
      subtitle: 'Data Transformation',
      description: 'Cleaning, transforming, and preparing data pipelines'
    },
    {
      icon: Database,
      title: 'SQL',
      subtitle: 'Database Management',
      description: 'Querying and managing relational databases'
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into meaningful insights and driving business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="fade-in group p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground text-lg">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {skill.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;