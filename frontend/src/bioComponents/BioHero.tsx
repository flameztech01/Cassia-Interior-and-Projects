import { useState, useEffect, useRef } from "react";

const BioHero = () => {
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-20 flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Luxury background with subtle pattern */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Sophisticated geometric pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(246,238,153,0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(246,238,153,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Elegant gold gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#f6ee99]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#f6ee99]/5 rounded-full blur-3xl" />
        
        {/* Light leak effect */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#f6ee99]/10 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20">
          
          {/* LEFT COLUMN - Text Content - This comes FIRST on mobile */}
          <div className="text-left order-1">
            {/* Name with elegant animation */}
            <h1 className="mb-4">
              <span 
                className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-1 transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Comfort
              </span>
              <span 
                className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f6ee99] transition-all duration-1000 delay-200 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Samson
              </span>
            </h1>

            {/* Titles - staggered animation */}
            <div className="space-y-3 mb-6">
              <p 
                className={`text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed transition-all duration-1000 delay-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Finishing Expert | Interior Designer | Project Management Professional
              </p>
              
              <div 
                className={`flex items-center gap-3 transition-all duration-1000 delay-400 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <span className="w-8 h-px bg-[#f6ee99]/60" />
                <p className="text-sm sm:text-base text-[#f6ee99] tracking-wide">
                  Executive Director, Cassia Interiors & Projects
                </p>
              </div>
            </div>

            {/* Short intro paragraph */}
            <p 
              className={`text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-xl transition-all duration-1000 delay-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              With over a decade of experience transforming spaces through meticulous finishing and design, 
              I lead Cassia Interiors & Projects in delivering excellence across residential, commercial, 
              and hospitality environments.
            </p>

            {/* CTA Buttons - Teal buttons from Hero.tsx */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#3E7B73] text-white font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#2C5A54] text-sm sm:text-base"
              >
                <span className="relative z-10">View Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#3E7B73] text-[#3E7B73] font-medium tracking-wide bg-transparent hover:bg-[#3E7B73] hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Contact
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Professional Portrait - This comes SECOND on mobile */}
          <div className="relative flex justify-center lg:justify-end order-2 mt-4 sm:mt-6 lg:mt-0">
            {/* Image container with luxury framing */}
            <div 
              className={`relative transition-all duration-1000 delay-400 transform ${
                isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'
              }`}
            >
              {/* Decorative frames */}
              <div className="absolute -inset-4 border border-[#f6ee99]/20 rounded-[2rem] transition-all duration-500 hover:border-[#f6ee99]/40" />
              <div className="absolute -inset-2 border border-white/10 rounded-[2rem] transition-all duration-500" />
              
              {/* Main image - FULL COLOR */}
              <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] md:w-[340px] md:h-[420px] lg:w-[420px] lg:h-[520px] overflow-hidden rounded-[2rem] shadow-2xl mx-auto">
                <img
                  src="/comfortSamson.jpg" 
                  alt="Comfort Samson - Executive Director, Cassia Interiors & Projects"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Minimal gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
                
                {/* Gold accent corners */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 sm:w-16 h-10 sm:h-16 border-t border-r border-[#f6ee99]/60" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-10 sm:w-16 h-10 sm:h-16 border-b border-l border-[#f6ee99]/60" />
              </div>

              {/* Floating badge with role - positioned for mobile */}
              <div 
                className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 sm:left-0 sm:-translate-x-0 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#f6ee99]/30 px-4 sm:px-5 py-2 sm:py-3 rounded-lg whitespace-nowrap transition-all duration-1000 delay-800 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p className="text-white/90 text-xs sm:text-sm flex items-center gap-2">
                  <span className="text-[#f6ee99] text-lg sm:text-xl">✦</span>
                  <span className="font-light">Executive Director</span>
                </p>
                <p className="text-[#f6ee99]/60 text-[10px] sm:text-xs mt-1 tracking-wide">
                  Cassia Interiors & Projects
                </p>
              </div>

              {/* Experience badge - positioned for mobile */}
              <div 
                className={`absolute -top-5 right-1/2 transform translate-x-1/2 sm:right-0 sm:translate-x-0 bg-[#f6ee99] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-xl transition-all duration-1000 delay-900 transform ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-90'
                }`}
              >
                <p className="text-[#0A0A0A] text-lg sm:text-xl font-light">10+</p>
                <p className="text-[#0A0A0A]/70 text-[8px] sm:text-[10px] tracking-wide">Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-50' : 'opacity-0'
        }`}
      >
        <span className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em]">DISCOVER MORE</span>
        <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-[#f6ee99] to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default BioHero;