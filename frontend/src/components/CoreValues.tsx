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
    <section id="core-values" className="relative overflow-hidden bg-[#F7F4EF] py-24">
      {/* Minimalist background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-[#2F7D76]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-[400px] h-[400px] bg-[#E6E08A]/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(47,125,118,0.1) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Refined heading section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-[#2F7D76] uppercase block mb-3">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A2A28]">
              Core <span className="font-semibold text-[#2F7D76]">Values</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#2F7D76]/30 mt-6" />
          </div>

          <div className="hidden md:flex items-center gap-2 text-black/50 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D76]" />
            The standards behind every finish
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Values grid - modernized */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <div
                  key={v.no}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Header with refined styling */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#E6E08A] rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                      <div className="relative w-10 h-10 rounded-full bg-[#E6E08A] flex items-center justify-center text-[#2F7D76] font-semibold text-lg">
                        {v.no}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#1A2A28]">
                      {v.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-black/60 leading-relaxed text-sm">
                    {v.desc}
                  </p>

                  {/* Subtle accent line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2F7D76] group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Modern visual composition */}
          <div className="lg:col-span-5 relative">
            {/* Main image - clean architectural presentation */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/core-values.jpg"
                  alt="Luxury interior craftsmanship"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Minimalist floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5 min-w-[200px] border-l-4 border-[#2F7D76]">
                <p className="text-xs text-black/50 mb-1">Built on</p>
                <p className="text-base font-semibold text-[#1A2A28]">
                  Trust · Detail · Quality
                </p>
                <div className="flex gap-1 mt-2">
                  <span className="w-2 h-2 rounded-full bg-[#2F7D76]" />
                  <span className="w-2 h-2 rounded-full bg-[#E6E08A]" />
                  <span className="w-2 h-2 rounded-full bg-black/20" />
                </div>
              </div>

              {/* Decorative elements - minimalist */}
              <div className="absolute top-10 -right-4 w-24 h-24 border-2 border-[#2F7D76]/10 rounded-full" />
              <div className="absolute bottom-20 -left-8 w-16 h-16 bg-[#2F7D76]/5 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Optional: Bottom accent */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#2F7D76]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;