import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Star,
  Shield,
  Clock,
  MapPin,
  Phone,
  Download,
  CheckCircle,
  Car,
  Users,
  Globe,
  ArrowRight,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";
import DateInput from "@/components/ui/DateInput";
import TimeInput from "@/components/ui/TimeInput";
import Seo from "@/components/Seo";

const serviceClasses = [
  {
    title: "Business Class",
    desc: "Premium sedans for business travelers",
    icon: <Car className="w-8 h-8 text-corporate-gold" />,
  },
  {
    title: "First Class",
    desc: "Luxury vehicles for maximum comfort",
    icon: <Star className="w-8 h-8 text-corporate-gold" />,
  },
  {
    title: "Business Van/SUV",
    desc: "Spacious rides for groups or extra luggage",
    icon: <Users className="w-8 h-8 text-corporate-gold" />,
  },
];

const globalCities = [
  {
    name: "New York",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "London",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Paris",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dubai",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Singapore",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Los Angeles",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Berlin",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Tokyo",
    img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
  },
];

export default function AirportTransfer() {
    const [date, setDate] = useState<any>(null);
    const [time, setTime] = useState<any>(null);
  return (
    <div className="min-h-screen bg-black text-white">
      <Seo
        title="Airport Transfer Chauffeur Service"
        description="Reliable airport transfers with flight tracking, meet & greet, and complimentary wait time. Book your chauffeur to or from the airport in seconds."
        path="/airport-transfer"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-corporate-gold/10" />
          <svg
            className="absolute -top-32 left-1/4 opacity-20"
            width="900"
            height="500"
            viewBox="0 0 900 500"
            fill="none"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#b38600" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#ffd36a" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <ellipse
              cx="220"
              cy="100"
              rx="260"
              ry="100"
              fill="url(#goldGrad)"
            />
            <ellipse cx="700" cy="200" rx="190" ry="90" fill="url(#goldGrad)" />
          </svg>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="inline-block bg-corporate-gold/10 text-corporate-gold px-3 py-1 rounded-full text-sm font-medium mb-4">
                Airport Transfer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                Seamless Airport Transfers,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-corporate-gold to-yellow-300">
                  Worldwide
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mb-8">
                Arrive or depart in style with our premium airport transfer
                service. Professional chauffeurs, flight tracking, and meet &
                greet included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-corporate-gold text-black px-6 py-4"
                >
                  <Link to="/booking"> Book Airport Transfer</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-corporate-gold text-corporate-gold px-6 py-4"
                >
                  <Link to="/help">Contact Concierge</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <p className="font-semibold">Flight Tracking</p>
                  <p className="text-sm text-gray-400">We adjust for delays</p>
                </div>
                <div>
                  <p className="font-semibold">Meet & Greet</p>
                  <p className="text-sm text-gray-400">
                    Chauffeur awaits at arrivals
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <Card className="p-8 bg-black/50 border-gray-800 shadow-2xl flex flex-col items-center">
                <Plane className="w-20 h-20 text-corporate-gold mb-6 animate-bounce-slow" />
                <p className="text-lg font-semibold mb-2">
                  Your journey starts here
                </p>
                <p className="text-gray-400 mb-4 text-center">
                  Book a transfer and enjoy a smooth ride to or from the
                  airport, anywhere in the world.
                </p>
                <Button className="bg-corporate-gold text-black w-full">
                  <Link to="/booking">Book Now</Link>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features + Safety & Cleanliness (Combined) */}
      <section className="py-14 bg-black/95">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-corporate-gold drop-shadow-lg">
              Why Choose Our Airport Transfer?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Luxury, reliability, and peace of mind—every ride, every time.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: (
                  <Shield className="w-12 h-12 text-corporate-gold drop-shadow-md" />
                ),
                title: "Professional Chauffeurs",
                desc: "Vetted, uniformed, and multilingual drivers.",
              },
              {
                icon: (
                  <Clock className="w-12 h-12 text-corporate-gold drop-shadow-md" />
                ),
                title: "Punctuality",
                desc: "Flight tracking and on-time pickups, every time.",
              },
              {
                icon: (
                  <CheckCircle className="w-12 h-12 text-corporate-gold drop-shadow-md" />
                ),
                title: "All-Inclusive Pricing",
                desc: "No hidden fees, free wait time, and flexible cancellation.",
              },
              {
                icon: (
                  <Star className="w-12 h-12 text-corporate-gold drop-shadow-md" />
                ),
                title: "Gold Standard Cleanliness",
                desc: "Vehicles sanitized before every ride. 5-star service guarantee.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="flex flex-col items-center text-center justify-between p-10 bg-gradient-to-b from-black/80 via-gray-900/80 to-black/90 border-2 border-corporate-gold/20 rounded-2xl shadow-xl hover:shadow-2xl hover:border-corporate-gold/60 transition-all h-full min-h-[340px] group">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-tr from-corporate-gold/20 to-black border-2 border-corporate-gold/40 group-hover:scale-110 group-hover:shadow-gold transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg text-corporate-gold mt-2 tracking-wide drop-shadow">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed mt-auto font-medium">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Our Service Classes */}
      <section className="py-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Discover Our Service Classes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the perfect ride for your needs, from business to first
              class and group travel.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {serviceClasses.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card className="p-8 bg-black/40 border border-gray-800 rounded-xl hover:scale-105 hover:shadow-2xl transition-transform flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-full bg-black/30 border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* VIP Meet & Greet Section */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold mb-4">
              VIP Meet & Greet Experience
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From the moment you land, enjoy a seamless, personalized welcome.
              Our chauffeurs greet you at arrivals, assist with luggage, and
              escort you to your vehicle.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-corporate-gold" />
                <span className="font-semibold text-lg">
                  Personalized Name Sign
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-corporate-gold" />
                <span className="font-semibold text-lg">
                  Assistance with Luggage
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-corporate-gold" />
                <span className="font-semibold text-lg">
                  Direct Contact with Chauffeur
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661514308071-add7e30fd4c9?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000"
                  alt="VIP Meet & Greet"
                  className="rounded-2xl shadow-2xl w-80 h-64 object-cover border-4 border-corporate-gold/30"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Solutions Section */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold mb-4">Corporate Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tailored airport transfer solutions for business travelers,
              including account management, consolidated invoicing, and priority
              support.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="p-8 bg-black/40 border border-gray-800 rounded-xl flex flex-col items-center text-center gap-4">
              <Users className="w-10 h-10 text-corporate-gold" />
              <h3 className="font-semibold text-xl">Business Accounts</h3>
              <p className="text-gray-400">
                Centralized management for your company’s airport transfers.
              </p>
            </Card>
            <Card className="p-8 bg-black/40 border border-gray-800 rounded-xl flex flex-col items-center text-center gap-4">
              <CheckCircle className="w-10 h-10 text-corporate-gold" />
              <h3 className="font-semibold text-xl">Consolidated Invoicing</h3>
              <p className="text-gray-400">
                Streamlined billing and reporting for all your rides.
              </p>
            </Card>
            <Card className="p-8 bg-black/40 border border-gray-800 rounded-xl flex flex-col items-center text-center gap-4">
              <Phone className="w-10 h-10 text-corporate-gold" />
              <h3 className="font-semibold text-xl">Priority Support</h3>
              <p className="text-gray-400">
                24/7 dedicated support for business clients.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Customer Reviews Section */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold mb-4">Real Customer Reviews</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from travelers who trust our airport transfer service
              worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-8 bg-black/40 border border-gray-800 rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-corporate-gold" />
                <span className="font-semibold">
                  “Flawless experience from start to finish. My chauffeur was
                  waiting at arrivals and helped with my bags. Highly
                  recommend!”
                </span>
              </div>
              <span className="text-gray-400 text-sm">— Olivia, London</span>
            </Card>
            <Card className="p-8 bg-black/40 border border-gray-800 rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-corporate-gold" />
                <span className="font-semibold">
                  “The booking process was easy, and the car was immaculate.
                  Will use again for all my business trips.”
                </span>
              </div>
              <span className="text-gray-400 text-sm">— Daniel, Birmingham</span>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Cleanliness Section (Removed, now combined above) */}

      {/* Get To or From the Airport */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Get To or From the Airport
              </h2>
              <p className="text-gray-300 mb-6">
                Whether you’re arriving or departing, our chauffeurs ensure a
                smooth, stress-free journey. Enjoy complimentary wait time,
                luggage assistance, and a personalized meet & greet.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-corporate-gold" />{" "}
                  Complimentary wait time
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-corporate-gold" />{" "}
                  Luggage assistance
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-corporate-gold" />{" "}
                  Personalized meet & greet
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-corporate-gold" /> Flight
                  tracking & delay adjustment
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-black/40 border border-gray-800 rounded-xl shadow-2xl flex flex-col items-center">
                <img
                  src="/images/Relaxrest1762454212669.jpeg"
                  alt="airport transfer"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <p className="text-lg font-semibold mb-2">
                  Relax, we’ll handle the rest
                </p>
                <p className="text-gray-400 text-center">
                  Your chauffeur will be waiting at arrivals or departures,
                  ready to assist you and ensure a seamless experience.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Airport Shuttle Booking */}
      <section className="py-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Airport Shuttle Booking</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Book your airport shuttle in advance for peace of mind. Flexible
              scheduling, instant confirmation, and 24/7 support.
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto bg-black/50 border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 items-center " >
            <div className=" w-full flex flex-col md:flex-row gap-4">
             <input
  type="text"
  placeholder="Pickup location"
  className="
    flex-1 bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white 
    placeholder:text-gray-500 
    focus:border-[#e6a700] focus:ring-2 focus:ring-[#e6a700] 
    focus:outline-none transition-all duration-300
  "
/>

<input
  type="text"
  placeholder="Dropoff (Airport)"
  className="
    flex-1 bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white 
    placeholder:text-gray-500 
    focus:border-[#e6a700] focus:ring-2 focus:ring-[#e6a700] 
    focus:outline-none transition-all duration-300
  "
/>

            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 airport-transfer-datetime">
             <DateInput
                                  value={date}
                                  onChange={(d) => setDate(d)}
                                  ariaLabel="Booking date"
                                  name="widget-date"
                                  className="w-full rounded-xl border  bg-gray-900 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-corporate-gold"
                                />
                                <TimeInput
                                  value={time}
                                  onChange={(t) => setTime(t)}
                                  ariaLabel="Booking time"
                                  name="widget-time"
                                  className="w-full rounded-xl border  bg-gray-900 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-corporate-gold "
                                />
            </div>
            <Button className="bg-corporate-gold text-black w-full">
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Quick answers about our airport transfer service.
            </p>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "How does airport pickup work?",
                a: "Your chauffeur will meet you at arrivals with a name sign, assist with luggage, and monitor your flight for delays.",
              },
              {
                q: "Are rates fixed?",
                a: "Yes, all airport transfer rates are fixed and all-inclusive. No hidden fees.",
              },
              {
                q: "Can I book for someone else?",
                a: "Absolutely. You can book for a guest, family member, or colleague and provide their details during booking.",
              },
              {
                q: "What if my flight is delayed?",
                a: "We track your flight and adjust pickup time automatically. No extra charge for reasonable delays.",
              },
            ].map((f, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border-gray-800"
              >
                <AccordionTrigger className="hover:text-corporate-gold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
