import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Users, BookOpen, ImageIcon, Mail, Heart, Activity, Sparkles, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Users },
    { path: "/programs", label: "Programs", icon: BookOpen },
    { path: "/team", label: "Our Team", icon: Activity },
    { path: "/gallery", label: "Gallery", icon: ImageIcon },
    { path: "/youth-champion", label: "Youth Champion", icon: Sparkles },
    { path: "/blog", label: "Blog", icon: Mail },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav 
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" aria-label="SAFE HOME AFRICA Home">
          <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-accent/20" aria-hidden="true">
            <UserPlus size={24} strokeWidth={2.5} />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-brand-ink">SAFE HOME AFRICA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8" role="menubar">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              role="menuitem"
              aria-current={location.pathname === item.path ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${location.pathname === item.path ? "text-brand-accent" : "text-brand-ink/70"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact"
            role="menuitem"
            className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-ink transition-all shadow-lg hover:shadow-brand-primary/20 flex items-center gap-2"
          >
            <Heart size={16} aria-hidden="true" /> Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-ink p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6" role="menu">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-lg font-serif"
                >
                  <item.icon size={20} className="text-brand-accent" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="bg-brand-accent text-white py-4 rounded-xl font-medium text-center flex items-center justify-center gap-2"
              >
                <Heart size={20} aria-hidden="true" /> Support Our Mission
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
