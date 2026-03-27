export const contactStyles = {
  section: "scroll-mt-24 px-4 py-16 sm:px-6 md:px-10 md:py-20",
  header: "max-w-7xl mx-auto text-center mb-16",
  title: "mb-4 text-3xl font-bold sm:text-4xl",
  socialRow: "mb-5 flex items-center justify-center gap-4",
  socialButton:
    "inline-flex h-14 w-14 items-center justify-center rounded-full border text-white shadow-[0_14px_30px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
  socialTones: {
    dark: "border-slate-800 bg-gradient-to-br from-slate-900 to-slate-700 hover:border-slate-700 hover:from-slate-800 hover:to-slate-600 dark:border-slate-600 dark:from-slate-800 dark:to-slate-700",
    blue: "border-blue-500 bg-gradient-to-br from-blue-600 to-sky-500 hover:border-blue-400 hover:from-blue-500 hover:to-sky-400 dark:border-blue-400/70 dark:from-blue-500 dark:to-sky-500",
  },
  socialIcon: "h-6 w-6",
  subtitle: "text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg",
  grid: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12",
  methods: "space-y-8",
  methodRow: "flex items-start gap-6",
  methodIcon: "w-8 h-8 text-orange-400 dark:text-orange-300 flex-shrink-0",
  methodTitle: "text-xl font-semibold mb-2",
  methodDescription:
    "mb-2 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base",
  methodLink: "text-orange-400 hover:text-orange-500 font-medium transition",
  locationRow:
    "flex items-center gap-2 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base",
  locationIcon: "w-8 h-8 text-orange-400 dark:text-orange-300",
  formCard:
    "rounded-2xl border border-orange-200/90 bg-gradient-to-br from-white via-slate-50 to-orange-50/70 p-4 shadow-[0_16px_36px_rgba(15,23,42,0.08)] dark:border-orange-400/25 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 dark:shadow-[0_18px_40px_rgba(2,6,23,0.45)] sm:p-5",
  formTitle: "mb-3 text-lg font-bold text-slate-900 dark:text-slate-100",
  form: "space-y-3",
  fieldWrapper:
    "mb-1 block text-sm font-medium text-slate-800 dark:text-slate-200",
  input:
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 transition placeholder:text-slate-500 focus:outline-none focus:border-orange-400 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400",
  textarea:
    "w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-7 text-slate-800 transition placeholder:text-slate-500 focus:outline-none focus:border-orange-400 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400",
  inputError:
    "border-red-400 focus:border-red-500 dark:border-red-400 dark:focus:border-red-300",
  fieldErrorText: "mt-1 text-sm text-red-600 dark:text-red-300",
  submit:
    "w-full rounded-lg bg-orange-400 py-2 text-white font-semibold transition transform hover:scale-105 hover:bg-orange-500",
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
