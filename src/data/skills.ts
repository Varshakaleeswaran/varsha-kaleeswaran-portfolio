import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Generative AI & LLMs',
    icon: 'Sparkles',
    accent: 'violet',
    skills: [
      { name: 'Generative AI' },
      { name: 'LLM Applications' },
      { name: 'Prompt Engineering' },
      { name: 'RAG (Retrieval-Augmented Generation)' },
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
    category: 'RAG & Semantic Search',
    icon: 'Database',
    accent: 'blue',
    skills: [
      { name: 'RAG Pipelines' },
      { name: 'Embeddings' },
      { name: 'ChromaDB' },
      { name: 'Semantic Retrieval' },
      { name: 'Document Processing' },
    ],
  },
  {
    category: 'Machine Learning',
    icon: 'Brain',
    accent: 'violet',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Model Evaluation' },
      { name: 'Feature Engineering' },
    ],
  },
  {
    category: 'Deep Learning',
    icon: 'Layers',
    accent: 'blue',
    skills: [
      { name: 'Deep Learning' },
      { name: 'Neural Networks' },
      { name: 'Real-Time Inference' },
    ],
  },
  {
    category: 'NLP',
    icon: 'Languages',
    accent: 'cyan',
    skills: [{ name: 'Natural Language Processing' }],
  },
  {
    category: 'Computer Vision',
    icon: 'Eye',
    accent: 'violet',
    skills: [{ name: 'OpenCV' }, { name: 'YOLO' }, { name: 'Haar Cascade' }],
  },
  {
    category: 'Languages & Frameworks',
    icon: 'Code',
    accent: 'blue',
    skills: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'FastAPI' },
      { name: 'Streamlit' },
      { name: 'Git & GitHub' },
    ],
  },
];
