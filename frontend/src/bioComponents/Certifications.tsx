import { useState, useEffect, useRef } from "react";
import { Award, BadgeCheck, Scroll, Star, Medal, BookOpen } from "lucide-react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    {
      icon: Award,
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute (PMI)",
      year: "2018",
      description: "Globally recognized certification demonstrating expertise in project management methodologies, leadership, and strategic alignment.",
      featured: true,
      credentialId: "PMP-1829456"
    },
    {
      icon: Scroll,
      title: "Interior Design Certification",
      issuer: "Simpli School of Interiors",
      year: "2016",
      description: "Comprehensive training in interior design principles, spatial planning, color theory, and material specification.",
      featured: true,
      credentialId: "IDC-2016-3421"
    },
    {
      icon: Medal,
      title: "Certified Finishing Specialist",
      issuer: "Interior Finishing Guild",
      year: "2019",
      description: "Advanced certification in precision finishing techniques, material selection, and quality control standards.",
      featured: false
    },
    {
      icon: BookOpen,
      title: "Sustainable Design Professional",
      issuer: "Green Building Council",
      year: "2020",
      description: "Specialized training in eco-friendly materials, energy-efficient design, and sustainable construction practices.",
      featured: false
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
      id="certifications"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Subtle pattern - certificate-like texture - updated to #f6ee99 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(246,238,153,0.2) 0px, rgba(246,238,153,0.2) 1px, transparent 1px, transparent 20px)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Gold gradient orbs - updated to #f6ee99 */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#f6ee99]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#f6ee99]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header - updated to #f6ee99 */}
        <div className="text-center mb-16">
          <div 
            className={`flex justify-center mb-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#f6ee99]/40" />
              <span className="text-[#f6ee99] text-sm tracking-[0.3em] uppercase">
                Credentials
              </span>
              <div className="w-12 h-px bg-[#f6ee99]/40" />
            </div>
          </div>

          <h2 
            className={`text-4xl md:text-5xl font-light text-white mb-4 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Professional <span className="text-[#f6ee99]">Certifications</span>
          </h2>

          <p 
            className={`text-white/60 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Industry-recognized qualifications that validate expertise and commitment to excellence
          </p>
        </div>

        {/* Featured Certifications - Primary Cards - updated to #f6ee99 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {certifications.slice(0, 2).map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-100'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {/* Certificate-style card - updated to #f6ee99 */}
                <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border-2 border-[#f6ee99]/20 hover:border-[#f6ee99]/60 transition-all duration-500 overflow-hidden">
                  
                  {/* Decorative certificate border pattern - updated to #f6ee99 */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-[#f6ee99]/40" />
                    <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#f6ee99]/40" />
                    <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#f6ee99]/40" />
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-[#f6ee99]/40" />
                  </div>

                  {/* Gold seal/stamp effect - updated to #f6ee99 */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="w-20 h-20 rounded-full border-4 border-[#f6ee99]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#f6ee99] text-xs font-bold transform -rotate-12">SEAL</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon and Year - updated to #f6ee99 */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#f6ee99] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#f6ee99] to-[#d4c27c] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-10 h-10 text-[#0A0A0A]" />
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-4 py-1 bg-[#f6ee99]/20 border border-[#f6ee99]/30 rounded-full text-[#f6ee99] text-sm">
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    {/* Title and Issuer - updated to #f6ee99 */}
                    <h3 className="text-2xl font-light text-white mb-2 group-hover:text-[#f6ee99] transition-colors duration-500">
                      {cert.title}
                    </h3>
                    <p className="text-[#f6ee99] text-lg mb-4 font-light">
                      {cert.issuer}
                    </p>
                    
                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-4 group-hover:text-white/70 transition-colors duration-500">
                      {cert.description}
                    </p>

                    {/* Credential ID (if available) - updated to #f6ee99 */}
                    {cert.credentialId && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <BadgeCheck className="w-3 h-3 text-[#f6ee99]" />
                        <span className="text-white/40 text-xs font-mono">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom accent line - updated to #f6ee99 */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f6ee99] to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Certifications - Secondary Cards - updated to #f6ee99 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.slice(2).map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#f6ee99]/30 transition-all duration-500 overflow-hidden">
                  
                  {/* Content */}
                  <div className="relative flex gap-4">
                    {/* Icon - updated to #f6ee99 */}
                    <div className="relative flex-shrink-0">
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#f6ee99]/20 to-transparent flex items-center justify-center border border-[#f6ee99]/30 group-hover:border-[#f6ee99]/60 transition-all duration-500">
                        <Icon className="w-6 h-6 text-[#f6ee99] group-hover:text-white transition-colors duration-500" />
                      </div>
                      {/* Year badge - updated to #f6ee99 */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#f6ee99] flex items-center justify-center text-[#0A0A0A] text-xs font-medium border-2 border-[#0A0A0A]">
                        {cert.year.slice(-2)}
                      </div>
                    </div>

                    {/* Text - updated to #f6ee99 */}
                    <div className="flex-1">
                      <h4 className="text-lg font-light text-white mb-1 group-hover:text-[#f6ee99] transition-colors duration-500">
                        {cert.title}
                      </h4>
                      <p className="text-[#f6ee99]/80 text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-white/40 text-xs leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner - updated to #f6ee99 */}
                  <div className="absolute top-0 right-0 w-12 h-12">
                    <div className="absolute top-0 right-0 w-6 h-px bg-gradient-to-l from-[#f6ee99]/50 to-transparent" />
                    <div className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-[#f6ee99]/50 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative elements - updated to #f6ee99 */}
        <div 
          className={`mt-16 flex flex-col items-center transition-all duration-1000 delay-1100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <Star className="w-4 h-4 text-[#f6ee99]" />
            <Star className="w-4 h-4 text-[#f6ee99]" />
            <Star className="w-4 h-4 text-[#f6ee99]" />
          </div>
          <p className="text-white/30 text-xs tracking-[0.2em] uppercase">
            Verified Credentials • Industry Recognized
          </p>
        </div>
      </div>

      {/* Side decorative lines - updated to #f6ee99 */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#f6ee99]/30 to-transparent transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#f6ee99]/30 to-transparent transition-all duration-1500 delay-1100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Bottom gradient line - updated to #f6ee99 */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6ee99]/40 to-transparent transition-opacity duration-1500 delay-1200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default Certifications;