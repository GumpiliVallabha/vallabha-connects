import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      type: 'degree',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Institute of Technology',
      year: '2018',
      description: 'Specialized in Data Structures, Algorithms, and Database Management Systems'
    },
    {
      type: 'certification',
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      institution: 'Microsoft',
      year: '2021',
      description: 'Advanced certification in Power BI development and data visualization'
    },
    {
      type: 'certification',
      title: 'Google Data Analytics Professional Certificate',
      institution: 'Google',
      year: '2020',
      description: 'Comprehensive training in data analysis tools and methodologies'
    }
  ];

  return (
    <section id="education" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in data science and analytics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {education.map((item, index) => (
            <div 
              key={index}
              className="fade-in flex items-start p-6 rounded-2xl border border-border bg-card card-hover"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  {item.type === 'degree' ? (
                    <GraduationCap className="w-6 h-6 text-primary" />
                  ) : (
                    <Award className="w-6 h-6 text-primary" />
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-primary">
                    {item.year}
                  </span>
                </div>
                
                <p className="text-primary font-medium mb-2">
                  {item.institution}
                </p>
                
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;