import { useState, useEffect, useRef } from "react";

const Hero = () => {
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

  const scrollTo = (id: string) => {
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
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background Image - fades in */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Luxury Interior Background"
          className="w-full h-full object-cover transition-opacity duration-1500"
          style={{ opacity: isVisible ? 1 : 0 }}
        />
        {/* Dark transparent overlay - fades in */}
        <div 
          className="absolute inset-0 bg-black/60 transition-opacity duration-1500 delay-200"
          style={{ opacity: isVisible ? 1 : 0 }}
        />
      </div>

      {/* Subtle animated patterns - more sophisticated */}
      <div className={`absolute inset-0 z-1 opacity-20 transition-all duration-1500 delay-400 ${
        isVisible ? 'opacity-20' : 'opacity-0'
      }`}>
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/5 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 blur-2xl" />
      </div>

      {/* Elegant gradient accents - fade in */}
      <div 
        className={`pointer-events-none absolute -top-48 -left-48 h-96 w-96 rounded-full bg-white/5 blur-3xl transition-opacity duration-1500 delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`pointer-events-none absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-white/5 blur-3xl transition-opacity duration-1500 delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Main Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10">
        {/* Main Heading - slides up with staggered children */}
        <h1 className="text-5xl md:text-7xl font-light leading-tight text-white mb-6">
          <span 
            className={`inline-block transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Elevate your space with{' '}
          </span>
          
          <span className="relative inline-block">
            <span 
              className={`text-white font-medium relative z-10 inline-block transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              precision
            </span>
            <span className="absolute -inset-2 bg-white/10 blur-2xl rounded-full" />
          </span>{' '}
          
          <span 
            className={`inline-block transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            and{' '}
          </span>
          
          <span className="relative inline-block">
            <span 
              className={`text-white font-medium relative z-10 inline-block transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              craftsmanship
            </span>
            <span className="absolute -inset-2 bg-white/10 blur-2xl rounded-full" />
          </span>
        </h1>

        {/* Description - slides up */}
        <p 
          className={`text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12 font-light transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Cassia Interiors & Projects transforms structures into refined environments—clean edges, 
          flawless finishes, balanced palettes, and enduring materials.
        </p>

        {/* CTA Buttons - slide in from left and right */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <button
            onClick={() => scrollTo("our-projects")}
            className={`group relative px-8 py-4 bg-white text-[#1a1a1a] font-medium tracking-wide overflow-hidden transition-all duration-1000 delay-800 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>

          <button
            onClick={() => scrollTo("connect")}
            className={`group px-8 py-4 border border-white/30 text-white font-medium tracking-wide backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-1000 delay-900 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            Book a Consultation
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Refined Stats - slide up with staggered children */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "100+", label: "Finishing Details", icon: "✦" },
            { value: "A+", label: "Quality Standard", icon: "✦" },
            { value: "Fast", label: "Project Delivery", icon: "✦" }
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`group transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${1000 + i * 150}ms` }}
            >
              <p className="text-3xl font-light text-white mb-1 relative inline-block">
                {stat.value}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-700" />
              </p>
              <p className="text-white/50 text-xs tracking-wide">{stat.label}</p>
              <span className="text-white/20 text-xs mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Elegant Divider - fades in and grows */}
        <div 
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/0 via-white/30 to-white/0 transition-all duration-1500 delay-1200 ${
            isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`} 
        />
      </div>

      {/* Refined Scroll Indicator - fades in */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-50' : 'opacity-0'
        } hover:opacity-80`}
      >
        <span className="text-white/40 text-xs tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;