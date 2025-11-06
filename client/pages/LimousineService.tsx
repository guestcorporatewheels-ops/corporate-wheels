import { motion } from "framer-motion";
import {
  Shield,
  Car,
  Plane,
  ArrowRight,
  HelpCircle,
  Star,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

export default function LimousineService() {
  return (
    <main className="relative min-h-[70vh] bg-black text-white overflow-hidden">
      {/* SVG Animated Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="url(#limo-gradient)"
            stroke="#FFD36A"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="limo-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#FFD36A" stopOpacity="0.12" />
              <stop offset="1" stopColor="#000" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section - Redesigned */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20 text-center max-w-5xl mx-auto pt-24 relative"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-40"
            viewBox="0 0 1440 320"
            fill="none"
          >
            <path
              d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224"
              stroke="#FFD36A"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="relative z-10">
          <img
            src="/images/LuxuryLimousineExperience.jpg"
            alt="Limousine Service"
            className="mx-auto rounded-2xl shadow-2xl mb-8 w-full max-w-3xl object-cover border-4 border-corporate-gold/30"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-corporate-gold drop-shadow-lg">
            Luxury Limousine Experience
          </h1>
          <p className="text-gray-200 text-2xl max-w-3xl mx-auto mb-6 font-medium">
            Redefining comfort, privacy, and prestige. Your journey, elevated to
            first class—every time, everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 p-2 justify-center mb-8">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-corporate-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors"
            >
              Book Your Limousine <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-corporate-gold text-corporate-gold font-bold rounded-lg shadow-lg hover:bg-corporate-gold/10 transition-colors"
            >
              24/7 Concierge <PhoneCall className="w-5 h-5" />
            </motion.a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <span className="inline-flex items-center gap-2 text-lg text-corporate-gold font-semibold">
              <Star className="w-5 h-5" /> Award-winning Service
            </span>
            <span className="inline-flex items-center gap-2 text-lg text-corporate-gold font-semibold">
              <Shield className="w-5 h-5" /> Safety & Privacy
            </span>
            <span className="inline-flex items-center gap-2 text-lg text-corporate-gold font-semibold">
              <Car className="w-5 h-5" /> Global Fleet
            </span>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 p-12 rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-corporate-gold mb-8">
          Why Choose Our Limousine Service?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center gap-3">
            <Shield className="w-10 h-10 text-corporate-gold" />
            <span className="font-semibold text-xl">
              Professional Chauffeurs
            </span>
            <span className="text-gray-300">
              Trained, background-checked, and discreet drivers for a seamless,
              safe experience.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Star className="w-10 h-10 text-corporate-gold" />
            <span className="font-semibold text-xl">Award-winning Service</span>
            <span className="text-gray-300">
              Recognized globally for excellence, reliability, and customer
              satisfaction.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Car className="w-10 h-10 text-corporate-gold" />
            <span className="font-semibold text-xl">Luxury Fleet</span>
            <span className="text-gray-300">
              Choose from top-tier limousines, sedans, SUVs, and event vehicles
              for every need.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Plane className="w-10 h-10 text-corporate-gold" />
            <span className="font-semibold text-xl">Meet & Greet</span>
            <span className="text-gray-300">
              Personalized airport pickup, flight tracking, and complimentary
              wait time.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <MessageCircle className="w-10 h-10 text-corporate-gold" />
            <span className="font-semibold text-xl">24/7 Concierge</span>
            <span className="text-gray-300">
              Instant support, live chat, and dedicated account managers for
              business clients.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Star className="w-10 h-10 text-corporate-gold" />
            <span className="font-semibold text-xl">Onboard Amenities</span>
            <span className="text-gray-300">
              Complimentary water, Wi-Fi, charging, and more for your comfort.
            </span>
          </div>
        </div>
      </motion.section>

      {/* Discover Our Service Classes */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 p-12 rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-corporate-gold mb-8">
          Discover Our Service Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center text-center gap-3">
            <Car className="w-8 h-8 text-corporate-gold" />
            <span className="font-semibold text-lg">Business Class</span>
            <span className="text-gray-300">
              Executive sedans for business travel, meetings, and airport
              transfers.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Car className="w-8 h-8 text-corporate-gold" />
            <span className="font-semibold text-lg">First Class</span>
            <span className="text-gray-300">
              Luxury limousines for VIPs, weddings, and special occasions.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Car className="w-8 h-8 text-corporate-gold" />
            <span className="font-semibold text-lg">Business Van/SUV</span>
            <span className="text-gray-300">
              Spacious vans and SUVs for groups, families, and event travel.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Star className="w-8 h-8 text-corporate-gold" />
            <span className="font-semibold text-lg">VIP Experience</span>
            <span className="text-gray-300">
              Red carpet arrivals, exclusive events, and personalized service.
            </span>
          </div>
        </div>
      </motion.section>

      {/* Limo Service in the City */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 p-12 rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-corporate-gold mb-8">
          Limo Service in the City
        </h2>
        <img
          src="https://images.unsplash.com/photo-1605329674253-c7680c5e44cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGltb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
          alt="City Limo"
          className="rounded-xl shadow-2xl mb-8 w-full object-cover border-4 border-corporate-gold/20"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-corporate-gold mb-2">
              Business & Events
            </h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Corporate travel and meetings</li>
              <li>Conference and exhibition transfers</li>
              <li>VIP guest arrivals</li>
            </ul>
            <h3 className="text-xl font-semibold text-corporate-gold mb-2">
              Leisure & Lifestyle
            </h3>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Weddings and celebrations</li>
              <li>Sightseeing and city tours</li>
              <li>Nightlife and entertainment</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-gray-200 text-lg">
              Travel in comfort and style with local expertise and global
              standards. Our chauffeurs know the city’s best routes, venues, and
              attractions.
            </p>
            <p className="text-corporate-gold text-base font-semibold">
              Available in all major cities worldwide.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Get Around with a Blacklane Limo Service */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 p-12 rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-corporate-gold mb-8">
          Get Around with a Blacklane Limo Service
        </h2>
        <img
          src="https://images.unsplash.com/photo-1750013931537-60974e4df0dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Get Around"
          className="rounded-xl shadow-2xl mb-8 w-full object-cover border-4 border-corporate-gold/20"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-corporate-gold mb-2">
              Flexible Options
            </h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Hourly hire for maximum flexibility</li>
              <li>Point-to-point transfers</li>
              <li>Custom routes and multi-stop journeys</li>
              <li>Event and sightseeing packages</li>
            </ul>
            <h3 className="text-xl font-semibold text-corporate-gold mb-2">
              Seamless Experience
            </h3>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Easy booking via app or web</li>
              <li>Real-time ride tracking</li>
              <li>Personalized service and preferences</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-gray-200 text-lg">
              Our chauffeurs adapt to your schedule, ensuring a seamless
              experience from pickup to drop-off. Perfect for business, leisure,
              and special occasions.
            </p>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-corporate-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors mt-2"
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Airport Limousine Service */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 p-12 rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-corporate-gold mb-8">
          Airport Limousine Service
        </h2>
        <img
          src="https://images.surferseo.art/3d356ec8-40c1-44a4-a59f-8fceac0b69bb.png"
          alt="Airport Limo"
          className="rounded-xl shadow-2xl mb-8 w-full object-cover border-4 border-corporate-gold/20"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-corporate-gold mb-2">
              Your Airport Journey
            </h3>
            <ol className="list-decimal pl-6 text-gray-300 mb-4">
              <li>Meet & Greet at arrivals</li>
              <li>Real-time flight tracking</li>
              <li>Complimentary wait time</li>
              <li>Luggage assistance</li>
              <li>Direct transfer to your destination</li>
            </ol>
            <h3 className="text-xl font-semibold text-corporate-gold mb-2">
              Peace of Mind
            </h3>
            <ul className="list-disc pl-6 text-gray-300">
              <li>24/7 support for flight changes</li>
              <li>Sanitized vehicles for safety</li>
              <li>Professional, discreet chauffeurs</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <blockquote className="border-l-4 border-corporate-gold pl-4 italic text-gray-200 mb-4">
              “My airport pickup was flawless—my driver tracked my delayed
              flight and greeted me with a smile. Best limo service I’ve ever
              used.”
              <br />
              <span className="text-corporate-gold font-semibold">
                – A. Patel, Frequent Traveler
              </span>
            </blockquote>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-corporate-gold text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors mt-2"
            >
              Book Airport Limo <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Premium Promise Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 p-12 rounded-2xl bg-gradient-to-r from-corporate-gold/10 to-black/80 border border-corporate-gold/30 shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <Star className="w-10 h-10 text-corporate-gold" />
          <h2 className="text-4xl font-bold text-corporate-gold drop-shadow">
            Our Premium Promise
          </h2>
        </div>
        <ul className="space-y-4 text-lg text-gray-200 pl-4 mb-8">
          <li>24/7 customer support and live chat</li>
          <li>Guaranteed on-time pickup</li>
          <li>Sanitized vehicles for your safety</li>
          <li>Flexible booking and cancellation</li>
          <li>Personalized service for every guest</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-black/60 border border-corporate-gold/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-corporate-gold mb-2">
              What Our Guests Say
            </h3>
            <blockquote className="italic text-gray-200 mb-2">
              “The attention to detail and professionalism is unmatched. I
              always feel like a VIP.”
            </blockquote>
            <span className="text-corporate-gold font-semibold">
              – S. Mehra, CEO
            </span>
          </div>
          <div className="bg-black/60 border border-corporate-gold/20 rounded-xl p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-corporate-gold mb-2">
              Awards & Recognition
            </h3>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Global Limousine Excellence Award 2025</li>
              <li>Best Chauffeur Service – Luxury Travel Magazine</li>
              <li>Top Safety Rating – International Transport Board</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 p-12 rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <HelpCircle className="w-10 h-10 text-corporate-gold" />
          <h2 className="text-4xl font-bold text-corporate-gold drop-shadow">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="divide-y divide-gray-800/50">
          {[
            {
              q: "How do I book a limousine?",
              a: "Use our online booking tool or app to select your service, vehicle, and schedule.",
            },
            {
              q: "Are your chauffeurs professionally trained?",
              a: "Yes, all chauffeurs are background-checked, trained, and certified.",
            },
            {
              q: "Can I book for a group?",
              a: "Absolutely! Choose our Business Van/SUV for group travel.",
            },
            {
              q: "Is airport pickup included?",
              a: "Yes, airport pickup includes Meet & Greet and flight tracking.",
            },
            {
              q: "What is your cancellation policy?",
              a: "Free cancellation up to 1 hour before pickup. See details in booking.",
            },
            {
              q: "Can I request special amenities?",
              a: "Yes, please specify your preferences during booking or contact our concierge.",
            },
            {
              q: "Do you offer event packages?",
              a: "We provide tailored packages for weddings, corporate events, and more.",
            },
            {
              q: "Is Wi-Fi available in the vehicles?",
              a: "Yes, complimentary Wi-Fi is available in most vehicles.",
            },
            {
              q: "How do I contact support?",
              a: "Use the contact section below for instant help or live chat.",
            },
          ].map((f, idx) => (
            <details
              key={idx}
              className="py-4 group cursor-pointer transition-all"
            >
              <summary className="font-semibold text-lg text-white group-open:text-corporate-gold transition-colors flex items-center justify-between">
                {f.q}
                <span className="ml-2 text-corporate-gold transform group-open:rotate-90 transition-transform">
                  →
                </span>
              </summary>
              <div className="text-gray-300 mt-3 pl-4 pr-8">{f.a}</div>
            </details>
          ))}
        </div>
      </motion.section>

      {/* Contact & Support Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-24 p-12 rounded-2xl bg-gradient-to-br from-black/90 to-corporate-gold/10 border border-corporate-gold/30 shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <MessageCircle className="w-10 h-10 text-corporate-gold" />
          <h2 className="text-4xl font-bold text-corporate-gold drop-shadow">
            Contact & Support
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <a
            href="mailto:support@corporatewheels.com"
            className="flex items-center gap-3 bg-black/60 border border-corporate-gold/20 rounded-lg px-8 py-6 text-lg font-semibold text-corporate-gold hover:bg-corporate-gold/10 transition-colors"
          >
            <PhoneCall className="w-6 h-6" /> Email Support
          </a>
          <button className="flex items-center gap-3 bg-corporate-gold hover:bg-corporate-gold/90 text-black rounded-lg px-8 py-6 text-lg font-semibold transition-colors">
            <MessageCircle className="w-6 h-6" /> Live Chat
          </button>
        </div>
        <div className="mt-2 text-gray-400 text-base">
          Live chat is available for urgent issues. Our agents respond within
          minutes. For custom requests, event packages, or business accounts,
          contact our concierge team 24/7.
        </div>
      </motion.section>
    </main>
  );
}
