import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <main className="relative bg-background text-foreground min-h-screen overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-28 -left-20 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(120deg,#F4C430 0%,#E6A700 25%,#FF6B35 60%,#E53E3E 100%)",
          }}
        />
        <div
          className="absolute -bottom-36 -right-28 h-[40rem] w-[40rem] rounded-full opacity-12 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(60deg,#E53E3E 0%,#FF6B35 40%,#E6A700 70%,#F4C430 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E6A700] animate-pulse" />
              <span className="text-sm text-white/80">
                Last Updated: January 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading text-white leading-tight mb-6">
              <span className="text-gradient-gold">Privacy Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We value your privacy and are committed to protecting your
              personal information. Learn how we collect, use, and safeguard
              your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Policy Content */}
              <div className="relative group">
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8">
                  {/* Information Collection Section */}
                  <div>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent mb-4">
                      Information We Collect
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground">
                        We collect information that you provide directly to us
                        when you:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                        <li>Create an account or book our services</li>
                        <li>Contact us for support or inquiries</li>
                        <li>Subscribe to our newsletters</li>
                        <li>Participate in surveys or promotions</li>
                      </ul>
                    </div>
                  </div>

                  {/* Usage Section */}
                  <div>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent mb-4">
                      How We Use Your Information
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground">
                        We use the collected information to:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                        <li>Process and manage your bookings</li>
                        <li>Provide customer support</li>
                        <li>Send service updates and promotional materials</li>
                        <li>Improve our services and user experience</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </div>
                  </div>

                  {/* Data Protection Section */}
                  <div>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent mb-4">
                      Data Protection
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground">
                        We implement appropriate technical and organizational
                        measures to ensure a level of security appropriate to
                        the risk, including:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                        <li>Encryption of personal data during transmission</li>
                        <li>Regular security assessments and updates</li>
                        <li>Employee training on data protection</li>
                        <li>Access controls and authentication measures</li>
                      </ul>
                    </div>
                  </div>

                  {/* Your Rights Section */}
                  <div>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent mb-4">
                      Your Rights
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground">
                        You have the right to:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                        <li>Access your personal data</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Withdraw consent for data processing</li>
                        <li>Object to data processing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Support Button */}
              <div className="text-center mt-12">
                <Button variant="glow" size="lg">
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
