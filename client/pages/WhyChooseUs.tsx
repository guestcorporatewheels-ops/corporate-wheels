import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  DollarSign, 
  Car, 
  UserCheck, 
  CheckCircle, 
  Award, 
  Star, 
  Zap, 
  Briefcase, 
  Compass, 
  FileCheck,
  ArrowRight,
  Users,
  Settings,
  TrendingUp,
  Activity,
  FileText,
  Check
} from "lucide-react";

// Robust dynamic data for the Why Choose Us options
const chooseDataMap: Record<string, {
  badge: string;
  title: string;
  subtitle: string;
  heroImg: string;
  icon: React.ReactNode;
  pillarsTitle: string;
  pillarsDesc: string;
  pillars: { title: string; desc: string; icon: React.ReactNode }[];
  protocolsTitle: string;
  protocolsDesc: string;
  protocols: { step: string; label: string; desc: string; icon: React.ReactNode }[];
  programsTitle: string;
  programsDesc: string;
  programs: { title: string; desc: string; icon: React.ReactNode }[];
  commitments: { title: string; items: string[]; icon: React.ReactNode }[];
  complianceTitle: string;
  complianceDesc: string;
  complianceItems: string[];
  endorsementsTitle: string;
  endorsements: { quote: string; author: string; role: string }[];
}> = {
  "safety-first": {
    badge: "Uncompromised Safety Protocol",
    title: "Military-grade travel safety & close-protection driving.",
    subtitle: "Your physical security, sensitive digital data privacy, and travel tranquility are protected at every single mile of transit.",
    heroImg: "/images/Relaxrest1762454212669.jpeg",
    icon: <Shield className="w-8 h-8 text-corporate-gold" />,
    pillarsTitle: "WHAT SETS US APART",
    pillarsDesc: "We implement defense-grade systems to ensure zero-risk transits.",
    pillars: [
      {
        title: "Zero-Incident Standards",
        desc: "Strict screening, medical verification, and background tracking for all corporate chauffeurs.",
        icon: <CheckCircle className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "24/7 Telemetry Control",
        desc: "Our secure central ops office monitors route anomalies, road conditions, and speed telemetry in real-time.",
        icon: <Zap className="w-5 h-5 text-corporate-gold" />
      }
    ],
    protocolsTitle: "CORPORATE WHEELS SAFETY SYSTEM",
    protocolsDesc: "How we coordinate your defensive-grade ground security logistics.",
    protocols: [
      {
        step: "01",
        label: "Pre-Flight Diagnostics",
        desc: "Every vehicle undergoes a rigorous 80-point electronic mechanical health scan 2 hours before dispatch.",
        icon: <Settings className="w-5 h-5 text-corporate-gold" />
      },
      {
        step: "02",
        label: "NDA Security Sync",
        desc: "Drivers sign comprehensive confidentiality agreements and receive local route safety assessments.",
        icon: <FileText className="w-5 h-5 text-corporate-gold" />
      },
      {
        step: "03",
        label: "Active Telemetry Guard",
        desc: "Our Central Ops desk monitors speed parameters, weather conditions, and tire health in real-time.",
        icon: <Activity className="w-5 h-5 text-corporate-gold" />
      }
    ],
    programsTitle: "CONTINUOUS DEVELOPMENT",
    programsDesc: "Rigorous safety training is at the absolute heart of our pilot qualification.",
    programs: [
      {
        title: "Evasive & Defensive Driving",
        desc: "All executive drivers undergo annual certified high-speed defensive maneuver courses.",
        icon: <Award className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Digital Encryption Shield",
        desc: "Onboard secure networks utilize active enterprise-grade VPN systems protecting your data.",
        icon: <Shield className="w-5 h-5 text-corporate-gold" />
      }
    ],
    commitments: [
      {
        title: "Vehicle Integrity",
        items: ["Weekly 80-point mechanics check", "HEPA anti-dust filtration", "High-frequency tire pressure logs"],
        icon: <Car className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Chauffeur Safeguard",
        items: ["Active background vetting", "Certified first-aid training", "Comprehensive NDA guarantees"],
        icon: <UserCheck className="w-5 h-5 text-corporate-gold" />
      }
    ],
    complianceTitle: "REGULATORY COMPLIANCE",
    complianceDesc: "Strict adherence to all executive operator and passenger safety directives.",
    complianceItems: [
      "£10M Comprehensive Public Liability Coverage",
      "Fully Vetted Close-Protection Chauffeurs",
      "Zero-Exemption Mechanical Safety Audits"
    ],
    endorsementsTitle: "SOCIETY SECURITY ENDORSEMENTS",
    endorsements: [
      {
        quote: "Safety is not an option when transporting our board members. Corporate Wheels' close-protection standards and active Ops tracking provide complete, absolute reassurance.",
        author: "Dame Sarah Jenkins",
        role: "Director of Risk, Global Bank"
      },
      {
        quote: "The only chauffeur service we trust for secure diplomatic transfers. The NDA protocols and defensive driving skills are truly elite.",
        author: "His Excellency J. Al-Saud",
        role: "Embassy Attaché"
      }
    ]
  },
  "transparent-pricing": {
    badge: "Guaranteed Flat Fare Rates",
    title: "No surge prices. No hidden fees. Flawless corporate accounting.",
    subtitle: "We coordinate with corporate desks to guarantee fully itemized flat rate fare schedules with zero dynamic pricing surprises.",
    heroImg: "/images/FlexibleScheduling.jpeg",
    icon: <DollarSign className="w-8 h-8 text-corporate-gold" />,
    pillarsTitle: "WHAT SETS US APART",
    pillarsDesc: "We eliminate the unpredictability of transit billing.",
    pillars: [
      {
        title: "Surge-Free Guarantee",
        desc: "Extreme weather, railway strikes, and peak travel hours never trigger high premium billing adjustments.",
        icon: <CheckCircle className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Full Cost Itemization",
        desc: "Every parking toll, congestion charge, and wait time parameter is detailed upfront with absolute clarity.",
        icon: <Zap className="w-5 h-5 text-corporate-gold" />
      }
    ],
    protocolsTitle: "FLAWLESS ACCOUNTING SYSTEMS",
    protocolsDesc: "How we eliminate ground billing volatility for corporate desks.",
    protocols: [
      {
        step: "01",
        label: "Flat-Fare Upfront Lock",
        desc: "Our pricing engine locks down a single, unalterable flat fee upon booking before your journey starts.",
        icon: <DollarSign className="w-5 h-5 text-corporate-gold" />
      },
      {
        step: "02",
        label: "Zero Surge Exemptions",
        desc: "Sudden flight delays, heavy airport traffic, or peak demand hours never change your agreed fare rate.",
        icon: <CheckCircle className="w-5 h-5 text-corporate-gold" />
      },
      {
        step: "03",
        label: "Instant Ledger Sync",
        desc: "Itemized invoices split by custom department code are pushed directly to your accounts payable desk.",
        icon: <TrendingUp className="w-5 h-5 text-corporate-gold" />
      }
    ],
    programsTitle: "CORPORATE ACCOUNT CONTROLS",
    programsDesc: "We simplify budgeting and financial logging for active corporate travel desks.",
    programs: [
      {
        title: "Automated Monthly Billing",
        desc: "Consistent invoices synced directly to your central accounts payable team automatically.",
        icon: <Briefcase className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Multi-Department Codes",
        desc: "Organize journey billing logs by specific departments, cost centers, or individual staff IDs.",
        icon: <Award className="w-5 h-5 text-corporate-gold" />
      }
    ],
    commitments: [
      {
        title: "Financial Integrity",
        items: ["Zero hidden fuel surcharges", "Complimentary flight delay wait time", "Flexible 2-hour free cancellation"],
        icon: <FileCheck className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Account Support",
        items: ["Immediate digital invoice logs", "Interactive client ledger portal", "Instant credit facilities for business"],
        icon: <UserCheck className="w-5 h-5 text-corporate-gold" />
      }
    ],
    complianceTitle: "TAX & AUDIT COMPLIANCE",
    complianceDesc: "Guaranteed absolute parity with UK financial regulation and operator tax laws.",
    complianceItems: [
      "100% Compliant VAT Invoicing",
      "Itemized Auditable Journey Logs",
      "Fixed Agreed Corporate Travel Rates"
    ],
    endorsementsTitle: "FINANCIAL DESK ENDORSEMENTS",
    endorsements: [
      {
        quote: "Surge pricing and hidden airport wait fees used to make our ground travel budgets highly volatile. Corporate Wheels solved this with absolute flat rates.",
        author: "Marcus Vance",
        role: "VP of Procurement, Zenith Tech"
      },
      {
        quote: "The billing system is exceptionally clean. Single-click department expense logging has reduced our travel expense processing time by 70%.",
        author: "Clara Haddon",
        role: "Global Travel Coordinator"
      }
    ]
  },
  "tailored-luxury-fleet": {
    badge: "Pristine Luxury Cabin Standards",
    title: "A majestic collection of acoustically silent cabins.",
    subtitle: "Select from pristine executive saloons, high-specification spacious SUVs, and eco-conscious electric luxury classes.",
    heroImg: "/images/LuxuryFleet.jpg",
    icon: <Car className="w-8 h-8 text-corporate-gold" />,
    pillarsTitle: "WHAT SETS US APART",
    pillarsDesc: "We curate vehicles that serve as fully functional private working offices on wheels.",
    pillars: [
      {
        title: "Acoustic Silence Isolation",
        desc: "Active noise-suppression chassis setups block external highway harmonics, tire roll, and ambient city noise.",
        icon: <CheckCircle className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Immaculate Valet Sanitation",
        desc: "Every single vehicle undergoes full structural detailing, cleaning, and absolute sanitation before dispatch.",
        icon: <Zap className="w-5 h-5 text-corporate-gold" />
      }
    ],
    protocolsTitle: "CABIN SANCTUARY PREPARATION",
    protocolsDesc: "How we coordinate your private mobile executive workspace en route.",
    protocols: [
      {
        step: "01",
        label: "Showroom Refinement",
        desc: "Every vehicle is visually and mechanically inspected to pristine showroom criteria before dispatch.",
        icon: <Settings className="w-5 h-5 text-corporate-gold" />
      },
      {
        step: "02",
        label: "Preferences Calibration",
        desc: "Your requested thermal climate settings, daily news folders, and water selections are pre-arranged.",
        icon: <Users className="w-5 h-5 text-corporate-gold" />
      },
      {
        step: "03",
        label: "Workspace Calibration",
        desc: "Onboard gigabit Wi-Fi networks and multi-device fast chargers are verified active and secure.",
        icon: <Activity className="w-5 h-5 text-corporate-gold" />
      }
    ],
    programsTitle: "CABIN COMFORT SYSTEM",
    programsDesc: "We tailor all en-route comfort specifications to exceed your personal client preferences.",
    programs: [
      {
        title: "Executive Working Desks",
        desc: "Equipped with universal laptop power chargers, gigabit onboard Wi-Fi, and dimmable reading lights.",
        icon: <Briefcase className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Premium Refreshments",
        desc: "Chilled organic spring waters, hot thermal presets, and premium daily financial press in leather jackets.",
        icon: <Award className="w-5 h-5 text-corporate-gold" />
      }
    ],
    commitments: [
      {
        title: "Physical Comfort",
        items: ["Soft premium Nappa leather seats", "Dual-zone digital air climate control", "Dimmable warm ambient cabin lighting"],
        icon: <Star className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Cabin Tech Specs",
        items: ["Universal device fast chargers", "Dual-provider gigabit Wi-Fi networks", "Multi-stage HEPA respiratory shield"],
        icon: <Zap className="w-5 h-5 text-corporate-gold" />
      }
    ],
    complianceTitle: "FLEET STANDARDS & LICENSING",
    complianceDesc: "Our active vehicles pass rigorous safety audits matching operator guidelines.",
    complianceItems: [
      "100% Fully Licensed Chauffeur Fleet",
      "Comprehensive Mechanical Inspection Logs",
      "Regular Operational Detail Reviews"
    ],
    endorsementsTitle: "EXECUTIVE CABIN ENDORSEMENTS",
    endorsements: [
      {
        quote: "The E-Class felt like a private executive boardroom. I conducted three secure video calls with zero noise disruption and perfect gigabit connection.",
        author: "Dr. Aris Thorne",
        role: "Managing Director, BioMed Global"
      },
      {
        quote: "Immaculate presentation and supreme comfort. The HEPA-shielded silent cabin is perfect for relaxing after long international flights.",
        author: "Elena Rostova",
        role: "Principal Designer, Rostova Atelier"
      }
    ]
  },
  "elite-chauffeurs": {
    badge: "VIP Protocol Excellence",
    title: "Hospitality-trained chauffeurs versed in VIP protocol.",
    subtitle: "Our vetted, close-protection drivers combine flawless presentation, absolute discretion, and comprehensive local knowledge.",
    heroImg: "/images/chufferas.png",
    icon: <UserCheck className="w-8 h-8 text-corporate-gold" />,
    pillarsTitle: "WHAT SETS US APART",
    pillarsDesc: "The finest elite chauffeurs representing your company values.",
    pillars: [
      {
        title: "Surgical Selection Process",
        desc: "Fewer than 5% of professional drivers successfully pass our background and road testing metrics.",
        icon: <CheckCircle className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Hospitality-First Mindset",
        desc: "Chauffeurs trained to adapt to individual client behavior, luggage handling, and silence constraints.",
        icon: <Zap className="w-5 h-5 text-corporate-gold" />
      }
    ],
    protocolsTitle: "ELITE CHAUFFEUR COORDINATION",
    protocolsDesc: "How we screen and certify our close-protection pilot professionals.",
    protocols: [
      {
        step: "01",
        label: "Surgical Driver Vetting",
        desc: "Only professional drivers with 5+ years of VIP experience pass our extensive backgrounds check.",
        icon: <UserCheck className="w-5 h-5 text-corporate-gold" />
      },
      {
        step: "02",
        label: "FBO & Jet Terminal Certs",
        desc: "All pilots are certified for tarmac private jet collection, FBO protocols, and coordinate baggage logistics.",
        icon: <Compass className="w-5 h-5 text-corporate-gold" />
      },
      {
        step: "03",
        label: "NDA Confidentiality Seal",
        desc: "Drivers sign legally binding NDAs, guaranteeing absolute mental privacy for all en-route conversations.",
        icon: <Shield className="w-5 h-5 text-corporate-gold" />
      }
    ],
    programsTitle: "CONTINUOUS TRAINING",
    programsDesc: "We invest heavily in the skills and expertise of our close-protection pilots.",
    programs: [
      {
        title: "Runway & FBO Clearance",
        desc: "Drivers certified for private jet airport tarmac pickups, VIP terminal routing, and passenger coordination.",
        icon: <Compass className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Discretion & NDA Compliance",
        desc: "Strict confidentiality protocols ensuring high-profile business logs remain completely secure.",
        icon: <Award className="w-5 h-5 text-corporate-gold" />
      }
    ],
    commitments: [
      {
        title: "Professional Presentation",
        items: ["Bespoke wool corporate suits", "Professional grooming standards", "Punctual 15-minute early arrival"],
        icon: <Star className="w-5 h-5 text-corporate-gold" />
      },
      {
        title: "Service Protocols",
        items: ["Anticipative door handling", "Luggage logistics support", "Silent cabin operations on request"],
        icon: <UserCheck className="w-5 h-5 text-corporate-gold" />
      }
    ],
    complianceTitle: "CERTIFICATIONS & LEGAL COMPLIANCE",
    complianceDesc: "Guaranteed professional operator and driver compliance.",
    complianceItems: [
      "TfL Fully Licensed Private Hire Chauffeurs",
      "Regular Professional Defensive Checks",
      "Certified First-Aid Qualified Responders"
    ],
    endorsementsTitle: "VIP CLIENT ENDORSEMENTS",
    endorsements: [
      {
        quote: "Our chauffeur was punctual, immaculately dressed, and understood exactly when to offer assistance and when to maintain respectful silence.",
        author: "Sir Reginald Croft",
        role: "Chairman, Croft & Co."
      },
      {
        quote: "Exceptional tarmac pickup experience. The chauffeur coordinated directly with our private jet crew, making the transfer completely seamless.",
        author: "Captain Liam Vance",
        role: "Chief Pilot, Executive Aviation"
      }
    ]
  }
};

export default function WhyChooseUs() {
  const { chooseId } = useParams<{ chooseId: string }>();
  const activeId = chooseId || "safety-first";
  const data = chooseDataMap[activeId] || chooseDataMap["safety-first"];

  return (
    <main className="relative min-h-screen bg-background pt-24 overflow-hidden">
      
      {/* 1. ULTRA-PREMIUM HERO SEGMENT */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-black via-white/[0.01] to-transparent">
        
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-corporate-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center max-w-6xl mx-auto">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-corporate-gold/10 border border-corporate-gold/20">
                <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold animate-ping" />
                <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">
                  {data.badge}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight leading-none">
                {data.title.split(".")[0]}
                <span className="text-gradient-gold block italic font-light mt-2">
                  {data.title.split(".")[1] || ""}
                </span>
              </h1>
              
              <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-xl">
                {data.subtitle}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button variant="glow" size="lg" className="rounded-xl font-bold px-8 shadow-lg shadow-corporate-gold/10" asChild>
                  <Link to="/booking">Book Chauffeur</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl border-white/10 hover:bg-white/5" asChild>
                  <Link to="/contact">Consult Concierge</Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Right Media Display Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-corporate-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl pointer-events-none" />
              
              {/* Gold borders */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-corporate-gold/30 rounded-tl-3xl z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-corporate-gold/30 rounded-br-3xl z-10" />
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                <img
                  src={data.heroImg}
                  alt={data.badge}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. PILLARS OF EXCELLENCE SEGMENT */}
      <section className="relative py-24 bg-black/30 border-t border-b border-white/5">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              
              {/* Sidebar Descriptor */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block">
                  {data.pillarsTitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                  Why We Lead In Luxury Travel
                </h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {data.pillarsDesc} We maintain absolute quality controls so that every single journey exceeds top executive requirements.
                </p>
              </div>
              
              {/* Pillars Cards */}
              <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
                {data.pillars.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/5 backdrop-blur-md hover:border-corporate-gold/20 transition-all duration-400 group overflow-hidden"
                  >
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-corporate-gold/30 transition-all duration-500" />
                    
                    <div className="flex flex-col items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-corporate-gold/30 group-hover:bg-corporate-gold/5 transition-all duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-corporate-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* 2.5 CORPORATE WHEELS PROTOCOL MATRIX (NEW PREMIUM SECTION) */}
      <section className="relative py-28 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        
        {/* Abstract design elements */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 mb-4">
                <span className="text-[11px] text-corporate-gold font-bold uppercase tracking-widest">Service Delivery Flow</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                {data.protocolsTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-corporate-gold to-orange-500 mx-auto mt-5 rounded-full" />
              <p className="mt-5 text-white/50 text-base md:text-lg font-light leading-relaxed">
                {data.protocolsDesc}
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {data.protocols.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-8 hover:border-corporate-gold/20 hover:shadow-[0_20px_50px_rgba(230,167,0,0.1)] transition-all duration-400 group overflow-hidden"
                >
                  {/* Top borders light leak */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-corporate-gold/40 transition-all duration-500" />
                  
                  {/* Step Serial Indicator */}
                  <div className="absolute top-5 right-6 text-5xl font-heading font-black italic text-corporate-gold/5 group-hover:text-corporate-gold/10 transition-colors">
                    {item.step}
                  </div>
                  
                  <div className="flex flex-col items-start gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-corporate-gold/20 group-hover:bg-corporate-gold/5 transition-all duration-300">
                      {item.icon}
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white group-hover:text-corporate-gold transition-colors duration-300 mb-3">
                        {item.label}
                      </h4>
                      <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. CONTINUOUS DEVELOPMENT SECTION */}
      <section className="relative py-28 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block">
                {data.programsTitle}
              </span>
              <h3 className="text-3xl font-heading font-bold text-white tracking-tight">
                Our Continuous Quality Programs
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {data.programsDesc}
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {data.programs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-corporate-gold/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-corporate-gold/5 border border-corporate-gold/20 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. EXCLUSIVE FIVE-STAR COMMITMENTS */}
      <section className="relative py-24 bg-black/40 border-t border-b border-white/5">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              
              {/* Left Column: List Commitments */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block mb-3">
                    Five-Star Service Standard
                  </span>
                  <h3 className="text-3xl font-heading font-bold text-white tracking-tight">
                    Our Unwavering Commitment To You
                  </h3>
                </div>
                
                <div className="grid gap-8 sm:grid-cols-2">
                  {data.commitments.map((com, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 flex items-center justify-center">
                          {com.icon}
                        </div>
                        <h4 className="text-base font-bold text-white">{com.title}</h4>
                      </div>
                      
                      <ul className="space-y-2.5">
                        {com.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-white/50 font-light">
                            <CheckCircle className="w-3.5 h-3.5 text-corporate-gold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column: Compliance Certifications */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/5 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{data.complianceTitle}</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">{data.complianceDesc}</p>
                </div>
                
                <div className="space-y-3">
                  {data.complianceItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <FileCheck className="w-5 h-5 text-corporate-gold shrink-0" />
                      <span className="text-xs text-white/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* 4.5 CLIENT ENDORSEMENTS & PROOF PANEL (NEW PREMIUM SECTION) */}
      <section className="relative py-28 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        
        {/* Ambient dividers */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 mb-4">
                <span className="text-[11px] text-corporate-gold font-bold uppercase tracking-widest">Global Reputations</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                {data.endorsementsTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-corporate-gold to-orange-500 mx-auto mt-5 rounded-full" />
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {data.endorsements.map((end, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] via-white/[0.01] to-black border border-white/10 p-8 md:p-12 hover:border-corporate-gold/20 hover:shadow-[0_20px_50px_rgba(230,167,0,0.08)] transition-all duration-400 group overflow-hidden"
                >
                  {/* Top borders light leak */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-corporate-gold/40 transition-all duration-500" />
                  
                  {/* Large quotes marks */}
                  <div className="absolute -top-6 -left-2 text-9xl font-serif font-black text-corporate-gold/5 select-none pointer-events-none">
                    “
                  </div>
                  
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-corporate-gold fill-corporate-gold" />
                      ))}
                    </div>
                    
                    <p className="text-base sm:text-lg italic text-white/80 leading-relaxed font-light">
                      "{end.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 flex items-center justify-center text-corporate-gold font-bold">
                        {end.author[0]}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-wide">{end.author}</h4>
                        <p className="text-xs text-corporate-gold font-medium">{end.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC CALL TO ACTION TICKET */}
      <section className="relative py-28 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-corporate-gold/20 bg-gradient-to-r from-corporate-gold/[0.08] to-corporate-gold/[0.01] p-10 md:p-14 backdrop-blur-md">
            
            {/* Absolute perforated ticket dashes */}
            <div className="absolute top-0 bottom-0 left-6 border-l border-dashed border-corporate-gold/20 hidden md:block" />
            
            <div className="relative z-10 md:pl-10 space-y-6">
              <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block">
                Exclusive Boarding Pass Reservation
              </span>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
                Secure Your Premium Travel
                <span className="text-gradient-gold block italic font-light mt-1">
                  Voucher Instantly.
                </span>
              </h3>
              
              <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Experience the uncompromised standards of Corporate Wheels. Secure your luxury chauffeur immediately and receive real-time driver telemetry updates 2 hours prior to flight tarmac pickup.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button variant="glow" size="lg" className="rounded-xl font-bold px-8 w-full sm:w-auto" asChild>
                  <Link to="/booking" className="flex items-center justify-center gap-2">
                    Book Travel Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" className="rounded-xl text-white/70 hover:text-white w-full sm:w-auto" asChild>
                  <Link to="/contact">Request Custom Quote</Link>
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
    </main>
  );
}
