export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10" style={{ background: "#111110" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span
              className="text-[#8C8C88] tracking-widest uppercase text-xs"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Portraits by{" "}
            </span>
            <span
              className="text-[#C4956A] text-xl italic"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Khate
            </span>
          </div>

          {/* Nav links */}
          <div className="flex gap-6 flex-wrap justify-center">
            {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#5C5C5A] hover:text-[#C4956A] transition-colors text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[#5C5C5A] hover:text-[#C4956A] transition-colors text-[10px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[#5C5C5A] hover:text-[#C4956A] transition-colors text-[10px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p
            className="text-[#3D3D3B] text-[10px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            © {year} Portraits by Khate · All rights reserved · Crafted with love
          </p>
        </div>
      </div>
    </footer>
  );
}
