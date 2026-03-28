import React from "react";
import { motion } from "framer-motion";
import { documentsSectionContent } from "../data/siteContent";
import { documentsStyles } from "../styles/componentStyles";

export default function DocumentsSection({ documents }) {
  return (
    <section id="documents" className={documentsStyles.section}>
      <div className={documentsStyles.wrapper}>
        <motion.div
          className={documentsStyles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className={documentsStyles.title}>
            {documentsSectionContent.title}
          </h2>
          <p className={documentsStyles.subtitle}>
            {documentsSectionContent.subtitle}
          </p>
        </motion.div>
        <div className={documentsStyles.grid}>
          {documents.map((d, i) => (
            <motion.div
              key={i}
              className={documentsStyles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className={documentsStyles.cardRow}>
                <div className={documentsStyles.badge}>
                  {documentsSectionContent.fileTypeLabel}
                </div>
                <div className={documentsStyles.content}>
                  <h3 className={documentsStyles.cardTitle}>{d.title}</h3>
                </div>
                <a
                  href={d.href}
                  download
                  className={documentsStyles.downloadIcon}
                  aria-label={`Download ${d.title}`}
                >
                  ⬇️
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
