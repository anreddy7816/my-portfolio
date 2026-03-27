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
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 14,
                delay: idx * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 8px 32px rgba(255,140,0,0.15)",
              }}
              className={servicesStyles.card}
            >
              <motion.div
                className={`${servicesStyles.iconBox} bg-gradient-to-br ${serviceToneStyles[service.tone]}`}
                whileHover={{ scale: 1.15, rotate: -8 }}
                animate={{
                  y: [0, -8, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                }}
              >
                {React.createElement(service.icon, { className: "w-10 h-10" })}
              </motion.div>
              <h3 className={servicesStyles.cardTitle}>{service.title}</h3>
              <p className={servicesStyles.description}>{service.desc}</p>
              <ul className={servicesStyles.features}>
                {service.features.map((f) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                  >
                    ✓ {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
