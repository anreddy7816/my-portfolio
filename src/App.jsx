import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import BlogSection from "./components/BlogSection";
import DocumentsSection from "./components/DocumentsSection";
import ContactSection from "./components/ContactSection";
import ResumeSection from "./components/ResumeSection";
import Footer from "./components/Footer";
import { documents } from "./data/siteContent";
import { appStyles } from "./styles/componentStyles";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return localStorage.getItem("theme") || "light";
  });
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div style={{ minHeight: "100vh", width: "100vw", overflowX: "hidden" }}>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onOpenResume={() => setShowResume(true)}
      />
      <main className={appStyles.main}>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <BlogSection />
        <DocumentsSection documents={documents} />
        <ContactSection />
      </main>
      <ResumeSection isOpen={showResume} onClose={() => setShowResume(false)} />
      <Footer />
    </div>
  );
}
