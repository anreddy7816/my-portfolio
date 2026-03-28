export const contactStyles = {
  section:
    "relative scroll-mt-24 px-4 py-16 sm:px-6 md:px-10 md:py-20 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 dark:from-slate-950/80 dark:via-slate-900 dark:to-slate-950/80",
  /* Decorative ambient glow blobs */
  glowA:
    "pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-orange-300/20 blur-[100px] dark:bg-orange-500/10",
  glowB:
    "pointer-events-none absolute -bottom-40 -right-40 h-[380px] w-[380px] rounded-full bg-sky-300/20 blur-[100px] dark:bg-sky-500/10",
  innerWrap: "relative z-10",
  header: "max-w-7xl mx-auto text-center mb-16",
  title:
    "mb-4 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-950 via-amber-600 to-yellow-500 bg-clip-text text-transparent dark:from-white dark:via-orange-200 dark:to-amber-400 sm:text-4xl",
  socialRow: "mb-5 flex items-center justify-center gap-4",
  socialButton:
    "group relative inline-flex h-14 w-14 items-center justify-center rounded-full border text-white shadow-md3 transition-all duration-md-medium ease-md-standard hover:-translate-y-1.5 hover:scale-[1.05] hover:shadow-md5 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
  socialGlow:
    "pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60",
  socialGlowTones: {
    dark: "bg-slate-500/40",
    blue: "bg-sky-400/40",
  },
  socialTones: {
    dark: "border-slate-800 bg-gradient-to-br from-slate-900 to-slate-700 hover:border-slate-700 hover:from-slate-800 hover:to-slate-600 dark:border-slate-600 dark:from-slate-800 dark:to-slate-700",
    blue: "border-blue-500 bg-gradient-to-br from-blue-600 to-sky-500 hover:border-blue-400 hover:from-blue-500 hover:to-sky-400 dark:border-blue-400/70 dark:from-blue-500 dark:to-sky-500",
  },
  socialIcon: "relative z-10 h-6 w-6",
  subtitle: "text-base leading-7 text-slate-700 dark:text-slate-100 sm:text-lg",
  grid: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start",
  methods: "space-y-5",
  methodCard:
    "group flex items-start gap-5 rounded-md-xl border border-slate-200/50 bg-white/70 p-5 shadow-md2 ring-1 ring-slate-900/5 backdrop-blur-sm transition-all duration-md-medium ease-md-standard hover:shadow-md4 hover:-translate-y-0.5 dark:border-white/[0.06] dark:bg-slate-800/60 dark:ring-white/5",
  methodIconCircle:
    "flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-rose-500 to-sky-500 shadow-md2 ring-2 ring-white/80 transition-transform duration-300 ease-md-standard group-hover:scale-110 dark:ring-slate-900/60",
  methodIconInner: "h-6 w-6 text-white",
  methodTitle: "text-lg font-semibold mb-1 text-slate-900 dark:text-white",
  methodDescription:
    "mb-2 text-sm leading-6 text-slate-600 dark:text-white/75 sm:text-base",
  methodLink:
    "inline-flex items-center gap-1 text-sm font-medium text-orange-500 transition-colors duration-200 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300",

  formCardShell:
    "rounded-md-xl bg-gradient-to-br from-orange-400 via-rose-500 to-sky-500 p-[1.5px] shadow-md3 transition-shadow duration-md-medium ease-md-standard hover:shadow-md4",
  formCard:
    "rounded-[calc(var(--radius-md-xl,16px)-1.5px)] bg-white/95 backdrop-blur-sm dark:bg-slate-800/95",
  formBody: "p-5 sm:p-6",
  formTitle: "mb-3 text-lg font-bold text-slate-900 dark:text-white",
  form: "space-y-3",
  fieldWrapper:
    "mb-1 block text-sm font-medium text-slate-800 dark:text-slate-200",
  input:
    "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:bg-white dark:border-slate-600 dark:bg-slate-700/60 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-orange-400 dark:focus:ring-orange-400/15 dark:focus:bg-slate-700",
  textarea:
    "w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm leading-7 text-slate-800 transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:bg-white dark:border-slate-600 dark:bg-slate-700/60 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-orange-400 dark:focus:ring-orange-400/15 dark:focus:bg-slate-700",
  inputError:
    "border-red-400 focus:border-red-500 dark:border-red-400 dark:focus:border-red-300",
  fieldErrorText: "mt-1 text-sm text-red-600 dark:text-red-300",
  submit:
    "w-full rounded-md-lg bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 py-3 text-white font-semibold tracking-wide shadow-md3 transition-all duration-md-short ease-md-standard hover:-translate-y-0.5 hover:shadow-md4 hover:brightness-110 active:scale-[0.98] dark:from-orange-400 dark:via-rose-400 dark:to-sky-400 dark:text-slate-950",
  submitDisabled:
    "cursor-not-allowed opacity-70 hover:scale-100 hover:bg-orange-400",
  statusBase: "rounded-lg px-3 py-2 text-sm font-medium",
  statusSuccess:
    "border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300",
  statusError:
    "border border-red-200 bg-red-50 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300",
  statusLoading:
    "border border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300",
  toastViewport:
    "pointer-events-none fixed inset-x-4 bottom-4 z-[220] flex justify-center sm:inset-x-auto sm:right-6 sm:justify-end",
  toastCard:
    "pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-4 shadow-2xl shadow-emerald-500/10 ring-1 ring-black/5 dark:border-emerald-500/30 dark:bg-slate-900",
  toastIcon:
    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  toastMessage: "flex-1 text-sm leading-6 text-slate-700 dark:text-slate-200",
  toastClose:
    "rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
};
