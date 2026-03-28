export const servicesStyles = {
  section: "scroll-mt-24 px-4 py-16 sm:px-6 md:px-10 md:py-20",
  wrapper: "mx-auto max-w-6xl",
  heading: "mx-auto mb-12 max-w-3xl text-center",
  title:
    "mb-4 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-950 via-amber-600 to-yellow-500 bg-clip-text text-transparent dark:from-white dark:via-orange-200 dark:to-amber-400 sm:text-4xl",
  subtitle: "text-base leading-7 text-slate-700 dark:text-slate-100 sm:text-lg",
  grid: "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
  cardShell:
    "group relative overflow-hidden rounded-md-xl p-px shadow-md3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-md5 dark:shadow-[0_22px_60px_rgba(2,6,23,0.4)]",
  cardBorder: "absolute inset-0 rounded-md-xl opacity-90",
  card: "relative z-10 h-full rounded-[27px] border border-slate-200/50 bg-white/95 p-6 ring-1 ring-slate-900/5 backdrop-blur-sm transition-all duration-md-medium ease-md-standard hover:border-orange-300/50 dark:border-white/[0.06] dark:bg-slate-800/95 dark:ring-white/10 dark:hover:border-orange-400/25",
  cardGlow:
    "absolute -right-6 top-0 h-28 w-28 rounded-full blur-3xl opacity-55 dark:opacity-70",
  cardInner: "relative z-10 flex h-full flex-col",
  iconRow: "mb-4 flex items-center gap-4",
  iconFrame: "relative flex h-14 w-14 shrink-0 items-center justify-center",
  iconGlow:
    "absolute inset-0 rounded-full blur-xl opacity-50 transition-all duration-500 group-hover:scale-125 group-hover:opacity-80",
  iconCircle:
    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md3 ring-2 ring-white/80 transition-all duration-300 ease-md-standard group-hover:shadow-md5 dark:ring-slate-900/60",
  icon: "h-5 w-5 text-white transition-transform duration-300 ease-md-standard group-hover:scale-110",
  cardTitle:
    "text-lg font-semibold tracking-tight text-slate-900 dark:text-white",
  description:
    "mb-5 text-sm leading-relaxed text-slate-600 dark:text-white/85 sm:text-base",
  features:
    "mt-auto space-y-2.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-200 list-disc",
  featureItem:
    "pl-1 transition-colors duration-md-short ease-md-standard marker:text-orange-400/60 dark:marker:text-orange-400/40 hover:text-slate-900 dark:hover:text-white",
};

export const serviceToneStyles = {
  orange: {
    glow: "bg-orange-300/30 dark:bg-orange-500/20",
    border:
      "linear-gradient(135deg, rgba(251,146,60,0.5), rgba(245,158,11,0.3))",
    iconGlow: "bg-orange-400/50 dark:bg-orange-500/30",
    iconCircle: "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400",
  },
  blue: {
    glow: "bg-blue-300/30 dark:bg-blue-500/20",
    border:
      "linear-gradient(135deg, rgba(59,130,246,0.5), rgba(14,165,233,0.3))",
    iconGlow: "bg-blue-400/50 dark:bg-blue-500/30",
    iconCircle: "bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400",
  },
  green: {
    glow: "bg-emerald-300/30 dark:bg-emerald-500/20",
    border:
      "linear-gradient(135deg, rgba(16,185,129,0.5), rgba(20,184,166,0.3))",
    iconGlow: "bg-emerald-400/50 dark:bg-emerald-500/30",
    iconCircle: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500",
  },
  red: {
    glow: "bg-rose-300/30 dark:bg-rose-500/20",
    border: "linear-gradient(135deg, rgba(244,63,94,0.5), rgba(239,68,68,0.3))",
    iconGlow: "bg-rose-400/50 dark:bg-rose-500/30",
    iconCircle: "bg-gradient-to-br from-rose-500 via-red-500 to-orange-400",
  },
  pink: {
    glow: "bg-pink-300/30 dark:bg-pink-500/20",
    border:
      "linear-gradient(135deg, rgba(236,72,153,0.5), rgba(168,85,247,0.3))",
    iconGlow: "bg-pink-400/50 dark:bg-pink-500/30",
    iconCircle: "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500",
  },
  indigo: {
    glow: "bg-indigo-300/30 dark:bg-indigo-500/20",
    border:
      "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(139,92,246,0.3))",
    iconGlow: "bg-indigo-400/50 dark:bg-indigo-500/30",
    iconCircle:
      "bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-400",
  },
};
