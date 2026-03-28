import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { homeContent } from "../data/siteContent";
import { homeStyles } from "../styles/componentStyles";

function useTypedText(text, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setDisplayed(text);
      return;
    }
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, prefersReduced]);

  return displayed;
}

export default function HomeSection() {
  const prefersReducedMotion = useReducedMotion();
  const fullIntro = `${homeContent.introPrefix} ${homeContent.name}${homeContent.introSuffix}`;
  const typed = useTypedText(fullIntro, 35);

  return (
    <section id="home" className={homeStyles.section}>
      <div className={homeStyles.glow} aria-hidden="true" />
      <div className={homeStyles.wrapper}>
        <motion.div
          className={homeStyles.emoji}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, -12, 0],
                  rotateY: [0, 15, 0, -15, 0],
                  rotateX: [0, 8, 0, -8, 0],
                }
          }
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ perspective: 600, transformStyle: "preserve-3d" }}
        >
          {homeContent.emoji}
        </motion.div>
        <motion.h1
          className={homeStyles.title}
          initial={{ opacity: 0, rotateX: -20, y: 40 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ perspective: 800, transformStyle: "preserve-3d" }}
        >
          {homeContent.title}
        </motion.h1>
        <motion.p
          className={homeStyles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          {(() => {
            const name = homeContent.name;
            const idx = typed.indexOf(name);
            if (idx === -1) return typed;
            return (
              <>
                {typed.slice(0, idx)}
                <span className={homeStyles.name}>
                  {typed.slice(idx, idx + name.length)}
                </span>
                {typed.slice(idx + name.length)}
              </>
            );
          })()}
        </motion.p>
        <motion.a
          href={homeContent.ctaHref}
          className={homeStyles.cta}
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            rotateX: -4,
            y: -4,
            boxShadow: "0 20px 40px rgba(249,115,22,0.25)",
          }}
          whileTap={{ scale: 0.97 }}
          style={{ perspective: 600 }}
        >
          {homeContent.ctaLabel}
        </motion.a>
      </div>
    </section>
  );
}
