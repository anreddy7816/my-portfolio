import React from "react";
import NagiAboutMe from "../assets/Nagi_rm_bg.png";
import { aboutContent } from "../data/siteContent";
import { aboutStyles } from "../styles/componentStyles";

export default function AboutSection() {
  return (
    <section id="about" className={aboutStyles.section}>
      <div className={aboutStyles.wrapper}>
        <div className={aboutStyles.grid}>
          <div>
            <h2 className={aboutStyles.title}>{aboutContent.title}</h2>
            <p className={aboutStyles.description}>
              {aboutContent.descriptionStart}{" "}
              <span className={aboutStyles.highlight}>
                {aboutContent.highlight}
              </span>
              {aboutContent.descriptionEnd}
            </p>
          </div>
          <div className={aboutStyles.imageWrapper}>
            <img
              src={NagiAboutMe}
              alt={aboutContent.imageAlt}
              className={aboutStyles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
