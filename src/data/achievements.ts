export type AchievementCategory = 'Competitive' | 'Leadership' | 'Recognition';

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  category: AchievementCategory;
  status?: string;
  date?: string;
  description: string;
  role?: string;
  team?: string;
  url?: string;
  urlLabel?: string;
}

export const achievements: Achievement[] = [
  // ── COMPETITIVE ─────────────────────────────────────────────────────────
  {
    id: 'pentathon-2025',
    title: 'Pentathon 2025 — Finalist',
    organization: 'AICTE',
    category: 'Competitive',
    status: 'Finalist',
    description: 'Finalist in Pentathon 2025.',
  },
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon 2025 — Internally Selected',
    organization: 'Smart India Hackathon',
    category: 'Competitive',
    status: 'Internally Selected',
    description: 'Internally selected for Smart India Hackathon 2025.',
  },
  {
    id: 'flipkart-grid-7',
    title: 'Flipkart GRiD 7.0 — Advanced to Round 2',
    organization: 'Flipkart',
    category: 'Competitive',
    status: 'Round 2',
    description:
      'Cleared Round 1 (Resume Screening) and advanced to the Round 2 coding assessment. Participated in the 90-minute proctored coding assessment.',
  },
  {
    id: 'prince-isolve-hack-26',
    title: "Prince iSolve Hack '26 — Finalist",
    organization: 'Prince Shri Venkateshwara Padmavathy Engineering College',
    category: 'Competitive',
    status: 'Finalist',
    date: '21 February 2026',
    team: 'Team SmartHacks',
    description:
      "Cleared Round 1 (PPT Submission) and was selected as a finalist for Round 2 of the Prince iSolve Hack '26 – 12-Hour Hackathon.",
  },
  {
    id: 'google-genai-exchange-2025',
    title: 'Google Cloud Gen AI Exchange Hackathon 2025',
    organization: 'Google Cloud · Hack2Skill',
    category: 'Competitive',
    status: 'Team Leader',
    role: 'Team Leader',
    team: 'Team SmartHacks',
    description:
      'Served as Team Leader of Team SmartHacks and participated in the Google Cloud Gen AI Exchange Hackathon 2025. Developed an AI-powered solution focused on simplifying complex legal documents using Generative AI.',
    url: 'https://lnkd.in/gQVAE6wP',
    urlLabel: 'View Certificate',
  },
  {
    id: 'zoho-cliqtrix-2025',
    title: 'Zoho Cliqtrix 2025 Hackathon',
    organization: 'Zoho Cliqtrix',
    category: 'Competitive',
    status: 'Participant',
    description:
      'Participated in the Zoho Cliqtrix 2025 Hackathon. Developed AI Memory Assistant — a productivity extension for Zoho Cliq.',
  },
  {
    id: 'amazon-hackon',
    title: 'Amazon HackOn',
    organization: 'Amazon',
    category: 'Competitive',
    status: 'Participant',
    description: 'Participated in Amazon HackOn.',
  },
  {
    id: 'girlscript-soc-2025',
    title: 'GirlScript Summer of Code 2025',
    organization: 'GirlScript Foundation',
    category: 'Competitive',
    status: 'Participant',
    description: 'Participated in GirlScript Summer of Code 2025.',
  },

  // ── LEADERSHIP ───────────────────────────────────────────────────────────
  {
    id: 'edc-student-coordinator',
    title: 'Student Coordinator — Entrepreneurship Development Cell (EDC)',
    organization: 'P.A. College of Engineering & Technology',
    category: 'Leadership',
    status: 'Student Coordinator',
    description:
      "Served as a Student Coordinator of the Entrepreneurship Development Cell and contributed to organizing and hosting the session 'From Idea to Impact: The Entrepreneurial Journey'. Hosted Mr. NRR Vijayakumar for a session focused on entrepreneurship and innovation.",
  },
  {
    id: 'ai-ds-association',
    title: 'Executive Member — AI & DS Association',
    organization: 'Artificial Intelligence & Data Science Association · P.A. College of Engineering & Technology',
    category: 'Leadership',
    status: 'Executive Member',
    description:
      'Served as an Executive Member of the AI & DS Association, contributing to departmental technical, academic, and student activities.',
  },
  {
    id: 'tamil-mandram-music-club',
    title: 'Executive Member — Tamil Mandram & Music Club',
    organization: 'P.A. College of Engineering & Technology',
    category: 'Leadership',
    status: 'Executive Member',
    description:
      'Served as an Executive Member of the Tamil Mandram and Music Club, contributing to student, cultural, and extracurricular activities.',
  },

  // ── RECOGNITION ──────────────────────────────────────────────────────────
  {
    id: 'infosys-warrior-badge',
    title: 'Infosys Warrior Badge',
    organization: 'Infosys',
    category: 'Recognition',
    status: 'Warrior Badge',
    description: 'Received the Infosys Warrior Badge.',
  },
  {
    id: 'english-poetry-first-prize',
    title: '1st Prize — English Poetry Competition',
    category: 'Recognition',
    status: '1st Prize',
    description: 'Awarded 1st Prize in an English Poetry Competition.',
  },
];
