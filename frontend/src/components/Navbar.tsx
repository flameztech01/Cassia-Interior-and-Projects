import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  id: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "Brand Story", id: "brand-story" },
  { label: "Vision & Mission", id: "vision-mission" },
  { label: "Brand Manifesto", id: "brand-manifesto" },
  { label: "Core Values", id: "core-values" },
  { label: "Our Projects", id: "our-projects" },
  { label: "Team Members", id: "team-members" },
  { label: "Connect With Us", id: "connect" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

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

    const navbarHeight = 100;
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
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-1000 transform ${
        showNavbar 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0"
      } ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md py-3" 
          : "bg-transparent py-6"
      }`}
    >
      {/* Elegant top border line - slides in from left */}
      <div 
        className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6ee99]/30 to-transparent transition-all duration-1500 delay-300 ${
          showNavbar ? "opacity-100" : "opacity-0"
        }`} 
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - slides in from left */}
          <button
            onClick={() => scrollToSection("home")}
            className={`group relative focus:outline-none transition-all duration-1000 delay-200 transform ${
              showNavbar 
                ? "translate-x-0 opacity-100" 
                : "-translate-x-10 opacity-0"
            }`}
            aria-label="Go to homepage"
          >
            <img 
              src="/logo.png" 
              alt="Cassia Interiors" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#f6ee99]/40 group-hover:w-full transition-all duration-700" />
          </button>

          {/* Desktop Navigation - each item slides in from right with staggered delay */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative py-2 transition-all duration-1000 transform ${
                    showNavbar 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span 
                    className={`text-sm tracking-wide transition-all duration-300 ${
                      isActive 
                        ? "text-[#f6ee99]" 
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  
                  {/* Active/ Hover Indicator - Updated to use new color when active */}
                  <span 
                    className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                      isActive 
                        ? "w-full bg-[#f6ee99]" 
                        : "w-0 bg-white group-hover:w-full"
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button - slides in from right */}
          <button
            className={`md:hidden relative w-12 h-12 flex items-center justify-center group focus:outline-none transition-all duration-1000 delay-1000 transform ${
              showNavbar 
                ? "translate-x-0 opacity-100 scale-100" 
                : "translate-x-10 opacity-0 scale-90"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="absolute inset-0 border border-white/20 group-hover:border-[#f6ee99]/40 transition-all duration-300" />
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - slides down from top */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6">
          <div className="space-y-1">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative w-full text-left py-4 transition-all duration-700 transform ${
                    isOpen 
                      ? "translate-x-0 opacity-100" 
                      : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span 
                    className={`text-base tracking-wide transition-all duration-300 ${
                      isActive 
                        ? "text-[#f6ee99]" 
                        : "text-white/50 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  
                  {/* Mobile Active Indicator - Updated to use new color */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-[#f6ee99]" />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Elegant divider - fades in */}
          <div 
            className={`mt-6 pt-6 border-t border-white/10 transition-all duration-1000 delay-700 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white/30 text-xs tracking-[0.2em]">
              ✦ SINCE 2015 ✦
            </p>
          </div>
        </div>
      </div>

      {/* Bottom border with gradient - slides in from right */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6ee99]/30 to-transparent transition-all duration-1500 delay-500 ${
          showNavbar ? "opacity-100" : "opacity-0"
        }`} 
      />
    </nav>
  );
};

export default Navbar;