import { useState } from "react";

const ConnectWithUs = () => {
  const [tab, setTab] = useState<"company" | "contact">("company");

  return (
    <section id="connect" className="relative overflow-hidden bg-[#F7F4EF] py-24">
      {/* Minimalist background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-[#2F7D76]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-[400px] h-[400px] bg-[#E6E08A]/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(47,125,118,0.1) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          
          {/* LEFT: Contact Form Area - refined */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 md:p-10 border border-black/5">
              
              {/* Header */}
              <div>
                <span className="text-sm font-medium tracking-[0.2em] text-[#2F7D76] uppercase">
                  Let's Connect
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-[#1A2A28] leading-tight">
                  Create marvel with your
                  <span className="block font-semibold text-[#2F7D76] mt-2">Space</span>
                </h2>
                <p className="mt-4 text-black/60 leading-relaxed max-w-xl">
                  Tell us what you want to achieve. We'll respond with the best approach,
                  timeline, and finishing plan for your project.
                </p>
              </div>

              {/* Tabs - refined */}
              <div className="mt-8 inline-flex p-1 bg-[#F7F4EF] rounded-full border border-black/5">
                <button
                  onClick={() => setTab("company")}
                  className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    tab === "company"
                      ? "bg-white text-[#2F7D76] shadow-sm"
                      : "text-black/50 hover:text-black/70"
                  }`}
                >
                  Company Info
                </button>
                <button
                  onClick={() => setTab("contact")}
                  className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    tab === "contact"
                      ? "bg-white text-[#2F7D76] shadow-sm"
                      : "text-black/50 hover:text-black/70"
                  }`}
                >
                  Quick Contact
                </button>
              </div>

              {/* Tab Content - refined */}
              <div className="mt-8">
                {tab === "company" ? (
                  <div className="grid sm:grid-cols-2 gap-4">
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
                  <div className="bg-[#F7F4EF] rounded-2xl p-6 border border-black/5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#2F7D76]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#2F7D76] text-lg">✉️</span>
                      </div>
                      <div>
                        <p className="font-medium text-[#1A2A28]">Quick message</p>
                        <p className="text-sm text-black/50 mt-1">
                          We reply within 24 hours. Send your details below.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Form - refined */}
              <div className="mt-10">
                <form
                  action="https://formspree.io/f/mlgwqyqn"
                  method="POST"
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <label className="text-sm font-medium text-[#1A2A28]">
                      Message <span className="text-[#2F7D76]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell us about your space, location, timeline, and what you want done..."
                      className="mt-2 w-full min-h-[140px] rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#2F7D76]/30 focus:ring-2 focus:ring-[#2F7D76]/10 transition-all"
                    />
                  </div>

                  <input type="hidden" name="_subject" value="New Cassia Inquiry" />

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#2F7D76] text-white rounded-xl font-medium hover:bg-[#24615b] transition-colors shadow-lg shadow-[#2F7D76]/20"
                    >
                      Send Message
                    </button>

                    <a
                      href="https://wa.me/2349082069020"
                      target="_blank"
                      rel="noreferrer"
                      className="px-8 py-3 border border-[#2F7D76]/20 text-[#1A2A28] rounded-xl font-medium hover:border-[#2F7D76]/40 hover:bg-white transition-colors"
                    >
                      Chat on WhatsApp
                    </a>

                    <p className="text-xs text-black/40">
                      By sending, you agree to be contacted about your request.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT: Modern visual composition */}
          <div className="lg:col-span-5 relative min-h-[600px] flex items-center">
            <div className="relative w-full h-full">
              {/* Main image - clean architectural presentation */}
              <div className="absolute top-0 right-0 w-[90%] h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/woman.jpg"
                  alt="Luxury interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Secondary image - overlapping */}
              <div className="absolute bottom-0 left-0 w-[70%] h-[350px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/woman.jpg"
                  alt="Interior detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
              </div>

              {/* Floating info card - refined */}
              <div className="absolute top-12 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-5 max-w-[220px] border-l-4 border-[#2F7D76]">
                <p className="text-xs text-black/40 mb-1">Available for</p>
                <p className="text-sm font-semibold text-[#1A2A28]">
                  Finishing · Styling · Execution
                </p>
                <div className="flex gap-1 mt-3">
                  <span className="w-2 h-2 rounded-full bg-[#2F7D76]" />
                  <span className="w-2 h-2 rounded-full bg-[#E6E08A]" />
                  <span className="w-2 h-2 rounded-full bg-black/20" />
                </div>
              </div>

              {/* Minimalist decorative elements */}
              <div className="absolute top-40 -right-4 w-24 h-24 border-2 border-[#2F7D76]/10 rounded-full" />
              <div className="absolute bottom-40 -left-4 w-32 h-32 bg-[#2F7D76]/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;

/* ----------------- Refined UI Helpers ----------------- */

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
    <div className="group bg-white rounded-xl p-5 border border-black/5 hover:border-[#2F7D76]/20 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#2F7D76]/5 flex items-center justify-center group-hover:bg-[#2F7D76]/10 transition-colors">
          <div className="text-[#2F7D76]">{icon}</div>
        </div>
        <div>
          <p className="text-xs text-black/40">{label}</p>
          <p className="text-sm font-medium text-[#1A2A28] mt-1 line-clamp-1">{value}</p>
        </div>
      </div>
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
      <label className="text-sm font-medium text-[#1A2A28]">
        {label} {required && <span className="text-[#2F7D76]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#2F7D76]/30 focus:ring-2 focus:ring-[#2F7D76]/10 transition-all"
      />
    </div>
  );
};

/* ----------------- Icons (refined) ----------------- */

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