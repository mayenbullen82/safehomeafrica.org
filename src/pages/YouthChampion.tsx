import { motion } from "motion/react";
import { Sparkles, Target, Users, Heart, Shield, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const YouthChampion = () => {
  const sponsors = [
    { name: "UNHCR", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/UNHCR_logo.svg/1200px-UNHCR_logo.svg.png" },
    { name: "Office of the Prime Minister (OPM)", logo: "https://picsum.photos/seed/opm-logo/200/100" },
    { name: "Lutheran World Federation (LWF)", logo: "https://picsum.photos/seed/lwf-logo/200/100" },
    { name: "Finnish Refugee Council (FRC)", logo: "https://picsum.photos/seed/frc-logo/200/100" },
    { name: "Save the Children", logo: "https://picsum.photos/seed/savechildren-logo/200/100" },
    { name: "European Union", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png" },
    { name: "US Government", logo: "https://picsum.photos/seed/usgov-logo/200/100" },
    { name: "Dongriin Foundation", logo: "https://picsum.photos/seed/dongriin-logo/200/100" },
    { name: "Youth Empowerment Foundation (YEF)", logo: "https://picsum.photos/seed/yef-logo/200/100" },
    { name: "Refugee Law Project", logo: "https://picsum.photos/seed/rlp-logo/200/100" },
    { name: "Mercy Beyond Borders", logo: "https://picsum.photos/seed/mbb-logo/200/100" },
    { name: "Adjumani District Local Government", logo: "https://picsum.photos/seed/adjumani-logo/200/100" },
    { name: "Justice and Reconciliation Project (JRP)", logo: "https://picsum.photos/seed/jrp-logo/200/100" },
  ];

  const objectives = [
    {
      title: "Belief in Change",
      desc: "To instill a strong sense of belief in young people regarding their power to effect meaningful change in their communities.",
      icon: Target
    },
    {
      title: "Skill Acquisition",
      desc: "To equip youth with new skills and practiced behaviors that enhance their communication abilities and improve negotiation among peers.",
      icon: Sparkles
    },
    {
      title: "Peaceful Coexistence",
      desc: "To foster a renewed sense of hope and commitment to peaceful coexistence between refugee and host communities.",
      icon: Heart
    }
  ];

  const activities = [
    "Leadership Trainings",
    "Conflict Resolution Sessions",
    "Youth Peace Conferences",
    "Community Engagement Initiatives",
    "Social and Emotional Learning (SEL)",
    "Inter-community Debates"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-brand-ink text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs">Transformative Initiative</span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif leading-tight">Youth <br /> <span className="italic text-brand-secondary">Champions</span> <br /> of Change.</h1>
            <p className="text-lg md:text-2xl text-white/60 leading-relaxed max-w-xl">
              A transformative program designed to promote peace, unity, and psychosocial well-being among young people in Nyumanzi refugee settlement and host communities.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/contact" 
                aria-label="Support the Youth - Contact Us"
                className="bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-secondary transition-all shadow-2xl"
              >
                Support the Youth
              </Link>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[100px] overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="https://picsum.photos/seed/refugee-youth-leadership/800/1000" 
                alt="A group of youth leaders participating in a workshop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-accent text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
              <h4 className="text-4xl font-serif mb-2">60</h4>
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">Vibrant Youth Leaders Formed in 2024</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4" aria-hidden="true"></div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <img src="https://picsum.photos/seed/refugee-skills-training/400/600" alt="Youth participating in skills training" className="pill-image mt-16" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/refugee-community-peace/400/600" alt="Community members gathered for a peace dialogue" className="pill-image" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Program Overview</span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-tight">Empowering Agents <br /> of <span className="italic text-brand-accent">Change</span>.</h2>
              <p className="text-xl text-brand-ink/60 leading-relaxed">
                By equipping youth with essential tools and support, "Youth Champion of Change" seeks to inspire young individuals to take on active roles as agents of change within their communities. This empowerment fosters dialogue and understanding across diverse cultures and backgrounds.
              </p>
            </div>
            <div className="grid gap-6">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-ink/70">
                  <div className="w-6 h-6 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent" aria-hidden="true">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Goals</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-ink">Main Objectives</h2>
            <p className="text-xl text-brand-ink/60">We focus on long-term mindset shifts and practical skill development.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:scale-110 transition-transform" aria-hidden="true">
                  <obj.icon size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6">{obj.title}</h3>
                <p className="text-brand-ink/60 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact 2024 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto bg-brand-ink text-white rounded-[80px] p-12 md:p-24 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">Impact in <span className="italic text-brand-secondary">2024</span>.</h2>
              <p className="text-xl text-white/60 leading-relaxed">
                In 2024, Safe Home Africa successfully formed a vibrant group of 60 youth (30 females and 30 males) in the Nyumanzi refugee settlements and surrounding host community. These young leaders have played a pivotal role in changing the mindsets of their peers.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-5xl font-serif text-brand-secondary mb-2">30</h4>
                  <p className="text-xs uppercase tracking-widest font-bold text-white/40">Female Leaders</p>
                </div>
                <div>
                  <h4 className="text-5xl font-serif text-brand-secondary mb-2">30</h4>
                  <p className="text-xs uppercase tracking-widest font-bold text-white/40">Male Leaders</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/refugee-youth-group/800/600" 
                alt="Impact" 
                className="rounded-[60px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-brand-accent/5 pointer-events-none"></div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Partners</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-ink">Supported By</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {sponsors.map((sponsor, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-sm flex items-center justify-center h-32 border border-gray-100"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-accent text-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-8xl font-serif leading-tight">Join the <span className="italic text-brand-secondary">Movement</span>.</h2>
          <p className="text-xl md:text-2xl text-white/70">Support our Youth Champions as they build a more harmonious and peaceful society.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              aria-label="Donate to the Youth Champion of Change program"
              className="bg-white text-brand-accent px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-ink hover:text-white transition-all shadow-2xl"
            >
              Donate to this Program
            </Link>
            <Link 
              to="/contact" 
              aria-label="Volunteer with our Youth Champions"
              className="border-2 border-white/20 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              Volunteer with Youth
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouthChampion;
