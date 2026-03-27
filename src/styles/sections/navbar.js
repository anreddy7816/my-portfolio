export const navbarStyles = {
  nav: "fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 backdrop-blur-sm border-b border-slate-800 dark:border-purple-700 px-2 md:px-6 py-3 md:py-4",
  wrapper: "max-w-7xl mx-auto flex justify-between items-center",
  brandGroup: "flex items-center gap-4",
  brandImage:
    "w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer",
  brandText:
    "text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(147,197,253,0.35)]",
  brandAccent: "text-orange-400",
  actions: "flex items-center gap-4 md:gap-8",
  desktopLinks:
    "hidden md:flex space-x-10 font-medium text-slate-300 hover:text-white transition",
  link: "hover:text-orange-400 transition",
  themeButton:
    "relative inline-flex items-center h-8 w-14 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none hover:ring-2 hover:ring-orange-400",
  mobileButton:
    "md:hidden flex items-center justify-center p-2 rounded-lg bg-slate-800 text-white hover:bg-orange-400 focus:outline-none",
  mobileMenu:
    "md:hidden bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 px-4 py-4 rounded-b-lg shadow-lg",
  mobileLinks: "flex flex-col space-y-4 font-medium text-slate-300",
  mobileAction: "text-left hover:text-orange-400 transition",
};
