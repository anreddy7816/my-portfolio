import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { blogArticles, blogSectionContent } from "../data/siteContent";
import { blogStyles, blogToneStyles } from "../styles/componentStyles";

function ArticleModal({ article, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const previousActiveElement = document.activeElement;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements.length) {
        event.preventDefault();
        panelRef.current.focus();
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
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [onClose]);

  return (
    <div className={blogStyles.modalOverlay} onClick={onClose}>
      <div
        ref={panelRef}
        className={blogStyles.modalPanel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={blogStyles.modalHeader}>
          <div className={blogStyles.modalHeaderRow}>
            <div>
              <h3 id={titleId} className={blogStyles.modalTitle}>
                {article.title}
              </h3>
              <div className={blogStyles.modalMeta}>
                <span
                  className={`${blogStyles.tag} ${blogToneStyles[article.tone].tag}`}
                >
                  {article.tag}
                </span>
                <span className={blogStyles.date}>{article.date}</span>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className={blogStyles.closeButton}
              aria-label="Close article details"
            >
              ✕
            </button>
          </div>
        </div>

        <div className={blogStyles.modalScrollArea}>
          <p id={descriptionId} className={blogStyles.modalOverview}>
            {article.details.overview}
          </p>

          <div className={blogStyles.modalSection}>
            <h4 className={blogStyles.modalSectionTitle}>Key Details</h4>
            <ul className={blogStyles.modalList}>
              {article.details.highlights.map((item) => (
                <li key={item} className={blogStyles.modalListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={blogStyles.modalSection}>
            <h4 className={blogStyles.modalSectionTitle}>Takeaway</h4>
            <div className={blogStyles.modalTakeaway}>
              {article.details.takeaway}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
      <section id="blog" className={blogStyles.section}>
        <div className={blogStyles.wrapper}>
          <div className={blogStyles.heading}>
            <h2 className={blogStyles.title}>{blogSectionContent.title}</h2>
            <p className={blogStyles.subtitle}>{blogSectionContent.subtitle}</p>
          </div>
          <div className={blogStyles.grid}>
            {blogArticles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 12,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                className={blogStyles.card}
              >
                <div
                  className={`${blogStyles.image} bg-gradient-to-br ${blogToneStyles[article.tone].gradient}`}
                >
                  <div className={blogStyles.icon}>{article.icon}</div>
                </div>
                <div className={blogStyles.body}>
                  <div className={blogStyles.meta}>
                    <span
                      className={`${blogStyles.tag} ${blogToneStyles[article.tone].tag}`}
                    >
                      {article.tag}
                    </span>
                    <span className={blogStyles.date}>{article.date}</span>
                  </div>
                  <h3 className={blogStyles.cardTitle}>{article.title}</h3>
                  <p className={blogStyles.description}>{article.desc}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className={blogStyles.linkButton}
                  >
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {selectedArticle ? (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      ) : null}
    </>
  );
}
