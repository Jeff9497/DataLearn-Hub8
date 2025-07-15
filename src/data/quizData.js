// Quiz questions for all modules
export const quizData = {
  'ds-intro': {
    title: 'What is Data Science? - Quiz',
    description: 'Test your understanding of data science fundamentals',
    timeLimit: 10, // minutes
    passingScore: 70, // percentage
    questions: [
      {
        id: 1,
        question: "What are the main components of Data Science?",
        options: [
          "Only programming and statistics",
          "Statistics, programming, domain expertise, and communication",
          "Just machine learning and AI",
          "Only data collection and visualization"
        ],
        correct: 1,
        explanation: "Data Science combines statistics & mathematics, programming skills, domain expertise, and communication abilities to extract insights from data.",
        difficulty: "easy"
      },
      {
        id: 2,
        question: "What is the first step in the CRISP-DM methodology?",
        options: [
          "Data Understanding",
          "Data Preparation", 
          "Business Understanding",
          "Modeling"
        ],
        correct: 2,
        explanation: "Business Understanding is the first step in CRISP-DM, where you define business objectives and determine data mining goals.",
        difficulty: "medium"
      },
      {
        id: 3,
        question: "Which role typically focuses on deploying ML models to production?",
        options: [
          "Data Analyst",
          "Machine Learning Engineer",
          "Business Intelligence Developer",
          "Research Scientist"
        ],
        correct: 1,
        explanation: "Machine Learning Engineers specialize in deploying and scaling ML models in production environments, handling MLOps and production systems.",
        difficulty: "medium"
      },
      {
        id: 4,
        question: "What is a key principle of Agile Data Science?",
        options: [
          "Complete all analysis before showing results",
          "Work in isolation from stakeholders",
          "Iterative development with continuous feedback",
          "Focus only on technical accuracy"
        ],
        correct: 2,
        explanation: "Agile Data Science emphasizes iterative development with continuous feedback, collaboration with stakeholders, and adaptability to changing requirements.",
        difficulty: "medium"
      },
      {
        id: 5,
        question: "Which industry application involves personalized treatment plans?",
        options: [
          "Technology",
          "Finance",
          "Healthcare",
          "Retail"
        ],
        correct: 2,
        explanation: "Healthcare applications of data science include personalized treatment plans, along with drug discovery and medical imaging analysis.",
        difficulty: "easy"
      },
      {
        id: 6,
        question: "What does the 'D' in CRISP-DM stand for?",
        options: [
          "Data",
          "Development",
          "Data Mining",
          "Deployment"
        ],
        correct: 2,
        explanation: "CRISP-DM stands for Cross-Industry Standard Process for Data Mining.",
        difficulty: "easy"
      },
      {
        id: 7,
        question: "Which of these is NOT a typical step in the data science process?",
        options: [
          "Problem Definition",
          "Data Collection",
          "Marketing Campaign",
          "Model Validation"
        ],
        correct: 2,
        explanation: "Marketing Campaign is not part of the data science process. The typical steps include problem definition, data collection, cleaning, analysis, modeling, validation, deployment, and monitoring.",
        difficulty: "easy"
      },
      {
        id: 8,
        question: "What is the primary goal of Exploratory Data Analysis (EDA)?",
        options: [
          "To build the final model",
          "To understand data patterns and relationships",
          "To deploy the solution",
          "To collect more data"
        ],
        correct: 1,
        explanation: "EDA aims to understand data patterns, relationships, and characteristics before building models or making decisions.",
        difficulty: "medium"
      },
      {
        id: 9,
        question: "Which programming languages are most commonly used in Data Science?",
        options: [
          "Java and C++",
          "Python and R",
          "JavaScript and PHP",
          "Swift and Kotlin"
        ],
        correct: 1,
        explanation: "Python and R are the most popular programming languages in data science due to their extensive libraries and statistical capabilities.",
        difficulty: "easy"
      },
      {
        id: 10,
        question: "What is the difference between supervised and unsupervised learning?",
        options: [
          "Supervised learning uses labeled data, unsupervised doesn't",
          "Supervised learning is faster than unsupervised",
          "Supervised learning uses more data than unsupervised",
          "There is no difference"
        ],
        correct: 0,
        explanation: "Supervised learning uses labeled training data to learn patterns, while unsupervised learning finds patterns in data without labels.",
        difficulty: "medium"
      }
    ]
  },
  'ds-math-stats': {
    title: 'Mathematics & Statistics Basics - Quiz',
    description: 'Test your understanding of essential mathematical concepts',
    timeLimit: 15,
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What is the difference between population and sample?",
        options: [
          "Population is smaller than sample",
          "Population is the entire group, sample is a subset",
          "They are the same thing",
          "Sample is always more accurate"
        ],
        correct: 1,
        explanation: "A population includes all members of a defined group, while a sample is a subset of the population used for analysis.",
        difficulty: "easy"
      },
      {
        id: 2,
        question: "What does the Central Limit Theorem state?",
        options: [
          "All data follows a normal distribution",
          "Sample means approach normal distribution as sample size increases",
          "Population variance equals sample variance",
          "Correlation implies causation"
        ],
        correct: 1,
        explanation: "The Central Limit Theorem states that the distribution of sample means approaches a normal distribution as the sample size increases, regardless of the population distribution.",
        difficulty: "hard"
      },
      {
        id: 3,
        question: "What is the purpose of hypothesis testing?",
        options: [
          "To prove a hypothesis is true",
          "To make decisions about population parameters based on sample data",
          "To calculate the mean of a dataset",
          "To visualize data distributions"
        ],
        correct: 1,
        explanation: "Hypothesis testing helps make statistical decisions about population parameters using sample data, not to prove hypotheses true.",
        difficulty: "medium"
      },
      {
        id: 4,
        question: "What is a Type I error?",
        options: [
          "Accepting a false null hypothesis",
          "Rejecting a true null hypothesis",
          "Using the wrong statistical test",
          "Having insufficient sample size"
        ],
        correct: 1,
        explanation: "A Type I error occurs when we reject a true null hypothesis (false positive).",
        difficulty: "medium"
      },
      {
        id: 5,
        question: "What does correlation measure?",
        options: [
          "Causation between variables",
          "Linear relationship strength between variables",
          "The mean of two variables",
          "The variance of a dataset"
        ],
        correct: 1,
        explanation: "Correlation measures the strength and direction of a linear relationship between two variables, not causation.",
        difficulty: "easy"
      }
    ]
  },
  'de-intro': {
    title: 'What is Data Engineering? - Quiz',
    description: 'Test your understanding of data engineering fundamentals',
    timeLimit: 10,
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is the primary role of a Data Engineer?",
        options: [
          "Analyze data and create reports",
          "Build and maintain data infrastructure and pipelines",
          "Create machine learning models",
          "Design user interfaces"
        ],
        correct: 1,
        explanation: "Data Engineers focus on building and maintaining the infrastructure and pipelines that enable data collection, storage, and processing.",
        difficulty: "easy"
      },
      {
        id: 2,
        question: "What is the difference between ETL and ELT?",
        options: [
          "ETL is faster than ELT",
          "ETL transforms before loading, ELT loads before transforming",
          "ETL is for small data, ELT is for big data",
          "There is no difference"
        ],
        correct: 1,
        explanation: "ETL (Extract, Transform, Load) transforms data before loading it into the destination, while ELT (Extract, Load, Transform) loads raw data first and then transforms it.",
        difficulty: "medium"
      },
      {
        id: 3,
        question: "What is a data pipeline?",
        options: [
          "A physical pipe for data transfer",
          "A series of data processing steps",
          "A type of database",
          "A visualization tool"
        ],
        correct: 1,
        explanation: "A data pipeline is a series of data processing steps that move data from source to destination, often including transformation and validation.",
        difficulty: "easy"
      },
      {
        id: 4,
        question: "Which of these is a key skill for Data Engineers?",
        options: [
          "Statistical analysis",
          "SQL and database management",
          "Machine learning algorithms",
          "Graphic design"
        ],
        correct: 1,
        explanation: "SQL and database management are fundamental skills for Data Engineers, as they work extensively with data storage and retrieval systems.",
        difficulty: "easy"
      },
      {
        id: 5,
        question: "What is the purpose of data warehousing?",
        options: [
          "To store raw, unprocessed data",
          "To provide a centralized repository for structured, processed data",
          "To backup operational databases",
          "To host web applications"
        ],
        correct: 1,
        explanation: "Data warehouses provide a centralized repository for structured, processed data optimized for analysis and reporting.",
        difficulty: "medium"
      }
    ]
  }
};

// Get quiz data for a specific module
export const getQuizData = (moduleId) => {
  return quizData[moduleId] || null;
};

// Get all available quiz IDs
export const getAvailableQuizIds = () => {
  return Object.keys(quizData);
};

// Shuffle array function for randomizing questions/options
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Calculate quiz score
export const calculateScore = (answers, questions) => {
  const correctAnswers = answers.filter((answer, index) => 
    answer === questions[index].correct
  ).length;
  
  return {
    correct: correctAnswers,
    total: questions.length,
    percentage: Math.round((correctAnswers / questions.length) * 100)
  };
};
