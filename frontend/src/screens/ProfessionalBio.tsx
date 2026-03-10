import { useState, useEffect } from "react";
import { Home, ArrowRight } from "lucide-react";
import BioNavbar from "../bioComponents/bioNavbar"
import BioHero from "../bioComponents/BioHero"
import ProfessionalSummary from "../bioComponents/ProfessionalSummary"
import CoreExpertise from "../bioComponents/CoreExpertise"
import ProfessionalExperience from "../bioComponents/ProfessionalExperience"
import Certifications from "../bioComponents/Certifications"
import Education from "../bioComponents/Education"
import LeadershipRole from "../bioComponents/LeadershipRole"
import ContactStrip from "../bioComponents/ContactStrip"

const ProfessionalBio = () => {
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  // Use any type to avoid Node.js type issues, or use number | undefined
  const [scrollTimeout, setScrollTimeout] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the icon while scrolling
      setShowFloatingIcon(false);
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set new timeout to show icon when scrolling stops
      const timeout = setTimeout(() => {
        setShowFloatingIcon(true);
      }, 500); // Show after 500ms of no scrolling
      
      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial timeout to show icon after page loads
    const initialTimeout = setTimeout(() => {
      setShowFloatingIcon(true);
    }, 1000);
    
    setScrollTimeout(initialTimeout);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []); // Empty dependency array - only run once

  return (
    <div className="relative">
      <BioNavbar />
      <BioHero />
      <ProfessionalSummary />
      <CoreExpertise />
      <ProfessionalExperience />
      <Certifications /> 
      <Education />
      <LeadershipRole />
      <ContactStrip />

      {/* Floating Icon - appears when scrolling stops */}
      <a
        href="/"
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-[#2F7D76] to-[#1e5a55] text-white pl-5 pr-6 py-4 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 ${
          showFloatingIcon 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-12 opacity-0 scale-90'
        }`}
        style={{
          boxShadow: '0 20px 40px -15px rgba(47, 125, 118, 0.6)'
        }}
      >
        {/* Icon */}
        <div className="relative">
          <Home className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#E6E08A] rounded-full animate-ping" />
        </div>
        
        {/* Text */}
        <span className="text-sm font-light tracking-wide">
          Visit Main Page
        </span>
        
        {/* Arrow */}
        <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />

        {/* Decorative elements */}
        <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-white/5 rounded-full blur-xl" />
      </a>
    </div>
  );
};

export default ProfessionalBio;