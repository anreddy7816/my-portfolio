import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import BlogSection from "./components/BlogSection";
import DocumentsSection from "./components/DocumentsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
    <div
      id="theme-root"
      className={theme === "dark" ? "dark" : ""}
      style={{ minHeight: "100vh", width: "100vw", overflowX: "hidden" }}
    >
      {/* Main background: soft gradient, subtle SVG pattern overlay */}
      <div className="fixed inset-0 z-[-20] bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-slate-900 dark:to-slate-800"></div>
      {/* SVG pattern overlay for light mode, inspired by kalyansaxena portfolio */}
      {theme !== "dark" && (
        <div className="absolute inset-0 pointer-events-none z-[-10]">
          <img
            src="https://themewagon.github.io/geeky-nextjs/images/banner-bg-shape.svg"
            alt="bg pattern"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
      )}
      {/* Remove most blurred shapes for cleaner look */}
      {/* Content container: white background, soft shadow */}
      <Navbar theme={theme} setTheme={setTheme} setShowChat={setShowChat} />
      <main className="container mx-auto max-w-full px-2 sm:px-4 md:px-10 text-base md:text-lg">
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <BlogSection />
        <DocumentsSection documents={documents} />
        <ContactSection />
      </main>
      {/* ...existing code for chat and footer... */}
      {showChat && (
        // ...existing chat code...
        <div className="fixed bottom-6 right-2 w-[90vw] max-w-xs md:w-96 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col max-h-96">
          {/* ...existing chat UI... */}
        </div>
      )}
      <Footer />
    </div>
  );
}
