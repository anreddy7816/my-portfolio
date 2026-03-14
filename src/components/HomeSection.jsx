import React from "react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="py-32 px-10 flex items-center justify-center min-h-screen"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 text-8xl">👋</div>
        <h1 className="text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-2xl text-slate-600 dark:text-slate-400 mb-8">
          I'm{" "}
          <span className="text-orange-400 font-semibold">Nagireddy Avula</span>
          , a full-stack developer passionate about creating beautiful web
          experiences
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}
