import { motion } from "motion/react";
import { Award, Target, Heart, Users, Globe, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Story</span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-brand-ink leading-tight">Empowering <br /> <span className="italic text-brand-accent">Communities</span> <br /> in Adjumani.</h1>
              <p className="text-lg md:text-2xl text-brand-ink/60 leading-relaxed max-w-xl">
                SAFE HOME AFRICA is a Refugees’ Youth led-Community Based organization registered in Adjumani District, Uganda, committed to transforming lives through health, psychosocial support, and sustainable development.
              </p>
            </motion.div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <img src="https://picsum.photos/seed/refugee-community-meeting/400/600" alt="About" className="pill-image mt-16" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/refugee-youth-empowerment/400/600" alt="About" className="pill-image" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-primary text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
              <h4 className="text-4xl font-serif mb-2">15</h4>
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">Years of Impactful Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-10 p-12 bg-brand-bg rounded-[60px] border border-gray-100">
            <div className="w-16 h-16 bg-brand-accent/10 rounded-3xl flex items-center justify-center text-brand-accent">
              <Target size={32} />
            </div>
            <h2 className="text-4xl font-serif text-brand-ink">Our Vision</h2>
            <p className="text-xl text-brand-ink/60 leading-relaxed">
              We envision a world and Uganda where everyone has a decent place to live freely from illness, trauma, and other associated health challenges in the community of Uganda and Africa.
            </p>
          </div>
          <div className="space-y-10 p-12 bg-brand-ink text-white rounded-[60px] shadow-2xl">
            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-brand-secondary">
              <Heart size={32} />
            </div>
            <h2 className="text-4xl font-serif">Our Mission</h2>
            <p className="text-xl text-white/60 leading-relaxed">
              We exist to mobilize, support, empower, nurture, and transform youth to become pillars of providing healthcare and psychosocial services with excellence and evidence-based practice in safe homes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Foundation</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-ink">Core Values</h2>
            <p className="text-xl text-brand-ink/60">These principles guide every decision we make and every project we undertake.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Transparency", desc: "We maintain the highest standards of accountability in all our operations.", icon: Shield },
              { title: "Mutual Respect", desc: "We value every individual and foster a culture of dignity and understanding.", icon: Heart },
              { title: "Teamwork", desc: "We collaborate effectively to achieve our shared vision and mission.", icon: Users },
              { title: "Passion", desc: "We are driven by a deep commitment to serve vulnerable communities.", icon: Sparkles },
              { title: "Commitment", desc: "We stay dedicated to our goals and the people we support.", icon: Target },
              { title: "Equity & Justice", desc: "We strive for fairness and equal rights for all members of society.", icon: Globe },
            ].map((value, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:scale-110 transition-transform" aria-hidden="true">
                  <value.icon size={28} />
                </div>
                <h3 className="text-3xl font-serif mb-6">{value.title}</h3>
                <p className="text-brand-ink/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Our Journey</span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-tight">A History of <br /> <span className="italic text-brand-accent">Transformation</span>.</h2>
              <p className="text-xl text-brand-ink/60 leading-relaxed">
                Founded in 2011, SAFE HOME AFRICA has grown from a small community initiative to a pan-African organization impacting over 50 communities. Our work has touched the lives of more than 5,000 families, providing housing, education, and healthcare services.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="text-3xl font-serif text-brand-accent mt-1">2011</div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2">The Beginning</h4>
                  <p className="text-sm text-brand-ink/50">Founded as a small housing initiative in Kigali, Rwanda, helping 10 families.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-3xl font-serif text-brand-accent mt-1">2016</div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2">Expansion</h4>
                  <p className="text-sm text-brand-ink/50">Launched education and healthcare programs across East Africa.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-3xl font-serif text-brand-accent mt-1">2021</div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2">Pan-African Reach</h4>
                  <p className="text-sm text-brand-ink/50">Impacted over 50 communities and reached the milestone of 5,000 families helped.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-[100px] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/refugee-settlement-history/800/800" alt="History" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-ink text-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-8xl font-serif leading-tight">Be Part of Our <span className="italic text-brand-secondary">Future</span>.</h2>
          <p className="text-xl md:text-2xl text-white/70">Join us in our mission to empower communities and build a sustainable future for Africa.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              aria-label="Donate Now to support our mission"
              className="bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-primary transition-all shadow-2xl"
            >
              Donate Now
            </Link>
            <Link 
              to="/team" 
              aria-label="Meet our dedicated team members"
              className="border-2 border-white/20 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
