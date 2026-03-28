import React from "react";
import { motion } from "framer-motion";
import { services, servicesSectionContent } from "../data/siteContent";
import { serviceToneStyles, servicesStyles } from "../styles/componentStyles";

export default function ServicesSection() {
  return (
    <section id="services" className={servicesStyles.section}>
      <div className={servicesStyles.wrapper}>
        <div className={servicesStyles.heading}>
          <h2 className={servicesStyles.title}>
            {servicesSectionContent.title}
          </h2>
          <p className={servicesStyles.subtitle}>
            {servicesSectionContent.subtitle}
          </p>
        </div>
        <div className={servicesStyles.grid}>
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{
                opacity: 0,
                y: 36,
                scale: 0.975,
                filter: "blur(10px)",
              }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.012,
                boxShadow: "0 24px 56px rgba(15,23,42,0.16)",
              }}
              className={servicesStyles.cardShell}
            >
              <motion.div
                className={servicesStyles.cardBorder}
                style={{
                  backgroundImage: serviceToneStyles[service.tone].border,
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              />
              <div
                className={`${servicesStyles.cardGlow} ${serviceToneStyles[service.tone].glow}`}
              />
              <div className={servicesStyles.card}>
                <div className={servicesStyles.cardInner}>
                  <div className={servicesStyles.iconRow}>
                    <div className={servicesStyles.iconFrame}>
                      <div
                        className={`${servicesStyles.iconHalo} ${serviceToneStyles[service.tone].iconHalo}`}
                      />
                      <motion.div
                        className={`${servicesStyles.iconBox} ${serviceToneStyles[service.tone].iconBox}`}
                        whileHover={{ scale: 1.08, rotate: -6, y: -2 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        {React.createElement(service.icon, {
                          className: servicesStyles.icon,
                        })}
                      </motion.div>
                    </div>
                    <h3 className={servicesStyles.cardTitle}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={servicesStyles.description}>{service.desc}</p>
                  <ul className={servicesStyles.features}>
                    {service.features.map((f) => (
                      <li key={f} className={servicesStyles.featureItem}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
