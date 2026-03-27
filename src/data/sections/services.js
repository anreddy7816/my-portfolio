import { ServiceIcons } from "../../components/ServiceIcons";

export const servicesSectionContent = {
  title: "Services I Offer",
  subtitle: "Comprehensive web development solutions tailored to your needs",
};

export const services = [
  {
    icon: ServiceIcons.webDesign,
    tone: "orange",
    title: "Web Design",
    desc: "Creating beautiful, user-friendly interfaces that engage your audience and convert visitors into customers.",
    features: ["UI/UX Design", "Responsive Design", "Brand Identity"],
  },
  {
    icon: ServiceIcons.webDevelopment,
    tone: "blue",
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
    tone: "green",
    title: "Cloud & DevOps",
    desc: "Deploy and manage your applications efficiently using cloud platforms and DevOps practices.",
    features: ["AWS & Cloud Setup", "Docker & Kubernetes", "CI/CD Pipelines"],
  },
  {
    icon: ServiceIcons.security,
    tone: "red",
    title: "Security Consulting",
    desc: "Ensure your applications are secure with best practices and comprehensive security audits.",
    features: ["Security Audits", "Vulnerability Testing", "Best Practices"],
  },
  {
    icon: ServiceIcons.mobile,
    tone: "pink",
    title: "Mobile Development",
    desc: "Build responsive mobile applications that work seamlessly across all devices and platforms.",
    features: ["React Native", "Progressive Web Apps", "Cross-Platform"],
  },
  {
    icon: ServiceIcons.consulting,
    tone: "indigo",
    title: "Consulting & Support",
    desc: "Expert guidance and ongoing support to help your business achieve its technology goals.",
    features: [
      "Technical Consulting",
      "Ongoing Support",
      "Training & Mentoring",
    ],
  },
];
