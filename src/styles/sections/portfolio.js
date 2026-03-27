export const portfolioStyles = {
  section: "py-20 px-2 sm:px-4 md:px-10 scroll-mt-24",
  wrapper: "w-full",
  heading: "text-center mb-16 transition-all duration-700 ease-out",
  title: "mb-4 text-3xl font-bold sm:text-4xl",
  subtitle: "text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "bg-white dark:bg-slate-800 rounded-xl overflow-hidden",
  cardImage: "h-48 flex items-center justify-center overflow-hidden",
  cardEmoji: "text-5xl transition-transform duration-500 hover:scale-125",
  cardBody: "p-6",
  cardTitle: "text-xl font-bold mb-2",
  cardDescription:
    "mb-4 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base",
  tags: "flex flex-wrap gap-2 mb-4",
  tag: "rounded-full px-3 py-1 text-sm font-medium",
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
  modalOverview:
    "mb-6 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base",
  modalSection: "mb-6",
  modalSectionTitle:
    "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400",
  modalFeatureList: "grid grid-cols-1 gap-3 sm:grid-cols-2",
  modalFeatureItem:
    "flex items-start gap-2 text-sm leading-6 text-slate-800 dark:text-slate-300",
  modalTechStack: "flex flex-wrap gap-2",
  modalTechItem:
    "cursor-default rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
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
