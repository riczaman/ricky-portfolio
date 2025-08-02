const GITHUB_USERNAME = 'riczaman'; // Replace with your GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export async function fetchGitHubProjects() {
  try {
    const response = await fetch(`${GITHUB_API_URL}?sort=updated&per_page=6&type=public`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter out empty repos and add better descriptions
    const filteredData = data
      .filter(repo => repo.description && !repo.fork)
      .map(repo => ({
        ...repo,
        // Add default description if empty
        description: repo.description || `A ${repo.language || 'software'} project built with modern technologies`,
        // Ensure we have topics
        topics: repo.topics?.length > 0 ? repo.topics : [repo.language?.toLowerCase(), 'project', 'development'].filter(Boolean)
      }));

    return filteredData.length > 0 ? filteredData : getFallbackProjects();
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return getFallbackProjects();
  }
}

function getFallbackProjects() {
  return [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      html_url: 'https://github.com/example/ecommerce-platform',
      homepage: 'https://ecommerce-demo.vercel.app',
      language: 'JavaScript',
      stargazers_count: 42,
      topics: ['react', 'nodejs', 'ecommerce', 'mongodb']
    },
    {
      id: 2,
      name: 'DevOps Dashboard',
      description: 'A comprehensive DevOps monitoring dashboard with real-time metrics, deployment tracking, and automated alerts. Built with TypeScript and Docker.',
      html_url: 'https://github.com/example/devops-dashboard',
      homepage: 'https://devops-dashboard-demo.com',
      language: 'TypeScript',
      stargazers_count: 38,
      topics: ['devops', 'monitoring', 'docker', 'typescript']
    },
    {
      id: 3,
      name: 'AI Chat Application',
      description: 'An intelligent chat application powered by OpenAI API with real-time messaging, user authentication, and conversation history.',
      html_url: 'https://github.com/example/ai-chat-app',
      homepage: 'https://ai-chat-demo.netlify.app',
      language: 'Python',
      stargazers_count: 67,
      topics: ['ai', 'chat', 'openai', 'realtime']
    },
    {
      id: 4,
      name: 'Microservices Architecture',
      description: 'A scalable microservices architecture with Docker, Kubernetes, and API Gateway. Includes service discovery and load balancing.',
      html_url: 'https://github.com/example/microservices-demo',
      homepage: null,
      language: 'Go',
      stargazers_count: 89,
      topics: ['microservices', 'kubernetes', 'docker', 'golang']
    },
    {
      id: 5,
      name: 'Data Visualization Tool',
      description: 'Interactive data visualization tool with D3.js and React. Supports multiple chart types and real-time data updates.',
      html_url: 'https://github.com/example/data-viz-tool',
      homepage: 'https://data-viz-demo.herokuapp.com',
      language: 'JavaScript',
      stargazers_count: 25,
      topics: ['dataviz', 'react', 'd3js', 'analytics']
    },
    {
      id: 6,
      name: 'Mobile App Backend',
      description: 'RESTful API backend for mobile applications with JWT authentication, rate limiting, and comprehensive documentation.',
      html_url: 'https://github.com/example/mobile-backend',
      homepage: null,
      language: 'Node.js',
      stargazers_count: 33,
      topics: ['api', 'backend', 'mobile', 'authentication']
    }
  ];
}