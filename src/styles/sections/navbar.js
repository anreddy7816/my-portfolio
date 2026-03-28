export const navbarStyles = {
  nav: "fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-950 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 backdrop-blur-md border-b border-white/[0.06] shadow-md3 px-3 md:px-6 py-3 md:py-4 transition-all duration-md-medium ease-md-standard",
  wrapper: "max-w-7xl mx-auto flex justify-between items-center",
  brandGroup: "flex items-center gap-3 md:gap-4",
  brandImage:
    "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-md2 ring-2 ring-white/10 transition-all duration-md-medium ease-md-standard hover:scale-[1.5] hover:ring-orange-400/40 hover:shadow-md4 cursor-pointer",
  brandText:
    "text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(147,197,253,0.35)]",
  brandAccent: "text-orange-400",
  actions: "flex items-center gap-3 md:gap-6",
  desktopLinks:
    "hidden md:flex space-x-8 font-medium text-sm tracking-wide uppercase text-slate-300",
  link: "relative hover:text-orange-400 transition-colors duration-md-short ease-md-standard after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-md-medium hover:after:w-full",
  themeButton:
    "relative inline-flex items-center h-7 w-12 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 ring-1 ring-white/20 shadow-md1 transition-all duration-md-medium ease-md-standard focus:outline-none hover:ring-2 hover:ring-amber-400 hover:shadow-md2 dark:from-indigo-700 dark:to-purple-700 dark:ring-purple-400/30",
  mobileButton:
    "md:hidden flex items-center justify-center p-2.5 rounded-md-md bg-white/10 text-white shadow-md1 backdrop-blur-sm transition-all duration-md-short ease-md-standard hover:bg-orange-500 hover:shadow-md2 active:scale-95 focus:outline-none",
  mobileMenu:
    "md:hidden bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-950 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 px-5 py-5 rounded-b-md-lg shadow-md4 border-t border-white/5",
  mobileLinks:
    "flex flex-col space-y-3 font-medium text-sm tracking-wide uppercase text-slate-300",
  mobileAction:
    "text-left hover:text-orange-400 transition-colors duration-md-short",
};
