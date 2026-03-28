import React, { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { services, servicesSectionContent } from "../data/siteContent";
import { serviceToneStyles, servicesStyles } from "../styles/componentStyles";

function TiltCard({ children, className, motionProps }) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.012)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  }, []);

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      {...motionProps}
    >
      {children}
    </motion.article>
  );
}

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
            <TiltCard
              key={service.title}
              className={servicesStyles.cardShell}
              motionProps={{
                initial: {
                  opacity: 0,
                  y: 36,
                  scale: 0.975,
                  filter: "blur(10px)",
                },
                whileInView: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.08,
                },
                viewport: { once: true },
              }}
            >
              <motion.div
                className={servicesStyles.cardBorder}
                style={{
                  backgroundImage: serviceToneStyles[service.tone].border,
                }}
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                viewport={{ once: false, amount: 0.2 }}
              />
              <div
                className={`${servicesStyles.cardGlow} ${serviceToneStyles[service.tone].glow}`}
              />
              <div className={servicesStyles.card}>
                <div className={servicesStyles.cardInner}>
                  <div className={servicesStyles.iconRow}>
                    <div className={servicesStyles.iconFrame}>
                      <div
                        className={`${servicesStyles.iconGlow} ${serviceToneStyles[service.tone].iconGlow}`}
                      />
                      <motion.div
                        className={`${servicesStyles.iconCircle} ${serviceToneStyles[service.tone].iconCircle}`}
                        whileHover={{ scale: 1.15, rotate: -8, y: -3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
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
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
