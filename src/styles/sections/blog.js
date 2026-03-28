export const blogStyles = {
  section:
    "relative py-20 px-2 sm:px-4 md:px-10 scroll-mt-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden",
  wrapper: "mx-auto max-w-6xl",
  heading: "text-center mb-16",
  title:
    "mb-4 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-950 via-amber-600 to-yellow-500 bg-clip-text text-transparent dark:from-white dark:via-orange-200 dark:to-amber-400 sm:text-4xl",
  subtitle: "text-base leading-7 text-slate-700 dark:text-slate-100 sm:text-lg",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",

  // Card shell: outer wrapper for animated gradient border
  cardShell:
    "group relative overflow-hidden rounded-md-xl p-px shadow-md3 transition-shadow duration-md-medium ease-md-standard hover:shadow-md5 dark:shadow-[0_20px_50px_rgba(2,6,23,0.4)]",
  cardBorder:
    "absolute inset-0 rounded-md-xl opacity-80 transition-opacity duration-md-long group-hover:opacity-100",
  card: "relative z-10 h-full overflow-hidden rounded-[27px] bg-white/90 ring-1 ring-slate-200/40 backdrop-blur-sm transition-all duration-md-medium ease-md-standard dark:bg-slate-800/90 dark:ring-white/[0.06]",

  image: "relative h-32 flex items-center justify-center overflow-hidden",
  iconCircle:
    "relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-rose-500 to-sky-500 shadow-[0_8px_30px_rgba(249,115,22,0.3),0_8px_30px_rgba(56,189,248,0.2)] ring-2 ring-white/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(249,115,22,0.4),0_12px_40px_rgba(56,189,248,0.3)] dark:from-orange-500 dark:via-rose-600 dark:to-cyan-500 dark:ring-white/20",
  iconGlow:
    "absolute h-24 w-24 rounded-full bg-gradient-to-br from-orange-300/40 via-rose-400/30 to-sky-400/40 blur-xl dark:from-orange-500/25 dark:via-rose-500/20 dark:to-cyan-500/25",
  icon: "relative z-10 text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:-rotate-6",
  body: "p-6",
  meta: "flex items-center gap-2 mb-3",
  tag: "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
  date: "text-sm font-medium text-slate-500 dark:text-slate-300",
  cardTitle:
    "mb-3 text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-300",
  description:
    "mb-5 text-sm leading-7 text-slate-700 dark:text-white/85 sm:text-base",
  linkButton:
    "inline-flex items-center gap-2 rounded-md-xl border border-slate-200/50 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-md2 transition-all duration-md-short ease-md-standard hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md3 active:scale-[0.97] dark:border-white/10 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100",

  // Modal styles (unchanged)
  link: "font-medium text-orange-400 transition hover:text-orange-500",
  modalOverlay:
    "fixed inset-0 z-[210] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm",
  modalPanel:
    "relative w-full max-w-3xl overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.28)] dark:border-orange-400/30 dark:bg-slate-900 dark:shadow-[0_30px_80px_rgba(2,6,23,0.55)]",
  modalHeader:
    "border-b border-orange-100 bg-gradient-to-r from-white via-orange-50 to-slate-50 px-6 py-5 dark:border-slate-700 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-850 dark:to-slate-800",
  modalHeaderRow: "flex items-start justify-between gap-4",
  modalMeta: "mt-3 flex flex-wrap items-center gap-3",
  modalTitle: "text-2xl font-bold text-slate-900 dark:text-white",
  modalScrollArea:
    "max-h-[70vh] overflow-y-auto px-6 py-6 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar]:w-3 dark:[scrollbar-color:#cbd5e1_#0f172a] dark:[&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-track]:bg-slate-800",
  modalOverview: "text-base leading-8 text-slate-700 dark:text-slate-200",
  modalSection: "mt-6",
  modalSectionTitle:
    "mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300",
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
    gradient: "from-orange-400 via-amber-400 to-orange-500",
    border:
      "linear-gradient(135deg, rgba(251,146,60,0.6), rgba(245,158,11,0.35), rgba(251,146,60,0.6))",
    glow: "bg-orange-400/40 dark:bg-orange-500/30",
    tag: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-200",
  },
  blue: {
    gradient: "from-blue-400 via-sky-400 to-indigo-500",
    border:
      "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(99,102,241,0.35), rgba(59,130,246,0.6))",
    glow: "bg-blue-400/40 dark:bg-blue-500/30",
    tag: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200",
  },
  green: {
    gradient: "from-emerald-400 via-teal-400 to-green-500",
    border:
      "linear-gradient(135deg, rgba(52,211,153,0.6), rgba(20,184,166,0.35), rgba(52,211,153,0.6))",
    glow: "bg-emerald-400/40 dark:bg-emerald-500/30",
    tag: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200",
  },
  purple: {
    gradient: "from-violet-400 via-purple-400 to-fuchsia-500",
    border:
      "linear-gradient(135deg, rgba(139,92,246,0.6), rgba(192,38,211,0.35), rgba(139,92,246,0.6))",
    glow: "bg-violet-400/40 dark:bg-violet-500/30",
    tag: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-200",
  },
  red: {
    gradient: "from-rose-400 via-pink-400 to-red-500",
    border:
      "linear-gradient(135deg, rgba(251,113,133,0.6), rgba(225,29,72,0.35), rgba(251,113,133,0.6))",
    glow: "bg-rose-400/40 dark:bg-rose-500/30",
    tag: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200",
  },
};
