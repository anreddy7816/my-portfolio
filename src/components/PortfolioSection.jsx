import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ArrowUpRightIcon,
  ChartBarSquareIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import {
  portfolioProjects,
  portfolioSectionContent,
} from "../data/siteContent";
import {
  portfolioStyles,
  portfolioToneStyles,
} from "../styles/componentStyles";

const projectIcons = {
  commerce: ShoppingBagIcon,
  analytics: ChartBarSquareIcon,
  chat: ChatBubbleLeftRightIcon,
};

function ProjectModal({ project, onClose }) {
  const containerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const previousActiveElement = document.activeElement;

    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !containerRef.current) {
        return;
      }

      const focusableElements = containerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements.length) {
        event.preventDefault();
        containerRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousActiveElement?.focus?.();
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
        ref={containerRef}
        className={portfolioStyles.modalContainer}
        style={{
          maxHeight: "calc(100vh - 120px)",
          animation: "modalSlideUp 0.35s cubic-bezier(0.34,1.3,0.64,1) both",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={portfolioStyles.modalHeader}>
          <h3 id={titleId} className={portfolioStyles.modalTitle}>
            {title}
          </h3>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className={portfolioStyles.closeButton}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className={portfolioStyles.modalBody}>
          <p id={descriptionId} className={portfolioStyles.modalOverview}>
            {modal.overview}
          </p>

          <div className={portfolioStyles.modalSection}>
            <h4 className={portfolioStyles.modalSectionTitle}>Key Features</h4>
            <ul className={portfolioStyles.modalFeatureList}>
              {modal.features.map((f) => (
                <li key={f} className={portfolioStyles.modalFeatureItem}>
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-slate-500 dark:text-slate-400" />
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
            <a
              href={modal.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={portfolioStyles.primaryAction}
            >
              Live Demo
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href={modal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={portfolioStyles.secondaryAction}
            >
              GitHub
              <CodeBracketIcon className="h-4 w-4" />
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
  const [cardsVisible, setCardsVisible] = useState(() =>
    portfolioProjects.map(() => false),
  );
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const tiltRefs = useRef([]);

  const handleTiltMove = useCallback((e, i) => {
    const card = tiltRefs.current[i];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = ((centerY - y) / centerY) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.01)`;
  }, []);

  const handleTiltLeave = useCallback((i) => {
    const card = tiltRefs.current[i];
    if (!card) return;
    card.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  }, []);

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
            <article
              key={project.title}
              ref={(el) => {
                cardRefs.current[i] = el;
                tiltRefs.current[i] = el;
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseMove={(e) => handleTiltMove(e, i)}
              onMouseLeave={() => {
                setHoveredCard(null);
                handleTiltLeave(i);
              }}
              className={portfolioStyles.card}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
                opacity: cardsVisible[i] ? 1 : 0,
                transform: cardsVisible[i]
                  ? "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)"
                  : "translateY(36px) scale(0.985)",
                filter: cardsVisible[i] ? "blur(0px)" : "blur(10px)",
                border:
                  hoveredCard === i
                    ? portfolioToneStyles[project.tone].hoverBorder.border
                    : undefined,
                boxShadow:
                  hoveredCard === i
                    ? portfolioToneStyles[project.tone].hoverBorder.boxShadow
                    : undefined,
                transition:
                  "opacity 0.6s ease-out, transform 0.3s cubic-bezier(0.22,1,0.36,1), filter 0.55s ease-out, border-color 0.3s ease, box-shadow 0.35s ease",
              }}
            >
              <div
                className={`${portfolioStyles.cardVisual} ${portfolioToneStyles[project.tone].surface}`}
              >
                <div
                  className={`${portfolioStyles.cardVisualGlow} ${portfolioToneStyles[project.tone].glow}`}
                />
                <div className={portfolioStyles.cardIconRow}>
                  <div
                    className={`${portfolioStyles.cardIconWrap} ${portfolioToneStyles[project.tone].iconWrap}`}
                    style={{
                      animation:
                        hoveredCard === i
                          ? "portfolioIconFloat 1.8s ease-in-out infinite"
                          : "none",
                    }}
                  >
                    {(() => {
                      const ProjectIcon =
                        projectIcons[project.icon] ?? ShoppingBagIcon;

                      return (
                        <ProjectIcon className={portfolioStyles.cardIcon} />
                      );
                    })()}
                  </div>
                </div>
              </div>
              <div className={portfolioStyles.cardBody}>
                <div className={portfolioStyles.cardHeader}>
                  <div className={portfolioStyles.cardTitleWrap}>
                    <p className={portfolioStyles.cardKicker}>
                      Featured project
                    </p>
                    <h3 className={portfolioStyles.cardTitle}>
                      {project.title}
                    </h3>
                  </div>
                </div>
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
                <div className={portfolioStyles.cardFooter}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={portfolioStyles.viewButton}
                  >
                    View project
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{portfolioStyles.keyframes}</style>
    </section>
  );
}
