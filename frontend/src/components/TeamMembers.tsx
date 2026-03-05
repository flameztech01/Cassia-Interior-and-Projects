type TeamMember = {
  name: string;
  role: string;
  title?: string; // optional (e.g. CEO)
  image: string;
  featured?: boolean; // CEO spotlight
};

const TEAM: TeamMember[] = [
  {
    name: "Comfort Samson",
    title: "CEO",
    role: "Executive Director / Leadership",
    image: "/woman.jpg",
    featured: true,
  },
  {
    name: "Ademosu Adedayo",
    role: "Business Development / Compliance",
    image: "/woman.jpg",
  },
  {
    name: "Faith A. Osaigbovo",
    role: "Head, Architecture / Design",
    image: "/woman.jpg",
  },
  {
    name: "Olaleye Ajayi",
    role: "Director, Creativity / Styling",
    image: "/woman.jpg",
  },
  {
    name: "Mary Ajoke Ogunjobi",
    role: "Head, Projects & Socials",
    image: "/woman.jpg",
  },
];

const TeamMembers = () => {
  const featured = TEAM.find((m) => m.featured);
  const others = TEAM.filter((m) => !m.featured);

  return (
    <section id="team-members" className="relative overflow-hidden bg-[#F7F4EF] py-24">
      {/* Minimalist background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-[#2F7D76]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-[400px] h-[400px] bg-[#E6E08A]/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(47,125,118,0.1) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Refined header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-[#2F7D76] uppercase block mb-3">
              The Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1A2A28]">
              People behind <span className="font-semibold text-[#2F7D76]">the brand</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#2F7D76]/30 mt-6" />
          </div>

          <div className="hidden md:flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-5 py-3 shadow-sm border border-black/5">
            <span className="text-sm text-black/50">Cassia Team</span>
            <span className="text-2xl font-light text-[#2F7D76]">{TEAM.length}</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Featured CEO - modernized */}
          {featured && (
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-black/5">
                {/* Minimalist badge */}
                <div className="absolute -top-3 right-8">
                  <span className="bg-[#2F7D76] text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
                    Leadership
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  {/* Clean image container - circular instead of hex for modern look */}
                  <div className="relative mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-[#2F7D76]/10">
                      <img
                        src={featured.image}
                        alt={featured.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Subtle decorative element */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#E6E08A]/20 rounded-full blur-xl" />
                  </div>

                  <div>
                    <span className="text-xs text-black/40 uppercase tracking-wider">Founder &</span>
                    <h3 className="text-2xl font-semibold text-[#1A2A28] mt-1">
                      {featured.name}
                    </h3>
                    <p className="text-[#2F7D76] font-medium mt-1">
                      {featured.title}
                    </p>
                    <p className="text-sm text-black/50 mt-2 max-w-xs mx-auto">
                      {featured.role}
                    </p>
                  </div>

                  {/* Tags - minimalist */}
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {["Precision", "Integrity", "Craftsmanship"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs text-[#2F7D76] bg-[#2F7D76]/5 rounded-full border border-[#2F7D76]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other members - refined */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {others.map((m) => (
                <div
                  key={m.name}
                  className="group bg-white rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1 border border-black/5"
                >
                  <div className="flex items-center gap-5">
                    {/* Circular avatar */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#2F7D76]/10 group-hover:ring-[#2F7D76]/30 transition-all duration-300">
                        <img
                          src={m.image}
                          alt={m.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#1A2A28]">
                        {m.name}
                      </h4>
                      <p className="text-sm text-black/50 mt-1 leading-relaxed">
                        {m.role}
                      </p>
                      {/* Minimalist accent line */}
                      <div className="mt-3 w-12 h-0.5 bg-[#E6E08A] group-hover:w-20 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team culture note - refined */}
            <div className="mt-8 relative">
              <div className="bg-gradient-to-r from-[#2F7D76] to-[#1A2A28] rounded-2xl p-8 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <p className="text-sm font-medium tracking-wider opacity-80 mb-2">
                  Team Culture
                </p>
                <p className="text-xl font-light leading-relaxed max-w-2xl">
                  We deliver seamless finishing, thoughtful design, and premium execution — 
                  <span className="block font-semibold mt-2">one detail at a time.</span>
                </p>
                {/* Decorative dots */}
                <div className="flex gap-2 mt-6">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional bottom accent */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#2F7D76]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;