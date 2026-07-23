export const contactSectionContent = {
  title: "Get In Touch",
  subtitle:
    "Have a project in mind? Let's work together and create something amazing.",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/anreddy7816/",
      tone: "dark",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nagireddy-avula-ba96ab280/",
      tone: "blue",
    },
  ],
  methods: [
    {
      title: "Email",
      description: "Send us an email and we'll respond as soon as possible.",
      value: "anreddy7816@gmail.com",
      href: "mailto:anreddy7816@gmail.com",
      icon: "email",
    },
    {
      title: "Phone",
      description: "Call us during business hours and speak with our team.",
      value: "+91 98661 67816",
      href: "tel:+91 9866167816",
      icon: "phone",
    },
  ],
  location: {
    title: "Location",
    description:
      "Based in India, available for remote collaboration worldwide.",
    value: "Guntur, Andhra Pradesh, INDIA",
    icon: "location",
  },
  form: {
    title: "Let's Build Something Great Together",
    recipientName: "Nagi",
    fields: [
      {
        label: "Your Name",
        type: "text",
        placeholder: "Naveen Kumar",
        name: "name",
      },
      {
        label: "Your Email",
        type: "email",
        placeholder: "naveen@example.com",
        name: "email",
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Your message here...",
        name: "message",
        rows: 3,
      },
    ],
    submittingLabel: "Sending...",
    submitLabel: "Send Message",
    messages: {
      sending: "Sending your message...",
      successAlert:
        "Thank you for reaching out. We have received your email and will get back to you shortly.",
      error: "We couldn't send your message. Please try again in a moment.",
      configError:
        "Email is not configured yet. Add your EmailJS keys to the Vite environment variables first.",
      validation: {
        nameRequired: "Please enter your name.",
        nameTooShort: "Name should be at least 2 characters long.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please enter a valid email address.",
        messageRequired: "Please enter your message.",
        messageTooShort: "Message should be at least 10 characters long.",
      },
    },
  },
};
