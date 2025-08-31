import { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string;
}

export const useGitHubProjects = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/GumpiliVallabha/repos?sort=updated&per_page=10');
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        
        const data = await response.json();
        
        // Filter out forks and sort by updated date
        const filteredProjects = data
          .filter((repo: GitHubRepo) => !repo.name.includes('fork'))
          .slice(0, 6); // Show top 6 projects
        
        setProjects(filteredProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};