import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";

import ChauffeurBookingWidget from "@/components/booking/BookingWidget";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PHONE_DISPLAY = "+44 (0)7351 111 355";
const PHONE_LINK = "tel:+447351111355";
const EMAIL = "info@corporatewheels.co.uk";

type ThankYouKind = "contact" | "review" | null;

function openEmail(subject: string, body: string) {
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function SocialConnect() {
  const [selectedRating, setSelectedRating] = useState(5);
  const [thankYouKind, setThankYouKind] = useState<ThankYouKind>(null);

  const submitReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("reviewName") ?? "").trim();
    const review = String(data.get("review") ?? "").trim();

    openEmail(
      `Customer review: ${selectedRating} stars`,
      `Name: ${name || "Not supplied"}\nRating: ${selectedRating}/5\n\n${review}`,
    );
    event.currentTarget.reset();
    setSelectedRating(5);
    setThankYouKind("review");
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    openEmail(
      `Social Connect enquiry from ${name}`,
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not supplied"}\n\n${message}`,
    );
    event.currentTarget.reset();
    setThankYouKind("contact");
  };

  return (
    <main className="overflow-hidden bg-[#021912] text-white">
      <Seo
        title="Social Connect | Book Corporate Wheels"
        description="Book a Corporate Wheels chauffeur, save our direct contact number, share your experience, or contact our team."
        path="/Socialconnect"
      />

      <section className="relative isolate min-h-[88vh] border-b border-[#d7aa45]/20 pt-28">
        <img
          src="/images/hero-chauffeur.png"
          alt="Corporate Wheels chauffeur beside a luxury vehicle"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,25,18,0.98)_0%,rgba(2,25,18,0.9)_44%,rgba(2,25,18,0.2)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#021912] via-transparent to-black/30" />

        <div className="container">
          <div className="flex flex-col gap-4 border-b border-white/15 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
            <a
              href="https://corporatewheels.co.uk"
              className="font-medium text-white/75 transition-colors hover:text-[#f1c867]"
            >
              corporatewheels.co.uk
            </a>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 font-semibold text-[#f1c867]"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href="/socialconnect/corporate-wheels.vcf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-[#f1c867]/45 px-4 py-2 font-semibold text-white transition-colors hover:bg-[#f1c867] hover:text-[#021912]"
              >
                <Download className="size-4" />
                Save contact
              </a>
            </div>
          </div>

          <div className="flex min-h-[70vh] max-w-3xl flex-col justify-center py-20">
            <img
              src="/logo.png"
              alt="Corporate Wheels"
              className="mb-8 h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
            <h1 className="max-w-2xl text-balance font-heading text-5xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Your journey,
              <span className="block text-[#f1c867]">handled.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#d8e2dc] sm:text-xl">
              Premium chauffeur travel for airport transfers, corporate
              journeys, special events, and private hire across the UK.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-none bg-[#d7aa45] px-8 text-base font-bold text-[#021912] hover:bg-[#f1c867]"
              >
                <a href="#booking">
                  Book a journey
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-none border-white/35 bg-black/15 px-8 text-base text-white hover:border-[#f1c867] hover:bg-[#f1c867]/10"
              >
                <a href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="relative scroll-mt-24 border-b border-[#d7aa45]/15 py-24 sm:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(215,170,69,0.12),transparent_35%)]" />
        <div className="container relative">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="max-w-xl font-heading text-4xl font-bold tracking-[-0.025em] sm:text-5xl">
              Book your chauffeur.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#b7c8bf] lg:justify-self-end">
              Add your pickup, destination, date, and time to see available
              vehicles. Choose hourly hire when you need a chauffeur to remain
              with you.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="[&_.bg-card\\/90]:bg-[#061f17] [&_.border-border]:border-[#d7aa45]/25">
              <ChauffeurBookingWidget />
            </div>
            <div className="relative hidden min-h-[34rem] overflow-hidden border border-[#d7aa45]/25 lg:block">
              <img
                src="/images/hero-chauffeur.png"
                alt="Luxury chauffeur vehicle ready for a booking"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021912]/75 via-transparent to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-8 text-sm font-semibold leading-relaxed text-white">
                Professional chauffeur travel, planned around your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7aa45]/15 bg-[#f0eadf] py-24 text-[#08241b] sm:py-32">
        <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <Quote className="size-12 text-[#a77719]" strokeWidth={1.5} />
            <h2 className="mt-8 font-heading text-4xl font-bold tracking-[-0.025em] sm:text-5xl">
              Share your experience.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#42554d]">
              Travelled with Corporate Wheels? Tell us what stood out. Your
              feedback helps our team maintain the punctual, professional
              service every journey deserves.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#42554d]">
              <ShieldCheck className="size-5 text-[#a77719]" />
              Your review is sent directly to our team.
            </div>
          </div>

          <form
            onSubmit={submitReview}
            className="border border-[#163b2e]/20 bg-white p-6 shadow-[0_24px_60px_rgba(8,36,27,0.12)] sm:p-10"
          >
            <fieldset>
              <legend className="text-sm font-bold uppercase tracking-[0.16em] text-[#42554d]">
                Your rating
              </legend>
              <div className="mt-4 flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setSelectedRating(rating)}
                    className="rounded-sm p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a77719]"
                    aria-label={`${rating} star${rating === 1 ? "" : "s"}`}
                    aria-pressed={rating <= selectedRating}
                  >
                    <Star
                      className={
                        rating <= selectedRating
                          ? "size-8 fill-[#c9942f] text-[#c9942f]"
                          : "size-8 text-[#9da9a3]"
                      }
                    />
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-7 grid gap-5">
              <Input
                name="reviewName"
                placeholder="Your name (optional)"
                className="h-12 rounded-none border-[#163b2e]/25 bg-transparent text-[#08241b] placeholder:text-[#65756d]"
              />
              <Textarea
                name="review"
                required
                placeholder="Tell us about your journey"
                className="min-h-36 rounded-none border-[#163b2e]/25 bg-transparent text-[#08241b] placeholder:text-[#65756d]"
              />
              <Button
                type="submit"
                className="h-14 rounded-none bg-[#08241b] text-white hover:bg-[#153b2e]"
              >
                Send your review
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="relative border-b border-[#d7aa45]/15 py-24 sm:py-32">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-[#d7aa45]/35 lg:order-2">
            <img
              src="/images/hero-chauffeur.png"
              alt="Corporate Wheels luxury chauffeur service"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021912]/70 via-transparent to-transparent" />
          </div>
          <div className="max-w-xl lg:order-1 lg:pr-8">
            <h2 className="font-heading text-4xl font-bold tracking-[-0.025em] text-[#f1c867] sm:text-5xl">
              Travel with confidence.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#c5d3cb]">
              Corporate Wheels provides professional chauffeur services for
              airport transfers, corporate travel, special events, and private
              journeys. Our team combines attentive service with a carefully
              selected luxury fleet. Every booking is planned around comfort,
              punctuality, and clear communication. From the first enquiry to
              the final drop-off, we are here to make travel feel effortless.
            </p>
            <Button
              asChild
              variant="link"
              className="mt-7 h-auto p-0 text-base font-bold text-[#f1c867]"
            >
              <Link to="/about">
                Learn more about Corporate Wheels
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="grid gap-14 border border-[#d7aa45]/35 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
          <div className="order-2">
            <img
              src="/logo.png"
              alt=""
              className="mb-8 size-20 object-contain"
            />
            <h2 className="font-heading text-4xl font-bold tracking-[-0.025em] sm:text-5xl">
              Contact us.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#b7c8bf]">
              Speak with our team about a booking, a corporate account, or a
              journey that needs personal planning.
            </p>
            <div className="mt-10 space-y-6">
              <a
                href={PHONE_LINK}
                className="flex items-start gap-4 text-white transition-colors hover:text-[#f1c867]"
              >
                <Phone className="mt-1 size-5 shrink-0 text-[#d7aa45]" />
                <span>
                  <span className="block text-sm text-[#8fa49a]">Direct line</span>
                  <span className="font-semibold">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-4 text-white transition-colors hover:text-[#f1c867]"
              >
                <Mail className="mt-1 size-5 shrink-0 text-[#d7aa45]" />
                <span>
                  <span className="block text-sm text-[#8fa49a]">Email</span>
                  <span className="font-semibold">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-start gap-4 text-white">
                <MapPin className="mt-1 size-5 shrink-0 text-[#d7aa45]" />
                <span>
                  <span className="block text-sm text-[#8fa49a]">
                    Registered office
                  </span>
                  <span className="font-semibold">
                    42 Watling Street, Radlett, Hertfordshire, WD7 7NN
                  </span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={submitContact}
            className="order-1 bg-[#061f17] p-6 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                name="name"
                required
                placeholder="Your name"
                className="h-12 rounded-none border-white/15 bg-white/[0.03] text-white placeholder:text-white/45"
              />
              <Input
                name="email"
                required
                type="email"
                placeholder="Email address"
                className="h-12 rounded-none border-white/15 bg-white/[0.03] text-white placeholder:text-white/45"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="h-12 rounded-none border-white/15 bg-white/[0.03] text-white placeholder:text-white/45 sm:col-span-2"
              />
              <Textarea
                name="message"
                required
                placeholder="How can we help?"
                className="min-h-40 rounded-none border-white/15 bg-white/[0.03] text-white placeholder:text-white/45 sm:col-span-2"
              />
              <Button
                type="submit"
                className="h-14 rounded-none bg-[#d7aa45] font-bold text-[#021912] hover:bg-[#f1c867] sm:col-span-2"
              >
                Send enquiry
              </Button>
            </div>
          </form>
          </div>
        </div>
      </section>

      <Dialog
        open={thankYouKind !== null}
        onOpenChange={(open) => {
          if (!open) setThankYouKind(null);
        }}
      >
        <DialogContent className="max-w-md rounded-none border-[#d7aa45]/45 bg-[#062219] p-8 text-center text-white">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-[#d7aa45]/40 bg-[#d7aa45]/10">
            <CheckCircle2 className="size-8 text-[#f1c867]" />
          </div>
          <DialogHeader className="text-center">
            <DialogTitle className="mt-3 text-3xl font-bold text-[#f1c867]">
              Thank you
            </DialogTitle>
            <DialogDescription className="mt-3 text-base leading-relaxed text-[#c5d3cb]">
              {thankYouKind === "review"
                ? "Thank you for sharing your experience. Your email app will help you send the review to our team."
                : "Thank you for contacting Corporate Wheels. Your email app will help you send the enquiry to our team."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 sm:justify-center">
            <Button
              type="button"
              onClick={() => setThankYouKind(null)}
              className="h-12 rounded-none bg-[#d7aa45] px-10 font-bold text-[#021912] hover:bg-[#f1c867]"
            >
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
