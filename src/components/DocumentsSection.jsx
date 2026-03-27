import React from "react";
import { documentsSectionContent } from "../data/siteContent";
import { documentsStyles } from "../styles/componentStyles";

export default function DocumentsSection({ documents }) {
  return (
    <section id="documents" className={documentsStyles.section}>
      <div className={documentsStyles.wrapper}>
        <div className={documentsStyles.heading}>
          <h2 className={documentsStyles.title}>
            {documentsSectionContent.title}
          </h2>
          <p className={documentsStyles.subtitle}>
            {documentsSectionContent.subtitle}
          </p>
        </div>
        <div className={documentsStyles.grid}>
          {documents.map((d, i) => (
            <a key={i} href={d.href} download className={documentsStyles.card}>
              <div className={documentsStyles.cardRow}>
                <div className={documentsStyles.badge}>
                  {documentsSectionContent.fileTypeLabel}
                </div>
                <div className={documentsStyles.content}>
                  <h3 className={documentsStyles.cardTitle}>{d.title}</h3>
                  {/* <p className={documentsStyles.fileType}>
                    {documentsSectionContent.fileTypeLabel}
                  </p> */}
                </div>
                <div className={documentsStyles.downloadIcon}>⬇️</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
