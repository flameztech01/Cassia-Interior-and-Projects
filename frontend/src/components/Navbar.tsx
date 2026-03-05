import { useState, useEffect } from "react";
import { Menu, X, Home, Compass, Target, BookOpen, Heart, Briefcase, Users, Mail } from "lucide-react";

type NavItem = {
  label: string;
  id: string;
  icon?: React.ElementType; // Optional icon for mobile
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home", icon: Home },
  { label: "Brand Story", id: "brand-story", icon: Compass },
  { label: "Vision & Mission", id: "vision-mission", icon: Target },
  { label: "Brand Manifesto", id: "brand-manifesto", icon: BookOpen },
  { label: "Core Values", id: "core-values", icon: Heart },
  { label: "Our Projects", id: "our-projects", icon: Briefcase },
  { label: "Team Members", id: "team-members", icon: Users },
  { label: "Connect With Us", id: "connect", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#2F7D76]/95 backdrop-blur-md shadow-lg" : "bg-[#2F7D76]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center space-x-2 focus:outline-none"
            aria-label="Go to homepage"
          >
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              CASSIA
            </span>
          </button>

          {/* Desktop Navigation - No Icons */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-white bg-white/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - With Icons */}
      <div
        className={`md:hidden absolute w-full bg-[#2F7D76] shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3">
          <div className="grid gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Section Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10">
        <div 
          className="h-full bg-white/40 transition-all duration-300"
          style={{ 
            width: `${((NAV_ITEMS.findIndex(item => item.id === activeSection) + 1) / NAV_ITEMS.length) * 100}%` 
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;