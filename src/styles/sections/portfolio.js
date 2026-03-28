export const portfolioStyles = {
  section: "scroll-mt-24 px-2 pt-4 pb-12 sm:px-4 md:px-10 md:pt-6 md:pb-20",
  wrapper: "mx-auto w-full max-w-6xl",
  heading:
    "mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ease-out",
  title:
    "mb-4 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-950 via-amber-600 to-yellow-500 bg-clip-text text-transparent dark:from-white dark:via-orange-200 dark:to-amber-400 sm:text-4xl",
  subtitle: "text-base leading-7 text-slate-700 dark:text-slate-100 sm:text-lg",
  grid: "grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3",
  card: "group relative overflow-hidden rounded-md-xl border border-slate-200/50 bg-white/90 shadow-md3 ring-1 ring-slate-900/5 backdrop-blur-sm transition-all duration-md-medium ease-md-standard hover:shadow-md5 hover:-translate-y-1 dark:border-white/[0.06] dark:bg-slate-800/90 dark:shadow-[0_20px_50px_rgba(2,6,23,0.35)] dark:ring-white/10 dark:hover:shadow-[0_28px_60px_rgba(2,6,23,0.5)]",
  cardVisual:
    "relative overflow-hidden border-b border-slate-200/80 px-6 pb-4 pt-3 dark:border-slate-700/90",
  cardVisualGlow: "absolute -right-8 top-1 h-24 w-24 rounded-full blur-3xl",
  cardIconRow: "relative z-10 flex items-center",
  cardIconWrap:
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-[0_14px_24px_rgba(15,23,42,0.12)]",
  cardIcon: "h-6 w-6",
  cardBody: "relative px-6 pb-5 pt-5",
  cardHeader: "mb-3",
  cardTitleWrap: "space-y-2",
  cardTitle:
    "text-xl font-semibold tracking-tight text-slate-950 dark:text-white",
  cardKicker:
    "text-xs font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-300",
  cardDescription:
    "mb-4 text-sm leading-7 text-slate-700 dark:text-white/85 sm:text-base",
  tags: "mb-4 flex flex-wrap gap-2.5",
  tag: "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]",
  cardFooter:
    "flex items-center justify-end border-t border-slate-200/80 pt-3 text-sm dark:border-slate-700/90",
  viewButton:
    "inline-flex items-center gap-2 rounded-md-xl border border-slate-300/50 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-md2 transition-all duration-md-short ease-md-standard hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md3 active:scale-[0.97] dark:border-white/10 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100",
  modalOverlay:
    "fixed bottom-0 left-0 right-0 z-[90] flex items-start justify-center px-4 pt-16",
  modalContainer:
    "relative w-full max-w-3xl overflow-y-auto rounded-[32px] border border-slate-200/80 bg-white/95 shadow-[0_32px_100px_rgba(15,23,42,0.24)] backdrop-blur dark:border-white/10 dark:bg-slate-950/95",
  modalHeader: "flex items-center justify-between px-7 pb-2 pt-7",
  modalTitle:
    "text-2xl font-semibold tracking-tight text-slate-950 dark:text-white",
  closeButton:
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-base font-bold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10",
  modalBody: "px-7 pb-7 pt-3",
  modalOverview:
    "mb-8 max-w-2xl text-sm leading-7 text-slate-700 dark:text-slate-200 sm:text-base",
  modalSection: "mb-6",
  modalSectionTitle:
    "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300",
  modalFeatureList: "grid grid-cols-1 gap-3 sm:grid-cols-2",
  modalFeatureItem:
    "flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 px-4 py-3 text-sm leading-6 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
  modalTechStack: "flex flex-wrap gap-2",
  modalTechItem:
    "cursor-default rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",
  modalActions: "flex flex-wrap gap-3 pt-2",
  primaryAction:
    "inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100",
  secondaryAction:
    "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
  keyframes: `
    @keyframes modalSlideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes portfolioIconFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
    }
  `,
};

export const portfolioToneStyles = {
  orange: {
    tag: "border-orange-200/80 bg-orange-50 text-orange-700 dark:border-orange-400/50 dark:bg-orange-500/15 dark:text-orange-200",
    badge:
      "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/50 dark:bg-orange-500/15 dark:text-orange-200",
    surface:
      "bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.22),_transparent_52%),linear-gradient(180deg,rgba(255,247,237,0.96),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.35),_transparent_50%),linear-gradient(180deg,rgba(51,31,14,0.95),rgba(30,41,59,0.95))]",
    glow: "bg-orange-300/40 dark:bg-orange-500/28",
    iconWrap:
      "border-orange-200/80 bg-white text-orange-600 dark:border-orange-400/35 dark:bg-orange-500/18 dark:text-orange-200",
    hoverBorder: {
      border: "1px solid rgba(251,146,60,0.55)",
      boxShadow:
        "0 18px 50px rgba(249,115,22,0.16), 0 0 0 1px rgba(251,146,60,0.08)",
    },
  },
  green: {
    tag: "border-emerald-200/80 bg-emerald-50 text-emerald-700 dark:border-emerald-400/50 dark:bg-emerald-500/15 dark:text-emerald-200",
    badge:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/50 dark:bg-emerald-500/15 dark:text-emerald-200",
    surface:
      "bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.20),_transparent_52%),linear-gradient(180deg,rgba(236,253,245,0.96),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.35),_transparent_50%),linear-gradient(180deg,rgba(14,39,36,0.95),rgba(30,41,59,0.95))]",
    glow: "bg-emerald-300/40 dark:bg-emerald-500/28",
    iconWrap:
      "border-emerald-200/80 bg-white text-emerald-600 dark:border-emerald-400/35 dark:bg-emerald-500/18 dark:text-emerald-200",
    hoverBorder: {
      border: "1px solid rgba(20,184,166,0.55)",
      boxShadow:
        "0 18px 50px rgba(20,184,166,0.16), 0 0 0 1px rgba(45,212,191,0.08)",
    },
  },
  purple: {
    tag: "border-fuchsia-200/80 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-400/50 dark:bg-fuchsia-500/15 dark:text-fuchsia-200",
    badge:
      "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-400/50 dark:bg-fuchsia-500/15 dark:text-fuchsia-200",
    surface:
      "bg-[radial-gradient(circle_at_top_right,_rgba(217,70,239,0.18),_transparent_52%),linear-gradient(180deg,rgba(253,244,255,0.96),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.35),_transparent_50%),linear-gradient(180deg,rgba(37,22,56,0.95),rgba(30,41,59,0.95))]",
    glow: "bg-fuchsia-300/40 dark:bg-fuchsia-500/28",
    iconWrap:
      "border-fuchsia-200/80 bg-white text-fuchsia-600 dark:border-fuchsia-400/35 dark:bg-fuchsia-500/18 dark:text-fuchsia-200",
    hoverBorder: {
      border: "1px solid rgba(168,85,247,0.55)",
      boxShadow:
        "0 18px 50px rgba(139,92,246,0.18), 0 0 0 1px rgba(192,132,252,0.08)",
    },
  },
};
