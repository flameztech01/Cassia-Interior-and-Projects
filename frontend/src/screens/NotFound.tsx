import { useState, useEffect, useRef } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const goHome = () => {
    window.location.href = "/";
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
        
        {/* Elegant pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(197,165,114,0.15) 0px, rgba(197,165,114,0.15) 2px, transparent 2px, transparent 30px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Gold gradient orbs */}
        <div className="absolute top-40 -left-20 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl" />
        
        {/* Decorative 404 in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[300px] font-bold text-white/5 select-none">
          404
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* 404 Text - Main Visual */}
        <div className="mb-8">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'
            }`}
          >
            <span className="text-[150px] md:text-[200px] font-light text-white leading-none tracking-[-0.05em]">
              4<span className="text-[#C5A572]">0</span>4
            </span>
          </div>
          
          <div 
            className={`flex items-center justify-center gap-3 mt-[-20px] transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="w-12 h-px bg-[#C5A572]/40" />
            <span className="text-[#C5A572] text-sm tracking-[0.3em] uppercase">
              Page Not Found
            </span>
            <div className="w-12 h-px bg-[#C5A572]/40" />
          </div>
        </div>

        {/* Message */}
        <h2 
          className={`text-3xl md:text-4xl font-light text-white mb-4 transition-all duration-1000 delay-400 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Looks like you've wandered into 
          <span className="block text-[#C5A572] mt-2">uncharted territory</span>
        </h2>

        <p 
          className={`text-white/50 text-lg max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          The page you're looking for doesn't exist or may have been moved. 
          Let's guide you back to familiar ground.
        </p>

        {/* Action Buttons */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-5 transition-all duration-1000 delay-600 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button
            onClick={goHome}
            className="group relative px-8 py-4 bg-[#C5A572] text-[#0A0A0A] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#B08F5C] flex items-center gap-2"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">Back to Home</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>

          <button
            onClick={goBack}
            className="group px-8 py-4 border border-[#C5A572] text-[#C5A572] font-medium tracking-wide hover:bg-[#C5A572] hover:text-[#0A0A0A] transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div 
          className={`mt-16 flex items-center justify-center gap-3 text-white/30 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Search className="w-4 h-4" />
          <p className="text-sm">or try searching for what you need</p>
        </div>

        {/* Decorative Elements */}
        <div 
          className={`absolute -bottom-10 -left-10 w-40 h-40 border border-[#C5A572]/20 rounded-full transition-all duration-1500 delay-800 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
        <div 
          className={`absolute -top-10 -right-10 w-40 h-40 border border-[#C5A572]/20 rounded-full transition-all duration-1500 delay-900 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
      </div>

      {/* Bottom gradient line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A572]/50 to-transparent transition-opacity duration-1500 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Side lines */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent transition-all duration-1500 delay-800 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C5A572]/30 to-transparent transition-all duration-1500 delay-900 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </section>
  );
};

export default NotFound;