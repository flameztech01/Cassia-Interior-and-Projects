const BrandManifesto = () => {
  const bullets = [
    "A commitment to excellence.",
    "A commitment to detail.",
    "A commitment to creating spaces that reflect the highest expression of craftsmanship.",
    "We champion the art of finishing because we know it is the difference between ordinary and unforgettable.",
    "Every project is a canvas. Every detail is a signature. And every space we touch becomes a testament to quality, sophistication, and intentional design.",
  ];

  return (
    <section id="brand-manifesto" className="relative overflow-hidden py-28 md:py-36 bg-black">
      {/* Sophisticated brand-colored background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#2F7D76]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Elegant geometric pattern with brand colors */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, ${'#2F7D76'} 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Refined gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-transparent to-black/50" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#2F7D76]/5 to-transparent" />
      </div>

      {/* Decorative brand color lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* LEFT: Content with luxury typography */}
          <div className="relative">
            {/* Elegant section marker with brand colors */}
            <div className="mb-10 relative">
              <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#2F7D76]/40">
                Our Manifesto
              </span>
            </div>

            {/* Heading with refined hierarchy */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Our work is a
              <span className="block font-medium text-[#E6E08A] mt-3 relative inline-block">
                commitment
                <span className="absolute -bottom-3 left-0 w-24 h-px bg-[#E6E08A]/40" />
              </span>
            </h2>

            {/* Bullet points - luxury styling */}
            <div className="mt-16 space-y-8">
              {bullets.map((text, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-7 h-7 rounded-full border border-[#2F7D76]/30 flex items-center justify-center group-hover:border-[#2F7D76] transition-all duration-500">
                      <div className="w-2 h-2 rounded-full bg-[#2F7D76] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Decorative line connecting bullets */}
                    {idx < bullets.length - 1 && (
                      <div className="absolute top-7 left-3.5 w-px h-12 bg-gradient-to-b from-[#2F7D76]/30 to-transparent" />
                    )}
                  </div>
                  <p className="text-xl text-white/60 leading-relaxed flex-1 font-light group-hover:text-white/80 transition-colors duration-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Elegant quote with brand colors */}
            <div className="mt-16 relative">
              {/* Decorative quote marks */}
              <div className="absolute -left-4 -top-6 text-8xl text-[#2F7D76]/20 font-serif">"</div>
              <div className="absolute -right-4 -bottom-10 text-8xl text-[#E6E08A]/20 font-serif">"</div>
              
              <p className="relative text-2xl md:text-3xl text-white font-light pl-8 pr-8 italic">
                Where finishing becomes an experience…
              </p>
              
              {/* Brand color accent line */}
              <div className="mt-6 ml-8 w-16 h-px bg-gradient-to-r from-[#2F7D76] to-[#E6E08A]" />
            </div>

            {/* Refined tags with brand colors */}
            <div className="mt-16 flex flex-wrap gap-4">
              {["Precision", "Craftsmanship", "Integrity", "Elegance"].map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-3 text-sm text-white/60 border border-white/10 rounded-full hover:border-[#2F7D76] hover:text-white hover:bg-[#2F7D76]/10 transition-all duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Decorative brand color dot */}
            <div className="absolute -left-10 bottom-0 w-20 h-20 border border-[#2F7D76]/20 rounded-full" />
          </div>

          {/* RIGHT: Elegant image composition */}
          <div className="relative h-[700px] flex items-center justify-center">
            {/* Main architectural image - large format with luxury framing */}
            <div className="absolute top-0 right-0 w-[450px] h-[550px] rounded-[2rem] overflow-hidden shadow-2xl group">
              {/* Image frame with brand color border */}
              <div className="absolute inset-0 border border-[#2F7D76]/20 rounded-[2rem] z-10 pointer-events-none" />
              <img
                src="/manifesto-1.jpg"
                alt="Interior finishing"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
              />
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Brand color accent */}
              <div className="absolute bottom-6 left-6 w-12 h-1 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A]" />
            </div>

            {/* Secondary image - overlapping composition with luxury treatment */}
            <div className="absolute bottom-0 left-0 w-[380px] h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-black group">
              <div className="absolute inset-0 border border-[#E6E08A]/20 rounded-[2rem] z-10 pointer-events-none" />
              <img
                src="/manifesto-2.jpg"
                alt="Luxury interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
              />
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
              
              {/* Brand color accent */}
              <div className="absolute top-6 right-6 w-12 h-1 bg-gradient-to-r from-[#E6E08A] to-[#2F7D76]" />
            </div>

            {/* Minimalist geometric accents with brand colors */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#2F7D76]/10 rounded-[3rem] -z-10 rotate-12" />
            <div className="absolute top-32 left-0 w-40 h-40 border-2 border-[#E6E08A]/20 rounded-full -z-10" />
            
            {/* Additional decorative elements */}
            <div className="absolute top-1/2 -right-8 w-16 h-16 border border-[#2F7D76]/30 rounded-full" />
            <div className="absolute bottom-1/4 left-10 w-8 h-8 bg-[#E6E08A]/20 rounded-full blur-md" />

            {/* Floating badge - refined with brand colors */}
            <div className="absolute top-1/3 -left-6 transform -translate-y-1/2">
              <div className="bg-black/50 backdrop-blur-md px-6 py-4 rounded-xl border border-[#2F7D76]/30 shadow-2xl">
                <p className="text-white/90 text-sm tracking-wide flex items-center gap-2">
                  <span className="text-[#E6E08A]">✦</span> 
                  <span className="text-white/60">Since</span> 
                  <span className="text-[#2F7D76] font-medium">2015</span>
                </p>
              </div>
            </div>

            {/* Brand color corner accents */}
            <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-[#2F7D76]/30 opacity-50" />
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-[#E6E08A]/30 opacity-50" />
          </div>
        </div>
      </div>

      {/* Bottom decorative element with brand colors */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default BrandManifesto;