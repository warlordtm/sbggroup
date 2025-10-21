"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
      if (res.ok) {
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
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

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-xl shadow-md grid gap-6 md:grid-cols-2"
        >
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="How may we help you?"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="md:col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {status && (
          <p className="text-center text-gray-600 mt-4">{status}</p>
        )}
      </div>
    </motion.section>
  );
}
