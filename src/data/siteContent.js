import { ServiceIcons } from "../components/ServiceIcons";

export const documents = [
  {
    href: "/documents/git-cheat-sheet-education.pdf",
    title: "Git Cheat Sheet",
  },
  { href: "/documents/Java 8.pdf", title: "Java 8" },
  {
    href: "/documents/Microservices Interview Questions.pdf",
    title: "Microservices Interview Questions",
  },
  {
    href: "/documents/Microservices Security Using JWT.pdf",
    title: "Microservices Security Using JWT",
  },
  {
    href: "/documents/SB_Internal Work_And_Configure_Multiple_Databases.pdf",
    title: "Spring Boot Databases",
  },
  {
    href: "/documents/Spring Boot Annotations.pdf",
    title: "Spring Boot Annotations",
  },
  {
    href: "/documents/SQLInterviewQuestionsAndAnswers.pdf",
    title: "SQL Interview Q&A",
  },
  {
    href: "/documents/Top-100-Angular-Interview-Questions-pdf-version.pdf",
    title: "Top 100 Angular Interview Questions",
  },
];

export const navigationLinks = [
  { label: "Home", href: "#home", type: "link" },
  { label: "About", href: "#about", type: "link" },
  { label: "Portfolio", href: "#portfolio", type: "link" },
  { label: "Services", href: "#services", type: "link" },
  { label: "Blog", href: "#blog", type: "link" },
  { label: "Documents", href: "#documents", type: "link" },
  { label: "Resume", type: "action", action: "resume" },
  { label: "Contact", href: "#contact", type: "link" },
];

export const homeContent = {
  emoji: "👋",
  title: "Welcome to My Portfolio",
  introPrefix: "I'm",
  name: "Nagireddy Avula",
  introSuffix:
    ", a full-stack developer passionate about creating beautiful web experiences",
  ctaLabel: "Explore My Work",
  ctaHref: "#about",
};

export const aboutContent = {
  title: "About Me",
  descriptionStart:
    "I am a seasoned Engineer dedicated to building robust digital products. My journey began with deep-diving into",
  highlight: "Java internals",
  descriptionEnd:
    ", and it has led me to mastering the entire software delivery lifecycle.",
  imageAlt: "About Me",
};

export const portfolioSectionContent = {
  title: "My Portfolio",
  subtitle: "Explore some of my recent projects and creative works",
};

export const portfolioProjects = [
  {
    emoji: "🌐",
    gradient: "from-orange-400 to-orange-600",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with product catalog, shopping cart, and secure payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    tone: "orange",
    modal: {
      overview:
        "A scalable, production-ready e-commerce platform built with a modern JavaScript stack. It supports thousands of products, real-time inventory updates, and a seamless checkout experience optimized for mobile and desktop.",
      features: [
        "Product catalog with search, filter & pagination",
        "Shopping cart with persistent state via localStorage",
        "Secure Stripe payment integration",
        "JWT-based user authentication & role management",
        "Order tracking & email notifications",
        "Admin dashboard with sales analytics",
      ],
      techStack: [
        { name: "React", role: "Frontend UI" },
        { name: "Node.js", role: "REST API Server" },
        { name: "Express", role: "Routing & Middleware" },
        { name: "MongoDB", role: "Database" },
        { name: "Stripe API", role: "Payment Processing" },
        { name: "JWT", role: "Authentication" },
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  },
  {
    emoji: "📊",
    gradient: "from-green-400 to-green-600",
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts and comprehensive reporting features.",
    tags: ["React", "D3.js", "AWS"],
    tone: "green",
    modal: {
      overview:
        "An enterprise-grade analytics dashboard that ingests streaming data and renders it into actionable insights. Built for performance with virtualized lists, lazy-loaded charts, and a fully responsive layout.",
      features: [
        "Real-time WebSocket data streaming",
        "Interactive D3.js charts (line, bar, pie, heatmap)",
        "Customizable widget-based layout",
        "CSV & PDF report export",
        "Role-based access control",
        "Deployed on AWS with CI/CD pipeline",
      ],
      techStack: [
        { name: "React", role: "Frontend UI" },
        { name: "D3.js", role: "Data Visualizations" },
        { name: "WebSockets", role: "Live Data Feed" },
        { name: "AWS Lambda", role: "Serverless Backend" },
        { name: "S3 + CloudFront", role: "Hosting & CDN" },
        { name: "PostgreSQL (RDS)", role: "Data Storage" },
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  },
  {
    emoji: "💬",
    gradient: "from-purple-400 to-purple-600",
    title: "Chat Application",
    description:
      "Real-time messaging app with user authentication, group chats, and file sharing capabilities.",
    tags: ["Socket.io", "Node.js", "PostgreSQL"],
    tone: "purple",
    modal: {
      overview:
        "A full-stack real-time chat application with sub-100ms message delivery. Supports one-on-one conversations, group rooms, media sharing, and read receipts - all secured with end-to-end encryption.",
      features: [
        "Real-time messaging via Socket.io",
        "Group chat rooms & private DMs",
        "Image & file sharing with preview",
        "Read receipts & online presence indicators",
        "Message search and history",
        "OAuth 2.0 login (Google & GitHub)",
      ],
      techStack: [
        { name: "React", role: "Frontend UI" },
        { name: "Socket.io", role: "Real-time Messaging" },
        { name: "Node.js", role: "Backend Server" },
        { name: "PostgreSQL", role: "Persistent Storage" },
        { name: "Redis", role: "Session & Pub/Sub" },
        { name: "Cloudinary", role: "Media Storage" },
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  },
];

export const servicesSectionContent = {
  title: "Services I Offer",
  subtitle: "Comprehensive web development solutions tailored to your needs",
};

export const services = [
  {
    icon: ServiceIcons.webDesign,
    tone: "orange",
    title: "Web Design",
    desc: "Creating beautiful, user-friendly interfaces that engage your audience and convert visitors into customers.",
    features: ["UI/UX Design", "Responsive Design", "Brand Identity"],
  },
  {
    icon: ServiceIcons.webDevelopment,
    tone: "blue",
    title: "Web Development",
    desc: "Building robust, scalable web applications using modern technologies and best practices.",
    features: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Solutions",
    ],
  },
  {
    icon: ServiceIcons.cloudDevOps,
    tone: "green",
    title: "Cloud & DevOps",
    desc: "Deploy and manage your applications efficiently using cloud platforms and DevOps practices.",
    features: ["AWS & Cloud Setup", "Docker & Kubernetes", "CI/CD Pipelines"],
  },
  {
    icon: ServiceIcons.security,
    tone: "red",
    title: "Security Consulting",
    desc: "Ensure your applications are secure with best practices and comprehensive security audits.",
    features: ["Security Audits", "Vulnerability Testing", "Best Practices"],
  },
  {
    icon: ServiceIcons.mobile,
    tone: "pink",
    title: "Mobile Development",
    desc: "Build responsive mobile applications that work seamlessly across all devices and platforms.",
    features: ["React Native", "Progressive Web Apps", "Cross-Platform"],
  },
  {
    icon: ServiceIcons.consulting,
    tone: "indigo",
    title: "Consulting & Support",
    desc: "Expert guidance and ongoing support to help your business achieve its technology goals.",
    features: [
      "Technical Consulting",
      "Ongoing Support",
      "Training & Mentoring",
    ],
  },
];

export const blogSectionContent = {
  title: "Latest Articles",
  subtitle: "Insights, tips, and trends in web development",
};

export const blogArticles = [
  {
    icon: "🚀",
    tone: "orange",
    tag: "Web Dev",
    date: "Feb 7, 2026",
    title: "Getting Started with React 18",
    desc: "Learn the basics of React 18 and explore new features like automatic batching and concurrent rendering.",
    href: "#",
  },
  {
    icon: "🔒",
    tone: "blue",
    tag: "Security",
    date: "Feb 5, 2026",
    title: "Web Security Best Practices",
    desc: "Essential security practices every developer should know to protect applications from common threats.",
    href: "#",
  },
  {
    icon: "🐳",
    tone: "green",
    tag: "DevOps",
    date: "Feb 3, 2026",
    title: "Docker & Containerization Guide",
    desc: "Master Docker and containerization to streamline your deployment process and improve scalability.",
    href: "#",
  },
  {
    icon: "⚡",
    tone: "purple",
    tag: "Performance",
    date: "Feb 1, 2026",
    title: "Optimizing Web Performance",
    desc: "Techniques and tools to optimize your website's performance and improve user experience metrics.",
    href: "#",
  },
  {
    icon: "🎨",
    tone: "red",
    tag: "Design",
    date: "Jan 30, 2026",
    title: "Modern UI Design Trends 2026",
    desc: "Explore the latest UI design trends and patterns that are shaping modern web applications.",
    href: "#",
  },
];

export const documentsSectionContent = {
  title: "Documents & Resources",
  subtitle: "Download helpful documents, guides, and study materials",
  fileTypeLabel: "PDF",
};

export const resumeContent = {
  eyebrow: "Professional Resume",
  title: "Java Full Stack Developer",
  summary:
    "Java full stack developer with DevOps background and 10 years of experience building, modernizing, and deploying reliable applications.",
  profileTitle: "Profile Summary",
  profileSummary:
    "I am a Java Full Stack Developer with a DevOps background and 10 years of experience delivering backend services, responsive user interfaces, and deployment automation. My work usually sits at the intersection of application engineering, API design, and release reliability.",
  highlightsTitle: "Career Highlights",
  highlights: [
    "10 years of experience delivering enterprise-grade web applications.",
    "Strong background in Java full stack development with DevOps ownership.",
    "Focused on scalable architecture, secure APIs, and reliable deployments.",
    "Resume content is structured so you can easily update it later based on role needs.",
  ],
  strengthsTitle: "What I Bring",
  strengths: [
    {
      title: "Backend",
      tone: "dark",
      description:
        "Robust Java services, Spring-based architectures, integration patterns, and maintainable business logic.",
    },
    {
      title: "Frontend",
      tone: "accent",
      description:
        "Modern UI delivery with React or Angular, aligned with API integrations and clean user flows.",
    },
  ],
  expertiseTitle: "Core Expertise",
  expertise: [
    "Java, Spring Boot, Microservices",
    "React, Angular, JavaScript, REST APIs",
    "CI/CD pipelines, Docker, Kubernetes",
    "Azure and cloud-native DevOps delivery",
  ],
  experienceLabel: "Experience",
  experienceValue: "10 Years",
  experienceSummary:
    "Full stack engineering, DevOps practices, deployment pipelines, cloud delivery, and production support.",
  updateTitle: "Update Friendly",
  updateSummary:
    "This resume popup is intentionally structured with editable sections so you can change the content later for different job applications or portfolio updates.",
  files: {
    pdf: "/documents/Resume.pdf",
    word: "/documents/Resume.docx",
  },
};

export const contactSectionContent = {
  title: "Get In Touch",
  subtitle:
    "Have a project in mind? Let's work together and create something amazing.",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/",
      tone: "dark",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      tone: "blue",
    },
  ],
  methods: [
    {
      title: "Email",
      description: "Send us an email and we'll respond as soon as possible.",
      value: "anreddy7816@gmail.com",
      href: "mailto:anreddy7816@gmail.com",
      icon: "email",
    },
    {
      title: "Phone",
      description: "Call us during business hours and speak with our team.",
      value: "+91 98661 67816",
      href: "tel:+91 9866167816",
      icon: "phone",
    },
  ],
  location: {
    value: "Guntur, Andhra Pradesh, INDIA",
    icon: "location",
  },
  form: {
    title: "Send us a Message",
    recipientName: "Nagi",
    fields: [
      {
        label: "Your Name",
        type: "text",
        placeholder: "John Doe",
        name: "name",
      },
      {
        label: "Your Email",
        type: "email",
        placeholder: "john@example.com",
        name: "email",
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Your message here...",
        name: "message",
        rows: 3,
      },
    ],
    submittingLabel: "Sending...",
    submitLabel: "Send Message",
    messages: {
      sending: "Sending your message...",
      successAlert:
        "Thank you for reaching out. We have received your email and will get back to you shortly.",
      error: "We couldn't send your message. Please try again in a moment.",
      configError:
        "Email is not configured yet. Add your EmailJS keys to the Vite environment variables first.",
    },
  },
};

export const footerContent = {
  copyright: "© 2026 Nagi. All rights reserved.",
  craftedPrefix: "Crafted with",
  craftedBy: "by Nagi",
};
