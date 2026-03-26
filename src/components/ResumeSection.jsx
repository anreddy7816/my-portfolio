import React from "react";

export default function ResumeSection() {
  return (
    <section id="resume" className="w-full flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <div className="flex gap-4">
        <a
          href="/documents/Resume.pdf"
          download
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download PDF
        </a>
        <a
          href="/documents/Resume.docx"
          download
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Download Word
        </a>
      </div>
    </section>
  );
}
