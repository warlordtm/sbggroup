"use client";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how" className="max-w-6xl mx-auto px-6 py-14">
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-bold"
      >
        How it works
      </motion.h3>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-3 text-gray-600 max-w-2xl"
      >
        Simple, results-focused process tailored to busy consultants.
      </motion.p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "1. Book a quick call",
            text: "We diagnose the highest-impact opportunities in 15 minutes.",
          },
          {
            title: "2. Action plan",
            text: "Get a short, tactical plan focused on revenue-driving changes.",
          },
          {
            title: "3. Implement & scale",
            text: "I’ll help set up systems or guide your team to execute faster.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-500 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
