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
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );
  const [showResume, setShowResume] = useState(false);

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
      className={theme === "dark" ? appStyles.root : ""}
      style={{ minHeight: "100vh", width: "100vw", overflowX: "hidden" }}
    >
      {/* Removed fixed gradient and SVG overlay for a cleaner look above the footer */}
      {/* Remove most blurred shapes for cleaner look */}
      {/* Content container: white background, soft shadow */}
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
