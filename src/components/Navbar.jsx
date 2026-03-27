import React, { useState } from "react";
import NagiImage from "../assets/nagi.png";
import { navigationLinks } from "../data/siteContent";
import { navbarStyles } from "../styles/componentStyles";

export default function Navbar({ theme, setTheme, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavAction = (item, closeMenu = false) => {
    if (item.type === "action" && item.action === "resume") {
      onOpenResume();
    }

    if (closeMenu) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={navbarStyles.nav}>
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
                  className={navbarStyles.link}
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
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className={navbarStyles.themeButton}
          >
            <span className="sr-only">Toggle Theme</span>
            <span className="absolute left-1 text-xs">☀️</span>
            <span className="absolute right-1 text-xs">🌙</span>
          </button>
          <button
            className={navbarStyles.mobileButton}
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
        <div className={navbarStyles.mobileMenu}>
          <div className={navbarStyles.mobileLinks}>
            {navigationLinks.map((item) =>
              item.type === "link" ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={navbarStyles.link}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavAction(item, true)}
                  className={navbarStyles.mobileAction}
                >
                  {item.label}
                </button>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
