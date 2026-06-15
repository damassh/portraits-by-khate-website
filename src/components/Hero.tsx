"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#1A1A18" }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(196,149,106,0.12) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(196,149,106,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Decorative grain texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#C4956A] tracking-[0.4em] uppercase text-xs mb-8"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Melbourne Photographer
        </motion.p>

        {/* Main heading (H1 for SEO) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white leading-[1.2] mb-6"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontStyle: "italic",
          }}
        >
          You deserve to be
          <br />
          <span className="not-italic font-semibold">seen.</span>
          <br />
          You belong in the story.
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto my-8"
          style={{ width: "60px", height: "1px", background: "#C4956A" }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-[#A8A8A4] text-lg max-w-xl mx-auto leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontStyle: "italic" }}
        >
          Timeless moments, beautifully captured.
        </motion.p>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-[#8C8C88] text-xs max-w-xl mx-auto leading-relaxed mb-12 tracking-widest"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Newborn · Maternity · Family · Couples · Wedding
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#services"
            className="px-10 py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-90"
            style={{
              background: "#C4956A",
              color: "#fff",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            View Services
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 text-xs tracking-widest uppercase border border-white/30 text-white/80 hover:border-[#C4956A] hover:text-[#C4956A] transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            See My Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
