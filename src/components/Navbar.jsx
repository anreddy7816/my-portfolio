import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NagiImage from "../assets/nagi.png";
import { navigationLinks } from "../data/siteContent";
import { navbarStyles } from "../styles/componentStyles";

export default function Navbar({
  theme,
  setTheme,
  onOpenResume,
  activeSection,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();

  const handleNavAction = (item, closeMenu = false) => {
    if (item.type === "action" && item.action === "resume") {
      onOpenResume();
    }

    if (closeMenu) {
      setMobileMenuOpen(false);
    }
  };

  const isActive = (item) =>
    item.type === "link" && item.href === `#${activeSection}`;

  return (
    <nav className={navbarStyles.nav} aria-label="Primary">
      <div className={navbarStyles.wrapper}>
        <div className={navbarStyles.brandGroup}>
          <img src={NagiImage} alt="Nagi" className={navbarStyles.brandImage} />
          <div className={navbarStyles.brandText}>
            Nagi<span className={navbarStyles.brandAccent}>.</span>
          </div>
        </div>
        <div className={navbarStyles.actions}>
          <div className={navbarStyles.desktopLinks}>
            {navigationLinks.map((item) =>
              item.type === "link" ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${navbarStyles.link} ${isActive(item) ? navbarStyles.linkActive : ""}`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavAction(item)}
                  className={navbarStyles.link}
                >
                  {item.label}
                </button>
              ),
            )}
          </div>
          <button
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className={navbarStyles.themeButton}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "dark"}
          >
            <span className="sr-only">Toggle Theme</span>
            <span className="absolute left-1 text-[10px] leading-none">☀️</span>
            <span className="absolute right-1 text-[10px] leading-none">
              🌙
            </span>
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out ${theme === "dark" ? "translate-x-[1.35rem]" : "translate-x-0.5"}`}
            />
          </button>
          <button
            type="button"
            className={navbarStyles.mobileButton}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={
              mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuId}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={navbarStyles.mobileMenu}
            id={mobileMenuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className={navbarStyles.mobileLinks}>
              {navigationLinks.map((item, i) =>
                item.type === "link" ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={`${navbarStyles.link} ${isActive(item) ? navbarStyles.linkActive : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      const target = document.getElementById(
                        item.href.slice(1),
                      );
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    {item.label}
                  </motion.a>
                ) : (
                  <motion.button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavAction(item, true)}
                    className={navbarStyles.mobileAction}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    {item.label}
                  </motion.button>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
