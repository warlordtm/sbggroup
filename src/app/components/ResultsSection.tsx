"use client";
import { motion } from "framer-motion";

export default function ResultsSection() {
  return (
    <section id="results" className="bg-gradient-to-r from-white via-sky-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-bold"
        >
          Results clients talk about
        </motion.h3>

        <motion.div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { quote: "Doubled my revenue in 60 days", author: "Client A" },
            { quote: "Clear steps that actually worked", author: "Client B" },
            {
              quote: "I finally had a sales process that converted.",
              author: "Client C",
            },
          ].map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <div className="text-lg font-semibold">"{t.quote}"</div>
              <div className="text-sm text-gray-500 mt-2">— {t.author}</div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
