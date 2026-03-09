import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    // Trigger entrance animation after component mounts
    setTimeout(() => setShowNavbar(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
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
    return () => window.removeEventListener("scroll", handleScroll);
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
          ? "bg-[#0A0A0A] py-4 shadow-2xl" 
          : "bg-transparent py-6"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Top border line - gold */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-50" />
      
      {/* Bottom border line - gold */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative focus:outline-none"
          >
            <div className="relative">
              <span className="text-2xl md:text-3xl font-light tracking-wide text-white">
                Comfort<span className="text-[#C5A572] font-medium">.</span>
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-[#C5A572] to-transparent group-hover:w-full transition-all duration-500" />
            </div>
            <span className="absolute -bottom-5 left-0 text-[10px] text-white/40 tracking-[0.3em] uppercase hidden md:block">
              Samson
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => {
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
                        ? "text-[#C5A572]" 
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  
                  {/* Active indicator - dot */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#C5A572]" />
                  )}
                  
                  {/* Hover indicator - line */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A572]/50 group-hover:w-full transition-all duration-300" />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center group focus:outline-none border border-white/20 hover:border-[#C5A572]/50 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute w-full bg-[#0A0A0A] border-t border-white/10 transition-all duration-500 overflow-hidden md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ top: '100%' }}
      >
        <div className="px-6 py-4">
          <div className="space-y-1">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-3 px-4 transition-all duration-300 ${
                    isActive 
                      ? "bg-white/5 text-[#C5A572]" 
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Signature at bottom of mobile menu */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-white/30 text-xs tracking-[0.2em] text-center">
              COMFORT SAMSON
            </p>
          </div>
        </div>
      </div>

      {/* Side accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent hidden lg:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent hidden lg:block" />
    </nav>
  );
};

export default BioNavbar;