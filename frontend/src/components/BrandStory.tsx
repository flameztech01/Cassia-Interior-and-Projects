import { useState, useEffect, useRef } from "react";

const BrandStory = () => {
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

  const scrollToConnect = () => {
    const el = document.getElementById("connect");
    if (!el) return;
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="brand-story"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Sophisticated background with brand color and pattern */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor: '#3E7B73' }}
      />
      
      {/* Elegant geometric pattern - interior design inspired */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 delay-200 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Marble-like veining pattern for luxury feel */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 delay-400 ${
          isVisible ? 'opacity-[0.15]' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='veins' patternUnits='userSpaceOnUse' width='200' height='200'%3E%3Cpath d='M0 150 Q 50 100, 100 150 T 200 150' stroke='rgba(255,255,255,0.5)' fill='none' stroke-width='0.5' /%3E%3Cpath d='M50 50 Q 100 20, 150 50 T 250 50' stroke='rgba(255,255,255,0.3)' fill='none' stroke-width='0.3' /%3E%3Cpath d='M20 200 Q 80 160, 140 200 T 260 200' stroke='rgba(255,255,255,0.4)' fill='none' stroke-width='0.4' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23veins)' /%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}
      />

      {/* Luxurious geometric shapes - interior design elements */}
      <div className={`absolute inset-0 transition-opacity duration-1000 delay-600 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Large diagonal lines */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute -right-20 top-20 w-64 h-[2px] bg-white/10 transform rotate-45" />
          <div className="absolute -right-32 top-40 w-96 h-[2px] bg-white/10 transform rotate-45" />
          <div className="absolute -right-44 top-60 w-128 h-[2px] bg-white/10 transform rotate-45" />
        </div>
        
        {/* Abstract furniture-inspired shapes */}
        <div className="absolute bottom-40 left-[10%] w-32 h-32 border-2 border-white/10 rounded-full" />
        <div className="absolute top-40 right-[15%] w-24 h-24 border border-white/15 transform rotate-45" />
        
        {/* Interior design details */}
        <svg className="absolute bottom-20 right-[20%] w-48 h-48 opacity-20" viewBox="0 0 100 100">
          <path d="M20,50 L80,50 M50,20 L50,80 M30,30 L70,70 M30,70 L70,30" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Elegant gradient overlays with brand color variations */}
      <div className={`absolute inset-0 transition-opacity duration-1000 delay-800 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
      </div>

      {/* Refined animated elements - softened with brand color */}
      <div className={`absolute top-20 left-10 w-64 h-64 border border-white/15 rounded-full animate-pulse transition-opacity duration-1000 delay-1000 ${
        isVisible ? 'opacity-30' : 'opacity-0'
      }`} />
      <div className={`absolute bottom-20 right-10 w-96 h-96 border border-white/15 rounded-full animate-pulse delay-1000 transition-opacity duration-1000 delay-1200 ${
        isVisible ? 'opacity-20' : 'opacity-0'
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* LEFT: Elegant visual composition */}
          <div className="relative">
            {/* Main image with refined framing */}
            <div className="relative">
              {/* Decorative frames - now with brand color accents */}
              <div 
                className={`absolute -inset-4 border border-white/30 rounded-[2rem] transition-all duration-1000 delay-300 transform ${
                  isVisible ? 'opacity-50 scale-100' : 'opacity-0 scale-95'
                }`} 
              />
              <div 
                className={`absolute -inset-2 border border-white/40 rounded-[2rem] transition-all duration-1000 delay-400 transform ${
                  isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-95'
                }`} 
              />
              
              {/* Main image - slides up with fade */}
              <div 
                className={`relative overflow-hidden rounded-[2rem] transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <img
                  src="/brandStory.jpg"
                  alt="Cassia Interiors - Precision finishing"
                  className="h-[550px] md:h-[650px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Sophisticated gradient overlay - updated with brand color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E7B73]/80 via-transparent to-transparent" />
              </div>

              {/* Secondary image - floating composition - slides in from left */}
              <div 
                className={`absolute -bottom-16 -left-16 w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 transition-all duration-1000 delay-700 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
              >
                <img
                  src="/brandStory2.jpg"
                  alt="Interior detail - Precision craftsmanship"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Refined badge - updated with brand color */}
              <div 
                className={`absolute top-8 right-8 bg-[#3E7B73]/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 transition-all duration-1000 delay-900 transform ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
              >
                <p className="text-white text-sm tracking-[0.3em]">✦ EST. 2015 ✦</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Elegant typography - text remains unchanged */}
          <div className="relative">
            {/* Section label with refined styling - slides up */}
            <div 
              className={`mb-8 inline-block transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="text-white/60 text-sm tracking-[0.3em] uppercase relative pl-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-px before:bg-white/60">
                Our Foundation
              </span>
            </div>

            {/* Main heading with elegant hierarchy - slides up with staggered children */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
              <span 
                className={`inline-block transition-all duration-1000 delay-400 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Precision is
              </span>
              <span className="block font-medium text-white mt-3 relative inline-block">
                <span 
                  className={`relative inline-block transition-all duration-1000 delay-500 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  Our Signature
                </span>
                <span 
                  className={`absolute -bottom-3 left-0 w-24 h-px bg-white/60 transition-all duration-1000 delay-700 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </h2>

            {/* Content with refined spacing and opacity - paragraphs slide up staggered */}
            <div className="mt-12 space-y-8">
              {[
                "Cassia Interiors & Projects began with a simple belief: luxury isn't defined by price — it's defined by precision. After years of working on high-end projects, we noticed a consistent gap: beautiful designs were often compromised by poor finishing.",
                "Lines were uneven. Surfaces were rushed. The final experience lacked the elegance the design intended. Cassia was born to solve this — to perfect details and deliver finishing that elevates the entire space.",
                "What started as a passion has grown into a trusted finishing and interior project brand across residential, commercial, corporate, and hospitality spaces. Our goal is to bring design to life the way it deserves to be experienced."
              ].map((text, index) => (
                <p 
                  key={index}
                  className={`text-lg text-white/70 leading-relaxed font-light transition-all duration-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Sophisticated tags - slide up staggered */}
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Precision Finishing",
                "Clean Edges",
                "Flawless Surfaces",
                "Balanced Palettes",
                "Enduring Materials",
              ].map((tag, index) => (
                <span
                  key={tag}
                  className={`px-5 py-2.5 text-sm text-white/80 border border-white/30 rounded-full hover:border-white/60 hover:text-white transition-all duration-500 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1100 + index * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Elegant button - slides up - UPDATED */}
            <div 
              className={`mt-16 transition-all duration-1000 delay-1600 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <button
                onClick={scrollToConnect}
                className="group relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden transition-all duration-300"
              >
                {/* Button background with hover effect - updated with brand color */}
                <span className="absolute inset-0 border border-white/40 group-hover:border-white/60 transition-all duration-500" />
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
                
                {/* Button content */}
                <span className="relative text-white font-light tracking-wide">Talk to us</span>
                <span className="relative text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
              </button>
            </div>

            {/* Decorative element - fades in and scales */}
            <div 
              className={`absolute -right-20 bottom-0 w-40 h-40 border border-white/20 rounded-full transition-all duration-1000 delay-1800 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`} 
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient line - slides in from left */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1500 delay-2000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default BrandStory;