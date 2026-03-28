import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const rafId = useRef(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const sectionIds = useMemo(
    () => [
      "home",
      "about",
      "portfolio",
      "services",
      "blog",
      "documents",
      "contact",
    ],
    [],
  );

  const handleScroll = useCallback(() => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowScrollTop(scrollTop > 400);

      // Active section detection
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }

      rafId.current = 0;
    });
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", width: "100vw", overflowX: "hidden" }}>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:px-4 focus:py-2 focus:rounded-md focus:bg-orange-500 focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[200] bg-gradient-to-r from-orange-400 via-rose-500 to-sky-500 transition-none"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <Navbar
        theme={theme}
        setTheme={setTheme}
        onOpenResume={() => setShowResume(true)}
        activeSection={activeSection}
      />
      <main id="main-content" className={appStyles.main}>
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

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 sm:bottom-6 sm:right-6 z-[150] h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-md3 hover:shadow-md5 hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
