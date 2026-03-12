import BioNavbar from "../bioComponents/bioNavbar"
import BioHero from "../bioComponents/BioHero"
import ProfessionalSummary from "../bioComponents/ProfessionalSummary"
import CoreExpertise from "../bioComponents/CoreExpertise"
import ProfessionalExperience from "../bioComponents/ProfessionalExperience"
import LeadershipRole from "../bioComponents/LeadershipRole"
import ContactStrip from "../bioComponents/ContactStrip"

const ProfessionalBio = () => {
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