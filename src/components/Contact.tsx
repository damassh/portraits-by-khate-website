"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    session: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up your form handler (Formspree, Resend, etc.)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 px-6 overflow-hidden" style={{ background: "#1A1A18" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p
              className="text-[#C4956A] tracking-[0.4em] uppercase text-xs mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Get in Touch
            </p>
            <h2
              className="text-white mb-6 leading-[1.2]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontStyle: "italic",
              }}
            >
              Let's create something
              <br />
              <span className="not-italic font-semibold">beautiful together.</span>
            </h2>
            <div className="w-10 h-px bg-[#C4956A] mb-8" />
            <p
              className="text-[#A8A8A4] leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem" }}
            >
              Ready to book your session? Fill out the form and I'll be in touch within 48 hours to chat
              about your vision, availability, and pricing.
            </p>

            <div className="space-y-5">
              {[
                { label: "Email", value: "studio@portraitsbykhate.com" },
                { label: "Location", value: "Melbourne, VIC · Available for Travel" },
                { label: "Instagram", value: "@portraitsbykhate" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div
                    className="text-[#C4956A] text-[10px] tracking-widest uppercase mt-1 w-20 shrink-0"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-[#A8A8A4]"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="text-[#C4956A] text-4xl mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  ✦
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontStyle: "italic" }}
                >
                  Thank you!
                </h3>
                <p
                  className="text-[#A8A8A4]"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                >
                  I'll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "jane@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-[#8C8C88] text-[10px] tracking-widest uppercase mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] transition-colors placeholder:text-white/20"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="session"
                    className="block text-[#8C8C88] text-[10px] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Session Type
                  </label>
                  <select
                    id="session"
                    name="session"
                    required
                    value={formData.session}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <option value="" disabled className="bg-[#1A1A18]">Select a session type</option>
                    <option value="newborn" className="bg-[#1A1A18]">Newborn</option>
                    <option value="maternity" className="bg-[#1A1A18]">Maternity</option>
                    <option value="family" className="bg-[#1A1A18]">Family</option>
                    <option value="couple" className="bg-[#1A1A18]">Couples</option>
                    <option value="wedding" className="bg-[#1A1A18]">Wedding</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#8C8C88] text-[10px] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Tell Me About Your Vision
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="I'd love to hear about your family, your baby's due date, or your wedding date..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] transition-colors placeholder:text-white/20 resize-none"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-90 mt-2"
                  style={{
                    background: "#C4956A",
                    color: "#fff",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
