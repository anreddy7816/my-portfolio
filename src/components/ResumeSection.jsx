import React, { useEffect } from "react";
import { resumeContent } from "../data/siteContent";
import { resumeStyles } from "../styles/componentStyles";

function PdfIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h3" />
    </svg>
  );
}

function WordIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8 11 1.2 5L12 12l2.8 4L16 11"
      />
    </svg>
  );
}

export default function ResumeSection({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
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
      <div className={resumeStyles.container}>
        <div className={resumeStyles.header}>
          <div className={resumeStyles.glowTop} />
          <div className={resumeStyles.glowBottom} />
          <div className={resumeStyles.headerContent}>
            <div>
              <p className={resumeStyles.eyebrow}>{resumeContent.eyebrow}</p>
              <h2 className={resumeStyles.title}>{resumeContent.title}</h2>
              <p className={resumeStyles.summary}>{resumeContent.summary}</p>
            </div>
            <div className={resumeStyles.actionRow}>
              <a
                href={resumeContent.files.pdf}
                download
                className={resumeStyles.primaryButton}
              >
                <PdfIcon />
                PDF
              </a>
              <a
                href={resumeContent.files.word}
                download
                className={resumeStyles.secondaryButton}
              >
                <WordIcon />
                Word
              </a>
              <button
                type="button"
                onClick={onClose}
                className={resumeStyles.closeButton}
              >
                Close
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
