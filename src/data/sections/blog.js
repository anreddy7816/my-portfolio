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
    details: {
      overview:
        "React 18 introduced a more capable rendering model focused on responsiveness, smoother updates, and better developer ergonomics. This article walks through the practical changes teams actually feel when moving from older React versions.",
      highlights: [
        "Automatic batching now groups more state updates to reduce unnecessary renders.",
        "Concurrent rendering improves responsiveness during heavier UI updates.",
        "The new root API is required to unlock React 18 behavior in existing projects.",
        "Transitions help separate urgent interactions from non-urgent screen updates.",
      ],
      takeaway:
        "The biggest upgrade value comes from better user-perceived performance and cleaner control over expensive UI work.",
    },
  },
  {
    icon: "🔒",
    tone: "blue",
    tag: "Security",
    date: "Feb 5, 2026",
    title: "Web Security Best Practices",
    desc: "Essential security practices every developer should know to protect applications from common threats.",
    href: "#",
    details: {
      overview:
        "Modern web security is mostly about reducing common attack surfaces consistently. This article covers the baseline practices that should exist before thinking about advanced hardening.",

      highlights: [
        "Validate and sanitize all user input before persisting or rendering it.",
        "Use HTTP-only cookies or secure token handling to reduce credential leakage.",
        "Set strong headers such as CSP, HSTS, and X-Frame-Options where applicable.",
        "Keep dependencies patched and review third-party packages for risk.",
      ],
      takeaway:
        "Security improves fastest when good defaults are built into the application architecture rather than added as a late checklist.",
    },
  },
  {
    icon: "🐳",
    tone: "green",
    tag: "DevOps",
    date: "Feb 3, 2026",
    title: "Docker & Containerization Guide",
    desc: "Master Docker and containerization to streamline your deployment process and improve scalability.",
    href: "#",
    details: {
      overview:
        "Containerization standardizes how applications are packaged, shipped, and run across development and production. This article explains how Docker improves environment consistency and operational predictability.",
      highlights: [
        "Docker images package application code with the runtime and dependencies.",
        "Layered builds help reduce image size and speed up rebuilds.",
        "Multi-stage builds keep production images lean and more secure.",
        "Containers simplify scaling and deployment across CI/CD pipelines.",
      ],
      takeaway:
        "The main benefit is reliability: the same artifact can move from local development to production with fewer surprises.",
    },
  },
  {
    icon: "⚡",
    tone: "purple",
    tag: "Performance",
    date: "Feb 1, 2026",
    title: "Optimizing Web Performance",
    desc: "Techniques and tools to optimize your website's performance and improve user experience metrics.",
    href: "#",
    details: {
      overview:
        "Performance optimization is a compound effort across assets, rendering, network strategy, and runtime behavior. This article focuses on the improvements that usually return the highest value first.",
      highlights: [
        "Compress and lazy-load heavy assets to reduce initial page weight.",
        "Minimize layout shifts by reserving space for media and async content.",
        "Split bundles and defer non-critical JavaScript.",
        "Monitor Core Web Vitals regularly instead of tuning performance once.",
      ],
      takeaway:
        "Good performance is not a single optimization; it is the result of many small decisions that reduce work for the browser.",
    },
  },
  {
    icon: "🎨",
    tone: "red",
    tag: "Design",
    date: "Jan 30, 2026",
    title: "Modern UI Design Trends 2026",
    desc: "Explore the latest UI design trends and patterns that are shaping modern web applications.",
    href: "#",
    details: {
      overview:
        "Design trends are most useful when they improve clarity and product character instead of just following fashion. This article reviews the visual patterns gaining traction and where they make practical sense.",
      highlights: [
        "Expressive typography is increasingly used to define product voice.",
        "Layered gradients and tinted surfaces add depth without visual noise.",
        "Reduced clutter and stronger hierarchy improve scanability on mobile.",
        "Motion is shifting toward purposeful transitions rather than decoration.",
      ],
      takeaway:
        "The strongest design trend is intentionality: interfaces that feel specific, legible, and aligned to the product story.",
    },
  },
];
