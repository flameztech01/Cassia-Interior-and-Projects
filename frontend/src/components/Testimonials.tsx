import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// // Quote icon component
// const QuoteIcon = ({ className }: { className?: string }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
//     <path d="M10 11h-4v4h4v-4z M18 11h-4v4h4v-4z" />
//     <path d="M10 11v-2c0-2.5 1.5-4 4-4 M18 11v-2c0-2.5-1.5-4-4-4" />
//   </svg>
// );

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-[#E6E08A] fill-[#E6E08A]' : 'text-white/20'
          }`}
        />
      ))}
    </div>
  );
};

// Placeholder testimonials data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Elizabeth Ogunleye",
    role: "Homeowner, Ikoyi",
    content: "Cassia Interiors transformed our living space beyond what we imagined. The attention to detail and precision in finishing is remarkable. Every corner reflects quality craftsmanship.",
    rating: 5,
    image: "/testimonial-1.jpg",
    project: "Luxury Residential"
  },
  {
    id: 2,
    name: "Adebayo Olusegun",
    role: "Restaurant Owner, Victoria Island",
    content: "Working with the Cassia team on our commercial space was seamless. They understood our brand vision and executed it flawlessly. Our customers constantly compliment the ambiance.",
    rating: 5,
    image: "/testimonial-2.jpg",
    project: "Commercial Development"
  },
  {
    id: 3,
    name: "Chioma Nnamdi",
    role: "Interior Designer, Lekki",
    content: "As a designer myself, I'm particular about finishes. Cassia exceeded my expectations with their bathroom renovation. The bespoke solutions they created are truly one-of-a-kind.",
    rating: 5,
    image: "/testimonial-3.jpg",
    project: "Bespoke Interior"
  },
  {
    id: 4,
    name: "Dr. Michael Adenuga",
    role: "Homeowner, Banana Island",
    content: "From concept to completion, the team demonstrated exceptional professionalism. They managed every detail of our home renovation, delivering on time and within budget.",
    rating: 5,
    image: "/testimonial-4.jpg",
    project: "Residential Remodeling"
  },
  {
    id: 5,
    name: "Funmi Adeyemi",
    role: "Hotel Manager, Lagos",
    content: "The lobby renovation exceeded our expectations. Our guests consistently remark on the elegant finishes and sophisticated atmosphere. A testament to Cassia's expertise.",
    rating: 4,
    image: "/testimonial-5.jpg",
    project: "Commercial Space"
  },
  {
    id: 6,
    name: "Tunde Bajulaiye",
    role: "Property Developer",
    content: "We've partnered with Cassia on multiple projects. Their end-to-end coordination and project management ensure our developments maintain the highest quality standards.",
    rating: 5,
    image: "/testimonial-6.jpg",
    project: "Project Management"
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  // Use any type to avoid TypeScript issues, or null with proper casting
  const timeoutRef = useRef<any>(null);

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

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && isVisible) {
      // @ts-ignore - Ignore TypeScript check for browser environment
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoplay, isVisible]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToSlide = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  // Get current testimonial
  const currentTestimonial = TESTIMONIALS[currentIndex];
  
  // Get previous and next indices for thumbnails
  const prevIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
  const nextIndex = (currentIndex + 1) % TESTIMONIALS.length;

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative overflow-hidden py-20 md:py-28 lg:py-36"
      style={{ backgroundColor: '#222121' }}
    >
      {/* Sophisticated brand-colored background elements */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-20 left-20 w-[600px] h-[600px] bg-[#2F7D76]/10 rounded-full blur-3xl animate-pulse transition-all duration-1500 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
        <div 
          className={`absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1500 delay-200 transform ${
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
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          {/* Section label - slides up */}
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#2F7D76]/40">
              Testimonials
            </span>
          </div>

          {/* Heading - slides up with staggered children */}
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            <span 
              className={`inline-block transition-all duration-1000 delay-400 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Client
            </span>{' '}
            <span 
              className={`text-[#E6E08A] font-medium inline-block transition-all duration-1000 delay-500 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
              }`}
            >
              Feedback
            </span>
          </h2>

          {/* Subheading - slides up */}
          <p 
            className={`mt-6 text-white/40 text-lg md:text-xl font-light leading-relaxed transition-all duration-1000 delay-600 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            What our clients say about their experience working with us
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

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div 
            className={`relative bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 lg:p-16 border border-white/10 transition-all duration-1000 delay-800 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Decorative quote marks */}
            <div className="absolute -top-4 left-8 md:left-12 text-8xl text-[#2F7D76]/20 font-serif">"</div>
            <div className="absolute -bottom-4 right-8 md:right-12 text-8xl text-[#E6E08A]/20 font-serif">"</div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="mb-6 flex justify-center">
                <StarRating rating={currentTestimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-center">
                <p className="text-white/80 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                  "{currentTestimonial.content}"
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="mt-8 text-center">
                <div className="relative inline-block">
                  {/* Decorative rings */}
                  <div className="absolute -inset-2 border border-[#2F7D76]/20 rounded-full animate-pulse" />
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#E6E08A]/20 mx-auto mb-4">
                    {/* Placeholder avatar - replace with actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-[#2F7D76]/30 to-[#E6E08A]/30 flex items-center justify-center">
                      <span className="text-white/60 text-xl font-light">
                        {currentTestimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="text-white text-xl font-light">{currentTestimonial.name}</h4>
                <p className="text-white/40 text-sm mt-1">{currentTestimonial.role}</p>
                <p className="text-[#E6E08A] text-xs mt-2 tracking-wide">{currentTestimonial.project}</p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#2F7D76]/30 opacity-50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#E6E08A]/30 opacity-50" />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Thumbnail Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {/* Previous thumbnail */}
              <button
                onClick={prevSlide}
                className="group relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white/10 hover:border-[#2F7D76]/40 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#2F7D76]/20 to-[#E6E08A]/20 flex items-center justify-center">
                  <span className="text-white/40 text-xs">{TESTIMONIALS[prevIndex].name.charAt(0)}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-white" />
                </div>
              </button>

              {/* Current thumbnail */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-[#E6E08A]">
                <div className="w-full h-full bg-gradient-to-br from-[#2F7D76] to-[#E6E08A] flex items-center justify-center">
                  <span className="text-white text-xl font-light">{currentTestimonial.name.charAt(0)}</span>
                </div>
              </div>

              {/* Next thumbnail */}
              <button
                onClick={nextSlide}
                className="group relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white/10 hover:border-[#2F7D76]/40 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#2F7D76]/20 to-[#E6E08A]/20 flex items-center justify-center">
                  <span className="text-white/40 text-xs">{TESTIMONIALS[nextIndex].name.charAt(0)}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2 mx-auto md:mx-0">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-[#E6E08A] rounded-full'
                      : 'w-2 h-2 bg-white/20 rounded-full hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#2F7D76] hover:bg-white/5 transition-all duration-300 flex items-center justify-center group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-[#E6E08A] transition-colors duration-300" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#2F7D76] hover:bg-white/5 transition-all duration-300 flex items-center justify-center group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-[#E6E08A] transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Projects Completed", color: "#2F7D76" },
              { value: "100%", label: "Client Satisfaction", color: "#E6E08A" },
              { value: "8+", label: "Years Experience", color: "#2F7D76" },
              { value: "15+", label: "Expert Team Members", color: "#E6E08A" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</p>
                <p className="text-white/40 text-xs md:text-sm tracking-wide">{stat.label}</p>
                <div className="mt-2 w-12 h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-1400 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
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
            <span className="text-white font-light">Share Your Experience</span>
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

export default Testimonials;