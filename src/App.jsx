import React, { useEffect, useState } from "react";

const documents = [
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

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Clear messages when chat is closed
    if (!showChat) {
      setMessages([]);
      setChatInput("");
    }
  }, [showChat]);

  useEffect(() => {
    const root =
      document.getElementById("theme-root") || document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div id="theme-root" className={theme === "dark" ? "dark" : ""}>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200 dark:bg-orange-900/20 rounded-full blur-[120px] opacity-40 -z-10"></div>
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] opacity-50 -z-10"></div>

      <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 backdrop-blur-sm border-b border-slate-800 dark:border-purple-700 px-10 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/nagi.jpg"
              alt="Nagi"
              class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
            />
            <div className="text-2xl font-bold tracking-tight text-white">
              Nagi<span className="text-orange-400">.</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-10 font-medium text-slate-300 hover:text-white transition">
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
              <a href="#about" className="hover:text-orange-400 transition">
                About
              </a>
              <a href="#portfolio" className="hover:text-orange-400 transition">
                Portfolio
              </a>
              <a href="#services" className="hover:text-orange-400 transition">
                Services
              </a>
              <a href="#blog" className="hover:text-orange-400 transition">
                Blog
              </a>
              <a href="#documents" className="hover:text-orange-400 transition">
                Documents
              </a>
              <a href="#contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </div>

            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="relative inline-flex items-center h-8 w-14 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none hover:ring-2 hover:ring-orange-400"
            >
              <span className="sr-only">Toggle Theme</span>
              <span className="absolute left-1 text-xs">☀️</span>
              <span className="absolute right-1 text-xs">🌙</span>
            </button>
            <button
              onClick={() => setShowChat(true)}
              className="ml-3 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105 relative"
            >
              <span
                className="absolute inset-0 bg-orange-400 rounded-lg animate-pulse opacity-75"
                style={{
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              ></span>
              <span className="relative">💬 Ask Me</span>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section
          id="home"
          className="py-32 px-10 flex items-center justify-center min-h-screen"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8 text-8xl">👋</div>
            <h1 className="text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="text-2xl text-slate-600 dark:text-slate-400 mb-8">
              I'm{" "}
              <span className="text-orange-400 font-semibold">
                Nagireddy Avula
              </span>
              , a full-stack developer passionate about creating beautiful web
              experiences
            </p>
            <a
              href="#about"
              className="inline-block px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              Explore My Work
            </a>
          </div>
        </section>

        <section id="about" className="py-20 px-10 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p class="text-xl text-slate-600 leading-relaxed max-w-4xl">
                  I am a seasoned Engineer dedicated to building robust digital
                  products. My journey began with deep-diving into{" "}
                  <span class="text-slate-900 font-semibold italic">
                    Java internals
                  </span>
                  , and it has led me to mastering the entire software delivery
                  lifecycle.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-80 rounded-lg flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="py-20 px-10 scroll-mt-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Explore some of my recent projects and creative works
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <div className="text-5xl">🌐</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    E-Commerce Platform
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Full-featured online store with product catalog, shopping
                    cart, and secure payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full">
                      Node.js
                    </span>
                    <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full">
                      MongoDB
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-5xl">📊</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Real-time data visualization dashboard with interactive
                    charts and comprehensive reporting features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-full">
                      D3.js
                    </span>
                    <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-full">
                      AWS
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-5xl">💬</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Chat Application</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Real-time messaging app with user authentication, group
                    chats, and file sharing capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full">
                      Socket.io
                    </span>
                    <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full">
                      Node.js
                    </span>
                    <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full">
                      PostgreSQL
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-10 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Services I Offer</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Comprehensive web development solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 hover:shadow-lg transition group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
                  🎨
                </div>
                <h3 className="text-xl font-bold mb-3">Web Design</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Creating beautiful, user-friendly interfaces that engage your
                  audience and convert visitors into customers.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ UI/UX Design</li>
                  <li>✓ Responsive Design</li>
                  <li>✓ Brand Identity</li>
                </ul>
              </div>

              <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 hover:shadow-lg transition group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Building robust, scalable web applications using modern
                  technologies and best practices.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ Frontend Development</li>
                  <li>✓ Backend Development</li>
                  <li>✓ Full Stack Solutions</li>
                </ul>
              </div>

              <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 hover:shadow-lg transition group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
                  ☁️
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud & DevOps</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Deploy and manage your applications efficiently using cloud
                  platforms and DevOps practices.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ AWS & Cloud Setup</li>
                  <li>✓ Docker & Kubernetes</li>
                  <li>✓ CI/CD Pipelines</li>
                </ul>
              </div>

              <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 hover:shadow-lg transition group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
                  🔒
                </div>
                <h3 className="text-xl font-bold mb-3">Security Consulting</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Ensure your applications are secure with best practices and
                  comprehensive security audits.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ Security Audits</li>
                  <li>✓ Vulnerability Testing</li>
                  <li>✓ Best Practices</li>
                </ul>
              </div>

              <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 hover:shadow-lg transition group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
                  📱
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Build responsive mobile applications that work seamlessly
                  across all devices and platforms.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ React Native</li>
                  <li>✓ Progressive Web Apps</li>
                  <li>✓ Cross-Platform</li>
                </ul>
              </div>

              <div className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 hover:shadow-lg transition group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
                  📞
                </div>
                <h3 className="text-xl font-bold mb-3">Consulting & Support</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Expert guidance and ongoing support to help your business
                  achieve its technology goals.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ Technical Consulting</li>
                  <li>✓ Ongoing Support</li>
                  <li>✓ Training & Mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="blog"
          className="py-20 px-10 scroll-mt-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Insights, tips, and trends in web development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-40 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <div className="text-5xl">🚀</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full font-medium">
                      Web Dev
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Feb 7, 2026
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    Getting Started with React 18
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Learn the basics of React 18 and explore new features like
                    automatic batching and concurrent rendering.
                  </p>
                  <a
                    href="#"
                    className="text-orange-400 hover:text-orange-500 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-5xl">🔐</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full font-medium">
                      Security
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Feb 5, 2026
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    Web Security Best Practices
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Essential security practices every developer should know to
                    protect applications from common threats.
                  </p>
                  <a
                    href="#"
                    className="text-orange-400 hover:text-orange-500 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-40 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-5xl">🐳</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-full font-medium">
                      DevOps
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Feb 3, 2026
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    Docker & Containerization Guide
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Master Docker and containerization to streamline your
                    deployment process and improve scalability.
                  </p>
                  <a
                    href="#"
                    className="text-orange-400 hover:text-orange-500 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-5xl">⚡</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full font-medium">
                      Performance
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Feb 1, 2026
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    Optimizing Web Performance
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Techniques and tools to optimize your website's performance
                    and improve user experience metrics.
                  </p>
                  <a
                    href="#"
                    className="text-orange-400 hover:text-orange-500 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-40 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <div className="text-5xl">🎨</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 rounded-full font-medium">
                      Design
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Jan 30, 2026
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    Modern UI Design Trends 2026
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Explore the latest UI design trends and patterns that are
                    shaping modern web applications.
                  </p>
                  <a
                    href="#"
                    className="text-orange-400 hover:text-orange-500 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="documents"
          className="py-20 px-10 scroll-mt-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Documents & Resources</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Download helpful documents, guides, and study materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((d, i) => (
                <a
                  key={i}
                  href={d.href}
                  download
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-900/20 text-red-700 rounded-md text-lg font-semibold">
                      PDF
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-100 line-clamp-2">
                        {d.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        PDF
                      </p>
                    </div>
                    <div className="text-xl">⬇️</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-10 scroll-mt-24">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-md hover:opacity-90 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-90 transition"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Have a project in mind? Let's work together and create something
              amazing.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="text-4xl flex-shrink-0">✉️</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    Send us an email and we'll respond as soon as possible.
                  </p>
                  <a
                    href="mailto:anreddy7816@gmail.com"
                    className="text-orange-400 hover:text-orange-500 font-medium transition"
                  >
                    anreddy7816@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-4xl flex-shrink-0">📱</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    Call us during business hours and speak with our team.
                  </p>
                  <a
                    href="tel:+91 9866167816"
                    className="text-orange-400 hover:text-orange-500 font-medium transition"
                  >
                    +91 98661 67816
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-4xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Guntur, Andhra Pradesh, INDIA
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg shadow-lg">
              <h3 className="text-base font-bold mb-3">Send us a Message</h3>
              <form className="space-y-2">
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-orange-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-orange-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Your message here..."
                    className="w-full px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-orange-400 transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-1 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {showChat && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col max-h-96">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-lg">💬</span>
              <span>Chat with Nagi</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMessages([]);
                  setChatInput("");
                }}
                className="text-white opacity-80 hover:opacity-100 text-sm px-2 py-1 rounded hover:bg-orange-600 transition"
                title="Clear chat history"
              >
                🗑️
              </button>
              <button
                onClick={() => setShowChat(false)}
                className="text-white opacity-80 hover:opacity-100 text-xl leading-none"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-900">
            {messages.length === 0 ? (
              <div className="text-center space-y-3 py-4">
                <div className="text-2xl">👋</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Hi! I'm Nagi. How can I help you today?
                </div>
              </div>
            ) : (
              messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${
                    m.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.from === "bot" && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-sm">
                      🤖
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      m.from === "user"
                        ? "bg-orange-400 text-white rounded-br-none"
                        : "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none shadow"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.from === "user" && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center text-sm">
                      👤
                    </div>
                  )}
                </div>
              ))
            )}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-sm">
                  🤖
                </div>
                <div className="bg-white dark:bg-slate-700 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {messages.length === 0 && (
            <div className="px-3 py-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-2">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                Quick replies:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    const msg = {
                      from: "user",
                      text: "Tell me about your experience",
                    };
                    setMessages([msg]);
                    setIsTyping(true);
                    setTimeout(() => {
                      setMessages((prev) => [
                        ...prev,
                        {
                          from: "bot",
                          text: "I have 5+ years of full-stack development experience building web applications with React, Node.js, and cloud technologies.",
                        },
                      ]);
                      setIsTyping(false);
                    }, 1200);
                  }}
                  className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded hover:bg-orange-200 dark:hover:bg-orange-900/50 transition"
                >
                  Your Experience
                </button>
                <button
                  onClick={() => {
                    const msg = {
                      from: "user",
                      text: "What services do you offer?",
                    };
                    setMessages([msg]);
                    setIsTyping(true);
                    setTimeout(() => {
                      setMessages((prev) => [
                        ...prev,
                        {
                          from: "bot",
                          text: "I offer web design, development, cloud solutions, security consulting, mobile development, and technical mentoring.",
                        },
                      ]);
                      setIsTyping(false);
                    }, 1200);
                  }}
                  className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-900/50 transition"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    const msg = { from: "user", text: "How to get in touch?" };
                    setMessages([msg]);
                    setIsTyping(true);
                    setTimeout(() => {
                      setMessages((prev) => [
                        ...prev,
                        {
                          from: "bot",
                          text: "You can reach me via email at anreddy7816@gmail.com or call +91 98661 67816.",
                        },
                      ]);
                      setIsTyping(false);
                    }, 1200);
                  }}
                  className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-900/50 transition"
                >
                  Contact Info
                </button>
                <button
                  onClick={() => {
                    const msg = {
                      from: "user",
                      text: "Show your portfolio projects",
                    };
                    setMessages([msg]);
                    setIsTyping(true);
                    setTimeout(() => {
                      setMessages((prev) => [
                        ...prev,
                        {
                          from: "bot",
                          text: "Check the Portfolio section above to see my latest projects including E-Commerce Platform, Analytics Dashboard, and Chat Application.",
                        },
                      ]);
                      setIsTyping(false);
                    }, 1200);
                  }}
                  className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded hover:bg-purple-200 dark:hover:bg-purple-900/50 transition"
                >
                  Portfolio
                </button>
              </div>
            </div>
          )}

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!chatInput.trim() || isTyping) return;
              const userMsg = { from: "user", text: chatInput.trim() };
              setMessages((s) => [...s, userMsg]);
              setChatInput("");
              setIsTyping(true);

              const response = await fetch(
                "http://localhost:8080/api/openai/chat/" + userMsg.text,
                {
                  method: "GET",
                },
              );

              const data = await response.text(); // Assuming your API returns plain text. Use .json() if it returns JSON.

              console.log("API response:", data);

              setMessages((s) => [...s, { from: "bot", text: data }]);
              setIsTyping(false);
            }}
            className="px-3 py-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex gap-2"
          >
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              disabled={isTyping}
              className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-orange-400 disabled:opacity-50"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              disabled={isTyping || !chatInput.trim()}
              className="px-3 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <footer className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 border-t border-orange-400 py-8 px-10 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300 text-sm">
            &copy; 2026 Nagi. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Crafted with <span className="text-orange-400">❤</span> by Nagi
          </p>
        </div>
      </footer>
    </div>
  );
}
