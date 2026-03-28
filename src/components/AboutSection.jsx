import React from "react";
import { motion } from "framer-motion";
import NagiAboutMe from "../assets/Nagi_rm_bg.png";
import { aboutContent } from "../data/siteContent";
import { aboutStyles } from "../styles/componentStyles";

export default function AboutSection() {
  return (
    <section id="about" className={aboutStyles.section}>
      <div className={aboutStyles.wrapper}>
        <div className={aboutStyles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className={aboutStyles.title}>{aboutContent.title}</h2>
            <p className={aboutStyles.description}>
              {aboutContent.descriptionStart}{" "}
              <span className={aboutStyles.highlight}>
                {aboutContent.highlight}
              </span>
              {aboutContent.descriptionEnd}
            </p>
            <p className={aboutStyles.supportingText}>
              {aboutContent.supportingText}
            </p>
          </motion.div>
          <motion.div
            className={aboutStyles.imageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            viewport={{ once: true }}
          >
            <img
              src={NagiAboutMe}
              alt={aboutContent.imageAlt}
              className={aboutStyles.image}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
