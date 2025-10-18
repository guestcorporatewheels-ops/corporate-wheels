import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <main className="relative bg-background text-foreground min-h-screen overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute -top-28 -left-20 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(120deg,#F4C430 0%,#E6A700 25%,#FF6B35 60%,#E53E3E 100%)",
          }}
        />
        <div className="absolute -bottom-36 -right-28 h-[40rem] w-[40rem] rounded-full opacity-12 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(60deg,#E53E3E 0%,#FF6B35 40%,#E6A700 70%,#F4C430 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          className="absolute left-8 top-24 opacity-40"
          initial={{ y: -10, rotate: 0 }}
          animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#E6A700" />
              <stop offset="1" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="18" fill="url(#g1)" />
        </motion.svg>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for any inquiries, support, or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Email</label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Message</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button variant="glow" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-corporate-gold mb-2">Office</h3>
                    <p className="text-muted-foreground">
                      123 Business Avenue
                      <br />
                      Suite 456
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-corporate-gold mb-2">Contact</h3>
                    <p className="text-muted-foreground">
                      Phone: +1 (555) 123-4567
                      <br />
                      Email: contact@corporate-wheels.com
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-corporate-gold mb-2">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Emergency Support</h2>
                <p className="text-muted-foreground mb-4">
                  For urgent matters related to ongoing bookings, please use our 24/7 support line:
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="lg">
                    +1 (800) 123-4567
                  </Button>
                  <Button variant="glow" size="lg">
                    Live Chat
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}