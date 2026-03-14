import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 border-t border-orange-400 py-4 px-4 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-300 text-sm">
          &copy; 2026 Nagi. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs mt-2">
          Crafted with <span className="text-orange-400">❤</span> by Nagi
        </p>
      </div>
    </footer>
  );
}
