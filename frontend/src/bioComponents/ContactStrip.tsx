import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Linkedin, Instagram, Twitter } from "lucide-react";

const ContactStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const scrollToConsultation = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Elegant pattern - adjusted for mobile */}
        <div className="absolute inset-0 opacity-5 md:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(246,238,153,0.2) 0px, rgba(246,238,153,0.2) 1px, transparent 1px, transparent 12px)
            `,
            backgroundSize: '20px 20px md:24px 24px'
          }} />
        </div>

        {/* Gold gradient orbs - reduced intensity on mobile */}
        <div className="absolute top-40 -left-20 w-60 md:w-80 h-60 md:h-80 bg-[#f6ee99]/5 md:bg-[#f6ee99]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-60 md:w-80 h-60 md:h-80 bg-[#f6ee99]/5 md:bg-[#f6ee99]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header - mobile optimized */}
        <div className="text-center mb-10 sm:mb-12">
          <div 
            className={`flex justify-center mb-4 sm:mb-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-8 sm:w-12 h-px bg-[#f6ee99]/40" />
              <span className="text-[#f6ee99] text-xs sm:text-sm tracking-[0.3em] uppercase">
                Connect
              </span>
              <div className="w-8 sm:w-12 h-px bg-[#f6ee99]/40" />
            </div>
          </div>

          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4 px-2 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Let's <span className="text-[#f6ee99]">Connect</span>
          </h2>

          <p 
            className={`text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-4 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Reach out for inquiries, consultations, or to discuss your next project
          </p>
        </div>

        {/* Main Contact Grid - mobile optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10">
              
              {/* Form Header */}
              <h3 className="text-xl sm:text-2xl font-light text-white mb-4 sm:mb-6 flex items-center gap-2">
                <span className="w-6 sm:w-8 h-px bg-[#f6ee99]" />
                Send a Message
              </h3>

              {/* Form - mobile optimized inputs */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder:text-white/30 focus:border-[#f6ee99] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder:text-white/30 focus:border-[#f6ee99] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder:text-white/30 focus:border-[#f6ee99] focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder:text-white/30 focus:border-[#f6ee99] focus:outline-none transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button - mobile optimized */}
                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="w-full group relative px-4 sm:px-6 py-3 sm:py-4 bg-[#f6ee99] text-[#0A0A0A] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#E6DE89] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg sm:rounded-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                    {formStatus === 'sending' ? (
                      <>Sending...</>
                    ) : formStatus === 'success' ? (
                      <>Message Sent! ✓</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Info & Social */}
          <div 
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Email Card - mobile optimized */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-[#f6ee99]/30 transition-all duration-500">
              <div className="flex items-center sm:items-start gap-3 sm:gap-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#f6ee99] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f6ee99]/20 to-transparent flex items-center justify-center border border-[#f6ee99]/30 group-hover:border-[#f6ee99] transition-all duration-500">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#f6ee99] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/40 text-xs mb-0.5 sm:mb-1">Email</p>
                  <a 
                    href="mailto:comfort.samson@cassiainteriors.com" 
                    className="text-white text-sm sm:text-base md:text-lg hover:text-[#f6ee99] transition-colors duration-300 break-words block"
                  >
                    comfort.samson@cassiainteriors.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card - mobile optimized */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-[#f6ee99]/30 transition-all duration-500">
              <div className="flex items-center sm:items-start gap-3 sm:gap-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#f6ee99] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f6ee99]/20 to-transparent flex items-center justify-center border border-[#f6ee99]/30 group-hover:border-[#f6ee99] transition-all duration-500">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#f6ee99] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/40 text-xs mb-0.5 sm:mb-1">Phone</p>
                  <a 
                    href="tel:+2348000000000" 
                    className="text-white text-sm sm:text-base md:text-lg hover:text-[#f6ee99] transition-colors duration-300 block"
                  >
                    +234 800 000 0000
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card - mobile optimized */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-[#f6ee99]/30 transition-all duration-500">
              <div className="flex items-center sm:items-start gap-3 sm:gap-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#f6ee99] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f6ee99]/20 to-transparent flex items-center justify-center border border-[#f6ee99]/30 group-hover:border-[#f6ee99] transition-all duration-500">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#f6ee99] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs mb-0.5 sm:mb-1">Location</p>
                  <p className="text-white text-sm sm:text-base md:text-lg">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Links - mobile optimized */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-[#f6ee99]/30 transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#f6ee99] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f6ee99]/20 to-transparent flex items-center justify-center border border-[#f6ee99]/30 group-hover:border-[#f6ee99] transition-all duration-500">
                      <span className="text-[#f6ee99] group-hover:text-white transition-colors duration-500 text-lg">✧</span>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs">Social</p>
                </div>
                
                <div className="flex gap-2 sm:gap-3 justify-start sm:justify-end">
                  <a 
                    href="#" 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#f6ee99] hover:border-[#f6ee99] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#f6ee99] hover:border-[#f6ee99] transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#f6ee99] hover:border-[#f6ee99] transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Book Consultation Button - mobile optimized */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={scrollToConsultation}
                className="w-full group relative px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#f6ee99] to-[#E6DE89] text-[#0A0A0A] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#f6ee99]/20 rounded-lg sm:rounded-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap">Book a Consultation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright - mobile optimized */}
        <div 
          className={`mt-10 sm:mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="pt-4 sm:pt-6 border-t border-white/10">
            <p className="text-white/30 text-xs sm:text-sm">
              © {new Date().getFullYear()} Comfort Samson. All rights reserved.
            </p>
            <p className="text-white/20 text-[10px] sm:text-xs mt-1 sm:mt-2 px-4">
              Executive Director, Cassia Interiors & Projects
            </p>
          </div>
        </div>
      </div>

      {/* Side decorative lines - hidden on mobile */}
      <div 
        className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#f6ee99]/30 to-transparent transition-all duration-1500 delay-800 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#f6ee99]/30 to-transparent transition-all duration-1500 delay-900 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default ContactStrip;