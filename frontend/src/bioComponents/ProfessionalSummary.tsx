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
        
        {/* Elegant gold pattern overlay - updated to #f6ee99 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(246,238,153,0.3) 0px, rgba(246,238,153,0.3) 1px, transparent 1px, transparent 30px)
            `,
            backgroundSize: '42px 42px'
          }} />
        </div>

        {/* Luxurious radial gradient accents - updated to #f6ee99 */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#f6ee99]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#f6ee99]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section label - updated to #f6ee99 */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#f6ee99]/40" />
            <span className="text-[#f6ee99] text-sm tracking-[0.3em] uppercase">
              Professional Biography
            </span>
            <div className="w-12 h-px bg-[#f6ee99]/40" />
          </div>
        </div>

        {/* Main Content - Elegant typography */}
        <div className="space-y-8 text-center">
          {/* Opening quote mark - updated to #f6ee99 */}
          <div 
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="text-6xl text-[#f6ee99]/30 font-serif">"</span>
          </div>

          {/* Biography Paragraph - Broken into segments for readability */}
          <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            
            {/* Experience - updated highlights to #f6ee99 */}
            <p 
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              With over <span className="text-[#f6ee99] font-medium">11 years of experience</span> in the interior design and construction industry, 
              Comfort Samson has established herself as a distinguished authority in finishing and spatial development. 
              Her journey began with a simple observation: that the true essence of a space lies in its details.
            </p>

            {/* Specialization - updated highlights to #f6ee99 */}
            <p 
              className={`transition-all duration-1000 delay-400 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Specializing in <span className="text-[#f6ee99] font-medium">finishing and spatial development</span>, Comfort brings an 
              unparalleled eye for precision to every project. She understands that finishing is not merely the final 
              layer—it is the signature of quality, the hallmark of craftsmanship that transforms ordinary structures 
              into extraordinary environments. Her expertise spans residential sanctuaries, commercial & 
              corporate spaces, and hospitality destinations.
            </p>

            {/* Philosophy - updated highlights to #f6ee99 */}
            <p 
              className={`transition-all duration-1000 delay-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Her philosophy is rooted in the belief that spaces should do more than exist—they should function, 
              inspire, and endure. Comfort approaches each project with an <span className="text-[#f6ee99] font-medium">architect's precision and an artist's sensibility</span>, 
              ensuring that every line is clean, every surface flawless, and every material choice intentional. 
              She transforms structures into functional spaces that tell stories and evoke emotion.
            </p>

            {/* Role at Cassia - updated highlights to #f6ee99 */}
            <p 
              className={`transition-all duration-1000 delay-600 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              As <span className="text-[#f6ee99] font-medium">Executive Director of Cassia Interiors & Projects, </span> Comfort leads a team dedicated to 
              excellence in every detail. Under her guidance, the firm has become synonymous with precision finishing, 
              delivering projects that exceed client expectations across residential, commercial, corporate, and hospitality sectors.
              Her approach prioritizes spatial functionality, user wellbeing, material intelligence, and disciplined execution standards.
            </p>
            <p>
              Comfort holds <span  className="text-[#f6ee99] font-medium">professional certifications in Interior Design and Project Management,</span>  reinforcing her 
              ability to deliver complex projects with a balance of creative vision and operational precision. She holds 
              a Bachelor of Science (B.Sc.) in Biochemistry from Nasarawa State University, Keffi.
            </p>
            <p>
              Beyond <span className="text-[#f6ee99] font-medium">project delivery,</span>  she is deeply invested in advancing finishing 
              awareness within the built environment industry. She actively contributes to professional knowledge sharing, 
              homeowner education, and industry conversations focused on improving finishing standards and spatial 
              performance across modern interiors.
            </p>
          </div>

          {/* Closing quote mark - updated to #f6ee99 */}
          <div 
            className={`transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="text-6xl text-[#f6ee99]/30 font-serif">"</span>
          </div>

          {/* Elegant signature line - updated to #f6ee99 */}
          <div 
            className={`pt-8 flex flex-col items-center transition-all duration-1000 delay-800 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#f6ee99] to-transparent mb-4" />
            <p className="text-white/40 text-sm tracking-[0.3em] uppercase">
              — Precision in Every Detail —
            </p>
          </div>
        </div>

        {/* Decorative elements - subtle gold accents - updated to #f6ee99 */}
        <div 
          className={`absolute top-20 left-10 w-32 h-32 border border-[#f6ee99]/10 rounded-full transition-all duration-1500 delay-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
        <div 
          className={`absolute bottom-20 right-10 w-48 h-48 border border-[#f6ee99]/10 rounded-full transition-all duration-1500 delay-1200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
      </div>

      {/* Bottom gradient line - updated to #f6ee99 */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6ee99]/40 to-transparent transition-opacity duration-1500 delay-1400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default ProfessionalSummary;