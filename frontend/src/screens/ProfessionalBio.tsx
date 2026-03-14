import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Add this if using React Router
import BioNavbar from "../bioComponents/bioNavbar"
import BioHero from "../bioComponents/BioHero"
import ProfessionalSummary from "../bioComponents/ProfessionalSummary"
import CoreExpertise from "../bioComponents/CoreExpertise"
import ProfessionalExperience from "../bioComponents/ProfessionalExperience"
import LeadershipRole from "../bioComponents/LeadershipRole"
import ContactStrip from "../bioComponents/ContactStrip"

const ProfessionalBio = () => {
  const location = useLocation(); // Add this if using React Router

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // If there's a hash in the URL, remove it
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Prevent browser from restoring scroll position
    history.scrollRestoration = 'manual';
    
    return () => {
      history.scrollRestoration = 'auto';
    };
  }, [location.pathname]); // Re-run when pathname changes

  return (
    <div className="relative">
      <BioNavbar />
      <BioHero />
      <ProfessionalSummary />
      <CoreExpertise />
      <ProfessionalExperience />
      <LeadershipRole />
      <ContactStrip />
    </div>
  );
};

export default ProfessionalBio;