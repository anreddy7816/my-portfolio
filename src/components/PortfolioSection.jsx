import React from "react";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 px-2 sm:px-4 md:px-10 scroll-mt-24"
    >
      <div className="w-full">
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
              <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Full-featured online store with product catalog, shopping cart,
                and secure payment integration.
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
              <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Real-time data visualization dashboard with interactive charts
                and comprehensive reporting features.
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
                Real-time messaging app with user authentication, group chats,
                and file sharing capabilities.
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
  );
}
