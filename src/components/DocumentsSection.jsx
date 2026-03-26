import React from "react";

export default function DocumentsSection({ documents }) {
  return (
    <section id="documents" className="py-20 px-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Documents & Resources</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Download helpful documents, guides, and study materials
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((d, i) => (
            <a
              key={i}
              href={d.href}
              download
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-900/20 text-red-700 rounded-md text-lg font-semibold">
                  PDF
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 line-clamp-2">
                    {d.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    PDF
                  </p>
                </div>
                <div className="text-xl">⬇️</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
