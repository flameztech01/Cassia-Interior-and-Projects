import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import BrandStory from "../components/BrandStory"
import VisionMission from '../components/VisionMission'
import BrandManifesto from "../components/BrandManifesto"
import CoreValues from "../components/CoreValues"
import OurProjects from "../components/OurProjects"
import TeamMembers from '../components/TeamMembers'
import ConnectWithUs from "../components/ConnectWithUs"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrandStory />
      <VisionMission />
      <BrandManifesto />
      <CoreValues />
      <OurProjects />
      <TeamMembers />
      <ConnectWithUs />
    </div>
  )
}

export default Homepage
