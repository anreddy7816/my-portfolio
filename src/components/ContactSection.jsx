import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-md hover:opacity-90 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-90 transition"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Have a project in mind? Let's work together and create something
          amazing.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <EnvelopeIcon className="w-10 h-10 text-orange-400 dark:text-orange-300 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                Send us an email and we'll respond as soon as possible.
              </p>
              <a
                href="mailto:anreddy7816@gmail.com"
                className="text-orange-400 hover:text-orange-500 font-medium transition"
              >
                anreddy7816@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <PhoneIcon className="w-10 h-10 text-orange-400 dark:text-orange-300 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                Call us during business hours and speak with our team.
              </p>
              <a
                href="tel:+91 9866167816"
                className="text-orange-400 hover:text-orange-500 font-medium transition"
              >
                +91 98661 67816
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <MapPinIcon className="w-8 h-8 text-orange-400 dark:text-orange-300" />
            <span>Guntur, Andhra Pradesh, INDIA</span>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg shadow-lg">
          <h3 className="text-base font-bold mb-3">Send us a Message</h3>
          <form className="space-y-2">
            <div>
              <label className="block text-xs font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-orange-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-orange-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Message</label>
              <textarea
                rows="3"
                placeholder="Your message here..."
                className="w-full px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-orange-400 transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-1 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
