"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Khate has such a beautiful eye for capturing raw emotion. Our newborn photos are absolutely breathtaking — we cry every time we look at them.",
    name: "Ana & Marco",
    session: "Newborn Session",
  },
  {
    quote:
      "I was so nervous about my maternity shoot but Khate made me feel completely at ease. The photos are elegant, timeless, and better than I ever imagined.",
    name: "Isabelle R.",
    session: "Maternity Session",
  },
  {
    quote:
      "Our family photos look like they belong in a magazine. Khate captured our kids' personalities perfectly — even the candid, silly moments.",
    name: "The Santos Family",
    session: "Family Session",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 px-6 border-t border-[#E8E4DC]"
      style={{ background: "#FAF8F5" }}
    >
      <div className="max-w-5xl mx-auto">
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
            Kind Words
          </p>
          <h2
            className="text-[#1A1A18]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontStyle: "italic",
            }}
          >
            What Families Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative p-8 bg-white border border-[#E8E4DC]"
            >
              {/* Quote mark */}
              <div
                className="text-[#C4956A]/20 absolute top-4 left-6 leading-none"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "5rem", lineHeight: 1 }}
              >
                "
              </div>
              <p
                className="text-[#5C5C5A] leading-relaxed relative z-10 mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
              >
                {t.quote}
              </p>
              <div className="border-t border-[#E8E4DC] pt-5">
                <div
                  className="text-[#1A1A18] font-medium"
                  style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-[#C4956A] text-[10px] tracking-widest uppercase mt-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.session}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
