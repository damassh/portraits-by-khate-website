"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 overflow-hidden" style={{ background: "#1A1A18" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Image placeholder with artistic frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Outer decorative border */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-[#C4956A]/30"
              style={{ zIndex: 0 }}
            />
            {/* Image placeholder */}
            <div
              className="relative z-10 aspect-[3/4] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #2C2C2A 0%, #222220 50%, #2A2826 100%)",
                border: "1px solid rgba(196,149,106,0.2)",
              }}
            >
              <div className="text-center opacity-40">
                <div
                  className="text-[#C4956A] text-5xl mb-3"
                  style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                >
                  Khate
                </div>
                <div className="w-8 h-px bg-[#C4956A] mx-auto mb-3" />
                <p
                  className="text-[#A8A8A4] text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Your photo here
                </p>
              </div>
            </div>
            {/* Accent tag */}
            <div
              className="absolute -bottom-5 -right-5 bg-[#C4956A] px-6 py-3 z-20"
            >
              <p
                className="text-white text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Est. 2024
              </p>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-white"
          >
            <p
              className="text-[#C4956A] tracking-[0.4em] uppercase text-xs mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              About Me
            </p>
            <h2
              className="text-white mb-8 leading-[1.2]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontStyle: "italic",
              }}
            >
              Hi, I'm Khate —<br />
              <span className="not-italic font-semibold">I photograph love.</span>
            </h2>

            <div className="space-y-5">
              <p
                className="text-[#A8A8A4] leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem" }}
              >
                I believe that the most meaningful photographs aren't posed — they're the quiet in-betweens, the
                sleepy newborn stretches, the way a mother looks at her child, the laughter that's impossible to fake.
              </p>
              <p
                className="text-[#A8A8A4] leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem" }}
              >
                My approach is warm, unhurried, and deeply personal. I want you to feel comfortable, beautiful, and
                seen — so that when you look back at these images, you feel everything all over again.
              </p>
              <p
                className="text-[#A8A8A4] leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem" }}
              >
                Based in Melbourne, I create timeless portraits for families at every stage of their journey. Available for local and destination sessions.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <a
                href="#contact"
                className="px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                style={{
                  background: "#C4956A",
                  color: "#fff",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Work With Me
              </a>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-[#A8A8A4] hover:text-[#C4956A] transition-colors text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-[#A8A8A4] hover:text-[#C4956A] transition-colors text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-0 mt-24 border border-white/10"
        >
          {[
            { number: "100+", label: "Happy Families" },
            { number: "5+", label: "Years Experience" },
            { number: "∞", label: "Cherished Memories" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 text-center ${i < 2 ? "border-r border-white/10" : ""}`}
            >
              <div
                className="text-[#C4956A] mb-2"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontStyle: "italic" }}
              >
                {stat.number}
              </div>
              <div
                className="text-[#8C8C88] text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
