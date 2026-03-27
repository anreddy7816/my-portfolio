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
