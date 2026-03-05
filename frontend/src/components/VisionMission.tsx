const VisionMission = () => {
  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden py-28 md:py-36 bg-black"
    >
      {/* Sophisticated background texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(47,125,118,0.2) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Elegant gradient overlays with brand color */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#2F7D76]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#E6E08A]/5 to-transparent" />
      </div>

      {/* Refined animated elements */}
      <div className="absolute top-40 left-20 w-72 h-72 border border-[#2F7D76]/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-96 h-96 border border-[#E6E08A]/10 rounded-full animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Refined heading with brand colors */}
        <div className="mb-20 text-center">
          <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block px-8 py-2 border border-[#2F7D76]/20 rounded-full mb-6">
            Our Purpose
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Vision <span className="text-[#E6E08A] font-medium">&</span> Mission
          </h2>
          {/* Elegant divider with brand colors */}
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-px bg-[#2F7D76]/40" />
            <div className="w-2 h-2 rounded-full bg-[#E6E08A]/60" />
            <div className="w-12 h-px bg-[#2F7D76]/40" />
          </div>
        </div>

        {/* Cards - refined layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card - luxury treatment */}
          <div className="group relative">
            {/* Background card with elegant depth */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-700">
              
              {/* Refined label design with brand colors */}
              <div className="absolute -top-6 left-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2F7D76] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  <span className="relative block bg-[#2F7D76] text-white px-8 py-3 rounded-full text-sm tracking-[0.2em] font-light">
                    VISION
                  </span>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#E6E08A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Content with refined typography */}
              <div className="mt-12 space-y-8">
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  To become Africa's leading authority in luxury finishing and
                  interior project execution, setting the benchmark for quality,
                  innovation, and design integrity.
                </p>

                <p className="text-xl text-white/50 leading-relaxed font-light">
                  We envision a world where every space tells a story of precision,
                  artistry, and intentionality, and where Cassia Interiors and
                  Projects stands as the trusted name for enduring elegance and
                  masterful finishing.
                </p>
              </div>

              {/* Subtle brand color accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F7D76] via-[#E6E08A] to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Mission Card - luxury treatment */}
          <div className="group relative">
            {/* Background card with elegant depth */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-700">
              
              {/* Refined label design with brand colors */}
              <div className="absolute -top-6 left-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E6E08A] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  <span className="relative block bg-[#E6E08A] text-[#1A2A28] px-8 py-3 rounded-full text-sm tracking-[0.2em] font-light">
                    MISSION
                  </span>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#2F7D76]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Content with refined typography */}
              <div className="mt-12 space-y-8">
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  To elevate everyday spaces into refined, luxurious environments
                  through meticulous finishing, thoughtful design, and
                  uncompromising craftsmanship.
                </p>

                <p className="text-xl text-white/50 leading-relaxed font-light">
                  At Cassia Interiors and Projects, we transform concepts into
                  timeless experiences delivering functional beauty, precision
                  detailing, and superior value for clients who desire excellence
                  in every corner.
                </p>
              </div>

              {/* Subtle brand color accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E6E08A] via-[#2F7D76] to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>

        {/* Optional: subtle decorative elements with brand colors */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#2F7D76]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E6E08A]/10 rounded-full blur-3xl -z-10" />

        {/* Brand color accent dots */}
        <div className="absolute top-1/2 left-0 w-full flex justify-between pointer-events-none -z-5">
          <div className="w-2 h-2 rounded-full bg-[#2F7D76]/30" />
          <div className="w-2 h-2 rounded-full bg-[#E6E08A]/30" />
          <div className="w-2 h-2 rounded-full bg-[#2F7D76]/30" />
          <div className="w-2 h-2 rounded-full bg-[#E6E08A]/30" />
        </div>
      </div>

      {/* Bottom gradient line with brand colors */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent" />
    </section>
  );
};

export default VisionMission;