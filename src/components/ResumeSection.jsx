import React, { useEffect, useId, useRef } from "react";
import { resumeContent } from "../data/siteContent";
import { resumeStyles } from "../styles/componentStyles";

function PdfIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M7 2.75A2.25 2.25 0 0 0 4.75 5v14A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19V8.56a2.25 2.25 0 0 0-.66-1.59l-3.9-3.9a2.25 2.25 0 0 0-1.6-.66H7Zm5.25 1.9 4.1 4.1h-2.6a1.5 1.5 0 0 1-1.5-1.5v-2.6ZM7.5 12.25a.75.75 0 0 1 .75-.75h2.1a2.4 2.4 0 1 1 0 4.8H9V18a.75.75 0 0 1-1.5 0v-5.75Zm1.5.75v1.8h1.35a.9.9 0 1 0 0-1.8H9Zm4.05-.75a.75.75 0 0 1 .75-.75h1.4a2.75 2.75 0 1 1 0 5.5h-1.4a.75.75 0 0 1-.75-.75v-4Zm1.5.75v2.5h.65a1.25 1.25 0 1 0 0-2.5h-.65Zm3.25-.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-1.25v.9h1.1a.75.75 0 0 1 0 1.5h-1.1V18a.75.75 0 0 1-1.5 0v-5.75Z" />
    </svg>
  );
}

function WordIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M7 2.75A2.25 2.25 0 0 0 4.75 5v14A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19V8.56a2.25 2.25 0 0 0-.66-1.59l-3.9-3.9a2.25 2.25 0 0 0-1.6-.66H7Zm5.25 1.9 4.1 4.1h-2.6a1.5 1.5 0 0 1-1.5-1.5v-2.6ZM6.8 12.34a.75.75 0 0 1 1.45-.28l1.03 3.41 1.14-3.44a.75.75 0 0 1 1.42 0l1.14 3.44 1.03-3.4a.75.75 0 1 1 1.43.43l-1.7 5.62a.75.75 0 0 1-1.43.02L11.13 14.8 10 18.14a.75.75 0 0 1-1.43-.02l-1.7-5.62a.75.75 0 0 1-.07-.16Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18" />
    </svg>
  );
}

export default function ResumeSection({ isOpen, onClose }) {
  const containerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const summaryId = useId();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousActiveElement = document.activeElement;

    const handleKeyDown = (event) => {
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

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={resumeStyles.overlay}>
      <div
        className={resumeStyles.backdrop}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        className={resumeStyles.container}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={summaryId}
        tabIndex={-1}
      >
        <div className={resumeStyles.header}>
          <div className={resumeStyles.glowTop} />
          <div className={resumeStyles.glowBottom} />
          <div className={resumeStyles.headerContent}>
            <div>
              <p className={resumeStyles.eyebrow}>{resumeContent.eyebrow}</p>
              <h2 id={titleId} className={resumeStyles.title}>
                {resumeContent.title}
              </h2>
              <p id={summaryId} className={resumeStyles.summary}>
                {resumeContent.summary}
              </p>
            </div>
            <div className={resumeStyles.actionRow}>
              <a
                href={resumeContent.files.pdf}
                download
                className={resumeStyles.primaryButton}
              >
                <span className={resumeStyles.primaryButtonIcon}>
                  <PdfIcon />
                </span>
                <span>PDF</span>
              </a>
              <a
                href={resumeContent.files.word}
                download
                className={resumeStyles.secondaryButton}
              >
                <span className={resumeStyles.secondaryButtonIcon}>
                  <WordIcon />
                </span>
                <span>Word</span>
              </a>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className={resumeStyles.closeButton}
                aria-label="Close resume"
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>

        <div className={resumeStyles.body}>
          <section className={resumeStyles.sectionGroup}>
            <div>
              <h3 className={resumeStyles.sectionTitle}>
                {resumeContent.profileTitle}
              </h3>
              <p className={resumeStyles.bodyText}>
                {resumeContent.profileSummary}
              </p>
            </div>

            <div>
              <h3 className={resumeStyles.sectionTitle}>
                {resumeContent.highlightsTitle}
              </h3>
              <div className={resumeStyles.highlightList}>
                {resumeContent.highlights.map((item) => (
                  <div key={item} className={resumeStyles.highlightItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={resumeStyles.sectionTitle}>
                {resumeContent.strengthsTitle}
              </h3>
              <div className={resumeStyles.strengthGrid}>
                {resumeContent.strengths.map((strength) => (
                  <div
                    key={strength.title}
                    className={
                      strength.tone === "dark"
                        ? resumeStyles.strengthCardDark
                        : resumeStyles.strengthCardAccent
                    }
                  >
                    <p
                      className={
                        strength.tone === "dark"
                          ? resumeStyles.strengthTitleDark
                          : resumeStyles.strengthTitleAccent
                      }
                    >
                      {strength.title}
                    </p>
                    <p
                      className={
                        strength.tone === "dark"
                          ? resumeStyles.strengthBodyDark
                          : resumeStyles.strengthBodyAccent
                      }
                    >
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className={resumeStyles.aside}>
            <div className={resumeStyles.expertiseCard}>
              <h3 className={resumeStyles.expertiseTitle}>
                {resumeContent.expertiseTitle}
              </h3>
              <div className={resumeStyles.expertiseList}>
                {resumeContent.expertise.map((item) => (
                  <span key={item} className={resumeStyles.expertiseItem}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className={resumeStyles.experienceCard}>
              <p className={resumeStyles.experienceLabel}>
                {resumeContent.experienceLabel}
              </p>
              <p className={resumeStyles.experienceValue}>
                {resumeContent.experienceValue}
              </p>
              <p className={resumeStyles.experienceBody}>
                {resumeContent.experienceSummary}
              </p>
            </div>

            <div className={resumeStyles.updateCard}>
              <h3 className={resumeStyles.updateTitle}>
                {resumeContent.updateTitle}
              </h3>
              <p className={resumeStyles.updateBody}>
                {resumeContent.updateSummary}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
