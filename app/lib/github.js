// Custom projects configuration - you can specify exact projects here
const GITHUB_USERNAME = 'riczaman'; // Replace with your GitHub username

// Specify exact project names you want to display
const FEATURED_PROJECTS = [
  'workout-cool', // Replace with your actual repo names
  'stock-buddy',
  'zocially-app',
  'athlete-tinder',
  'hulu-2-next',
  'NeuralNetworks'
];

export async function fetchGitHubProjects() {
  try {
    // If you want to fetch specific projects by name
    if (FEATURED_PROJECTS.length > 0 && FEATURED_PROJECTS[0] !== 'project-name-1') {
      const projectPromises = FEATURED_PROJECTS.map(async (projectName) => {
        try {
          const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${projectName}`);
          if (response.ok) {
            const data = await response.json();
            return {
              ...data,
              // Add custom image if you have one in your repo
              image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${projectName}/main/preview.png`,
              // Fallback to opengraph image
              fallbackImage: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${projectName}`
            };
          }
          return null;
        } catch (error) {
          console.error(`Error fetching ${projectName}:`, error);
          return null;
        }
      });

      const projects = await Promise.all(projectPromises);
      const validProjects = projects.filter(project => project !== null);
      
      if (validProjects.length > 0) {
        return validProjects;
      }
    }

    // Fallback: fetch all repos and filter
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=public`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter and enhance repos
    const filteredData = data
      .filter(repo => {
        // Filter criteria
        return !repo.fork && // Not a fork
               repo.description && // Has description
               repo.description.length > 10 && // Meaningful description
               repo.size > 0 && // Not empty
               !repo.name.includes('config') && // Not config repos
               !repo.name.includes('dotfiles'); // Not dotfiles
      })
      .slice(0, 6) // Take first 6
      .map(repo => ({
        ...repo,
        // Add image URLs
        image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/preview.png`,
        fallbackImage: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
        // Ensure we have topics
        topics: repo.topics?.length > 0 ? repo.topics : [repo.language?.toLowerCase(), 'project'].filter(Boolean)
      }));

    return filteredData.length > 0 ? filteredData : getCustomProjects();
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return getCustomProjects();
  }
}

// Custom projects with images and detailed descriptions
function getCustomProjects() {
  return [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A comprehensive full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, and admin dashboard.',
      html_url: 'https://github.com/example/ecommerce-platform',
      homepage: 'https://ecommerce-demo.vercel.app',
      language: 'JavaScript',
      stargazers_count: 124,
      topics: ['react', 'nodejs', 'mongodb', 'ecommerce', 'stripe'],
      image: '/project-images/ecommerce.jpg', // Add your custom images to public folder
      fallbackImage: '/project-images/default-project.jpg'
    },
    {
      id: 2,
      name: 'DevOps Monitoring Dashboard',
      description: 'Real-time DevOps monitoring dashboard with metrics visualization, deployment tracking, automated alerts, and CI/CD pipeline integration. Built with TypeScript, React, and Docker.',
      html_url: 'https://github.com/example/devops-dashboard',
      homepage: 'https://devops-dashboard.herokuapp.com',
      language: 'TypeScript',
      stargazers_count: 89,
      topics: ['devops', 'monitoring', 'docker', 'typescript', 'dashboard'],
      image: '/project-images/devops-dashboard.jpg',
      fallbackImage: '/project-images/default-project.jpg'
    },
    {
      id: 3,
      name: 'AI-Powered Chat Application',
      description: 'Intelligent chat application leveraging OpenAI GPT API with real-time messaging, conversation history, user authentication, and custom AI personas. Built with Next.js and Socket.io.',
      html_url: 'https://github.com/example/ai-chat',
      homepage: 'https://ai-chat-demo.netlify.app',
      language: 'JavaScript',
      stargazers_count: 156,
      topics: ['ai', 'openai', 'chat', 'nextjs', 'socketio'],
      image: '/project-images/ai-chat.jpg',
      fallbackImage: '/project-images/default-project.jpg'
    },
    {
      id: 4,
      name: 'Microservices Architecture',
      description: 'Scalable microservices architecture demonstration with Docker containers, Kubernetes orchestration, API Gateway, service discovery, and comprehensive monitoring setup.',
      html_url: 'https://github.com/example/microservices',
      homepage: null,
      language: 'Go',
      stargazers_count: 203,
      topics: ['microservices', 'kubernetes', 'docker', 'golang', 'api-gateway'],
      image: '/project-images/microservices.jpg',
      fallbackImage: '/project-images/default-project.jpg'
    },
    {
      id: 5,
      name: 'Data Visualization Platform',
      description: 'Interactive data visualization platform with D3.js charts, real-time data streaming, custom dashboard builder, and export functionality. Perfect for business analytics.',
      html_url: 'https://github.com/example/data-viz',
      homepage: 'https://data-viz-platform.com',
      language: 'JavaScript',
      stargazers_count: 78,
      topics: ['dataviz', 'd3js', 'analytics', 'dashboard', 'charts'],
      image: '/project-images/data-viz.jpg',
      fallbackImage: '/project-images/default-project.jpg'
    },
    {
      id: 6,
      name: 'Blockchain DApp',
      description: 'Decentralized application built on Ethereum with smart contracts, Web3 integration, MetaMask authentication, and modern React frontend. Includes comprehensive testing suite.',
      html_url: 'https://github.com/example/blockchain-dapp',
      homepage: 'https://blockchain-dapp.eth',
      language: 'Solidity',
      stargazers_count: 145,
      topics: ['blockchain', 'ethereum', 'solidity', 'web3', 'dapp'],
      image: '/project-images/blockchain.jpg',
      fallbackImage: '/project-images/default-project.jpg'
    }
  ];
}