import { useState, useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
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
      id="education"
      className="relative overflow-hidden py-16 md:py-20 bg-[#0A0A0A]"
    >
      {/* Simple, clean background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Very subtle gold line pattern - updated to #f6ee99 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6ee99] to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6ee99] to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Label - Minimal - updated to #f6ee99 */}
        <div 
          className={`flex justify-center mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#f6ee99]/40" />
            <span className="text-[#f6ee99] text-xs tracking-[0.3em] uppercase">
              Academic Background
            </span>
            <div className="w-8 h-px bg-[#f6ee99]/40" />
          </div>
        </div>

        {/* Main Content - Clean Strip */}
        <div 
          className={`relative transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          {/* Card - Simple and Elegant - updated to #f6ee99 */}
          <div className="relative bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#f6ee99]/30 transition-all duration-500 group">
            
            {/* Decorative accent - minimal - updated to #f6ee99 */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-[#f6ee99] to-[#f6ee99]/30 rounded-r-full" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Left side - Degree and Institution - updated to #f6ee99 */}
              <div className="flex items-center gap-4">
                {/* Icon - updated to #f6ee99 */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#f6ee99] blur-md opacity-20" />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#f6ee99]/20 to-transparent flex items-center justify-center border border-[#f6ee99]/30">
                    <GraduationCap className="w-6 h-6 text-[#f6ee99]" />
                  </div>
                </div>

                {/* Text - updated to #f6ee99 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-1">
                    B.Sc. <span className="text-[#f6ee99]">Biochemistry</span>
                  </h3>
                  <div className="flex items-center gap-4 text-white/50">
                    <span className="text-sm">Nasarawa State University, Keffi</span>
                  </div>
                </div>
              </div>

              {/* Right side - Additional details (clean and minimal) */}
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2 text-white/40">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">2008 - 2012</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2 text-white/40">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Keffi, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Hover effect line - updated to #f6ee99 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#f6ee99] to-transparent group-hover:w-full transition-all duration-500" />
          </div>
        </div>

        {/* Very subtle bottom text */}
        <div 
          className={`text-center mt-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <p className="text-white/20 text-xs tracking-[0.2em]">
            FOUNDATIONAL KNOWLEDGE • SCIENTIFIC PRECISION • ANALYTICAL EXCELLENCE
          </p>
        </div>
      </div>

      {/* Simple side lines - updated to #f6ee99 */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#f6ee99]/20 to-transparent transition-all duration-1500 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#f6ee99]/20 to-transparent transition-all duration-1500 delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default Education;