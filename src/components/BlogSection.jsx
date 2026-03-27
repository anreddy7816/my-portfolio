import React from "react";
import { motion } from "framer-motion";
import { blogArticles, blogSectionContent } from "../data/siteContent";
import { blogStyles, blogToneStyles } from "../styles/componentStyles";

export default function BlogSection() {
  return (
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
                <a href={article.href} className={blogStyles.link}>
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
