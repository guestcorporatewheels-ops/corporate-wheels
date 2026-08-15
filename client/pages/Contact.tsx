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
import Seo from "@/components/Seo";

// Corporate Locations
const locationsData = [
  {
    name: "Corporate Wheels HQ",
    address: "42 Watling Street, Radlett, Hertfordshire, WD7 7NN",
    phone: "+44 7351 111355",
    email: "info@corporatewheels.co.uk",
    badge: "Registered Office",
    timezone: "GMT / BST"
  }
];

// Interactive Corporate FAQs
const faqData = [
  {
    q: "Do you track flight delays?",
    a: "Yes. Your chauffeur tracks your flight number and adjusts pickup time automatically for early or delayed landings, with 2 hours of complimentary waiting time included."
  },
  {
    q: "How are your chauffeurs vetted and certified?",
    a: "All chauffeurs undergo rigorous road, medical, and background screening, hold the required TfL certification, and complete annual training in defensive driving and confidentiality protocols."
  },
  {
    q: "Do you support corporate accounts?",
    a: "Yes. Corporate bookings are consolidated into a single monthly invoice, with split billing, cost-center coding, and exportable spend reports."
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="relative bg-background text-foreground overflow-hidden selection:bg-corporate-gold selection:text-black">
      <Seo
        title="Contact Us"
        description="Get in touch with Corporate Wheels for bookings, corporate accounts, or support. Registered office in Hertfordshire, available 24/7."
        path="/contact"
        jsonLd={faqJsonLd}
      />

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
                Get in Touch
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
              Whether you're organizing multi-city executive travel, an airport pickup, or setting up a corporate account, our team is available 24/7.
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
                          Send Message <Send className="w-3.5 h-3.5 ml-2" />
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
                        <span className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest block">Message Sent</span>
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">Thanks, we've got it</h3>
                        <p className="text-white/60 text-xs sm:text-sm font-light max-w-md mx-auto">
                          Thank you, <span className="text-corporate-gold font-semibold">{formData.firstName}</span>. A member of our team will respond within 15 minutes.
                        </p>
                      </div>

                      <Button
                        onClick={handleReset}
                        variant="outline"
                        className="rounded-xl border-white/10 text-white hover:bg-white/5 px-8"
                      >
                        Send Another Message
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
                    <a href="tel:+447351111355">+44 7351 111355</a>
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
              Ready To Book Your
              <span className="text-gradient-gold block italic font-light mt-1">
                Next Ride?
              </span>
            </h3>

            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
              Confirm your vehicle class instantly and receive driver details 2 hours before pickup.
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