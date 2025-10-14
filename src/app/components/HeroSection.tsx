"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold leading-tight"
          >
            Get clarity. Take action. Grow your consulting business.
          </motion.h2>

          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="mt-4 text-gray-600 max-w-xl"
          >
            One-on-one strategy sessions that remove the guesswork and create
            predictable momentum. Book a short strategy call and discover the
            2–3 tactical steps you can implement this week.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="https://sbgschedule.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-medium shadow"
            >
              Book Your Strategy Call
            </a>
            <a
              href="#how"
              className="inline-block border border-gray-200 px-4 py-3 rounded-md text-gray-700"
            >
              How it works
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-1/3">
        <svg viewBox="0 0 600 800" className="w-full h-full opacity-5">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="600"
            height="800"
            fill="url(#grad1)"
            rx="80"
          />
        </svg>
      </div>
    </section>
  );
}
