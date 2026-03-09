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
      className="relative overflow-hidden py-20 md:py-24 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Elegant pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(197,165,114,0.2) 0px, rgba(197,165,114,0.2) 1px, transparent 1px, transparent 12px)
            `,
            backgroundSize: '24px 24px'
          }} />
        </div>

        {/* Gold gradient orbs */}
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
                Connect
              </span>
              <div className="w-12 h-px bg-[#C5A572]/40" />
            </div>
          </div>

          <h2 
            className={`text-4xl md:text-5xl font-light text-white mb-4 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Let's <span className="text-[#C5A572]">Connect</span>
          </h2>

          <p 
            className={`text-white/60 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Reach out for inquiries, consultations, or to discuss your next project
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              
              {/* Form Header */}
              <h3 className="text-2xl font-light text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-[#C5A572]" />
                Send a Message
              </h3>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-white placeholder:text-white/30 focus:border-[#C5A572] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-white placeholder:text-white/30 focus:border-[#C5A572] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-white placeholder:text-white/30 focus:border-[#C5A572] focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-white placeholder:text-white/30 focus:border-[#C5A572] focus:outline-none transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="w-full group relative px-6 py-4 bg-[#C5A572] text-[#0A0A0A] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#B08F5C] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formStatus === 'sending' ? (
                      <>Sending...</>
                    ) : formStatus === 'success' ? (
                      <>Message Sent! ✓</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            className={`space-y-6 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Email Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#C5A572]/30 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C5A572] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#C5A572]/20 to-transparent flex items-center justify-center border border-[#C5A572]/30 group-hover:border-[#C5A572] transition-all duration-500">
                    <Mail className="w-5 h-5 text-[#C5A572] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs mb-1">Email</p>
                  <a 
                    href="mailto:comfort.samson@cassiainteriors.com" 
                    className="text-white text-lg hover:text-[#C5A572] transition-colors duration-300"
                  >
                    comfort.samson@cassiainteriors.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#C5A572]/30 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C5A572] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#C5A572]/20 to-transparent flex items-center justify-center border border-[#C5A572]/30 group-hover:border-[#C5A572] transition-all duration-500">
                    <Phone className="w-5 h-5 text-[#C5A572] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs mb-1">Phone</p>
                  <a 
                    href="tel:+2348000000000" 
                    className="text-white text-lg hover:text-[#C5A572] transition-colors duration-300"
                  >
                    +234 800 000 0000
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#C5A572]/30 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C5A572] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#C5A572]/20 to-transparent flex items-center justify-center border border-[#C5A572]/30 group-hover:border-[#C5A572] transition-all duration-500">
                    <MapPin className="w-5 h-5 text-[#C5A572] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs mb-1">Location</p>
                  <p className="text-white text-lg">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#C5A572]/30 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#C5A572] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#C5A572]/20 to-transparent flex items-center justify-center border border-[#C5A572]/30 group-hover:border-[#C5A572] transition-all duration-500">
                      <span className="text-[#C5A572] group-hover:text-white transition-colors duration-500">✧</span>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs">Social</p>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C5A572] hover:border-[#C5A572] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C5A572] hover:border-[#C5A572] transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C5A572] hover:border-[#C5A572] transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Book Consultation Button */}
            <div className="pt-4">
              <button
                onClick={scrollToConsultation}
                className="w-full group relative px-8 py-5 bg-gradient-to-r from-[#C5A572] to-[#B08F5C] text-[#0A0A0A] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A572]/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                  <Calendar className="w-5 h-5" />
                  Book a Consultation
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div 
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="pt-6 border-t border-white/10">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Comfort Samson. All rights reserved.
            </p>
            <p className="text-white/20 text-xs mt-2">
              Executive Director, Cassia Interiors & Projects
            </p>
          </div>
        </div>
      </div>

      {/* Side decorative lines */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent transition-all duration-1500 delay-800 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent transition-all duration-1500 delay-900 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default ContactStrip;