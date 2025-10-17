import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Star, Shield, Clock, MapPin, Phone, Download, CheckCircle, Car, Users, Globe } from 'lucide-react';

const cities = ['New York', 'Los Angeles', 'London', 'Paris', 'Dubai', 'Singapore'];

export default function ChauffeurHailing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero - enhanced */}
  <section className="relative overflow-hidden pt-24 pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black/85" />
          <svg className="absolute -top-32 left-1/4 opacity-20" width="900" height="500" viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#b38600" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#ffd36a" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <ellipse cx="220" cy="100" rx="260" ry="100" fill="url(#goldGrad)" />
            <ellipse cx="700" cy="200" rx="190" ry="90" fill="url(#goldGrad)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <span className="inline-block bg-corporate-gold/10 text-corporate-gold px-3 py-1 rounded-full text-sm font-medium mb-4">New</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">Say hello to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-corporate-gold to-yellow-300">Chauffeur Hailing™</span></h1>
              <p className="text-lg text-gray-300 max-w-2xl mb-8">Premium rides on demand — professional chauffeurs, swift pickups, and an experience designed for people who value time and comfort.</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg" className="bg-corporate-gold hover:bg-corporate-gold/95 text-black px-6 py-4">Book Now</Button>
                <Button size="lg" variant="outline" className="border-corporate-gold text-corporate-gold px-6 py-4"><Download className="w-4 h-4 mr-2"/>Download App</Button>
              </div>

              <div className="mt-6 flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-corporate-gold" />
                  <div>
                    <p className="font-semibold">Rated 4.9/5</p>
                    <p className="text-sm text-gray-400">by thousands of riders</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-corporate-gold" />
                  <div>
                    <p className="font-semibold">Vetted Chauffeurs</p>
                    <p className="text-sm text-gray-400">background checked & insured</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -right-16 -top-10 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-300/10 to-corporate-gold/5 blur-3xl" />
                <Card className="p-8 bg-black/50 border-gray-800 shadow-2xl">
                  <div className="flex gap-4 items-center">
                    <img src="https://images.unsplash.com/photo-1535542819287-7acb6b1b9c35?q=80&w=800&auto=format&fit=crop" alt="chauffeur" className="w-28 h-28 rounded-xl object-cover shadow-lg" />
                    <div>
                      <p className="text-lg font-semibold">Chauffeur at your service</p>
                      <p className="text-sm text-gray-400">Uniformed, professional, and familiar with the fastest routes in the city.</p>
                      <div className="mt-4 flex gap-3">
                        <Button size="sm" variant="outline" className="border-corporate-gold text-corporate-gold">How it works</Button>
                        <Button size="sm" className="bg-corporate-gold text-black">View Fleet</Button>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="mt-6 flex gap-4 justify-center">
                  <div className="w-20 h-40 bg-gradient-to-b from-gray-800 to-black rounded-xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop" alt="app preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-20 h-40 bg-gradient-to-b from-gray-800 to-black rounded-xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop" alt="app preview 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose - upgraded cards */}
  <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why riders prefer Chauffeur Hailing</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Service built for professionals who demand reliability, comfort and discretion.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Clock className="w-6 h-6 text-corporate-gold" />, title: 'Convenience', desc: 'Rides in minutes — book instantly.' },
              { icon: <Car className="w-6 h-6 text-corporate-gold" />, title: 'Comfort', desc: 'Luxury vehicles, immaculate interiors.' },
              { icon: <CheckCircle className="w-6 h-6 text-corporate-gold" />, title: 'Quality', desc: 'High service standards and checks.' },
              { icon: <MapPin className="w-6 h-6 text-corporate-gold" />, title: 'Your Schedule', desc: 'On-demand or pre-booked pickups.' },
              { icon: <Users className="w-6 h-6 text-corporate-gold" />, title: 'Reliability', desc: 'Punctual chauffeurs and accurate ETAs.' },
              { icon: <Globe className="w-6 h-6 text-corporate-gold" />, title: 'Competitive Rates', desc: 'Transparent pricing with no surprises.' }
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <Card className="p-8 bg-black/40 border border-gray-800 rounded-xl hover:scale-105 hover:shadow-2xl transition-transform">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-full bg-black/30 border border-white/5">{item.icon}</div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand - improved map */}
      <section className="py-24 bg-gradient-to-b from-gray-900/20 to-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">Convenient on-demand rides within minutes</h2>
              <p className="text-gray-300 mb-6">Instant availability in supported cities — request a chauffeur for immediate pickup or schedule ahead.</p>
              <div className="flex gap-4">
                <Button className="bg-corporate-gold">Request Pickup</Button>
                <Button variant="outline" className="border-corporate-gold text-corporate-gold">See Coverage</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative bg-black/40 h-72 rounded-lg border border-gray-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1505765056039-8e2ff0fc6a2b?q=80&w=1600&auto=format&fit=crop" alt="map" className="w-full h-full object-cover brightness-50" />
                <svg viewBox="0 0 600 400" className="absolute inset-0 w-full h-full pointer-events-none">
                  {[120, 240, 360, 480].map((x, i) => (
                    <motion.circle key={i} cx={x} cy={80 + (i % 3) * 80} r={6} fill="#ffd36a" initial={{ opacity: 0.8, r: 2 }} animate={{ opacity: [0.6, 1, 0.6], r: [4, 10, 4] }} transition={{ duration: 2 + i * 0.4, repeat: Infinity }} />
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cities - improved badges */}
  <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-3xl font-bold">Available cities</h2>
            <p className="text-gray-300">Where Chauffeur Hailing is currently available.</p>
          </motion.div>

          <div className="flex flex-wrap gap-6 justify-center mt-8">
            {cities.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800/60 to-black/40 border border-gray-800 text-sm text-gray-100 flex items-center gap-3">
                <span className="w-3 h-3 bg-corporate-gold rounded-full shadow-md" />
                <span className="font-medium">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download - polished */}
  <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-4">Your chauffeur, one tap away</h2>
              <p className="text-gray-300 mb-6">Download the app to request rides, track chauffeurs in real time, and manage bookings with ease.</p>
              <div className="flex gap-4">
                <Button variant="outline" className="border-corporate-gold text-corporate-gold"><Download className="w-4 h-4 mr-2"/>App Store</Button>
                <Button variant="outline" className="border-corporate-gold text-corporate-gold"><Download className="w-4 h-4 mr-2"/>Google Play</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="relative w-full max-w-lg mx-auto">
                <div className="bg-gradient-to-b from-gray-800/60 to-black/60 border border-gray-800 rounded-3xl p-8 shadow-2xl">
                  <div className="w-64 h-[420px] bg-gradient-to-b from-black to-gray-800 rounded-2xl mx-auto overflow-hidden shadow-inner">
                    <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop" alt="app preview" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - upgraded */}
  <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-3xl font-bold">Rider Stories</h2>
            <p className="text-gray-300">Real feedback from corporate and leisure travelers.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: 'John D.',
              text: 'Fast, professional and comfortable. My go-to service for city meetings.'
            },{
              name: 'Sara L.',
              text: 'Seamless booking and excellent chauffeurs. Always on time.'
            },{
              name: 'Akira T.',
              text: 'Premium experience, great for airport runs and city hops.'
            }].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}>
                <Card className="p-8 bg-black/40 border-gray-800 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-corporate-gold font-semibold">{t.name.charAt(0)}</div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-300">"{t.text}"</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - polished */}
      <section className="py-20 bg-gradient-to-b from-gray-900/20 to-black">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-6">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
            <p className="text-gray-400">Quick answers about Chauffeur Hailing.</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'How quickly can I get a chauffeur?', a: 'In covered cities, you can expect a pickup within minutes for on-demand rides. Exact wait times depend on driver availability.' },
              { q: 'Can I pre-schedule rides?', a: 'Yes, schedule immediate or future pickups directly in the app to guarantee a chauffeur.' },
              { q: 'What is included in the fare?', a: 'Fares include the chauffeur, vehicle, taxes and reasonable waiting time. Additional fees may apply for long stops.' }
            ].map((f, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-gray-800">
                <AccordionTrigger className="hover:text-corporate-gold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
