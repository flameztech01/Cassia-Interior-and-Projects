import { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="core-values" 
      className="relative overflow-hidden py-28 md:py-36 bg-[#F8F6F2]"
    >
      {/* Luxury Interior Design Background Elements */}
      
      {/* Marble texture overlay - subtle and elegant */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1500 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`} 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 Q40 10 60 20 Q80 30 70 50 Q60 70 40 70 Q20 70 30 40 Q25 25 20 20' fill='none' stroke='%232F7D76' stroke-width='0.3' opacity='0.15'/%3E%3Cpath d='M80 30 Q90 40 75 60 Q70 75 55 70 Q40 65 50 50 Q55 35 80 30' fill='none' stroke='%23E6E08A' stroke-width='0.3' opacity='0.15'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Soft linen texture background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1500 delay-200 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`} 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L60 30 M30 0 L30 60' stroke='%239C8E7D' stroke-width='0.3' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Elegant gradient washes - like natural light */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-[#E6E08A]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#2F7D76]/5 via-transparent to-transparent" />
      </div>

      {/* Soft ambient light effects */}
      <div 
        className={`absolute top-40 -left-20 w-[500px] h-[500px] bg-[#FDF5E6]/30 rounded-full blur-3xl transition-all duration-1500 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute bottom-40 -right-20 w-[600px] h-[600px] bg-[#E6E08A]/10 rounded-full blur-3xl transition-all duration-1500 delay-400 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`} 
      />

      {/* Sophisticated brand-colored background elements - fade in and scale */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-40 left-20 w-[600px] h-[600px] bg-[#2F7D76]/5 rounded-full blur-3xl animate-pulse transition-all duration-1500 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
        <div 
          className={`absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#E6E08A]/5 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1500 delay-200 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
      </div>

      {/* Refined gradient overlays for depth */}
      <div className={`absolute inset-0 transition-opacity duration-1500 delay-600 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#F8F6F2] via-[#F8F6F2]/95 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#F8F6F2] via-[#F8F6F2]/95 to-transparent" />
      </div>

      {/* Decorative brand color lines - slide in */}
      <div 
        className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76]/20 to-transparent transition-all duration-1500 delay-800 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} 
        style={{ transformOrigin: 'left' }}
      />
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/20 to-transparent transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} 
        style={{ transformOrigin: 'right' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Refined heading section with brand colors */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
  <div className="relative">
    {/* Section label - slides up */}
    <div 
      className={`transition-all duration-1000 delay-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#2F7D76]/30">
        Our Foundation
      </span>
    </div>
    
    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2C2A24] mt-6">
      <span 
        className={`inline-block transition-all duration-1000 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        Core&nbsp;
      </span>
      <span 
        className={`text-[#2F7D76] font-medium inline-block transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        Values
      </span>
    </h2>
    
    {/* Elegant divider with brand colors - scales in */}
    <div 
      className={`flex items-center gap-3 mt-6 transition-all duration-1000 delay-600 ${
        isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
      }`} 
      style={{ transformOrigin: 'left' }}
    >
      <div className="w-12 h-px bg-[#2F7D76]/30" />
      <div className="w-2 h-2 rounded-full bg-[#E6E08A]/60" />
      <div className="w-12 h-px bg-[#2F7D76]/30" />
    </div>
  </div>

  {/* Right side text - fades in */}
  <div 
    className={`hidden md:flex items-center gap-3 text-[#2C2A24]/50 text-sm transition-all duration-1000 delay-700 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D76]" />
    <span className="tracking-wide">The standards behind every project</span>
  </div>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT: Values grid - luxury interior design style */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((v, index) => (
                <div
                  key={v.no}
                  className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#2C2A24]/5 hover:border-[#2F7D76]/20 transition-all duration-700 hover:-translate-y-2 transform shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(47,125,118,0.08)] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${800 + index * 100}ms`,
                    transitionProperty: 'all'
                  }}
                >
                  {/* Header with refined brand color styling */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-[#E6E08A] rounded-full blur-xl opacity-5 group-hover:opacity-20 transition-opacity duration-500" />
                      
                      {/* Number circle with brand colors - like a refined material */}
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#2F7D76] to-[#1e5a55] flex items-center justify-center shadow-lg">
                        <span className="text-white font-light text-lg">{v.no}</span>
                      </div>
                      
                      {/* Decorative dot - like a precious stone */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E6E08A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <h3 className="text-xl font-light text-[#2C2A24] tracking-wide">
                      {v.title}
                    </h3>
                  </div>

                  {/* Description with refined typography */}
                  <p className="text-[#2C2A24]/60 leading-relaxed text-sm font-light group-hover:text-[#2C2A24]/80 transition-colors duration-500">
                    {v.desc}
                  </p>

                  {/* Elegant corner accents - like architectural details */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#2F7D76]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#E6E08A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Subtle accent line on hover with brand colors */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] group-hover:w-full transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Elegant visual composition - interior design showcase */}
          <div className="lg:col-span-5 relative">
            {/* Main image with luxury framing */}
            <div className="relative">
              {/* Decorative frames - like picture frames in a luxury home */}
              <div 
                className={`absolute -inset-4 border border-[#2F7D76]/10 rounded-[2rem] transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`} 
              />
              <div 
                className={`absolute -inset-2 border border-[#E6E08A]/10 rounded-[2rem] transition-all duration-1000 delay-1100 transform ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`} 
              />
              
              {/* Image container - like a featured art piece */}
              <div 
                className={`relative rounded-[2rem] overflow-hidden shadow-2xl group transition-all duration-1000 delay-900 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <img
                  src="/coreValues.jpg"
                  alt="Luxury interior craftsmanship"
                  className="w-full h-[550px] md:h-[650px] object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                />
                
                {/* Sophisticated gradient overlay - like ambient lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F2]/30 via-transparent to-[#F8F6F2]/20 opacity-40 group-hover:opacity-20 transition-opacity duration-700" />
                
                {/* Brand color accent lines - like architectural details */}
                <div 
                  className={`absolute top-6 left-6 w-12 h-1 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] transition-all duration-1000 delay-1100 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                  style={{ transformOrigin: 'left' }}
                />
                <div 
                  className={`absolute bottom-6 right-6 w-12 h-1 bg-gradient-to-r from-[#E6E08A] to-[#2F7D76] transition-all duration-1000 delay-1200 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                  style={{ transformOrigin: 'right' }}
                />
              </div>

              {/* Refined floating badge - like a material sample */}
              <div 
                className={`absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-xl border border-[#2F7D76]/20 shadow-2xl p-6 min-w-[240px] transition-all duration-1000 delay-1300 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
              >
                <p className="text-[#2F7D76]/60 text-xs tracking-[0.2em] mb-2">BUILT ON</p>
                <p className="text-xl font-light text-[#2C2A24] mb-3">
                  Trust · Detail · Quality
                </p>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2F7D76]" />
                  <span className="w-2 h-2 rounded-full bg-[#E6E08A]" />
                  <span className="w-2 h-2 rounded-full bg-[#2C2A24]/20" />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-[#2F7D76]/30" />
              </div>

              {/* Decorative brand color elements - like ambient light */}
              <div 
                className={`absolute top-20 -right-6 w-32 h-32 border-2 border-[#2F7D76]/10 rounded-full transition-all duration-1500 delay-1200 transform ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                }`} 
              />
              <div 
                className={`absolute bottom-32 -left-8 w-24 h-24 bg-[#E6E08A]/5 rounded-full blur-xl transition-all duration-1500 delay-1300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} 
              />
              
              {/* Additional brand color accents */}
              <div 
                className={`absolute top-1/2 -right-3 w-6 h-6 border-2 border-[#E6E08A]/20 rounded-full transition-all duration-1000 delay-1400 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`} 
              />
              <div 
                className={`absolute bottom-1/4 left-0 w-4 h-4 bg-[#2F7D76]/10 rounded-full blur-sm transition-all duration-1000 delay-1500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} 
              />
            </div>
          </div>
        </div>

        {/* Bottom accent with brand colors - scales in */}
        <div 
          className={`mt-20 flex justify-center transition-all duration-1500 delay-1600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2F7D76]/30 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-[#E6E08A]/40" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2F7D76]/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom gradient line - slides in from left */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76]/30 to-transparent transition-all duration-1500 delay-1800 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default CoreValues;