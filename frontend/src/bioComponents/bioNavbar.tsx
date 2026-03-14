import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  id: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Experience", id: "experience" },
  { label: "Leadership", id: "leadership" },
  { label: "Contact", id: "contact" },
];

const BioNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#063D34]/95 backdrop-blur-md py-4 shadow-2xl"
          : "bg-transparent py-6"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EEEAD1] to-transparent opacity-60" />

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F0E237] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative focus:outline-none flex items-center gap-3"
          >
            {/* Logo - Square with rounded edges */}
            <img 
              src="/icon.png" 
              alt="Logo" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover"
            />
            
            <div className="relative">
              <span className="text-2xl md:text-3xl font-light tracking-wide text-[#EEEAD1]">
                Comfort{" "}
                <span className="text-[#EEEAD1]">Samson</span>
                <span className="text-[#F0E237] font-medium">.</span>
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-[#50C878] to-transparent group-hover:w-full transition-all duration-500" />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.slice(0, 5).map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative py-2 group"
                >
                  <span
                    className={`text-sm tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-[#F0E237]"
                        : "text-[#EEEAD1]/70 group-hover:text-[#EEEAD1]"
                    }`}
                  >
                    {item.label}
                  </span>

                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#50C878]" />
                  )}

                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#50C878]/70 group-hover:w-full transition-all duration-300" />
                </button>
              );
            })}

            {/* Cassia Link */}
            <Link to="/" className="relative py-2 group">
              <span className="text-sm tracking-wide text-[#EEEAD1]/70 group-hover:text-[#F0E237] transition-colors duration-300">
                Cassia
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#F0E237] via-[#50C878] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -top-1 -right-2 w-1 h-1 rounded-full bg-[#F0E237]/50 group-hover:bg-[#F0E237] transition-colors duration-300" />
            </Link>

            {/* Contact */}
            <button
              onClick={() => scrollToSection("contact")}
              className="relative py-2 group"
            >
              <span
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === "contact"
                    ? "text-[#F0E237]"
                    : "text-[#EEEAD1]/70 group-hover:text-[#EEEAD1]"
                }`}
              >
                Contact
              </span>

              {activeSection === "contact" && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#50C878]" />
              )}

              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#50C878]/70 group-hover:w-full transition-all duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center group focus:outline-none border border-[#EEEAD1]/20 hover:border-[#50C878]/60 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-[#EEEAD1]" />
            ) : (
              <Menu className="w-5 h-5 text-[#EEEAD1]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute w-full bg-[#063D34]/95 backdrop-blur-md border-t border-[#EEEAD1]/10 transition-all duration-500 overflow-hidden md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ top: "100%" }}
      >
        <div className="px-6 py-4">
          <div className="space-y-1">
            {NAV_ITEMS.slice(0, 5).map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-3 px-4 transition-all duration-300 rounded-md ${
                    isActive
                      ? "bg-[#EEEAD1]/10 text-[#F0E237]"
                      : "text-[#EEEAD1]/70 hover:bg-[#EEEAD1]/5 hover:text-[#EEEAD1]"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#50C878]" />
                    )}
                  </div>
                </button>
              );
            })}

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full block text-left py-3 px-4 text-[#EEEAD1]/70 hover:bg-[#EEEAD1]/5 hover:text-[#F0E237] transition-all duration-300 border-l-2 border-[#50C878]/40 hover:border-[#50C878] rounded-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">Cassia</span>
                <span className="text-[#F0E237] text-xs">↗</span>
              </div>
              <span className="block text-[10px] text-[#EEEAD1]/30 mt-1">
                Visit main site
              </span>
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className={`w-full text-left py-3 px-4 transition-all duration-300 rounded-md ${
                activeSection === "contact"
                  ? "bg-[#EEEAD1]/10 text-[#F0E237]"
                  : "text-[#EEEAD1]/70 hover:bg-[#EEEAD1]/5 hover:text-[#EEEAD1]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>Contact</span>
                {activeSection === "contact" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#50C878]" />
                )}
              </div>
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EEEAD1]/10">
            <p className="text-[#EEEAD1]/30 text-xs tracking-[0.2em] text-center">
              COMFORT SAMSON
            </p>
          </div>
        </div>
      </div>

      {/* Side accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#50C878]/40 to-transparent hidden lg:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#F0E237]/30 to-transparent hidden lg:block" />
    </nav>
  );
};

export default BioNavbar;