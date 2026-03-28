import { motion } from "motion/react";
import { ArrowRight, Heart, Globe, Award, Users, BookOpen, Activity, Home as HomeIcon, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/uganda-refugee-settlement/1920/1080" 
            alt="Community" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-brand-secondary/20 text-brand-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Empowering African Communities Since 2011
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif leading-[0.85] text-brand-ink mb-8">
                Building <br />
                <span className="italic text-brand-accent">Dignity</span> <br />
                Through Action.
              </h1>
              <p className="text-lg md:text-2xl text-brand-ink/70 max-w-2xl mb-12 leading-relaxed">
                We provide health promotion, mental health support, livelihoods, and peace building to vulnerable communities in Adjumani, Uganda. Join our mission to create lasting change.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link 
                  to="/contact" 
                  aria-label="Support Our Mission - Contact Us"
                  className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-ink transition-all shadow-2xl flex items-center gap-3 group"
                >
                  Support Our Mission <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
                <Link 
                  to="/about" 
                  aria-label="Learn more about our story"
                  className="border-2 border-brand-ink/10 text-brand-ink px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block pointer-events-none">
          <div className="relative w-full h-full">
            <motion.div 
              animate={{ y: [0, -30, 0], rotate: [6, 8, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[10%] w-64 h-80 bg-brand-secondary/30 rounded-[100px] overflow-hidden border-8 border-white shadow-2xl"
            >
              <img src="https://picsum.photos/seed/refugee-child-smile/400/600" alt="Child" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 30, 0], rotate: [-12, -10, -12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[15%] right-[25%] w-56 h-72 bg-brand-accent/30 rounded-[100px] overflow-hidden border-8 border-white shadow-2xl"
            >
              <img src="https://picsum.photos/seed/refugee-housing-project/400/600" alt="Housing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-ink text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-16">
          {[
            { label: "Families Helped", value: "5,000+", icon: Heart },
            { label: "Communities Served", value: "50+", icon: Globe },
            { label: "Years of Service", value: "15", icon: Award },
            { label: "Active Volunteers", value: "1,000+", icon: Users },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mx-auto text-brand-secondary">
                <stat.icon size={32} />
              </div>
              <h3 className="text-5xl md:text-6xl font-serif">{stat.value}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Approach</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-ink">How We Create Change</h2>
            <p className="text-xl text-brand-ink/60">We believe in sustainable, community-led development that addresses the root causes of poverty.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Identify Needs", 
                desc: "We work directly with community leaders to identify the most vulnerable families and urgent infrastructure needs.",
                step: "01"
              },
              { 
                title: "Sustainable Action", 
                desc: "We implement long-term solutions like disaster-resistant housing and vocational training rather than temporary aid.",
                step: "02"
              },
              { 
                title: "Empowerment", 
                desc: "We provide the tools and knowledge for communities to maintain progress and become self-reliant over time.",
                step: "03"
              }
            ].map((item, i) => (
              <div key={i} className="relative p-10 bg-brand-bg rounded-[40px] border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all">
                <span className="absolute top-6 right-10 text-6xl font-serif text-brand-accent/10 group-hover:text-brand-accent/20 transition-colors">{item.step}</span>
                <h3 className="text-3xl font-serif mb-6">{item.title}</h3>
                <p className="text-brand-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Preview */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Impact</span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-ink">Core Programs</h2>
            </div>
            <Link to="/programs" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-ink transition-all">
              View All Programs <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Health Promotion", icon: Activity, color: "bg-red-50 text-red-600" },
              { title: "Mental Health (MHPSS)", icon: Heart, color: "bg-pink-50 text-pink-600" },
              { title: "Sustainable Livelihoods", icon: Award, color: "bg-amber-50 text-amber-600" },
              { title: "Peace Building", icon: Globe, color: "bg-blue-50 text-blue-600" },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <p.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-4">{p.title}</h3>
                <p className="text-sm text-brand-ink/60 leading-relaxed mb-6">Empowering communities through sustainable {p.title.toLowerCase()} initiatives designed for long-term impact.</p>
                <Link to="/programs" className="text-brand-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Learn More <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-[100px] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/refugee-family-success/800/800" alt="Happy Family" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-accent text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
              <p className="font-serif text-xl italic mb-4">"SAFE HOME AFRICA changed our lives completely. We now have a safe home for our children."</p>
              <p className="text-sm font-bold uppercase tracking-widest">— Sarah K., Mother of 4</p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Success Stories</span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-tight">Real Stories, <br /> Real Impact.</h2>
              <p className="text-xl text-brand-ink/60 leading-relaxed">
                Behind every statistic is a human story of resilience and transformation. We are proud to be part of their journey toward a better life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-serif text-brand-accent mb-2">98%</h4>
                <p className="text-sm text-brand-ink/50 uppercase tracking-widest font-bold">Program Success Rate</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-brand-accent mb-2">15k+</h4>
                <p className="text-sm text-brand-ink/50 uppercase tracking-widest font-bold">Lives Impacted</p>
              </div>
            </div>
            <Link to="/gallery" className="inline-block text-brand-ink font-bold border-b-2 border-brand-accent pb-1">
              Explore More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-primary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-8xl font-serif leading-tight">Join Us in Building a <span className="italic text-brand-secondary">Better Africa</span>.</h2>
          <p className="text-xl md:text-2xl text-white/70">Your support provides the foundation for families to thrive and communities to prosper.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-white text-brand-primary px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-secondary hover:text-white transition-all shadow-2xl">
              Donate Now
            </Link>
            <Link to="/contact" className="border-2 border-white/20 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
