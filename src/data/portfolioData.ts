export interface Project {
  id: string;
  runTitle: string;
  numIndex: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
  featured: boolean;
  badge?: string;
  role?: string;
  problemStatement?: string;
  architecture?: string[];
  challenges?: string[];
  metrics?: { label: string; value: string }[];
  duration?: string;
  teamSize?: string;
  status?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  specialization?: string;
  institution: string;
  period: string;
  location?: string;
  description: string;
}

export interface QuickFact {
  key: string;
  value: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "L.S. Rathore",
    fullName: "L.S. Rathore",
    title: "Full-Stack MERN & AI/RAG Developer",
    location: "Surat, Gujarat, India",
    email: "23amtics284@gmail.com",
    phone: "+91 9724041096",
    github: "https://github.com/LS-Rathore",
    linkedin: "https://www.linkedin.com/in/lakshveer-singh-rathore-a289b8358/",
    resumeUrl: "/resume.pdf",
    badgeText: "Open to internships · Surat, IN",
    heroTerminalRoles: [
      "am a Full-Stack MERN Developer.",
      "build AI & RAG Applications.",
      "craft RESTful APIs & Scalable UIs.",
      "pursuing B.Tech Computer Engineering."
    ],
    bio: [
      "I'm a full-stack developer who genuinely enjoys the process of building software. From designing database schemas to styling smooth interactive interfaces, I like crafting tools that solve real problems.",
      "Currently in my engineering undergrad and constantly building side-projects to learn new tech. I'm actively looking for a dev internship to join a cool team and build awesome stuff together."
    ],
    quickStats: [
      { value: "4+", label: "Featured Projects", accent: "text-[var(--ink)]" },
      { value: "1", label: "Internship Role", accent: "text-[var(--ink)]" },
      { value: "12+", label: "Tech Stack Tools", accent: "text-[var(--ink)]" }
    ],
    quickFacts: [
      { key: "Based in", value: "Surat, Gujarat, IN" },
      { key: "Degree", value: "B.Tech Comp. Eng. (SE)" },
      { key: "University", value: "Uka Tarsadia Univ." },
      { key: "Timeline", value: "2023 – 2027" },
      { key: "Stack", value: "MERN + TypeScript" },
      { key: "Status", value: "Open to internships" }
    ] as QuickFact[]
  },

  skills: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js" },
        { name: "Tailwind CSS" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5 / CSS3" }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "RESTful APIs" },
        { name: "JWT Auth & RBAC" }
      ]
    },
    {
      title: "AI & Vector Search",
      skills: [
        { name: "LangChain" },
        { name: "RAG Architecture" },
        { name: "MongoDB Vector Search" },
        { name: "Google Gemini API" }
      ]
    },
    {
      title: "Databases & ORM",
      skills: [
        { name: "MongoDB & Atlas" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Prisma ORM" }
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git & GitHub" },
        { name: "Postman" },
        { name: "Vercel" },
        { name: "Render" },
        { name: "Supabase" },
        { name: "VS Code" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "Java" }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      role: "Web Development Intern",
      company: "Zaalima Development",
      period: "January 2026 — April 2026",
      location: "Remote",
      type: "Remote Internship",
      bullets: [
        "Built and consumed RESTful APIs using Node.js and Express.js as part of a 4-member team within an agile, sprint-based workflow collaborating via Git.",
        "Designed reusable React.js UI components and delivered end-to-end MERN stack features from database schema design to frontend integration.",
        "Participated in daily standups, code reviews, and API testing using Postman to maintain code quality across sprints."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "REST APIs"]
    }
  ] as Experience[],

  education: [
    {
      degree: "B.Tech in Computer Engineering",
      specialization: "Software Engineering",
      institution: "Uka Tarsadia University",
      period: "2023 — 2027",
      location: "Gujarat, India",
      description: "Pursuing core software engineering, data structures, algorithms, operating systems, and full-stack web development."
    }
  ] as Education[],

  projects: [
    {
      id: "tripzy-ai",
      runTitle: "Tripzy AI // Live Product",
      numIndex: "01",
      title: "Tripzy — AI Travel Planner",
      category: "Full-Stack & AI",
      badge: "Live Product",
      description: "Full-stack AI travel planner generating personalized day-by-day itineraries using a two-stage generation flow powered by Google Gemini 2.0 Flash with Groq fallback.",
      longDescription: "Tripzy lets travel enthusiasts generate customized multi-day itineraries in seconds. It features lightweight concept previews before full itinerary synthesis, Groq failover resilience, context-aware AI travel chatbot, and integrated squad expense splitting.",
      role: "Solo Full-Stack Developer",
      problemStatement: "Planning multi-day trips is tedious — travelers spend hours researching destinations, comparing options, and manually organizing schedules. Existing tools lack AI personalization and real-time collaboration features.",
      architecture: [
        "React + TypeScript SPA with component-driven architecture",
        "Express.js API with modular route controllers",
        "Prisma ORM with 7-model relational schema on PostgreSQL",
        "Google Gemini 2.0 Flash primary AI with Groq Llama 3.3 failover",
        "Two-stage generation: lightweight concepts → detailed itinerary",
        "Context-aware chatbot with conversation memory",
        "Vercel deployment with optimized build pipeline"
      ],
      challenges: [
        "Designed a two-stage generation flow that first creates 3 lightweight concept previews, then synthesizes a full itinerary only after user selection — reducing API costs and improving UX.",
        "Implemented Groq Llama 3.3 as an automatic failover when Gemini API hits rate limits, with seamless switching invisible to the user.",
        "Built a 7-model relational schema with Prisma that handles complex relationships between trips, days, activities, expenses, and squad members."
      ],
      metrics: [
        { label: "Prisma Models", value: "7" },
        { label: "AI Models Used", value: "2" },
        { label: "Deployment", value: "Vercel" },
        { label: "Status", value: "Live" }
      ],
      duration: "5 weeks",
      teamSize: "Solo",
      status: "Live on Vercel",
      tech: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Google Gemini 2.0 Flash", "Groq Llama 3.3"],
      highlights: [
        "Two-stage AI generation flow (3 lightweight concepts -> full detailed itinerary) with Groq Llama 3.3 fallback resilience.",
        "7-model relational schema designed using Prisma ORM and PostgreSQL.",
        "Context-aware AI travel chatbot for instant itinerary adjustments.",
        "Squad expense splitter with automated bill division and ledger tracking."
      ],
      github: "https://github.com/LS-Rathore",
      live: "https://tripzy-gray.vercel.app/",
      featured: true
    },
    {
      id: "opsmind-ai",
      runTitle: "OpsMind AI // Enterprise RAG",
      numIndex: "02",
      title: "OpsMind AI",
      category: "AI & RAG",
      badge: "Enterprise RAG",
      description: "Full-stack enterprise AI assistant for querying SOP documents (PDF/DOCX) via natural language using a RAG pipeline with LangChain and Google Gemini embeddings.",
      longDescription: "OpsMind AI addresses document search challenges by converting corporate SOPs into high-density vector embeddings stored in MongoDB Atlas. Users get real-time SSE responses, hallucination detection, role-based workspace permissions, and a separate 10+ page admin dashboard.",
      role: "Solo Full-Stack Developer & AI Engineer",
      problemStatement: "Enterprises lose hundreds of hours per year searching through dense SOP documents manually. Employees struggle to find precise answers buried in PDFs and DOCX files, leading to operational delays and inconsistent compliance.",
      architecture: [
        "React SPA frontend with context-based state management",
        "Express.js REST API backend with middleware pipeline",
        "LangChain orchestration layer for RAG query processing",
        "Google Gemini embedding model for document vectorization",
        "MongoDB Atlas Vector Search with cosine similarity indexing",
        "Server-Sent Events (SSE) for real-time response streaming",
        "JWT + RBAC middleware for multi-role authentication"
      ],
      challenges: [
        "Implemented hallucination detection by cross-referencing generated answers against source chunks' similarity scores, flagging low-confidence responses.",
        "Optimized vector search across 5 MongoDB collections to maintain sub-second query latency even with large document corpora.",
        "Built a chunking strategy that preserves document context across section boundaries for better retrieval accuracy."
      ],
      metrics: [
        { label: "Database Collections", value: "5" },
        { label: "Admin Dashboard Pages", value: "10+" },
        { label: "Document Formats", value: "PDF & DOCX" },
        { label: "Auth System", value: "JWT + RBAC" }
      ],
      duration: "6 weeks",
      teamSize: "Solo",
      status: "Completed",
      tech: ["React", "Node.js", "Express", "MongoDB", "LangChain", "Gemini API", "Vector Search"],
      highlights: [
        "Multi-format document ingestion (PDF/DOCX) with RAG pipeline via LangChain and Google Gemini embeddings.",
        "MongoDB Atlas Vector Search across 5 database collections with real-time SSE response streaming.",
        "Hallucination detection algorithms and JWT-based role-based access control (RBAC).",
        "Comprehensive admin dashboard with analytics, audit logs, document management, and system health monitoring across 10+ pages."
      ],
      github: "https://github.com/LS-Rathore/OpsMind-Ai",
      featured: true
    },
    {
      id: "ai-caption-gen",
      runTitle: "AI Captions // GenAI",
      numIndex: "03",
      title: "AI Caption Generator",
      category: "AI & Next.js",
      badge: "Zero-Login Tool",
      description: "Zero-login AI web app that generates platform-optimized social media captions instantly from text prompts or uploaded photos using Gemini Flash & GPT-4o-mini.",
      longDescription: "Built for social media managers and creators, AI Caption Generator converts user prompts or image uploads into ready-to-post captions tailored for Instagram, LinkedIn, and Twitter.",
      role: "Solo Developer",
      problemStatement: "Content creators spend 15–30 minutes crafting platform-specific captions for each post. Each social platform has different conventions — hashtag density, tone, character limits — making it time-consuming to repurpose content across channels.",
      architecture: [
        "Next.js App Router with server-side API routes",
        "Gemini Flash for image analysis and multimodal understanding",
        "GPT-4o-mini for text-to-caption generation",
        "Client-side state for zero-login stateless sessions",
        "Tailwind CSS utility-first responsive design"
      ],
      challenges: [
        "Implemented multimodal input handling that seamlessly switches between text prompts and image uploads, routing to the appropriate AI model.",
        "Designed platform-specific prompt engineering templates that generate captions with correct tone, hashtag density, and formatting for each social platform.",
        "Built a zero-authentication architecture for frictionless first-use while still maintaining session-based history tracking."
      ],
      metrics: [
        { label: "Platforms Supported", value: "3" },
        { label: "AI Models", value: "2" },
        { label: "Auth Required", value: "None" },
        { label: "Input Modes", value: "Text + Image" }
      ],
      duration: "2 weeks",
      teamSize: "Solo",
      status: "Completed",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini Flash", "GPT-4o-mini"],
      highlights: [
        "Platform-tailored caption styles (Instagram hashtags, LinkedIn professional, X concise).",
        "Multimodal input support allowing direct image analysis and prompt-to-caption generation.",
        "Instant copy-to-clipboard functionality with custom tone controls and history tracking."
      ],
      github: "https://github.com/LS-Rathore",
      featured: true
    },
    {
      id: "medicare",
      runTitle: "MediCare // Full-Stack MERN",
      numIndex: "04",
      title: "MediCare Platform",
      category: "Full-Stack MERN",
      badge: "Healthcare App",
      description: "Multi-role healthcare appointment platform with online payments via Stripe, doctor availability management, and Clerk authentication portals.",
      longDescription: "MediCare connects patients, doctors, and clinic admins. Patients can book slots and pay online via Stripe, while doctors manage their schedules and patient records.",
      role: "Solo Full-Stack Developer",
      problemStatement: "Small clinics lack affordable digital booking systems. Patients rely on phone calls, doctors have no centralized schedule view, and payment collection is manual — leading to missed appointments, scheduling conflicts, and revenue leakage.",
      architecture: [
        "React frontend with role-based view rendering",
        "Express.js REST API with route-level middleware",
        "MongoDB Atlas with Mongoose ODM",
        "Clerk authentication with multi-role portal support",
        "Stripe payment integration with webhook confirmation",
        "Automated receipt generation pipeline"
      ],
      challenges: [
        "Implemented multi-role authentication with Clerk where patients, doctors, and admins each see entirely different dashboards and protected routes.",
        "Integrated Stripe webhooks to confirm payment status and auto-generate appointment receipts, handling edge cases like payment failures and duplicate bookings.",
        "Built a real-time doctor availability system that prevents double-booking across concurrent patient sessions."
      ],
      metrics: [
        { label: "User Roles", value: "3" },
        { label: "Payment Gateway", value: "Stripe" },
        { label: "Auth Provider", value: "Clerk" },
        { label: "Database", value: "MongoDB Atlas" }
      ],
      duration: "4 weeks",
      teamSize: "Solo",
      status: "Completed",
      tech: ["React", "Node.js", "Express", "MongoDB Atlas", "Stripe", "Clerk"],
      highlights: [
        "Multi-role user authentication and protected routing via Clerk.",
        "Stripe payment gateway integration for appointment slot reservations.",
        "Doctor schedule management dashboard and automated receipts."
      ],
      github: "https://github.com/LS-Rathore",
      featured: true
    }
  ] as Project[]
};
