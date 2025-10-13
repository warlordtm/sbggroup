"use client";

import React from 'react'
import { motion } from 'framer-motion'



// --- Components --- //
const NavBar = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold"><img src=""/></div>
        <div>
          <h1 className="text-lg font-bold">Jamie White Consulting</h1>
          <p className="text-xs text-gray-500">Clarity · Strategy · Growth</p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#how" className="hover:underline">How it works</a>
        <a href="#results" className="hover:underline">Results</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="https://sbgschedule.com" target="_blank" rel="noreferrer" className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:brightness-95">Book a Call</a>
      </nav>
      <div className="md:hidden">
        <a href="https://sbgschedule.com" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-3 py-2 rounded-md">Book</a>
      </div>
    </div>
  </header>
)

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
      <div>
        <motion.h2 initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05, duration: 0.5 }} className="text-3xl md:text-4xl font-extrabold leading-tight">
          Get clarity. Take action. Grow your consulting business.
        </motion.h2>
        <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.45 }} className="mt-4 text-gray-600 max-w-xl">
          One-on-one strategy sessions that remove the guesswork and create predictable momentum.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }} className="mt-6 flex flex-wrap gap-3">
          <a href="https://sbgschedule.com" target="_blank" rel="noreferrer" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-medium shadow">Book Your Strategy Call</a>
          <a href="#how" className="inline-block border border-gray-200 px-4 py-3 rounded-md text-gray-700">How it works</a>
        </motion.div>
      </div>

      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto">
        <div className="mb-4">
          <div className="text-xs text-gray-500">Quick snapshot</div>
          <div className="text-lg font-semibold">Free 15-min Strategy Call</div>
        </div>
        <ul className="space-y-3 text-gray-700">
          {['Clear next steps', 'Booking link', 'Fast wins'].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">✔</span>
              <div>
                <div className="text-sm font-medium">{item}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a href="https://sbgschedule.com" target="_blank" rel="noreferrer" className="block text-center bg-blue-600 text-white rounded-md px-4 py-3 font-medium">Book a call</a>
        </div>
      </motion.div>
    </div>
  </section>
)

const HowItWorks = () => (
  <section id="how" className="max-w-6xl mx-auto px-6 py-14">
    <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold">How it works</motion.h3>
    <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-3 text-gray-600 max-w-2xl">Simple, results-focused process tailored to busy consultants.</motion.p>
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {[
        { step: '1. Book a quick call', desc: 'We diagnose the highest-impact opportunities in 15 minutes.' },
        { step: '2. Action plan', desc: 'Get a short, tactical plan focused on revenue-driving changes.' },
        { step: '3. Implement & scale', desc: 'I’ll help set up systems or guide your team to execute faster.' }
      ].map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="bg-white p-6 rounded-xl shadow">
          <h4 className="font-semibold">{item.step}</h4>
          <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const Results = () => (
  <section id="results" className="bg-gradient-to-r from-white via-sky-50 to-white py-16">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold">Results clients talk about</motion.h3>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { quote: 'Doubled my revenue in 60 days', name: 'Sandra Hendrick' },
          { quote: 'Clear steps that actually worked', name: 'Jeffery Stone' },
          { quote: 'I finally had a sales process that converted.', name: 'Daniel Lintaker' }
        ].map((item, i) => (
          <motion.blockquote key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i }} className="bg-white p-6 rounded-xl shadow">
            <div className="text-lg font-semibold">"{item.quote}"</div>
            <div className="text-sm text-gray-500 mt-2">— {item.name}</div>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
)

const FinalCTA = () => (
  <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
    <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-8 rounded-2xl shadow text-center">
      <h3 className="text-2xl font-bold">Ready to get clarity and take action?</h3>
      <p className="mt-3 text-gray-600">Book a short strategy call and leave with a simple, actionable plan.</p>
      <div className="mt-6">
        <a href="https://sbgschedule.com" target="_blank" rel="noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Book Your Strategy Call</a>
      </div>
    </motion.div>
  </section>
)

const Footer = () => (
  <footer className="bg-white border-t py-6">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-600">© Jamie White Consulting</div>
      <div className="flex items-center gap-3">
        <a href="#" className="text-sm text-gray-600 hover:underline">Privacy</a>
        <a href="#" className="text-sm text-gray-600 hover:underline">Terms</a>
      </div>
    </div>
  </footer>
)

// --- Main Page --- //
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <NavBar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Results />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
