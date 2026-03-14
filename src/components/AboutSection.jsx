import React from "react";
import NagiAboutMe from "../assets/Nagi_AboutMe.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-200 leading-relaxed max-w-4xl">
              I am a seasoned Engineer dedicated to building robust digital
              products. My journey began with deep-diving into{" "}
              <span className="text-slate-800 dark:text-orange-300 font-semibold italic">
                Java internals
              </span>
              , and it has led me to mastering the entire software delivery
              lifecycle.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={NagiAboutMe}
              alt="About Me"
              className="h-64 w-64 object-cover rounded-full shadow-lg border-4 border-orange-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
