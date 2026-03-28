import React from "react";
import { homeContent } from "../data/siteContent";
import { homeStyles } from "../styles/componentStyles";

export default function HomeSection() {
  return (
    <section id="home" className={homeStyles.section}>
      <div className={homeStyles.glow} aria-hidden="true" />
      <div className={homeStyles.wrapper}>
        <div className={homeStyles.emoji}>{homeContent.emoji}</div>
        <h1 className={homeStyles.title}>{homeContent.title}</h1>
        <p className={homeStyles.intro}>
          {homeContent.introPrefix}{" "}
          <span className={homeStyles.name}>{homeContent.name}</span>
          {homeContent.introSuffix}
        </p>
        <a href={homeContent.ctaHref} className={homeStyles.cta}>
          {homeContent.ctaLabel}
        </a>
      </div>
    </section>
  );
}
