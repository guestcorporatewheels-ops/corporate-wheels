import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import SectionHeading from "./SectionHeading";

/** Verbatim from "CW Contents/Home pageCW.docx" — Section 10. */
const reviews = [
  {
    quote:
      "\"Fantastic service for our board members commuting between London and other destinations. The chauffeurs are always early, very professional, and discreet. With a personal account manager, organising transfers and getting the invoices is hassle-free.\"",
    author: "— Ava R, Founder",
  },
  {
    quote:
      "\"I use Corporate Wheels for all of my transfers to Glasgow airport. Flight tracking helps me to be met at the arrival hall even if there were some flight delays, making my night trips much easier.\"",
    author: "— Daniel K, CTO",
  },
  {
    quote:
      "\"Our company used your premium minivan for our corporate tour through the UK, and everything went great! The car was perfect, had Wi-Fi, and gave us a comfy place to work during transfers. Excellent service!\"",
    author: "— Sophia L, Designer",
  },
] as const;

export default function ClientReviews() {
  return (
    <section id="client-reviews" className="relative isolate overflow-hidden py-16 md:py-20">
      <FloatingShapes />
      <div className="container relative">
        <SectionHeading tagline="Testimonials" title="What Our Clients Say" subtitle="Client Reviews" className="mb-12" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-white/[0.03] p-7 sm:p-8 backdrop-blur-xl shadow-[0_25px_60px_-35px_rgba(0,0,0,0.5)] transition-colors hover:border-corporate-gold/50 ${
                i === 2 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(70%_60%_at_100%_0%,rgba(230,167,0,0.12),transparent_70%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <Quote aria-hidden className="absolute -right-3 -top-3 size-28 rotate-180 text-corporate-gold/10" strokeWidth={1} />
              <div className="relative flex items-center gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-corporate-gold text-corporate-gold" />
                ))}
              </div>
              <blockquote className="relative mt-5 flex-1 text-base md:text-lg leading-relaxed text-neutral-800 dark:text-white/85">
                {r.quote}
              </blockquote>
              <figcaption className="relative mt-7 flex items-center gap-3 border-t border-black/10 dark:border-white/10 pt-5">
                <span aria-hidden className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-corporate-gold to-[#B8860B] font-heading text-black">
                  {r.author.replace("— ", "").charAt(0)}
                </span>
                <span className="font-heading text-neutral-900 dark:text-white">{r.author}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
