import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, title: "Email Us", value: "safehomeafrica@gmail.com", desc: "Our team will respond within 24 hours." },
    { icon: Phone, title: "Call Us", value: "+256 775 480 844", desc: "Available Mon-Fri, 9am - 5pm EAT." },
    { icon: MapPin, title: "Visit Us", value: "Adjumani, Uganda", desc: "Nyumanzi Refugee Settlement Office." },
    { icon: Globe, title: "Our Reach", value: "Uganda & South Sudan", desc: "Serving refugee and host communities." },
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
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Get in Touch</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">Contact <span className="italic text-brand-accent">Us</span>.</h1>
            <p className="text-xl md:text-2xl text-brand-ink/60 leading-relaxed">
              Have questions or want to get involved? Reach out to our team today.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl font-serif text-brand-ink">Let's start a <span className="italic text-brand-accent">conversation</span>.</h2>
                <p className="text-xl text-brand-ink/60 leading-relaxed">
                  We are always looking for new partners, volunteers, and supporters. Whether you have a specific question or just want to learn more about our work, we'd love to hear from you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-12">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-accent">
                      <info.icon size={24} />
                    </div>
                    <h4 className="text-xl font-serif text-brand-ink">{info.title}</h4>
                    <p className="text-brand-accent font-bold text-lg">{info.value}</p>
                    <p className="text-sm text-brand-ink/40 font-bold uppercase tracking-widest">{info.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-brand-bg rounded-[60px] overflow-hidden relative group">
                <img src="https://picsum.photos/seed/map/1200/800?grayscale" alt="Map" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[40px] shadow-2xl text-center space-y-4">
                    <MapPin size={40} className="text-brand-accent mx-auto" />
                    <h4 className="text-2xl font-serif text-brand-ink">Nairobi Headquarters</h4>
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-ink/40">Community Center & Regional Office</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-bg p-12 md:p-20 rounded-[80px] shadow-2xl relative overflow-hidden">
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-8"
                >
                  <div className="w-24 h-24 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl">
                    <CheckCircle2 size={48} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-serif text-brand-ink">Message Sent!</h3>
                    <p className="text-xl text-brand-ink/60">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-brand-accent font-bold text-sm uppercase tracking-widest flex items-center gap-2"
                  >
                    Send another message <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-12 relative z-10">
                  <div className="space-y-4">
                    <h3 className="text-4xl font-serif text-brand-ink">Send a <span className="italic text-brand-accent">Message</span>.</h3>
                    <p className="text-lg text-brand-ink/60">Fill out the form below and we'll be in touch.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                      <label htmlFor="full-name" className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 px-4">Full Name</label>
                      <input 
                        id="full-name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your Name" 
                        className="w-full bg-white border-2 border-transparent rounded-full px-8 py-5 text-lg focus:outline-none focus:border-brand-accent transition-all"
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="email-address" className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 px-4">Email Address</label>
                      <input 
                        id="email-address"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Your Email" 
                        className="w-full bg-white border-2 border-transparent rounded-full px-8 py-5 text-lg focus:outline-none focus:border-brand-accent transition-all"
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 px-4">Subject</label>
                      <input 
                        id="subject"
                        type="text" 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Message Subject" 
                        className="w-full bg-white border-2 border-transparent rounded-full px-8 py-5 text-lg focus:outline-none focus:border-brand-accent transition-all"
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 px-4">Message</label>
                      <textarea 
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Your Message" 
                        className="w-full bg-white border-2 border-transparent rounded-[40px] px-8 py-6 text-lg focus:outline-none focus:border-brand-accent transition-all resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? "Sending message..." : "Send Message"}
                      className="w-full bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-primary transition-all shadow-2xl flex items-center justify-center gap-4"
                    >
                      {isSubmitting ? <Loader2 size={24} className="animate-spin" aria-hidden="true" /> : <><Send size={24} aria-hidden="true" /> Send Message</>}
                    </button>
                  </form>
                </div>
              )}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl font-serif text-brand-ink">Frequently Asked <span className="italic text-brand-accent">Questions</span>.</h2>
          <div className="grid gap-6 text-left">
            {[
              { q: "How can I donate?", a: "You can donate directly through our website using the 'Donate Now' button. We accept major credit cards and bank transfers." },
              { q: "Where do you operate?", a: "We currently have active projects in Kenya, Rwanda, and Uganda, with plans to expand across East and West Africa." },
              { q: "Can I volunteer remotely?", a: "Yes! We have remote volunteer opportunities in communications, fundraising, and technical support." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[40px] shadow-sm space-y-4"
              >
                <h4 className="text-xl font-serif text-brand-ink flex items-center gap-4">
                  <MessageSquare size={20} className="text-brand-accent" /> {faq.q}
                </h4>
                <p className="text-brand-ink/60 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
