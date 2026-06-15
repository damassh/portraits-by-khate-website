"use client";

import { motion } from "framer-motion";

const placeholders = [
  { label: "Newborn", span: "row-span-2" },
  { label: "Maternity" },
  { label: "Family" },
  { label: "Couple", span: "col-span-2" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6" style={{ background: "#F0EDE7" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#C4956A] tracking-[0.4em] uppercase text-xs mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            My Work
          </p>
          <h2
            className="text-[#1A1A18]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontStyle: "italic",
            }}
          >
            A Glimpse into the Gallery
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-3"
        >
          {placeholders.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`relative group overflow-hidden ${item.span ?? ""}`}
              style={{
                background: "linear-gradient(135deg, #D4CFC8, #C8C4BD)",
                border: "1px solid #E8E4DC",
              }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1A1A18]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                <span
                  className="text-white text-xs tracking-widest uppercase border border-white/50 px-5 py-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.label}
                </span>
              </div>
              {/* Placeholder label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
                <div
                  className="text-[#8C8C88] text-sm tracking-widest uppercase mb-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.label}
                </div>
                <div className="text-[10px] text-[#8C8C88] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Add your photo
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 border border-[#C4956A] text-[#C4956A] hover:bg-[#C4956A] hover:text-white transition-all duration-300 text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Book Your Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
