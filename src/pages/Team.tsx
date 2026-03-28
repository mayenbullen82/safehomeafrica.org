import { motion } from "motion/react";
import { Mail, Linkedin, Twitter, Users, Award, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const team = [
    {
      name: "CHOL Gabriel Machot",
      role: "Executive Director",
      desc: "Visionary leader dedicated to enriching MHPSS, Peace building, and Child Protection activities in refugee settlements.",
      img: "https://picsum.photos/seed/african-man-portrait-1/400/400"
    },
    {
      name: "TIDERU Brenda",
      role: "Board Chair",
      desc: "Steering the organization towards excellence in governance and strategic oversight for vulnerable communities.",
      img: "https://picsum.photos/seed/african-woman-portrait-1/400/400"
    },
    {
      name: "OKELLO Geoffrey Omax",
      role: "Program Manager",
      desc: "Overseeing the implementation of impactful programs and ensuring community-led development success.",
      img: "https://picsum.photos/seed/african-man-portrait-2/400/400"
    },
    {
      name: "ADHIEU Deborah",
      role: "Finance & Admin Manager",
      desc: "Managing organizational resources with transparency and ensuring efficient administrative operations.",
      img: "https://picsum.photos/seed/african-woman-portrait-2/400/400"
    },
    {
      name: "DENG Ghoi",
      role: "Human Resource Manager",
      desc: "Dedicated to building and supporting a strong team of professionals and volunteers.",
      img: "https://picsum.photos/seed/african-man-portrait-3/400/400"
    },
    {
      name: "AGOK Mabil",
      role: "Admin Assistant",
      desc: "Providing essential administrative support to ensure smooth daily operations of the organization.",
      img: "https://picsum.photos/seed/african-man-portrait-4/400/400"
    },
    {
      name: "ANZOA Golda",
      role: "Volunteer Psychologist",
      desc: "Providing crucial mental health and psychosocial support to youth and families in need.",
      img: "https://picsum.photos/seed/african-woman-portrait-3/400/400"
    },
    {
      name: "DENG Daniel",
      role: "Youth Champion Facilitator",
      desc: "Empowering young leaders to become agents of change and promote peace in their communities.",
      img: "https://picsum.photos/seed/african-man-portrait-5/400/400"
    }
  ];

  const board = [
    {
      name: "TIDERU Brenda",
      role: "Chairperson Board (UG)",
      desc: "Providing strategic leadership and oversight to ensure the organization achieves its mission.",
      img: "https://picsum.photos/seed/african-woman-portrait-4/400/400"
    },
    {
      name: "ELIJAH Chol Manyang",
      role: "Treasurer (SSD)",
      desc: "Ensuring financial accountability and sustainable resource management for the organization.",
      img: "https://picsum.photos/seed/african-man-portrait-6/400/400"
    },
    {
      name: "EMMANUEL Juruch Malok",
      role: "Public Relation & Communication Officer (SSD)",
      desc: "Leading communication strategies and representing the organization to external stakeholders.",
      img: "https://picsum.photos/seed/african-man-portrait-7/400/400"
    },
    {
      name: "ADUT Andrew Kongor",
      role: "Secretary Board (SSD)",
      desc: "Managing board documentation and ensuring effective administrative governance.",
      img: "https://picsum.photos/seed/african-woman-portrait-5/400/400"
    },
    {
      name: "DUT Solomon Dau",
      role: "Board Member (SSD)",
      desc: "Contributing expertise to guide the organization's growth and community impact.",
      img: "https://picsum.photos/seed/african-man-portrait-8/400/400"
    },
    {
      name: "MAMBO Toaha",
      role: "Board Member (SSD)",
      desc: "Supporting the board in making informed decisions for the benefit of refugee communities.",
      img: "https://picsum.photos/seed/african-man-portrait-9/400/400"
    },
    {
      name: "AMANIO Betty",
      role: "Board Member (UG)",
      desc: "Advocating for the needs of host communities and ensuring inclusive development.",
      img: "https://picsum.photos/seed/african-woman-portrait-6/400/400"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our People</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">Meet Our <span className="italic text-brand-accent">Team</span>.</h1>
            <p className="text-xl md:text-2xl text-brand-ink/60 leading-relaxed">
              Dedicated professionals and board members committed to empowering communities and creating lasting change.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Staff Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Management & Staff</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-ink">Executive Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-[60px] overflow-hidden mb-8 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-ink hover:bg-brand-accent hover:text-white transition-all"><Linkedin size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-ink hover:bg-brand-accent hover:text-white transition-all"><Twitter size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-ink hover:bg-brand-accent hover:text-white transition-all"><Mail size={18} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-brand-ink mb-2">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-4">{member.role}</p>
                <p className="text-sm text-brand-ink/60 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Grid */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Governance</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-ink">Board of Directors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {board.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-[60px] overflow-hidden mb-8 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-ink hover:bg-brand-accent hover:text-white transition-all"><Linkedin size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-ink hover:bg-brand-accent hover:text-white transition-all"><Twitter size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-ink hover:bg-brand-accent hover:text-white transition-all"><Mail size={18} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-brand-ink mb-2">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-4">{member.role}</p>
                <p className="text-sm text-brand-ink/60 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Volunteers</span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-tight">Join Our <br /> <span className="italic text-brand-accent">Community</span>.</h2>
              <p className="text-xl text-brand-ink/60 leading-relaxed">
                Over 1,000 dedicated volunteers contribute their time, skills, and passion to make our programs successful. We believe in community ownership and active participation in creating positive change.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                  <Users size={24} />
                </div>
                <h4 className="text-xl font-serif font-bold">1,000+</h4>
                <p className="text-xs text-brand-ink/50 uppercase tracking-widest font-bold">Active Volunteers</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                  <Award size={24} />
                </div>
                <h4 className="text-xl font-serif font-bold">50+</h4>
                <p className="text-xs text-brand-ink/50 uppercase tracking-widest font-bold">Communities</p>
              </div>
            </div>
            <Link 
              to="/contact" 
              aria-label="Become a Volunteer - Contact Us"
              className="inline-block bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-ink transition-all shadow-xl"
            >
              Become a Volunteer
            </Link>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-[100px] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/refugee-volunteers-group/800/800" alt="Volunteers" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-primary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-8xl font-serif leading-tight">Be Part of Our <span className="italic text-brand-secondary">Future</span>.</h2>
          <p className="text-xl md:text-2xl text-white/70">Join us in our mission to empower communities and build a sustainable future for Africa.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-ink transition-all shadow-2xl">
              Donate Now
            </Link>
            <Link to="/contact" className="border-2 border-white/20 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
