"use client";

import { motion } from "framer-motion";

const primaryServices = [
  {
    title: "Newborn",
    subtitle: "Days 5–14",
    description:
      "Capturing the precious, fleeting moments of your newest family member. Soft, timeless portraits in a warm and safe environment.",
    icon: "✦",
    detail: "Studio & Lifestyle",
  },
  {
    title: "Maternity",
    subtitle: "Weeks 32–36",
    description:
      "Celebrating the beautiful journey of motherhood. Elegant, glowing portraits that honor this transformative season of life.",
    icon: "✦",
    detail: "Studio & Outdoor",
  },
  {
    title: "Family",
    subtitle: "All Ages Welcome",
    description:
      "Authentic moments, genuine laughter, and real connection. Family portraits that tell your unique story for generations to come.",
    icon: "✦",
    detail: "Outdoor & Studio",
  },
];

const secondaryServices = [
  {
    title: "Couples",
    description: "Intimate, editorial portraits that capture the love and connection between two people.",
  },
  {
    title: "Wedding",
    description: "From getting ready to the last dance — thoughtful, documentary-style wedding photography.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6" style={{ background: "#FAF8F5" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-[#C4956A] tracking-[0.4em] uppercase text-xs mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            What I Offer
          </p>
          <h2
            className="text-[#1A1A18] mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontStyle: "italic",
            }}
          >
            Sessions & Services
          </h2>
          <p
            className="text-[#8C8C88] max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}
          >
            Every session is thoughtfully crafted to reflect your family's personality, love, and story.
          </p>
        </motion.div>

        {/* Primary Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative bg-white p-10 border border-[#E8E4DC] hover:border-[#C4956A] hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              {/* Badge */}
              <span
                className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#C4956A] border border-[#C4956A]/30 px-3 py-1 mb-6"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {service.detail}
              </span>

              <h3
                className="text-[#1A1A18] mb-1"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "1.7rem", fontStyle: "italic" }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#C4956A] text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {service.subtitle}
              </p>
              <div className="w-8 h-px bg-[#C4956A] mb-5 group-hover:w-16 transition-all duration-500" />
              <p
                className="text-[#5C5C5A] leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
              >
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 text-[10px] tracking-widest uppercase text-[#C4956A] group-hover:gap-4 transition-all duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Inquire <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Secondary Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-[#E8E4DC] pt-12"
        >
          <p
            className="text-center text-[#8C8C88] tracking-[0.3em] uppercase text-[10px] mb-8"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Also Available
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {secondaryServices.map((service, i) => (
              <div
                key={service.title}
                className="flex gap-5 p-7 bg-[#F0EDE7] hover:bg-white border border-transparent hover:border-[#E8E4DC] transition-all duration-300"
              >
                <div className="text-[#C4956A] text-lg mt-0.5">✦</div>
                <div>
                  <h4
                    className="text-[#1A1A18] mb-2"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontStyle: "italic" }}
                  >
                    {service.title}
                  </h4>
                  <p
                    className="text-[#5C5C5A] leading-relaxed text-sm"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
