import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    id: 'pirai',
    role: 'AI / RAG Project Intern',
    org: 'Pirai Infotech Private Limited',
    period: '15-day Internship',
    location: 'Remote',
    type: 'Internship',
    summary:
      'Worked on a Retrieval-Augmented Generation (RAG) based PDF assistant involving document processing, embeddings, and ChromaDB-based semantic retrieval.',
    highlights: [
      'Studied and implemented the RAG pipeline for document question answering',
      'Prepared document content, generated embeddings, and stored them in ChromaDB',
      'Used semantic retrieval to identify relevant context for grounded answers',
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
      'Completed an AI/ML internship with hands-on project work across NLP, conversational AI, and generative AI.',
    highlights: [
      'Worked on NLP-based and generative AI projects during the internship',
      'Applied practical AI/ML concepts through guided project tasks',
    ],
  },
  {
    id: 'ihub',
    role: 'AI / Computer Vision / Integration',
    org: 'iHub Robotics / Akshaya College Incubation Lab',
    period: '21 May 2025 – 6 June 2025',
    location: 'On-site',
    type: 'Project',
    summary:
      'Built VisionBot — a computer-vision and robotics system using Python, OpenCV, Haar Cascade face detection, serial communication, Arduino Uno, and servo motors.',
    highlights: [
      'Implemented Haar Cascade face detection with Python and OpenCV',
      'Mapped detected face coordinates to servo-control values',
      'Established serial communication between Python and Arduino Uno',
    ],
  },
  {
    id: 'zoho-cliqtrix',
    role: 'Project Developer',
    org: 'Zoho Cliqtrix 2025',
    period: 'Hackathon / Project',
    location: 'Remote',
    type: 'Program',
    summary:
      'Developed the AI Memory Assistant — a productivity extension for Zoho Cliq with bot commands, a memory widget, and a FastAPI backend.',
    highlights: [
      'Built a FastAPI backend with webhook handling for Zoho Cliq',
      'Implemented /remember, /recall, /summarize, and /forget commands',
      'Added a memory widget and AI smart search for recall',
    ],
  },
];
