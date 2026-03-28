import { motion } from "motion/react";
import { ImageIcon, Heart, Users, Globe, Award, Sparkles, Droplets, Home, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryItems = [
    { title: "Housing Construction", desc: "Building safe homes for families in need across different regions.", icon: Home, img: "https://picsum.photos/seed/refugee-home-construction/600/600" },
    { title: "Education Programs", desc: "Providing quality education and skills training to young learners.", icon: BookOpen, img: "https://picsum.photos/seed/refugee-school-children/600/600" },
    { title: "Healthcare Outreach", desc: "Medical camps and health education sessions in rural communities.", icon: Sparkles, img: "https://picsum.photos/seed/refugee-medical-clinic/600/600" },
    { title: "Community Events", desc: "Engaging communities in development planning and implementation.", icon: Users, img: "https://picsum.photos/seed/refugee-community-gathering/600/600" },
    { title: "Water Projects", desc: "Installation of clean water systems serving thousands of people.", icon: Droplets, img: "https://picsum.photos/seed/refugee-water-well/600/600" },
    { title: "Livelihood Training", desc: "Skills development workshops for economic empowerment.", icon: Award, img: "https://picsum.photos/seed/refugee-vocational-workshop/600/600" },
    { title: "Child Care Programs", desc: "Supporting vulnerable children with nutrition and care.", icon: Heart, img: "https://picsum.photos/seed/refugee-nutrition-program/600/600" },
    { title: "Volunteer Activities", desc: "Community volunteers engaged in various development projects.", icon: Users, img: "https://picsum.photos/seed/refugee-youth-volunteers/600/600" },
    { title: "Women Empowerment", desc: "Programs focused on women's economic and social empowerment.", icon: Heart, img: "https://picsum.photos/seed/refugee-women-group/600/600" },
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
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Visual Stories</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">Photo <span className="italic text-brand-accent">Gallery</span>.</h1>
            <p className="text-xl md:text-2xl text-brand-ink/60 leading-relaxed">
              Visual stories from our projects and community impact across Africa.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                role="article"
                aria-label={item.title}
              >
                <div className="aspect-square rounded-[60px] overflow-hidden mb-8 relative">
                  <img src={item.img} alt={`Photograph of ${item.title}: ${item.desc}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" aria-hidden="true">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-ink"><ImageIcon size={24} /></div>
                  </div>
                </div>
                <h3 className="text-3xl font-serif text-brand-ink mb-4">{item.title}</h3>
                <p className="text-lg text-brand-ink/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-primary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-8xl font-serif leading-tight">Share Your <span className="italic text-brand-secondary">Stories</span>.</h2>
          <p className="text-xl md:text-2xl text-white/70">Do you have photos from our projects? We'd love to feature your stories and experiences.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              aria-label="Submit Photos - Contact Us"
              className="bg-white text-brand-primary px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-secondary hover:text-white transition-all shadow-2xl"
            >
              Submit Photos
            </Link>
            <Link 
              to="/contact" 
              aria-label="Contact Us for more information"
              className="border-2 border-white/20 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
