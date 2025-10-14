"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {

  // Smooth scroll function for internal links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
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
            <a href="#how" onClick={(e) => handleScroll(e, "#how")} className="hover:underline">
              How it works
            </a>
            <a href="#results" onClick={(e) => handleScroll(e, "#results")} className="hover:underline">
              Results
            </a>
            <a href="#contact-form" onClick={(e) => handleScroll(e, "#contact-form")} className="hover:underline">
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
        <section
          id="results"
          className="bg-gradient-to-r from-white via-sky-50 to-white py-16"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-center">Results clients talk about</h3>
            <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
              Real stories from consultants and founders who gained clarity, structure, and measurable growth.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/maleclient1.jpg"
                  alt="Client success 1"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <blockquote className="text-gray-700 leading-relaxed">
                  &quot;Before working with Jamie, I was stuck guessing my next move — 
                  no clear system, just effort. Within a few weeks, we streamlined my client onboarding, 
                  refined my offer, and built a repeatable process. I now close clients faster 
                  and doubled my monthly revenue in 60 days. It finally feels like my business is working for me, not the other way around.&quot;
                </blockquote>
                <div className="mt-4 font-semibold text-gray-900">— David Lintaker</div>
                <div className="text-sm text-gray-500">Founder, DL Growth Consulting</div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/femaleclient.jpg"
                  alt="Client success 2"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <blockquote className="text-gray-700 leading-relaxed">
                  &quot;Jamie helped me turn scattered ideas into a focused action plan. 
                  We mapped out my sales process, refined my offer, and built a content strategy that actually brings inbound leads. 
                  The clarity I gained from just two sessions was unreal — no fluff, just practical next steps that worked.&quot;
                </blockquote>
                <div className="mt-4 font-semibold text-gray-900">— Sandra Jones</div>
                <div className="text-sm text-gray-500">Independent Marketing Consultant</div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/maleclient2.jpg"
                  alt="Client success 3"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <blockquote className="text-gray-700 leading-relaxed">
                  &quot;I had been running my consulting business for two years but had no reliable way to convert calls into clients. 
                  Jamie’s structured framework gave me the missing system. Within a month, I was confidently closing calls and finally tracking consistent results. 
                  My business now feels predictable and scalable.&quot;
                </blockquote>
                <div className="mt-4 font-semibold text-gray-900">— Jeffrey James</div>
                <div className="text-sm text-gray-500">Sales Strategy Coach</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <motion.section
          id="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white py-20"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Have a question before booking a call? Fill out the form and our team will get back to you within 24 hours.
            </p>
            <form className="bg-gray-50 p-8 rounded-xl shadow-md grid gap-6 md:grid-cols-2">
              <input placeholder="First Name" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Last Name" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Email" type="email" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Phone Number" type="tel" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="How may we help you?" rows={5} className="md:col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"></textarea>
              <div className="md:col-span-2 flex justify-center">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.section>


        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 mt-20">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-5">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h4 className="text-white text-lg font-semibold mb-3">
                Jamie White Consulting
              </h4>
              <p className="text-sm leading-relaxed mb-4 text-gray-400">
                Helping consultants and founders gain clarity, structure, and consistent
                growth. One actionable plan at a time.
              </p>
              <div className="mt-3 text-sm text-gray-500">
                © {new Date().getFullYear()} Jamie White Consulting. All rights reserved.
              </div>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-white font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how" className="hover:text-white transition">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#results" className="hover:text-white transition">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://sbgschedule.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-white font-semibold mb-3">Services</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Marketing Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Operations Scaling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Growth Audits
                  </a>
                </li>
              </ul>
            </div>

            {/* Insights + Newsletter */}
            <div>
              <h5 className="text-white font-semibold mb-3">Insights</h5>
              <p className="text-sm text-gray-400 mb-4">
                Join 20,000+ other professionals and get weekly insights to help you
                grow your business with clarity and confidence.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-l-md text-gray-900 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-r-md transition"
                >
                  Subscribe
                </button>
              </form>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-5">
                <a href="#" className="hover:text-white transition" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.761 2.239 5 5 
                            5h14c2.762 0 5-2.239 5-5v-14c0-2.762-2.238-5-5-5zm-11 
                            19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.792-1.75-1.766
                            s.784-1.766 1.75-1.766 1.75.792 1.75 1.766-.784 1.766
                            -1.75 1.766zm13.5 11.268h-3v-5.604c0-1.337-.027-3.06
                            -1.865-3.06-1.867 0-2.154 1.46-2.154 2.97v5.694h-3v-10h2.879v1.367h.041c.4-.757
                            1.379-1.555 2.837-1.555 3.034 0 3.597 2.002 3.597 4.605v5.583z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M24 4.557a9.9 9.9 0 0 1-2.828.775 
                            4.932 4.932 0 0 0 2.165-2.724 
                            9.864 9.864 0 0 1-3.127 1.195 
                            4.918 4.918 0 0 0-8.38 4.482 
                            13.95 13.95 0 0 1-10.125-5.138 
                            4.822 4.822 0 0 0 1.523 6.574 
                            4.903 4.903 0 0 1-2.229-.616v.062 
                            a4.923 4.923 0 0 0 3.946 4.827 
                            4.996 4.996 0 0 1-2.224.085 
                            4.936 4.936 0 0 0 4.604 3.417 
                            9.869 9.869 0 0 1-6.102 2.104 
                            c-.396 0-.788-.023-1.175-.069 
                            a13.945 13.945 0 0 0 7.548 2.212 
                            c9.057 0 14.009-7.513 14.009-14.009 
                            0-.213-.004-.425-.014-.636A10.025 
                            10.025 0 0 0 24 4.557z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
