import { useMemo, useState, useEffect, useRef } from "react";

type Album = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  images: string[];
};

const OurProjects: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // ✅ Mock data (edit later)
  const albums: Album[] = useMemo(
    () => [
      {
        id: "album-1",
        title: "Tea Couture",
        subtitle: "Boutique Interior Finish",
        cover: "/picture1.jpg",
        images: ["/picture1.jpg", "/picture2.jpg", "/picture3.jpg", "/picture4.jpg"],
      },
      {
        id: "album-2",
        title: "East Grace",
        subtitle: "Luxury Detail & Decor",
        cover: "/picture5.jpg",
        images: ["/picture5.jpg", "/picture6.jpg", "/picture7.jpg", "/picture8.jpg"],
      },
      {
        id: "album-3",
        title: "Eronssly Apartments",
        subtitle: "Residential Project Execution",
        cover: "/picture9.jpg",
        images: ["/picture9.jpg", "/picture10.jpg", "/picture11.jpg", "/picture12.jpg"],
      },
      {
        id: "album-4",
        title: "Spring Tree",
        subtitle: "Hospitality & Experience Design",
        cover: "/picture13.jpg",
        images: ["/picture13.jpg", "/picture14.jpg", "/picture15.jpg", "/picture16.jpg"],
      },
    ],
    []
  );

  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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

  const openAlbum = (album: Album): void => {
    setActiveAlbum(album);
    setActiveIndex(0);
  };

  const closeAlbum = (): void => {
    setActiveAlbum(null);
    setActiveIndex(0);
  };

  const next = (): void => {
    if (!activeAlbum) return;
    setActiveIndex((i) => (i + 1) % activeAlbum.images.length);
  };

  const prev = (): void => {
    if (!activeAlbum) return;
    setActiveIndex((i) => (i - 1 + activeAlbum.images.length) % activeAlbum.images.length);
  };

  return (
    <section
      ref={sectionRef}
      id="our-projects"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Sophisticated background with brand color */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor: '#3E7B73' }}
      />
      
      {/* Elegant geometric pattern - interior design inspired */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 delay-200 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Marble-like veining pattern for luxury feel */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 delay-400 ${
          isVisible ? 'opacity-[0.15]' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='veins' patternUnits='userSpaceOnUse' width='200' height='200'%3E%3Cpath d='M0 150 Q 50 100, 100 150 T 200 150' stroke='rgba(255,255,255,0.5)' fill='none' stroke-width='0.5' /%3E%3Cpath d='M50 50 Q 100 20, 150 50 T 250 50' stroke='rgba(255,255,255,0.3)' fill='none' stroke-width='0.3' /%3E%3Cpath d='M20 200 Q 80 160, 140 200 T 260 200' stroke='rgba(255,255,255,0.4)' fill='none' stroke-width='0.4' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23veins)' /%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}
      />

      {/* Luxurious geometric shapes - interior design elements */}
      <div className={`absolute inset-0 transition-opacity duration-1000 delay-600 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Large diagonal lines */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute -right-20 top-20 w-64 h-[2px] bg-white/10 transform rotate-45" />
          <div className="absolute -right-32 top-40 w-96 h-[2px] bg-white/10 transform rotate-45" />
          <div className="absolute -right-44 top-60 w-128 h-[2px] bg-white/10 transform rotate-45" />
        </div>
        
        {/* Abstract furniture-inspired shapes */}
        <div className="absolute bottom-40 left-[10%] w-32 h-32 border-2 border-white/10 rounded-full" />
        <div className="absolute top-40 right-[15%] w-24 h-24 border border-white/15 transform rotate-45" />
        
        {/* Interior design details */}
        <svg className="absolute bottom-20 right-[20%] w-48 h-48 opacity-20" viewBox="0 0 100 100">
          <path d="M20,50 L80,50 M50,20 L50,80 M30,30 L70,70 M30,70 L70,30" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Elegant gradient overlays */}
      <div className={`absolute inset-0 transition-opacity duration-1000 delay-800 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
      </div>

      {/* Refined animated elements */}
      <div className={`absolute top-20 left-10 w-64 h-64 border border-white/15 rounded-full animate-pulse transition-opacity duration-1000 delay-1000 ${
        isVisible ? 'opacity-30' : 'opacity-0'
      }`} />
      <div className={`absolute bottom-20 right-10 w-96 h-96 border border-white/15 rounded-full animate-pulse delay-1000 transition-opacity duration-1000 delay-1200 ${
        isVisible ? 'opacity-20' : 'opacity-0'
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Refined header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="relative">
            {/* Section label - slides up */}
            <div 
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="text-white/60 text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-white/60">
                Portfolio
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-6">
              <span 
                className={`inline-block transition-all duration-1000 delay-400 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Our{' '}
              </span>
              <span 
                className={`text-white font-medium inline-block transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Projects
              </span>
            </h2>
            
            {/* Elegant divider */}
            <div 
              className={`flex items-center gap-3 mt-6 transition-all duration-1000 delay-600 ${
                isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} 
              style={{ transformOrigin: 'left' }}
            >
              <div className="w-12 h-px bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <div className="w-12 h-px bg-white/40" />
            </div>
            
            <p 
              className={`mt-8 text-white/60 max-w-2xl text-lg font-light leading-relaxed transition-all duration-1000 delay-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Explore our work in curated albums. Each project embodies precision, 
              craftsmanship, and enduring elegance.
            </p>
          </div>

          {/* Right side counter */}
          <div 
            className={`hidden md:flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 transition-all duration-1000 delay-800 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <span className="text-white/40 text-sm tracking-wide">Total albums</span>
            <span className="text-3xl font-light text-white">{albums.length}</span>
            <span className="text-white/20 text-sm">✦</span>
          </div>
        </div>

        {/* Album Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <button
              key={album.id}
              onClick={() => openAlbum(album)}
              className={`group text-left focus:outline-none transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${900 + index * 150}ms` }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-700 hover:-translate-y-2">
                {/* Cover image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                  
                  {/* Sophisticated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E7B73]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* White accent line */}
                  <div className="absolute top-4 left-4 w-12 h-1 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Refined badge */}
                  <div className="absolute top-4 right-4 bg-[#3E7B73]/70 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                    <span className="text-white text-xs tracking-wide">
                      {album.images.length} {album.images.length === 1 ? 'image' : 'images'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-light text-white mb-2 tracking-wide">
                    {album.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 font-light">
                    {album.subtitle}
                  </p>

                  {/* Elegant view indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40 group-hover:text-white/80 transition-colors duration-500 tracking-wide">
                      View album
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-500">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white/40 group-hover:text-white/80 transition-colors duration-500"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </button>
          ))}
        </div>

        {/* Bottom accent */}
        <div 
          className={`mt-20 flex justify-center transition-all duration-1500 delay-1500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-white/40" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1500 delay-2000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Luxury Modal */}
      {activeAlbum && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-500"
          onClick={closeAlbum}
        >
          <div
            className="w-full max-w-7xl bg-[#3E7B73] backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant header */}
            <div className="flex items-center justify-between px-10 py-6 border-b border-white/20">
              <div>
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase block mb-2">
                  Album
                </span>
                <h3 className="text-2xl font-light text-white">
                  {activeAlbum.title}
                </h3>
                <p className="text-white/60 text-sm mt-1 font-light">{activeAlbum.subtitle}</p>
              </div>

              <button
                onClick={closeAlbum}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center text-white/40 hover:text-white/60 group"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Main image area */}
              <div className="lg:col-span-8 bg-[#3E7B73]">
                <div className="relative h-[450px] lg:h-[600px] group">
                  <img
                    src={activeAlbum.images[activeIndex]}
                    alt={`${activeAlbum.title} ${activeIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Sophisticated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E7B73]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Refined navigation arrows */}
                  <button
                    onClick={prev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#3E7B73]/80 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-[#3E7B73] transition-all duration-500 flex items-center justify-center text-white/60 hover:text-white opacity-0 group-hover:opacity-100"
                    aria-label="Previous"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#3E7B73]/80 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-[#3E7B73] transition-all duration-500 flex items-center justify-center text-white/60 hover:text-white opacity-0 group-hover:opacity-100"
                    aria-label="Next"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Elegant counter */}
                  <div className="absolute bottom-6 left-6 bg-[#3E7B73]/80 backdrop-blur-md border border-white/20 text-white/80 text-sm px-5 py-2.5 rounded-full">
                    <span className="text-white">{activeIndex + 1}</span>
                    <span className="text-white/30 mx-2">/</span>
                    <span className="text-white/50">{activeAlbum.images.length}</span>
                  </div>

                  {/* White accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                </div>
              </div>

              {/* Thumbnails panel */}
              <div className="lg:col-span-4 p-8 bg-[#3E7B73]/80 backdrop-blur-sm border-l border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white/60 text-sm tracking-wide">Gallery</h4>
                  <span className="text-white/30 text-xs">{activeAlbum.images.length} images</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {activeAlbum.images.map((img, idx) => {
                    const isActive: boolean = idx === activeIndex;
                    return (
                      <button
                        key={`${img}-${idx}`}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                          isActive 
                            ? 'ring-2 ring-white shadow-xl scale-105' 
                            : 'opacity-50 hover:opacity-100'
                        }`}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-24 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        
                        {/* Active indicator */}
                        {isActive && (
                          <>
                            <div className="absolute inset-0 border-2 border-white rounded-xl" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Refined tip section */}
                <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/10 animate-in slide-in-from-bottom duration-500 delay-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-light">✦</span>
                    </div>
                 
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-8 right-8 w-16 h-16 border border-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProjects;