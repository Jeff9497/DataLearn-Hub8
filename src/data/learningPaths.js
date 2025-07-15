// Learning paths and module structure for both tracks
export const learningPaths = {
  'data-science': {
    title: 'Data Science Track',
    description: 'Master data science from fundamentals to advanced machine learning',
    color: 'ds-primary',
    icon: '📊',
    levels: {
      beginner: {
        title: 'Foundations',
        description: 'Build your foundation in data science fundamentals',
        modules: [
          {
            id: 'ds-intro',
            title: 'What is Data Science?',
            description: 'Understanding the field, career paths, and real-world applications',
            duration: '45 min',
            difficulty: 'beginner',
            topics: [
              'Definition and scope of data science',
              'Data science workflow and methodology',
              'Career paths and opportunities',
              'Tools and technologies overview',
              'Real-world case studies'
            ]
          },
          {
            id: 'ds-math-stats',
            title: 'Mathematics & Statistics Basics',
            description: 'Essential mathematical concepts for data science',
            duration: '90 min',
            difficulty: 'beginner',
            topics: [
              'Descriptive statistics',
              'Probability fundamentals',
              'Distributions and sampling',
              'Hypothesis testing',
              'Linear algebra basics'
            ]
          },
          {
            id: 'ds-python-fundamentals',
            title: 'Python Programming Fundamentals',
            description: 'Learn Python programming for data science',
            duration: '120 min',
            difficulty: 'beginner',
            topics: [
              'Python syntax and data types',
              'Control structures and functions',
              'Object-oriented programming basics',
              'File handling and error management',
              'Python libraries overview'
            ]
          },
          {
            id: 'ds-data-analysis-intro',
            title: 'Introduction to Data Analysis',
            description: 'First steps in analyzing data with Python',
            duration: '75 min',
            difficulty: 'beginner',
            topics: [
              'NumPy for numerical computing',
              'Pandas for data manipulation',
              'Data loading and inspection',
              'Basic data cleaning techniques',
              'Simple statistical analysis'
            ]
          },
          {
            id: 'ds-data-visualization',
            title: 'Basic Data Visualization',
            description: 'Create compelling visualizations to tell data stories',
            duration: '60 min',
            difficulty: 'beginner',
            topics: [
              'Matplotlib fundamentals',
              'Seaborn for statistical plots',
              'Chart types and when to use them',
              'Color theory and design principles',
              'Interactive visualizations with Plotly'
            ]
          }
        ]
      },
      intermediate: {
        title: 'Intermediate',
        description: 'Dive deeper into data analysis and machine learning',
        modules: [
          {
            id: 'ds-data-cleaning',
            title: 'Data Cleaning & Preprocessing',
            description: 'Master the art of preparing messy real-world data',
            duration: '90 min',
            difficulty: 'intermediate',
            topics: [
              'Handling missing data strategies',
              'Outlier detection and treatment',
              'Data type conversions',
              'Feature scaling and normalization',
              'Data validation techniques'
            ]
          },
          {
            id: 'ds-eda',
            title: 'Exploratory Data Analysis (EDA)',
            description: 'Systematic approach to understanding your data',
            duration: '105 min',
            difficulty: 'intermediate',
            topics: [
              'EDA methodology and best practices',
              'Univariate and bivariate analysis',
              'Correlation analysis',
              'Statistical testing',
              'Advanced visualization techniques'
            ]
          },
          {
            id: 'ds-ml-fundamentals',
            title: 'Machine Learning Fundamentals',
            description: 'Core concepts and algorithms in machine learning',
            duration: '120 min',
            difficulty: 'intermediate',
            topics: [
              'Types of machine learning',
              'Training, validation, and testing',
              'Bias-variance tradeoff',
              'Cross-validation techniques',
              'Model evaluation metrics'
            ]
          },
          {
            id: 'ds-supervised-learning',
            title: 'Supervised Learning',
            description: 'Classification and regression algorithms',
            duration: '150 min',
            difficulty: 'intermediate',
            topics: [
              'Linear and logistic regression',
              'Decision trees and random forests',
              'Support vector machines',
              'k-Nearest neighbors',
              'Ensemble methods'
            ]
          },
          {
            id: 'ds-unsupervised-learning',
            title: 'Unsupervised Learning',
            description: 'Clustering and dimensionality reduction',
            duration: '120 min',
            difficulty: 'intermediate',
            topics: [
              'K-means and hierarchical clustering',
              'DBSCAN and other clustering algorithms',
              'Principal Component Analysis (PCA)',
              't-SNE and UMAP',
              'Association rule mining'
            ]
          }
        ]
      },
      advanced: {
        title: 'Advanced',
        description: 'Master advanced techniques and specialized domains',
        modules: [
          {
            id: 'ds-deep-learning',
            title: 'Deep Learning & Neural Networks',
            description: 'Build and train neural networks for complex problems',
            duration: '180 min',
            difficulty: 'advanced',
            topics: [
              'Neural network fundamentals',
              'Backpropagation and optimization',
              'Convolutional Neural Networks (CNNs)',
              'Recurrent Neural Networks (RNNs)',
              'Transfer learning and fine-tuning'
            ]
          },
          {
            id: 'ds-nlp',
            title: 'Natural Language Processing',
            description: 'Process and analyze text data',
            duration: '165 min',
            difficulty: 'advanced',
            topics: [
              'Text preprocessing and tokenization',
              'Sentiment analysis',
              'Named entity recognition',
              'Topic modeling',
              'Transformer models and BERT'
            ]
          },
          {
            id: 'ds-computer-vision',
            title: 'Computer Vision',
            description: 'Analyze and understand visual data',
            duration: '150 min',
            difficulty: 'advanced',
            topics: [
              'Image processing fundamentals',
              'Feature detection and extraction',
              'Object detection and recognition',
              'Image segmentation',
              'Deep learning for computer vision'
            ]
          },
          {
            id: 'ds-time-series',
            title: 'Time Series Analysis',
            description: 'Analyze temporal data and make forecasts',
            duration: '135 min',
            difficulty: 'advanced',
            topics: [
              'Time series components',
              'Stationarity and differencing',
              'ARIMA models',
              'Seasonal decomposition',
              'Deep learning for time series'
            ]
          },
          {
            id: 'ds-mlops',
            title: 'MLOps & Model Deployment',
            description: 'Deploy and maintain ML models in production',
            duration: '120 min',
            difficulty: 'advanced',
            topics: [
              'Model versioning and tracking',
              'Containerization with Docker',
              'CI/CD for ML pipelines',
              'Model monitoring and maintenance',
              'A/B testing for ML models'
            ]
          }
        ]
      }
    }
  },
  'data-engineering': {
    title: 'Data Engineering Track',
    description: 'Build robust data infrastructure and pipelines',
    color: 'de-primary',
    icon: '🔧',
    levels: {
      beginner: {
        title: 'Foundations',
        description: 'Learn the fundamentals of data engineering',
        modules: [
          {
            id: 'de-intro',
            title: 'What is Data Engineering?',
            description: 'Understanding data engineering role and responsibilities',
            duration: '45 min',
            difficulty: 'beginner',
            topics: [
              'Data engineering vs data science',
              'Data engineering lifecycle',
              'Modern data stack overview',
              'Career paths and skills',
              'Industry trends and challenges'
            ]
          },
          {
            id: 'de-fundamentals',
            title: 'Data Engineering Fundamentals',
            description: 'Core concepts, data lifecycle, and architecture patterns',
            duration: '120 min',
            difficulty: 'beginner',
            topics: [
              'Complete data lifecycle',
              'ETL vs ELT approaches',
              'Data architecture patterns',
              'Pipeline design principles',
              'Data governance basics'
            ]
          },
          {
            id: 'de-databases',
            title: 'Databases & Storage Systems',
            description: 'Comprehensive guide to data storage technologies',
            duration: '150 min',
            difficulty: 'beginner',
            topics: [
              'SQL mastery and optimization',
              'Relational vs NoSQL databases',
              'Data warehouses and lakes',
              'Storage optimization',
              'Database selection framework'
            ]
          },
          {
            id: 'de-pipelines',
            title: 'Building Production Data Pipelines',
            description: 'Design, build, and maintain robust data pipelines',
            duration: '180 min',
            difficulty: 'beginner',
            topics: [
              'Pipeline architecture patterns',
              'Fault tolerance and reliability',
              'Monitoring and observability',
              'Apache Airflow orchestration',
              'Testing strategies'
            ]
          },
          {
            id: 'de-linux-basics',
            title: 'Linux Command Line Basics',
            description: 'Essential Linux skills for data engineers',
            duration: '90 min',
            difficulty: 'beginner',
            topics: [
              'File system navigation',
              'File operations and permissions',
              'Process management',
              'Text processing tools',
              'Shell scripting basics'
            ]
          },
          {
            id: 'de-version-control',
            title: 'Version Control with Git',
            description: 'Collaborate effectively with version control',
            duration: '75 min',
            difficulty: 'beginner',
            topics: [
              'Git fundamentals and workflow',
              'Branching and merging',
              'Remote repositories',
              'Collaboration best practices',
              'Git for data projects'
            ]
          },
          {
            id: 'de-cloud-intro',
            title: 'Introduction to Cloud Computing',
            description: 'Cloud platforms and services for data engineering',
            duration: '60 min',
            difficulty: 'beginner',
            topics: [
              'Cloud computing concepts',
              'AWS, Azure, and GCP overview',
              'Storage and compute services',
              'Networking basics',
              'Cost optimization strategies'
            ]
          }
        ]
      },
      intermediate: {
        title: 'Intermediate',
        description: 'Build robust data pipelines and processing systems',
        modules: [
          {
            id: 'de-streaming',
            title: 'Real-time Data Processing & Streaming',
            description: 'Master stream processing and real-time analytics',
            duration: '150 min',
            difficulty: 'intermediate',
            topics: [
              'Stream processing fundamentals',
              'Apache Kafka ecosystem',
              'Event-driven architectures',
              'Windowing and watermarks',
              'Exactly-once processing'
            ]
          },
          {
            id: 'de-cloud',
            title: 'Cloud Data Engineering',
            description: 'Cloud-native data platforms and modern architectures',
            duration: '120 min',
            difficulty: 'intermediate',
            topics: [
              'AWS data services deep dive',
              'Azure data platform',
              'Google Cloud analytics',
              'Multi-cloud strategies',
              'Cost optimization'
            ]
          },
          {
            id: 'de-bigdata',
            title: 'Big Data Technologies',
            description: 'Distributed computing and large-scale data processing',
            duration: '180 min',
            difficulty: 'intermediate',
            topics: [
              'Distributed systems fundamentals',
              'Apache Hadoop ecosystem',
              'Apache Spark mastery',
              'Performance optimization',
              'Cluster management'
            ]
          }
        ]
      },
      advanced: {
        title: 'Advanced',
        description: 'Master enterprise-scale data engineering',
        modules: [
          {
            id: 'de-dataops',
            title: 'DataOps & MLOps',
            description: 'Modern data operations and ML pipeline management',
            duration: '150 min',
            difficulty: 'advanced',
            topics: [
              'DataOps principles and practices',
              'CI/CD for data pipelines',
              'MLOps and model lifecycle management',
              'Feature stores and model serving',
              'Monitoring and observability'
            ]
          },
          {
            id: 'de-security',
            title: 'Data Security & Governance',
            description: 'Data privacy, security, and compliance frameworks',
            duration: '135 min',
            difficulty: 'advanced',
            topics: [
              'Data security fundamentals',
              'Privacy engineering and GDPR compliance',
              'Identity and access management',
              'Secure data architecture',
              'Incident response and recovery'
            ]
          }
        ]
      }
    }
  }
};

// Get all modules for a specific track and level
export const getModulesByTrackAndLevel = (track, level) => {
  return learningPaths[track]?.levels[level]?.modules || [];
};

// Get a specific module by track and module ID
export const getModule = (track, moduleId) => {
  const trackData = learningPaths[track];
  if (!trackData) return null;
  
  for (const level of Object.values(trackData.levels)) {
    const module = level.modules.find(m => m.id === moduleId);
    if (module) return module;
  }
  return null;
};

// Get all modules for a track (all levels)
export const getAllModulesForTrack = (track) => {
  const trackData = learningPaths[track];
  if (!trackData) return [];
  
  const allModules = [];
  Object.values(trackData.levels).forEach(level => {
    allModules.push(...level.modules);
  });
  return allModules;
};
