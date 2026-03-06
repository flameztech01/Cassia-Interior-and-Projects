import { useState, useEffect, useRef } from "react";

const ConnectWithUs = () => {
  const [tab, setTab] = useState<"company" | "contact">("company");
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
      id="connect" 
      className="relative overflow-hidden py-20 md:py-28 lg:py-36"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT: Contact Form Area - luxury redesign */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-[2rem] p-6 md:p-10 lg:p-12 border border-white/10 transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              {/* Header with refined typography */}
              <div className="relative">
                {/* Section label - slides up */}
                <div 
                  className={`transition-all duration-1000 delay-400 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <span className="text-[#2F7D76] text-xs sm:text-sm tracking-[0.3em] uppercase relative inline-block pl-10 sm:pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 sm:before:w-8 before:h-px before:bg-[#2F7D76]/40">
                    Let's Connect
                  </span>
                </div>
                
                <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                  <span 
                    className={`inline-block transition-all duration-1000 delay-500 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    Create marvel with your
                  </span>
                  <span 
                    className={`block text-[#E6E08A] font-medium mt-2 sm:mt-3 transition-all duration-1000 delay-600 transform ${
                      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
                    }`}
                  >
                    Space
                  </span>
                </h2>
                
                {/* Elegant divider */}
                <div 
                  className={`flex items-center gap-3 mt-4 sm:mt-6 transition-all duration-1000 delay-700 ${
                    isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`} 
                  style={{ transformOrigin: 'left' }}
                >
                  <div className="w-8 sm:w-12 h-px bg-[#2F7D76]/40" />
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#E6E08A]/60" />
                  <div className="w-8 sm:w-12 h-px bg-[#2F7D76]/40" />
                </div>
                
                <p 
                  className={`mt-4 sm:mt-6 text-white/40 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl transition-all duration-1000 delay-800 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  Tell us what you want to achieve. We'll respond with the best approach,
                  timeline, and finishing plan for your project.
                </p>
              </div>

              {/* Tabs - refined with brand colors - slides up */}
              <div 
                className={`mt-6 sm:mt-8 md:mt-10 inline-flex p-1 bg-white/5 rounded-full border border-white/10 transition-all duration-1000 delay-900 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <button
                  onClick={() => setTab("company")}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-light rounded-full transition-all duration-500 ${
                    tab === "company"
                      ? "bg-[#2F7D76] text-white"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  Company Info
                </button>
                <button
                  onClick={() => setTab("contact")}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-light rounded-full transition-all duration-500 ${
                    tab === "contact"
                      ? "bg-[#2F7D76] text-white"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  Quick Contact
                </button>
              </div>

              {/* Tab Content - luxury redesign */}
              <div className="mt-6 sm:mt-8 md:mt-10">
                {tab === "company" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <InfoCard
                      label="Phone / WhatsApp"
                      value="+234-908-206-9020"
                      icon={<PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                      href="https://wa.me/2349082069020"
                      isVisible={isVisible}
                      index={0}
                    />
                    <InfoCard
                      label="Instagram"
                      value="@cassiainteriors"
                      icon={<InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                      href="https://instagram.com/cassiainteriorsandprojects"
                      isVisible={isVisible}
                      index={1}
                    />
                    <InfoCard
                      label="Facebook"
                      value="Cassia Interiors"
                      icon={<FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                      href="https://facebook.com/cassiainteriorsandprojects"
                      isVisible={isVisible}
                      index={2}
                    />
                    <InfoCard
                      label="Email"
                      value="cassiainteriors.projects@gmail.com"
                      icon={<MailIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                      href="mailto:cassiainteriors.projects@gmail.com"
                      isVisible={isVisible}
                      index={3}
                    />
                  </div>
                ) : (
                  <div 
                    className={`bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 transition-all duration-1000 delay-1100 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-[#E6E08A] rounded-full blur-md opacity-50" />
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#2F7D76]/20 flex items-center justify-center">
                          <span className="text-[#E6E08A] text-lg sm:text-xl md:text-2xl">✉️</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-base sm:text-lg font-light">Quick message</p>
                        <p className="text-white/40 text-xs sm:text-sm mt-1 sm:mt-2 font-light">
                          We reply within 24 hours. Send your details below.
                        </p>
                        
                        {/* Decorative line */}
                        <div className="mt-2 sm:mt-3 md:mt-4 w-8 sm:w-10 md:w-12 h-px bg-[#2F7D76]/40" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Form - luxury redesign */}
              <div className="mt-8 sm:mt-10 md:mt-12">
                <form
                  action="https://formspree.io/f/mlgwqyqn"
                  method="POST"
                  className="space-y-4 sm:space-y-5 md:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      placeholder="Your name"
                      required
                      isVisible={isVisible}
                      index={0}
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      isVisible={isVisible}
                      index={1}
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      placeholder="+234 XXX XXX XXXX"
                      isVisible={isVisible}
                      index={2}
                    />
                    <Input
                      label="Project Type"
                      name="projectType"
                      placeholder="Residential / Commercial / Hospitality"
                      isVisible={isVisible}
                      index={3}
                    />
                  </div>

                  <div 
                    className={`transition-all duration-1000 delay-1400 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <label className="text-xs sm:text-sm font-light text-white/60">
                      Message <span className="text-[#E6E08A]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell us about your space, location, timeline, and what you want done..."
                      className="mt-2 sm:mt-3 w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] rounded-lg sm:rounded-xl bg-white/5 border border-white/10 px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-white placeholder:text-white/20 outline-none focus:border-[#2F7D76]/50 focus:ring-2 focus:ring-[#2F7D76]/20 transition-all font-light text-sm sm:text-base"
                    />
                  </div>

                  <input type="hidden" name="_subject" value="New Cassia Inquiry" />

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch sm:items-center pt-2 sm:pt-3 md:pt-4">
                    <button
                      type="submit"
                      className={`group relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 overflow-hidden transition-all duration-1000 delay-1500 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                    >
                      <span className="absolute inset-0 bg-[#2F7D76]" />
                      <span className="absolute inset-0 bg-gradient-to-r from-[#2F7D76] to-[#1e5a55] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative text-white font-light tracking-wide text-sm sm:text-base">Send Message</span>
                    </button>

                    <a
                      href="https://wa.me/2349082069020"
                      target="_blank"
                      rel="noreferrer"
                      className={`group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 border border-white/20 text-white/80 rounded-lg sm:rounded-xl font-light hover:border-[#2F7D76] hover:text-white hover:bg-white/5 transition-all duration-1000 delay-1600 transform text-center text-sm sm:text-base ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                    >
                      Chat on WhatsApp
                      <span className="inline-block ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                  
                  <p 
                    className={`text-xs text-white/20 font-light mt-4 sm:mt-5 md:mt-6 transition-all duration-1000 delay-1700 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    By sending, you agree to be contacted about your request.
                  </p>
                </form>
              </div>

              {/* Decorative corner accents - fade in */}
              <div className={`absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t border-r border-[#E6E08A]/30 transition-opacity duration-1000 delay-1800 ${
                isVisible ? 'opacity-50' : 'opacity-0'
              }`} />
              <div className={`absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b border-l border-[#2F7D76]/30 transition-opacity duration-1000 delay-1900 ${
                isVisible ? 'opacity-50' : 'opacity-0'
              }`} />
            </div>
          </div>

          {/* RIGHT: Luxury visual composition */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center mb-8 lg:mb-0">
            <div className="relative w-full h-full">
              {/* Decorative frames - fade in and scale */}
              <div 
                className={`absolute -inset-2 sm:-inset-3 md:-inset-4 border border-[#2F7D76]/20 rounded-2xl sm:rounded-3xl md:rounded-[3rem] transition-all duration-1000 delay-400 transform ${
                  isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-95'
                }`} 
              />
              <div 
                className={`absolute -inset-1 sm:-inset-1.5 md:-inset-2 border border-[#E6E08A]/20 rounded-2xl sm:rounded-3xl md:rounded-[3rem] transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-95'
                }`} 
              />
              
              {/* Main image - elegant presentation - slides in from right */}
              <div 
                className={`absolute top-0 right-0 w-[85%] sm:w-[80%] md:w-[90%] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group transition-all duration-1000 delay-600 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
              >
                <div className="absolute inset-0 border border-[#2F7D76]/20 rounded-xl sm:rounded-2xl md:rounded-[2rem] z-10 pointer-events-none" />
                <img
                  src="/contact1.jpg"
                  alt="Luxury interior"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222121]/60 via-[#222121]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Brand color accent line - slides in from left */}
                <div 
                  className={`absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] transition-all duration-1000 delay-700 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                  style={{ transformOrigin: 'left' }}
                />
              </div>

              {/* Secondary image - overlapping composition - slides in from left */}
              <div 
                className={`absolute bottom-0 left-0 w-[65%] sm:w-[60%] md:w-[70%] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#222121] group transition-all duration-1000 delay-800 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
              >
                <div className="absolute inset-0 border border-[#E6E08A]/20 rounded-xl sm:rounded-2xl md:rounded-[2rem] z-10 pointer-events-none" />
                <img
                  src="/woman.jpg"
                  alt="Interior detail"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#222121]/40 via-transparent to-[#222121]/60" />
                
                {/* Brand color accent line - slides in from right */}
                <div 
                  className={`absolute bottom-2 sm:bottom-3 md:bottom-6 right-2 sm:right-3 md:right-6 w-6 sm:w-8 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#E6E08A] to-[#2F7D76] transition-all duration-1000 delay-900 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                  style={{ transformOrigin: 'right' }}
                />
              </div>

              {/* Floating info card - luxury redesign - slides up */}
              <div 
                className={`absolute top-8 sm:top-10 md:top-16 left-2 sm:left-3 md:left-4 bg-[#222121]/50 backdrop-blur-md rounded-lg sm:rounded-xl border border-[#2F7D76]/30 shadow-2xl p-3 sm:p-4 md:p-6 max-w-[180px] sm:max-w-[200px] md:max-w-[240px] transition-all duration-1000 delay-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] mb-1 sm:mb-2">AVAILABLE FOR</p>
                <p className="text-white text-xs sm:text-sm md:text-lg font-light">
                  Finishing · Styling · Execution
                </p>
                <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-3 md:mt-4">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#2F7D76]" />
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#E6E08A]" />
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/20" />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border-t border-r border-[#E6E08A]/40" />
              </div>

              {/* Decorative brand color elements - scale and fade */}
              <div 
                className={`absolute top-20 sm:top-30 md:top-40 -right-4 sm:-right-5 md:-right-6 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 border border-[#2F7D76]/20 rounded-full transition-all duration-1000 delay-1100 transform ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                }`} 
              />
              <div 
                className={`absolute bottom-20 sm:bottom-30 md:bottom-40 -left-4 sm:-left-5 md:-left-6 w-20 sm:w-24 md:w-40 h-20 sm:h-24 md:h-40 bg-[#2F7D76]/10 rounded-full blur-xl sm:blur-2xl transition-all duration-1000 delay-1200 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} 
              />
              
              {/* Additional brand color accents - fade in */}
              <div 
                className={`absolute top-1/2 right-0 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border border-[#E6E08A]/30 rounded-full transition-all duration-1000 delay-1300 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`} 
              />
              <div 
                className={`absolute bottom-1/4 left-5 sm:left-8 md:left-10 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-[#E6E08A]/20 rounded-full blur-sm transition-all duration-1000 delay-1400 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent transition-all duration-1500 delay-2000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default ConnectWithUs;

/* ----------------- Luxury UI Helpers with Brand Colors ----------------- */

const InfoCard = ({
  label,
  value,
  icon,
  href,
  isVisible,
  index,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
  isVisible: boolean;
  index: number;
}) => {
  const Box = (
    <div 
      className={`group relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-500 hover:-translate-y-1 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${1000 + index * 100}ms` }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border-t border-r border-[#E6E08A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[#2F7D76] rounded-md sm:rounded-lg blur-sm sm:blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#2F7D76]/10 transition-colors duration-500">
            <div className="text-[#E6E08A] group-hover:text-[#2F7D76] transition-colors duration-500">
              {icon}
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white/30 text-[10px] sm:text-xs tracking-wide font-light truncate">{label}</p>
          <p className="text-white/80 text-xs sm:text-sm font-light mt-1 sm:mt-2 line-clamp-1 group-hover:text-white transition-colors duration-500 break-all">
            {value}
          </p>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] group-hover:w-full transition-all duration-700" />
    </div>
  );

  if (!href) return Box;

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {Box}
    </a>
  );
};

const Input = ({
  label,
  name,
  placeholder,
  required,
  type = "text",
  isVisible,
  index,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  isVisible: boolean;
  index: number;
}) => {
  return (
    <div 
      className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${1200 + index * 100}ms` }}
    >
      <label className="text-xs sm:text-sm font-light text-white/60">
        {label} {required && <span className="text-[#E6E08A]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 sm:mt-2 md:mt-3 w-full rounded-lg sm:rounded-xl bg-white/5 border border-white/10 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-white placeholder:text-white/20 outline-none focus:border-[#2F7D76]/50 focus:ring-2 focus:ring-[#2F7D76]/20 transition-all font-light text-sm sm:text-base"
      />
    </div>
  );
};

/* ----------------- Refined Icons with Brand Colors ----------------- */

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
    <path d="M16 11.37a4 4 0 1 1-7.87 1.26A4 4 0 0 1 16 11.37Z" />
    <path d="M17.5 6.5h.01" strokeLinecap="round" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16v16H4V4Z" />
    <path d="M4 7l8 6 8-6" strokeLinecap="round" />
  </svg>
);