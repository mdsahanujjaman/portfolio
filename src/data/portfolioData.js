// ─── Central Portfolio Data Store ───
// All sections read from localStorage (via usePortfolioData hook), falling back to these defaults.
// Admin panel writes changes back to localStorage, causing live re-renders.

export const KEYS = {
  ABOUT:        "pd_about",
  SKILLS:       "pd_skills",
  EXPERIENCE:   "pd_experience",
  ACHIEVEMENTS: "pd_achievements",
  PROJECTS:     "pd_projects",
  BLOGS:        "pd_blogs",
}

export const DEFAULTS = {
  about: {
    name: "Md. Sahanujjaman",
    tagline: "Human-Centric Digital Architect.",
    role: "MERN Specialist",
    roleItalic: "Next-Gen AI Innovator",
    bio: "I specialize in Scalable MERN Architectures, transforming complex backend challenges into fluid, user-centric experiences.",
    yearsExp: "2+",
    patents: "1",
    cgpa: "6.18",
    university: "Lovely Professional University",
    degree: "B.Tech Information Technology",
    cvLink: "/softskillcv.pdf",
    resumeDiff: [
      { line: "01", content: "@@ -credentials,1 +deployment,20 @@", type: "info" },
      { line: "02", content: "Name: Md Sahanujjaman", type: "plain" },
      { line: "03", content: "- Status: Student", type: "del" },
      { line: "04", content: "+ Status: Full-Stack Web Developer", type: "add" },
      { line: "05", content: "+ Focus: AI Healthcare & Scalability", type: "add" },
      { line: "07", content: "Education {", type: "plain" },
      { line: "08", content: "+   B.Tech: Lovely Professional University,", type: "add" },
      { line: "11", content: "+   CGPA: 6.18", type: "add" },
      { line: "12", content: "}", type: "plain" },
      { line: "14", content: "Innovation {", type: "plain" },
      { line: "15", content: "+   Patent: #HealthHorizon (Pending AI Patent),", type: "add" },
      { line: "17", content: "}", type: "plain" },
    ],
    cards: [
      { title: "Backend Core",     desc: "Architecting resilient, hyper-scaled logic using Node, Express & MongoDB." },
      { title: "Modern UI/UX",     desc: "Crafting fluid, pixel-perfect interfaces that prioritize accessibility." },
      { title: "AI Research",      desc: "Leveraging predictive LLM models for smarter, proactive software solutions." },
      { title: "Product Strategy", desc: "Bridging the gap between engineering complexity and user-centric business goals." },
    ]
  },

  skills: [
    {
      title: "Languages",
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "JavaScript" }, { name: "Java" }, { name: "Python" },
        { name: "SQL" }, { name: "HTML5" }, { name: "CSS3" }
      ]
    },
    {
      title: "Full Stack & Design",
      color: "from-cyan-400 to-primary",
      skills: [
        { name: "React.js" }, { name: "Node.js" }, { name: "Express" },
        { name: "Tailwind" }, { name: "Figma" }
      ]
    },
    {
      title: "Backend & Cloud",
      color: "from-green-400 to-teal-600",
      skills: [
        { name: "MongoDB" }, { name: "PostgreSQL" }, { name: "Docker" },
        { name: "Git/GitHub" }, { name: "API Dev" }
      ]
    },
    {
      title: "Core Engineering",
      color: "from-primary to-emerald-500",
      skills: [
        { name: "DSA" }, { name: "Problem Solving" }, { name: "Teamwork" }
      ]
    }
  ],

  experience: [
    {
      id: 1,
      type: "Work",
      title: "Full-Stack Developer",
      institution: "Project Engineering Lab",
      date: "",
      description: "Building scalable web applications like WasteWise and designing high-fidelity AI-driven prototypes like Health Horizon.",
      score: "", subjects: "", gains: ""
    },
    {
      id: 2,
      type: "Academic",
      title: "B.Tech in Information Technology",
      institution: "Lovely Professional University",
      date: "2023 - Present",
      description: "",
      score: "Pursuing", subjects: "Full Stack, DevOps, Cloud Computing", gains: "Production-grade MERN architectures & system design."
    },
    {
      id: 3,
      type: "Academic",
      title: "Diploma in Pharmacy",
      institution: "Siliguri Govt. Polytechnic",
      date: "2021 - 2023",
      description: "",
      score: "7.07 CGPA", subjects: "Pharmacology, Health Education", gains: "Analytical thinking & Clinical domain research."
    },
    {
      id: 4,
      type: "Academic",
      title: "Higher Secondary (PCMB)",
      institution: "Rajballavpur High School",
      date: "2020",
      description: "",
      score: "8.64 CGPA", subjects: "Physics, Chem, Math, Bio", gains: "Foundation in scientific logic & problem-solving."
    },
    {
      id: 5,
      type: "Academic",
      title: "Secondary Education",
      institution: "Hazer Ali Smriti Vidhyapith",
      date: "2018",
      description: "",
      score: "9.11 CGPA", subjects: "General Sciences, Mathematics, Languages", gains: "Drive for continuous academic excellence."
    }
  ],

  achievements: [
    {
      id: 1,
      title: "IBM DevOps Certification",
      subtitle: "Professional introduction to DevOps practices, CI/CD pipelines, and agile methodologies for production apps.",
      date: "Nov 2024",
      category: "Strategic Engineering",
      color: "from-blue-600 to-indigo-500",
      link: "/certificates/devops_certificate.pdf"
    },
    {
      id: 2,
      title: "Computer Architecture",
      subtitle: "In-depth research and analysis of high-performance computing architecture principles & optimization.",
      date: "Aug 2025",
      category: "Academic Research",
      color: "from-purple-500 to-pink-500",
      link: ""
    },
    {
      id: 3,
      title: "Generative AI Integration",
      subtitle: "Specialized certification for integrating LLM agents into modern software workflows & prototypes.",
      date: "Sep 2024",
      category: "Artificial Intelligence",
      color: "from-emerald-500 to-primary",
      link: ""
    },
    {
      id: 4,
      title: "Health Horizon Patent",
      subtitle: "Innovative AI-powered telemedicine framework (Patent Pending) solving real-world emergency healthcare gaps.",
      date: "Dec 2025 - Present",
      category: "IP & Innovation",
      color: "from-primary to-yellow-500",
      link: ""
    },
    {
      id: 5,
      title: "Java Programming",
      subtitle: "Completion certificate from Neo Platform (NeoCollab) — covering core algorithms, OOP, and professional software design.",
      date: "Jan 2025 – May 2025",
      category: "Neo Platform · NeoCollab",
      color: "from-red-600 to-orange-500",
      link: "/certificates/java_certificate.pdf"
    },
    {
      id: 6,
      title: "Adobe Flash",
      subtitle: "Certification in Adobe Flash from Infosys Springboard — building interactive multimedia and animation fundamentals.",
      date: "Sep 2025",
      category: "Infosys Springboard",
      color: "from-orange-500 to-yellow-400",
      link: "/certificates/adobe_flash_certificate.pdf"
    }
  ],

  projects: [
    {
      id: 1, title: "Health Horizon", subtitle: "AI-Driven Cloud-Native Healthcare Ecosystem",
      description: "A patent-pending telemedicine prototype with AI-powered symptom checking, smart doctor scheduling, and real-time triage.",
      date: "Dec 2025 – Present", tech: ["Figma","UX Research","AI Workflow","Prototyping"],
      live: "#", github: "",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: 2, title: "WasteWise", subtitle: "Full-Stack Waste Management",
      description: "Community platform to report environmental issues, map recycling centres, and track admin-verified statuses in real time.",
      date: "May – Jul 2025", tech: ["PHP","JS","Tailwind","MySQL"],
      live: "#", github: "https://github.com/mdsahanujjaman",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3, title: "Portfolio Platform", subtitle: "Personal Brand Site",
      description: "High-performance developer portfolio with premium animations and dark-mode adaptive design.",
      date: "", tech: ["React","Framer Motion","Tailwind"],
      live: "#", github: "https://github.com/mdsahanujjaman",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4, title: "Eco-Impact Portal", subtitle: "Community Tracker",
      description: "Laravel app tracking community engagement in plastic waste reduction initiatives.",
      date: "", tech: ["Laravel","PHP","MySQL"],
      live: "#", github: "https://github.com/mdsahanujjaman",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5, title: "Health AI Engine", subtitle: "Predictive ML Module",
      description: "ML module for early symptom detection using historical patient data and pattern recognition.",
      date: "", tech: ["Python","TensorFlow","FastAPI"],
      live: "#", github: "https://github.com/mdsahanujjaman",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80"
    }
  ],

  blogs: [
    {
      id: 1, title: "Building Health Horizon",
      excerpt: "Bridging healthcare gaps in underserved communities through LLM-driven diagnostics and interactive patient journeys.",
      date: "Mar 2026", readTime: "5 min", tags: ["AI","HealthTech"], isTrending: true
    },
    {
      id: 2, title: "Scalable Full-Stack Design",
      excerpt: "Best practices for designing production-ready systems that handle rapid growth & high-concurrency without failure.",
      date: "Feb 2026", readTime: "8 min", tags: ["Backend","MERN"], isTrending: false
    },
    {
      id: 3, title: "Security in Modern Apps",
      excerpt: "Implementing advanced authentication, encrypted pipelines, and proactive threat detection in full-stack ecosystems.",
      date: "Jan 2026", readTime: "6 min", tags: ["Security","DevOps"], isTrending: false
    },
    {
      id: 4, title: "UX Psychology & Design",
      excerpt: "How micro-interactions and cognitive load optimization transform simple interfaces into high-fidelity user experiences.",
      date: "Dec 2025", readTime: "4 min", tags: ["UI/UX","Product"], isTrending: true
    }
  ]
}
