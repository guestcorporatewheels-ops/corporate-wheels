import React from "react";
import HelpHero from "@/components/help/HelpHero";
import HelpSection from "@/components/help/HelpSection";
import SvgBackground from "@/components/help/SvgBackground";

const Help: React.FC = () => {
  return (
    <main className="relative min-h-[70vh] overflow-hidden">
      <SvgBackground />
      <div className="relative z-10 container py-16">
        <HelpHero />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <HelpSection
            id="getting-started"
            title="Getting Started"
            summary="How to create an account, book your first ride and understand core features."
          >
            <p>
              Create an account, verify your email, and use the booking widget
              to request a ride. We recommend saving frequent addresses for
              faster bookings.
            </p>
          </HelpSection>

          <HelpSection
            id="booking-pricing"
            title="Booking & Pricing"
            summary="How fares are calculated, pricing transparency, and corporate
            bookings."
          >
            <p>
              Understand fare breakdowns, surge explanations, and how to apply
              promo codes or corporate rates.
            </p>
          </HelpSection>

          <HelpSection
            id="cancellations-refunds"
            title="Cancellations & Refunds"
            summary="Rules for canceling bookings and how refunds are processed."
          >
            <p>
              Learn the cancellation windows, how to request refunds, and the
              expected timeline for processing.
            </p>
          </HelpSection>

          <HelpSection
            id="account-payments"
            title="Account & Payments"
            summary="Manage payment methods, receipts, and account settings."
          >
            <p>
              Add and manage payment methods, download receipts, and secure your
              account with two-factor authentication.
            </p>
          </HelpSection>

          <HelpSection
            id="safety-policies"
            title="Safety & Policies"
            summary="Our safety commitments and privacy policies."
          >
            <p>
              Read about our driver screening, ride safety features, and how we
              protect your personal data.
            </p>
          </HelpSection>

          <HelpSection
            id="faqs"
            title="FAQs"
            summary="Answers to common questions."
          >
            <p>
              Quick answers covering common scenarios like lost items, billing
              disputes and accessibility options.
            </p>
          </HelpSection>

          <HelpSection
            id="contact-support"
            title="Contact Support"
            summary="How to reach us for help, including expected response times."
          >
            <p>
              Contact via email, phone, or chat. For urgent issues, use the live
              chat option for faster support.
            </p>
          </HelpSection>

          <HelpSection
            id="live-chat"
            title="Live Chat"
            summary="Real-time support from our agents."
          >
            <p>
              Live chat is available for account and booking issues. Agents can
              assist with immediate problems and escalate when needed.
            </p>
          </HelpSection>

          <HelpSection
            id="video-tutorials"
            title="Video Tutorials"
            summary="Short videos demonstrating common tasks and walkthroughs."
          >
            <p>
              Watch step-by-step videos for booking, account setup, and tips to
              get the best experience.
            </p>
          </HelpSection>

          <HelpSection
            id="troubleshooting"
            title="Troubleshooting Guides"
            summary="Guides to resolve common issues quickly."
          >
            <p>
              Follow simple diagnostic steps for connectivity, payment failures,
              or app crashes before contacting support.
            </p>
          </HelpSection>
        </div>
      </div>
    </main>
  );
};

export default Help;
