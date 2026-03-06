import { useState, useEffect, useRef } from "react";

const BrandManifesto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const bullets = [
    "A commitment to excellence.",
    "A commitment to detail.",
    "A commitment to creating spaces that reflect the highest expression of craftsmanship.",
    "We champion the art of finishing because we know it is the difference between ordinary and unforgettable.",
    "Every project is a canvas. Every detail is a signature. And every space we touch becomes a testament to quality, sophistication, and intentional design.",
  ];

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
      id="brand-manifesto" 
      className="relative overflow-hidden py-28 md:py-36"
      style={{ backgroundColor: '#222121' }}
    >
      {/* Sophisticated brand-colored background elements - fade in and scale */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-20 right-20 w-[600px] h-[600px] bg-[#2F7D76]/10 rounded-full blur-3xl animate-pulse transition-all duration-1500 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
        <div 
          className={`absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1500 delay-200 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
      </div>

      {/* Elegant geometric pattern with brand colors - fades in */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1500 delay-400 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`} 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${'#2F7D76'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Refined gradient overlays - fade in */}
      <div className={`absolute inset-0 transition-opacity duration-1500 delay-600 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#222121] via-transparent to-[#222121]/50" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#2F7D76]/5 to-transparent" />
      </div>

      {/* Decorative brand color lines - slide in */}
      <div 
        className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent transition-all duration-1500 delay-800 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} 
        style={{ transformOrigin: 'left' }}
      />
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} 
        style={{ transformOrigin: 'right' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* LEFT: Content with luxury typography */}
          <div className="relative">
            {/* Elegant section marker with brand colors - slides up */}
            <div 
              className={`mb-10 relative transition-all duration-1000 delay-400 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#2F7D76]/40">
                Our Manifesto
              </span>
            </div>

            {/* Heading with refined hierarchy - slides up with staggered children */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              <span 
                className={`inline-block transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Our work is a
              </span>
              <span className="block font-medium text-[#E6E08A] mt-3 relative inline-block">
                <span 
                  className={`relative inline-block transition-all duration-1000 delay-600 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  commitment
                </span>
                <span 
                  className={`absolute -bottom-3 left-0 w-24 h-px bg-[#E6E08A]/40 transition-all duration-1000 delay-800 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </h2>

            {/* Bullet points - luxury styling with staggered animations */}
            <div className="mt-16 space-y-8">
              {bullets.map((text, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-5 group transition-all duration-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${700 + idx * 150}ms` }}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-7 h-7 rounded-full border border-[#2F7D76]/30 flex items-center justify-center group-hover:border-[#2F7D76] transition-all duration-500">
                      <div className="w-2 h-2 rounded-full bg-[#2F7D76] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Decorative line connecting bullets */}
                    {idx < bullets.length - 1 && (
                      <div 
                        className={`absolute top-7 left-3.5 w-px h-12 bg-gradient-to-b from-[#2F7D76]/30 to-transparent transition-all duration-1000 ${
                          isVisible ? 'scale-y-100' : 'scale-y-0'
                        }`} 
                        style={{ transformOrigin: 'top', transitionDelay: `${800 + idx * 150}ms` }}
                      />
                    )}
                  </div>
                  <p className="text-xl text-white/60 leading-relaxed flex-1 font-light group-hover:text-white/80 transition-colors duration-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Elegant quote with brand colors - slides up */}
            <div 
              className={`mt-16 relative transition-all duration-1000 delay-1200 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {/* Decorative quote marks */}
              <div className="absolute -left-4 -top-6 text-8xl text-[#2F7D76]/20 font-serif">"</div>
              <div className="absolute -right-4 -bottom-10 text-8xl text-[#E6E08A]/20 font-serif">"</div>
              
              <p className="relative text-2xl md:text-3xl text-white font-light pl-8 pr-8 italic">
                Where finishing becomes an experience…
              </p>
              
              {/* Brand color accent line - scales in */}
              <div 
                className={`mt-6 ml-8 w-16 h-px bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] transition-all duration-1000 delay-1300 ${
                  isVisible ? 'scale-x-100' : 'scale-x-0'
                }`} 
                style={{ transformOrigin: 'left' }}
              />
            </div>

            {/* Refined tags with brand colors - slide up staggered */}
            <div className="mt-16 flex flex-wrap gap-4">
              {["Precision", "Craftsmanship", "Integrity", "Elegance"].map((tag, index) => (
                <span
                  key={tag}
                  className={`px-6 py-3 text-sm text-white/60 border border-white/10 rounded-full hover:border-[#2F7D76] hover:text-white hover:bg-[#2F7D76]/10 transition-all duration-500 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1400 + index * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Decorative brand color dot - scales in */}
            <div 
              className={`absolute -left-10 bottom-0 w-20 h-20 border border-[#2F7D76]/20 rounded-full transition-all duration-1500 delay-1800 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`} 
            />
          </div>

          {/* RIGHT: Elegant image composition */}
          <div className="relative h-[700px] flex items-center justify-center">
            {/* Main architectural image - large format with luxury framing */}
            <div 
              className={`absolute top-0 right-0 w-[450px] h-[550px] rounded-[2rem] overflow-hidden shadow-2xl group transition-all duration-1000 delay-600 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
            >
              {/* Image frame with brand color border */}
              <div className="absolute inset-0 border border-[#2F7D76]/20 rounded-[2rem] z-10 pointer-events-none" />
              <img
                src="/manifesto-1.jpg"
                alt="Interior finishing"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
              />
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#222121]/60 via-[#222121]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Brand color accent - slides in from left */}
              <div 
                className={`absolute bottom-6 left-6 w-12 h-1 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] transition-all duration-1000 delay-800 ${
                  isVisible ? 'scale-x-100' : 'scale-x-0'
                }`} 
                style={{ transformOrigin: 'left' }}
              />
            </div>

            {/* Secondary image - overlapping composition with luxury treatment */}
            <div 
              className={`absolute bottom-0 left-0 w-[380px] h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#222121] group transition-all duration-1000 delay-800 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              <div className="absolute inset-0 border border-[#E6E08A]/20 rounded-[2rem] z-10 pointer-events-none" />
              <img
                src="/manifesto-2.jpg"
                alt="Luxury interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
              />
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#222121]/40 via-transparent to-[#222121]/60" />
              
              {/* Brand color accent - slides in from right */}
              <div 
                className={`absolute top-6 right-6 w-12 h-1 bg-gradient-to-r from-[#E6E08A] to-[#2F7D76] transition-all duration-1000 delay-900 ${
                  isVisible ? 'scale-x-100' : 'scale-x-0'
                }`} 
                style={{ transformOrigin: 'right' }}
              />
            </div>

            {/* Minimalist geometric accents with brand colors - scale and fade */}
            <div 
              className={`absolute -bottom-12 -right-12 w-64 h-64 bg-[#2F7D76]/10 rounded-[3rem] -z-10 rotate-12 transition-all duration-1500 delay-1000 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`} 
            />
            <div 
              className={`absolute top-32 left-0 w-40 h-40 border-2 border-[#E6E08A]/20 rounded-full -z-10 transition-all duration-1500 delay-1100 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`} 
            />
            
            {/* Additional decorative elements */}
            <div 
              className={`absolute top-1/2 -right-8 w-16 h-16 border border-[#2F7D76]/30 rounded-full transition-all duration-1000 delay-1200 transform ${
                isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`} 
            />
            <div 
              className={`absolute bottom-1/4 left-10 w-8 h-8 bg-[#E6E08A]/20 rounded-full blur-md transition-all duration-1000 delay-1300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} 
            />

            {/* Floating badge - refined with brand colors - slides up */}
            <div 
              className={`absolute top-1/3 -left-6 transform -translate-y-1/2 transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              <div className="bg-[#222121]/50 backdrop-blur-md px-6 py-4 rounded-xl border border-[#2F7D76]/30 shadow-2xl">
                <p className="text-white/90 text-sm tracking-wide flex items-center gap-2">
                  <span className="text-[#E6E08A]">✦</span> 
                  <span className="text-white/60">Since</span> 
                  <span className="text-[#2F7D76] font-medium">2015</span>
                </p>
              </div>
            </div>

            {/* Brand color corner accents - fade in */}
            <div 
              className={`absolute top-10 right-10 w-20 h-20 border-t border-r border-[#2F7D76]/30 transition-opacity duration-1000 delay-1400 ${
                isVisible ? 'opacity-50' : 'opacity-0'
              }`} 
            />
            <div 
              className={`absolute bottom-10 left-10 w-20 h-20 border-b border-l border-[#E6E08A]/30 transition-opacity duration-1000 delay-1500 ${
                isVisible ? 'opacity-50' : 'opacity-0'
              }`} 
            />
          </div>
        </div>
      </div>

      {/* Bottom decorative element with brand colors - fades in */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#222121] to-transparent pointer-events-none transition-opacity duration-1500 delay-1600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default BrandManifesto;