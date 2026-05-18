import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Send, 
  Headphones, 
  Globe,
  Award,
  CheckCircle,
  HelpCircle,
  ShieldAlert,
  ArrowRight
} from "lucide-react";

// Corporate Locations
const locationsData = [
  {
    name: "London Mayfair HQ",
    address: "45 Berkeley Square, London, W1J 5AS",
    phone: "+44 (0) 20 7946 0192",
    email: "london@corporate-wheels.com",
    badge: "Flagship Centre",
    timezone: "GMT / BST"
  },
  {
    name: "New York Manhattan Hub",
    address: "730 Fifth Avenue, New York, NY 10019",
    phone: "+1 (212) 555-0148",
    email: "ny@corporate-wheels.com",
    badge: "Global Operations Hub",
    timezone: "EST / EDT"
  }
];

// Interactive Corporate FAQs
const faqData = [
  {
    q: "What is your flight synchronization protocol?",
    a: "Corporate Wheels utilizes advanced flight telemetry synchronization. Your assigned chauffeur is synchronized directly with your tail number or scheduled flight ID, adjusting instantly for early landings or delay parameters with 2 hours of complimentary waiting time."
  },
  {
    q: "How are your chauffeurs vetted and certified?",
    a: "Fewer than 5% of professional drivers successfully pass our rigorous road, medical, and background screening. All pilots are TfL certified and undergo annual training in VIP high-speed defensive maneuvers, airport tarmac procedures, and executive NDA confidentiality."
  },
  {
    q: "Do you support integrated corporate ledger accounts?",
    a: "Yes. Corporate desk bookings are consolidated into single, monthly auditable ledgers. We offer split billing, cost-center department coding, and direct accounts payable API synchronizations for seamless travel logging."
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "We maintain highly flexible terms for active corporate schedules. Standard vehicle reservations can be rescheduled or cancelled free of charge up to 2 hours prior to dispatch. Close-protection and armored vehicles require a 24-hour notification."
  }
];

// Background ambient glow components
function PremiumAmbientBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Golden leak top left */}
      <div
        className="absolute -top-40 -left-20 h-[45rem] w-[45rem] rounded-full opacity-25 blur-3xl btn-gradient-animate"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #F4C430 0%, #E6A700 20%, #FF6B35 50%, #E53E3E 100%)",
        }}
      />
      {/* Orange-red leak bottom right */}
      <div
        className="absolute -bottom-40 -right-28 h-[50rem] w-[50rem] rounded-full opacity-15 blur-3xl btn-gradient-animate"
        style={{
          backgroundImage:
            "linear-gradient(60deg, #E53E3E 0%, #FF6B35 30%, #E6A700 70%, #F4C430 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(230,167,0,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95" />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setSubmitted(false);
  };

  // Dash ring icon wrapper
  function RingIcon({ children }: { children: React.ReactNode }) {
    const id = Math.random().toString(36).slice(2);
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" className="shrink-0">
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
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-36 pb-24 min-h-[60vh] flex items-center overflow-hidden border-b border-white/5">
        <PremiumAmbientBg />
        
        {/* Subtle Horizontal Grid Gridlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-corporate-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-corporate-gold"></span>
              </span>
              <span className="text-xs text-white/90 font-semibold tracking-widest uppercase">
                VIP Global Concierge Desk
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-heading text-white leading-none font-bold tracking-tight"
            >
              Reach Out To
              <span className="text-gradient-gold block italic font-light mt-2.5">
                Corporate Wheels.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
            >
              Whether organizing complex multi-city executive roadshows, airport FBO tarmac collections, or setting up a corporate account, our concierge desk is at your disposal 24/7.
            </motion.p>

          </div>
        </div>
      </section>

      {/* 2. THE CONCIERGE MANIFESTO FORM & LOCATIONS */}
      <section className="relative py-24 bg-black/30">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 max-w-6xl mx-auto items-start">
            
            {/* Left: Interactive Form manifesto */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-8 md:p-10 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-corporate-gold/20 transition-all duration-500"
              >
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-corporate-gold/40 rounded-tl-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-corporate-gold/40 rounded-br-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block mb-1">Secure Protocol</span>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">Send A Message</h2>
                        <div className="w-12 h-0.5 bg-corporate-gold mt-2.5" />
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs text-white/50 font-medium uppercase tracking-wider">First Name *</label>
                            <Input 
                              required
                              placeholder="Enter first name" 
                              className="h-12 bg-white/[0.02] border-white/10 rounded-xl focus-visible:ring-corporate-gold/30 text-white placeholder:text-white/20"
                              value={formData.firstName}
                              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs text-white/50 font-medium uppercase tracking-wider">Last Name</label>
                            <Input 
                              placeholder="Enter last name" 
                              className="h-12 bg-white/[0.02] border-white/10 rounded-xl focus-visible:ring-corporate-gold/30 text-white placeholder:text-white/20"
                              value={formData.lastName}
                              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs text-white/50 font-medium uppercase tracking-wider">Email Address *</label>
                            <Input 
                              required
                              type="email"
                              placeholder="e.g. name@company.com" 
                              className="h-12 bg-white/[0.02] border-white/10 rounded-xl focus-visible:ring-corporate-gold/30 text-white placeholder:text-white/20"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs text-white/50 font-medium uppercase tracking-wider">Phone Number</label>
                            <Input 
                              placeholder="e.g. +1 (555) 000-0000" 
                              className="h-12 bg-white/[0.02] border-white/10 rounded-xl focus-visible:ring-corporate-gold/30 text-white placeholder:text-white/20"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs text-white/50 font-medium uppercase tracking-wider">Subject / Purpose</label>
                          <Input 
                            placeholder="e.g. High-Volume Corporate Account Inquiry" 
                            className="h-12 bg-white/[0.02] border-white/10 rounded-xl focus-visible:ring-corporate-gold/30 text-white placeholder:text-white/20"
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs text-white/50 font-medium uppercase tracking-wider">Message Description *</label>
                          <Textarea 
                            required
                            placeholder="Detail your operational or travel logistical requirements..." 
                            className="min-h-[140px] bg-white/[0.02] border-white/10 rounded-xl focus-visible:ring-corporate-gold/30 text-white placeholder:text-white/20 resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                          />
                        </div>

                        <Button 
                          type="submit"
                          variant="glow" 
                          className="w-full h-14 rounded-xl font-heading font-bold uppercase tracking-wider text-xs shadow-glow mt-4"
                        >
                          Dispatch Manifesto <Send className="w-3.5 h-3.5 ml-2" />
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-10 space-y-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-corporate-gold/10 border border-corporate-gold/25 flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle className="w-8 h-8 text-corporate-gold" />
                      </div>
                      
                      <div className="space-y-2">
                        <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block">Dispatch Complete</span>
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">Manifesto Received</h3>
                        <p className="text-white/60 text-xs sm:text-sm font-light max-w-md mx-auto">
                          Thank you, <span className="text-corporate-gold font-semibold">{formData.firstName}</span>. Your travel inquiry has been pushed to our Executive Desk. A concierge manager will respond within 15 minutes.
                        </p>
                      </div>

                      {/* Mock Boarding Pass Voucher */}
                      <div className="max-w-md mx-auto rounded-2xl border border-corporate-gold/20 bg-white/[0.02] p-5 text-left space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 bottom-0 left-5 border-l border-dashed border-corporate-gold/20" />
                        <div className="pl-8 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-corporate-gold font-bold uppercase tracking-widest">Corporate Wheels Dispatch</span>
                            <span className="text-[9px] text-white/50 uppercase">CON-PASS #{Math.floor(100000 + Math.random() * 900000)}</span>
                          </div>
                          
                          <div>
                            <span className="text-[9px] text-white/40 block uppercase">CONCIERGE TICKET CLASS</span>
                            <span className="text-sm font-semibold text-white">VIP Priority Dispatch</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-[9px] text-white/40 block uppercase">FIRST NAME</span>
                              <span className="text-xs font-medium text-white">{formData.firstName}</span>
                            </div>
                            <div>
                              <span className="text-[9px] text-white/40 block uppercase">DISPATCH QUEUE</span>
                              <span className="text-xs font-medium text-white">Concierge Desk #3</span>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] text-corporate-gold font-semibold">
                            <span>SLA RESPONSE TIME: &lt;15 MINS</span>
                            <span className="tracking-widest">||||| | || |||</span>
                          </div>
                        </div>
                      </div>

                      <Button 
                        onClick={handleReset}
                        variant="outline" 
                        className="rounded-xl border-white/10 text-white hover:bg-white/5 px-8"
                      >
                        Submit Another Manifesto
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right: Locations & Direct Contacts */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Offices list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block mb-1">Global Presence</span>
                  <h3 className="text-2xl font-heading font-bold text-white">Corporate Offices</h3>
                  <div className="w-12 h-0.5 bg-corporate-gold mt-2.5" />
                </div>

                <div className="space-y-5">
                  {locationsData.map((loc, idx) => (
                    <div 
                      key={idx} 
                      className="relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/5 p-6 hover:border-corporate-gold/20 hover:bg-white/[0.03] transition-all duration-400 group overflow-hidden"
                    >
                      {/* Top border highlight */}
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-corporate-gold/30 transition-all duration-500" />
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="text-lg font-bold text-white group-hover:text-corporate-gold transition-colors">{loc.name}</h4>
                          <span className="bg-corporate-gold/10 border border-corporate-gold/20 text-[9px] text-corporate-gold px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                            {loc.badge}
                          </span>
                        </div>

                        <div className="space-y-2.5 text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                          <div className="flex items-start gap-2.5">
                            <MapPin className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
                            <span>{loc.address}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <Phone className="w-4 h-4 text-corporate-gold shrink-0" />
                            <span>{loc.phone}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <Mail className="w-4 h-4 text-corporate-gold shrink-0" />
                            <span>{loc.email}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <Clock className="w-4 h-4 text-corporate-gold shrink-0" />
                            <span>Timezone: {loc.timezone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Urgent Emergency Line */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-3xl border border-corporate-gold/20 bg-gradient-to-r from-corporate-gold/[0.08] to-corporate-gold/[0.01] p-8 backdrop-blur-md space-y-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 flex items-center justify-center text-corporate-gold">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block">24/7 Hotline Support</span>
                    <h4 className="text-base font-bold text-white">Active Operational Desk</h4>
                  </div>
                </div>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
                  For active bookings en route, immediate flight reschedules, or live pilot coordinates, reach our dispatch team instantly:
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="glow" className="rounded-xl font-bold uppercase tracking-wider text-[10px] py-5 px-6 shadow-glow" asChild>
                    <a href="tel:+18001234567">+1 (800) 123-4567</a>
                  </Button>
                  <Button variant="outline" className="rounded-xl border-white/10 text-white hover:bg-white/5 text-[10px] py-5 px-6" asChild>
                    <Link to="/booking">Modify Booking</Link>
                  </Button>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. PREMIUM FAQ DYNAMIC ACCORDION */}
      <section className="relative py-28 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent border-t border-white/5">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20">
                <HelpCircle className="w-3.5 h-3.5 text-corporate-gold" />
                <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">Support Portal</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
                Frequently Answered
                <span className="text-gradient-gold block italic font-light mt-1.5">
                  Concierge Inquiries.
                </span>
              </h2>
              <div className="w-20 h-0.5 bg-corporate-gold mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => {
                const isActive = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/10"
                  >
                    <button
                      onClick={() => setActiveFaq(isActive ? null : idx)}
                      className="w-full text-left p-6 flex justify-between items-center gap-4 text-white focus:outline-none"
                    >
                      <span className="font-heading font-semibold text-base sm:text-lg hover:text-corporate-gold transition-colors">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-corporate-gold shrink-0"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 4. PREMIUM RESERVATION CTA */}
      <section className="relative py-28 overflow-hidden bg-black/40 border-t border-white/5">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto relative rounded-[2rem] overflow-hidden border border-corporate-gold/20 bg-gradient-to-r from-corporate-gold/[0.08] to-corporate-gold/[0.01] p-10 md:p-14 backdrop-blur-md text-center space-y-6">
            
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20">
              <Globe className="w-3.5 h-3.5 text-corporate-gold" />
              <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">Global Travel Voucher</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
              Ready To Confirm Your
              <span className="text-gradient-gold block italic font-light mt-1">
                Corporate Ride Manifesto?
              </span>
            </h3>

            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
              Our automated fleet reservation system secures your vehicle class instantly. Confirm your ride en route now and receive driver notifications 2 hours prior to arrival.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <Button variant="glow" size="lg" className="rounded-xl font-bold px-8 w-full sm:w-auto text-xs uppercase tracking-wider" asChild>
                <Link to="/booking">Book Travel Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl border-white/10 text-white hover:bg-white/5 w-full sm:w-auto text-xs uppercase tracking-wider" asChild>
                <Link to="/about">Our Standards</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>
      
    </main>
  );
}