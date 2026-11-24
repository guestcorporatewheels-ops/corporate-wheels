import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";

export interface ServiceFeature {
  label: string;
  text: string;
}

interface ServiceSectionProps {
  id: string;
  /** 1-based position, shown as a decorative numeral. */
  index: number;
  tagline: string;
  heading: string;
  /** Writer's paragraph, rendered verbatim as the subtitle. */
  paragraph: string;
  features: readonly ServiceFeature[];
  /** One decorative icon per feature. */
  icons: LucideIcon[];
  image: string;
  imageAlt: string;
  /** "split" = image beside copy; "band" = full-bleed cinematic background. */
  variant?: "split" | "band";
  reverse?: boolean;
}

const pad = (n: number) => String(n).padStart(2, "0");

function FeatureList({
  features,
  icons,
  layout,
}: {
  features: readonly ServiceFeature[];
  icons: LucideIcon[];
  layout: "stack" | "row";
}) {
  return (
    <div className={layout === "row" ? "grid gap-5 md:grid-cols-3" : "space-y-4"}>
      {features.map((f, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative flex gap-4 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-corporate-gold/50 hover:shadow-[0_20px_45px_-25px_rgba(230,167,0,0.6)] ${
              layout === "row" ? "flex-col" : "items-start"
            }`}
          >
            <span
              aria-hidden
              className="absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-corporate-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
            />
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-corporate-gold/35 bg-corporate-gold/10 transition-transform duration-300 group-hover:scale-110">
              {Icon && <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />}
            </span>
            <div>
              <h3 className="font-heading text-base md:text-lg text-neutral-900 dark:text-white">
                {f.label}
              </h3>
              <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/** One service block: 3-part heading (tagline, title, writer's paragraph) + feature cards. */
export default function ServiceSection({
  id,
  index,
  tagline,
  heading,
  paragraph,
  features,
  icons,
  image,
  imageAlt,
  variant = "split",
  reverse = false,
}: ServiceSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  if (variant === "band") {
    return (
      <section ref={ref} id={id} className="relative isolate overflow-hidden py-16 md:py-24 scroll-mt-24">
        <div className="absolute inset-0 -z-10">
          <motion.img
            src={image}
            alt=""
            aria-hidden
            loading="lazy"
            style={{ y: parallax }}
            className="absolute inset-0 -top-[10%] h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_35%,rgba(230,167,0,0.14),transparent_70%)]" />
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-6 select-none font-heading text-[7rem] md:text-[10rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(230,167,0,0.25)]"
        >
          {pad(index)}
        </span>
        <div className="container">
          <SectionHeading tagline={tagline} title={heading} subtitle={paragraph} className="!mb-10 max-w-3xl" />
          <FeatureList features={features} icons={icons} layout="row" />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id={id} className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant={reverse ? "warm" : "gold"} />
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`relative mx-auto w-full max-w-md lg:max-w-none ${reverse ? "lg:order-2" : ""}`}
        >
          <div
            aria-hidden
            className={`absolute top-6 bottom-[-12px] w-full rounded-[2rem] border border-corporate-gold/40 ${
              reverse ? "-left-3" : "left-3"
            }`}
          />
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-25px_rgba(0,0,0,0.5)]">
            <motion.img
              src={image}
              alt={imageAlt}
              loading="lazy"
              style={{ y: parallax, scale: 1.12 }}
              className="aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/4.4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <span
              aria-hidden
              className="absolute bottom-4 left-6 select-none font-heading text-7xl md:text-8xl leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(244,196,48,0.85)]"
            >
              {pad(index)}
            </span>
          </div>
        </motion.div>

        {/* Copy */}
        <div className={reverse ? "lg:order-1" : ""}>
          <SectionHeading align="left" tagline={tagline} title={heading} subtitle={paragraph} className="!mb-8" />
          <FeatureList features={features} icons={icons} layout="stack" />
        </div>
      </div>
    </section>
  );
}
