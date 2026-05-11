import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Car,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Route,
  ArrowRight,
  Download,
  Phone,
  Calendar,
  CreditCard,
  ThumbsUp,
  ChevronRight,
} from "lucide-react";

const cityRoutes = [
  {
    from: "London",
    to: "Manchester",
    distance: "208 miles",
    duration: "4 hours",
    price: "349",
    image:
      "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=80&w=2940&auto=format&fit=crop",
  },
  {
    from: "London",
    to: "Oxford",
    distance: "60 miles",
    duration: "1.5 hours",
    price: "189",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2940&auto=format&fit=crop",
  },
  {
    from: "London",
    to: "Birmingham",
    distance: "126 miles",
    duration: "2.5 hours",
    price: "249",
    image:
      "https://images.unsplash.com/photo-1601372740920-80252579df85?q=80&w=2940&auto=format&fit=crop",
  },
  {
    from: "London",
    to: "Edinburgh",
    distance: "402 miles",
    duration: "7.5 hours",
    price: "599",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function CityToCity() {
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section - Redesigned: two-column, meaningful copy, CTAs, trust badges */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2940&auto=format&fit=crop"
            alt="City skyline at dusk"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Headline, benefits, CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left px-4 lg:px-0"
            >
              <p className="inline-block px-3 py-1 rounded-full text-sm bg-corporate-gold/10 text-corporate-gold font-medium mb-4">
                City-to-City
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Travel Between Cities—Comfort, Punctuality, and Transparency
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mb-8">
                Book professional chauffeurs and premium vehicles for
                predictable, door-to-door intercity journeys. We offer fixed,
                all-inclusive pricing, flexible pickup times, and vetted
                chauffeurs so you can focus on your trip — not the logistics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  size="lg"
                  className="bg-corporate-gold hover:bg-corporate-gold/90 text-black font-semibold px-6 py-4"
                >
                  <Link to="/booking">Book a Route</Link>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-corporate-gold text-corporate-gold hover:bg-corporate-gold px-6 py-4"
                >
                  {" "}
                  <Link to="/help"> Contact Concierge</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-corporate-gold" />
                  <div>
                    <p className="font-semibold">4.9/5</p>
                    <p className="text-sm text-gray-400">
                      Average Customer Rating
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-corporate-gold" />
                  <div>
                    <p className="font-semibold">Vetted Drivers</p>
                    <p className="text-sm text-gray-400">
                      Background-checked & insured
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Featured cities grid for visual interest + accessibility links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 lg:px-0"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    city: "London → Manchester",
                    img: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=80&w=1000",
                  },
                  {
                    city: "London → Oxford",
                    img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1000",
                  },
                  {
                    city: "London → Birmingham",
                    img: "https://images.unsplash.com/photo-1601372740920-80252579df85?q=80&w=1000",
                  },
                  {
                    city: "London → Edinburgh",
                    img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000",
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={c.img}
                      alt={c.city}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                      <div className="text-white">
                        <p className="text-sm text-gray-200">Popular route</p>
                        <p className="font-semibold">{c.city}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-400 mt-4">
                Can’t find your route? Contact our concierge for a custom quote
                and schedule.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long-Distance Service Features */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              The Better Way Between Cities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the comfort and convenience of our premium intercity
              chauffeur service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: "Premium Fleet",
                description:
                  "Latest model luxury vehicles equipped with premium amenities for maximum comfort",
              },
              {
                icon: Shield,
                title: "Professional Chauffeurs",
                description:
                  "Experienced, background-checked chauffeurs with extensive route knowledge",
              },
              {
                icon: CreditCard,
                title: "All-Inclusive Pricing",
                description:
                  "Transparent fixed rates with no hidden fees or surge pricing",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="bg-black/30 backdrop-blur-sm border-gray-800 p-8 hover:border-corporate-gold transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-corporate-gold mb-6 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Popular City-to-City Routes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most frequently traveled routes with fixed
              competitive rates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cityRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() =>
                  setSelectedRoute(selectedRoute === index ? null : index)
                }
                className="cursor-pointer group"
              >
                <Card className="relative overflow-hidden h-[300px] border-gray-800 hover:border-corporate-gold transition-all duration-500">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/70" />
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <MapPin className="w-5 h-5 text-corporate-gold" />
                        <h3 className="text-2xl font-semibold">
                          {route.from} → {route.to}
                        </h3>
                      </div>
                      <div className="flex items-center gap-6 text-gray-300">
                        <span className="flex items-center gap-2">
                          <Route className="w-4 h-4" />
                          {route.distance}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {route.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-gray-400">Starting from</p>
                        <p className="text-3xl font-bold text-corporate-gold">
                          £{route.price}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-corporate-gold text-corporate-gold hover:bg-corporate-gold hover:text-black transition-all duration-300"
                      >
                        {" "}
                        <Link to="/booking"> Book Now</Link>
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our City-to-City Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience a new standard in intercity travel with our premium
                chauffeur service.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Door-to-Door Service",
                    description:
                      "No need to worry about getting to and from stations or airports",
                  },
                  {
                    title: "Flexible Scheduling",
                    description:
                      "Choose your pickup time and travel at your own pace",
                  },
                  {
                    title: "Professional Chauffeurs",
                    description:
                      "Experienced drivers with perfect safety records",
                  },
                  {
                    title: "Premium Vehicles",
                    description:
                      "Late-model luxury cars with premium amenities",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1">
                      <ThumbsUp className="w-6 h-6 text-corporate-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2940&auto=format&fit=crop"
                alt="Luxury car service"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="flex items-center gap-4">
                  <Star className="w-12 h-12 text-corporate-gold" />
                  <div>
                    <p className="text-2xl font-bold">4.9/5</p>
                    <p className="text-gray-400">Customer Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
          <img
            src="/images/ada607e9-1a77-4abe-b383-edba1d490fc2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Download Our App</h2>
              <p className="text-xl text-gray-300 mb-12">
                Book your city-to-city rides instantly, track your chauffeur in
                real-time, and manage your bookings with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-corporate-gold text-corporate-gold hover:bg-corporate-gold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-corporate-gold text-corporate-gold hover:bg-corporate-gold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Google Play
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our city-to-city service.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How does the city-to-city service work?",
                answer:
                  "Our city-to-city service provides door-to-door transportation between major cities. Simply book your ride, and a professional chauffeur will pick you up at your specified location and drive you to your destination in another city.",
              },
              {
                question: "Are the rates fixed?",
                answer:
                  "Yes, our intercity rates are fixed and all-inclusive. The price you see during booking is the final price you'll pay, with no hidden fees or surge pricing.",
              },
              {
                question: "Can I make stops along the way?",
                answer:
                  "Yes, you can request stops along your journey. Additional stops may affect the total fare and should be arranged in advance when possible.",
              },
              {
                question: "What happens if my plans change?",
                answer:
                  "We understand plans can change. You can modify or cancel your booking up to 24 hours before the scheduled pickup time without any cancellation fees.",
              },
              {
                question: "What types of vehicles are available?",
                answer:
                  "We offer a range of premium vehicles including luxury sedans, SUVs, and executive vans. All vehicles are late-model and maintained to the highest standards of comfort and safety.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-gray-800"
                >
                  <AccordionTrigger className="text-left hover:text-corporate-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black relative overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Travel in Style?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Book your intercity journey today and experience the comfort of
              premium chauffeur service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-corporate-gold hover:bg-corporate-gold/90 text-black font-semibold"
              >
                <Link to="/booking"> Book Now</Link>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-corporate-gold text-corporate-gold hover:bg-corporate-gold"
              >
                <Phone className="w-5 h-5 mr-2" />
                <Link to="/help"> Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
