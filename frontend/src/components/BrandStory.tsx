const BrandStory = () => {
  return (
    <section
      id="brand-story"
      className="relative overflow-hidden bg-[#F7F4EF] py-20 md:py-28"
    >
      {/* Minimalist background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-[#2F7D76]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(47,125,118,0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT: Minimalist visual composition */}
          <div className="relative">
            {/* Main image - clean and striking */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/brand-story.jpg"
                  alt="Cassia Interiors - Precision finishing"
                  className="h-[500px] md:h-[600px] w-full object-cover"
                />
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Secondary image - floating composition */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/brand-story2.jpg"
                  alt="Interior detail - Precision craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Simple badge */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-xl">
                <p className="text-sm font-medium text-[#2F7D76] tracking-wider">EST. 2015</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Clean typography */}
          <div className="relative">
            {/* Section label */}
            <div className="mb-6">
              <span className="text-sm font-medium tracking-[0.3em] text-[#2F7D76] uppercase">
                Our Foundation
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A2A28] leading-tight">
              Precision is
              <span className="block font-semibold text-[#2F7D76] mt-2">Our Signature</span>
            </h2>

            {/* Content with refined spacing */}
            <div className="mt-8 space-y-6">
              <p className="text-lg text-black/70 leading-relaxed">
                Cassia Interiors & Projects began with a simple belief: luxury isn't defined by price — it's defined by precision. After years of working on high-end projects, we noticed a consistent gap: beautiful designs were often compromised by poor finishing.
              </p>

              <p className="text-lg text-black/70 leading-relaxed">
                Lines were uneven. Surfaces were rushed. The final experience lacked the elegance the design intended. Cassia was born to solve this — to perfect details and deliver finishing that elevates the entire space.
              </p>

              <p className="text-lg text-black/70 leading-relaxed">
                What started as a passion has grown into a trusted finishing and interior project brand across residential, commercial, corporate, and hospitality spaces. Our goal is to bring design to life the way it deserves to be experienced.
              </p>
            </div>

            {/* Minimalist tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Precision Finishing",
                "Clean Edges",
                "Flawless Surfaces",
                "Balanced Palettes",
                "Enduring Materials",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm text-[#2F7D76] bg-[#2F7D76]/5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Clean button */}
            <div className="mt-12">
              <button
                onClick={() => {
                  const el = document.getElementById("vision-mission");
                  if (!el) return;
                  const yOffset = -80;
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2F7D76] text-white rounded-lg hover:bg-[#24615b] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="font-medium">Discover Our Vision</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;