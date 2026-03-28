import { motion } from "motion/react";
import { BookOpen, Activity, Award, Heart, Globe, Shield, Sparkles, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      title: "Health Promotion",
      desc: "Mobilizing and empowering youth to become pillars of healthcare provision. We focus on providing quality health information and creating access to essential services in refugee settlements.",
      icon: Activity,
      color: "bg-red-50 text-red-600",
      img: "https://picsum.photos/seed/refugee-health-clinic/800/600",
      features: [
        "HIV/AIDS & Malaria Awareness Campaigns",
        "Maternal & Child Health Support Services",
        "Community-Led Hygiene & Sanitation (WASH)",
        "Mobile Health Outreach in Remote Blocks"
      ],
      impacts: [
        "10,000+ beneficiaries reached with preventive care",
        "85% increase in local clinic attendance",
        "50+ youth trained as community health workers"
      ]
    },
    {
      title: "Mental Health & Psychosocial Support",
      desc: "Providing crucial psychosocial support to promote peaceful coexistence and well-being. We focus on peer-to-peer counseling and trauma recovery for survivors of conflict.",
      icon: Heart,
      color: "bg-pink-50 text-pink-600",
      img: "https://picsum.photos/seed/refugee-counseling-session/800/600",
      features: [
        "Peer-to-peer Counseling & Support Groups",
        "Trauma Recovery & Resilience Workshops",
        "MHPSS Integration in Primary Schools",
        "Art & Play Therapy for Refugee Children"
      ],
      impacts: [
        "1,200+ youth supported through trauma care",
        "40% reduction in reported community conflicts",
        "15 active peer-support networks established"
      ]
    },
    {
      title: "Sustainable Livelihoods",
      desc: "Empowering youth and families through smart agricultural practices and income-generating activities to reduce poverty and achieve food security.",
      icon: Award,
      color: "bg-amber-50 text-amber-600",
      img: "https://picsum.photos/seed/refugee-farming-uganda/800/600",
      features: [
        "Climate-Smart Agriculture Training",
        "Agroforestry & Sustainable Land Use",
        "Village Savings & Loans Association (VSLA)",
        "Vocational Skills & Entrepreneurship"
      ],
      impacts: [
        "45 community gardens established & thriving",
        "300+ small-scale entrepreneurs supported",
        "60% increase in average household income"
      ]
    },
    {
      title: "Peace Building",
      desc: "Fostering peace and unity through youth conferences, sports for peace, and conflict resolution training in refugee and host communities.",
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
      img: "https://picsum.photos/seed/refugee-youth-peace-conference/800/600",
      features: [
        "Youth Champion of Change Initiative",
        "Sports for Peace Community Tournaments",
        "Mediation & Conflict Resolution Training",
        "Inter-community Dialogue Forums"
      ],
      impacts: [
        "500+ Youth Champions trained as peace leaders",
        "25+ successful inter-community peace events",
        "Zero major conflicts reported in target blocks"
      ],
      link: "/youth-champion"
    },
    {
      title: "Water, Sanitation & Hygiene (WASH)",
      desc: "Ensuring access to clean water and promoting safe sanitation practices to prevent waterborne diseases and improve overall community health.",
      icon: Droplets,
      color: "bg-cyan-50 text-cyan-600",
      img: "https://picsum.photos/seed/refugee-water-well/800/600",
      features: [
        "Borehole Construction & Solar Pumping",
        "Institutional Latrine Construction",
        "School-Based Handwashing Campaigns",
        "Water User Committee Governance"
      ],
      impacts: [
        "5,000+ individuals gained clean water access",
        "70% reduction in waterborne disease cases",
        "10 schools equipped with modern WASH facilities"
      ]
    },
    {
      title: "Protection & Human Rights",
      desc: "Safeguarding the rights of vulnerable individuals, including children and women, through legal support, advocacy, and awareness campaigns.",
      icon: Shield,
      color: "bg-orange-50 text-orange-600",
      img: "https://picsum.photos/seed/refugee-protection-meeting/800/600",
      features: [
        "Child Protection & Case Management",
        "GBV Prevention & Response Advocacy",
        "Legal Rights & Documentation Support",
        "Safe Spaces for Women & At-Risk Youth"
      ],
      impacts: [
        "150+ protection cases successfully resolved",
        "5 safe spaces established in high-need areas",
        "2,000+ community members trained on rights"
      ]
    },
    {
      title: "Climate & Environment",
      desc: "Advocating for climate change awareness and implementing smart agriculture practices to protect the environment and ensure sustainability.",
      icon: Sparkles,
      color: "bg-emerald-50 text-emerald-600",
      img: "https://picsum.photos/seed/refugee-tree-planting/800/600",
      features: [
        "Indigenous Tree Planting Campaigns",
        "Clean Cooking & Energy Solutions",
        "Environmental Education in Schools",
        "Community-Led Waste Management"
      ],
      impacts: [
        "5,000+ trees planted and monitored",
        "200 families using clean energy solutions",
        "3 community waste collection centers built"
      ]
    },
    {
      title: "Quality Education",
      desc: "Supporting educational advancement and vocational training. We advocate for upgrading local schools and providing youth with learning opportunities.",
      icon: BookOpen,
      color: "bg-indigo-50 text-indigo-600",
      img: "https://picsum.photos/seed/refugee-classroom-uganda/800/600",
      features: [
        "School Infrastructure Improvement Advocacy",
        "Scholarship & Scholastic Material Support",
        "Youth Mentorship & Career Path Guidance",
        "Functional Adult Literacy (FAL) Classes"
      ],
      impacts: [
        "15 schools received critical infrastructure aid",
        "800+ students mentored for higher education",
        "95% primary school completion rate in target areas"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-brand-ink text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs">Our Work</span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif leading-tight">Comprehensive <br /> <span className="italic text-brand-secondary">Programs</span>.</h1>
            <p className="text-lg md:text-2xl text-white/60 leading-relaxed">
              We take a holistic approach to community development, addressing the most critical needs of families in refugee settlements and host communities.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-serif text-brand-secondary">15k+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Total Beneficiaries</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-serif text-brand-secondary">8</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Core Programs</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-serif text-brand-secondary">50+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Communities Reached</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 gap-12 md:gap-24">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[40px] md:rounded-[80px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="h-[300px] sm:h-[400px] lg:h-auto overflow-hidden relative">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 sm:p-12 lg:p-20 space-y-10 lg:space-y-12">
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 ${p.color} rounded-2xl flex items-center justify-center shrink-0 shadow-sm`}>
                          <p.icon size={28} className="sm:size-[32px]" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif text-brand-ink leading-tight">{p.title}</h3>
                      </div>
                      <p className="text-lg sm:text-xl text-brand-ink/60 leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                      {/* Features List */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent" aria-hidden="true">
                            <Sparkles size={16} />
                          </div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink/40">Core Features</h4>
                        </div>
                        <ul className="space-y-4" aria-label={`Features of ${p.title}`}>
                          {p.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-brand-ink/70">
                              <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 shrink-0" aria-hidden="true" />
                              <span className="text-base leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact Stats */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary" aria-hidden="true">
                            <Activity size={16} />
                          </div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink/40">2024 Impact</h4>
                        </div>
                        <div className="space-y-4" aria-label={`Impact of ${p.title} in 2024`}>
                          {p.impacts.map((impact, idx) => (
                            <div key={idx} className="p-4 bg-brand-bg rounded-2xl border border-gray-100">
                              <p className="text-sm font-medium text-brand-ink/80 leading-relaxed">{impact}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                      <Link 
                        to={p.link || "/contact"} 
                        aria-label={`Learn more about ${p.title}`}
                        className="group/btn inline-flex items-center gap-3 bg-brand-ink text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl"
                      >
                        {p.link ? "View Initiative" : "Support Program"} 
                        <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-primary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif leading-tight">Join Our <span className="italic text-brand-secondary">Mission</span>.</h2>
          <p className="text-lg md:text-2xl text-white/70">Your support provides the foundation for families to thrive and communities to prosper.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="bg-white text-brand-primary px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-brand-secondary hover:text-white transition-all shadow-2xl">
              Donate Now
            </Link>
            <Link to="/contact" className="border-2 border-white/20 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-white/10 transition-all">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
