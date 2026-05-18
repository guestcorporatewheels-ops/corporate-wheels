import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { cn } from "@/lib/utils";
import ContactModal from "@/components/ui/ContactModal";
import { fleetCategoriesData } from "@/data/fleet-data";
import {
  Users,
  Briefcase,
  Check,
  ChevronLeft,
  Wifi,
  Clock,
  UserCheck,
  VolumeX,
  CreditCard,
  Sparkles,
  EyeOff,
  Award,
  Coffee,
  Eye,
  Package,
  CloudSnow,
  Shield,
  LogIn,
  Heart,
  Calendar,
  TrendingUp,
  Settings,
  UserPlus,
  Tv,
  Gift,
  Leaf,
  Wind,
  Lightbulb,
  Smartphone,
  CheckCircle,
  Camera,
  Star,
  Zap,
  Compass,
  Gauge
} from "lucide-react";

// UI Background components (from Chauffeurs.tsx)
function AnimatedGradientBg({ className = "" }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Premium Ambient Radial Glow */}
      <div
        className="absolute -top-40 -left-20 h-[45rem] w-[45rem] rounded-full opacity-25 blur-3xl btn-gradient-animate"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #F4C430 0%, #E6A700 20%, #FF6B35 50%, #E53E3E 100%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-28 h-[50rem] w-[50rem] rounded-full opacity-15 blur-3xl btn-gradient-animate"
        style={{
          backgroundImage:
            "linear-gradient(60deg, #E53E3E 0%, #FF6B35 30%, #E6A700 70%, #F4C430 100%)",
        }}
      />
      {/* Delicate Gold Stardust Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(230,167,0,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95" />
    </div>
  );
}

function FloatingSVGs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <motion.svg
        width="220"
        height="220"
        viewBox="0 0 100 100"
        className="absolute left-10 top-20 opacity-25"
        initial={{ y: -12, rotate: 0 }}
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#E6A700" stopOpacity="0.4" />
            <stop offset="1" stopColor="#FF6B35" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#g1)" stroke="rgba(230,167,0,0.2)" strokeWidth="0.5" />
      </motion.svg>

      <motion.svg
        width="160"
        height="160"
        viewBox="0 0 100 100"
        className="absolute right-16 top-40 opacity-15"
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="42" fill="rgba(255,107,53,0.3)" stroke="rgba(255,107,53,0.15)" strokeWidth="0.5" />
      </motion.svg>
    </div>
  );
}

// Icon Helper mapping lucide icons safely
const getIcon = (iconName: string) => {
  const iconProps = { className: "w-6 h-6 text-corporate-gold" };
  switch (iconName) {
    case "Laptop": return <Smartphone {...iconProps} />;
    case "Clock": return <Clock {...iconProps} />;
    case "UserCheck": return <UserCheck {...iconProps} />;
    case "Wind": return <Wind {...iconProps} />;
    case "VolumeX": return <VolumeX {...iconProps} />;
    case "CreditCard": return <CreditCard {...iconProps} />;
    case "Sparkles": return <Sparkles {...iconProps} />;
    case "EyeOff": return <EyeOff {...iconProps} />;
    case "Award": return <Award {...iconProps} />;
    case "Coffee": return <Coffee {...iconProps} />;
    case "Eye": return <Eye {...iconProps} />;
    case "Package": return <Package {...iconProps} />;
    case "CloudSnow": return <CloudSnow {...iconProps} />;
    case "Shield": return <Shield {...iconProps} />;
    case "LogIn": return <LogIn {...iconProps} />;
    case "Heart": return <Heart {...iconProps} />;
    case "Users": return <Users {...iconProps} />;
    case "Briefcase": return <Briefcase {...iconProps} />;
    case "Calendar": return <Calendar {...iconProps} />;
    case "TrendingUp": return <TrendingUp {...iconProps} />;
    case "Settings": return <Settings {...iconProps} />;
    case "UserPlus": return <UserPlus {...iconProps} />;
    case "Tv": return <Tv {...iconProps} />;
    case "Gift": return <Gift {...iconProps} />;
    case "Leaf": return <Leaf {...iconProps} />;
    case "Lightbulb": return <Lightbulb {...iconProps} />;
    case "Smartphone": return <Smartphone {...iconProps} />;
    case "CheckCircle": return <CheckCircle {...iconProps} />;
    case "Camera": return <Camera {...iconProps} />;
    case "Star": return <Star {...iconProps} />;
    case "Zap": return <Zap {...iconProps} />;
    case "Compass": return <Compass {...iconProps} />;
    case "Gauge": return <Gauge {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

interface FleetCategoryProps {
  forcedCategoryId?: string;
}

export default function FleetCategory({ forcedCategoryId }: FleetCategoryProps = {}) {
  const { categoryId: paramCategoryId } = useParams();
  const categoryId = forcedCategoryId || paramCategoryId || "executive-cars";

  const [isContactOpen, setIsContactOpen] = useState(false);

  // Get code-split data, fall back to executive-cars if invalid category
  const data = fleetCategoriesData[categoryId] || fleetCategoriesData["executive-cars"];

  // Typing animation for Hero subtitle
  const { displayText, isComplete } = useTypingAnimation(
    data.subtitle,
    45,
    250
  );

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  // Dash ring icon wrapper
  function RingIcon({ children }: { children: React.ReactNode }) {
    const id = Math.random().toString(36).slice(2);
    return (
      <svg width="52" height="52" viewBox="0 0 48 48" className="shrink-0">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" x2="1">
            <stop offset="0" stopColor="#F4C430" />
            <stop offset="1" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="transparent"
          stroke={`url(#grad-${id})`}
          strokeWidth="2.5"
          strokeDasharray="5 7"
          className="animate-spin-slow"
        />
        <g transform="translate(14,14)">{children}</g>
      </svg>
    );
  }

  return (
    <main className="relative bg-background text-foreground overflow-hidden selection:bg-corporate-gold selection:text-black">

      {/* 1. HERO SECTION (REDESIGNED FOR SUPREME PREMIUM LOOK) */}
      <section className="relative pt-36 pb-28 min-h-[95vh] flex items-center overflow-hidden">
        <AnimatedGradientBg />
        <FloatingSVGs />

        {/* Subtle Horizontal Grid Gridlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left Content (Cinematic Presentation) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              {/* Category Tag Badge */}
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-corporate-gold animate-ping" />
                <span className="text-xs text-white/90 font-semibold tracking-widest uppercase">
                  {data.heroBadge}
                </span>
              </div>

              {/* Main Immersive Title */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading text-white leading-[1.1] font-bold tracking-tight">
                {data.heroTitle}
                <span className="text-gradient-gold block italic font-light mt-1">
                  {data.heroItalic}
                </span>
              </h1>

              {/* Dynamic Subtitle typing */}
              <div className="min-h-[40px] mt-6">
                <p className="text-lg md:text-xl text-corporate-gold font-medium">
                  {displayText}
                  {!isComplete && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-corporate-gold ml-1 font-bold"
                    >
                      _
                    </motion.span>
                  )}
                </p>
              </div>

              {/* Sub description */}
              <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed font-light max-w-xl">
                {data.heroSub}
              </p>

              {/* Hero highlights checklist pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {data.heroHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-white/80">
                    <Check className="w-3.5 h-3.5 text-corporate-gold" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="glow" className="sm:min-w-[200px] h-14 text-sm font-semibold tracking-wide uppercase rounded-xl" asChild>
                  <Link to="/booking">Book This Class</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="sm:min-w-[200px] h-14 text-sm font-semibold tracking-wide uppercase rounded-xl border-white/10 hover:bg-white/5 backdrop-blur-md"
                  onClick={() => setIsContactOpen(true)}
                >
                  Contact Concierge
                </Button>
              </div>
            </motion.div>

            {/* Right Overview Card (Automotive Configurator Style) */}
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
                    Vehicle Configurator Sheet
                  </span>
                </div>

                {/* Vehicle Showcase Image */}
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-white/5">
                  <img
                    src={data.overviewCard.image}
                    alt={data.overviewCard.carName}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="text-[10px] text-corporate-gold uppercase tracking-wider font-semibold">Flagship Standard</span>
                    <h3 className="text-2xl font-heading font-bold text-white mt-0.5 drop-shadow-md">
                      {data.overviewCard.carName}
                    </h3>
                  </div>
                </div>

                {/* Badges metrics strip */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-b border-white/10 pb-5 text-center">
                  <div className="bg-white/[0.03] rounded-xl p-2 border border-white/5">
                    <Users className="w-4 h-4 text-corporate-gold mx-auto mb-1" />
                    <span className="text-[11px] text-white/90 font-medium block">{data.overviewCard.pax}</span>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-2 border border-white/5">
                    <Briefcase className="w-4 h-4 text-corporate-gold mx-auto mb-1" />
                    <span className="text-[11px] text-white/90 font-medium block">{data.overviewCard.luggage}</span>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-2 border border-white/5">
                    <Wifi className="w-4 h-4 text-corporate-gold mx-auto mb-1" />
                    <span className="text-[11px] text-white/90 font-medium block">{data.overviewCard.wifi}</span>
                  </div>
                </div>

                {/* Configurator Spec Sheet grid */}
                <div className="mt-5">
                  <span className="text-[10px] text-white/50 uppercase tracking-widest font-semibold block mb-3">Technical Specifications</span>
                  <div className="grid grid-cols-2 gap-3.5">
                    {data.overviewCard.techSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-center transition-colors duration-300 hover:bg-white/[0.05]">
                        <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium">{spec.label}</span>
                        <span className="text-sm font-semibold text-white mt-1">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer description */}
                <p className="mt-6 text-xs text-white/60 leading-relaxed font-light text-center italic border-t border-white/5 pt-4">
                  "{data.overviewCard.description}"
                </p>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. AVAILABLE VEHICLES FLEET (UPGRADED FOR ELITE VISUAL DESIGN) */}
      <section className="relative py-28 bg-black/50 border-y border-white/5">

        {/* Subtle glowing radial spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-corporate-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 mb-4">
              <span className="text-[11px] text-corporate-gold font-bold uppercase tracking-widest">Luxury Inventory</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Explore Our Premium {data.title} Fleet
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-corporate-gold to-orange-500 mx-auto mt-5 rounded-full" />
            <p className="mt-5 text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              Every vehicle is maintained to pristine mechanical and visual standards, detailed thoroughly before each ride, and equipped with premium amenities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {data.vehicles.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 shadow-2xl flex flex-col group transition-all duration-400 hover:border-corporate-gold/20"
              >

                {/* Vehicle image with luxury name overlay & hover scale */}
                <div className="relative h-64 md:h-72 overflow-hidden border-b border-white/5">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Category overlay tags */}
                  <div className="absolute top-5 right-5 flex gap-2">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-white font-medium uppercase tracking-wider">
                      {car.pax}
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-white font-medium uppercase tracking-wider">
                      {car.luggage}
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-6">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-corporate-gold transition-colors duration-300">
                      {car.name}
                    </h3>
                  </div>
                </div>

                {/* Card details body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Performance specifications pills row */}
                    <div className="mb-6">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block mb-2.5">Engine Metrics</span>
                      <div className="grid grid-cols-3 gap-2">
                        {car.engineSpecs.map((spec, specIdx) => (
                          <div key={specIdx} className="bg-white/[0.03] border border-white/5 rounded-lg py-2 px-1 text-center transition-colors duration-300 hover:bg-white/[0.06]">
                            <span className="text-[9px] text-white/50 block font-medium uppercase tracking-wider">{spec.label}</span>
                            <span className="text-[11px] text-white font-semibold mt-0.5 block">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features checklist */}
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block mb-3">Premium Inclusions</span>
                    <div className="space-y-3.5 mb-8">
                      {car.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-corporate-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-corporate-gold" />
                          </div>
                          <span className="text-sm md:text-base text-white/80 font-light leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="glow" className="w-full py-6.5 rounded-xl font-heading font-bold uppercase tracking-wider text-xs transition-transform duration-300 group-hover:scale-[1.02] shadow-glow" asChild>
                    <Link to="/booking">Book This Ride</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 2.5 VIP CABIN COMFORTS & FLEET INCLUSIONS (NEW PREMIUM DYNAMIC SECTION) */}
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
              Every vehicle class in our fleet is meticulously customized to maintain absolute mental clarity, physical rest, and remote digital productivity.
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

      {/* 3. WHY CHOOSE SECTION (REDESIGNED FOR MAJESTIC LUXURY LOOK) */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">

        {/* Abstract luxury line dividers */}
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
                Service Standards & Protocols
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Why Choose Our
              <span className="text-gradient-gold block italic font-light mt-1.5">
                {data.title}?
              </span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-corporate-gold to-transparent mx-auto mt-6" />

            <p className="mt-6 text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              We define industry-leading luxury transport standards by delivering a premium service tailored specifically to your schedule.
            </p>
          </motion.div>

          {/* Majestic Asymmetrical Grid Layout */}
          <div className="grid gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
            {data.whyChoose.map((item, index) => {
              // Asymmetrical row spanning for a premium editorial design
              const colSpan = index < 3 ? "lg:col-span-4" : "lg:col-span-6";
              const serializedNum = `0${index + 1}`;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={cn("relative group h-full", colSpan)}
                >
                  <div className="relative rounded-3xl overflow-hidden h-full flex flex-col justify-between">

                    {/* Glowing highlight backdrop filter on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-corporate-gold/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

                    {/* Thin border-lighting gradient at the top */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-corporate-gold/40 transition-all duration-500 z-10" />

                    {/* The Luxury Card */}
                    <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/5 backdrop-blur-md shadow-2xl group-hover:border-corporate-gold/20 group-hover:shadow-[0_20px_50px_rgba(230,167,0,0.08)] transition-all duration-400 flex-1 flex flex-col justify-between overflow-hidden">

                      {/* Subtly Glowing Serial Number in the Background (Serif-Italic style) */}
                      <div className="absolute top-4 right-6 text-7xl font-heading font-extrabold italic text-corporate-gold/5 pointer-events-none select-none transition-all duration-500 group-hover:text-corporate-gold/10 group-hover:scale-110 group-hover:translate-x-1">
                        {serializedNum}
                      </div>

                      {/* Active State corner gold brackets (Fades in on hover) */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-corporate-gold/0 group-hover:border-corporate-gold/30 rounded-tl-3xl transition-all duration-500" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-corporate-gold/0 group-hover:border-corporate-gold/30 rounded-br-3xl transition-all duration-500" />

                      <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">

                        {/* Premium Dynamic Orbital Icon Container */}
                        <div className="flex-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <div className="relative w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-corporate-gold/30 transition-all duration-500 shadow-md">

                            {/* Orbital rotating ring overlay */}
                            <div className="absolute inset-0 rounded-full border border-dashed border-corporate-gold/30 scale-110 group-hover:scale-120 animate-spin-slow opacity-60 group-hover:opacity-100 transition-all duration-500" />

                            {/* Nested Icon */}
                            {getIcon(item.iconName)}
                          </div>
                        </div>

                        {/* Copy details */}
                        <div className="min-w-0 flex-1">

                          {/* Mini gold accent slug line */}
                          <div className="w-8 h-[1px] bg-corporate-gold/30 group-hover:w-14 transition-all duration-500 mb-3" />

                          <h4 className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight mb-3 group-hover:text-corporate-gold transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-sm md:text-base text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PREMIUM DYNAMIC CTA SECTION (REDESIGNED FOR MAJESTIC VIP RESERVATION) */}
      <section className="relative py-32 pb-40 bg-gradient-to-b from-transparent to-black/20">

        {/* Decorative ambient glowing backdrops */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-corporate-gold/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container relative z-10 max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.01] to-black p-8 md:p-20 backdrop-blur-2xl relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] group hover:border-corporate-gold/20 transition-all duration-500"
          >
            {/* Top border luxury lighting light leak */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-corporate-gold/40 to-transparent group-hover:via-corporate-gold/60 transition-all duration-500 z-10" />

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
                  VIP Concierge Dispatch
                </span>
              </div>

              {/* Splendid Multi-layered Title */}
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
                {data.ctaTitle}
              </h3>

              {/* Delicate gold-dust divider */}
              <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-corporate-gold to-transparent mx-auto mt-6" />

              <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                {data.ctaSubtitle}
              </p>

              {/* Tactical Clickable Buttons */}
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
                  Contact Partnership Desk
                </Button>
              </div>

              {/* Dynamic trust credentials plaques row */}
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
