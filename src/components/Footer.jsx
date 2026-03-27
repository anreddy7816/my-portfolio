import React from "react";
import { footerContent } from "../data/siteContent";
import { footerStyles } from "../styles/componentStyles";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        <p className={footerStyles.copyright}>{footerContent.copyright}</p>
        <p className={footerStyles.crafted}>
          {footerContent.craftedPrefix}{" "}
          <span className={footerStyles.heart}>❤</span>{" "}
          {footerContent.craftedBy}
        </p>
      </div>
    </footer>
  );
}
