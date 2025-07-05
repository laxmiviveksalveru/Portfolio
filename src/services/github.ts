import axios from 'axios';

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'laxmiviveksalveru'; // From personal.ts contact info

// GitHub repository interface
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  fork: boolean;
  private: boolean;
}

// Transformed project interface for portfolio
export interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  duration?: string;
  status?: string;
  githubUrl: string;
  stars: number;
  forks: number;
  lastUpdated: string;
}

// Category mapping based on language and topics
const getCategoryFromRepo = (repo: GitHubRepo): string => {
  const topics = repo.topics || [];
  const language = repo.language?.toLowerCase() || '';

  // AI/ML related topics
  if (topics.some(topic => ['machine-learning', 'ml', 'ai', 'artificial-intelligence', 'deep-learning', 'neural-networks', 'tensorflow', 'pytorch'].includes(topic.toLowerCase()))) {
    return 'Machine Learning';
  }
  
  // Computer Vision
  if (topics.some(topic => ['computer-vision', 'cv', 'opencv', 'image-processing'].includes(topic.toLowerCase()))) {
    return 'Computer Vision';
  }
  
  // Web Development
  if (topics.some(topic => ['web', 'frontend', 'backend', 'fullstack', 'react', 'vue', 'angular', 'nextjs'].includes(topic.toLowerCase())) || 
      ['javascript', 'typescript', 'html', 'css'].includes(language)) {
    return 'Web Development';
  }
  
  // Data Science
  if (topics.some(topic => ['data-science', 'data-analysis', 'analytics', 'jupyter', 'pandas', 'numpy'].includes(topic.toLowerCase()))) {
    return 'Data Science';
  }
  
  // Mobile Development
  if (topics.some(topic => ['mobile', 'android', 'ios', 'react-native', 'flutter'].includes(topic.toLowerCase())) ||
      ['kotlin', 'swift', 'dart'].includes(language)) {
    return 'Mobile Development';
  }
  
  // Default based on language
  switch (language) {
    case 'python':
      return 'Python Development';
    case 'java':
      return 'Java Development';
    case 'c++':
    case 'c':
      return 'Systems Programming';
    case 'matlab':
      return 'Scientific Computing';
    default:
      return 'Software Development';
  }
};

// Get technologies from language and topics
const getTechnologiesFromRepo = (repo: GitHubRepo): string[] => {
  const technologies = new Set<string>();
  
  // Add primary language
  if (repo.language) {
    technologies.add(repo.language);
  }
  
  // Add technologies based on topics
  repo.topics?.forEach(topic => {
    const topicLower = topic.toLowerCase();
    
    // Framework mappings
    const frameworkMappings: { [key: string]: string } = {
      'react': 'React',
      'vue': 'Vue.js',
      'angular': 'Angular',
      'nextjs': 'Next.js',
      'nodejs': 'Node.js',
      'express': 'Express.js',
      'tensorflow': 'TensorFlow',
      'pytorch': 'PyTorch',
      'opencv': 'OpenCV',
      'pandas': 'Pandas',
      'numpy': 'NumPy',
      'scikit-learn': 'Scikit-learn',
      'flask': 'Flask',
      'django': 'Django',
      'mongodb': 'MongoDB',
      'postgresql': 'PostgreSQL',
      'mysql': 'MySQL',
      'docker': 'Docker',
      'kubernetes': 'Kubernetes',
      'aws': 'AWS',
      'azure': 'Azure',
      'gcp': 'Google Cloud',
      'firebase': 'Firebase'
    };
    
    if (frameworkMappings[topicLower]) {
      technologies.add(frameworkMappings[topicLower]);
    } else if (topicLower.includes('machine-learning') || topicLower.includes('ml')) {
      technologies.add('Machine Learning');
    } else if (topicLower.includes('deep-learning') || topicLower.includes('dl')) {
      technologies.add('Deep Learning');
    } else if (topicLower.includes('computer-vision') || topicLower.includes('cv')) {
      technologies.add('Computer Vision');
    } else if (topicLower.includes('nlp') || topicLower.includes('natural-language')) {
      technologies.add('Natural Language Processing');
    } else if (topicLower.includes('data-science') || topicLower.includes('data-analysis')) {
      technologies.add('Data Science');
    }
  });
  
  return Array.from(technologies);
};

// Format date for duration
const formatDuration = (createdAt: string, updatedAt: string): string => {
  const created = new Date(createdAt);
  const updated = new Date(updatedAt);
  const now = new Date();
  
  const createdMonth = created.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });
  
  // If updated recently (within last 30 days), show as active
  const daysSinceUpdate = Math.floor((now.getTime() - updated.getTime()) / (1000 * 60 * 60 * 24));
  if (daysSinceUpdate <= 30) {
    return `${createdMonth} - Present`;
  }
  
  const updatedMonth = updated.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });
  return `${createdMonth} - ${updatedMonth}`;
};

// Get project status based on activity
const getProjectStatus = (repo: GitHubRepo): string | undefined => {
  const updated = new Date(repo.updated_at);
  const now = new Date();
  const daysSinceUpdate = Math.floor((now.getTime() - updated.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysSinceUpdate <= 7) {
    return 'Active';
  } else if (daysSinceUpdate <= 30) {
    return 'Recently Updated';
  } else if (daysSinceUpdate <= 90) {
    return 'Maintained';
  }
  
  return undefined; // Don't show status for older projects
};

// Fetch user repositories from GitHub
export const fetchGitHubRepositories = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await axios.get<GitHubRepo[]>(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`,
      {
        params: {
          sort: 'updated',
          direction: 'desc',
          per_page: 100,
        },
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App',
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw new Error('Failed to fetch repositories from GitHub');
  }
};

// Transform GitHub repos to portfolio projects
export const transformReposToProjects = (repos: GitHubRepo[]): PortfolioProject[] => {
  return repos
    .filter(repo => 
      !repo.fork && // Exclude forked repositories
      !repo.archived && // Exclude archived repositories
      repo.description && // Must have description
      repo.description.trim().length > 0 // Non-empty description
    )
    .slice(0, 8) // Show only top 8 projects
    .map(repo => ({
      title: repo.name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      description: repo.description || 'No description available',
      technologies: getTechnologiesFromRepo(repo),
      category: getCategoryFromRepo(repo),
      duration: formatDuration(repo.created_at, repo.updated_at),
      status: getProjectStatus(repo),
      githubUrl: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      lastUpdated: repo.updated_at,
    }));
};

// Main function to get portfolio projects
export const getPortfolioProjects = async (): Promise<PortfolioProject[]> => {
  const repos = await fetchGitHubRepositories();
  return transformReposToProjects(repos);
};
