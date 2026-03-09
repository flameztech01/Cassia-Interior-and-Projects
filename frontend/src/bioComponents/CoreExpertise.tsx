import { useState, useEffect, useRef } from "react";
import { 
  Brush, 
  Building2, 
  ClipboardCheck, 
  Ruler, 
  LayoutGrid, 
  Target, 
  HeartHandshake 
} from "lucide-react";

const CoreExpertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const expertiseItems = [
    {
      icon: Brush,
      title: "Interior Finishing & Spatial Completion",
      description: "Meticulous attention to every detail, ensuring flawless surfaces and perfect edges that define luxury spaces.",
      color: "from-[#C5A572] to-[#B08F5C]"
    },
    {
      icon: Building2,
      title: "Residential & Commercial Interior Design",
      description: "Creating sophisticated environments for homes, offices, and commercial spaces that balance aesthetics with function.",
      color: "from-[#C5A572] to-[#B08F5C]"
    },
    {
      icon: ClipboardCheck,
      title: "Project Management & Coordination",
      description: "Seamless orchestration of contractors, timelines, and resources to deliver excellence on schedule.",
      color: "from-[#C5A572] to-[#B08F5C]"
    },
    {
      icon: Ruler,
      title: "Material & Finish Specification",
      description: "Expert selection of premium materials and finishes that elevate spaces and ensure lasting quality.",
      color: "from-[#C5A572] to-[#B08F5C]"
    },
    {
      icon: LayoutGrid,
      title: "Functional Space Planning",
      description: "Strategic layout design that optimizes flow, usability, and spatial harmony for everyday living and working.",
      color: "from-[#C5A572] to-[#B08F5C]"
    },
    {
      icon: Target,
      title: "Design Execution Strategy",
      description: "Comprehensive planning from concept to completion, ensuring design integrity throughout the build process.",
      color: "from-[#C5A572] to-[#B08F5C]"
    },
    {
      icon: HeartHandshake,
      title: "Client Experience & Delivery Management",
      description: "Dedicated partnership with clients, ensuring vision alignment and exceeding expectations at every milestone.",
      color: "from-[#C5A572] to-[#B08F5C]"
    }
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
      id="expertise"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30px 30px, rgba(197,165,114,0.2) 1px, transparent 0)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Gold gradient orbs */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#C5A572]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#C5A572]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`flex justify-center mb-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#C5A572]/40" />
              <span className="text-[#C5A572] text-sm tracking-[0.3em] uppercase">
                Core Expertise
              </span>
              <div className="w-12 h-px bg-[#C5A572]/40" />
            </div>
          </div>

          <h2 
            className={`text-4xl md:text-5xl font-light text-white mb-4 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Areas of <span className="text-[#C5A572]">Excellence</span>
          </h2>

          <p 
            className={`text-white/60 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Specialized expertise across the full spectrum of interior design and project delivery
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Card Background with hover effect */}
                <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C5A572]/30 transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#C5A572]/5">
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C5A572]/0 via-[#C5A572]/0 to-[#C5A572]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-[#C5A572]/50 to-transparent group-hover:w-12 transition-all duration-500" />
                    <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#C5A572]/50 to-transparent group-hover:h-12 transition-all duration-500" />
                  </div>

                  {/* Icon with elegant styling */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#C5A572] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#C5A572]/20 to-transparent flex items-center justify-center border border-[#C5A572]/30 group-hover:border-[#C5A572]/60 transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-[#C5A572] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#C5A572] transition-colors duration-500">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {item.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C5A572] to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative elements */}
        <div 
          className={`mt-16 flex justify-center transition-all duration-1000 delay-1200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C5A572]/40" />
            <div className="w-2 h-2 rounded-full bg-[#C5A572]/60" />
            <div className="w-2 h-2 rounded-full bg-[#C5A572]" />
            <div className="w-2 h-2 rounded-full bg-[#C5A572]/60" />
            <div className="w-2 h-2 rounded-full bg-[#C5A572]/40" />
          </div>
        </div>
      </div>

      {/* Side decorative lines */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent transition-all duration-1500 delay-1100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Bottom gradient line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A572]/40 to-transparent transition-opacity duration-1500 delay-1300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default CoreExpertise;