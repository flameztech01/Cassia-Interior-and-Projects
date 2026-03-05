import { useState } from "react";

const ConnectWithUs = () => {
  const [tab, setTab] = useState<"company" | "contact">("company");

  return (
    <section id="connect" className="relative overflow-hidden py-28 md:py-36 bg-black">
      {/* Sophisticated brand-colored background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-[600px] h-[600px] bg-[#2F7D76]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT: Contact Form Area - luxury redesign */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-10 md:p-12 border border-white/10">
              
              {/* Header with refined typography */}
              <div className="relative">
                <span className="text-[#2F7D76] text-sm tracking-[0.3em] uppercase relative inline-block pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-px before:bg-[#2F7D76]/40">
                  Let's Connect
                </span>
                <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                  Create marvel with your
                  <span className="block text-[#E6E08A] font-medium mt-3">Space</span>
                </h2>
                
                {/* Elegant divider */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-12 h-px bg-[#2F7D76]/40" />
                  <div className="w-2 h-2 rounded-full bg-[#E6E08A]/60" />
                  <div className="w-12 h-px bg-[#2F7D76]/40" />
                </div>
                
                <p className="mt-6 text-white/40 text-lg font-light leading-relaxed max-w-xl">
                  Tell us what you want to achieve. We'll respond with the best approach,
                  timeline, and finishing plan for your project.
                </p>
              </div>

              {/* Tabs - refined with brand colors */}
              <div className="mt-10 inline-flex p-1 bg-white/5 rounded-full border border-white/10">
                <button
                  onClick={() => setTab("company")}
                  className={`px-8 py-3 text-sm font-light rounded-full transition-all duration-500 ${
                    tab === "company"
                      ? "bg-[#2F7D76] text-white"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  Company Info
                </button>
                <button
                  onClick={() => setTab("contact")}
                  className={`px-8 py-3 text-sm font-light rounded-full transition-all duration-500 ${
                    tab === "contact"
                      ? "bg-[#2F7D76] text-white"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  Quick Contact
                </button>
              </div>

              {/* Tab Content - luxury redesign */}
              <div className="mt-10">
                {tab === "company" ? (
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InfoCard
                      label="Phone / WhatsApp"
                      value="+234-908-206-9020"
                      icon={<PhoneIcon className="w-5 h-5" />}
                      href="https://wa.me/2349082069020"
                    />
                    <InfoCard
                      label="Instagram"
                      value="@cassiainteriors"
                      icon={<InstagramIcon className="w-5 h-5" />}
                      href="https://instagram.com/cassiainteriorsandprojects"
                    />
                    <InfoCard
                      label="Facebook"
                      value="Cassia Interiors"
                      icon={<FacebookIcon className="w-5 h-5" />}
                      href="https://facebook.com/cassiainteriorsandprojects"
                    />
                    <InfoCard
                      label="Email"
                      value="cassiainteriors.projects@gmail.com"
                      icon={<MailIcon className="w-5 h-5" />}
                      href="mailto:cassiainteriors.projects@gmail.com"
                    />
                  </div>
                ) : (
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-start gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#E6E08A] rounded-full blur-md opacity-50" />
                        <div className="relative w-14 h-14 rounded-full bg-[#2F7D76]/20 flex items-center justify-center">
                          <span className="text-[#E6E08A] text-2xl">✉️</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-lg font-light">Quick message</p>
                        <p className="text-white/40 text-sm mt-2 font-light">
                          We reply within 24 hours. Send your details below.
                        </p>
                        
                        {/* Decorative line */}
                        <div className="mt-4 w-12 h-px bg-[#2F7D76]/40" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Form - luxury redesign */}
              <div className="mt-12">
                <form
                  action="https://formspree.io/f/mlgwqyqn"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      placeholder="+234 XXX XXX XXXX"
                    />
                    <Input
                      label="Project Type"
                      name="projectType"
                      placeholder="Residential / Commercial / Hospitality"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-light text-white/60">
                      Message <span className="text-[#E6E08A]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell us about your space, location, timeline, and what you want done..."
                      className="mt-3 w-full min-h-[160px] rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-[#2F7D76]/50 focus:ring-2 focus:ring-[#2F7D76]/20 transition-all font-light"
                    />
                  </div>

                  <input type="hidden" name="_subject" value="New Cassia Inquiry" />

                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pt-4">
                    <button
                      type="submit"
                      className="group relative px-10 py-4 overflow-hidden transition-all duration-500"
                    >
                      <span className="absolute inset-0 bg-[#2F7D76]" />
                      <span className="absolute inset-0 bg-gradient-to-r from-[#2F7D76] to-[#1e5a55] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative text-white font-light tracking-wide">Send Message</span>
                    </button>

                    <a
                      href="https://wa.me/2349082069020"
                      target="_blank"
                      rel="noreferrer"
                      className="group px-10 py-4 border border-white/20 text-white/80 rounded-xl font-light hover:border-[#2F7D76] hover:text-white hover:bg-white/5 transition-all duration-500"
                    >
                      Chat on WhatsApp
                      <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                  
                  <p className="text-xs text-white/20 font-light mt-6">
                    By sending, you agree to be contacted about your request.
                  </p>
                </form>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#E6E08A]/30 opacity-50" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#2F7D76]/30 opacity-50" />
            </div>
          </div>

          {/* RIGHT: Luxury visual composition */}
          <div className="lg:col-span-5 relative min-h-[700px] flex items-center">
            <div className="relative w-full h-full">
              {/* Decorative frames */}
              <div className="absolute -inset-4 border border-[#2F7D76]/20 rounded-[3rem] opacity-30" />
              <div className="absolute -inset-2 border border-[#E6E08A]/20 rounded-[3rem] opacity-20" />
              
              {/* Main image - elegant presentation */}
              <div className="absolute top-0 right-0 w-[90%] h-[550px] rounded-[2rem] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 border border-[#2F7D76]/20 rounded-[2rem] z-10 pointer-events-none" />
                <img
                  src="/woman.jpg"
                  alt="Luxury interior"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Brand color accent line */}
                <div className="absolute top-6 left-6 w-12 h-1 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A]" />
              </div>

              {/* Secondary image - overlapping composition */}
              <div className="absolute bottom-0 left-0 w-[70%] h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-black group">
                <div className="absolute inset-0 border border-[#E6E08A]/20 rounded-[2rem] z-10 pointer-events-none" />
                <img
                  src="/woman.jpg"
                  alt="Interior detail"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                
                {/* Brand color accent line */}
                <div className="absolute bottom-6 right-6 w-12 h-1 bg-gradient-to-r from-[#E6E08A] to-[#2F7D76]" />
              </div>

              {/* Floating info card - luxury redesign */}
              <div className="absolute top-16 left-4 bg-black/50 backdrop-blur-md rounded-xl border border-[#2F7D76]/30 shadow-2xl p-6 max-w-[240px]">
                <p className="text-white/40 text-xs tracking-[0.2em] mb-2">AVAILABLE FOR</p>
                <p className="text-white text-lg font-light">
                  Finishing · Styling · Execution
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="w-2 h-2 rounded-full bg-[#2F7D76]" />
                  <span className="w-2 h-2 rounded-full bg-[#E6E08A]" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-[#E6E08A]/40" />
              </div>

              {/* Decorative brand color elements */}
              <div className="absolute top-40 -right-6 w-32 h-32 border-2 border-[#2F7D76]/20 rounded-full" />
              <div className="absolute bottom-40 -left-6 w-40 h-40 bg-[#2F7D76]/10 rounded-full blur-2xl" />
              
              {/* Additional brand color accents */}
              <div className="absolute top-1/2 right-0 w-4 h-4 border-2 border-[#E6E08A]/30 rounded-full" />
              <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-[#E6E08A]/20 rounded-full blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent" />
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
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
}) => {
  const Box = (
    <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-500 hover:-translate-y-1">
      {/* Decorative corner accent */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#E6E08A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-[#2F7D76] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#2F7D76]/10 transition-colors duration-500">
            <div className="text-[#E6E08A] group-hover:text-[#2F7D76] transition-colors duration-500">
              {icon}
            </div>
          </div>
        </div>
        <div>
          <p className="text-white/30 text-xs tracking-wide font-light">{label}</p>
          <p className="text-white/80 text-sm font-light mt-2 line-clamp-1 group-hover:text-white transition-colors duration-500">
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
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) => {
  return (
    <div>
      <label className="text-sm font-light text-white/60">
        {label} {required && <span className="text-[#E6E08A]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-white placeholder:text-white/20 outline-none focus:border-[#2F7D76]/50 focus:ring-2 focus:ring-[#2F7D76]/20 transition-all font-light"
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