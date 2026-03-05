const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#F7F4EF] min-h-screen flex items-center">
      {/* animated geometric patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#2F7D76]/20 rotate-12 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-[#2F7D76]/20 -rotate-12 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#2F7D76]/5 rounded-full blur-xl" />
      </div>

      {/* modern gradient accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#2F7D76]/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#2F7D76]/20 blur-3xl animate-pulse delay-1000" />
      
      {/* diagonal line design */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#2F7D76]/5 to-transparent skew-x-12" />

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - with modern card styling */}
          <div className="relative">
            {/* floating badge - repositioned */}
            <div className="absolute -top-8 -left-4 rounded-2xl bg-white border border-[#2F7D76]/20 px-4 py-2 shadow-xl rotate-[-2deg]">
              <p className="text-xs text-[#2F7D76] font-bold">✦ SINCE 2015 ✦</p>
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#2F7D76]/30 bg-white/90 px-4 py-2 text-sm text-[#1f1f1f] shadow-lg backdrop-blur hover:border-[#2F7D76] transition-all duration-300">
                <span className="h-2 w-2 rounded-full bg-[#2F7D76] animate-ping opacity-75" />
                <span className="relative">Luxury Interior Finishing • Project Execution</span>
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-[#0f1a19] relative">
                <span className="relative inline-block">
                  Elevate your space
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#2F7D76]/30 rounded-full" />
                </span>{" "}
                with{" "}
                <span className="relative">
                  <span className="text-[#2F7D76] relative z-10">precision</span>
                  <span className="absolute -inset-1 bg-[#2F7D76]/10 blur-xl rounded-full" />
                </span>{" "}
                and{" "}
                <span className="relative">
                  <span className="text-[#2F7D76] relative z-10">craftsmanship</span>
                  <span className="absolute -inset-1 bg-[#2F7D76]/10 blur-xl rounded-full" />
                </span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-black/70 leading-relaxed max-w-xl relative pl-4 border-l-4 border-[#2F7D76]/50">
                Cassia Interiors & Projects transforms structures into refined
                environments—clean edges, flawless finishes, balanced palettes,
                and enduring materials.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo("our-projects")}
                  className="group relative rounded-xl bg-[#2F7D76] px-6 py-3 font-semibold text-white shadow-xl shadow-[#2F7D76]/30 hover:shadow-2xl hover:shadow-[#2F7D76]/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>

                <button
                  onClick={() => scrollTo("connect")}
                  className="group rounded-xl border-2 border-[#2F7D76]/30 bg-white/90 px-6 py-3 font-semibold text-[#0f1a19] backdrop-blur hover:border-[#2F7D76] hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Book a Consultation
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* mini stats - modern card design */}
              <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
                {[
                  { value: "100+", label: "Finishing Details", icon: "✨" },
                  { value: "A+", label: "Quality Standard", icon: "🏆" },
                  { value: "Fast", label: "Project Delivery", icon: "⚡" }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl bg-white/80 border border-black/5 p-4 backdrop-blur hover:shadow-xl hover:border-[#2F7D76]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="absolute -top-2 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {stat.icon}
                    </span>
                    <p className="text-2xl font-extrabold text-[#0f1a19] relative">
                      {stat.value}
                      <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-[#2F7D76]/30 rounded-full group-hover:w-full transition-all duration-500" />
                    </p>
                    <p className="text-sm text-black/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - with modern framing */}
          <div className="relative">
            {/* animated background shapes */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#2F7D76]/20 via-transparent to-transparent rounded-[3rem] blur-2xl animate-pulse" />
            
            {/* decorative card behind image - more dynamic */}
            <div className="absolute -inset-3 md:-inset-5 rounded-[2rem] bg-gradient-to-br from-white to-[#2F7D76]/5 border border-black/5 backdrop-blur rotate-2 scale-105" />
            <div className="absolute -inset-3 md:-inset-5 rounded-[2rem] bg-gradient-to-tl from-[#2F7D76]/10 to-transparent border border-black/5 backdrop-blur -rotate-1 scale-105" />
            
            {/* main image container */}
            <div className="relative rounded-[2rem] overflow-hidden border border-black/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a19]/50 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <img
                src="/woman.jpg"
                alt="Cassia Interiors"
                className="w-full h-[480px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* modern overlay with glass effect */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/30 p-4 flex items-center justify-between gap-4 shadow-2xl z-20">
                <div>
                  <p className="text-sm text-black/60 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2F7D76] animate-pulse" />
                    Executive Direction
                  </p>
                  <p className="text-lg font-bold text-[#0f1a19] flex items-center gap-2">
                    Comfort Samson
                    <span className="text-xs bg-[#2F7D76] text-white px-2 py-0.5 rounded-full">CEO</span>
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#2F7D76] bg-[#2F7D76]/10 px-3 py-1.5 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-[#2F7D76] animate-pulse" />
                  Precision • Elegance • Integrity
                </div>
              </div>
            </div>

            {/* small floating badge - redesigned */}
            <div className="absolute -top-4 right-6 rounded-2xl bg-gradient-to-br from-[#2F7D76] to-[#1e5a55] text-white px-4 py-3 shadow-2xl shadow-[#2F7D76]/30 rotate-2 hover:rotate-0 transition-transform duration-300">
              <p className="text-xs opacity-90 flex items-center gap-1">
                <span>✦</span> Trusted Finishing
              </p>
              <p className="text-sm font-bold flex items-center gap-1">
                Luxury Standard
                <span className="text-lg">→</span>
              </p>
            </div>

            {/* additional modern accent */}
            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-[#2F7D76]/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-1/2 -right-4 w-8 h-8 border-2 border-[#2F7D76]/30 rounded-full animate-spin-slow" />
          </div>
        </div>
      </div>

      {/* modern scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-xs text-[#2F7D76] tracking-wider">SCROLL</span>
        <div className="w-5 h-8 border-2 border-[#2F7D76]/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#2F7D76] rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      <style >{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;