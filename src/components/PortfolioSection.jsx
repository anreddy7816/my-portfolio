import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    emoji: "🌐",
    gradient: "from-orange-400 to-orange-600",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with product catalog, shopping cart, and secure payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    tagColor: "orange",
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
    tagColor: "green",
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
    tagColor: "purple",
    modal: {
      overview:
        "A full-stack real-time chat application with sub-100ms message delivery. Supports one-on-one conversations, group rooms, media sharing, and read receipts — all secured with end-to-end encryption.",
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

const tagClasses = {
  orange:
    "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300",
  purple:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300",
};

const tagClsBadge = {
  orange:
    "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-700",
  green:
    "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300 border border-green-200 dark:border-green-700",
  purple:
    "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-700",
};

const accentBtn = {
  orange: "bg-orange-400 hover:bg-orange-500 focus:ring-orange-400",
  green: "bg-green-500 hover:bg-green-600 focus:ring-green-500",
  purple: "bg-purple-500 hover:bg-purple-600 focus:ring-purple-500",
};

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const { modal, gradient, emoji, title, tagColor } = project;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-[90] flex items-start justify-center px-4 pt-16"
      style={{
        top: "64px",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-2 border-orange-400 dark:border-orange-500"
        style={{
          maxHeight: "calc(100vh - 120px)",
          animation: "modalSlideUp 0.35s cubic-bezier(0.34,1.3,0.64,1) both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-200 text-base font-bold shadow-md hover:shadow-lg"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="px-7 pb-7 pt-3">
          {/* Overview */}
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            {modal.overview}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              Key Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {modal.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-0.5 text-slate-400">–</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {modal.techStack.map((t) => (
                <span
                  key={t.name}
                  title={t.role}
                  className="px-3 py-1.5 text-xs font-medium rounded-full cursor-default bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {t.name}
                  <span className="ml-1.5 opacity-50">· {t.role}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={modal.liveUrl}
              className="inline-flex items-center px-5 py-2.5 bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-sm font-semibold rounded-xl transition"
            >
              Live Demo
            </a>
            <a
              href={modal.githubUrl}
              className="inline-flex items-center px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </div>
  );
}

const hoverBorder = {
  orange: {
    border: "2px solid rgba(251,146,60,0.9)",
    boxShadow:
      "0 0 0 4px rgba(251,146,60,0.15), 0 0 24px rgba(251,146,60,0.25), 0 16px 40px rgba(251,146,60,0.15)",
  },
  green: {
    border: "2px solid rgba(74,222,128,0.9)",
    boxShadow:
      "0 0 0 4px rgba(74,222,128,0.15), 0 0 24px rgba(74,222,128,0.25), 0 16px 40px rgba(74,222,128,0.15)",
  },
  purple: {
    border: "2px solid rgba(192,132,252,0.9)",
    boxShadow:
      "0 0 0 4px rgba(192,132,252,0.15), 0 0 24px rgba(192,132,252,0.25), 0 16px 40px rgba(192,132,252,0.15)",
  },
};

export default function PortfolioSection() {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              setHeadingVisible(true);
            } else {
              const idx = cardRefs.current.indexOf(entry.target);
              if (idx !== -1) {
                setTimeout(() => {
                  setCardsVisible((prev) => {
                    const next = [...prev];
                    next[idx] = true;
                    return next;
                  });
                }, idx * 150);
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      className="py-20 px-2 sm:px-4 md:px-10 scroll-mt-24"
    >
      <div className="w-full">
        {/* Heading */}
        <div
          ref={headingRef}
          className="text-center mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(-32px)",
          }}
        >
          <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Explore some of my recent projects and creative works
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden"
              style={{
                opacity: cardsVisible[i] ? 1 : 0,
                transform: cardsVisible[i]
                  ? hoveredCard === i
                    ? "translateY(-10px) scale(1.025)"
                    : "translateY(0) scale(1)"
                  : "translateY(48px) scale(1)",
                border:
                  hoveredCard === i
                    ? hoverBorder[project.tagColor].border
                    : "2px solid transparent",
                boxShadow:
                  hoveredCard === i
                    ? hoverBorder[project.tagColor].boxShadow
                    : "0 4px 16px rgba(0,0,0,0.08)",
                transition:
                  "opacity 0.6s ease-out, transform 0.45s cubic-bezier(0.34,1.56,0.64,1), border 0.3s ease, box-shadow 0.35s ease",
              }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div
                  className="text-5xl transition-transform duration-500 hover:scale-125"
                  style={{
                    transition: "transform 0.4s ease",
                  }}
                >
                  {project.emoji}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full ${tagClasses[project.tagColor]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition font-medium"
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
