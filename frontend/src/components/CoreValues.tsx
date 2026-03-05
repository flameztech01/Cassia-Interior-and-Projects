type ValueItem = {
  no: string;
  title: string;
  desc: string;
};

const VALUES: ValueItem[] = [
  {
    no: "1",
    title: "Precision",
    desc: "We honour the details that define excellence. Every finish, every line, every texture is deliberate.",
  },
  {
    no: "2",
    title: "Integrity",
    desc: "We deliver what we promise — quality, accountability, and transparency at every stage of the project.",
  },
  {
    no: "3",
    title: "Craftsmanship",
    desc: "We celebrate the artistry behind fine finishing, embracing skill, passion, and continuous improvement.",
  },
  {
    no: "4",
    title: "Innovation",
    desc: "We push boundaries with modern techniques, high-quality materials, and forward-thinking design approaches.",
  },
  {
    no: "5",
    title: "Client Partnership",
    desc: "We collaborate closely with clients, translating their visions into functional, aesthetically refined realities.",
  },
  {
    no: "6",
    title: "Excellence",
    desc: "We do not settle for “good enough.” Our standard is superior, consistent, and enduring.",
  },
];

const CoreValues = () => {
  return (
    <section id="core-values" className="relative overflow-hidden py-28 md:py-36 bg-black">
      {/* Sophisticated brand-colored background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-[600px] h-[600px] bg-[#2F7D76]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Elegant geometric pattern with brand colors */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, ${'#2F7D76'} 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Refined gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black to-transparent" />
      </div>

      {/* Decorative brand color lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Refined heading section with brand colors */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="relative">
            <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#2F7D76]/40">
              Our Foundation
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-6">
              Core <span className="text-[#E6E08A] font-medium">Values</span>
            </h2>
            
            {/* Elegant divider with brand colors */}
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-px bg-[#2F7D76]/40" />
              <div className="w-2 h-2 rounded-full bg-[#E6E08A]/60" />
              <div className="w-12 h-px bg-[#2F7D76]/40" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 text-white/40 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D76]" />
            <span className="tracking-wide">The standards behind every finish</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT: Values grid - luxury redesign */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((v) => (
                <div
                  key={v.no}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-700 hover:-translate-y-2"
                >
                  {/* Header with refined brand color styling */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-[#E6E08A] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                      
                      {/* Number circle with brand colors */}
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#2F7D76] to-[#1e5a55] flex items-center justify-center">
                        <span className="text-white font-light text-lg">{v.no}</span>
                      </div>
                      
                      {/* Decorative dot */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E6E08A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <h3 className="text-xl font-light text-white tracking-wide">
                      {v.title}
                    </h3>
                  </div>

                  {/* Description with refined typography */}
                  <p className="text-white/50 leading-relaxed text-sm font-light group-hover:text-white/70 transition-colors duration-500">
                    {v.desc}
                  </p>

                  {/* Elegant corner accents */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#E6E08A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#2F7D76]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Subtle accent line on hover with brand colors */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] group-hover:w-full transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Elegant visual composition */}
          <div className="lg:col-span-5 relative">
            {/* Main image with luxury framing */}
            <div className="relative">
              {/* Decorative frames */}
              <div className="absolute -inset-4 border border-[#2F7D76]/20 rounded-[2rem] opacity-30" />
              <div className="absolute -inset-2 border border-[#E6E08A]/20 rounded-[2rem] opacity-20" />
              
              {/* Image container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                <img
                  src="/core-values.jpg"
                  alt="Luxury interior craftsmanship"
                  className="w-full h-[550px] md:h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                />
                
                {/* Sophisticated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Brand color accent lines */}
                <div className="absolute top-6 left-6 w-12 h-1 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A]" />
                <div className="absolute bottom-6 right-6 w-12 h-1 bg-gradient-to-r from-[#E6E08A] to-[#2F7D76]" />
              </div>

              {/* Refined floating badge with brand colors */}
              <div className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-md rounded-xl border border-[#2F7D76]/30 shadow-2xl p-6 min-w-[240px]">
                <p className="text-white/40 text-xs tracking-[0.2em] mb-2">BUILT ON</p>
                <p className="text-xl font-light text-white mb-3">
                  Trust · Detail · Quality
                </p>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2F7D76]" />
                  <span className="w-2 h-2 rounded-full bg-[#E6E08A]" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-[#E6E08A]/40" />
              </div>

              {/* Decorative brand color elements */}
              <div className="absolute top-20 -right-6 w-32 h-32 border-2 border-[#2F7D76]/20 rounded-full" />
              <div className="absolute bottom-32 -left-8 w-24 h-24 bg-[#2F7D76]/10 rounded-full blur-xl" />
              
              {/* Additional brand color accents */}
              <div className="absolute top-1/2 -right-3 w-6 h-6 border-2 border-[#E6E08A]/30 rounded-full" />
              <div className="absolute bottom-1/4 left-0 w-4 h-4 bg-[#E6E08A]/20 rounded-full blur-sm" />
            </div>
          </div>
        </div>

        {/* Bottom accent with brand colors */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-[#E6E08A]/40" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent" />
    </section>
  );
};

export default CoreValues;