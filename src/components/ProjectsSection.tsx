import { useGitHubProjects } from '@/hooks/useGitHubProjects';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star, GitFork, Loader2 } from 'lucide-react';

const ProjectsSection = () => {
  const { projects, loading, error } = useGitHubProjects();

  if (error) {
    return (
      <section id="projects" className="section-spacing bg-secondary/30">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Projects</h2>
            <p className="text-muted-foreground">Unable to load projects. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-spacing bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work and contributions. These projects showcase my expertise 
            in data analytics, Power BI, and various technologies.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading projects...</span>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="card-hover border-border bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold text-card-foreground">
                      {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </CardTitle>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{project.stargazers_count}</span>
                    </div>
                  </div>
                  
                  <CardDescription className="text-muted-foreground">
                    {project.description || 'No description available'}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.language && (
                      <Badge variant="secondary" className="text-xs">
                        {project.language}
                      </Badge>
                    )}
                    {project.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks_count}</span>
                      </div>
                    </div>
                    <span>
                      Updated {new Date(project.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full"
                    variant="outline"
                  >
                    <a 
                      href={project.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>View on GitHub</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;