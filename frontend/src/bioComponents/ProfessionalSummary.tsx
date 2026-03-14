import { useState, useEffect, useRef } from "react";

const ProfessionalSummary = () => {
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
        rootMargin: "50px",
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
      id="about"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        {/* Base color with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />

        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  rgba(238,234,209,0.3) 0px,
                  rgba(238,234,209,0.3) 1px,
                  transparent 1px,
                  transparent 30px
                )
              `,
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        {/* Accent radial gradients */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#F0E237]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#50C878]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#EEEAD1]/40" />
            <span className="text-[#EEEAD1] text-sm tracking-[0.3em] uppercase">
              Professional Biography
            </span>
            <div className="w-12 h-px bg-[#EEEAD1]/40" />
          </div>
        </div>

        {/* Main Content - Now with alternating images */}
        <div className="space-y-16">
          {/* Opening quote and first paragraph with image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div
                className={`transition-all duration-1000 delay-200 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="text-6xl text-[#F0E237]/30 font-serif">"</span>
              </div>
              <p
                className={`text-white/80 text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                With over{" "}
                <span className="text-[#F0E237] font-medium">
                  11 years of experience
                </span>{" "}
                in the interior design and construction industry, Comfort Samson
                has established herself as a distinguished authority in finishing
                and spatial development. Her journey began with a simple
                observation: that the true essence of a space lies in its details.
              </p>
            </div>
            <div
              className={`relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden transition-all duration-1000 delay-400 transform ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <img
                src="/picture2.jpg"
                alt="Comfort Samson - Interior Design Expert"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
            </div>
          </div>

          {/* Second paragraph with image on left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className={`relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden order-2 lg:order-1 transition-all duration-1000 delay-500 transform ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <img
                src="/picture3.jpg"
                alt="Precision finishing details"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent opacity-40" />
            </div>
            <div className="order-1 lg:order-2">
              <p
                className={`text-white/80 text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-500 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Specializing in{" "}
                <span className="text-[#50C878] font-medium">
                  finishing and spatial development
                </span>
                , Comfort brings an unparalleled eye for precision to every
                project. She understands that finishing is not merely the final
                layer—it is the signature of quality, the hallmark of
                craftsmanship that transforms ordinary structures into
                extraordinary environments. Her expertise spans residential
                sanctuaries, commercial & corporate spaces, and hospitality
                destinations.
              </p>
            </div>
          </div>

          {/* Third paragraph with image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p
                className={`text-white/80 text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-600 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Her philosophy is rooted in the belief that spaces should do more
                than exist—they should function, inspire, and endure. Comfort
                approaches each project with an{" "}
                <span className="text-[#F0E237] font-medium">
                  architect&apos;s precision and an artist&apos;s sensibility
                </span>
                , ensuring that every line is clean, every surface flawless, and
                every material choice intentional. She transforms structures into
                functional spaces that tell stories and evoke emotion.
              </p>
            </div>
            <div
              className={`relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden transition-all duration-1000 delay-650 transform ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <img
                src="/picture4.jpg"
                alt="Spatial design and architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-50" />
            </div>
          </div>

          {/* Fourth paragraph with image on left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className={`relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden order-2 lg:order-1 transition-all duration-1000 delay-700 transform ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <img
                src="/her2.jpg"
                alt="Cassia Interiors & Projects - Executive project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent opacity-40" />
            </div>
            <div className="order-1 lg:order-2">
              <p
                className={`text-white/80 text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-700 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                As{" "}
                <span className="text-[#50C878] font-medium">
                  Executive Director of Cassia Interiors & Projects
                </span>
                , Comfort leads a team dedicated to excellence in every detail.
                Under her guidance, the firm has become synonymous with precision
                finishing, delivering projects that exceed client expectations
                across residential, commercial, corporate, and hospitality
                sectors. Her approach prioritizes spatial functionality, user
                wellbeing, material intelligence, and disciplined execution
                standards.
              </p>
            </div>
          </div>

          {/* Fifth and sixth paragraphs side by side with a feature image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p
                className={`text-white/80 text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-800 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Comfort holds{" "}
                <span className="text-[#F0E237] font-medium">
                  professional certifications in Interior Design and Project
                  Management
                </span>
                , reinforcing her ability to deliver complex projects with a
                balance of creative vision and operational precision. She holds a
                Bachelor of Science (B.Sc.) in Biochemistry from Nasarawa State
                University, Keffi.
              </p>

              <p
                className={`text-white/80 text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-900 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Beyond{" "}
                <span className="text-[#50C878] font-medium">
                  project delivery
                </span>
                , she is deeply invested in advancing finishing awareness within
                the built environment industry. She actively contributes to
                professional knowledge sharing, homeowner education, and industry
                conversations focused on improving finishing standards and spatial
                performance across modern interiors.
              </p>
            </div>
            <div
              className={`relative h-[400px] rounded-lg overflow-hidden transition-all duration-1000 delay-950 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <img
                src="/her3.jpg"
                alt="Industry presentation and knowledge sharing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
            </div>
          </div>

          {/* Closing quote and signature */}
          <div className="text-center">
            <div
              className={`transition-all duration-1000 delay-1000 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="text-6xl text-[#F0E237]/30 font-serif">"</span>
            </div>

            <div
              className={`pt-8 flex flex-col items-center transition-all duration-1000 delay-1100 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#EEEAD1] to-transparent mb-4" />
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase">
                — Precision in Every Detail —
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className={`absolute top-20 left-10 w-32 h-32 border border-[#EEEAD1]/10 rounded-full transition-all duration-1500 delay-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-48 h-48 border border-[#50C878]/10 rounded-full transition-all duration-1500 delay-1200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0E237]/40 to-transparent transition-opacity duration-1500 delay-1400 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  );
};

export default ProfessionalSummary;