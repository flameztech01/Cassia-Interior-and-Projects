import { useMemo, useState } from "react";

type Album = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  images: string[];
};

const OurProjects = () => {
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
  const [activeIndex, setActiveIndex] = useState(0);

  const openAlbum = (album: Album) => {
    setActiveAlbum(album);
    setActiveIndex(0);
  };

  const closeAlbum = () => {
    setActiveAlbum(null);
    setActiveIndex(0);
  };

  const next = () => {
    if (!activeAlbum) return;
    setActiveIndex((i) => (i + 1) % activeAlbum.images.length);
  };

  const prev = () => {
    if (!activeAlbum) return;
    setActiveIndex((i) => (i - 1 + activeAlbum.images.length) % activeAlbum.images.length);
  };

  return (
    <section id="our-projects" className="relative overflow-hidden py-28 md:py-36 bg-black">
      {/* Sophisticated brand-colored background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-40 w-[600px] h-[600px] bg-[#2F7D76]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-40 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Elegant geometric pattern with brand colors */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, ${'#2F7D76'} 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Refined gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black to-transparent" />
      </div>

      {/* Decorative brand color lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Refined header with brand colors */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="relative">
            <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#2F7D76]/40">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-6">
              Our <span className="text-[#E6E08A] font-medium">Projects</span>
            </h2>
            
            {/* Elegant divider with brand colors */}
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-px bg-[#2F7D76]/40" />
              <div className="w-2 h-2 rounded-full bg-[#E6E08A]/60" />
              <div className="w-12 h-px bg-[#2F7D76]/40" />
            </div>
            
            <p className="mt-8 text-white/40 max-w-2xl text-lg font-light leading-relaxed">
              Explore our work in curated albums. Each project embodies precision, 
              craftsmanship, and enduring elegance.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <span className="text-white/40 text-sm tracking-wide">Total albums</span>
            <span className="text-3xl font-light text-[#E6E08A]">{albums.length}</span>
            <span className="text-white/20 text-sm">✦</span>
          </div>
        </div>

        {/* Album Grid - luxury redesign */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map((album) => (
            <button
              key={album.id}
              onClick={() => openAlbum(album)}
              className="group text-left focus:outline-none"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-700 hover:-translate-y-2">
                {/* Cover image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                  
                  {/* Sophisticated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* Brand color accent line */}
                  <div className="absolute top-4 left-4 w-12 h-1 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Refined badge with brand colors */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                    <span className="text-white/80 text-xs tracking-wide">
                      {album.images.length} {album.images.length === 1 ? 'image' : 'images'}
                    </span>
                  </div>
                </div>

                {/* Content with refined typography */}
                <div className="p-8">
                  <h3 className="text-xl font-light text-white mb-2 tracking-wide">
                    {album.title}
                  </h3>
                  <p className="text-white/40 text-sm mb-6 font-light">
                    {album.subtitle}
                  </p>

                  {/* Elegant view indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/30 group-hover:text-[#2F7D76] transition-colors duration-500 tracking-wide">
                      View album
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#2F7D76] group-hover:bg-[#2F7D76]/10 transition-all duration-500">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white/40 group-hover:text-[#2F7D76] transition-colors duration-500"
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
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#E6E08A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#2F7D76]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Luxury Modal */}
      {activeAlbum && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={closeAlbum}
        >
          <div
            className="w-full max-w-7xl bg-black/80 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant header */}
            <div className="flex items-center justify-between px-10 py-6 border-b border-white/10">
              <div>
                <span className="text-[#2F7D76] text-xs tracking-[0.3em] uppercase block mb-2">
                  Album
                </span>
                <h3 className="text-2xl font-light text-white">
                  {activeAlbum.title}
                </h3>
                <p className="text-white/40 text-sm mt-1 font-light">{activeAlbum.subtitle}</p>
              </div>

              <button
                onClick={closeAlbum}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-white/20 transition-colors flex items-center justify-center text-white/40 hover:text-white/60 group"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Main image area with luxury presentation */}
              <div className="lg:col-span-8 bg-black">
                <div className="relative h-[450px] lg:h-[600px] group">
                  <img
                    src={activeAlbum.images[activeIndex]}
                    alt={`${activeAlbum.title} ${activeIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Sophisticated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Refined navigation arrows */}
                  <button
                    onClick={prev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-[#2F7D76] hover:bg-black/80 transition-all duration-500 flex items-center justify-center text-white/60 hover:text-[#2F7D76] opacity-0 group-hover:opacity-100"
                    aria-label="Previous"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-[#2F7D76] hover:bg-black/80 transition-all duration-500 flex items-center justify-center text-white/60 hover:text-[#2F7D76] opacity-0 group-hover:opacity-100"
                    aria-label="Next"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Elegant counter with brand colors */}
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md border border-white/10 text-white/80 text-sm px-5 py-2.5 rounded-full">
                    <span className="text-[#E6E08A]">{activeIndex + 1}</span>
                    <span className="text-white/30 mx-2">/</span>
                    <span className="text-white/50">{activeAlbum.images.length}</span>
                  </div>

                  {/* Brand color accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76] to-transparent" />
                </div>
              </div>

              {/* Thumbnails panel - luxury redesign */}
              <div className="lg:col-span-4 p-8 bg-black/40 backdrop-blur-sm border-l border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white/60 text-sm tracking-wide">Gallery</h4>
                  <span className="text-white/20 text-xs">{activeAlbum.images.length} images</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {activeAlbum.images.map((img, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={`${img}-${idx}`}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                          isActive 
                            ? 'ring-2 ring-[#2F7D76] shadow-xl scale-105' 
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
                            <div className="absolute inset-0 border-2 border-[#2F7D76] rounded-xl" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E6E08A] rounded-full" />
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Refined tip section with brand colors */}
                <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2F7D76]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#E6E08A] text-sm font-light">✦</span>
                    </div>
                    <div>
                      <p className="text-xs text-[#2F7D76] tracking-wide mb-2">Quick tip</p>
                      <p className="text-xs text-white/30 leading-relaxed font-light">
                        Replace <span className="text-[#E6E08A] font-mono">/picture1.jpg</span> with your real images. 
                        Each album holds 3–4 pictures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-8 right-8 w-16 h-16 border border-[#E6E08A]/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom accent with brand colors */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent" />
    </section>
  );
};

export default OurProjects;