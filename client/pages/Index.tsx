import { motion } from "framer-motion";
import HeroSection from "@/components/landing/HeroSection";
import ValueBar from "@/components/landing/ValueBar";
import Services from "@/components/landing/Services";
import CityToCityRoutes from "@/components/landing/CityToCityRoutes";
import HowItWorks from "@/components/landing/HowItWorks";
import Coverage from "@/components/landing/Coverage";
import Safety from "@/components/landing/Safety";
import Testimonials from "@/components/landing/Testimonials";
import DownloadSection from "@/components/landing/DownloadSection";
import FinalCTA from "@/components/landing/FinalCTA";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Index() {
  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      {/* Luxury Wave SVG Animation */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-full h-96 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,160 C480,320 960,0 1440,160"
          stroke="#F4C430"
          strokeWidth="60"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.svg>

      {/* Floating Circles Animation */}
      <motion.svg
        className="absolute top-1/3 right-0 w-72 h-72 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>

      {/* Diagonal Lines Animation */}
      <motion.svg
        className="absolute bottom-1/4 left-0 w-96 h-96 pointer-events-none opacity-20"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="0"
          y1="100"
          x2="100"
          y2="0"
          stroke="#000"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.svg>

      <ScrollToTop />
      
      {/* Hero Section with Background */}
      <div className="relative min-h-[80vh]">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1650818880616-90a7fddbeda9?auto=format&q=80')`,
            filter: 'brightness(0.8)',
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,theme(colors.background/0.9))]" />
        
        {/* Content Layer */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>

      {/* Animated Rings for ValueBar */}
      <motion.svg
        className="absolute w-64 h-64 -left-20 pointer-events-none opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
      <ValueBar />

      {/* Services Section Luxury Elements */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        className="absolute right-8 top-24 opacity-30 pointer-events-none"
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: [0.8, 1, 0.8],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <defs>
          <linearGradient id="serviceGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6A700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F4C430" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <motion.path
          d="M20,50 L40,20 L80,20 L95,50 L80,80 L40,80 Z"
          fill="url(#serviceGrad)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.svg>
      <motion.svg
        width="160"
        height="160"
        viewBox="0 0 100 100"
        className="absolute left-12 top-48 opacity-25 pointer-events-none"
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <defs>
          <linearGradient id="serviceGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F4C430" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#serviceGrad2)" />
      </motion.svg>
      <Services />

      {/* City-to-City Routes Dynamic Map Animation */}
      <motion.svg
        className="absolute w-full h-96 pointer-events-none opacity-15"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F4C430" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M100,160 Q400,40 720,160 T1340,160"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.circle
          cx="100"
          cy="160"
          r="4"
          fill="#F4C430"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.circle
          cx="1340"
          cy="160"
          r="4"
          fill="#F4C430"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        />
      </motion.svg>
      <CityToCityRoutes />

      {/* Steps Flow Animation for HowItWorks */}
      <motion.svg
        className="absolute left-0 w-24 h-full pointer-events-none opacity-15"
        viewBox="0 0 100 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50,0 L50,400"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
        />
        {[100, 200, 300].map((y, i) => (
          <motion.circle
            key={i}
            cx="50"
            cy={y}
            r="8"
            fill="none"
            stroke="#F4C430"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: i * 0.5,
              duration: 0.5,
              type: "spring"
            }}
          />
        ))}
      </motion.svg>
      {/* How It Works Process Flow */}
      <div className="relative">
        <motion.svg
          width="100%"
          height="400"
          className="absolute opacity-20 pointer-events-none"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="processGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F4C430" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Connecting Line */}
          <motion.path
            d="M200,200 C400,100 600,300 800,200 S1200,100 1400,200"
            stroke="url(#processGrad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          {/* Process Points */}
          {[200, 600, 1000, 1400].map((x, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={x}
                cy="200"
                r="15"
                fill="#F4C430"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 0.8]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
              <motion.circle
                cx={x}
                cy="200"
                r="25"
                stroke="#4F46E5"
                strokeWidth="1"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            </motion.g>
          ))}
        </motion.svg>
        <HowItWorks />
      </div>

      {/* Global Coverage Network Animation */}
      <div className="relative">
      
        <Coverage />
      </div>
      
      {/* Curved Path Animation for Safety Section */}
      <motion.svg
        className="absolute w-full h-64 pointer-events-none opacity-10"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,96 C320,128 480,64 720,96 C960,128 1120,64 1440,96"
          stroke="#4F46E5"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.svg>

      <Safety />
      
      {/* Animated Dots Grid for Testimonials */}
    
      <Testimonials />
      <section id="signin" className="py-10">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Account sign-in is coming soon. For bookings, proceed above.
          </p>
        </div>
      </section>
      {/* App Download Section Decoration */}
      <motion.svg
        className="absolute w-full h-96 pointer-events-none opacity-10"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,160 C480,280 960,40 1440,160"
          stroke="#4F46E5"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={180 * (i + 1)}
            cy="160"
            r="4"
            fill="#F4C430"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [20, 0, -20]
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity
            }}
          />
        ))}
      </motion.svg>
      <DownloadSection />

      {/* Final CTA Section Animation */}
      <motion.svg
        className="absolute bottom-0 w-full h-64 pointer-events-none opacity-15"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,50 Q25,25 50,50 T100,50"
          fill="none"
          stroke="#F4C430"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="0.3"
          initial={{ scale: 0.8 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
      <FinalCTA />
    </main>
  );
}
