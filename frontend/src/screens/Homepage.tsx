import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from '../components/Services'
import BrandStory from "../components/BrandStory"
import VisionMission from '../components/VisionMission'
import BrandManifesto from "../components/BrandManifesto"
import CoreValues from "../components/CoreValues"
import OurProjects from "../components/OurProjects"
import Testimonials from '../components/Testimonials'
import TeamMembers from '../components/TeamMembers'
import ConnectWithUs from "../components/ConnectWithUs"

const Homepage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <BrandStory />
      <VisionMission />
      <BrandManifesto />
      <CoreValues />
      <OurProjects />
      <Testimonials />
      <TeamMembers />
      <ConnectWithUs />
    </div>
  )
}

export default Homepage