import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, FileText, SlidersHorizontal } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    desc: "SAML SSO, role-based access, and secure invoicing for large organisations.",
  },
  {
    icon: FileText,
    title: "Custom billing & reporting",
    desc: "Detailed invoicing, cost centers, and exportable spend reports.",
  },
  {
    icon: SlidersHorizontal,
    title: "Policy controls",
    desc: "Set ride approval workflows, spend limits and preferred vehicle classes.",
  },
];

export default function CorporateAccounts() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-corporate-gold/5 to-transparent" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-corporate-gold animate-pulse" />
              <span className="text-sm text-white/80">Corporate Accounts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Business travel, handled
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Set up a corporate account with a dedicated account manager,
              consolidated invoicing, and priority booking across our fleet
              for your whole team.
            </p>
            <Link
              to="/business"
              className="inline-flex items-center bg-gradient-to-r btn-gradient text-black px-8 py-3 rounded-md font-semibold shadow-lg transition-all hover:shadow-corporate-gold/40"
            >
              Explore corporate accounts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          <div className="grid gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-corporate-gold/10 border border-corporate-gold/20 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-corporate-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
