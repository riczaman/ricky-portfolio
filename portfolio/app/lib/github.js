const GITHUB_USERNAME = 'riczaman'; // Replace with your GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export async function fetchGitHubProjects() {
  try {
    const response = await fetch(`${GITHUB_API_URL}?sort=updated&per_page=6`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub projects');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    
    // Fallback mock data
    return [
      {
        id: 1,
        name: 'scalable-microservices',
        description: 'A highly scalable microservices architecture built with Node.js, Docker, and Kubernetes',
        html_url: 'https://github.com/example/scalable-microservices',
        homepage: 'https://microservices-demo.com',
        language: 'JavaScript',
        stargazers_count: 245,
        topics: ['microservices', 'docker', 'kubernetes']
      },
      {
        id: 2,
        name: 'devsecops-pipeline',
        description: 'Automated CI/CD pipeline with integrated security scanning and deployment automation',
        html_url: 'https://github.com/example/devsecops-pipeline',
        homepage: 'https://pipeline-demo.com',
        language: 'Python',
        stargazers_count: 189,
        topics: ['devops', 'security', 'automation']
      },
      {
        id: 3,
        name: 'full-stack-dashboard',
        description: 'Modern dashboard application with React, TypeScript, and real-time data visualization',
        html_url: 'https://github.com/example/full-stack-dashboard',
        homepage: 'https://dashboard-demo.com',
        language: 'TypeScript',
        stargazers_count: 156,
        topics: ['react', 'typescript', 'dashboard']
      }
    ];
  }
}
