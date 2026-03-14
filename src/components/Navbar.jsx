import React from "react";

import { useState } from "react";

export default function Navbar({ theme, setTheme, setShowChat }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 backdrop-blur-sm border-b border-slate-800 dark:border-purple-700 px-2 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="./src/assets/nagi.jpg"
            alt="Nagi"
            className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
          />
          <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(147,197,253,0.35)]">
            Nagi<span className="text-orange-400">.</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
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
            className="ml-3 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105 relative hidden md:inline-block"
          >
            <span
              className="absolute inset-0 bg-orange-400 rounded-lg animate-pulse opacity-75"
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            ></span>
            <span className="relative">💬 Ask Me</span>
          </button>
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg bg-slate-800 text-white hover:bg-orange-400 focus:outline-none"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 px-4 py-4 rounded-b-lg shadow-lg">
          <div className="flex flex-col space-y-4 font-medium text-slate-300">
            <a
              href="#home"
              className="hover:text-orange-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-orange-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="hover:text-orange-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="hover:text-orange-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#blog"
              className="hover:text-orange-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#documents"
              className="hover:text-orange-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documents
            </a>
            <a
              href="#contact"
              className="hover:text-orange-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => {
                setShowChat(true);
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              💬 Ask Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
