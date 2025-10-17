import React from "react";
import { cn } from "@/lib/utils";

const Illustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn("w-40 h-40 md:w-56 md:h-56", className)}
    viewBox="0 0 120 120"
    fill="none"
    aria-hidden
  >
    <rect width="120" height="120" rx="16" fill="url(#g)" />
    <path
      d="M30 80 L50 50 L70 70 L90 40"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#E6A700" />
        <stop offset="50%" stopColor="#FF6B35" />
        <stop offset="100%" stopColor="#E53E3E" />
      </linearGradient>
    </defs>
  </svg>
);

const HelpHero: React.FC = () => {
  return (
    <section
      aria-labelledby="help-hero"
      className="rounded-lg p-8 bg-card/60 backdrop-blur-md"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 id="help-hero" className="text-3xl font-bold">
            Help Center
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Find answers, guides and resources to make booking and managing
            rides effortless. Choose a topic below or search for a specific
            article.
          </p>

          <nav
            aria-label="Help quick links"
            className="mt-4 flex flex-wrap gap-3"
          >
            <a
              href="#getting-started"
              className="rounded-md px-3 py-2 text-sm bg-primary/10 hover:bg-primary/20"
            >
              Getting Started
            </a>
            <a
              href="#booking-pricing"
              className="rounded-md px-3 py-2 text-sm bg-primary/10 hover:bg-primary/20"
            >
              Booking & Pricing
            </a>
            <a
              href="#contact-support"
              className="rounded-md px-3 py-2 text-sm bg-primary/10 hover:bg-primary/20"
            >
              Contact Support
            </a>
          </nav>
        </div>

        <div className="mt-6 lg:mt-0 lg:pl-8">
          <Illustration />
        </div>
      </div>
    </section>
  );
};

export default HelpHero;
