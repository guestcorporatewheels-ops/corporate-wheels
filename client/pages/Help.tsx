
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, User, CreditCard, Lock, MessageCircle, Video, Shield, XCircle, BookOpen, PhoneCall, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';

const sections = [
  {
    id: 'getting-started',
    icon: <User className="w-8 h-8 text-corporate-gold" />,
    title: 'Getting Started',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-corporate-gold">Quick Start Guide</h3>
        <ol className="space-y-2 text-gray-200">
          <li className="flex items-start gap-2">
            <span className="font-bold text-corporate-gold">1.</span>
            Download our app and create your account
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-corporate-gold">2.</span>
            Verify your email and complete your profile
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-corporate-gold">3.</span>
            Add your preferred payment method
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-corporate-gold">4.</span>
            Save your frequent locations for faster booking
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'booking-pricing',
    icon: <CreditCard className="w-8 h-8 text-corporate-gold" />,
    title: 'Booking & Pricing',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-corporate-gold">Understanding Our Rates</h3>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
            <span><strong>Base Fare:</strong> Starting price for your journey</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
            <span><strong>Distance Rate:</strong> Per kilometer/mile charge</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
            <span><strong>Time Factor:</strong> Additional costs during peak hours</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
            <span><strong>Vehicle Class:</strong> Premium options available</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'premium-promise',
    icon: <Shield className="w-8 h-8 text-corporate-gold" />,
    title: 'Premium Support Promise',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-corporate-gold">Our Commitment to Excellence</h3>
        <div className="space-y-3 text-gray-200">
          <p className="leading-relaxed">
            Experience unparalleled service with our Premium Support Promise. We ensure:
          </p>
          <ul className="space-y-2 pl-4">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-corporate-gold"></div>
              <span>24/7 Priority Customer Support</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-corporate-gold"></div>
              <span>Dedicated Account Manager for Business Clients</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-corporate-gold"></div>
              <span>Guaranteed Response Within 5 Minutes</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-corporate-gold"></div>
              <span>Personalized Service Recovery Solutions</span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'cancellations-refunds',
    icon: <XCircle className="w-8 h-8 text-corporate-gold" />,
    title: 'Cancellations & Refunds',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-corporate-gold">Flexible Cancellation Policy</h3>
        <div className="space-y-3 text-gray-200">
          <p>Our customer-friendly cancellation policy:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
              <span>Free cancellation up to 1 hour before pickup</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
              <span>50% refund for cancellations within 1 hour</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
              <span>Full refund for service-related issues</span>
            </li>
          </ul>
          <p className="text-sm text-gray-400 mt-2">Refunds are processed within 3-5 business days</p>
        </div>
      </>
    ),
  },
  {
    id: 'account-security',
    icon: <Lock className="w-8 h-8 text-corporate-gold" />,
    title: 'Account Security',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-corporate-gold">Keeping You Safe</h3>
        <div className="space-y-3 text-gray-200">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
              <span>Two-factor authentication for added security</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
              <span>Encrypted payment information</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-corporate-gold mt-2"></div>
              <span>Regular security audits and updates</span>
            </li>
          </ul>
          <div className="mt-3 p-3 bg-corporate-gold/10 rounded-lg">
            <p className="text-sm text-corporate-gold">Enable two-factor authentication in your account settings for maximum security</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'troubleshooting',
    icon: <BookOpen className="w-8 h-8 text-corporate-gold" />,
    title: 'Troubleshooting Guide',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2 text-corporate-gold">Common Solutions</h3>
        <div className="space-y-4 text-gray-200">
          <div className="p-3 bg-black/40 rounded-lg">
            <h4 className="font-medium text-corporate-gold mb-2">App Issues</h4>
            <ul className="space-y-1 text-sm">
              <li>• Clear app cache and restart</li>
              <li>• Check internet connection</li>
              <li>• Update to latest version</li>
            </ul>
          </div>
          <div className="p-3 bg-black/40 rounded-lg">
            <h4 className="font-medium text-corporate-gold mb-2">Payment Problems</h4>
            <ul className="space-y-1 text-sm">
              <li>• Verify card details</li>
              <li>• Check available balance</li>
              <li>• Try alternative payment method</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

const faqs = [
  {
    q: 'How do I reset my password?',
    a: 'Go to Account Settings > Security and follow the password reset instructions.',
  },
  {
    q: 'How are fares calculated?',
    a: 'Fares are based on distance, time, and demand. You’ll see a full breakdown before booking.',
  },
  {
    q: 'How do I contact support?',
    a: 'Use the Contact & Live Chat section below for instant help or email support.',
  },
  {
    q: 'Can I book for someone else?',
    a: 'Yes, you can book for a guest and enter their details during the booking process.',
  },
];

export default function Help() {
  return (
    <main className="relative min-h-[70vh] bg-black text-white overflow-hidden">
      <Seo
        title="Help & Support"
        description="Find answers about bookings, cancellations, payments, and chauffeur service — or contact our support team directly."
        path="/help"
      />
      {/* SVG Animated Background */}
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="url(#help-gradient)"
            stroke="#FFD36A"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="help-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#FFD36A" stopOpacity="0.12" />
              <stop offset="1" stopColor="#000" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    

  <div className="relative z-10 container py-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="mb-16 text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-corporate-gold to-yellow-200 bg-clip-text text-transparent">
                How can we assist you today?
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Your premium journey deserves premium support. Find instant answers or connect with our 24/7 concierge team.
          </motion.p>

          {/* Quick Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="px-8 py-4 bg-corporate-gold hover:bg-corporate-gold/90 text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Start Live Chat
            </button>
            <button className="px-8 py-4 border-2 border-corporate-gold/50 hover:border-corporate-gold text-corporate-gold font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" />
              Call Support
            </button>
          </motion.div>

          {/* Help Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { icon: <User className="w-6 h-6" />, text: "Account Help" },
              { icon: <CreditCard className="w-6 h-6" />, text: "Booking Support" },
              { icon: <Shield className="w-6 h-6" />, text: "Safety & Security" },
              { icon: <BookOpen className="w-6 h-6" />, text: "Service Guide" }
            ].map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-black/40 border border-corporate-gold/20 hover:border-corporate-gold/50 transition-colors group"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-corporate-gold group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        {/* Sectioned Help Content */}
        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          {sections.map((s, i) => (
            <motion.section
              id={s.id}
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-xl p-10 flex flex-col gap-3 w-full"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="flex items-center justify-center rounded-full bg-corporate-gold/10 p-2 mr-1">{s.icon}</span>
                <h2 className="text-2xl font-extrabold text-corporate-gold drop-shadow-sm tracking-tight">{s.title}</h2>
              </div>
              <div className="text-gray-200 text-base leading-relaxed pl-2">{s.content}</div>
            </motion.section>
          ))}

          {/* FAQ Section */}
          <motion.section id="faq" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-xl p-10 w-full">
            <div className="flex items-center gap-4 mb-6">
              <HelpCircle className="w-8 h-8 text-corporate-gold" />
              <h2 className="text-2xl font-bold text-corporate-gold drop-shadow-sm">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-gray-800/50">
              {faqs.map((f, idx) => (
                <details key={idx} className="py-4 group cursor-pointer transition-all">
                  <summary className="font-semibold text-lg text-white group-open:text-corporate-gold transition-colors flex items-center justify-between">
                    {f.q}
                    <span className="ml-2 text-corporate-gold transform group-open:rotate-90 transition-transform">→</span>
                  </summary>
                  <div className="text-gray-300 mt-3 pl-4 pr-8">{f.a}</div>
                </details>
              ))}
            </div>
          </motion.section>

          {/* Video Tutorials Section */}
          <motion.section id="videos" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-black/80 border border-corporate-gold/30 shadow-xl p-10 w-full">
            <div className="flex items-center gap-4 mb-6">
              <Video className="w-8 h-8 text-corporate-gold" />
              <h2 className="text-2xl font-bold text-corporate-gold drop-shadow-sm">Video Tutorials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden bg-black/60 border border-corporate-gold/20 flex flex-col items-center p-6 group hover:border-corporate-gold transition-colors cursor-pointer">
                <div className="w-full aspect-video bg-black/40 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-12 h-12 text-corporate-gold animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-corporate-gold group-hover:text-white transition-colors">How to Book a Ride</h3>
                <p className="text-sm text-gray-400 mt-2 text-center">Learn how to book and customize your ride in minutes</p>
              </div>
              <div className="rounded-xl overflow-hidden bg-black/60 border border-corporate-gold/20 flex flex-col items-center p-6 group hover:border-corporate-gold transition-colors cursor-pointer">
                <div className="w-full aspect-video bg-black/40 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-12 h-12 text-corporate-gold animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-corporate-gold group-hover:text-white transition-colors">Managing Your Account</h3>
                <p className="text-sm text-gray-400 mt-2 text-center">Tips for managing your profile and preferences</p>
              </div>
            </div>
          </motion.section>

          {/* Contact & Live Chat Section */}
          <motion.section id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-gradient-to-br from-black/90 to-corporate-gold/10 border border-corporate-gold/30 shadow-xl p-10 w-full">
            <div className="flex items-center gap-4 mb-6">
              <MessageCircle className="w-8 h-8 text-corporate-gold" />
              <h2 className="text-2xl font-bold text-corporate-gold drop-shadow-sm">24/7 Premium Support</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-corporate-gold">Instant Support Options</h3>
                <div className="flex flex-col gap-4">
                  <a href="mailto:info@corporatewheels.co.uk" className="flex items-center gap-3 bg-black/60 border border-corporate-gold/20 rounded-lg px-6 py-4 text-lg font-semibold text-corporate-gold hover:bg-corporate-gold/10 transition-colors">
                    <PhoneCall className="w-6 h-6" /> Priority Email Support
                  </a>
                  <button className="flex items-center gap-3 bg-corporate-gold hover:bg-corporate-gold/90 text-black rounded-lg px-6 py-4 text-lg font-semibold transition-colors">
                    <MessageCircle className="w-6 h-6" /> Start Live Chat
                  </button>
                </div>
                <p className="text-gray-300 text-sm">Our support team typically responds within 5 minutes</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-corporate-gold">Support Hours</h3>
                <div className="space-y-3 text-gray-200">
                  <div className="flex justify-between items-center">
                    <span>Live Chat Support:</span>
                    <span className="text-corporate-gold">24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Phone Support:</span>
                    <span className="text-corporate-gold">6 AM - 12 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Email Response Time:</span>
                    <span className="text-corporate-gold">&lt; 2 hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-corporate-gold/10 rounded-lg border border-corporate-gold/20">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-corporate-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-corporate-gold mb-1">Premium Support Promise</h4>
                  <p className="text-gray-300 text-sm">Our dedicated team ensures your complete satisfaction with every interaction. If you're not satisfied with our support, we'll make it right.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Immediate Help CTA */}
          <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl bg-gradient-to-r from-corporate-gold/20 to-black/90 border border-corporate-gold/30 shadow-xl p-10 flex flex-col items-center gap-6 mt-8 w-full">
            <div className="flex flex-col items-center text-center">
              <ArrowRight className="w-8 h-8 text-corporate-gold mb-2" />
              <h3 className="text-2xl font-bold text-corporate-gold">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mt-2">Our premium support team is ready to help you 24/7</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <Link to="/contact" className="flex-1 px-6 py-4 rounded-lg bg-corporate-gold text-black font-semibold text-lg shadow-lg hover:bg-yellow-400 transition-colors text-center">
                Contact Us
              </Link>
              <a href="tel:+447351111355" className="flex-1 px-6 py-4 rounded-lg border-2 border-corporate-gold text-corporate-gold font-semibold text-lg hover:bg-corporate-gold/10 transition-colors text-center">
                Call Now
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
