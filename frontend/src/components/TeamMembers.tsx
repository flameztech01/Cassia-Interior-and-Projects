import { useState, useEffect, useRef } from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  featured?: boolean;
};

const TEAM: TeamMember[] = [
  {
    name: "Comfort Samson",
    role: "Executive Director",
    image: "/comfortSamson.jpg",
    featured: true,
  },
  {
    name: "Ademosu Adedayo",
    role: "Business Development / Compliance",
    image: "/ademosuAdedayo.jpg",
  },
  {
    name: "Faith A. Osaigbovo",
    role: "Head, Architecture / Design",
    image: "/faithA.jpg",
  },
  {
    name: "Olaleye Ajayi",
    role: "Director, Creativity / Styling",
    image: "/olaleye.jpg",
  },
  {
    name: "Mary Ajoke Ogunjobi",
    role: "Head, Projects & Socials",
    image: "/ajoke.jpg",
  },
];

const TeamMembers = () => {
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

  const featured = TEAM.find((m) => m.featured);
  const others = TEAM.filter((m) => !m.featured);

  return (
    <section 
      ref={sectionRef}
      id="team-members" 
      className="relative overflow-hidden py-28 md:py-36"
      style={{ backgroundColor: '#222121' }}
    >
      {/* Sophisticated brand-colored background elements */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-40 left-20 w-[600px] h-[600px] bg-[#2F7D76]/10 rounded-full blur-3xl animate-pulse transition-all duration-1500 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
        <div 
          className={`absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1500 delay-200 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
      </div>

      {/* Elegant geometric pattern with brand colors */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1500 delay-400 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`} 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${'#2F7D76'} 1px, transparent 1px)`,
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Refined header with brand colors */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="relative">
            {/* Section label - slides up with #f6ee99 color */}
            <div 
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="text-[#f6ee99] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#f6ee99]/40">
                The Team
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-6">
              <span 
                className={`inline-block transition-all duration-1000 delay-400 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                People behind&nbsp;
              </span>
              <span 
                className={`text-[#E6E08A] font-medium inline-block transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                the brand
              </span>
            </h2>
            
            {/* Elegant divider with brand colors */}
            <div 
              className={`flex items-center gap-3 mt-6 transition-all duration-1000 delay-600 ${
                isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} 
              style={{ transformOrigin: 'left' }}
            >
              <div className="w-12 h-px bg-[#2F7D76]/40" />
              <div className="w-2 h-2 rounded-full bg-[#E6E08A]/60" />
              <div className="w-12 h-px bg-[#2F7D76]/40" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Featured Executive Director - luxury redesign */}
          {featured && (
            <div className="lg:col-span-5">
              <div 
                className={`relative bg-white/5 backdrop-blur-sm rounded-[2rem] p-10 border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-1000 delay-800 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
              >
                {/* Elegant badge with brand colors - slides up */}
                <div 
                  className={`absolute -top-4 right-8 transition-all duration-1000 delay-900 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#2F7D76] rounded-full blur-md opacity-50" />
                    <span className="relative block bg-[#2F7D76] text-white text-xs tracking-[0.2em] px-6 py-3 rounded-full">
                      EXECUTIVE DIRECTOR
                    </span>
                  </div>
                </div>

                {/* Decorative corner accents - fade in */}
                <div className={`absolute top-6 left-6 w-12 h-12 border-t border-l border-[#E6E08A]/30 transition-opacity duration-1000 delay-1000 ${
                  isVisible ? 'opacity-50' : 'opacity-0'
                }`} />
                <div className={`absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#2F7D76]/30 transition-opacity duration-1000 delay-1100 ${
                  isVisible ? 'opacity-50' : 'opacity-0'
                }`} />

                <div className="flex flex-col items-center text-center">
                  {/* Elegant image container with brand colors - ADJUSTED to show more of head */}
                  <div className="relative mb-8 group">
                    {/* Decorative rings - scale in */}
                    <div 
                      className={`absolute -inset-4 border border-[#2F7D76]/20 rounded-full animate-pulse transition-all duration-1000 delay-1000 transform ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                      }`} 
                    />
                    <div 
                      className={`absolute -inset-2 border border-[#E6E08A]/20 rounded-full animate-pulse delay-700 transition-all duration-1000 delay-1100 transform ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                      }`} 
                    />
                    
                    {/* Main image - ADJUSTED object position to show more of head */}
                    <div className="relative w-44 h-44 rounded-full overflow-hidden ring-4 ring-[#2F7D76]/20 group-hover:ring-[#2F7D76]/40 transition-all duration-700">
                      <img
                        src={featured.image}
                        alt={featured.name}
                        className="w-full h-full object-cover object-[center_20%] scale-125 group-hover:scale-150 transition-all duration-700"
                      />
                    </div>
                    
                    {/* Brand color dot - scales in */}
                    <div 
                      className={`absolute -bottom-2 -right-2 w-6 h-6 bg-[#E6E08A] rounded-full border-2 border-[#222121] transition-all duration-1000 delay-1200 transform ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`} 
                    />
                  </div>

                  <div className="relative">
                    <h3 
                      className={`text-3xl font-light text-white transition-all duration-1000 delay-1000 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    >
                      {featured.name}
                    </h3>
                    
                    {/* Title with brand color - only Executive Director */}
                    <p 
                      className={`text-[#E6E08A] text-lg font-light mt-2 transition-all duration-1000 delay-1100 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    >
                      {featured.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other members - luxury redesign */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {others.map((m, index) => (
                <div
                  key={m.name}
                  className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-700 hover:-translate-y-2 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${900 + index * 150}ms` }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#E6E08A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex items-center gap-5">
                    {/* Circular avatar with brand color ring - NO GRAYSCALE */}
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-[#2F7D76] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                      <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-[#2F7D76]/40 transition-all duration-700">
                        <img
                          src={m.image}
                          alt={m.name}
                          className="w-full h-full object-cover transition-all duration-700"
                        />
                      </div>
                      
                      {/* Small brand color dot indicator */}
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#E6E08A] rounded-full border border-[#222121] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-light text-white group-hover:text-[#E6E08A] transition-colors duration-500">
                        {m.name}
                      </h4>
                      <p className="text-white/40 text-sm mt-2 leading-relaxed font-light">
                        {m.role}
                      </p>
                      
                      {/* Elegant accent line with brand colors */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className="w-8 h-px bg-[#2F7D76]/40 group-hover:w-12 transition-all duration-700" />
                        <div className="w-1 h-1 rounded-full bg-[#E6E08A]/60" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent with brand colors */}
        <div 
          className={`mt-20 flex justify-center transition-all duration-1500 delay-1700 ${
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
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent transition-all duration-1500 delay-1900 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default TeamMembers;