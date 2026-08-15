import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Globe,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import SelectInput from "@/components/ui/SelectInput";
import { useState } from "react";
import DateInput from "@/components/ui/DateInput";
import TimeInput from "@/components/ui/TimeInput";
import { set } from "date-fns";
import Seo from "@/components/Seo";

const hourlyHireFaqs = [
  {
    question: "What is the minimum booking duration?",
    answer:
      "Our minimum booking duration is 2 hours. This ensures you have enough time to complete your planned activities without feeling rushed. For special events or custom requirements, please contact our concierge service.",
    icon: Clock,
  },
  {
    question: "Can I extend my booking time?",
    answer:
      "Yes, you can extend your booking time during the service, subject to chauffeur availability. We recommend notifying the chauffeur in advance if you think you might need extra time. Additional hours are charged at the standard hourly rate.",
    icon: Calendar,
  },
  {
    question: "What happens if my plans change during the service?",
    answer:
      "Our service is flexible, and your chauffeur can accommodate changes to your itinerary. You can modify your destinations or make additional stops as needed within your booked hours. Just inform your chauffeur or contact our 24/7 support team.",
    icon: MapPin,
  },
  {
    question: "Are there any mileage limits?",
    answer:
      "Our hourly service includes unlimited mileage within the metropolitan area. For journeys outside the city limits, additional charges may apply. Long-distance travel may require special arrangements - please discuss with our booking team.",
    icon: Car,
  },
  {
    question: "What types of vehicles are available?",
    answer:
      "We offer a comprehensive range of luxury vehicles including Mercedes S-Class, BMW 7 Series, premium SUVs like the Range Rover, and luxury vans. All vehicles are late-model and maintained to the highest standards of comfort and safety.",
    icon: Shield,
  },
];

export default function HourlyHire() {
  const [quickHours, setQuickHours] = useState<string>("2");
  const [quickCar, setQuickCar] = useState<string>("Luxury Sedan");
  const [date, setDate] = useState<any>(null);
  const [time, setTime] = useState<any>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hourlyHireFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Seo
        title="Hourly Chauffeur Hire"
        description="Book a dedicated chauffeur by the hour for meetings, events, or a day at your own pace. Flexible bookings with no hidden fees."
        path="/hourly-hire"
        jsonLd={faqJsonLd}
      />
      {/* Hero Section with refined two-column layout */}
      <section className="relative min-h-[72vh] flex items-center  pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/houry-hire.png"
            alt="luxury car"
            className="w-full h-full object-cover brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute -top-12 right-12 w-56 h-56 rounded-full bg-corporate-gold/10 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="mb-4">
                <Star className="w-12 h-12 text-corporate-gold" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Premium Hourly Chauffeur Service
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mb-8">
                Tailored hourly chauffeur solutions for business and leisure —
                flexible booking, seamless itineraries, and professional
                chauffeurs available 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild className="bg-corporate-gold text-black px-6 py-4">
                  <Link to="/booking">Book Now</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-corporate-gold text-corporate-gold px-6 py-4"
                >
                  <Link to="/help">Contact Concierge</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <p className="font-semibold">24/7 Availability</p>
                  <p className="text-sm text-gray-400">
                    Flexible hours to suit your schedule
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Vetted Chauffeurs</p>
                  <p className="text-sm text-gray-400">
                    Professional, licensed and insured
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-black/60 border-gray-800 p-6 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4">Quick Book</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Choose hours, vehicle type and request add-ons — book
                  instantly.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  <SelectInput
                    options={[
                      { value: "2", label: "2 Hours" },
                      { value: "4", label: "4 Hours" },
                      { value: "6", label: "6 Hours" },
                      { value: "8", label: "8 Hours" },
                    ]}
                    value={quickHours}
                    onChange={(v) => setQuickHours(v)}
                    ariaLabel="Quick book hours"
                    name="quick-hours"
                    className="bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white"
                  />

                  <SelectInput
                    options={[
                      { value: "Luxury Sedan", label: "Luxury Sedan" },
                      { value: "Executive SUV", label: "Executive SUV" },
                      { value: "Van", label: "Van" },
                    ]}
                    value={quickCar}
                    onChange={(v) => setQuickCar(v)}
                    ariaLabel="Quick book car"
                    name="quick-car"
                    className="bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white"
                  />

                  <div className="flex flex-col sm:flex-row gap-2 hourly-hire">
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

                  <Button className="bg-corporate-gold text-black mt-2">
                    Check Availability
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience Premium Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover why leading businesses and individuals choose our premium
              chauffeur service for their transportation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description:
                  "Book for as many hours as needed, with easy extensions and 24/7 availability",
                image: "/images/FlexibleScheduling.jpeg",
              },
              {
                icon: Shield,
                title: "Elite Chauffeurs",
                description:
                  "Professionally trained, background-checked, and certified for your peace of mind",
                image: "/images/EliteChauffeurs.jpeg",
              },
              {
                icon: Car,
                title: "Luxury Fleet",
                description:
                  "Choose from our curated selection of premium vehicles for any occasion",
                image: "/images/LuxuryFleet.jpg",
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
                <Card className="relative overflow-hidden h-[420px] bg-black/40 border-gray-800 hover:border-corporate-gold transition-all duration-500 shadow-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent">
                    <feature.icon className="w-12 h-12 text-corporate-gold mb-4 transform group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-2xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your needs with our straightforward
              pricing options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Basic",
                price: "89",
                duration: "2 Hours",
                features: [
                  "Luxury Sedan",
                  "Professional Chauffeur",
                  "Complimentary Water",
                  "City Coverage",
                  "Free Cancellation",
                ],
              },
              {
                title: "Premium",
                price: "159",
                duration: "4 Hours",
                popular: true,
                features: [
                  "Premium Luxury Vehicle",
                  "Elite Chauffeur",
                  "Premium Refreshments",
                  "Extended Area Coverage",
                  "Free Cancellation",
                  "Priority Support",
                ],
              },
              {
                title: "Executive",
                price: "299",
                duration: "8 Hours",
                features: [
                  "Ultra-Luxury Vehicle",
                  "Executive Chauffeur",
                  "Premium Refreshments",
                  "Unlimited Area Coverage",
                  "Free Cancellation",
                  "24/7 Concierge",
                  "Custom Itinerary",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 text-center">
                    <span className="bg-corporate-gold text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`p-8 ${plan.popular ? "bg-black/50 border-corporate-gold shadow-xl" : "bg-black/40 border-gray-800"} hover:border-corporate-gold transition-all duration-300`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">£{plan.price}</span>
                    <span className="text-gray-400">/{plan.duration}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-corporate-gold" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-corporate-gold hover:bg-corporate-gold/90 text-black"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    Select Package
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Stop Journeys Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-corporate-gold/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Multi-Stop Journey Excellence
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Perfect for days filled with multiple destinations. Experience
                  seamless transitions between locations with our professional
                  chauffeur service.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Business Meetings",
                      description:
                        "Move efficiently between multiple client locations",
                      icon: <MapPin className="w-6 h-6 text-corporate-gold" />,
                    },
                    {
                      title: "Shopping Tours",
                      description:
                        "Visit multiple shopping destinations hassle-free",
                      icon: (
                        <DollarSign className="w-6 h-6 text-corporate-gold" />
                      ),
                    },
                    {
                      title: "Tourist Excursions",
                      description: "Explore city attractions at your own pace",
                      icon: <Globe className="w-6 h-6 text-corporate-gold" />,
                    },
                    {
                      title: "Special Events",
                      description: "Perfect for weddings and special occasions",
                      icon: (
                        <Calendar className="w-6 h-6 text-corporate-gold" />
                      ),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-corporate-gold transition-colors group"
                    >
                      <div className="mb-4 transform group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-first lg:order-last"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661777666230-7d04a80d6724?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                  alt="Business meeting transition"
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1748514338092-943ecca0cdc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                  alt="Luxury shopping experience"
                  className="rounded-lg shadow-xl w-full h-64 object-cover mt-12"
                />
                <img
                  src="https://images.unsplash.com/photo-1570349723855-7d9ddcbab1b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                  alt="Tourist destinations"
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1688054005456-466170816196?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                  alt="Special event transportation"
                  className="rounded-lg shadow-xl w-full h-64 object-cover mt-12"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-corporate-gold/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/benefits-bg-pattern.svg')",
              backgroundSize: "30px 30px",
              backgroundRepeat: "repeat",
              opacity: 0.1,
            }}
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Service?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of luxury, reliability, and
              professional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Fully insured and licensed chauffeurs with extensive safety training",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description:
                  "Round-the-clock service to accommodate your schedule",
              },
              {
                icon: CreditCard,
                title: "Easy Payment",
                description:
                  "Secure and flexible payment options for your convenience",
              },
              {
                icon: Phone,
                title: "Live Support",
                description: "24/7 customer service for immediate assistance",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-corporate-gold transition-all duration-300 group"
              >
                <benefit.icon className="w-12 h-12 text-corporate-gold mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute transform rotate-45 -left-1/4 -top-1/4 w-1/2 h-1/2 bg-corporate-gold/20 rounded-full blur-3xl" />
            <div className="absolute transform -rotate-45 -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-corporate-gold/20 rounded-full blur-3xl" />
          </div>
        </div>
        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Star className="w-12 h-12 text-corporate-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Client Experiences</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover why our clients choose us for their premium
              transportation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "The hourly service transformed our wedding day. The chauffeur's professionalism and the luxury vehicle added an extra touch of elegance to our special moments.",
                author: "Sarah & James",
                role: "Wedding Clients",
                rating: 5,
                image: "/images/testimonials/wedding-couple.jpg",
              },
              {
                text: "As a business executive, the reliability and flexibility of the hourly service is invaluable. The chauffeurs are always punctual and professional.",
                author: "Michael Chen",
                role: "CEO, Tech Solutions",
                rating: 5,
                image: "/images/testimonials/business-exec.jpg",
              },
              {
                text: "A perfect way to explore the city! Our chauffeur was knowledgeable and accommodating, making our tourist experience truly memorable and luxurious.",
                author: "Emma Thompson",
                role: "International Tourist",
                rating: 5,
                image: "/images/testimonials/tourist.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-corporate-gold transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full ">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-corporate-gold text-corporate-gold"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Common Questions</h2>
            <p className="text-xl text-gray-300">
              Find answers to frequently asked questions about our hourly
              chauffeur service.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {hourlyHireFaqs.map((faq, index) => (
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
                  <AccordionTrigger className="text-left hover:text-corporate-gold group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-900/50 group-hover:bg-corporate-gold/10 transition-colors">
                        <faq.icon className="w-5 h-5 text-corporate-gold" />
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pl-14">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <img
            src="/images/LuxuryLimousineExperience.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience Luxury Transportation
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Book your premium chauffeur service today and elevate your
                journey with Corporate Wheels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-corporate-gold hover:bg-corporate-gold/90 text-black font-semibold"
                >
                  <Link to="/booking">Book Your Chauffeur </Link>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-corporate-gold text-corporate-gold hover:bg-corporate-gold/10"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <Link to="/help">Contact Concierge</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
