import { useState, useEffect, useRef } from "react";
import { Instagram, Facebook, Mail, MessageCircle, X, ChevronRight } from "lucide-react";

// Onboarding Form Modal Component
const OnboardingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    spaceType: "",
    currentState: "",
    likes: "",
    changes: "",
    users: "",
    userCount: "",
    duration: "",
    usage: "",
    hosting: "",
    lifestyle: "",
    discomfort: "",
    desiredFeeling: "",
    mood: "",
    inspiration: "",
    activities: "",
    flowIssues: "",
    comfortVsAppearance: "",
    colors: "",
    materials: "",
    budget: "",
    decisionMakers: "",
    successCriteria: "",
    additionalInfo: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [currentStep, setCurrentStep] = useState(0);

  const questions = [
    { name: "spaceType", label: "What type of space is this?", placeholder: "e.g., living room, bedroom, entire home, office, short-let" },
    { name: "currentState", label: "What is the current state of the space?", placeholder: "e.g., newly completed, under finishing, already occupied" },
    { name: "likes", label: "What do you like about space as it is now?", placeholder: "Tell us what you appreciate about the current space..." },
    { name: "changes", label: "What would you like to change, improve, or fix?", placeholder: "Describe what you'd like to transform..." },
    { name: "users", label: "Who will be using this space?", placeholder: "e.g., yourself, family members, roommates" },
    { name: "userCount", label: "How many people will use the space daily?", placeholder: "e.g., 1–2 adults, 3 children" },
    { name: "duration", label: "How long do you plan to use this space?", placeholder: "e.g., short-term stay, permanent residence" },
    { name: "usage", label: "How do you mostly use this space?", placeholder: "e.g., relaxing, working, entertaining, spending time with family" },
    { name: "hosting", label: "How often do you host guests, if at all?", placeholder: "e.g., rarely, weekly, frequently" },
    { name: "lifestyle", label: "Are there lifestyle habits or routines we should design around?", placeholder: "e.g., children's routines, pets, work-from-home, hobbies, religious practices" },
    { name: "discomfort", label: "What currently feels uncomfortable, inefficient, or stressful about your space?", placeholder: "Describe any pain points..." },
    { name: "desiredFeeling", label: "How do you want to feel when you enter this space?", placeholder: "e.g., calm, cozy, relaxed, energized, focused" },
    { name: "mood", label: "How would you describe the overall mood you want the space to have?", placeholder: "Describe the atmosphere you're aiming for..." },
    { name: "inspiration", label: "Have you been in a space you loved before? What stood out to you about it?", placeholder: "Share any inspirations..." },
    { name: "activities", label: "What activities must this space comfortably support on a daily basis?", placeholder: "e.g., working, cooking, relaxing, socializing" },
    { name: "flowIssues", label: "Are there any movement, layout, or flow issues you want us to solve?", placeholder: "Describe any spatial challenges..." },
    { name: "comfortVsAppearance", label: "What matters more to you: comfort, appearance, or a balance of both? Please explain.", placeholder: "Share your priorities..." },
    { name: "colors", label: "Are there any colours you love or strongly dislike?", placeholder: "Tell us about your colour preferences..." },
    { name: "materials", label: "Are there any materials, finishes, or textures you prefer or want to avoid?", placeholder: "e.g., wood, marble, velvet, metal..." },
    { name: "budget", label: "Do you have a budget range in mind for this project?", placeholder: "You may share a range or say not yet decided" },
    { name: "decisionMakers", label: "Who will be involved in making or approving decisions for this project?", placeholder: "e.g., yourself, partner, family members" },
    { name: "successCriteria", label: "What would make this project feel successful to you at the end?", placeholder: "Describe what success looks like..." },
    { name: "additionalInfo", label: "Is there anything else you would like us to know before we begin?", placeholder: "Any other details you'd like to share..." },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const formDataToSend = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          formDataToSend.append(key, value);
        }
      });
      
      formDataToSend.append("_subject", "New Cassia Interiors Questionnaire Submission");

      const response = await fetch("https://formspree.io/f/xkopgljb", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        setTimeout(() => {
          onClose();
          setFormStatus("idle");
          setFormData({
            spaceType: "",
            currentState: "",
            likes: "",
            changes: "",
            users: "",
            userCount: "",
            duration: "",
            usage: "",
            hosting: "",
            lifestyle: "",
            discomfort: "",
            desiredFeeling: "",
            mood: "",
            inspiration: "",
            activities: "",
            flowIssues: "",
            comfortVsAppearance: "",
            colors: "",
            materials: "",
            budget: "",
            decisionMakers: "",
            successCriteria: "",
            additionalInfo: "",
          });
          setCurrentStep(0);
        }, 2000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };


  const progress = ((currentStep + 1) / questions.length) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#222121] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="sticky top-0 z-10 bg-[#222121]/95 backdrop-blur-sm border-b border-white/10 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl sm:text-2xl font-light text-white">
              Cassia Interiors <span className="text-[#E6E08A]">Questionnaire</span>
            </h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <X className="w-5 h-5 text-white/60" />
            </button>
          </div>
          <p className="text-white/50 text-sm mb-4">
            I believe a well-finished space should support how you live, move, and feel every day - not just how it looks.
          </p>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#E6E08A] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-white/40 text-xs mt-2">Question {currentStep + 1} of {questions.length}</p>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-180px)] p-4 sm:p-6">
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <div key={q.name} className={`transition-all duration-300 ${idx === currentStep ? "block" : "hidden"}`}>
                <label className="block text-white font-medium mb-2">{q.label}</label>
                {q.name === "spaceType" || q.name === "currentState" || q.name === "userCount" || q.name === "duration" || q.name === "hosting" || q.name === "budget" ? (
                  <input
                    type="text"
                    name={q.name}
                    value={formData[q.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={q.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#E6E08A] focus:outline-none transition-all"
                    required={idx < 5}
                  />
                ) : (
                  <textarea
                    name={q.name}
                    value={formData[q.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={q.placeholder}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#E6E08A] focus:outline-none transition-all resize-none"
                    required={idx < 5}
                  />
                )}
              </div>
            ))}

            <div className="flex justify-between gap-4 pt-4">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-2 rounded-lg border border-white/20 text-white/70 hover:bg-white/10 transition-all ${currentStep === 0 ? "invisible" : ""}`}
              >
                Previous
              </button>
              {currentStep < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-[#E6E08A] text-[#222121] rounded-lg font-medium hover:bg-[#d8cf5e] transition-all flex items-center gap-2"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="px-6 py-2 bg-[#2F7D76] text-white rounded-lg font-medium hover:bg-[#26635d] transition-all disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Submitting..." : formStatus === "success" ? "Submitted! ✓" : formStatus === "error" ? "Error - Try Again" : "Submit"}
                </button>
              )}
            </div>
            
            {formStatus === "success" && (
              <div className="mt-4 p-3 bg-[#2F7D76]/20 border border-[#2F7D76] rounded-lg text-center">
                <p className="text-[#E6E08A] text-sm">✓ Thank you! Your questionnaire has been submitted successfully.</p>
              </div>
            )}
            
            {formStatus === "error" && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-center">
                <p className="text-white text-sm">✗ Submission failed. Please try again or contact us directly.</p>
              </div>
            )}
          </div>
        </form>

        <div className="sticky bottom-0 bg-[#222121]/95 backdrop-blur-sm border-t border-white/10 p-3 text-center">
          <p className="text-white/30 text-xs">Please answer in your own words. Any examples provided are only guides.</p>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const InfoCard = ({ label, value, icon, href, isVisible, index }: { label: string; value: string; icon: React.ReactNode; href?: string; isVisible: boolean; index: number }) => {
  const Box = (
    <div
      className={`group relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:border-[#2F7D76]/30 transition-all duration-500 hover:-translate-y-1 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${1000 + index * 100}ms` }}
    >
      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border-t border-r border-[#E6E08A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[#2F7D76] rounded-md sm:rounded-lg blur-sm sm:blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#2F7D76]/10 transition-colors duration-500">
            <div className="text-[#E6E08A] group-hover:text-[#2F7D76] transition-colors duration-500">{icon}</div>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white/30 text-[10px] sm:text-xs tracking-wide font-light truncate">{label}</p>
          <p className="text-white/80 text-xs sm:text-sm font-light mt-1 sm:mt-2 line-clamp-1 group-hover:text-white transition-colors duration-500 break-all">{value}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] group-hover:w-full transition-all duration-700" />
    </div>
  );
  if (!href) return Box;
  return <a href={href} target="_blank" rel="noreferrer" className="block">{Box}</a>;
};

const Input = ({ label, name, placeholder, required, type = "text", isVisible, index }: { label: string; name: string; placeholder?: string; required?: boolean; type?: string; isVisible: boolean; index: number }) => {
  return (
    <div className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: `${1200 + index * 100}ms` }}>
      <label className="text-xs sm:text-sm font-light text-white/60">{label} {required && <span className="text-[#E6E08A]">*</span>}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-1 sm:mt-2 md:mt-3 w-full rounded-lg sm:rounded-xl bg-white/5 border border-white/10 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-white placeholder:text-white/20 outline-none focus:border-[#2F7D76]/50 focus:ring-2 focus:ring-[#2F7D76]/20 transition-all font-light text-sm sm:text-base" />
    </div>
  );
};

// Main Component
const ConnectWithUs = () => {
  const [tab, setTab] = useState<"company" | "contact">("company");
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New Cassia Interiors Contact Inquiry");
    try {
      const response = await fetch("https://formspree.io/f/mlgodyjq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section ref={sectionRef} id="connect" className="relative overflow-hidden py-20 md:py-28 lg:py-36" style={{ backgroundColor: "#222121" }}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className={`absolute top-40 left-20 w-[600px] h-[600px] bg-[#2F7D76]/10 rounded-full blur-3xl animate-pulse transition-all duration-1500 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
          <div className={`absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#E6E08A]/10 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1500 delay-200 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1500 delay-400 ${isVisible ? "opacity-10" : "opacity-0"}`} style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${"#2F7D76"} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className={`absolute inset-0 transition-opacity duration-1500 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#222121] via-[#222121] to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#222121] via-[#222121] to-transparent" />
        </div>
        <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F7D76]/40 to-transparent transition-all duration-1500 delay-800 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} style={{ transformOrigin: "left" }} />
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent transition-all duration-1500 delay-1000 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} style={{ transformOrigin: "right" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-stretch">
            {/* LEFT COLUMN - Contact Form */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className={`bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-[2rem] p-6 md:p-10 lg:p-12 border border-white/10 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
                <div className="relative">
                  <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <span className="text-[#f6ee99] text-xs sm:text-sm tracking-[0.3em] uppercase relative inline-block pl-10 sm:pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 sm:before:w-8 before:h-px before:bg-[#2F7D76]/40">Let's Connect</span>
                  </div>
                  <h2 className="mt-4 sm:mt-6 font-light text-white">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                      <span className={`inline transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>And create marvel with your</span>
                      <span className={`block sm:inline text-[#E6E08A] font-medium transition-all duration-1000 delay-600 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}> Space</span>
                    </span>
                  </h2>
                  <div className={`flex items-center gap-3 mt-4 sm:mt-6 transition-all duration-1000 delay-700 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`} style={{ transformOrigin: "left" }}>
                    <div className="w-8 sm:w-12 h-px bg-[#2F7D76]/40" />
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#E6E08A]/60" />
                    <div className="w-8 sm:w-12 h-px bg-[#2F7D76]/40" />
                  </div>
                  <p className={`mt-4 sm:mt-6 text-white/40 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl transition-all duration-1000 delay-800 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>Tell us what you want to achieve. We'll respond with the best approach, timeline, and finishing plan for your project.</p>
                </div>

                {/* Tabs */}
                <div className={`mt-6 sm:mt-8 md:mt-10 inline-flex p-1 bg-white/5 rounded-full border border-white/10 transition-all duration-1000 delay-900 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                  <button onClick={() => setTab("company")} className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-light rounded-full transition-all duration-500 ${tab === "company" ? "bg-[#2F7D76] text-white" : "text-white/40 hover:text-white/60"}`}>Company Info</button>
                  <button onClick={() => setTab("contact")} className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-light rounded-full transition-all duration-500 ${tab === "contact" ? "bg-[#2F7D76] text-white" : "text-white/40 hover:text-white/60"}`}>Quick Contact</button>
                </div>

                {/* Tab Content */}
                <div className="mt-6 sm:mt-8 md:mt-10">
                  {tab === "company" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                      <InfoCard label="Phone / WhatsApp" value="+234-908-206-9020" icon={<MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />} href="https://wa.me/2349082069020" isVisible={isVisible} index={0} />
                      <InfoCard label="Instagram" value="@cassiainteriors" icon={<Instagram className="w-4 h-4 sm:w-5 sm:h-5" />} href="https://instagram.com/cassiainteriorsandprojects" isVisible={isVisible} index={1} />
                      <InfoCard label="Facebook" value="Cassia Interiors" icon={<Facebook className="w-4 h-4 sm:w-5 sm:h-5" />} href="https://facebook.com/cassiainteriorsandprojects" isVisible={isVisible} index={2} />
                      <InfoCard label="Email" value="cassiainteriors.projects@gmail.com" icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />} href="mailto:cassiainteriors.projects@gmail.com" isVisible={isVisible} index={3} />
                    </div>
                  ) : (
                    <div className={`bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 transition-all duration-1000 delay-1100 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                      <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                        <div className="relative shrink-0">
                          <div className="absolute inset-0 bg-[#E6E08A] rounded-full blur-md opacity-50" />
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#2F7D76]/20 flex items-center justify-center">
                            <span className="text-[#E6E08A] text-lg sm:text-xl md:text-2xl">✉️</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-base sm:text-lg font-light">Quick message</p>
                          <p className="text-white/40 text-xs sm:text-sm mt-1 sm:mt-2 font-light">We reply within 24 hours. Send your details below.</p>
                          <div className="mt-2 sm:mt-3 md:mt-4 w-8 sm:w-10 md:w-12 h-px bg-[#2F7D76]/40" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Form */}
                <div className="mt-8 sm:mt-10 md:mt-12">
                  {formStatus === "success" && (
                    <div className="mb-6 p-4 bg-[#2F7D76]/20 border border-[#2F7D76] rounded-lg backdrop-blur-sm">
                      <p className="text-[#E6E08A] text-center font-light">✓ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                  {formStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg backdrop-blur-sm">
                      <p className="text-white text-center font-light">✗ Oops! Something went wrong. Please try again or contact us directly via WhatsApp.</p>
                    </div>
                  )}
                  <form action="https://formspree.io/f/mlgodyjq" method="POST" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <Input label="Full Name" name="name" placeholder="Your name" required isVisible={isVisible} index={0} />
                      <Input label="Email Address" name="email" type="email" placeholder="you@email.com" required isVisible={isVisible} index={1} />
                      <Input label="Phone Number" name="phone" placeholder="+234 XXX XXX XXXX" isVisible={isVisible} index={2} />
                      <Input label="Project Type" name="projectType" placeholder="Residential / Commercial / Hospitality" isVisible={isVisible} index={3} />
                    </div>
                    <div className={`transition-all duration-1000 delay-1400 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                      <label className="text-xs sm:text-sm font-light text-white/60">Message <span className="text-[#E6E08A]">*</span></label>
                      <textarea name="message" required placeholder="Tell us about your space, location, timeline, and what you want done..." className="mt-2 sm:mt-3 w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] rounded-lg sm:rounded-xl bg-white/5 border border-white/10 px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-white placeholder:text-white/20 outline-none focus:border-[#2F7D76]/50 focus:ring-2 focus:ring-[#2F7D76]/20 transition-all font-light text-sm sm:text-base" />
                    </div>
                    <input type="hidden" name="_subject" value="New Cassia Inquiry" />
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch sm:items-center pt-2 sm:pt-3 md:pt-4">
                      <button type="submit" disabled={isSubmitting} className={`group relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 overflow-hidden transition-all duration-1000 delay-1500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}>
                        <span className="absolute inset-0 bg-[#2F7D76]" />
                        <span className="absolute inset-0 bg-gradient-to-r from-[#2F7D76] to-[#1e5a55] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative text-white font-light tracking-wide text-sm sm:text-base">{isSubmitting ? "Sending..." : "Send Message"}</span>
                      </button>
                      <a href="https://wa.me/2349082069020" target="_blank" rel="noreferrer" className={`group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 border border-white/20 text-white/80 rounded-lg sm:rounded-xl font-light hover:border-[#2F7D76] hover:text-white hover:bg-white/5 transition-all duration-1000 delay-1600 transform text-center text-sm sm:text-base ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                        Chat on WhatsApp <span className="inline-block ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                    <p className={`text-xs text-white/20 font-light mt-4 sm:mt-5 md:mt-6 transition-all duration-1000 delay-1700 ${isVisible ? "opacity-100" : "opacity-0"}`}>By sending, you agree to be contacted about your request.</p>
                  </form>
                </div>

                <div className={`absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t border-r border-[#E6E08A]/30 transition-opacity duration-1000 delay-1800 ${isVisible ? "opacity-50" : "opacity-0"}`} />
                <div className={`absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b border-l border-[#2F7D76]/30 transition-opacity duration-1000 delay-1900 ${isVisible ? "opacity-50" : "opacity-0"}`} />
              </div>
            </div>

            {/* RIGHT COLUMN - Visual with Onboarding Button */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center mb-8 lg:mb-0">
              <div className="relative w-full h-full">
                <div className={`absolute -inset-2 sm:-inset-3 md:-inset-4 border border-[#2F7D76]/20 rounded-2xl sm:rounded-3xl md:rounded-[3rem] transition-all duration-1000 delay-400 transform ${isVisible ? "opacity-30 scale-100" : "opacity-0 scale-95"}`} />
                <div className={`absolute -inset-1 sm:-inset-1.5 md:-inset-2 border border-[#E6E08A]/20 rounded-2xl sm:rounded-3xl md:rounded-[3rem] transition-all duration-1000 delay-500 transform ${isVisible ? "opacity-20 scale-100" : "opacity-0 scale-95"}`} />
                
                <div className={`absolute top-0 right-0 w-[85%] sm:w-[80%] md:w-[90%] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group transition-all duration-1000 delay-600 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
                  <div className="absolute inset-0 border border-[#2F7D76]/20 rounded-xl sm:rounded-2xl md:rounded-[2rem] z-10 pointer-events-none" />
                  <img src="/contact1.jpg" alt="Luxury interior" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222121]/60 via-[#222121]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className={`absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#2F7D76] to-[#E6E08A] transition-all duration-1000 delay-700 ${isVisible ? "scale-x-100" : "scale-x-0"}`} style={{ transformOrigin: "left" }} />
                </div>
                
                <div className={`absolute bottom-0 left-0 w-[65%] sm:w-[60%] md:w-[70%] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#222121] group transition-all duration-1000 delay-800 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
                  <div className="absolute inset-0 border border-[#E6E08A]/20 rounded-xl sm:rounded-2xl md:rounded-[2rem] z-10 pointer-events-none" />
                  <img src="/contact2.jpg" alt="Interior detail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#222121]/40 via-transparent to-[#222121]/60" />
                  <div className={`absolute bottom-2 sm:bottom-3 md:bottom-6 right-2 sm:right-3 md:right-6 w-6 sm:w-8 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#E6E08A] to-[#2F7D76] transition-all duration-1000 delay-900 ${isVisible ? "scale-x-100" : "scale-x-0"}`} style={{ transformOrigin: "right" }} />
                </div>
                
                <div className={`absolute top-8 sm:top-10 md:top-16 left-2 sm:left-3 md:left-4 bg-[#222121]/50 backdrop-blur-md rounded-lg sm:rounded-xl border border-[#2F7D76]/30 shadow-2xl p-3 sm:p-4 md:p-6 max-w-[180px] sm:max-w-[200px] md:max-w-[240px] transition-all duration-1000 delay-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                  <p className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] mb-1 sm:mb-2">AVAILABLE FOR</p>
                  <p className="text-white text-xs sm:text-sm md:text-lg font-light">Finishing · Styling · Execution</p>
                  <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-3 md:mt-4">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#2F7D76]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#E6E08A]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border-t border-r border-[#E6E08A]/40" />
                </div>
                
                {/* Onboarding Questionnaire Button */}
                <div className={`absolute bottom-8 sm:bottom-12 md:bottom-20 right-4 sm:right-6 md:right-8 transition-all duration-1000 delay-1100 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
                  <button onClick={() => setIsModalOpen(true)} className="group relative px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#E6E08A] to-[#d8cf5e] text-[#222121] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#E6E08A]/20 rounded-xl shadow-lg">
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                      <span className="text-lg sm:text-xl">📋</span>
                      <span className="whitespace-nowrap">Start Your Consultation</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>
                </div>
                
                <div className={`absolute top-20 sm:top-30 md:top-40 -right-4 sm:-right-5 md:-right-6 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 border border-[#2F7D76]/20 rounded-full transition-all duration-1000 delay-1200 transform ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
                <div className={`absolute bottom-20 sm:bottom-30 md:bottom-40 -left-4 sm:-left-5 md:-left-6 w-20 sm:w-24 md:w-40 h-20 sm:h-24 md:h-40 bg-[#2F7D76]/10 rounded-full blur-xl sm:blur-2xl transition-all duration-1000 delay-1300 ${isVisible ? "opacity-100" : "opacity-0"}`} />
                <div className={`absolute top-1/2 right-0 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border border-[#E6E08A]/30 rounded-full transition-all duration-1000 delay-1400 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
                <div className={`absolute bottom-1/4 left-5 sm:left-8 md:left-10 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-[#E6E08A]/20 rounded-full blur-sm transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100" : "opacity-0"}`} />
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6E08A]/40 to-transparent transition-all duration-1500 delay-2000 ${isVisible ? "opacity-100" : "opacity-0"}`} />
      </section>
      <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ConnectWithUs;