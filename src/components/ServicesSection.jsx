import React from "react";
import { motion } from "framer-motion";
import { ServiceIcons } from "./ServiceIcons";

export default function ServicesSection() {
  const services = [
    {
      icon: ServiceIcons.webDesign,
      color: "from-orange-400 to-orange-600",
      title: "Web Design",
      desc: "Creating beautiful, user-friendly interfaces that engage your audience and convert visitors into customers.",
      features: ["UI/UX Design", "Responsive Design", "Brand Identity"],
    },
    {
      icon: ServiceIcons.webDevelopment,
      color: "from-blue-400 to-blue-600",
      title: "Web Development",
      desc: "Building robust, scalable web applications using modern technologies and best practices.",
      features: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Solutions",
      ],
    },
    {
      icon: ServiceIcons.cloudDevOps,
      color: "from-green-400 to-green-600",
      title: "Cloud & DevOps",
      desc: "Deploy and manage your applications efficiently using cloud platforms and DevOps practices.",
      features: ["AWS & Cloud Setup", "Docker & Kubernetes", "CI/CD Pipelines"],
    },
    {
      icon: ServiceIcons.security,
      color: "from-red-400 to-red-600",
      title: "Security Consulting",
      desc: "Ensure your applications are secure with best practices and comprehensive security audits.",
      features: ["Security Audits", "Vulnerability Testing", "Best Practices"],
    },
    {
      icon: ServiceIcons.mobile,
      color: "from-pink-400 to-pink-600",
      title: "Mobile Development",
      desc: "Build responsive mobile applications that work seamlessly across all devices and platforms.",
      features: ["React Native", "Progressive Web Apps", "Cross-Platform"],
    },
    {
      icon: ServiceIcons.consulting,
      color: "from-indigo-400 to-indigo-600",
      title: "Consulting & Support",
      desc: "Expert guidance and ongoing support to help your business achieve its technology goals.",
      features: [
        "Technical Consulting",
        "Ongoing Support",
        "Training & Mentoring",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="p-8 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 hover:shadow-lg transition group bg-white dark:bg-slate-900 cursor-pointer"
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-4`}
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
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {service.desc}
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
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
