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
  actionRow: "flex flex-nowrap items-center gap-2 self-start md:justify-end",
  primaryButton:
    "inline-flex shrink-0 items-center gap-2 rounded-full border border-white/40 bg-white px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_12px_28px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-orange-50 sm:px-3.5 sm:text-sm",
  primaryButtonIcon:
    "flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-[0_8px_18px_rgba(239,68,68,0.35)]",
  secondaryButton:
    "inline-flex shrink-0 items-center gap-2 rounded-full border border-white/30 bg-white/12 px-3 py-1.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20 sm:px-3.5 sm:text-sm",
  secondaryButtonIcon:
    "flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_8px_18px_rgba(59,130,246,0.35)]",
  closeButton:
    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/12 text-white shadow-[0_10px_24px_rgba(15,23,42,0.2)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-white/22 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-transparent",
  body: "grid gap-8 px-6 py-8 md:grid-cols-[1.25fr_0.85fr] md:px-10",
  sectionGroup: "space-y-8",
  sectionTitle: "text-xl font-bold text-slate-900 dark:text-slate-100",
  bodyText: "mt-3 text-slate-700 leading-8 dark:text-slate-300",
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
  updateBody: "mt-3 text-slate-700 leading-8 dark:text-slate-300",
};
