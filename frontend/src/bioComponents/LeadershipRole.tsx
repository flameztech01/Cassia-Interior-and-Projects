import { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Target,
  ClipboardList,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const LeadershipRole = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const responsibilities = [
    {
      icon: Briefcase,
      title: "Organizational Leadership",
      description:
        "Steering the strategic direction of Cassia Interiors & Projects, fostering a culture of excellence and innovation across all operations.",
      image: "/picture1.jpg",
    },
    {
      icon: Target,
      title: "Finishing Strategy & Implementation",
      description:
        "Developing and overseeing precision finishing protocols that define the brand's signature quality and attention to detail.",
      image: "/picture2.jpg",
    },
    {
      icon: ClipboardList,
      title: "Project Planning & Supervision",
      description:
        "End-to-end oversight of project timelines, resource allocation, and quality control to ensure flawless execution.",
      image: "/picture3.jpg",
    },
    {
      icon: Users,
      title: "Client Advisory & Consultation",
      description:
        "Serving as the principal advisor for high-profile clients, translating visions into actionable design strategies.",
      image: "/picture4.jpg",
    },
    {
      icon: CheckCircle,
      title: "Interior Design Delivery Standards",
      description:
        "Establishing and maintaining rigorous quality benchmarks that distinguish Cassia's work in every delivered space.",
      image: "/picture5.jpg",
    },
  ];

  const executiveTeam = [
    { name: "Design Team", role: "Creative Excellence", image: "/picture6.jpg" },
    { name: "Projects Team", role: "Execution & Delivery", image: "/picture7.jpg" },
    { name: "Client Relations", role: "Partnership & Care", image: "/picture8.jpg" },
  ];

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
      id="leadership"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />

        {/* Executive pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(238,234,209,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "40px 100%",
            }}
          />
        </div>

        {/* Accent gradient orbs */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#F0E237]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#50C878]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`flex justify-center mb-6 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#EEEAD1]/40" />
              <span className="text-[#EEEAD1] text-sm tracking-[0.3em] uppercase">
                Executive Leadership
              </span>
              <div className="w-12 h-px bg-[#EEEAD1]/40" />
            </div>
          </div>

          <div
            className={`mb-4 transition-all duration-1000 delay-200 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">
              Executive Director
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#F0E237] text-xl md:text-2xl font-light">
                Cassia Interiors & Projects
              </span>
            </div>
          </div>

          <p
            className={`text-white/50 max-w-2xl mx-auto italic transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            "Setting the standard for precision finishing and design excellence
            across every project"
          </p>
        </div>

        {/* Executive Portrait Gallery */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-400 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {executiveTeam.map((member, index) => (
            <div key={index} className="group relative h-80 rounded-2xl overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-80" />
              
              {/* Gold corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12">
                <div className="absolute top-0 right-0 w-8 h-px bg-[#F0E237]" />
                <div className="absolute top-0 right-0 w-px h-8 bg-[#50C878]" />
              </div>
              
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[#F0E237] text-xs tracking-[0.2em] uppercase block mb-2">
                  {member.role}
                </span>
                <h4 className="text-2xl font-light text-white">{member.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Responsibilities Grid with Image Integration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {responsibilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#EEEAD1]/30 transition-all duration-500 h-full overflow-hidden">
                  {/* Background image on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                  </div>

                  {/* Executive corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-[#F0E237] to-transparent" />
                    <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#50C878] to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-[#50C878] blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-[#EEEAD1]/10 to-transparent flex items-center justify-center border border-[#EEEAD1]/20 group-hover:border-[#50C878] group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-6 h-6 text-[#F0E237] group-hover:text-[#50C878] transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#EEEAD1] transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {item.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#50C878] via-[#F0E237] to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Signature Project Showcase */}
        <div
          className={`mt-16 grid grid-cols-2 gap-4 transition-all duration-1000 delay-900 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="relative h-48 rounded-xl overflow-hidden group">
            <img
              src="/picture9.jpg"
              alt="Signature project 1"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[#F0E237] text-xs tracking-wider block">2024</span>
              <span className="text-white text-sm">Lagos Executive Residence</span>
            </div>
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden group">
            <img
              src="/picture4.jpg"
              alt="Signature project 2"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A] to-transparent opacity-60" />
            <div className="absolute bottom-4 right-4 text-right">
              <span className="text-[#50C878] text-xs tracking-wider block">2023</span>
              <span className="text-white text-sm">Abuja Corporate Tower</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex flex-col items-center gap-6 px-8 py-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#EEEAD1]/30 transition-all duration-500 group">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-[#F0E237]" />
              <span className="text-white/70 text-sm tracking-wide">
                Leading Cassia Interiors & Projects with precision and purpose
                since 2015
              </span>
            </div>

            <Link
              to="/"
              className="relative inline-flex items-center gap-2 px-8 py-3 bg-[#50C878] text-[#0A0A0A] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#3fb86b] rounded-full group/btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                Visit Cassia
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
            </Link>
          </div>
        </div>

        {/* Decorative executive seal */}
        <div
          className={`absolute -bottom-10 -right-10 w-40 h-40 transition-all duration-1500 delay-1000 ${
            isVisible ? "opacity-5 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="w-full h-full rounded-full border-4 border-[#EEEAD1]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#F0E237] text-xs font-bold transform rotate-12">
              EXECUTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Side executive lines */}
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#50C878]/40 to-transparent transition-all duration-1500 delay-900 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#F0E237]/40 to-transparent transition-all duration-1500 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EEEAD1]/40 to-transparent transition-opacity duration-1500 delay-1100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  );
};

export default LeadershipRole;