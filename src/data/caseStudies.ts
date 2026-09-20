import type { CaseStudy } from './types';

export const caseStudies: CaseStudy[] = [
  {
    projectId: 'career-forge',
    problem:
      'Students and job seekers often know the role they want but do not have a structured way to compare their current resume skills with the skills expected for that role.',
    objective:
      'Build an AI-powered career intelligence application that can analyze a resume for a selected career role, identify matched and missing skills, and provide career-readiness feedback.',
    role: 'Project Developer',
    star: {
      situation:
        'Students and job seekers often know the role they want but do not have a structured way to compare their current resume skills with the skills expected for that role.',
      task: 'Build an AI-powered career intelligence application that can analyze a resume for a selected career role, identify matched and missing skills, and provide career-readiness feedback.',
      action:
        'I developed the application using Streamlit for the user interface and FastAPI for the backend. I implemented PDF resume processing using PyMuPDF, extracted resume text, and passed the relevant content to the Groq API using the llama-3.3-70b-versatile model. I designed a structured JSON extraction prompt so the LLM returns technical skills, soft skills, education, projects, and experience information in a predictable format. I then normalized the extracted technical skills and compared them with predefined skill requirements for the selected role. I implemented the matched-skill, missing-skill, and match-percentage calculation and displayed the results through the Streamlit interface.',
      result:
        'The application can analyze a PDF resume against supported career roles and return structured career-readiness information including matched skills, missing skills, detected skills, education, projects, match percentage, and role-based feedback.',
    },
    technologies: [
      'Python',
      'FastAPI',
      'Streamlit',
      'PyMuPDF / fitz',
      'Groq API',
      'llama-3.3-70b-versatile',
      'JSON',
      'Prompt Engineering',
    ],
    architecture: [
      'PDF Resume',
      'Streamlit UI',
      'FastAPI /analyze endpoint',
      'PyMuPDF text extraction',
      'Groq LLM structured extraction',
      'JSON parsing',
      'Skill normalization',
      'Role-skill comparison',
      'Match percentage',
      'Career-readiness result',
      'Streamlit dashboard',
    ],
    workflow: [
      'User selects a target career role',
      'User uploads a PDF resume through Streamlit',
      'Streamlit sends the PDF and selected role to the FastAPI /analyze endpoint',
      'FastAPI temporarily stores the uploaded file',
      'PyMuPDF extracts text from the PDF',
      'Extracted resume text is sent to the Groq LLM',
      'A structured JSON extraction prompt is used',
      'The model is asked to return technical_skills, soft_skills, education, projects, and experience_years',
      'Backend parses the returned JSON',
      'Technical skills are normalized to lowercase',
      'Required skills for the selected role are loaded',
      'Matching skills are calculated',
      'Missing skills are calculated',
      'Match percentage is calculated',
      'Results are returned as JSON',
      'Streamlit displays the analysis',
    ],
    implementation:
      'I implemented PDF resume processing with PyMuPDF, structured LLM extraction via the Groq API (llama-3.3-70b-versatile), JSON parsing, skill normalization to lowercase, and a match calculation of (matched required skills / total required role skills) \u00d7 100. Supported target roles include ML Engineer, Data Analyst, Data Scientist, and Software Engineer, each with predefined skill mappings. The feedback logic returns "Strong match!" for scores \u2265 70, "Keep learning!" for scores \u2265 40, and "More skills needed" otherwise. The first 3000 characters of the resume are passed into the prompt.',
    aiApproach:
      'The AI approach uses the Groq API with the llama-3.3-70b-versatile model for structured resume information extraction. The model is instructed to return a fixed JSON schema containing technical_skills, soft_skills, education, projects, and experience_years. Technical skills are then normalized and compared against predefined role-skill mappings to compute a match percentage.',
    promptEngineering:
      'The resume parser uses an explicit extraction prompt. The prompt defines the model\u2019s role as a resume parser, defines the extraction task, requires a fixed JSON schema, requires JSON-only output, and prohibits markdown, backticks, and explanatory text. Temperature is set to 0.1 for deterministic, structured output. The first 3000 characters of the resume content are passed into the prompt to fit within context limits while preserving the most relevant information.',
    inputProcessingOutput: {
      input: 'PDF Resume + Target Career Role',
      processing:
        'PDF text extraction \u2192 structured LLM extraction \u2192 technical-skill normalization \u2192 role skill lookup \u2192 matching \u2192 missing-skill calculation \u2192 percentage calculation',
      output:
        'Extracted resume information + Matched Skills + Missing Skills + Match Percentage + Career-readiness Feedback',
    },
    challenges: [
      'Getting the LLM to reliably return valid JSON without markdown wrappers or explanatory text',
      'Normalizing extracted skills consistently so they can be compared against role requirements',
      'Handling resumes of varying length within the model\u2019s context window',
    ],
    solutions: [
      'Designed a strict structured-output prompt that prohibits markdown, backticks, and explanatory text, with temperature 0.1',
      'Normalized all extracted technical skills to lowercase before comparison',
      'Passed the first 3000 characters of the resume into the prompt to fit within context limits',
    ],
    resultsOrStatus:
      'The application can analyze a PDF resume against supported career roles and return structured career-readiness information including matched skills, missing skills, detected skills, education, projects, match percentage, and role-based feedback. This project is the combination/final presentation of my AI Career Mentor work.',
    limitations: [
      'The current implementation depends on predefined role-skill mappings and does not represent a generalized real-time labor-market recommendation engine.',
    ],
    futureImprovements: [
      'Expand role coverage',
      'Improve skill normalization',
      'Add richer career recommendations',
      'Integrate current job-market data',
      'Improve handling of longer resumes',
      'Add evaluation datasets for extraction quality',
    ],
  },
  {
    projectId: 'rag-pdf-assistant',
    problem:
      'Long documents can be difficult to search manually when users need answers from specific document content.',
    objective:
      'Learn and implement a Retrieval-Augmented Generation workflow for document question answering using embeddings and ChromaDB.',
    role: 'RAG / AI Project Intern',
    star: {
      situation:
        'Long documents can be difficult to search manually when users need answers from specific document content.',
      task: 'Learn and implement a Retrieval-Augmented Generation workflow for document question answering using embeddings and ChromaDB.',
      action:
        'I worked on document processing, embeddings, and ChromaDB-based retrieval as part of the internship project. I studied the RAG pipeline, prepared document content for retrieval, converted content into embeddings, stored the resulting representations in ChromaDB, and used semantic retrieval to identify relevant context for document-based question answering.',
      result:
        'I implemented and documented a RAG workflow that demonstrates how document information can be retrieved semantically and used as context for question answering.',
    },
    technologies: ['Python', 'RAG', 'Embeddings', 'ChromaDB', 'Document Processing', 'Semantic Retrieval'],
    architecture: [
      'Document',
      'Text Processing',
      'Chunking',
      'Embeddings',
      'ChromaDB',
      'Similarity Retrieval',
      'Relevant Context',
      'Answer Generation',
    ],
    workflow: [
      'Document ingestion and text preparation',
      'Chunking of document content',
      'Conversion of chunks into embeddings',
      'Storage of embeddings in ChromaDB',
      'Semantic similarity retrieval for a user question',
      'Construction of relevant context from retrieved chunks',
      'Answer generation using the retrieved context',
    ],
    implementation:
      'I prepared document content for retrieval, chunked the text, converted chunks into embeddings, stored the resulting representations in ChromaDB, and used semantic retrieval to identify relevant context for document-based question answering.',
    aiApproach:
      'The RAG approach retrieves relevant evidence before generation, grounds responses on document context, reduces unsupported answers, and enables document-specific question answering.',
    promptEngineering:
      'Prompting plays a role at the answer-generation stage, where retrieved document context is supplied to the generation process to ground the response in the source material.',
    inputProcessingOutput: {
      input: 'PDF / Document + User Question',
      processing:
        'Document ingestion \u2192 text preparation \u2192 chunking \u2192 embeddings \u2192 vector storage in ChromaDB \u2192 semantic retrieval \u2192 context construction \u2192 generation',
      output: 'Document-grounded response',
    },
    challenges: [
      'Preparing document content so it can be effectively chunked and retrieved',
      'Understanding and implementing the full RAG pipeline within the internship period',
    ],
    solutions: [
      'Studied the RAG pipeline and applied it step by step: document processing, embeddings, ChromaDB storage, and semantic retrieval',
      'Documented the workflow to reinforce understanding and enable future iteration',
    ],
    resultsOrStatus:
      'I implemented and documented a RAG workflow that demonstrates how document information can be retrieved semantically and used as context for question answering.',
    limitations: [
      'The exact model configuration and evaluation details are not fabricated when they are not documented.',
    ],
    futureImprovements: [
      'Stronger retrieval evaluation',
      'Better chunking strategies',
      'Retrieval-quality analysis',
      'Richer document support',
      'Answer evaluation',
    ],
  },
  {
    projectId: 'ai-memory-assistant',
    problem:
      'Users often receive useful information through workplace chat but may struggle to save, find, and recall it later.',
    objective:
      'Build a productivity extension for Zoho Cliq that lets users save, recall, search, summarize, and manage useful information directly through chat-based interactions.',
    role: 'Project Developer',
    star: {
      situation:
        'Users often receive useful information through workplace chat but may struggle to save, find, and recall it later.',
      task: 'Build a productivity extension for Zoho Cliq that lets users save, recall, search, summarize, and manage useful information directly through chat-based interactions.',
      action:
        'I developed the Zoho Cliq extension with bot commands, a memory widget, webhooks, and a FastAPI backend. The backend receives requests from Cliq, processes memory operations, stores and searches memory data using JSON storage, and sends the result back to the Cliq interface. I implemented commands such as /remember, /recall, /summarize, and /forget, along with semantic smart search and a memory widget.',
      result:
        'The project provides a conversational memory system inside Zoho Cliq where users can save information, retrieve memories, summarize content, and manage stored items through chat commands and the widget interface.',
    },
    technologies: [
      'Zoho Cliq Developer Platform',
      'FastAPI',
      'Render',
      'JSON Storage',
      'JavaScript',
    ],
    architecture: [
      'Zoho Cliq Extension',
      'Bot',
      'Commands',
      'Widget',
      'Webhook',
      'FastAPI Backend',
      'Memory Processing',
      'JSON Storage / Search',
      'Response',
      'Zoho Cliq',
    ],
    workflow: [
      'User sends a chat command in Zoho Cliq (e.g. /remember, /recall, /summarize, /forget)',
      'Cliq sends the request through the webhook to the FastAPI backend',
      'The backend processes the memory operation (store, retrieve, summarize, or delete)',
      'Memory data is stored and searched using JSON storage',
      'The result is sent back to the Zoho Cliq interface',
    ],
    implementation:
      'I implemented bot commands (/remember, /recall, /summarize, /forget), a memory widget, webhooks, and a FastAPI backend that handles memory operations with JSON storage and smart search. The backend is deployed on Render.',
    aiApproach:
      'AI smart search uses semantic matching to improve recall of stored memories, helping users find relevant information even when the exact wording does not match.',
    promptEngineering:
      'Not a primary component of this project. Summarization is handled through the backend, but the project is not a RAG pipeline and no specific model details are claimed.',
    inputProcessingOutput: {
      input: 'Chat command or Memory text',
      processing:
        'Command handling \u2192 backend request \u2192 memory storage / retrieval / summarization \u2192 response',
      output: 'Retrieved memory, Summary, or Confirmation inside Zoho Cliq',
    },
    challenges: [
      'Connecting the Zoho Cliq extension to a custom FastAPI backend through webhooks',
      'Designing memory operations that work naturally within a chat-command interface',
      'Deploying the backend so it stays reachable from Cliq',
    ],
    solutions: [
      'Built the FastAPI backend with webhook handling and deployed it on Render',
      'Implemented clear chat commands (/remember, /recall, /summarize, /forget) and a memory widget',
      'Used JSON storage for memory persistence and smart search for recall',
    ],
    resultsOrStatus:
      'The project provides a conversational memory system inside Zoho Cliq where users can save information, retrieve memories, summarize content, and manage stored items through chat commands and the widget interface.',
    limitations: [
      'Uses JSON storage rather than a dedicated vector database, so semantic search capabilities are limited compared to a full RAG implementation.',
    ],
    futureImprovements: [
      'Upgrade memory storage to a vector database for stronger semantic search',
      'Add richer summarization options',
      'Improve daily summary scheduling',
    ],
  },
  {
    projectId: 'ai-legalease',
    problem:
      'Legal documents often contain complex terminology and clauses that are difficult for non-specialist users to understand.',
    objective:
      'Develop an AI-assisted application that simplifies legal documents and provides accessible document analysis.',
    role: 'Team Lead — Backend AI/NLP',
    star: {
      situation:
        'Legal documents often contain complex terminology and clauses that are difficult for non-specialist users to understand.',
      task: 'Develop an AI-assisted application that simplifies legal documents and provides accessible document analysis.',
      action:
        'As Team Lead for Backend AI/NLP, I worked on the AI/NLP side of the application, focusing on processing legal-document content and supporting capabilities such as plain-language summarization, risk highlighting, multilingual support, and conversational question answering using Generative AI.',
      result:
        'The application provides AI-assisted legal document analysis through simplified summaries, risk indication, multilingual support, and document-related Q&A.',
    },
    technologies: ['Google Cloud Generative AI', 'AI', 'NLP'],
    architecture: [
      'PDF / DOCX',
      'Document Input',
      'Text / Content Processing',
      'Generative AI / NLP Processing',
      'Summarization / Risk Analysis / Q&A / Language Support',
      'User-facing Result',
    ],
    workflow: [
      'User uploads a PDF or DOCX legal document',
      'Document content is processed and extracted',
      'Generative AI / NLP processes the content',
      'Summarization, risk analysis, Q&A, and multilingual support are applied',
      'The user-facing result is returned',
    ],
    implementation:
      'As Team Lead for Backend AI/NLP, I worked on processing legal-document content and supporting plain-language summarization, risk highlighting (Safe, Moderate, Risky), multilingual support, and conversational Q&A using Generative AI.',
    aiApproach:
      'The application uses Google Cloud Generative AI for NLP-based document processing, including summarization, risk categorization, multilingual support, and document-related Q&A.',
    promptEngineering:
      'Prompting is used to guide the Generative AI model to produce simplified summaries, classify risk levels, and answer document-related questions in accessible language.',
    inputProcessingOutput: {
      input: 'Legal document + User request',
      processing: 'Document content processing \u2192 AI/NLP analysis \u2192 requested task',
      output: 'Simplified legal information + AI-assisted analysis',
    },
    challenges: [
      'Processing legal documents with complex terminology into accessible language',
      'Providing meaningful risk categorization without overstepping the limits of AI-assisted analysis',
    ],
    solutions: [
      'Used Generative AI for plain-language summarization and risk highlighting with clear categories (Safe, Moderate, Risky)',
      'Added multilingual support and conversational Q&A to improve accessibility',
    ],
    resultsOrStatus:
      'The application provides AI-assisted legal document analysis through simplified summaries, risk indication, multilingual support, and document-related Q&A. This is AI-assisted legal document analysis, not professional legal advice.',
    limitations: [
      'This is AI-assisted legal document analysis and does not provide professional legal advice or guaranteed legal correctness.',
    ],
    futureImprovements: [
      'Improve risk categorization accuracy',
      'Expand multilingual coverage',
      'Add support for more document formats',
    ],
  },
  {
    projectId: 'civic-connect',
    problem:
      'Citizens need a convenient way to report civic issues, while authorities need structured visibility into complaints, evidence, status, location, and resolution.',
    objective:
      'Build a civic issue management platform that connects citizen reporting with authority-side tracking and resolution workflows.',
    role: 'Project Contributor',
    star: {
      situation:
        'Citizens need a convenient way to report civic issues, while authorities need structured visibility into complaints, evidence, status, location, and resolution.',
      task: 'Build a civic issue management platform that connects citizen reporting with authority-side tracking and resolution workflows.',
      action:
        'I contributed to the development of the Civic Connect platform using React, TypeScript, Vite, Tailwind CSS, shadcn/ui, and Supabase. The platform supports issue reporting, evidence submission, complaint tracking, dashboards, location-based visualization, notifications, and AI-assisted issue categorization.',
      result:
        'The platform provides a structured workflow from civic issue reporting to tracking and evidence-based resolution, with dashboards and map-based visibility.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Supabase',
      'PostgreSQL',
      'Recharts',
      'Lucide React',
      'Vitest',
    ],
    architecture: [
      'Citizen / Officer',
      'React + TypeScript Frontend',
      'Supabase',
      'PostgreSQL',
      'Authentication / Storage',
      'Dashboard / Tracking / Map / Notifications',
    ],
    workflow: [
      'A citizen raises a complaint with AI-assisted categorization',
      'Complaint progress is tracked from Pending to Resolved in real time',
      'Workers provide video proof of completion to close tasks',
      'Officers manage resources and priorities through a smart dashboard',
      'An interactive map provides location-based issue visualization',
      'Notifications update users and workers when task status changes',
    ],
    implementation:
      'I contributed to the frontend built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui, with Supabase for backend, PostgreSQL, authentication, and storage. The platform includes automated issue reporting with AI-assisted categorization, real-time tracking, evidence-based resolution, a smart dashboard, an interactive map, and a notification system.',
    aiApproach:
      'The AI component provides AI-assisted issue categorization to help structure citizen complaints. No specific AI model or API is claimed unless verified in the source.',
    promptEngineering:
      'Not a primary component of this project.',
    inputProcessingOutput: {
      input: 'Citizen complaint + evidence + location',
      processing:
        'Issue reporting with AI-assisted categorization \u2192 tracking \u2192 evidence submission \u2192 dashboard management \u2192 notification',
      output: 'Tracked, evidence-based civic issue resolution with map and dashboard visibility',
    },
    challenges: [
      'Building a structured workflow that connects citizen reporting with authority-side resolution',
      'Integrating real-time tracking, evidence submission, and map-based visualization in one platform',
    ],
    solutions: [
      'Used React, TypeScript, and Supabase to build a connected citizen-officer workflow',
      'Implemented real-time tracking, evidence-based closure, dashboards, and interactive maps',
    ],
    resultsOrStatus:
      'The platform provides a structured workflow from civic issue reporting to tracking and evidence-based resolution, with dashboards and map-based visibility.',
    limitations: [
      'The AI-assisted categorization component does not replace manual review by authorities.',
    ],
    futureImprovements: [
      'Expand AI-assisted categorization coverage',
      'Add analytics for civic issue trends',
      'Improve notification delivery',
    ],
  },
  {
    projectId: 'retail-intelligence',
    problem:
      'Retail stores can face operational issues such as stock-outs, shelf-management problems, customer congestion, and limited visibility into customer movement, especially in environments with constrained connectivity.',
    objective:
      'Develop an edge-AI retail intelligence platform that converts camera-based retail signals into actionable operational insights.',
    role: 'Team Member — Smart India Hackathon 2026 PS 179',
    star: {
      situation:
        'Retail stores can face operational issues such as stock-outs, shelf-management problems, customer congestion, and limited visibility into customer movement, especially in environments with constrained connectivity.',
      task: 'Develop an edge-AI retail intelligence platform that converts camera-based retail signals into actionable operational insights.',
      action:
        'I am currently working on the project architecture and prototype. The planned system processes retail camera input locally using edge AI, extracts operational signals such as customer traffic, dwell time, shelf visibility, and queue conditions, and converts those signals into actionable insights for retailers.',
      result:
        'The project is currently under development. The target outcome is a retail intelligence system that can provide local, low-latency operational insights while reducing dependence on cloud connectivity.',
    },
    technologies: ['Computer Vision', 'Edge AI', 'Real-Time AI', 'Retail Analytics'],
    architecture: [
      'Camera / Video Input',
      'Edge / On-Device Computer Vision',
      'Signal Extraction',
      'Intelligence / Risk Analysis',
      'Actionable Insight',
      'Retailer Action',
    ],
    workflow: [
      'Retail camera feed is captured',
      'Edge / on-device computer vision processes the feed locally',
      'Operational signals are extracted (customer traffic, dwell, shelf visibility, queue)',
      'Intelligence / risk analysis converts signals into insights',
      'Actionable insights are delivered to the retailer',
    ],
    implementation:
      'Architecture and prototype are currently under development. No completed implementation, final hardware, final model, final dataset, final accuracy, FPS, completed deployment, or benchmark is claimed.',
    aiApproach:
      'The planned edge-AI approach uses local processing for low latency, reduced cloud dependency, privacy-conscious handling of camera data, and suitability for constrained-connectivity retail environments. Planned intelligence areas include customer traffic patterns, customer dwell / engagement, out-of-stock product detection, shelf compliance, queue congestion prediction, and retail operational insights.',
    promptEngineering:
      'Not a primary component of this project.',
    inputProcessingOutput: {
      input: 'Retail camera feed',
      processing:
        'Edge processing \u2192 computer vision \u2192 signal extraction \u2192 intelligence / risk analysis \u2192 actionable insight',
      output: 'Stock-out risk, Queue congestion insight, Customer traffic / dwell insight, Retail operational action',
    },
    challenges: [
      'Designing an architecture that works in connectivity-constrained retail environments',
      'Converting raw camera signals into meaningful operational insights',
    ],
    solutions: [
      'Planned an edge-AI architecture that processes camera feeds locally to reduce cloud dependency',
      'Defined a Signal \u2192 Insight \u2192 Action concept to map raw signals to retailer actions',
    ],
    resultsOrStatus:
      'No final results or performance metrics are claimed because the project is currently under development.',
    limitations: [
      'Final implementation, hardware, models, and benchmark evaluation are still under development.',
    ],
    futureImprovements: [
      'Finalize implementation decisions as development progresses',
    ],
  },
  {
    projectId: 'accident-detection',
    problem:
      'Accident-related incidents on roads can require timely identification so that people can become aware of potentially hazardous situations sooner.',
    objective:
      'Develop an AI-based computer vision system for detecting accident-related events from visual input.',
    role: 'Final-Year Project Team Member',
    star: {
      situation:
        'Accident-related incidents on roads can require timely identification so that people can become aware of potentially hazardous situations sooner.',
      task: 'Develop an AI-based computer vision system for detecting accident-related events from visual input.',
      action:
        'I am currently working as part of the final-year project team on the development of the accident-detection system. The implementation is still in progress, including the model, dataset, evaluation, and final system workflow.',
      result:
        'The project is currently under development. No final accuracy or benchmark is claimed at this stage.',
    },
    technologies: ['Computer Vision', 'Deep Learning', 'Real-Time AI'],
    architecture: [
      'Visual Input',
      'Computer Vision Processing',
      'Accident / Event Detection',
      'Result / Alert Workflow',
    ],
    workflow: [
      'Visual / video input is captured',
      'Computer vision processing analyzes the input',
      'Accident / event detection is performed',
      'A detection result or alert workflow is produced',
    ],
    implementation:
      'Computer-vision and deep-learning based accident detection approach under development. Model, dataset, evaluation, and deployment are not finalized.',
    aiApproach:
      'A computer-vision and deep-learning based accident detection approach is under development. No specific model name, dataset, accuracy, precision, recall, FPS, deployment, or alert API is claimed unless it exists in actual project documentation.',
    promptEngineering:
      'Not a primary component of this project.',
    inputProcessingOutput: {
      input: 'Visual / video input',
      processing: 'Computer vision \u2192 accident / event analysis \u2192 detection',
      output: 'Detection result / alert workflow',
    },
    challenges: [
      'Identifying accident-related events reliably from visual input',
      'Building a model and evaluation pipeline that is still under development',
    ],
    solutions: [
      'Currently working on the computer-vision and deep-learning approach as part of the final-year project team',
    ],
    resultsOrStatus:
      'No final results or performance metrics are claimed at this stage because the project is under development.',
    limitations: [
      'Implementation and evaluation are ongoing. Model, dataset, evaluation, and deployment are not finalized.',
    ],
    futureImprovements: [
      'Complete model development',
      'Dataset evaluation',
      'Benchmarking',
      'Real-time testing',
      'Final deployment workflow',
    ],
  },
  {
    projectId: 'visionbot',
    problem:
      'A robot needs a way to visually identify where a person is located and orient itself toward that person.',
    objective:
      'Build a computer-vision and robotics system that detects a person\u2019s face through a webcam and uses the detected position to control servo movement.',
    role: 'AI / Computer Vision / Integration',
    star: {
      situation:
        'A robot needs a way to visually identify where a person is located and orient itself toward that person.',
      task: 'Build a computer-vision and robotics system that detects a person\u2019s face through a webcam and uses the detected position to control servo movement.',
      action:
        'I worked on the AI/computer-vision and system integration side. I used Python and OpenCV with Haar Cascade face detection to identify a face in the webcam feed and obtain its X/Y position. I mapped the detected coordinates into servo-control values and transmitted those values through serial communication to an Arduino Uno, which controlled the servo motors.',
      result:
        'The VisionBot system can detect a face from the webcam and use the detected position to control servo movement so that the robot can orient toward the detected face.',
    },
    technologies: ['Python', 'OpenCV', 'Haar Cascade', 'Arduino Uno', 'Serial Communication', 'Servo Motors'],
    architecture: [
      'Webcam',
      'Python',
      'OpenCV',
      'Haar Cascade Face Detection',
      'Face X/Y Coordinates',
      'Coordinate Mapping',
      'Serial Communication',
      'Arduino Uno',
      'Servo Motors',
      'Robot Orientation',
    ],
    workflow: [
      'Webcam captures live frames',
      'Python and OpenCV process the frames',
      'Haar Cascade face detection identifies the face and its X/Y position',
      'The detected position is mapped to servo-control values',
      'Values are transmitted through serial communication to the Arduino Uno',
      'The Arduino Uno drives the servo motors to orient the robot',
    ],
    implementation:
      'I implemented the Python/OpenCV face detection pipeline using Haar Cascade, mapped the detected face coordinates to servo-control values, and established serial communication between Python and the Arduino Uno to drive the servo motors.',
    aiApproach:
      'OpenCV processes webcam frames and Haar Cascade is used to detect the face and obtain its position. The detected face position provides X/Y information that is mapped to servo-control values.',
    promptEngineering:
      'Not a primary component of this project.',
    inputProcessingOutput: {
      input: 'Live webcam frames',
      processing: 'Face detection \u2192 face coordinates \u2192 coordinate mapping \u2192 serial transmission',
      output: 'Arduino-controlled servo movement that orients the robot toward the detected face',
    },
    challenges: [
      'Real-time face detection from a webcam feed',
      'Converting image coordinates into servo movement',
      'Communication between Python and Arduino',
    ],
    solutions: [
      'Implemented the Python/OpenCV detection pipeline and serial communication workflow to connect visual detection with physical servo control',
    ],
    resultsOrStatus:
      'The VisionBot system can detect a face from the webcam and use the detected position to control servo movement so that the robot can orient toward the detected face.',
    limitations: [
      'Uses Haar Cascade, which is less robust than deep-learning-based detectors in challenging lighting or angles.',
    ],
    futureImprovements: [
      'Explore more robust face detection methods',
      'Add tracking for smoother servo movement',
      'Support multiple faces',
    ],
  },
];
