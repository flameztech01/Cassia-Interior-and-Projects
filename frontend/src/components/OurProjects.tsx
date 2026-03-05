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
    <section id="our-projects" className="relative overflow-hidden bg-[#F7F4EF] py-24">
      {/* Minimalist background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-40 w-[600px] h-[600px] bg-[#2F7D76]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(47,125,118,0.1) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Refined header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-[#2F7D76] uppercase block mb-3">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A2A28]">
              Our <span className="font-semibold text-[#2F7D76]">Projects</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#2F7D76]/30 mt-6" />
            <p className="mt-6 text-black/60 max-w-2xl text-lg leading-relaxed">
              Explore our work in curated albums. Each project includes 3–4 visuals you can
              update later with your real images.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-5 py-3 shadow-sm border border-black/5">
            <span className="text-sm text-black/50">Total albums</span>
            <span className="text-2xl font-light text-[#2F7D76]">{albums.length}</span>
          </div>
        </div>

        {/* Album Grid - refined */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {albums.map((album) => (
            <button
              key={album.id}
              onClick={() => openAlbum(album)}
              className="group text-left focus:outline-none"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-1">
                {/* Cover image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Minimalist badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-[#1A2A28] shadow-lg">
                    {album.images.length} {album.images.length === 1 ? 'photo' : 'photos'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A2A28] mb-1">
                    {album.title}
                  </h3>
                  <p className="text-sm text-black/50 mb-4">
                    {album.subtitle}
                  </p>

                  {/* View indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#2F7D76] group-hover:translate-x-1 transition-transform duration-300">
                      View album
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#2F7D76]/10 flex items-center justify-center group-hover:bg-[#2F7D76] group-hover:text-white transition-colors duration-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modern Modal */}
      {activeAlbum && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeAlbum}
        >
          <div
            className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Clean header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-black/5">
              <div>
                <span className="text-xs font-medium text-[#2F7D76] tracking-wider uppercase">
                  Album
                </span>
                <h3 className="text-xl font-semibold text-[#1A2A28] mt-1">
                  {activeAlbum.title}
                </h3>
                <p className="text-sm text-black/50">{activeAlbum.subtitle}</p>
              </div>

              <button
                onClick={closeAlbum}
                className="w-10 h-10 rounded-full border border-black/10 hover:bg-black/5 transition-colors flex items-center justify-center text-black/40 hover:text-black/60"
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Main image area */}
              <div className="lg:col-span-8 bg-[#1A2A28]">
                <div className="relative h-[400px] lg:h-[550px]">
                  <img
                    src={activeAlbum.images[activeIndex]}
                    alt={`${activeAlbum.title} ${activeIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation arrows - refined */}
                  <button
                    onClick={prev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors flex items-center justify-center text-[#1A2A28] hover:text-[#2F7D76]"
                    aria-label="Previous"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors flex items-center justify-center text-[#1A2A28] hover:text-[#2F7D76]"
                    aria-label="Next"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Counter - minimalist */}
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                    {activeIndex + 1} / {activeAlbum.images.length}
                  </div>
                </div>
              </div>

              {/* Thumbnails panel */}
              <div className="lg:col-span-4 p-6 bg-white">
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-sm font-medium text-[#1A2A28]">Gallery</h4>
                  <span className="text-xs text-black/40">{activeAlbum.images.length} images</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {activeAlbum.images.map((img, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={`${img}-${idx}`}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                          isActive 
                            ? 'ring-2 ring-[#2F7D76] shadow-lg scale-[1.02]' 
                            : 'opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-20 object-cover"
                        />
                        {isActive && (
                          <div className="absolute inset-0 border-2 border-[#2F7D76] rounded-lg" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Tip - refined */}
                <div className="mt-8 p-4 bg-[#F7F4EF] rounded-xl border border-black/5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2F7D76]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[#2F7D76] font-bold">i</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#2F7D76] mb-1">Quick tip</p>
                      <p className="text-xs text-black/50 leading-relaxed">
                        Replace <span className="font-mono text-[#2F7D76]">/picture1.jpg</span> with your real images. Each album holds 3–4 pictures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProjects;