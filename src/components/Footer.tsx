import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, UserPlus } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-accent/20">
              <UserPlus size={24} strokeWidth={2.5} />
            </div>
            <h1 className="font-serif text-xl font-bold tracking-tight">SAFE HOME AFRICA</h1>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Empowering communities in Adjumani, Uganda through health promotion, mental health support, livelihoods, and peace building. A Refugees’ Youth led-Community Based organization dedicated to transforming lives.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" }
            ].map(({ Icon, label }, i) => (
              <a 
                key={i} 
                href="#" 
                aria-label={`Follow us on ${label}`}
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-accent transition-all"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-serif text-xl font-bold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-brand-secondary transition-colors">Our Programs</Link></li>
            <li><Link to="/team" className="hover:text-brand-secondary transition-colors">Meet the Team</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-secondary transition-colors">Photo Gallery</Link></li>
            <li><Link to="/youth-champion" className="hover:text-brand-secondary transition-colors">Youth Champion</Link></li>
            <li><Link to="/blog" className="hover:text-brand-secondary transition-colors">Latest News</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-serif text-xl font-bold">Our Programs</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/programs" className="hover:text-brand-secondary transition-colors">Health Promotion</Link></li>
            <li><Link to="/programs" className="hover:text-brand-secondary transition-colors">Mental Health (MHPSS)</Link></li>
            <li><Link to="/programs" className="hover:text-brand-secondary transition-colors">Sustainable Livelihoods</Link></li>
            <li><Link to="/programs" className="hover:text-brand-secondary transition-colors">Peace Building</Link></li>
            <li><Link to="/programs" className="hover:text-brand-secondary transition-colors">Climate & Environment</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-serif text-xl font-bold">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-secondary shrink-0" />
              <span>Nyumanzi Refugee Settlement, Adjumani, Uganda</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-secondary shrink-0" />
              <span>+256 775 480 844</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-secondary shrink-0" />
              <span>safehomeafrica@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/40 uppercase tracking-widest">
          &copy; 2026 SAFE HOME AFRICA. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs font-medium text-white/40 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
