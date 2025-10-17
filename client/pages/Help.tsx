import React from "react";
import HelpHero from "@/components/help/HelpHero";
import HelpSection from "@/components/help/HelpSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SvgBackground from "@/components/help/SvgBackground";

const Help: React.FC = () => {
  return (
    <main className="relative min-h-[70vh] overflow-hidden">
      <SvgBackground />
      <div className="relative z-10 container py-16">
        <HelpHero />

        {/* Layout: Sticky Table of Contents + Full-width Sections */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="hidden lg:block">
            <div className="sticky top-24">
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="hover:underline" href="#getting-started">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#faqs">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#contact-support">
                    Contact Support
                  </a>
                  <ul className="mt-1 ml-4 space-y-1 text-muted-foreground">
                    <li>
                      <a className="hover:underline" href="#support-live-chat">
                        Live Chat
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#support-email">
                        Email
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#support-phone">
                        Phone
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="hover:underline" href="#booking-pricing">
                    Booking & Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#cancellations-refunds">
                    Cancellations & Refunds
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#account-payments">
                    Account & Payments
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#safety-policies">
                    Safety & Policies
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#troubleshooting">
                    Troubleshooting Guides
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Content */}
          <div className="space-y-12">
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
              <ul className="mt-3 list-disc pl-5">
                <li>Sign up and verify your email</li>
                <li>Complete your profile and add a payment method</li>
                <li>Use the home page booking widget to schedule a ride</li>
              </ul>
              <div className="mt-4 text-sm">
                <a href="#faqs" className="underline">
                  Read beginner FAQs
                </a>
              </div>
            </HelpSection>

            {/* FAQs as section 2 */}
            <HelpSection
              id="faqs"
              title="FAQs"
              summary="Answers to common questions."
            >
              <Accordion type="single" collapsible className="mt-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How do I reschedule my booking?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reschedule from the Trips page up to 2 hours before
                    pickup. After that window, please contact support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What if my chauffeur is late?
                  </AccordionTrigger>
                  <AccordionContent>
                    We monitor delays in real time. If your chauffeur is more
                    than 10 minutes late, you’ll receive updates and
                    compensation per our policy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How are fares calculated?</AccordionTrigger>
                  <AccordionContent>
                    Fares depend on distance, time, vehicle class and demand.
                    You’ll always see an upfront estimate before confirming.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    I left something in the car.
                  </AccordionTrigger>
                  <AccordionContent>
                    Open the trip details and select “Lost item”. We’ll notify
                    your chauffeur and coordinate a return.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </HelpSection>

            {/* Contact Support group as section 3 */}
            <HelpSection
              id="contact-support"
              title="Contact Support"
              summary="How to reach us for help, including expected response times."
            >
              <p>
                Choose the best channel below. For urgent issues, Live Chat is
                the fastest way to reach us.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="#support-live-chat"
                  className="rounded-md px-3 py-2 bg-primary text-primary-foreground"
                >
                  Live Chat
                </a>
                <a
                  href="#support-email"
                  className="rounded-md px-3 py-2 bg-muted hover:bg-muted/80"
                >
                  Email
                </a>
                <a
                  href="#support-phone"
                  className="rounded-md px-3 py-2 bg-muted hover:bg-muted/80"
                >
                  Phone
                </a>
              </div>
            </HelpSection>

            <HelpSection
              id="support-live-chat"
              title="Live Chat"
              summary="Real-time support (typical reply under 2 minutes)."
            >
              <div className="mt-2 rounded-md border bg-gradient-to-r from-primary/10 via-amber-200/20 to-orange-200/20 p-5">
                <p>
                  Get help instantly for booking changes, payment issues, or
                  trip questions. Our team can also escalate complex cases.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact-support"
                    className="rounded-md px-4 py-2 text-sm bg-primary text-primary-foreground"
                  >
                    Start chat
                  </a>
                  <span className="text-xs text-muted-foreground">
                    Available 24/7
                  </span>
                </div>
              </div>
            </HelpSection>

            <HelpSection
              id="support-email"
              title="Email"
              summary="Best for non-urgent requests and document sharing."
            >
              <div className="mt-2 rounded-md border bg-card/70 p-5">
                <p>
                  Send us details, attachments, or feedback. We aim to respond
                  within one business day.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:support@corporatewheels.com"
                    className="rounded-md px-4 py-2 text-sm bg-muted"
                  >
                    Send email
                  </a>
                  <span className="text-xs text-muted-foreground">
                    support@corporatewheels.com
                  </span>
                </div>
              </div>
            </HelpSection>

            <HelpSection
              id="support-phone"
              title="Phone"
              summary="Talk to a specialist for time-sensitive issues."
            >
              <div className="mt-2 rounded-md border bg-gradient-to-r from-orange-100/40 to-red-100/40 p-5">
                <p>
                  Ideal for last-minute changes or pickup coordination. Have
                  your booking ID ready to speed things up.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+18000000000"
                    className="rounded-md px-4 py-2 text-sm bg-muted"
                  >
                    Call now
                  </a>
                  <span className="text-xs text-muted-foreground">
                    +1 (800) 000-0000
                  </span>
                </div>
              </div>
            </HelpSection>

            {/* Remaining sections */}
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
              <ul className="mt-3 list-disc pl-5">
                <li>Transparent fare estimate shown before you confirm</li>
                <li>Digital receipts emailed after every ride</li>
                <li>Corporate invoicing available for approved accounts</li>
              </ul>
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
              <ul className="mt-3 list-disc pl-5">
                <li>Free cancellation up to 30 minutes before pickup</li>
                <li>Refunds processed within 5–7 business days</li>
                <li>Service credits offered when applicable</li>
              </ul>
            </HelpSection>

            <HelpSection
              id="account-payments"
              title="Account & Payments"
              summary="Manage payment methods, receipts, and account settings."
            >
              <p>
                Add and manage payment methods, download receipts, and secure
                your account with two-factor authentication.
              </p>
              <ul className="mt-3 list-disc pl-5">
                <li>Cards, UPI and corporate billing supported</li>
                <li>Download monthly statements from your profile</li>
                <li>Enable 2FA for stronger security</li>
              </ul>
            </HelpSection>

            <HelpSection
              id="safety-policies"
              title="Safety & Policies"
              summary="Our safety commitments and privacy policies."
            >
              <p>
                Read about our driver screening, ride safety features, and how
                we protect your personal data.
              </p>
              <ul className="mt-3 list-disc pl-5">
                <li>All chauffeurs background-checked and trained</li>
                <li>Live ride tracking and SOS in-app</li>
                <li>Data encrypted in transit and at rest</li>
              </ul>
            </HelpSection>

            <HelpSection
              id="troubleshooting"
              title="Troubleshooting Guides"
              summary="Guides to resolve common issues quickly."
            >
              <p>
                Follow simple diagnostic steps for connectivity, payment
                failures, or app crashes before contacting support.
              </p>
              <ul className="mt-3 list-disc pl-5">
                <li>Check your network connection and retry</li>
                <li>Verify card details and available balance</li>
                <li>Clear cache or reinstall the app if issues persist</li>
              </ul>
            </HelpSection>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Help;
