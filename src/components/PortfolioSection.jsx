import React, { useEffect, useRef, useState } from "react";
import {
  portfolioProjects,
  portfolioSectionContent,
} from "../data/siteContent";
import {
  portfolioStyles,
  portfolioToneStyles,
} from "../styles/componentStyles";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const { modal, title } = project;

  return (
    <div
      className={portfolioStyles.modalOverlay}
      style={{
        top: "64px",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
      onClick={onClose}
    >
      <div
        className={portfolioStyles.modalContainer}
        style={{
          maxHeight: "calc(100vh - 120px)",
          animation: "modalSlideUp 0.35s cubic-bezier(0.34,1.3,0.64,1) both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={portfolioStyles.modalHeader}>
          <h3 className={portfolioStyles.modalTitle}>{title}</h3>
          <button
            onClick={onClose}
            className={portfolioStyles.closeButton}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className={portfolioStyles.modalBody}>
          <p className={portfolioStyles.modalOverview}>{modal.overview}</p>

          <div className={portfolioStyles.modalSection}>
            <h4 className={portfolioStyles.modalSectionTitle}>Key Features</h4>
            <ul className={portfolioStyles.modalFeatureList}>
              {modal.features.map((f) => (
                <li key={f} className={portfolioStyles.modalFeatureItem}>
                  <span className="mt-0.5 text-slate-400">–</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className={portfolioStyles.modalSectionTitle}>Tech Stack</h4>
            <div className={portfolioStyles.modalTechStack}>
              {modal.techStack.map((t) => (
                <span
                  key={t.name}
                  title={t.role}
                  className={portfolioStyles.modalTechItem}
                >
                  {t.name}
                  <span className="ml-1.5 opacity-50">· {t.role}</span>
                </span>
              ))}
            </div>
          </div>

          <div className={portfolioStyles.modalActions}>
            <a href={modal.liveUrl} className={portfolioStyles.primaryAction}>
              Live Demo
            </a>
            <a
              href={modal.githubUrl}
              className={portfolioStyles.secondaryAction}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <style>{portfolioStyles.keyframes}</style>
    </div>
  );
}

export default function PortfolioSection() {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              setHeadingVisible(true);
            } else {
              const idx = cardRefs.current.indexOf(entry.target);
              if (idx !== -1) {
                setTimeout(() => {
                  setCardsVisible((prev) => {
                    const next = [...prev];
                    next[idx] = true;
                    return next;
                  });
                }, idx * 150);
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className={portfolioStyles.section}>
      <div className={portfolioStyles.wrapper}>
        <div
          ref={headingRef}
          className={portfolioStyles.heading}
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(-32px)",
          }}
        >
          <h2 className={portfolioStyles.title}>
            {portfolioSectionContent.title}
          </h2>
          <p className={portfolioStyles.subtitle}>
            {portfolioSectionContent.subtitle}
          </p>
        </div>

        <div className={portfolioStyles.grid}>
          {portfolioProjects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className={portfolioStyles.card}
              style={{
                opacity: cardsVisible[i] ? 1 : 0,
                transform: cardsVisible[i]
                  ? hoveredCard === i
                    ? "translateY(-10px) scale(1.025)"
                    : "translateY(0) scale(1)"
                  : "translateY(48px) scale(1)",
                border:
                  hoveredCard === i
                    ? portfolioToneStyles[project.tone].hoverBorder.border
                    : "2px solid transparent",
                boxShadow:
                  hoveredCard === i
                    ? portfolioToneStyles[project.tone].hoverBorder.boxShadow
                    : "0 4px 16px rgba(0,0,0,0.08)",
                transition:
                  "opacity 0.6s ease-out, transform 0.45s cubic-bezier(0.34,1.56,0.64,1), border 0.3s ease, box-shadow 0.35s ease",
              }}
            >
              <div
                className={`${portfolioStyles.cardImage} bg-gradient-to-br ${project.gradient}`}
              >
                <div
                  className={portfolioStyles.cardEmoji}
                  style={{
                    transition: "transform 0.4s ease",
                  }}
                >
                  {project.emoji}
                </div>
              </div>
              <div className={portfolioStyles.cardBody}>
                <h3 className={portfolioStyles.cardTitle}>{project.title}</h3>
                <p className={portfolioStyles.cardDescription}>
                  {project.description}
                </p>
                <div className={portfolioStyles.tags}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${portfolioStyles.tag} ${portfolioToneStyles[project.tone].tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={portfolioStyles.viewButton}
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
