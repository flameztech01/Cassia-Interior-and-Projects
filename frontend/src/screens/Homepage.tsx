import { useState, useEffect } from 'react'
import { MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'
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
  const [showExpanded, setShowExpanded] = useState(false)

  useEffect(() => {
    let scrollTimer: number | undefined

    const handleScroll = () => {
      setShowExpanded(false)
      
      // Clear the previous timer
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
      
      // Set a new timer
      scrollTimer = window.setTimeout(() => {
        setShowExpanded(true)
      }, 150) // Wait 150ms after scrolling stops before expanding
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
    }
  }, [])

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
      
      {/* Floating Button */}
      <Link
        to="/professional-bio"
        className={`fixed bottom-6 right-6 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 flex items-center ${
          showExpanded ? 'px-6 py-3' : 'p-4'
        }`}
        aria-label="Professional Bio"
      >
        <MdPerson size={24} className="flex-shrink-0" />
        {showExpanded && (
          <span className="ml-2 whitespace-nowrap font-medium">
            Professional Bio
          </span>
        )}
      </Link>
    </div>
  )
}

export default Homepage