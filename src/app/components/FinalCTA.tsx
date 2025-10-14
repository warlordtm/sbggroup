"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <motion.h2
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Ready to grow your consulting business?
      </motion.h2>
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <Link
          href="https://sbgschedule.com"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Book a Free Call
        </Link>
      </motion.div>
    </section>
  );
}
