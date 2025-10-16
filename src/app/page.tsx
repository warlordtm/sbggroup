"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // for icons
import Link from "next/link";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu after clicking a link
  };

  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Founder, Clarity Financial",
      quote:
        "Before the Breakthrough Session, I was stuck at $4M in annual revenue for three years. Within six months, we hit $9M. The clarity and structure Jamie brought completely shifted how we operate.",
    },
    {
      name: "David Miller",
      role: "Managing Director, Apex Legal Partners",
      quote:
        "Our team was running on chaos and heroics. Jamie’s process turned everything into a system. We now attract better clients and doubled our profits without adding more hours.",
    },
    {
      name: "Lisa Chen",
      role: "CEO, GrowthEdge Marketing",
      quote:
        "I was skeptical that one session could change anything, but I was wrong. The Breakthrough framework gave us direction that continues to pay off months later.",
    },
    {
      name: "James Carter",
      role: "Owner, Carter Engineering Group",
      quote:
        "We went from surviving project to project to a streamlined growth engine. I wish I’d found this process years ago — it would’ve saved us a fortune in lost opportunities.",
    },
    {
      name: "Monica Alvarez",
      role: "Co-Founder, BrightPath Consulting",
      quote:
        "The insights from our half-day session became the foundation for our entire year’s strategy. It’s rare to find advice that translates directly into profit. This did.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Brand */}
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
              <p className="text-xs text-gray-500">
                Clarity · Strategy · Growth
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#how"
              onClick={(e) => handleScroll(e, "#how")}
              className="hover:underline"
            >
              How it works
            </a>
            <a
              href="#results"
              onClick={(e) => handleScroll(e, "#results")}
              className="hover:underline"
            >
              Results
            </a>
            <a
              href="#contact-form"
              onClick={(e) => handleScroll(e, "#contact-form")}
              className="hover:underline"
            >
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-sm"
          >
            <div className="flex flex-col items-center gap-4 py-4 text-sm">
              <a
                href="#how"
                onClick={(e) => handleScroll(e, "#how")}
                className="hover:underline"
              >
                How it works
              </a>
              <a
                href="#results"
                onClick={(e) => handleScroll(e, "#results")}
                className="hover:underline"
              >
                Results
              </a>
              <a
                href="#contact-form"
                onClick={(e) => handleScroll(e, "#contact-form")}
                className="hover:underline"
              >
                Contact
              </a>
              <a
                href="https://sbgschedule.com"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:brightness-95"
              >
                Book a Call
              </a>
            </div>
          </motion.nav>
        )}
      </header>


      {/* HERO */}
      <main>
        <section className="relative overflow-hidden mt-20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
            {/* Left Text Section */}
            <div>
              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900"
              >
                Find the ONE Strategy That Can Transform Your Professional Service Business
              </motion.h2>

              <motion.p
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.45 }}
                className="mt-4 text-gray-700 max-w-xl leading-relaxed"
              >
                In this private strategy call, we’ll uncover the “Big Domino” in your business,
                the single most powerful growth lever that can simplify operations and multiply
                your results. This isn’t theory. It’s the proven SANDOR methodology used by over
                3,000 business owners to unlock major breakthroughs in less time.
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
                  className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-medium shadow hover:bg-blue-700 transition-colors duration-300"
                >
                  Book Your Breakthrough Call
                </a>
                <a
                  href="#how"
                  className="inline-block border border-gray-300 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                >
                  How It Works
                </a>
              </motion.div>
            </div>

            {/* Right Snapshot Card */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto"
            >
              <div className="mb-4">
                <div className="text-xs text-gray-500 uppercase tracking-wide">Quick Snapshot</div>
                <div className="text-lg font-semibold text-gray-900">
                  Free 15-Minute SANDOR Strategy Call
                </div>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    ✔
                  </span>
                  <div>
                    <div className="text-sm font-medium">Identify Your “Big Domino”</div>
                    <div className="text-xs text-gray-500">
                      Pinpoint the single biggest factor that will unlock your next stage of growth.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    ✔
                  </span>
                  <div>
                    <div className="text-sm font-medium">Customized Roadmap</div>
                    <div className="text-xs text-gray-500">
                      Get a clear, actionable 30-day plan tailored to your business goals.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    ✔
                  </span>
                  <div>
                    <div className="text-sm font-medium">Proven Framework</div>
                    <div className="text-xs text-gray-500">
                      Apply the same SANDOR methodology used by 3,000+ businesses worldwide.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="https://sbgschedule.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-blue-600 text-white rounded-md px-4 py-3 font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Book a Call
                </a>
              </div>
            </motion.div>
          </div>
        </section>


         {/* HOW IT WORKS SECTION */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-bold">How it works</h3>
        <p className="mt-3 text-gray-600 max-w-2xl">
          A simple, results-driven process tailored to busy professionals who
          want clarity, focus, and measurable growth.
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
            <h4 className="font-semibold"> Book your session</h4>
            <p className="text-sm text-gray-500 mt-2">
              Choose a convenient time and tell us a bit about your business
              goals before the call.
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
            <h4 className="font-semibold">Deep-dive discovery</h4>
            <p className="text-sm text-gray-500 mt-2">
              We’ll diagnose what’s working, what’s not, and identify the
              highest-impact opportunities.
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
            <h4 className="font-semibold">Action & implementation</h4>
            <p className="text-sm text-gray-500 mt-2">
              Walk away with a laser-focused plan you can implement immediately
              with or without ongoing support.
            </p>
          </div>
        </div>
      </section>

        {/* SALES LETTER OVERVIEW SECTION */}
        <section id="sandon-story" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              The Power of Finding Your One Big Domino
            </h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              What if one strategic move could double, triple, or even 10x your business without adding more work or complexity?  
              That’s the power of the SANDOR methodology.
            </p>
          </div>

          <div className="prose prose-lg mx-auto mt-8 space-y-6 text-gray-700 leading-relaxed text-left md:text-justify">
            <p>
              Frank Kern first introduced the SANDOR approach to a client named <strong>Brooke Castillo</strong> in 2014.  
              At the time, Brooke was earning around <strong>$300,000 per year</strong> and wanted to grow, but she was pulled in too many directions.
            </p>

            <p>
              Frank suggested one simple change: <em>“What if you just double your prices?”</em>  
              Brooke was skeptical, she thought no one would buy. But she tried it.
            </p>

            <p>
              The result? <strong>No drop in sales.</strong> Clients kept buying. Encouraged, she raised prices again.  
              The extra revenue allowed her to run more ads and reach new audiences. By the end of that year, she crossed her first million in revenue.
            </p>

            <p>
              The following year, she applied SANDOR again, this time to scale and step out of daily operations.  
              The next big domino was adding a single complementary offer to her business.  
              That one change helped her reach <strong>$5 million in annual revenue</strong>.  
              Today, she works three days a week and spends the rest of her time doing what she enjoys most.
            </p>

            <p>
              When I applied the same principles to my own professional service business, the results were immediate.  
              I went from constantly chasing clients and juggling multiple projects to identifying the one thing that truly moved the needle.  
              That single shift increased my revenue by <strong>40% in six months</strong>.
            </p>

            <p>
              Now, I specialize in helping other professional service businesses find their own “big domino”   
              the one strategic move that transforms growth, simplifies operations, and increases profit with less effort.
            </p>

            <p>
              During our <strong>Half-Day SANDOR Breakthrough Session</strong>, we’ll identify your unique big domino, create a 30-day implementation roadmap,  
              and design a plan aimed at delivering a <strong>minimum 10x return</strong> within six months.  
              This process has helped more than <strong>3,000 business owners</strong> achieve measurable breakthroughs.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 my-8">
              “Major breakthroughs don’t come from doing more. They come from doing the right one thing, really well.”
            </blockquote>

            <div className="mt-12 text-center">
              <a
                href="#schedule"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
              >
                Schedule Your Session
              </a>
              <p className="text-gray-500 mt-3 text-sm">
                Limited to 3 professional service businesses per month.
              </p>
            </div>
          </div>
        </section>


        {/* RESULTS */}
          <section id="testimonials" className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <motion.h2
                id='results'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
              >
                Real Business Breakthroughs From Our Clients
              </motion.h2>

              <motion.div
                className="overflow-hidden cursor-grab active:cursor-grabbing"
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -((testimonials.length - 1) * 180), right: 0 }}
                  className="flex gap-4"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {testimonials.map((t, i) => (
                    <motion.div
                      key={i}
                      className=" shadow-md rounded-xl p-4 text-left min-w-[160px] max-w-[300px] flex-shrink-0 mx-auto border border-gray-100 hover:shadow-lg transition-shadow duration-300 bg-white my-10"
                    >
                      <p className="text-gray-700 text-sm italic mb-4 leading-snug line-clamp-6">
                        “{t.quote}”
                      </p>
                      <div className="border-t pt-3">
                        <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
        </section>




        <section id="book-call" className="bg-blue-50 py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Reserve Your Business Breakthrough Session
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              This is your chance to step away from the day-to-day grind and focus on
              uncovering the ONE strategic move that could transform your entire business.
              In just four hours, we’ll identify your biggest growth opportunity and map out
              a clear implementation plan designed to deliver measurable results within months.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <Link
                href="#"
                className="bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
              >
                Schedule Your Session
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-8 text-sm"
            >
              Limited to <strong>3 professional service businesses</strong> per month.
              One spot remains for this month.
            </motion.p>
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
                Jamie White
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
                  <a className="hover:text-white transition">
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    Marketing Optimization
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    Operations Scaling
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    Growth Audits
                  </a>
                </li>
              </ul>
            </div>

            {/* Insights + Newsletter */}
            <div>
              <h5 className="text-white font-semibold mb-3">Insights</h5>
              <p className="text-sm text-gray-400 mb-4">
                Join 1,000+ other professionals and get weekly insights to help you
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
                <a href="https://www.linkedin.com/in/jamie-white-70aa22248/" target='_blank' className="hover:text-white transition" aria-label="LinkedIn">
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
                {/* <a href="#" className="hover:text-white transition" aria-label="Twitter">
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
                </a> */}
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}






