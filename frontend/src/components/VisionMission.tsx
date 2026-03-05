const VisionMission = () => {
  return (
    <section
      id="vision-mission"
      className="bg-[#F7F4EF] py-24 px-6 relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(47,125,118,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Refined heading */}
        <div className="mb-16">
          <span className="text-sm font-medium tracking-[0.3em] text-[#2F7D76] uppercase block mb-3">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A2A28]">
            Vision <span className="font-semibold text-[#2F7D76]">&</span> Mission
          </h2>
          {/* Minimalist divider */}
          <div className="w-20 h-0.5 bg-[#2F7D76]/30 mt-6" />
        </div>

        {/* Cards - refined layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card - modern treatment */}
          <div className="group relative">
            {/* Background card with elevation */}
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-black/10 transition-all duration-500">
              
              {/* Minimalist label design */}
              <div className="absolute -top-5 left-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E6E08A] rounded-lg blur-md opacity-60" />
                  <span className="relative block bg-[#E6E08A] text-[#2F7D76] font-medium px-6 py-3 rounded-lg text-sm tracking-wide">
                    Vision
                  </span>
                </div>
              </div>

              {/* Content with refined typography */}
              <div className="mt-8 space-y-6">
                <p className="text-lg text-black/70 leading-relaxed">
                  To become Africa's leading authority in luxury finishing and
                  interior project execution, setting the benchmark for quality,
                  innovation, and design integrity.
                </p>

                <p className="text-lg text-black/70 leading-relaxed">
                  We envision a world where every space tells a story of precision,
                  artistry, and intentionality, and where Cassia Interiors and
                  Projects stands as the trusted name for enduring elegance and
                  masterful finishing.
                </p>
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F7D76] to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Mission Card - modern treatment */}
          <div className="group relative">
            {/* Background card with elevation */}
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-black/10 transition-all duration-500">
              
              {/* Minimalist label design */}
              <div className="absolute -top-5 left-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E6E08A] rounded-lg blur-md opacity-60" />
                  <span className="relative block bg-[#E6E08A] text-[#2F7D76] font-medium px-6 py-3 rounded-lg text-sm tracking-wide">
                    Mission
                  </span>
                </div>
              </div>

              {/* Content with refined typography */}
              <div className="mt-8 space-y-6">
                <p className="text-lg text-black/70 leading-relaxed">
                  To elevate everyday spaces into refined, luxurious environments
                  through meticulous finishing, thoughtful design, and
                  uncompromising craftsmanship.
                </p>

                <p className="text-lg text-black/70 leading-relaxed">
                  At Cassia Interiors and Projects, we transform concepts into
                  timeless experiences delivering functional beauty, precision
                  detailing, and superior value for clients who desire excellence
                  in every corner.
                </p>
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F7D76] to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Optional: subtle decorative element */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#2F7D76]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#E6E08A]/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default VisionMission;