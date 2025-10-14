"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/jamie.jpeg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">Jamie White Consulting</h1>
              <p className="text-xs text-gray-500">Clarity · Strategy · Growth</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:underline">
              How it works
            </a>
            <a href="#results" className="hover:underline">
              Results
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a
              href="https://sbgschedule.com"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:brightness-95"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
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
                One-on-one strategy sessions that remove the guesswork and create predictable momentum. Book a short strategy call and discover the 2–3 tactical steps you can implement this week.
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

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto"
            >
              <div className="mb-4">
                <div className="text-xs text-gray-500">Quick snapshot</div>
                <div className="text-lg font-semibold">
                  Free 15-min Strategy Call
                </div>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    ✔
                  </span>
                  <div>
                    <div className="text-sm font-medium">Clear next steps</div>
                    <div className="text-xs text-gray-500">
                      Leave each call with 2–3 tactical actions.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    ✔
                  </span>
                  <div>
                    <div className="text-sm font-medium">Booking link</div>
                    <div className="text-xs text-gray-500">
                      Seamless booking with calendar integration.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    ✔
                  </span>
                  <div>
                    <div className="text-sm font-medium">Fast wins</div>
                    <div className="text-xs text-gray-500">
                      Focus on changes that impact revenue sooner.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="https://sbgschedule.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-blue-600 text-white rounded-md px-4 py-3 font-medium"
                >
                  Book a call
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="max-w-6xl mx-auto px-6 py-14">
          <h3 className="text-2xl font-bold">How it works</h3>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Simple, results-focused process tailored to busy consultants.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/book.jpg"
                alt="Book a call"
                width={400}
                height={250}
                className="rounded-lg mb-3"
              />
              <h4 className="font-semibold">Book a quick call</h4>
              <p className="text-sm text-gray-500 mt-2">
                We diagnose the highest-impact opportunities in 15 minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/actionplan.jpg"
                alt="Action plan"
                width={400}
                height={250}
                className="rounded-lg mb-3"
              />
              <h4 className="font-semibold">Action plan</h4>
              <p className="text-sm text-gray-500 mt-2">
                Get a short, tactical plan focused on revenue-driving changes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Image
                src="/implement.jpg"
                alt="Implement and scale"
                width={400}
                height={250}
                className="rounded-lg mb-3"
              />
              <h4 className="font-semibold">Implement & scale</h4>
              <p className="text-sm text-gray-500 mt-2">
                I’ll help set up systems or guide your team to execute faster.
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="bg-gradient-to-r from-white via-sky-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Results clients talk about</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow">
                <Image
                  src="/maleclient1.jpg"
                  alt="Client success 1"
                  width={400}
                  height={250}
                  className="rounded-lg mb-3"
                />
                <blockquote>
                  <div className="text-lg font-semibold">
                    "Doubled my revenue in 60 days"
                  </div>
                  <div className="text-sm text-gray-500 mt-2">— David Lintaker</div>
                </blockquote>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <Image
                  src="/femaleclient.jpg"
                  alt="Client success 2"
                  width={400}
                  height={250}
                  className="rounded-lg mb-3"
                />
                <blockquote>
                  <div className="text-lg font-semibold">
                    "Clear steps that actually worked"
                  </div>
                  <div className="text-sm text-gray-500 mt-2">— Sandra Jones</div>
                </blockquote>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <Image
                  src="/maleclient2.jpg"
                  alt="Client success 3"
                  width={400}
                  height={250}
                  className="rounded-lg mb-3"
                />
                <blockquote>
                  <div className="text-lg font-semibold">
                    "I finally had a sales process that converted."
                  </div>
                  <div className="text-sm text-gray-500 mt-2">— Jeferry James</div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <Image
              src="/booking.jpg"
              alt="Book a call visual"
              width={700}
              height={400}
              className="rounded-xl mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold">
              Ready to get clarity and take action?
            </h3>
            <p className="mt-3 text-gray-600">
              Book a short strategy call and leave with a simple, actionable plan.
            </p>
            <div className="mt-6">
              <a
                href="https://sbgschedule.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium"
              >
                Book Your Strategy Call
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white border-t py-6">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              © sbggroup
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
