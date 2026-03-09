import { useState, useEffect, useRef } from "react";

// Icons for each service
const DesignIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const FinishingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16v16H4V4z" />
    <path d="M8 8h8v8H8z" />
    <path d="M12 12L4 4M20 20l-8-8" />
  </svg>
);

const ResidentialIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const CommercialIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2v20M2 12h20" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
  </svg>
);

const BespokeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2v20M2 7h20M2 17h20" />
    <rect x="2" y="2" width="20" height="20" rx="2" />
  </svg>
);

const CoordinationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const SERVICES = [
  {
    title: "Luxury Interior Design Execution",
    description: "Transform your vision into reality with our comprehensive interior design execution, blending aesthetics with functionality for spaces that inspire.",
    icon: DesignIcon,
    color: "#2F7D76",
    delay: 100
  },
  {
    title: "Finishing Implementation and Mastery",
    description: "Precision-driven finishing that elev every surface—from walls to floors—with flawless execution and premium material selection.",
    icon: FinishingIcon,
    color: "#E6E08A",
    delay: 200
  },
  {
    title: "Remodeling and Specialized Residential Projects",
    description: "Complete residential transformations that reimagine your living spaces, from single rooms to entire home renovations.",
    icon: ResidentialIcon,
    color: "#2F7D76",
    delay: 300
  },
  {
    title: "Commercial Space Development",
    description: "Strategic commercial interiors designed to enhance brand identity, improve workflow, and create memorable client experiences.",
    icon: CommercialIcon,
    color: "#E6E08A",
    delay: 400
  },
  {
    title: "Bathroom and Bespoke Interior Solutions",
    description: "Custom-crafted bathrooms and unique interior elements tailored to your specific style and functional requirements.",
    icon: BespokeIcon,
    color: "#2F7D76",
    delay: 500
  },
  {
    title: "End-to-End Project Coordination and Management",
    description: "Seamless project oversight from concept to completion, ensuring timelines, budgets, and quality standards are met.",
    icon: CoordinationIcon,
    color: "#E6E08A",
    delay: 600
  }
];

const Services = () => {
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
      id="services" 
      className="relative overflow-hidden py-20 md:py-28 lg:py-36"
      style={{ backgroundColor: '#222121' }}
    >
      {/* Sophisticated brand-colored background elements */}
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

      {/* Elegant geometric pattern with brand colors */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1500 delay-400 ${
          isVisible ? 'opacity-5' : 'opacity-0'
        }`} 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${'#E6E08A'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Refined gradient overlays */}
      <div className={`absolute inset-0 transition-opacity duration-1500 delay-600 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#222121] via-[#222121] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#222121] via-[#222121] to-transparent" />
      </div>

      {/* Decorative brand color lines */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 lg:mb-24">
          {/* Section label - slides up */}
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#2F7D76]/40">
              Our Expertise
            </span>
          </div>

          {/* Heading - slides up with staggered children */}
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            <span 
              className={`inline-block transition-all duration-1000 delay-400 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Our
            </span>{' '}
            <span 
              className={`text-[#E6E08A] font-medium inline-block transition-all duration-1000 delay-500 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
              }`}
            >
              Services
            </span>
          </h2>

          {/* Subheading - slides up */}
          <p 
            className={`mt-6 text-white/40 text-lg md:text-xl font-light leading-relaxed transition-all duration-1000 delay-600 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            How we come in to transform your space
          </p>

          {/* Elegant divider - scales in */}
          <div 
            className={`flex items-center justify-center gap-3 mt-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`} 
            style={{ transformOrigin: 'center' }}
          >
            <div className="w-12 h-px bg-[#2F7D76]/40" />
            <div className="w-2 h-2 rounded-full bg-[#E6E08A]/60" />
            <div className="w-12 h-px bg-[#2F7D76]/40" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[${service.color}]/30 transition-all duration-700 hover:-translate-y-2 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${800 + service.delay}ms`,
                  borderColor: isVisible ? `rgba(255,255,255,0.1)` : 'transparent'
                }}
              >
                {/* Decorative corner accent */}
                <div className={`absolute top-3 right-3 w-8 h-8 border-t border-r border-[${service.color}]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon with brand color */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-[${service.color}] rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className={`relative w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[${service.color}]/10 transition-colors duration-500`}>
                    <Icon className={`w-7 h-7 text-[${service.color}] group-hover:scale-110 transition-transform duration-500`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-[#E6E08A] transition-colors duration-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm md:text-base font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[${service.color}] to-[#E6E08A] group-hover:w-full transition-all duration-700`} />

                {/* Decorative element - scales in on hover */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 border border-[#E6E08A]/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 scale-50" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - slides up */}
        <div 
          className={`mt-16 md:mt-20 text-center transition-all duration-1000 delay-1400 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-white/30 text-sm tracking-[0.2em] mb-4">
            READY TO TRANSFORM YOUR SPACE?
          </p>
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('connect');
              if (element) {
                const yOffset = -100;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:border-[#2F7D76] hover:bg-white/5 transition-all duration-500"
          >
            <span className="text-white font-light">Start Your Project</span>
            <span className="text-[#E6E08A] group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Bottom accent with brand colors */}
        <div 
          className={`mt-16 flex justify-center transition-all duration-1500 delay-1600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#E6E08A]/60" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent transition-all duration-1500 delay-1800 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default Services;