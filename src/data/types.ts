export type IconName =
  | 'Cpu'
  | 'Brain'
  | 'MessageSquare'
  | 'Database'
  | 'Eye'
  | 'Code'
  | 'Layers'
  | 'Search'
  | 'Bot'
  | 'FileText'
  | 'Building2'
  | 'Car'
  | 'Gavel'
  | 'Sparkles'
  | 'Music'
  | 'Languages'
  | 'ScanFace'
  | 'Github'
  | 'ExternalLink'
  | 'ArrowRight'
  | 'Download'
  | 'Linkedin'
  | 'Mail'
  | 'MapPin'
  | 'GraduationCap'
  | 'Briefcase'
  | 'Award'
  | 'Send'
  | 'Menu'
  | 'X'
  | 'ChevronDown'
  | 'Terminal'
  | 'Workflow'
  | 'Lightbulb'
  | 'Target'
  | 'CheckCircle2'
  | 'AlertTriangle'
  | 'Rocket'
  | 'Store'
  | 'Users'
  | 'Clock'
  | 'Zap';

export type AccentColor = 'cyan' | 'blue' | 'violet';

export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  icon: IconName;
  accent: AccentColor;
  skills: Skill[];
}

export type ProjectStatus = 'Completed' | 'Ongoing';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  role: string;
  technologies: string[];
  github?: string;
  period?: string;
  context?: string;
  icon: IconName;
  accent: AccentColor;
}

export interface StarExplanation {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface InputProcessingOutput {
  input: string;
  processing: string;
  output: string;
}

export interface CaseStudy {
  projectId: string;
  problem: string;
  objective: string;
  role: string;
  star: StarExplanation;
  technologies: string[];
  architecture: string[];
  workflow: string[];
  implementation: string;
  aiApproach: string;
  promptEngineering: string;
  inputProcessingOutput: InputProcessingOutput;
  challenges: string[];
  solutions: string[];
  resultsOrStatus: string;
  limitations: string[];
  futureImprovements: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  type: 'Internship' | 'Project' | 'Program';
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  affiliation: string;
  cgpa: string;
  achievement: string;
  expectedGraduation: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: IconName;
}
