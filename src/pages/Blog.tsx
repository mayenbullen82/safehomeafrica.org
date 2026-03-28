import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Calendar, User, Tag, Mail, Send, Loader2, X, Share2, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const posts = [
    {
      id: 1,
      title: "500 Families Receive New Homes in Kigali",
      date: "March 28, 2026",
      author: "Grace Mutua",
      category: "Housing",
      excerpt: "A milestone achievement as SAFE HOME AFRICA completes the construction of 500 safe, disaster-resistant homes in Kigali. Families celebrate their new beginnings with improved access to clean water and sanitation...",
      content: `
        <p>A milestone achievement as SAFE HOME AFRICA completes the construction of 500 safe, disaster-resistant homes in Kigali. Families celebrate their new beginnings with improved access to clean water and sanitation.</p>
        <p>The project, which took 18 months to complete, was designed to provide sustainable housing solutions for families who were previously living in temporary shelters or high-risk areas. Each home is equipped with solar lighting, a rainwater harvesting system, and a modern ventilated improved pit (VIP) latrine.</p>
        <p>"This is more than just a house; it's a foundation for our children's future," said Jean-Pierre, one of the new homeowners. "We no longer have to worry about the rain or the cold. We have a safe place to call home."</p>
        <p>The handover ceremony was attended by local government officials and community leaders, who praised SAFE HOME AFRICA for its commitment to improving the lives of vulnerable populations. The organization plans to expand this initiative to other regions in the coming year.</p>
        <h3>Community Impact</h3>
        <p>Beyond providing shelter, the project has also created local employment opportunities. Over 200 community members were trained and employed in various construction roles, from masonry to plumbing. This hands-on approach has not only reduced costs but also fostered a sense of ownership and pride among the residents.</p>
        <p>The new settlement also includes a community center, which will serve as a hub for vocational training, health workshops, and social gatherings. This holistic approach ensures that the families have the support they need to thrive in their new environment.</p>
      `,
      img: "https://picsum.photos/seed/refugee-housing-handover/800/600"
    },
    {
      id: 2,
      title: "Education Scholarships Transform Lives",
      date: "March 20, 2026",
      author: "Alice Ouma",
      category: "Education",
      excerpt: "100 students from disadvantaged backgrounds received full scholarships for secondary education. Their journey from community centers to becoming future leaders is truly inspiring and transformative...",
      content: `
        <p>100 students from disadvantaged backgrounds received full scholarships for secondary education. Their journey from community centers to becoming future leaders is truly inspiring and transformative.</p>
        <p>The scholarship program covers tuition fees, uniforms, textbooks, and a monthly stipend for school supplies. Beyond financial support, the students also receive mentorship and career guidance from SAFE HOME AFRICA's network of professionals.</p>
        <p>"Education is the key to breaking the cycle of poverty," said Alice Ouma, Education Program Coordinator. "By investing in these bright young minds, we are investing in the future of our entire community."</p>
        <p>The selected students have shown exceptional academic potential and a strong commitment to giving back to their communities. We look forward to seeing them thrive in their new schools and achieve their dreams.</p>
        <h3>Mentorship and Guidance</h3>
        <p>Each scholarship recipient is paired with a mentor who provides guidance and support throughout their secondary education. These mentors are professionals from various fields who volunteer their time to help the students navigate the challenges of school and plan for their future careers.</p>
        <p>The mentorship program has been a resounding success, with many students reporting increased confidence and a clearer sense of purpose. We believe that this personal connection is just as important as the financial support in helping the students succeed.</p>
      `,
      img: "https://picsum.photos/seed/refugee-student-scholarship/800/600"
    },
    {
      id: 3,
      title: "Women's Economic Empowerment Success Stories",
      date: "March 15, 2026",
      author: "Maria Kipkemboi",
      category: "Impact",
      excerpt: "SAFE HOME AFRICA's women empowerment program has enabled 250 women to start their own small businesses. From tailoring to farming, these entrepreneurs are now financially independent...",
      content: `
        <p>SAFE HOME AFRICA's women empowerment program has enabled 250 women to start their own small businesses. From tailoring to farming, these entrepreneurs are now financially independent.</p>
        <p>The program provides vocational training, business management workshops, and initial seed funding to help women launch their ventures. We also facilitate the formation of savings groups, allowing the women to support each other and access credit for further expansion.</p>
        <p>"I used to struggle to provide for my family, but now I have a successful tailoring shop," shared Maria, one of the program participants. "I can pay for my children's school fees and even save for the future. I feel empowered and confident."</p>
        <p>Economic empowerment of women has a ripple effect on the entire community, leading to better nutrition, health, and education for children. We are proud to support these resilient women on their journey to self-reliance.</p>
        <h3>Sustainable Business Models</h3>
        <p>The program focuses on sustainable business models that are tailored to the local market. For example, many women have started poultry farms or vegetable gardens, providing fresh produce to their communities while earning a steady income.</p>
        <p>We also provide ongoing support and mentorship to help the women grow their businesses and overcome any challenges they may face. Our goal is to create a network of successful women entrepreneurs who can inspire and support others in their communities.</p>
      `,
      img: "https://picsum.photos/seed/refugee-women-entrepreneurs/800/600"
    },
    {
      id: 4,
      title: "Healthcare Initiative Reaches 10,000 People",
      date: "March 10, 2026",
      author: "Dr. Peter Mwangi",
      category: "Healthcare",
      excerpt: "Our medical outreach programs have successfully provided healthcare services to 10,000 beneficiaries in underserved areas. Preventive healthcare and health education remain our priority...",
      content: `
        <p>Our medical outreach programs have successfully provided healthcare services to 10,000 beneficiaries in underserved areas. Preventive healthcare and health education remain our priority.</p>
        <p>The initiative includes mobile clinics that travel to remote villages, providing vaccinations, maternal health check-ups, and treatment for common illnesses. We also conduct community health workshops on topics such as hygiene, nutrition, and disease prevention.</p>
        <p>"Access to basic healthcare is a fundamental human right," said Dr. Peter Mwangi. "Our goal is to ensure that even the most remote communities have access to quality medical services and the knowledge to stay healthy."</p>
        <p>The success of this program is a testament to the hard work of our medical teams and the support of our partners. We will continue to expand our outreach to reach even more people in need.</p>
        <h3>Focus on Preventive Care</h3>
        <p>A key component of our healthcare initiative is the focus on preventive care. We believe that by educating the community on healthy practices and providing early interventions, we can significantly reduce the burden of disease and improve overall well-being.</p>
        <p>Our community health workers play a vital role in this effort, visiting families in their homes and providing personalized health advice. This grassroots approach has been highly effective in reaching those who are most in need.</p>
      `,
      img: "https://picsum.photos/seed/refugee-health-outreach/800/600"
    },
    {
      id: 5,
      title: "Community Water Projects Completed",
      date: "March 5, 2026",
      author: "Simon Korir",
      category: "Water",
      excerpt: "Eight new water points have been installed in remote communities, bringing clean water to over 5,000 people. The projects were designed and built with full community participation...",
      content: `
        <p>Eight new water points have been installed in remote communities, bringing clean water to over 5,000 people. The projects were designed and built with full community participation.</p>
        <p>Before these projects, many community members had to walk for hours to fetch water from unsafe sources. The new water points, which include boreholes and protected springs, provide a reliable supply of clean water right in the heart of the villages.</p>
        <p>"Clean water has changed our lives," said Sarah, a local resident. "We no longer get sick from dirty water, and we have more time for our families and our work. We are so grateful for this project."</p>
        <p>The sustainability of these water points is ensured through the formation of local water committees, who are trained to manage and maintain the facilities. This community-led approach is key to the long-term success of our water and sanitation initiatives.</p>
        <h3>WASH Education</h3>
        <p>In addition to providing clean water, we also conduct Water, Sanitation, and Hygiene (WASH) education programs in schools and community centers. These programs focus on the importance of handwashing, safe water storage, and proper sanitation practices.</p>
        <p>By combining infrastructure with education, we are able to achieve a lasting impact on community health and well-being. We are committed to ensuring that every person has access to clean water and safe sanitation.</p>
      `,
      img: "https://picsum.photos/seed/refugee-water-point/800/600"
    },
    {
      id: 6,
      title: "Youth Vocational Training Program Launches",
      date: "February 28, 2026",
      author: "James Ngamba",
      category: "Education",
      excerpt: "SAFE HOME AFRICA launched a comprehensive vocational training program for unemployed youth, focusing on construction, plumbing, electrical work, and other in-demand skills...",
      content: `
        <p>SAFE HOME AFRICA launched a comprehensive vocational training program for unemployed youth, focusing on construction, plumbing, electrical work, and other in-demand skills.</p>
        <p>The program aims to equip young people with practical skills that will enable them to find employment or start their own businesses. The training is conducted by experienced professionals and includes both classroom instruction and hands-on practice.</p>
        <p>"Youth unemployment is a major challenge in our region," said James Ngamba, Youth Program Coordinator. "By providing these young people with marketable skills, we are giving them the tools to build a better future for themselves and their families."</p>
        <p>The first cohort of students has already begun their training, and we are impressed by their enthusiasm and dedication. We look forward to seeing them graduate and enter the workforce as skilled professionals.</p>
        <h3>Building a Skilled Workforce</h3>
        <p>Our vocational training program is designed to meet the needs of the local economy. We work closely with employers to identify the skills that are most in demand and tailor our training accordingly.</p>
        <p>This ensures that our graduates are well-prepared for the workforce and have the best possible chance of finding employment. We are proud to be part of building a skilled and resilient workforce for the future.</p>
      `,
      img: "https://picsum.photos/seed/refugee-youth-training/800/600"
    },
    {
      id: 7,
      title: "Youth Champions of Change: Promoting Peace in Nyumanzi",
      date: "February 15, 2026",
      author: "Sarah Akello",
      category: "Peace",
      excerpt: "A transformative program designed to promote peace, unity, and psychosocial well-being among young people in Nyumanzi refugee settlement and host communities...",
      content: `
        <p>In 2024, Safe Home Africa successfully formed a vibrant group of 60 youth (30 females and 30 males) in the Nyumanzi refugee settlements and surrounding host community. These young leaders have played a pivotal role in changing the mindsets of their peers.</p>
        <p>The "Youth Champion of Change" initiative seeks to inspire young individuals to take on active roles as agents of change within their communities. This empowerment fosters dialogue and understanding across diverse cultures and backgrounds.</p>
        <p>"By equipping youth with essential tools and support, we are fostering a renewed sense of hope and commitment to peaceful coexistence," said Sarah Akello, Program Lead. "These young leaders are the bridge between communities."</p>
        <h3>Main Objectives</h3>
        <p>The program focuses on long-term mindset shifts and practical skill development. Key objectives include instilling a strong sense of belief in young people regarding their power to effect meaningful change, equipping them with new skills in communication and negotiation, and fostering peaceful coexistence between refugee and host communities.</p>
        <p>Activities include leadership trainings, conflict resolution sessions, youth peace conferences, and community engagement initiatives. We believe that by investing in our youth, we are building a more harmonious and peaceful society for everyone.</p>
      `,
      img: "https://picsum.photos/seed/refugee-youth-leadership/800/1000"
    },
    {
      id: 8,
      title: "Sustainable Livelihoods: 45 Community Gardens Thriving",
      date: "February 10, 2026",
      author: "Simon Korir",
      category: "Livelihoods",
      excerpt: "Empowering youth and families through smart agricultural practices and income-generating activities to reduce poverty and achieve food security...",
      content: `
        <p>Our sustainable livelihoods program is making a significant impact, with 45 community gardens now established and thriving across various settlements. These gardens provide fresh, nutritious food for families and a source of income through the sale of surplus produce.</p>
        <p>The program focuses on climate-smart agriculture training, agroforestry, and sustainable land use. We also support the formation of Village Savings and Loans Associations (VSLA), which enable community members to save money and access credit for their small businesses.</p>
        <p>"We have seen a 60% increase in average household income among program participants," said Simon Korir, Livelihoods Coordinator. "This financial independence is crucial for long-term resilience and well-being."</p>
        <h3>Empowering Entrepreneurs</h3>
        <p>Beyond agriculture, we have supported over 300 small-scale entrepreneurs in various fields, including tailoring, carpentry, and retail. By providing vocational skills and business management training, we are helping families build sustainable futures.</p>
        <p>The success of these initiatives is a testament to the hard work and resilience of the community members. We are committed to continuing our support and expanding our reach to even more families in need.</p>
      `,
      img: "https://picsum.photos/seed/refugee-farming-uganda/800/600"
    },
    {
      id: 9,
      title: "Our Journey: 15 Years of Impact in Adjumani",
      date: "February 5, 2026",
      author: "Safe Home Africa",
      category: "History",
      excerpt: "Founded in 2011, SAFE HOME AFRICA has grown from a small community initiative to a pan-African organization impacting over 50 communities...",
      content: `
        <p>Founded in 2011, SAFE HOME AFRICA has grown from a small community initiative to a pan-African organization impacting over 50 communities. Our work has touched the lives of more than 5,000 families, providing housing, education, and healthcare services.</p>
        <p>Our journey began as a small housing initiative in Kigali, Rwanda, helping just 10 families. Over the years, we expanded our reach to include education and healthcare programs across East Africa, eventually reaching the milestone of 5,000 families helped by 2021.</p>
        <p>"We envision a world where everyone has a decent place to live freely from illness and trauma," says our mission statement. This vision continues to drive us forward as we work to empower communities and build a sustainable future for Africa.</p>
        <h3>Core Values</h3>
        <p>Our foundation is built on transparency, mutual respect, teamwork, passion, commitment, and equity. These principles guide every decision we make and every project we undertake, ensuring that we remain dedicated to the people we support.</p>
        <p>As we look to the future, we remain committed to our mission of transforming youth into pillars of healthcare and psychosocial services, creating safe homes and resilient communities across the continent.</p>
      `,
      img: "https://picsum.photos/seed/refugee-settlement-history/800/800"
    },
    {
      id: 10,
      title: "Mental Health: Healing Trauma in Refugee Communities",
      date: "January 28, 2026",
      author: "Maria Kipkemboi",
      category: "Healthcare",
      excerpt: "Providing crucial psychosocial support to promote peaceful coexistence and well-being. We focus on peer-to-peer counseling and trauma recovery...",
      content: `
        <p>Our Mental Health and Psychosocial Support (MHPSS) program is providing crucial care to survivors of conflict, promoting peaceful coexistence and well-being within refugee and host communities.</p>
        <p>We focus on peer-to-peer counseling, trauma recovery workshops, and the integration of MHPSS in primary schools. We also provide art and play therapy for refugee children, helping them process their experiences in a safe and supportive environment.</p>
        <p>"Over 1,200 youth have been supported through our trauma care programs," says Maria Kipkemboi. "We have seen a 40% reduction in reported community conflicts as a result of our peer-support networks."</p>
        <h3>Building Resilience</h3>
        <p>By equipping individuals with the tools to manage trauma and build resilience, we are fostering a more stable and harmonious community. Our active peer-support networks provide a vital lifeline for those navigating the challenges of displacement.</p>
        <p>We believe that mental health is just as important as physical health, and we are committed to ensuring that everyone has access to the support they need to heal and thrive.</p>
      `,
      img: "https://picsum.photos/seed/refugee-counseling-session/800/600"
    },
    {
      id: 11,
      title: "Climate Action: 5,000 Trees Planted in 2024",
      date: "January 15, 2026",
      author: "Simon Korir",
      category: "Environment",
      excerpt: "Advocating for climate change awareness and implementing smart agriculture practices to protect the environment and ensure sustainability...",
      content: `
        <p>Our Climate and Environment program is making significant strides in protecting the environment and ensuring sustainability within our communities. In 2024 alone, we successfully planted and monitored over 5,000 indigenous trees.</p>
        <p>We also advocate for clean cooking and energy solutions, with 200 families now using clean energy alternatives. Our environmental education programs in schools are raising awareness among the next generation of leaders.</p>
        <p>"Climate change is a major challenge for our communities," says Simon Korir. "By implementing smart agriculture practices and promoting environmental stewardship, we are building a more resilient and sustainable future."</p>
        <h3>Community-Led Solutions</h3>
        <p>Our program also includes community-led waste management initiatives, with three new waste collection centers built to serve high-need areas. These projects are designed and managed by the community members themselves, ensuring long-term success and ownership.</p>
        <p>We are proud to support these efforts to protect our planet and build a greener future for all. Every tree planted and every clean energy solution adopted brings us one step closer to a sustainable Africa.</p>
      `,
      img: "https://picsum.photos/seed/refugee-tree-planting/800/600"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1500);
  };

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
            <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Latest News</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">News & <span className="italic text-brand-accent">Stories</span>.</h1>
            <p className="text-xl md:text-2xl text-brand-ink/60 leading-relaxed">
              Updates from our projects and impact stories from the field across Africa.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                aria-labelledby={`post-title-${i}`}
              >
                <div className="aspect-video rounded-[40px] overflow-hidden mb-8 relative">
                  <img src={post.img} alt={`Cover image for ${post.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-xs text-brand-ink/40 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar size={14} aria-hidden="true" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={14} aria-hidden="true" /> {post.author}</span>
                  </div>
                  <h3 id={`post-title-${i}`} className="text-3xl font-serif text-brand-ink group-hover:text-brand-accent transition-colors leading-tight">{post.title}</h3>
                  <p className="text-lg text-brand-ink/60 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <button 
                    onClick={() => setSelectedPost(post)}
                    aria-label={`Read full story: ${post.title}`}
                    className="text-brand-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    Read Full Story <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-brand-ink/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="absolute top-6 right-6 z-20 flex gap-3">
                <button 
                  onClick={handleShare}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-brand-accent text-brand-ink hover:text-white rounded-full flex items-center justify-center transition-all relative"
                  aria-label="Share story"
                >
                  <Share2 size={20} />
                  {copySuccess && (
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-brand-ink text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                      Link Copied!
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-brand-accent text-brand-ink hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label="Close story"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 scroll-smooth">
                <div className="aspect-[21/9] w-full relative">
                  <img 
                    src={selectedPost.img} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-16">
                    <div className="space-y-4 max-w-3xl">
                      <span className="bg-brand-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {selectedPost.category}
                      </span>
                      <h2 className="text-3xl md:text-6xl font-serif text-white leading-tight">
                        {selectedPost.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-16 space-y-12">
                  <div className="flex flex-wrap items-center gap-8 text-xs text-brand-ink/40 font-bold uppercase tracking-widest border-b border-gray-100 pb-8">
                    <span className="flex items-center gap-2"><Calendar size={16} className="text-brand-accent" /> {selectedPost.date}</span>
                    <span className="flex items-center gap-2"><User size={16} className="text-brand-accent" /> {selectedPost.author}</span>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                      <div 
                        className="prose prose-lg max-w-none text-brand-ink/70 leading-relaxed space-y-6 prose-headings:font-serif prose-headings:text-brand-ink prose-h3:text-3xl prose-p:text-xl"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                      />

                      <div className="bg-brand-bg p-10 rounded-[40px] border border-gray-100 space-y-6">
                        <h4 className="text-2xl font-serif text-brand-ink">Support our mission</h4>
                        <p className="text-brand-ink/60">Your contribution helps us continue these impactful projects across Africa. Every donation makes a difference.</p>
                        <Link 
                          to="/contact" 
                          onClick={() => setSelectedPost(null)}
                          className="inline-flex items-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl"
                        >
                          <Heart size={18} /> Donate Now
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div className="space-y-6">
                        <h4 className="text-xl font-serif text-brand-ink border-b border-gray-100 pb-4">Related Stories</h4>
                        <div className="space-y-8">
                          {posts.filter(p => p.id !== selectedPost.id).slice(0, 3).map((p, i) => (
                            <button 
                              key={i}
                              onClick={() => {
                                setSelectedPost(p);
                                document.querySelector('.overflow-y-auto')?.scrollTo(0, 0);
                              }}
                              className="flex gap-4 group/rel text-left"
                            >
                              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover/rel:scale-110 transition-transform" />
                              </div>
                              <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">{p.category}</p>
                                <h5 className="text-sm font-serif text-brand-ink group-hover/rel:text-brand-accent transition-colors line-clamp-2">{p.title}</h5>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-brand-ink text-white p-8 rounded-[40px] space-y-4">
                        <h4 className="text-lg font-serif">Never miss an update</h4>
                        <p className="text-xs text-white/60 leading-relaxed">Subscribe to our newsletter for the latest impact stories.</p>
                        <button 
                          onClick={() => {
                            setSelectedPost(null);
                            document.getElementById('newsletter-email')?.focus();
                          }}
                          className="text-brand-secondary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2"
                        >
                          Subscribe Now <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 border-t border-gray-100 flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="text-brand-ink/40 font-bold text-xs uppercase tracking-widest hover:text-brand-accent transition-colors"
                    >
                      ← Back to Blog
                    </button>
                    <div className="flex gap-4">
                      <button onClick={handleShare} className="text-brand-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <Share2 size={14} /> Share Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Newsletter Section */}
      <section className="section-padding bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto text-brand-secondary" aria-hidden="true">
            <Mail size={40} />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Stay <span className="italic text-brand-secondary">Updated</span>.</h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Subscribe to our newsletter to receive the latest news, impact stories, and updates from SAFE HOME AFRICA.
            </p>
          </div>
          
          <div aria-live="polite">
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-primary/20 border border-brand-primary p-8 rounded-[40px] text-brand-secondary"
              >
                <h4 className="text-2xl font-serif mb-2">Thank you for subscribing!</h4>
                <p className="text-sm uppercase tracking-widest font-bold">You'll receive our next update soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
                <input 
                  id="newsletter-email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Subscribing..." : "Subscribe to newsletter"}
                  className="bg-brand-accent text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-primary transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  {isSubmitting ? <Loader2 size={24} className="animate-spin" aria-hidden="true" /> : <><Send size={20} aria-hidden="true" /> Subscribe</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
