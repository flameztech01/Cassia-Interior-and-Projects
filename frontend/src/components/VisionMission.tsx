import { useState, useEffect, useRef } from "react";

const VisionMission = () => {
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
      id="vision-mission"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Luxury background image with overlay */}
      <div className="absolute inset-0">
        {/* Background image - loads immediately */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/background.jpg')`,
          }}
        />
        
        {/* Sophisticated multi-layer overlay for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Subtle color overlay with brand colors */}
        <div className="absolute inset-0 bg-[#2F7D76]/10 mix-blend-overlay" />
        
        {/* Light leak effect for depth */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#E6E08A]/5 to-transparent" />
        
        {/* Vignette effect for focus */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" />
      </div>

      {/* Sophisticated background texture overlay - fades in */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1500 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`} 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Elegant gradient overlays with brand color - fade in */}
      <div className={`absolute inset-0 transition-opacity duration-1500 delay-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#2F7D76]/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#E6E08A]/20 via-transparent to-transparent" />
      </div>

      {/* Refined animated elements - fade in and scale */}
      <div 
        className={`absolute top-40 left-20 w-72 h-72 border border-[#E6E08A]/20 rounded-full animate-pulse transition-all duration-1500 delay-400 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} 
      />
      <div 
        className={`absolute bottom-40 right-20 w-96 h-96 border border-[#2F7D76]/30 rounded-full animate-pulse delay-1000 transition-all duration-1500 delay-600 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Refined heading with brand colors */}
        <div className="mb-20 text-center">
          {/* Section label - slides up */}
          <div 
            className={`inline-block transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="text-[#E6E08A] text-sm tracking-[0.3em] uppercase relative inline-block px-8 py-2 border border-[#E6E08A]/30 rounded-full backdrop-blur-sm bg-black/20 mb-6">
              Our Purpose
            </span>
          </div>
          
          {/* Main heading - slides up with staggered children */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            <span 
              className={`inline-block transition-all duration-1000 delay-400 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Vision{' '}
            </span>
            <span 
              className={`text-[#E6E08A] font-medium inline-block transition-all duration-1000 delay-500 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
              }`}
            >
              &
            </span>
            <span 
              className={`inline-block transition-all duration-1000 delay-600 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {' '}Mission
            </span>
          </h2>
          
          {/* Elegant divider with brand colors - scales in */}
          <div className={`flex justify-center items-center gap-3 transition-all duration-1000 delay-700 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="w-12 h-px bg-[#E6E08A]/60" />
            <div className="w-2 h-2 rounded-full bg-[#E6E08A]/80" />
            <div className="w-12 h-px bg-[#E6E08A]/60" />
          </div>
        </div>

        {/* Cards - refined layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card - luxury treatment */}
          <div className="group relative">
            {/* Background card with elegant depth - slides in from left */}
            <div 
              className={`relative bg-black/40 backdrop-blur-md rounded-3xl p-12 border border-white/20 hover:border-[#2F7D76]/50 transition-all duration-1000 delay-800 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
              style={{
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(230,224,138,0.1) inset'
              }}
            >
              
              {/* Refined label design with brand colors - slides up */}
              <div 
                className={`absolute -top-6 left-8 transition-all duration-1000 delay-900 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2F7D76] rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <span className="relative block bg-[#2F7D76] text-white px-8 py-3 rounded-full text-sm tracking-[0.2em] font-light shadow-lg">
                    VISION
                  </span>
                </div>
              </div>

              {/* Decorative corner accent - fades in on hover */}
              <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#E6E08A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Content with refined typography - paragraphs slide up staggered */}
              <div className="mt-12 space-y-8">
                {[
                  "To become Africa's leading authority in luxury finishing and interior project execution, setting the benchmark for quality, innovation, and design integrity.",
                  "We envision a world where every space tells a story of precision, artistry, and intentionality, and where Cassia Interiors and Projects stands as the trusted name for enduring elegance and masterful finishing."
                ].map((text, index) => (
                  <p 
                    key={index}
                    className={`text-xl text-white/80 leading-relaxed font-light transition-all duration-1000 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 150}ms` }}
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Subtle brand color accent line - slides in from left */}
              <div 
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F7D76] via-[#E6E08A] to-transparent rounded-b-3xl transition-all duration-1000 delay-1300 ${
                  isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`} 
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>

          {/* Mission Card - luxury treatment */}
          <div className="group relative">
            {/* Background card with elegant depth - slides in from right */}
            <div 
              className={`relative bg-black/40 backdrop-blur-md rounded-3xl p-12 border border-white/20 hover:border-[#E6E08A]/50 transition-all duration-1000 delay-800 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
              style={{
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(47,125,118,0.1) inset'
              }}
            >
              
              {/* Refined label design with brand colors - slides up */}
              <div 
                className={`absolute -top-6 left-8 transition-all duration-1000 delay-900 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E6E08A] rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <span className="relative block bg-[#E6E08A] text-[#1A2A28] px-8 py-3 rounded-full text-sm tracking-[0.2em] font-light shadow-lg">
                    MISSION
                  </span>
                </div>
              </div>

              {/* Decorative corner accent - fades in on hover */}
              <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#2F7D76]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Content with refined typography - paragraphs slide up staggered */}
              <div className="mt-12 space-y-8">
                {[
                  "To elevate everyday spaces into refined, luxurious environments through meticulous finishing, thoughtful design, and uncompromising craftsmanship.",
                  "At Cassia Interiors and Projects, we transform concepts into timeless experiences delivering functional beauty, precision detailing, and superior value for clients who desire excellence in every corner."
                ].map((text, index) => (
                  <p 
                    key={index}
                    className={`text-xl text-white/80 leading-relaxed font-light transition-all duration-1000 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 150}ms` }}
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Subtle brand color accent line - slides in from left */}
              <div 
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E6E08A] via-[#2F7D76] to-transparent rounded-b-3xl transition-all duration-1000 delay-1300 ${
                  isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`} 
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>
        </div>

        {/* Optional: subtle decorative elements with brand colors - fade in */}
        <div 
          className={`absolute -bottom-32 -right-32 w-96 h-96 bg-[#2F7D76]/20 rounded-full blur-3xl -z-10 transition-opacity duration-1500 delay-1400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} 
        />
        <div 
          className={`absolute -top-32 -left-32 w-96 h-96 bg-[#E6E08A]/20 rounded-full blur-3xl -z-10 transition-opacity duration-1500 delay-1400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Brand color accent dots - fade in staggered */}
        <div className="absolute top-1/2 left-0 w-full flex justify-between pointer-events-none -z-5">
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-1000 ${
                index % 2 === 0 ? 'bg-[#2F7D76]/50' : 'bg-[#E6E08A]/50'
              } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ transitionDelay: `${1500 + index * 100}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient line with brand colors - slides in from left */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/60 to-transparent transition-all duration-1500 delay-1800 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default VisionMission;