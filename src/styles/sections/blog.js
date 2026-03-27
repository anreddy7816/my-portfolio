export const blogStyles = {
  section: "py-20 px-2 sm:px-4 md:px-10 scroll-mt-24",
  wrapper: "w-full",
  heading: "text-center mb-16",
  title:
    "mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl",
  subtitle: "text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "overflow-hidden rounded-2xl border border-orange-200/90 bg-gradient-to-br from-white via-slate-50 to-orange-50/60 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_20px_44px_rgba(15,23,42,0.14)] dark:border-orange-500/35 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 dark:shadow-[0_14px_36px_rgba(2,6,23,0.45)] dark:hover:border-orange-400 dark:hover:shadow-[0_20px_48px_rgba(2,6,23,0.6)]",
  image: "h-40 flex items-center justify-center",
  icon: "text-5xl",
  body: "p-6",
  meta: "flex items-center gap-2 mb-3",
  tag: "rounded-full px-3 py-1 text-sm font-medium",
  date: "text-sm font-medium text-slate-600 dark:text-slate-200",
  cardTitle: "mb-3 text-lg font-bold text-slate-900 dark:text-slate-100",
  description:
    "mb-4 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base",
  link: "font-medium text-orange-400 transition hover:text-orange-500",
  linkButton:
    "inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:border-orange-400 hover:bg-orange-50 dark:border-orange-400/35 dark:bg-slate-800/80 dark:text-orange-300 dark:hover:border-orange-300 dark:hover:bg-slate-700",
  modalOverlay:
    "fixed inset-0 z-[210] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm",
  modalPanel:
    "relative w-full max-w-3xl overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.28)] dark:border-orange-400/30 dark:bg-slate-900 dark:shadow-[0_30px_80px_rgba(2,6,23,0.55)]",
  modalHeader:
    "border-b border-orange-100 bg-gradient-to-r from-white via-orange-50 to-slate-50 px-6 py-5 dark:border-slate-700 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-850 dark:to-slate-800",
  modalHeaderRow: "flex items-start justify-between gap-4",
  modalMeta: "mt-3 flex flex-wrap items-center gap-3",
  modalTitle: "text-2xl font-bold text-slate-900 dark:text-slate-100",
  modalScrollArea:
    "max-h-[70vh] overflow-y-auto px-6 py-6 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar]:w-3 dark:[scrollbar-color:#cbd5e1_#0f172a] dark:[&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-track]:bg-slate-800",
  modalOverview: "text-base leading-8 text-slate-700 dark:text-slate-300",
  modalSection: "mt-6",
  modalSectionTitle:
    "mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400",
  modalList: "space-y-3",
  modalListItem:
    "rounded-xl border border-orange-100 bg-orange-50/60 px-4 py-3 text-sm leading-7 text-slate-700 dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-slate-200",
  modalTakeaway:
    "rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",
  closeButton:
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-orange-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-300",
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
