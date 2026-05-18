import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { cn } from "@/lib/utils";
import ContactModal from "@/components/ui/ContactModal";
import { serviceCategoriesData } from "@/data/service-data";
import {
  Award,
  Clock,
  Compass,
  UserCheck,
  Wind,
  VolumeX,
  CreditCard,
  Laptop,
  Star,
  Gift,
  Camera,
  Sparkles,
  Calendar,
  Eye,
  Package,
  Shield,
  Briefcase,
  ChevronDown,
  MapPin,
  Activity,
  ArrowRight,
  Wifi,
  Coffee,
  Zap,
  Smartphone,
  CloudSnow
} from "lucide-react";

interface ServiceCategoryProps {
  forcedCategoryId?: string;
}

export default function ServiceCategory({ forcedCategoryId }: ServiceCategoryProps) {
  const { serviceId } = useParams<{ serviceId: string }>();
  const activeId = forcedCategoryId || serviceId || "airport-transfers";
  
  // Safe resolution of service data
  const data = serviceCategoriesData[activeId] || serviceCategoriesData["airport-transfers"];
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Dynamic typing reset when service shifts
  const { displayText } = useTypingAnimation(data.heroSub, 35);

  // Scroll to top on mount / change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeId]);

  // Icon selector to map database string names to safe Lucide elements
  const getIcon = (name: string) => {
    switch (name) {
      case "Clock":
        return <Clock className="w-6 h-6 text-corporate-gold" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-corporate-gold" />;
      case "Wind":
        return <Wind className="w-6 h-6 text-corporate-gold" />;
      case "VolumeX":
        return <VolumeX className="w-6 h-6 text-corporate-gold" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6 text-corporate-gold" />;
      case "Laptop":
        return <Laptop className="w-6 h-6 text-corporate-gold" />;
      case "Star":
        return <Star className="w-6 h-6 text-corporate-gold" />;
      case "Gift":
        return <Gift className="w-6 h-6 text-corporate-gold" />;
      case "Camera":
        return <Camera className="w-6 h-6 text-corporate-gold" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-corporate-gold" />;
      case "Calendar":
        return <Calendar className="w-6 h-6 text-corporate-gold" />;
      case "Eye":
        return <Eye className="w-6 h-6 text-corporate-gold" />;
      case "Package":
        return <Package className="w-6 h-6 text-corporate-gold" />;
      case "Shield":
        return <Shield className="w-6 h-6 text-corporate-gold" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-corporate-gold" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-corporate-gold" />;
      case "Wifi":
        return <Wifi className="w-6 h-6 text-corporate-gold" />;
      case "Coffee":
        return <Coffee className="w-6 h-6 text-corporate-gold" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-corporate-gold" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-corporate-gold" />;
      case "CloudSnow":
        return <CloudSnow className="w-6 h-6 text-corporate-gold" />;
      default:
        return <Activity className="w-6 h-6 text-corporate-gold" />;
    }
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      
      {/* BACKGROUND DECORATIONS (Luxury radial gold light leaks) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(230,167,0,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(230,167,0,0.03),transparent_70%)] pointer-events-none" />
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 border-b border-white/5">
        
        {/* Vector diagonal gold lines */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="100" y1="0" x2="0" y2="100" stroke="#e6a700" strokeWidth="0.25" />
            <line x1="80" y1="0" x2="0" y2="80" stroke="#e6a700" strokeWidth="0.15" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Copy & Bullet Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              
              {/* Category Gold Tagline */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-gold/15 border border-corporate-gold/30">
                <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold animate-pulse" />
                <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">
                  {data.heroBadge}
                </span>
              </div>
              
              {/* Majestic Asymmetrical Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] tracking-tight">
                {data.heroTitle}
                <span className="text-gradient-gold block italic font-light mt-1">
                  {data.heroItalic}
                </span>
              </h1>
              
              {/* Decorative short gold line */}
              <div className="w-20 h-[2px] bg-gradient-to-r from-corporate-gold to-orange-500 rounded-full" />
              
              {/* Dynamic typing subtext */}
              <div className="min-h-[72px] md:min-h-[56px]">
                <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-xl">
                  {displayText}
                  <span className="inline-block w-1.5 h-4 bg-corporate-gold ml-1 animate-pulse" />
                </p>
              </div>
              
              {/* Gold Highlights capsule strip */}
              <div className="flex flex-wrap gap-3 pt-4">
                {data.heroHighlights.map((hl, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/5 backdrop-blur-md shadow-sm transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <Award className="w-3.5 h-3.5 text-corporate-gold" />
                    <span className="text-[10px] sm:text-xs text-white/90 font-bold uppercase tracking-wider">{hl}</span>
                  </div>
                ))}
              </div>

            </motion.div>
            
            {/* Right Overview Card (VIP Spec Sheet) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-6 md:p-8 backdrop-blur-xl shadow-glow transition-all duration-500 hover:border-corporate-gold/40 hover:shadow-[0_20px_50px_rgba(230,167,0,0.15)] group">
                
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-corporate-gold/45 rounded-tl-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-corporate-gold/45 rounded-br-3xl pointer-events-none" />
                
                <div className="absolute top-5 left-5 z-10 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <span className="text-corporate-gold text-[10px] font-bold uppercase tracking-widest">
                    VIP Concierge Sheet
                  </span>
                </div>
                
                {/* Showcase Image */}
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-white/5">
                  <img
                    src={data.overviewCard.image}
                    alt={data.overviewCard.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white group-hover:text-corporate-gold transition-colors duration-300">
                      {data.overviewCard.title}
                    </h3>
                  </div>
                </div>
                
                {/* Details list */}
                <div className="mt-6 space-y-4">
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {data.overviewCard.description}
                  </p>
                  
                  <div className="space-y-2">
                    {data.overviewCard.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold shadow-[0_0_6px_rgba(230,167,0,0.8)]" />
                        <span className="text-xs text-white/80 font-light">{h}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Detailed Specs Grid */}
                  <div className="pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
                    {data.overviewCard.specs.map((s, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">{s.label}</span>
                        <span className="text-xs text-corporate-gold font-bold uppercase tracking-wide mt-0.5">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. VIP EXPERIENCE & ON-BOARD HOSPITALITY AMENITIES GRID */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        
        {/* Decorative ambient dividers */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        
        <div className="container relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold animate-ping" />
              <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">
                First-Class In-Transit Inclusions
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Elite Cabin
              <span className="text-gradient-gold block italic font-light mt-1.5">
                Comforts & Conveniences.
              </span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-corporate-gold to-transparent mx-auto mt-6" />
            
            <p className="mt-6 text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Every transit with our elite drivers is meticulously equipped to maintain absolute mental clarity, physical rest, and remote digital productivity.
            </p>
          </motion.div>
          
          {/* Amenities Visual Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {data.amenities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/5 p-8 hover:border-corporate-gold/20 hover:bg-white/[0.03] transition-all duration-400 group overflow-hidden"
              >
                {/* Thin top gradient light leak */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-corporate-gold/30 transition-all duration-500" />
                
                {/* Micro gold corner guard brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-corporate-gold/0 group-hover:border-corporate-gold/20 rounded-tl-xl transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-corporate-gold/0 group-hover:border-corporate-gold/20 rounded-br-xl transition-all duration-500" />
                
                <div className="flex flex-col items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-corporate-gold/20 group-hover:bg-corporate-gold/5 transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-corporate-gold transition-colors duration-300 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 ICONIC LONDON TREASURES SECTION (EXCLUSIVELY FOR CITY TOURS) */}
      {activeId === "city-tours" && (
        <section className="relative py-32 border-t border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          
          <div className="container relative z-10">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-24"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold animate-ping" />
                <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">
                  Curated City Tour Stops
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
                Iconic London
                <span className="text-gradient-gold block italic font-light mt-1.5">
                  Treasures.
                </span>
              </h2>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-corporate-gold to-transparent mx-auto mt-6" />
              
              <p className="mt-6 text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Discover the architectural masterpieces, royal heritage sites, and historical gems of London from the supreme comfort of your private chauffeur cabin.
              </p>
            </motion.div>
            
            {/* Treasures 2-Column Grid */}
            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {[
                {
                  title: "London Eye",
                  type: "Historic Landmark Spot",
                  desc: "Witness the breathtaking panoramic views of the city skyline from the spectacular giant observation wheel.",
                  img: "/images/ada607e9-1a77-4abe-b383-edba1d490fc2.png"
                },
                {
                  title: "Tower of London",
                  type: "Royal Fortress Spot",
                  desc: "Explore nearly a thousand years of British royal history inside this legendary stone fortress and Treasury.",
                  img: "/images/chufferas.png"
                },
                {
                  title: "Buckingham Palace",
                  type: "Royal Sovereign Residence",
                  desc: "Marvel at the majestic official London residence of the British Sovereign and its historic royal gates.",
                  img: "/images/LuxuryFleet.jpg"
                },
                {
                  title: "Big Ben & Houses of Parliament",
                  type: "National Heritage Landmark",
                  desc: "Behold the towering golden clock face of Elizabeth Tower and the grand neo-Gothic Palace of Westminster.",
                  img: "/images/979a4982-9613-46b4-8ef9-8c7550905be5.png"
                },
                {
                  title: "British Museum",
                  type: "Global Human History Spot",
                  desc: "Dive into a vast world sanctuary of global human history, art, and ancient archaeological artifacts.",
                  img: "/images/EliteChauffeurs.jpeg"
                },
                {
                  title: "Tower Bridge",
                  type: "Historic Suspension Bridge",
                  desc: "Cross the most famous neo-Gothic suspension bridge stretching majestically over the historic River Thames.",
                  img: "/images/e6661373-4328-497e-bfaf-aa1de930f0a0.png"
                },
                {
                  title: "Westminster Abbey",
                  type: "Coronation Church Spot",
                  desc: "Walk in the footsteps of kings inside the majestic church of coronations, royal weddings, and legends.",
                  img: "/images/LuxuryLimousineExperience.jpg"
                },
                {
                  title: "St. Paul's Cathedral",
                  type: "Architectural Dome Masterpiece",
                  desc: "Gaze at the iconic breathtaking cathedral dome that has crowned the London skyline for centuries.",
                  img: "/images/Relaxrest1762454212669.jpeg"
                },
                {
                  title: "Trafalgar Square",
                  type: "Geographical Heart Spot",
                  desc: "Stand in the vibrant absolute center of London, flanked by Nelson's Column and giant royal stone lions.",
                  img: "/images/FlexibleScheduling.jpeg"
                },
                {
                  title: "Hyde Park",
                  type: "Royal Parklands Spot",
                  desc: "Stroll through 350 acres of historic royal parklands and the scenic Serpentine recreational lake.",
                  img: "/images/ada607e9-1a77-4abe-b383-edba1d490fc2.png"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                  className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/5 p-6 hover:border-corporate-gold/20 hover:bg-white/[0.03] transition-all duration-400 group overflow-hidden"
                >
                  {/* Micro gold corner guard brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-corporate-gold/0 group-hover:border-corporate-gold/20 rounded-tl-3xl transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-corporate-gold/0 group-hover:border-corporate-gold/20 rounded-br-3xl transition-all duration-500" />
                  
                  {/* Landmark Visual Box */}
                  <div className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden border border-white/5">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold animate-pulse" />
                      <span className="text-[9px] text-corporate-gold font-bold uppercase tracking-widest">
                        {item.type}
                      </span>
                    </div>
                    
                    {/* Title block */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <h4 className="text-xl md:text-2xl font-heading font-bold text-white group-hover:text-corporate-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Info block */}
                  <div className="mt-5 flex flex-col justify-between h-32">
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                      {item.desc}
                    </p>
                    
                    {/* Action buttons */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-3">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Chauffeur Tour Option</span>
                      <div className="flex items-center gap-3">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 text-xs text-white/70 hover:text-corporate-gold hover:bg-transparent px-2"
                          asChild
                        >
                          <Link to="/booking">Explore Spot</Link>
                        </Button>
                        <Button 
                          variant="glow" 
                          size="sm" 
                          className="h-8 text-xs font-semibold px-4 rounded-lg"
                          asChild
                        >
                          <Link to="/booking">Book Tour</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              ))}
            </div>
            
          </div>
        </section>
      )}

      {/* 3. PREMIUM POPULAR ROUTES FARE BOARD */}
      <section className="relative py-28 border-t border-b border-white/5 bg-black/40">
        <div className="container relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 mb-4">
              <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">Pricing Transparency</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              {data.popularRoutesTitle}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-corporate-gold to-orange-500 mx-auto mt-5 rounded-full" />
            <p className="mt-5 text-white/60 text-base font-light leading-relaxed">
              We offer highly transparent corporate rates with zero hidden charges. Review en-route parameters and secure booking slots immediately.
            </p>
          </motion.div>

          {/* Premium Fare Grid Board */}
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {data.popularRoutes.map((route, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 backdrop-blur-md hover:border-corporate-gold/20 hover:bg-white/[0.04] transition-all duration-400 group flex flex-col justify-between"
              >
                <div className="flex justify-between items-start gap-4 mb-6">
                  
                  {/* Pin points visualizer */}
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-corporate-gold shadow-[0_0_8px_rgba(230,167,0,0.8)]" />
                      <div className="w-[1.5px] h-8 bg-white/10 my-0.5 border-dashed" />
                      <MapPin className="w-3.5 h-3.5 text-corporate-gold" />
                    </div>
                    
                    <div className="space-y-3.5">
                      <div>
                        <span className="text-[9px] text-white/40 uppercase tracking-widest font-semibold block">Origin / FBO</span>
                        <span className="text-sm text-white font-bold tracking-tight">{route.from}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-white/40 uppercase tracking-widest font-semibold block">Destination</span>
                        <span className="text-sm text-white/90 font-medium tracking-tight">{route.to}</span>
                      </div>
                    </div>
                  </div>

                  {/* Fare quote badge */}
                  <div className="text-right bg-white/[0.04] border border-white/5 rounded-xl px-4 py-2 text-center group-hover:border-corporate-gold/20 transition-all duration-300">
                    <span className="text-[9px] text-corporate-gold font-bold uppercase tracking-widest block">From</span>
                    <span className="text-lg md:text-xl font-heading font-extrabold text-white">{route.priceFrom}</span>
                  </div>

                </div>

                {/* Sub details footer bar */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-white/50 font-light">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-corporate-gold/60" />
                      <span>{route.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-corporate-gold/60" />
                      <span className="uppercase tracking-wide font-semibold text-[10px]">{route.vehicle} Class</span>
                    </div>
                  </div>

                  <Link 
                    to="/booking" 
                    className="flex items-center gap-1.5 text-xs text-corporate-gold font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-300"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3.5 ELITE CLIENT TESTIMONIALS SECTION (NEW PREMIUM ADDITION) */}
      <section className="relative py-28 border-b border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        
        {/* Glow spots */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-corporate-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 mb-4">
              <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">Client Endorsements</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Sovereign Service
              <span className="text-gradient-gold block italic font-light mt-1.5">
                Vouched by the Elite.
              </span>
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-corporate-gold to-transparent mx-auto mt-6" />
            <p className="mt-6 text-white/60 text-base font-light leading-relaxed">
              Read how corporate directors, international diplomats, and wedding planners experience the unmatched precision and luxury of our chauffeured transits.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {data.testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/5 p-8 md:p-10 hover:border-corporate-gold/20 hover:bg-white/[0.03] transition-all duration-400 group overflow-hidden flex flex-col justify-between"
              >
                {/* Accent bracket indicators */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-corporate-gold/0 group-hover:border-corporate-gold/20 rounded-tl-3xl transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-corporate-gold/0 group-hover:border-corporate-gold/20 rounded-br-3xl transition-all duration-500" />
                
                <div>
                  {/* Rating Stars Row */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-corporate-gold text-corporate-gold" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm md:text-base text-white/70 italic leading-relaxed font-light mb-8 group-hover:text-white/95 transition-colors duration-300">
                    "{testi.review}"
                  </p>
                </div>

                {/* Reviewer Details Footer */}
                <div className="flex justify-between items-end pt-6 border-t border-white/5 mt-4">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-corporate-gold transition-colors duration-300">
                      {testi.clientName}
                    </h4>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block mt-0.5">
                      {testi.designation}
                    </span>
                  </div>

                  <span className="text-[10px] text-corporate-gold/60 font-bold uppercase tracking-wider">
                    {testi.date}
                  </span>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PREMIUM SEAMLESS EXECUTION PROTOCOL (HOW IT WORKS - REDESIGNED FOR SUPREME LOOK) */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        
        {/* Abstract dividers */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        
        <div className="container relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold animate-ping" />
              <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">
                Seamless Scheduling trajectory
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Our Seamless
              <span className="text-gradient-gold block italic font-light mt-1.5">
                Execution Protocol.
              </span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-corporate-gold to-transparent mx-auto mt-6" />
            
            <p className="mt-6 text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              We coordinate every single coordinate of your luxury trip with absolute surgical precision. Secure your private chauffeur in 3 quick steps.
            </p>
          </motion.div>
          
          {/* Connected trajectory flow line behind cards */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* The Trajectory Flow Line */}
            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-corporate-gold/0 via-corporate-gold/25 to-corporate-gold/0 hidden lg:block -translate-y-16 pointer-events-none" />
            
            <div className="grid gap-8 lg:grid-cols-3">
              {data.protocol.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group h-full"
                >
                  <div className="relative rounded-3xl overflow-hidden h-full flex flex-col justify-between">
                    
                    {/* Glowing card border outline top-lighting */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-corporate-gold/40 transition-all duration-500 z-10" />
                    
                    {/* Main Step Card detailed as a physical VIP Boarding Ticket */}
                    <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/5 backdrop-blur-md shadow-2xl group-hover:border-corporate-gold/20 group-hover:shadow-[0_20px_50px_rgba(230,167,0,0.06)] transition-all duration-400 flex-1 flex flex-col justify-between overflow-hidden">
                      
                      {/* Active gold corner brackets */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-corporate-gold/0 group-hover:border-corporate-gold/30 rounded-tl-3xl transition-all duration-500" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-corporate-gold/0 group-hover:border-corporate-gold/30 rounded-br-3xl transition-all duration-500" />
                      
                      <div>
                        {/* Ticket Voucher Header */}
                        <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                            <span className="text-[9px] text-white/50 uppercase tracking-widest font-semibold">{item.badge}</span>
                          </div>
                          <span className="text-xl font-heading font-extrabold italic text-corporate-gold/20 group-hover:text-corporate-gold/40 transition-colors duration-300">
                            {item.step}
                          </span>
                        </div>
                        
                        {/* Title & Icon Row */}
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-corporate-gold/30 transition-all duration-300">
                            {getIcon(item.iconName)}
                          </div>
                          <h4 className="text-lg font-bold text-white group-hover:text-corporate-gold transition-colors duration-300">
                            {item.title}
                          </h4>
                        </div>
                        
                        <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Ticket Footer divided by a perforated dashed border */}
                      <div className="mt-8 pt-6 border-t border-dashed border-white/10 flex items-center justify-between">
                        <div className="text-[10px] space-y-1">
                          <div className="flex gap-1.5">
                            <span className="text-white/30 uppercase tracking-wider">Class:</span>
                            <span className="text-corporate-gold font-bold uppercase">{item.classType}</span>
                          </div>
                          <div className="flex gap-1.5">
                            <span className="text-white/30 uppercase tracking-wider">Status:</span>
                            <span className="text-white/60 font-semibold uppercase">{item.duration}</span>
                          </div>
                        </div>
                        
                        {/* Simulated Barcode for ultimate premium physical styling */}
                        <svg className="w-20 h-6 text-white opacity-20 group-hover:opacity-50 transition-opacity duration-300" viewBox="0 0 100 20" fill="currentColor">
                          <rect x="0" y="0" width="2" height="20" />
                          <rect x="4" y="0" width="1" height="20" />
                          <rect x="7" y="0" width="3" height="20" />
                          <rect x="12" y="0" width="1" height="20" />
                          <rect x="15" y="0" width="2" height="20" />
                          <rect x="19" y="0" width="4" height="20" />
                          <rect x="25" y="0" width="1" height="20" />
                          <rect x="28" y="0" width="2" height="20" />
                          <rect x="32" y="0" width="3" height="20" />
                          <rect x="37" y="0" width="1" height="20" />
                          <rect x="40" y="0" width="4" height="20" />
                          <rect x="46" y="0" width="2" height="20" />
                          <rect x="50" y="0" width="1" height="20" />
                          <rect x="53" y="0" width="3" height="20" />
                          <rect x="58" y="0" width="2" height="20" />
                          <rect x="62" y="0" width="4" height="20" />
                          <rect x="68" y="0" width="1" height="20" />
                          <rect x="71" y="0" width="2" height="20" />
                          <rect x="75" y="0" width="3" height="20" />
                          <rect x="80" y="0" width="1" height="20" />
                          <rect x="83" y="0" width="4" height="20" />
                          <rect x="89" y="0" width="2" height="20" />
                          <rect x="93" y="0" width="1" height="20" />
                          <rect x="96" y="0" width="3" height="20" />
                        </svg>
                      </div>
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. VIP CTA RESERVATION SECTION (REDESIGNED FOR SUPREME VIP BOARDING PASS LOOK) */}
      <section className="relative py-32 pb-40 bg-gradient-to-b from-transparent to-black/20">
        
        {/* Backlit gold-tinted dynamic aura glowing backdrop */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-corporate-gold/5 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="container relative z-10 max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.01] to-black p-8 md:p-20 backdrop-blur-2xl relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] group hover:border-corporate-gold/20 transition-all duration-500
                       before:content-[''] before:absolute before:left-[-16px] before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-8 before:bg-background before:rounded-full before:border-r before:border-white/10 before:hidden before:md:block
                       after:content-[''] after:absolute after:right-[-16px] after:top-1/2 after:-translate-y-1/2 after:w-8 after:h-8 after:bg-background after:rounded-full after:border-l after:border-white/10 after:hidden after:md:block"
          >
            {/* Top border luxury lighting light leak */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-corporate-gold/40 to-transparent group-hover:via-corporate-gold/60 transition-all duration-500 z-10" />
            
            {/* Ticket Tear perforated divider lines on the sides */}
            <div className="absolute left-[3px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 hidden md:block" />
            <div className="absolute right-[3px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 hidden md:block" />
            
            {/* Corner Luxury Guards */}
            <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-corporate-gold/30 rounded-tl-xl pointer-events-none group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-corporate-gold/30 rounded-br-xl pointer-events-none group-hover:scale-105 transition-transform duration-500" />
            
            {/* Elegant Background Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
            
            {/* Background Ambient Light Leaks */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(230,167,0,0.12),transparent_70%)] pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,53,0.08),transparent_70%)] pointer-events-none" />
            
            {/* Main CTA Core */}
            <div className="text-center relative z-10">
              
              {/* Premium Reservation Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold animate-pulse shadow-[0_0_8px_rgba(230,167,0,0.8)]" />
                <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">
                  VIP Boarding Pass Dispatch
                </span>
              </div>
              
              {/* Splendid Title */}
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
                {data.ctaTitle}
              </h3>
              
              {/* Delicate gold-dust divider */}
              <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-corporate-gold to-transparent mx-auto mt-6" />
              
              <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                {data.ctaSubtitle}
              </p>
              
              {/* Tactical Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">
                <Button size="lg" variant="glow" className="w-full sm:w-auto sm:min-w-[240px] h-14 text-sm font-semibold uppercase tracking-wider rounded-xl shadow-glow transition-transform duration-300 hover:scale-[1.03]" asChild>
                  <Link to="/booking">Secure Reservation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto sm:min-w-[240px] h-14 text-sm font-semibold uppercase tracking-wider rounded-xl border-white/15 text-white hover:bg-white/5 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]"
                  onClick={() => setIsContactOpen(true)}
                >
                  Contact Concierge Desk
                </Button>
              </div>
              
              {/* Dynamic trust plaques row */}
              <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.ctaBadges.map((badge, idx) => {
                  const parts = badge.split(":");
                  const label = parts[0]?.trim() || "VERIFIED";
                  const value = parts[1]?.trim() || badge;
                  
                  return (
                    <div 
                      key={idx} 
                      className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-center flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/[0.05] hover:border-corporate-gold/25 group/badge"
                    >
                      {/* Badge Seal Icon */}
                      <div className="w-10 h-10 rounded-full bg-corporate-gold/10 flex items-center justify-center mb-3.5 border border-corporate-gold/20 group-hover/badge:border-corporate-gold/45 group-hover/badge:bg-corporate-gold/20 transition-all duration-300 shadow-md">
                        <Award className="w-4 h-4 text-corporate-gold" />
                      </div>
                      
                      <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest mb-1 block">
                        {label}
                      </span>
                      <span className="text-xs md:text-sm text-white font-semibold tracking-wide block uppercase">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
              
            </div>
            
          </motion.div>
          
        </div>
      </section>

      {/* Contact modal wrapper */}
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
    </main>
  );
}
