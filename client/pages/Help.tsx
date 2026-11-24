import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Search, X } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import HelpBody, { categoryIds } from "@/components/help-portal/HelpBody";
import { helpContent, helpLabels } from "@/components/help-portal/content";

const { title, intro, categories } = helpContent;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((c) =>
    c.items.map((it) => ({
      "@type": "Question",
      name: it.question.replace(/^\d+\.\s*/, ""),
      acceptedAnswer: { "@type": "Answer", text: it.answer.join(" ") },
    })),
  ),
};

/** /help — built from "CW Contents/Help Portal & Frequently Asked QuestionsCW.docx". */
export default function Help() {
  const [query, setQuery] = useState("");

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-x-clip bg-background text-foreground">
        <Seo title={title} description={intro[0]} path="/help" jsonLd={faqJsonLd} />

        <PageHero
          tagline={helpLabels.heroTagline}
          title={title}
          goldSuffix="Frequently Asked Questions"
          subtitle={
            <>
              {intro.map((p, i) => (
                <span key={i} className={`block ${i ? "mt-3" : ""}`}>
                  {p}
                </span>
              ))}
            </>
          }
          breadcrumb={title}
          image="/images/help/help-hero.jpg"
          nextId="help-faqs"
        >
          <div className="max-w-xl mx-auto lg:mx-0">
            <label htmlFor="help-search" className="sr-only">
              {helpLabels.searchPlaceholder}
            </label>
            <div className="group relative">
              <Search aria-hidden className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-corporate-gold" />
              <input
                id="help-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") document.getElementById("help-faqs")?.scrollIntoView({ behavior: "smooth" });
                }}
                placeholder={helpLabels.searchPlaceholder}
                className="h-14 w-full rounded-full border border-black/10 dark:border-white/15 bg-white/85 dark:bg-black/50 pl-14 pr-12 text-base text-neutral-900 dark:text-white placeholder:text-muted-foreground shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)] backdrop-blur-xl outline-none transition focus:border-corporate-gold/70 focus:ring-4 focus:ring-corporate-gold/15"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:text-corporate-gold"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
            <nav aria-label="Jump to a help category" className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2">
              {categories.map((c, i) => (
                <a
                  key={c.heading}
                  href={`#${categoryIds[i]}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setQuery("");
                    requestAnimationFrame(() =>
                      document.getElementById(categoryIds[i])?.scrollIntoView({ behavior: "smooth", block: "start" }),
                    );
                  }}
                  className="rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.06] px-3.5 py-1.5 text-xs sm:text-sm text-neutral-800 dark:text-white/85 backdrop-blur-md transition-colors hover:border-corporate-gold/60 hover:text-corporate-gold"
                >
                  {c.heading}
                </a>
              ))}
            </nav>
          </div>
        </PageHero>

        <HelpBody query={query} />
        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
