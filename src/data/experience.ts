import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    id: 'pirai',
    role: 'AI / RAG Developer Intern',
    org: 'Pirai Infotech',
    period: 'Internship',
    location: 'Remote',
    type: 'Internship',
    summary:
      'Worked on a Retrieval-Augmented Generation (RAG) based PDF assistant involving document processing, embeddings, and semantic retrieval.',
    highlights: [
      'Built RAG pipeline for PDF document understanding and query answering',
      'Generated and stored document embeddings in ChromaDB',
      'Implemented semantic retrieval to ground LLM responses in source documents',
    ],
  },
  {
    id: 'zoho',
    role: 'AI Developer Intern',
    org: 'Zoho Cliq',
    period: 'Internship',
    location: 'Remote',
    type: 'Internship',
    summary:
      'Developed an AI Memory Assistant with persistent memory and semantic search, integrated with Zoho Cliq and backed by a FastAPI server.',
    highlights: [
      'Designed a FastAPI backend for AI memory and semantic search',
      'Integrated the assistant with Zoho Cliq for conversation continuity',
      'Implemented persistent memory to retain context across sessions',
    ],
  },
  {
    id: 'codealpha',
    role: 'AI / ML Intern',
    org: 'CodeAlpha',
    period: 'Internship',
    location: 'Remote',
    type: 'Internship',
    summary:
      'Completed internship projects spanning language translation, AI chatbot development, and AI music generation.',
    highlights: [
      'Language Translator — NLP-based translation project',
      'AI Chatbot — conversational AI project',
      'AI Music Generation — generative AI audio project',
    ],
  },
  {
    id: 'btech',
    role: 'B.Tech — Artificial Intelligence & Data Science',
    org: 'Final Year Student',
    period: 'Currently Pursuing',
    location: 'India',
    type: 'Academic',
    summary:
      'Final-year B.Tech student in Artificial Intelligence and Data Science, focused on building practical AI systems and intelligent applications.',
    highlights: [
      'Coursework in Machine Learning, Deep Learning, NLP, and Computer Vision',
      'Final-Year Project: AI-Based Accident Detection System (under development)',
      'Hands-on projects in Generative AI, LLM applications, and RAG',
    ],
    current: true,
  },
];
