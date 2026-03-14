import React from "react";
import { motion } from "framer-motion";

export default function BlogSection() {
  const articles = [
    {
      icon: "🚀",
      color: "from-orange-400 to-orange-600",
      tag: "Web Dev",
      tagColor:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300",
      date: "Feb 7, 2026",
      title: "Getting Started with React 18",
      desc: "Learn the basics of React 18 and explore new features like automatic batching and concurrent rendering.",
      href: "#",
    },
    {
      icon: "🔒",
      color: "from-blue-400 to-blue-600",
      tag: "Security",
      tagColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300",
      date: "Feb 5, 2026",
      title: "Web Security Best Practices",
      desc: "Essential security practices every developer should know to protect applications from common threats.",
      href: "#",
    },
    {
      icon: "🐳",
      color: "from-green-400 to-green-600",
      tag: "DevOps",
      tagColor:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300",
      date: "Feb 3, 2026",
      title: "Docker & Containerization Guide",
      desc: "Master Docker and containerization to streamline your deployment process and improve scalability.",
      href: "#",
    },
    {
      icon: "⚡",
      color: "from-purple-400 to-purple-600",
      tag: "Performance",
      tagColor:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300",
      date: "Feb 1, 2026",
      title: "Optimizing Web Performance",
      desc: "Techniques and tools to optimize your website's performance and improve user experience metrics.",
      href: "#",
    },
    {
      icon: "🎨",
      color: "from-red-400 to-red-600",
      tag: "Design",
      tagColor: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300",
      date: "Jan 30, 2026",
      title: "Modern UI Design Trends 2026",
      desc: "Explore the latest UI design trends and patterns that are shaping modern web applications.",
      href: "#",
    },
  ];
  return (
    <section
      id="blog"
      className="py-20 px-2 sm:px-4 md:px-10 scroll-mt-24 bg-[#f6f6f6] dark:bg-[#0a0c1b]"
    >
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Insights, tips, and trends in web development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div
                className={`h-40 bg-gradient-to-br ${a.color} flex items-center justify-center`}
              >
                <div className="text-5xl">{a.icon}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 text-xs ${a.tagColor} rounded-full font-medium`}
                  >
                    {a.tag}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-200">
                    {a.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3">{a.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {a.desc}
                </p>
                <a
                  href={a.href}
                  className="text-orange-400 hover:text-orange-500 font-medium"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
