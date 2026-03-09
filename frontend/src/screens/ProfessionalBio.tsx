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
  return (
    <div>
      <BioNavbar />
      <BioHero />
      <ProfessionalSummary />
      <CoreExpertise />
      <ProfessionalExperience />
      <Certifications /> 
      <Education />
      <LeadershipRole />
      <ContactStrip />
    </div>
  )
}

export default ProfessionalBio
