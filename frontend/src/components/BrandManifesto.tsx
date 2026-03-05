const BrandManifesto = () => {
  const bullets = [
    "A commitment to excellence.",
    "A commitment to detail.",
    "A commitment to creating spaces that reflect the highest expression of craftsmanship.",
    "We champion the art of finishing because we know it is the difference between ordinary and unforgettable.",
    "Every project is a canvas. Every detail is a signature. And every space we touch becomes a testament to quality, sophistication, and intentional design.",
  ];

  return (
    <section id="brand-manifesto" className="relative overflow-hidden bg-[#F7F4EF] py-24">
      {/* Minimalist background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-[#2F7D76]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `linear-gradient(rgba(47,125,118,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,125,118,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT: Content */}
          <div className="relative">
            {/* Section marker */}
            <div className="mb-8">
              <span className="text-sm font-medium tracking-[0.2em] text-[#2F7D76] uppercase">
                Our Manifesto
              </span>
              <div className="w-12 h-px bg-[#2F7D76]/30 mt-3" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A2A28] leading-tight">
              Our work is a
              <span className="block font-semibold text-[#2F7D76] mt-2">commitment</span>
            </h2>

            {/* Bullet points - refined */}
            <div className="mt-10 space-y-6">
              {bullets.map((text, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#2F7D76]/30 flex items-center justify-center group-hover:border-[#2F7D76] transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#2F7D76] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-lg text-black/70 leading-relaxed flex-1">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote - refined */}
            <div className="mt-12 relative">
              <div className="absolute -left-4 top-0 text-6xl text-[#2F7D76]/20 font-serif">"</div>
              <p className="relative text-xl md:text-2xl text-[#2F7D76] font-light pl-6 pr-4">
                Where finishing becomes an experience…
              </p>
              <div className="absolute -bottom-2 right-0 text-6xl text-[#2F7D76]/20 font-serif">"</div>
            </div>

            {/* Tags - minimalist */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Precision", "Craftsmanship", "Integrity", "Elegance"].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 text-sm text-[#2F7D76] bg-white rounded-full border border-[#2F7D76]/10 hover:border-[#2F7D76]/30 hover:bg-white/80 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Modern image composition */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Main architectural image - large format */}
            <div className="absolute top-0 right-0 w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/manifesto-1.jpg"
                alt="Interior finishing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Secondary image - overlapping composition */}
            <div className="absolute bottom-0 left-0 w-[320px] h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/manifesto-2.jpg"
                alt="Luxury interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
            </div>

            {/* Minimalist accent - geometric shape */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#2F7D76]/10 rounded-2xl -z-10" />
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#2F7D76]/20 rounded-full -z-10" />

            {/* Floating badge - subtle */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-xl border-l-4 border-[#2F7D76]">
                <p className="text-sm font-medium text-[#1A2A28]">
                  <span className="text-[#2F7D76]">●</span> Since 2015
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandManifesto;