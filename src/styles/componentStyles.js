export const appStyles = {
  root: "dark",
  main: "min-h-screen w-full px-2 sm:px-4 md:px-10 text-base md:text-lg bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-orange-900 mb-0",
};

export const homeStyles = {
  section: "py-32 px-10 flex items-center justify-center min-h-screen",
  wrapper: "max-w-7xl mx-auto text-center",
  emoji: "mb-8 text-8xl",
  title: "text-6xl font-bold mb-6",
  intro: "text-2xl text-slate-600 dark:text-slate-400 mb-8",
  name: "text-orange-400 font-semibold",
  cta: "inline-block px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105",
};

export const aboutStyles = {
  section: "py-20 px-10 scroll-mt-24",
  wrapper: "max-w-7xl mx-auto",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
  title: "text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100",
  description:
    "text-xl text-slate-600 dark:text-slate-200 leading-relaxed max-w-4xl",
  highlight: "text-slate-800 dark:text-orange-300 font-semibold italic",
  imageWrapper: "flex items-center justify-center",
  image:
    "h-64 w-64 object-cover rounded-full shadow-lg border-4 border-orange-300",
};

export const navbarStyles = {
  nav: "fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 backdrop-blur-sm border-b border-slate-800 dark:border-purple-700 px-2 md:px-6 py-3 md:py-4",
  wrapper: "max-w-7xl mx-auto flex justify-between items-center",
  brandGroup: "flex items-center gap-4",
  brandImage:
    "w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer",
  brandText:
    "text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(147,197,253,0.35)]",
  brandAccent: "text-orange-400",
  actions: "flex items-center gap-4 md:gap-8",
  desktopLinks:
    "hidden md:flex space-x-10 font-medium text-slate-300 hover:text-white transition",
  link: "hover:text-orange-400 transition",
  themeButton:
    "relative inline-flex items-center h-8 w-14 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none hover:ring-2 hover:ring-orange-400",
  mobileButton:
    "md:hidden flex items-center justify-center p-2 rounded-lg bg-slate-800 text-white hover:bg-orange-400 focus:outline-none",
  mobileMenu:
    "md:hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 px-4 py-4 rounded-b-lg shadow-lg",
  mobileLinks: "flex flex-col space-y-4 font-medium text-slate-300",
  mobileAction: "text-left hover:text-orange-400 transition",
};

export const portfolioStyles = {
  section: "py-20 px-2 sm:px-4 md:px-10 scroll-mt-24",
  wrapper: "w-full",
  heading: "text-center mb-16 transition-all duration-700 ease-out",
  title: "text-4xl font-bold mb-4",
  subtitle: "text-slate-600 dark:text-slate-400 text-lg",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "bg-white dark:bg-slate-800 rounded-xl overflow-hidden",
  cardImage: "h-48 flex items-center justify-center overflow-hidden",
  cardEmoji: "text-5xl transition-transform duration-500 hover:scale-125",
  cardBody: "p-6",
  cardTitle: "text-xl font-bold mb-2",
  cardDescription: "text-slate-600 dark:text-slate-400 mb-4",
  tags: "flex flex-wrap gap-2 mb-4",
  tag: "px-3 py-1 text-xs rounded-full",
  viewButton:
    "inline-flex items-center gap-2 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition font-medium",
  modalOverlay:
    "fixed left-0 right-0 bottom-0 z-[90] flex items-start justify-center px-4 pt-16",
  modalContainer:
    "relative w-full max-w-2xl overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-2 border-orange-400 dark:border-orange-500",
  modalHeader: "flex items-center justify-between px-7 pt-7 pb-2",
  modalTitle: "text-2xl font-bold",
  closeButton:
    "w-9 h-9 flex items-center justify-center rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-200 text-base font-bold shadow-md hover:shadow-lg",
  modalBody: "px-7 pb-7 pt-3",
  modalOverview: "text-slate-600 dark:text-slate-400 mb-6 leading-relaxed",
  modalSection: "mb-6",
  modalSectionTitle:
    "text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3",
  modalFeatureList: "grid grid-cols-1 sm:grid-cols-2 gap-2",
  modalFeatureItem:
    "flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300",
  modalTechStack: "flex flex-wrap gap-2",
  modalTechItem:
    "px-3 py-1.5 text-xs font-medium rounded-full cursor-default bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  modalActions: "flex flex-wrap gap-3",
  primaryAction:
    "inline-flex items-center px-5 py-2.5 bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-sm font-semibold rounded-xl transition",
  secondaryAction:
    "inline-flex items-center px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition",
  keyframes: `
    @keyframes modalSlideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `,
};

export const portfolioToneStyles = {
  orange: {
    tag: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300",
    hoverBorder: {
      border: "2px solid rgba(251,146,60,0.9)",
      boxShadow:
        "0 0 0 4px rgba(251,146,60,0.15), 0 0 24px rgba(251,146,60,0.25), 0 16px 40px rgba(251,146,60,0.15)",
    },
  },
  green: {
    tag: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300",
    hoverBorder: {
      border: "2px solid rgba(74,222,128,0.9)",
      boxShadow:
        "0 0 0 4px rgba(74,222,128,0.15), 0 0 24px rgba(74,222,128,0.25), 0 16px 40px rgba(74,222,128,0.15)",
    },
  },
  purple: {
    tag: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300",
    hoverBorder: {
      border: "2px solid rgba(192,132,252,0.9)",
      boxShadow:
        "0 0 0 4px rgba(192,132,252,0.15), 0 0 24px rgba(192,132,252,0.25), 0 16px 40px rgba(192,132,252,0.15)",
    },
  },
};

export const servicesStyles = {
  section: "py-20 px-10 scroll-mt-24",
  wrapper: "max-w-7xl mx-auto",
  heading: "text-center mb-16",
  title: "text-4xl font-bold mb-4",
  subtitle: "text-slate-600 dark:text-slate-400 text-lg",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "p-8 border-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 hover:shadow-lg transition group bg-white dark:bg-slate-900 cursor-pointer",
  iconBox:
    "w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4",
  cardTitle: "text-xl font-bold mb-3",
  description: "text-slate-600 dark:text-slate-400 mb-4",
  features: "space-y-2 text-sm text-slate-600 dark:text-slate-400",
};

export const serviceToneStyles = {
  orange: "from-orange-400 to-orange-600",
  blue: "from-blue-400 to-blue-600",
  green: "from-green-400 to-green-600",
  red: "from-red-400 to-red-600",
  pink: "from-pink-400 to-pink-600",
  indigo: "from-indigo-400 to-indigo-600",
};

export const blogStyles = {
  section: "py-20 px-2 sm:px-4 md:px-10 scroll-mt-24",
  wrapper: "w-full",
  heading: "text-center mb-16",
  title: "text-4xl font-bold mb-4",
  subtitle: "text-slate-600 dark:text-slate-400 text-lg",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition",
  image: "h-40 flex items-center justify-center",
  icon: "text-5xl",
  body: "p-6",
  meta: "flex items-center gap-2 mb-3",
  tag: "px-3 py-1 text-xs rounded-full font-medium",
  date: "text-xs text-slate-500 dark:text-slate-200",
  cardTitle: "text-lg font-bold mb-3",
  description: "text-slate-600 dark:text-slate-400 mb-4",
  link: "text-orange-400 hover:text-orange-500 font-medium",
};

export const blogToneStyles = {
  orange: {
    gradient: "from-orange-400 to-orange-600",
    tag: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300",
  },
  blue: {
    gradient: "from-blue-400 to-blue-600",
    tag: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300",
  },
  green: {
    gradient: "from-green-400 to-green-600",
    tag: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300",
  },
  purple: {
    gradient: "from-purple-400 to-purple-600",
    tag: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300",
  },
  red: {
    gradient: "from-red-400 to-red-600",
    tag: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300",
  },
};

export const documentsStyles = {
  section: "py-20 px-10 scroll-mt-24",
  wrapper: "max-w-7xl mx-auto",
  heading: "text-center mb-16",
  title: "text-4xl font-bold mb-4",
  subtitle: "text-slate-600 dark:text-slate-400 text-lg",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  card: "bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 block",
  cardRow: "flex items-center gap-4",
  badge:
    "w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-900/20 text-red-700 rounded-md text-lg font-semibold",
  content: "flex-1",
  cardTitle: "font-semibold text-slate-800 dark:text-slate-100 line-clamp-2",
  fileType: "text-xs text-slate-500 dark:text-slate-400 mt-1",
  downloadIcon: "text-xl",
};

export const contactStyles = {
  section: "py-20 px-10 scroll-mt-24",
  header: "max-w-7xl mx-auto text-center mb-16",
  title: "text-4xl font-bold mb-4",
  socialRow: "flex items-center justify-center gap-4 mb-4",
  socialButton:
    "inline-flex items-center gap-2 px-4 py-2 text-white rounded-md hover:opacity-90 transition",
  socialTones: {
    dark: "bg-slate-900",
    blue: "bg-blue-600",
  },
  subtitle: "text-slate-600 dark:text-slate-400 text-lg",
  grid: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12",
  methods: "space-y-8",
  methodRow: "flex items-start gap-6",
  methodIcon: "w-10 h-10 text-orange-400 dark:text-orange-300 flex-shrink-0",
  methodTitle: "text-xl font-semibold mb-2",
  methodDescription: "text-slate-600 dark:text-slate-400 mb-2",
  methodLink: "text-orange-400 hover:text-orange-500 font-medium transition",
  locationRow: "flex items-center gap-2 text-slate-600 dark:text-slate-400",
  locationIcon: "w-8 h-8 text-orange-400 dark:text-orange-300",
  formCard: "bg-slate-50 dark:bg-slate-800 p-3 rounded-lg shadow-lg",
  formTitle: "text-base font-bold mb-3",
  form: "space-y-2",
  fieldWrapper: "block text-xs font-medium mb-1",
  input:
    "w-full px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-orange-400 transition",
  textarea:
    "w-full px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-orange-400 transition resize-none",
  submit:
    "w-full py-1 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105",
  submitDisabled:
    "cursor-not-allowed opacity-70 hover:scale-100 hover:bg-orange-400",
  statusBase: "rounded-lg px-3 py-2 text-sm font-medium",
  statusSuccess:
    "border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300",
  statusError:
    "border border-red-200 bg-red-50 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300",
  statusLoading:
    "border border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300",
};

export const resumeStyles = {
  overlay:
    "fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm",
  backdrop: "absolute inset-0",
  container:
    "relative z-10 max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-white/15 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.45)] [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2 dark:border-slate-700 dark:bg-slate-900 dark:[scrollbar-color:#64748b_transparent] dark:[&::-webkit-scrollbar-thumb]:bg-slate-500",
  header:
    "relative overflow-hidden rounded-t-[28px] bg-gradient-to-r from-slate-950 via-blue-950 to-orange-500 px-6 py-8 text-white md:px-10",
  glowTop: "absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl",
  glowBottom:
    "absolute bottom-0 left-10 h-24 w-24 rounded-full bg-orange-300/20 blur-2xl",
  headerContent:
    "relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between",
  eyebrow:
    "mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-orange-200",
  title: "text-3xl font-bold md:text-4xl",
  summary: "mt-3 max-w-2xl text-sm text-slate-200 md:text-base",
  actionRow: "flex flex-wrap items-center gap-3 md:justify-end",
  primaryButton:
    "inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-orange-100",
  secondaryButton:
    "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20",
  closeButton:
    "rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20",
  body: "grid gap-8 px-6 py-8 md:grid-cols-[1.25fr_0.85fr] md:px-10",
  sectionGroup: "space-y-8",
  sectionTitle: "text-xl font-bold text-slate-900 dark:text-slate-100",
  bodyText: "mt-3 leading-7 text-slate-600 dark:text-slate-300",
  highlightList: "mt-4 space-y-3",
  highlightItem:
    "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200",
  strengthGrid: "mt-4 grid gap-4 md:grid-cols-2",
  strengthCardDark: "rounded-2xl bg-slate-950 px-5 py-5 text-slate-100",
  strengthCardAccent:
    "rounded-2xl bg-orange-50 px-5 py-5 text-slate-900 dark:bg-orange-500/10 dark:text-slate-100",
  strengthTitleDark:
    "text-sm font-semibold uppercase tracking-[0.2em] text-orange-300",
  strengthTitleAccent:
    "text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-300",
  strengthBodyDark: "mt-2 leading-7 text-slate-300",
  strengthBodyAccent: "mt-2 leading-7 text-slate-700 dark:text-slate-200",
  aside: "space-y-6",
  expertiseCard:
    "rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/70",
  expertiseTitle: "text-lg font-bold text-slate-900 dark:text-slate-100",
  expertiseList: "mt-4 flex flex-wrap gap-3",
  expertiseItem:
    "rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-orange-400/30 dark:bg-slate-900 dark:text-slate-200",
  experienceCard:
    "rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-6 text-slate-950",
  experienceLabel:
    "text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/70",
  experienceValue: "mt-3 text-4xl font-bold",
  experienceBody: "mt-3 leading-7 text-slate-900/80",
  updateCard:
    "rounded-3xl border border-dashed border-slate-300 p-6 dark:border-slate-600",
  updateTitle: "text-lg font-bold text-slate-900 dark:text-slate-100",
  updateBody: "mt-3 leading-7 text-slate-600 dark:text-slate-300",
};

export const footerStyles = {
  footer:
    "bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-slate-950 border-t border-orange-400 py-4 px-4 mt-10",
  wrapper: "max-w-7xl mx-auto text-center",
  copyright: "text-slate-300 text-sm",
  crafted: "text-slate-400 text-xs mt-2",
  heart: "text-orange-400",
};
