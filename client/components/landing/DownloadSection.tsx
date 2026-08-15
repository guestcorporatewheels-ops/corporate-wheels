import { motion } from "framer-motion";
import { Send, Smartphone, Sparkles, ShieldCheck, MapPin, Clock } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-corporate-gold/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl p-8 md:p-12 lg:p-16">
          
          <div className="grid items-center gap-12 lg:gap-20 md:grid-cols-2">
            
            {/* Left: copy + features + actions */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 text-corporate-gold text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(230,167,0,0.15)]">
                <Sparkles className="w-4 h-4" />
                <span>Mobile App</span>
              </div>

              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Effortless travel <br />
                <span className="text-gradient-gold">at your fingertips.</span>
              </h3>

              <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
                We're building a dedicated app for instant confirmations, live GPS tracking, and corporate billing — all in your pocket.
              </p>

              {/* Glowing features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: MapPin, text: "Live Tracking & ETA" },
                  { icon: ShieldCheck, text: "Secure Payments" },
                  { icon: Smartphone, text: "One-Tap Booking" },
                  { icon: Clock, text: "24/7 Global Support" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-corporate-gold/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-corporate-gold/10 flex items-center justify-center border border-corporate-gold/20 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 text-corporate-gold" />
                    </div>
                    <span className="text-white/90 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>


            </motion.div>

            {/* Right: phone mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end relative mt-10 md:mt-0"
            >
              {/* Phone Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-corporate-gold/20 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative h-[600px] w-[290px] rounded-[48px] border-[6px] border-[#222] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden group transform transition-transform hover:-translate-y-4 duration-700">
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)]" />
                
                {/* Screen Content */}
                <div className="absolute inset-0 bg-black z-0" />
                <img
                  src="/mobile-app.jpg"
                  alt="Mobile App Screen"
                  className="absolute inset-0 w-full h-full object-cover blur-[3px] opacity-50 scale-110 group-hover:scale-100 transition-transform duration-700 z-10" 
                />
                
                {/* Coming Soon Badge Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                  <div className="w-32 h-32 bg-corporate-gold/20 rounded-full blur-2xl absolute" />
                  <motion.div 
                    animate={{ y: [0, -8, 0] }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="relative bg-gradient-to-r from-corporate-gold to-[#cc9400] text-black px-8 py-3.5 rounded-full font-black text-sm shadow-[0_10px_40px_rgba(230,167,0,0.6)] tracking-[0.2em] uppercase border border-white/20 backdrop-blur-md"
                  >
                    COMING SOON
                  </motion.div>
                </div>

                {/* Glass Glare Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/0 to-white/20 pointer-events-none z-30" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
