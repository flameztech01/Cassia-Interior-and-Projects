import { useState, useEffect, useRef } from "react";
import { 
  Calendar, 
  Home, 
  Building, 
  Bath, 
  GitBranch,
  Award
} from "lucide-react";

const ProfessionalExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experienceItems = [
    {
      icon: Calendar,
      value: "11+ Years",
      label: "Interior Design Practice",
      description: "Comprehensive experience across residential, commercial, and hospitality sectors",
      highlight: true
    },
    {
      icon: Award,
      value: "6+ Years",
      label: "Interior Finishing Specialization",
      description: "Focused expertise in precision finishing and spatial completion",
      highlight: true
    },
    {
      icon: Home,
      value: "50+",
      label: "Residential Interior Projects",
      description: "Luxury homes, apartments, and private residences",
      highlight: false
    },
    {
      icon: Building,
      value: "25+",
      label: "Commercial Space Remodeling",
      description: "Office spaces, retail environments, and corporate interiors",
      highlight: false
    },
    {
      icon: Bath,
      value: "30+",
      label: "Bathroom & Spatial Upgrade Projects",
      description: "Complete bathroom renovations and spatial transformations",
      highlight: false
    },
    {
      icon: GitBranch,
      value: "40+",
      label: "Interior Project Coordination",
      description: "End-to-end project management and team coordination",
      highlight: false
    }
  ];

  const milestones = [
    { year: "2015", event: "Founded Cassia Interiors & Projects" },
    { year: "2018", event: "Expanded to Commercial Projects" },
    { year: "2020", event: "Launched Finishing Specialization" },
    { year: "2023", event: "50+ Projects Completed" },
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
      id="experience"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Timeline pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent" />
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
                Professional Journey
              </span>
              <div className="w-12 h-px bg-[#C5A572]/40" />
            </div>
          </div>

          <h2 
            className={`text-4xl md:text-5xl font-light text-white mb-4 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Experience & <span className="text-[#C5A572]">Milestones</span>
          </h2>

          <p 
            className={`text-white/60 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            A track record of excellence across diverse project types and scales
          </p>
        </div>

        {/* Stats Grid - First Row (Highlighted Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {experienceItems.slice(0, 2).map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Highlighted Card Design */}
                <div className="relative bg-gradient-to-br from-[#C5A572]/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#C5A572]/30 hover:border-[#C5A572] transition-all duration-500 overflow-hidden">
                  
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C5A572]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Content */}
                  <div className="relative flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#C5A572] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#C5A572] to-[#B08F5C] flex items-center justify-center shadow-2xl">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <div className="text-4xl md:text-5xl font-light text-[#C5A572] mb-2 group-hover:scale-105 transition-transform duration-500 origin-left">
                        {item.value}
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        {item.label}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-[#C5A572] to-transparent" />
                    <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-[#C5A572] to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Grid - Second Row (Regular Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experienceItems.slice(2).map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                {/* Regular Card Design */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#C5A572]/30 transition-all duration-500 h-full overflow-hidden">
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#C5A572]/20 to-transparent flex items-center justify-center border border-[#C5A572]/30 group-hover:border-[#C5A572]/60 transition-all duration-500">
                      <Icon className="w-6 h-6 text-[#C5A572] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-3xl font-light text-[#C5A572] mb-1 group-hover:scale-105 transition-transform duration-500 origin-left">
                    {item.value}
                  </div>
                  <h3 className="text-base font-medium text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C5A572] to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="relative mt-20">
          {/* Timeline header */}
          <div 
            className={`text-center mb-12 transition-all duration-1000 delay-800 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-light text-white mb-2">
              Career <span className="text-[#C5A572]">Timeline</span>
            </h3>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto" />
          </div>

          {/* Timeline items */}
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#C5A572]/40 to-transparent" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 150}ms` }}
                >
                  {/* Timeline item - alternating left/right */}
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content side */}
                    <div className="w-1/2 px-8">
                      <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="inline-block">
                          <span className="text-2xl font-light text-[#C5A572]">
                            {milestone.year}
                          </span>
                          <div className={`w-full h-px bg-gradient-to-r ${index % 2 === 0 ? 'from-[#C5A572] to-transparent' : 'from-transparent to-[#C5A572]'} mt-1`} />
                          <p className="text-white/70 mt-2 text-base">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="relative flex items-center justify-center w-8 h-8">
                      <div className="absolute w-4 h-4 rounded-full bg-[#C5A572] animate-pulse" />
                      <div className="absolute w-8 h-8 rounded-full border border-[#C5A572]/30" />
                    </div>

                    {/* Empty side for spacing */}
                    <div className="w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div 
          className={`mt-16 flex justify-center transition-all duration-1000 delay-1400 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-white/30 text-sm tracking-[0.2em]">PRECISION</span>
            <span className="text-[#C5A572] text-xl">✦</span>
            <span className="text-white/30 text-sm tracking-[0.2em]">EXCELLENCE</span>
            <span className="text-[#C5A572] text-xl">✦</span>
            <span className="text-white/30 text-sm tracking-[0.2em]">DELIVERY</span>
          </div>
        </div>
      </div>

      {/* Side decorative lines */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent transition-all duration-1500 delay-1200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent transition-all duration-1500 delay-1300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Bottom gradient line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A572]/40 to-transparent transition-opacity duration-1500 delay-1500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default ProfessionalExperience;