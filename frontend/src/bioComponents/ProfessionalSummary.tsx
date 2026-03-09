import { useState, useEffect, useRef } from "react";

const ProfessionalSummary = () => {
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
      id="about"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        {/* Base color with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Elegant gold pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(197,165,114,0.3) 0px, rgba(197,165,114,0.3) 1px, transparent 1px, transparent 30px)
            `,
            backgroundSize: '42px 42px'
          }} />
        </div>

        {/* Luxurious radial gradient accents */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#C5A572]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#C5A572]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section label */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#C5A572]/40" />
            <span className="text-[#C5A572] text-sm tracking-[0.3em] uppercase">
              Professional Biography
            </span>
            <div className="w-12 h-px bg-[#C5A572]/40" />
          </div>
        </div>

        {/* Main Content - Elegant typography */}
        <div className="space-y-8 text-center">
          {/* Opening quote mark */}
          <div 
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="text-6xl text-[#C5A572]/30 font-serif">"</span>
          </div>

          {/* Biography Paragraph - Broken into segments for readability */}
          <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            
            {/* Experience */}
            <p 
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              With over <span className="text-[#C5A572] font-medium">11 years of experience</span> in the interior design and construction industry, 
              Comfort Samson has established herself as a distinguished authority in finishing and spatial development. 
              Her journey began with a simple observation: that the true essence of a space lies in its details.
            </p>

            {/* Specialization */}
            <p 
              className={`transition-all duration-1000 delay-400 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Specializing in <span className="text-[#C5A572] font-medium">finishing and spatial development</span>, Comfort brings an 
              unparalleled eye for precision to every project. She understands that finishing is not merely the final 
              layer—it is the signature of quality, the hallmark of craftsmanship that transforms ordinary structures 
              into extraordinary environments. Her expertise spans residential sanctuaries, commercial powerhouses, 
              corporate headquarters, and hospitality destinations.
            </p>

            {/* Philosophy */}
            <p 
              className={`transition-all duration-1000 delay-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Her philosophy is rooted in the belief that spaces should do more than exist—they should function, 
              inspire, and endure. Comfort approaches each project with an <span className="text-[#C5A572] font-medium">architect's precision and an artist's sensibility</span>, 
              ensuring that every line is clean, every surface flawless, and every material choice intentional. 
              She transforms structures into functional spaces that tell stories and evoke emotion.
            </p>

            {/* Role at Cassia */}
            <p 
              className={`transition-all duration-1000 delay-600 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              As <span className="text-[#C5A572] font-medium">Executive Director of Cassia Interiors & Projects</span>, Comfort leads a team dedicated to 
              excellence in every detail. Under her guidance, the firm has become synonymous with precision finishing, 
              delivering projects that exceed client expectations across residential, commercial, corporate, and 
              hospitality sectors. Her leadership ensures that Cassia remains at the forefront of the industry—a 
              trusted name for those who demand nothing less than perfection.
            </p>
          </div>

          {/* Closing quote mark */}
          <div 
            className={`transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="text-6xl text-[#C5A572]/30 font-serif">"</span>
          </div>

          {/* Elegant signature line */}
          <div 
            className={`pt-8 flex flex-col items-center transition-all duration-1000 delay-800 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mb-4" />
            <p className="text-white/40 text-sm tracking-[0.3em] uppercase">
              — Precision in Every Detail —
            </p>
          </div>
        </div>

        {/* Decorative elements - subtle gold accents */}
        <div 
          className={`absolute top-20 left-10 w-32 h-32 border border-[#C5A572]/10 rounded-full transition-all duration-1500 delay-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
        <div 
          className={`absolute bottom-20 right-10 w-48 h-48 border border-[#C5A572]/10 rounded-full transition-all duration-1500 delay-1200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
      </div>

      {/* Bottom gradient line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A572]/40 to-transparent transition-opacity duration-1500 delay-1400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default ProfessionalSummary;