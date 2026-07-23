export const portfolioSectionContent = {
  title: "My Portfolio",
  subtitle:
    "Selected product builds with sharper UX, cleaner systems, and production-focused execution",
};

export const portfolioProjects = [
  {
    icon: "commerce",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    category: "Commerce System",
    accent: "Payments + Ops",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with product catalog, shopping cart, and secure payment integration.",
    tags: ["React", "Spring Boot", "MongoDB"],
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
        { name: "Spring Boot", role: "REST API Server" },
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
    icon: "analytics",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    category: "Insight Dashboard",
    accent: "Realtime Reporting",
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts and comprehensive reporting.",
    tags: ["React", "Java", "AWS"],
    tone: "green",
    modal: {
      overview:
        "An enterprise-grade analytics dashboard that ingests streaming data and renders it into actionable insights. Built for performance with virtualized lists, lazy-loaded charts, and a fully responsive layout.",
      features: [
        "Real-time WebSocket data streaming",
        "Interactive Java charts (line, bar, pie, heatmap)",
        "Customizable widget-based layout",
        "CSV & PDF report export",
        "Role-based access control",
        "Deployed on AWS with CI/CD pipeline",
      ],
      techStack: [
        { name: "React", role: "Frontend UI" },
        { name: "Java", role: "Data Visualizations" },
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
    icon: "chat",
    gradient: "from-fuchsia-500 via-violet-500 to-indigo-500",
    category: "Realtime Messaging",
    accent: "Collaboration Core",
    title: "Chat Application",
    description:
      "Real-time messaging app with user authentication, group chats, and file sharing capabilities.",
    tags: ["Java", "Spring Boot", "react"],
    tone: "purple",
    modal: {
      overview:
        "A full-stack real-time chat application with sub-100ms message delivery. Supports one-on-one conversations, group rooms, media sharing, and read receipts - all secured with end-to-end encryption.",
      features: [
        "Real-time messaging via Java",
        "Group chat rooms & private DMs",
        "Image & file sharing with preview",
        "Read receipts & online presence indicators",
        "Message search and history",
        "OAuth 2.0 login (Google & GitHub)",
      ],
      techStack: [
        { name: "React", role: "Frontend UI" },
        { name: "Java", role: "Real-time Messaging" },
        { name: "Spring Boot", role: "Backend Server" },
        { name: "PostgreSQL", role: "Persistent Storage" },
        { name: "Redis", role: "Session & Pub/Sub" },
        { name: "Cloudinary", role: "Media Storage" },
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  },
];
