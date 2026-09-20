import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Generative AI & LLM',
    icon: 'Sparkles',
    accent: 'violet',
    skills: [
      { name: 'Generative AI' },
      { name: 'LLM Applications' },
      { name: 'Prompt Engineering' },
      { name: 'RAG' },
    ],
  },
  {
    category: 'Prompt Engineering',
    icon: 'MessageSquare',
    accent: 'cyan',
    skills: [
      { name: 'Instruction Design' },
      { name: 'Role / Context Prompting' },
      { name: 'Few-Shot Prompting' },
      { name: 'Structured Outputs' },
      { name: 'Context Engineering' },
      { name: 'Prompt Refinement' },
      { name: 'Hallucination Reduction' },
      { name: 'Evaluation & Iterative Improvement' },
    ],
  },
  {
    category: 'Retrieval & NLP',
    icon: 'Database',
    accent: 'blue',
    skills: [
      { name: 'RAG' },
      { name: 'Embeddings' },
      { name: 'Vector Search' },
      { name: 'ChromaDB' },
      { name: 'NLP' },
      { name: 'Document Processing' },
      { name: 'Semantic Retrieval' },
    ],
  },
  {
    category: 'Computer Vision',
    icon: 'Eye',
    accent: 'violet',
    skills: [
      { name: 'Computer Vision' },
      { name: 'OpenCV' },
      { name: 'Haar Cascade' },
      { name: 'YOLO' },
    ],
  },
  {
    category: 'Programming & Tools',
    icon: 'Code',
    accent: 'blue',
    skills: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Google Colab' },
    ],
  },
];
