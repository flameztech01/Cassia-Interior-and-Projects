const BrandStory = () => {
  return (
    <section
      id="brand-story"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Sophisticated dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 30 L30 54 L6 30 L30 6 L54 30' stroke='rgba(255,255,255,0.05)' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Elegant gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white/5 to-transparent" />
      </div>

      {/* Refined animated elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-white/5 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/5 rounded-full animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* LEFT: Elegant visual composition */}
          <div className="relative">
            {/* Main image with refined framing */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-white/10 rounded-[2rem] opacity-50" />
              <div className="absolute -inset-2 border border-white/20 rounded-[2rem] opacity-30" />
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/brand-story.jpg"
                  alt="Cassia Interiors - Precision finishing"
                  className="h-[550px] md:h-[650px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Sophisticated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Secondary image - floating composition */}
              <div className="absolute -bottom-16 -left-16 w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img
                  src="/brand-story2.jpg"
                  alt="Interior detail - Precision craftsmanship"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Refined badge */}
              <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <p className="text-white/80 text-sm tracking-[0.3em]">✦ EST. 2015 ✦</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Elegant typography */}
          <div className="relative">
            {/* Section label with refined styling */}
            <div className="mb-8 inline-block">
              <span className="text-white/40 text-sm tracking-[0.3em] uppercase relative pl-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-px before:bg-white/40">
                Our Foundation
              </span>
            </div>

            {/* Main heading with elegant hierarchy */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
              Precision is
              <span className="block font-medium text-white mt-3 relative inline-block">
                Our Signature
                <span className="absolute -bottom-3 left-0 w-24 h-px bg-white/40" />
              </span>
            </h2>

            {/* Content with refined spacing and opacity */}
            <div className="mt-12 space-y-8">
              <p className="text-lg text-white/60 leading-relaxed font-light">
                Cassia Interiors & Projects began with a simple belief: luxury isn't defined by price — it's defined by precision. After years of working on high-end projects, we noticed a consistent gap: beautiful designs were often compromised by poor finishing.
              </p>

              <p className="text-lg text-white/60 leading-relaxed font-light">
                Lines were uneven. Surfaces were rushed. The final experience lacked the elegance the design intended. Cassia was born to solve this — to perfect details and deliver finishing that elevates the entire space.
              </p>

              <p className="text-lg text-white/60 leading-relaxed font-light">
                What started as a passion has grown into a trusted finishing and interior project brand across residential, commercial, corporate, and hospitality spaces. Our goal is to bring design to life the way it deserves to be experienced.
              </p>
            </div>

            {/* Sophisticated tags */}
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Precision Finishing",
                "Clean Edges",
                "Flawless Surfaces",
                "Balanced Palettes",
                "Enduring Materials",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 text-sm text-white/60 border border-white/10 rounded-full hover:border-white/30 hover:text-white/90 transition-all duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Elegant button */}
            <div className="mt-16">
              <button
                onClick={() => {
                  const el = document.getElementById("vision-mission");
                  if (!el) return;
                  const yOffset = -100;
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className="group relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden transition-all duration-300"
              >
                {/* Button background with hover effect */}
                <span className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-all duration-500" />
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500" />
                
                {/* Button content */}
                <span className="relative text-white font-light tracking-wide">Discover Our Vision</span>
                <span className="relative text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
              </button>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-20 bottom-0 w-40 h-40 border border-white/5 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default BrandStory;