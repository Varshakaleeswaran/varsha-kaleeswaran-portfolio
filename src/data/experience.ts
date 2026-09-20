import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    id: 'ihub',
    role: 'AI & Robotics Intern',
    org: 'iHub Robotics / Akshaya College Incubation Lab',
    period: 'May 2025 – Jun 2025',
    location: 'Coimbatore',
    type: 'Internship',
    summary:
      'Developed VisionBot, an AI-powered humanoid robotic head with real-time face detection and object tracking using OpenCV and Arduino, enabling autonomous head and eye movement for human–robot interaction.',
    highlights: [
      'Developed VisionBot — an AI-powered humanoid robotic head using OpenCV and Arduino for autonomous head and eye movement',
      'Implemented Haar Cascade face detection with Python and OpenCV for real-time face tracking',
      'Mapped detected face coordinates to servo-control values and established serial communication with Arduino Uno',
      'Engineered a dual conveyor belt system with a robotic arm for automated object handling by integrating embedded systems',
    ],
  },
  {
    id: 'codealpha',
    role: 'AI Intern',
    org: 'CodeAlpha',
    period: 'Dec 2025 – Jan 2026',
    location: 'Remote',
    type: 'Internship',
    summary:
      'Developed end-to-end Machine Learning and NLP applications including Sentiment Analysis and Salary Prediction, implementing data preprocessing, feature engineering, model training, evaluation, and predictive modeling.',
    highlights: [
      'Built end-to-end ML and NLP applications including Sentiment Analysis and Salary Prediction',
      'Implemented data preprocessing, feature engineering, model training, and evaluation workflows',
      'Optimized model performance through feature selection, hyperparameter tuning, and comparative analysis',
      'Followed software development best practices including technical documentation and debugging',
    ],
  },
  {
    id: 'pirai',
    role: 'AI/ML Intern',
    org: 'Pirai Infotech Pvt. Ltd.',
    period: 'Mar 2026',
    location: 'Coimbatore',
    type: 'Internship',
    summary:
      'Developed a Retrieval-Augmented Generation (RAG) application using LangChain and ChromaDB, implementing vector embeddings, semantic search, and document chunking to enable accurate, context-aware question answering.',
    highlights: [
      'Developed a RAG application using LangChain and ChromaDB with vector embeddings, semantic search, and document chunking',
      'Built an end-to-end AI retrieval pipeline integrating LLMs, prompt engineering, FastAPI, and Streamlit',
      'Optimized retrieval relevance and response quality through iterative testing and performance tuning',
      'Reduced LLM hallucinations by grounding responses in retrieved document context',
    ],
  },
];
