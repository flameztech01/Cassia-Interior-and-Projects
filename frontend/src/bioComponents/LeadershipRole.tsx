import { useState, useEffect, useRef } from "react";
import { 
  Briefcase, 
  Target, 
  ClipboardList, 
  Users, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const LeadershipRole = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const responsibilities = [
    {
      icon: Briefcase,
      title: "Organizational Leadership",
      description: "Steering the strategic direction of Cassia Interiors & Projects, fostering a culture of excellence and innovation across all operations."
    },
    {
      icon: Target,
      title: "Finishing Strategy & Implementation",
      description: "Developing and overseeing precision finishing protocols that define the brand's signature quality and attention to detail."
    },
    {
      icon: ClipboardList,
      title: "Project Planning & Supervision",
      description: "End-to-end oversight of project timelines, resource allocation, and quality control to ensure flawless execution."
    },
    {
      icon: Users,
      title: "Client Advisory & Consultation",
      description: "Serving as the principal advisor for high-profile clients, translating visions into actionable design strategies."
    },
    {
      icon: CheckCircle,
      title: "Interior Design Delivery Standards",
      description: "Establishing and maintaining rigorous quality benchmarks that distinguish Cassia's work in every delivered space."
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
      id="leadership"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Executive pattern - subtle lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(197,165,114,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 100%'
          }} />
        </div>

        {/* Gold gradient orbs - executive presence */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#C5A572]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#C5A572]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div 
            className={`flex justify-center mb-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#C5A572]/40" />
              <span className="text-[#C5A572] text-sm tracking-[0.3em] uppercase">
                Executive Leadership
              </span>
              <div className="w-12 h-px bg-[#C5A572]/40" />
            </div>
          </div>

          {/* Role Title - Prominently Displayed */}
          <div 
            className={`mb-4 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">
              Executive Director
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-[#C5A572]/40" />
              <span className="text-[#C5A572] text-xl md:text-2xl font-light">
                Cassia Interiors & Projects
              </span>
              <span className="w-16 h-px bg-[#C5A572]/40" />
            </div>
          </div>

          {/* Leadership Quote/Philosophy */}
          <p 
            className={`text-white/50 max-w-2xl mx-auto italic transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            "Setting the standard for precision finishing and design excellence across every project"
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {responsibilities.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Card Design - Executive Style */}
                <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#C5A572]/40 transition-all duration-500 h-full overflow-hidden">
                  
                  {/* Executive corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-[#C5A572] to-transparent" />
                    <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#C5A572] to-transparent" />
                  </div>

                  {/* Icon with executive treatment */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-[#C5A572] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-[#C5A572]/20 to-transparent flex items-center justify-center border border-[#C5A572]/30 group-hover:border-[#C5A572] group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-6 h-6 text-[#C5A572] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#C5A572] transition-colors duration-500">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {item.description}
                  </p>

                  {/* Subtle executive line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C5A572] to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section - Cassia Brand Statement */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-800 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Briefcase className="w-5 h-5 text-[#C5A572]" />
            <span className="text-white/70 text-sm tracking-wide">
              Leading Cassia Interiors & Projects with precision and purpose since 2015
            </span>
            <ArrowRight className="w-4 h-4 text-[#C5A572] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Decorative executive seal */}
        <div 
          className={`absolute -bottom-10 -right-10 w-40 h-40 opacity-5 transition-all duration-1500 delay-1000 ${
            isVisible ? 'opacity-5 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="w-full h-full rounded-full border-4 border-[#C5A572]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#C5A572] text-xs font-bold transform rotate-12">EXECUTIVE</span>
          </div>
        </div>
      </div>

      {/* Side executive lines */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C5A572]/40 to-transparent transition-all duration-1500 delay-900 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C5A572]/40 to-transparent transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Bottom gradient line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A572]/50 to-transparent transition-opacity duration-1500 delay-1100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default LeadershipRole;