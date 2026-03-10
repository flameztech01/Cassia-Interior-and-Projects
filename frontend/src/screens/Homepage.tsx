import { useState, useEffect } from 'react'
import { MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'
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
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
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
  }, []);

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
      
      {/* Floating Button - appears when scrolling stops */}
      <Link
        to="/professional-bio"
        className={`fixed bottom-6 right-6 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-500 z-50 flex items-center ${
          showFloatingIcon ? 'px-6 py-3 opacity-100 translate-y-0' : 'p-4 opacity-0 translate-y-12'
        }`}
        aria-label="Professional Bio"
      >
        <MdPerson size={24} className="flex-shrink-0" />
        {showFloatingIcon && (
          <span className="ml-2 whitespace-nowrap font-medium">
            Professional Bio
          </span>
        )}
      </Link>
    </div>
  )
}

export default Homepage