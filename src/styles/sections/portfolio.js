export const portfolioStyles = {
  section:
    "scroll-mt-24 px-2 pt-4 pb-12 sm:px-4 md:px-10 md:pt-6 md:pb-20 scroll-snap-align-start",
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
    "fixed top-[58px] md:top-[66px] right-0 bottom-0 left-0 z-[90] flex items-start justify-center overflow-y-auto px-4 pt-8 pb-6 sm:pt-12",
  modalContainer:
    "relative w-full max-w-3xl overflow-y-auto rounded-[28px] border border-slate-200/60 bg-gradient-to-b from-white via-white to-slate-50/80 shadow-[0_40px_120px_rgba(15,23,42,0.30),0_8px_32px_rgba(15,23,42,0.12)] ring-1 ring-black/[0.04] backdrop-blur-xl dark:border-white/[0.08] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900/98 dark:to-slate-950 dark:shadow-[0_40px_120px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)] dark:ring-white/[0.04]",
  modalHeader:
    "relative flex items-center justify-between border-b border-slate-100 px-8 pb-5 pt-8 dark:border-white/[0.06]",
  modalTitle:
    "text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white",
  closeButton:
    "flex h-9 w-9 items-center justify-center rounded-full border-0 bg-red-500/90 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/30 active:scale-90 dark:bg-red-500/80 dark:shadow-red-500/20 dark:hover:bg-red-500",
  modalBody: "px-8 pb-8 pt-6",
  modalOverview:
    "mb-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8",
  modalSection: "mb-8",
  modalSectionTitle:
    "mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400",
  modalFeatureList: "grid grid-cols-1 gap-3 sm:grid-cols-2",
  modalFeatureItem:
    "flex items-start gap-3 rounded-xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white px-4 py-3.5 text-sm leading-6 text-slate-700 shadow-sm transition-colors duration-200 hover:border-slate-300/80 hover:shadow-md dark:border-white/[0.08] dark:bg-gradient-to-br dark:from-white/[0.04] dark:to-white/[0.01] dark:text-slate-200 dark:hover:border-white/[0.14]",
  modalTechStack: "flex flex-wrap gap-2.5",
  modalTechItem:
    "cursor-default rounded-lg border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[0.08] dark:bg-gradient-to-b dark:from-white/[0.06] dark:to-white/[0.02] dark:text-slate-200 dark:hover:border-white/[0.14]",
  modalActions:
    "flex flex-wrap gap-3 border-t border-slate-100 pt-6 dark:border-white/[0.06]",
  primaryAction:
    "inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-slate-800 to-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 ring-1 ring-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:from-slate-700 hover:to-slate-900 hover:shadow-xl active:scale-[0.97] dark:from-white dark:to-slate-100 dark:text-slate-950 dark:shadow-white/10 dark:ring-white/20 dark:hover:from-slate-50 dark:hover:to-white",
  secondaryAction:
    "inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md active:scale-[0.97] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:ring-white/5 dark:hover:border-white/20 dark:hover:bg-white/10",
  keyframes: `
    @keyframes modalSlideUp {
      from { opacity: 0; transform: translateY(32px) scale(0.96); filter: blur(4px); }
      to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
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
