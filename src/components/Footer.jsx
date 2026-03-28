import React from "react";
import { motion } from "framer-motion";
import { footerContent } from "../data/siteContent";
import { footerStyles } from "../styles/componentStyles";

export default function Footer() {
  return (
    <motion.footer
      className={footerStyles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className={footerStyles.wrapper}>
        <p className={footerStyles.copyright}>{footerContent.copyright}</p>
        <p className={footerStyles.crafted}>
          {footerContent.craftedPrefix}{" "}
          <span className={footerStyles.heart}>❤</span>{" "}
          {footerContent.craftedBy}
        </p>
      </div>
    </motion.footer>
  );
}
