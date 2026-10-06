import { FormEvent, ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Download,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Route as RouteIcon,
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
const WHATSAPP_LINK = "https://wa.me/447351111355";
const EMAIL = "info@corporatewheels.co.uk";
const GOOGLE_REVIEW_LINK = "https://g.page/r/CXkLfyisI0GqEAI/review";

type ThankYouKind = "contact" | "review" | null;

const SERVICES = [
  {
    icon: Plane,
    title: "Airport transfers",
    text: "Real-time flight tracking and meet & greet at every major UK airport.",
    to: "/airport-transfer",
  },
  {
    icon: Briefcase,
    title: "Corporate travel",
    text: "Discreet, punctual chauffeurs for meetings, roadshows, and VIP guests.",
    to: "/business",
  },
  {
    icon: Clock,
    title: "Hourly hire",
    text: "A dedicated chauffeur who stays with you for as long as you need.",
    to: "/hourly-hire",
  },
  {
    icon: RouteIcon,
    title: "City to city",
    text: "Comfortable long-distance journeys in a premium, private vehicle.",
    to: "/city-to-city",
  },
];

function openEmail(subject: string, body: string) {
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function GoldDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E3A501] to-transparent" />
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E3A501]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-5 text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "h-12 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/40 focus-visible:ring-[#E3A501]";

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

  const socialLinks = [
    { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
    { label: "WhatsApp", href: WHATSAPP_LINK, icon: MessageCircle },
    { label: "Call", href: PHONE_LINK, icon: Phone },
    { label: "Website", href: "https://www.corporatewheels.co.uk", icon: Globe },
    {
      label: "Save contact",
      href: "/socialconnect/corporate-wheels.vcf",
      icon: Download,
    },
  ];

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#0A0F1C_0%,#000000_100%)] text-white">
      <Seo
        title="Social Connect | Nurali Virani, Corporate Wheels"
        description="Connect with Nurali Virani, founder of Corporate Wheels. Book a chauffeur, save our contact, leave a review, or get in touch."
        path="/Socialconnect"
      />

      {/* Founder profile */}
      <section className="relative pt-20 sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-40 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#E3A501]/10 blur-[120px] lg:left-1/4" />
        <GoldDivider />

        <div className="container relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
          <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border-2 border-[#E3A501]/70 shadow-[0_0_40px_rgba(227,165,1,0.25)]">
              <img
                src="/socialconnect/founder.jpg"
                alt="Nurali Virani, founder of Corporate Wheels"
                width={1080}
                height={1350}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-heading text-3xl font-bold sm:text-4xl">I am</p>
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-wide sm:text-5xl lg:text-6xl">
              Nurali Virani
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E3A501] sm:text-base">
              Founder of Corporate Wheels
            </p>
            <p className="mx-auto mt-6 max-w-md text-lg font-medium text-white/85 lg:mx-0">
              Professional Chauffeurs. Personalised Service.
            </p>

            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row lg:mx-0">
              <Button
                asChild
                className="h-auto flex-1 rounded-xl bg-[#E3A501] py-3.5 text-base font-bold text-black hover:bg-[#F4C430]"
              >
                <a href={PHONE_LINK}>
                  <Phone className="mr-2 size-4" />
                  Call now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto flex-1 rounded-xl border-[#E3A501]/60 bg-transparent py-3.5 text-base font-semibold text-white hover:bg-[#E3A501]/10 hover:text-white"
              >
                <a href="#booking">
                  Book a journey
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    download={label === "Save contact" ? true : undefined}
                    className="flex size-11 items-center justify-center rounded-full bg-[#E3A501]/15 text-[#E3A501] ring-1 ring-[#E3A501]/40 transition-all hover:scale-95 hover:bg-[#E3A501] hover:text-black"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* Brand story */}
      <section className="py-16 sm:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img
            src="/logo.png"
            alt="Corporate Wheels — Always on time"
            className="mx-auto w-full max-w-[18rem] object-contain drop-shadow-[0_0_60px_rgba(227,165,1,0.25)] sm:max-w-sm lg:max-w-md"
          />
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E3A501]">
              About us
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
              Premium Travel. Personal Service.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              At Corporate Wheels, we make every journey comfortable, seamless
              and stress-free. From airport transfers and corporate travel to
              private journeys and special events, our professional chauffeurs
              are here to make every mile count.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              With premium vehicles, real-time flight tracking and a service
              built around your schedule, we take care of the details so you
              can simply sit back and enjoy the journey.
            </p>
            <p className="mt-6 font-heading text-lg font-semibold text-white">
              Professional chauffeurs. Luxury vehicles.
              <br />
              A service tailored around you.
            </p>
            <Button
              asChild
              className="mt-8 h-auto w-full rounded-xl bg-[#E3A501] px-8 py-3.5 text-base font-bold text-black hover:bg-[#F4C430] sm:w-auto"
            >
              <Link to="/">
                Discover Corporate Wheels
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Our services"
            title="Luxury Chauffeur & Private Transfer Services"
          >
            Punctual, specification-rich chauffeur services for luxury journeys,
            airport transfers, and corporate events throughout the UK.
          </SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, text, to }) => (
              <Link
                key={title}
                to={to}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#E3A501]/60 hover:bg-[#E3A501]/[0.06]"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#E3A501]/15 text-[#E3A501]">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                  {text}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#E3A501]">
                  Learn more
                  <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Booking */}
      <section id="booking" className="scroll-mt-24 py-16 sm:py-24">
        <div className="container">
          <SectionHeading eyebrow="Book online" title="Book your chauffeur">
            Add your pickup, destination, date and time to see available
            vehicles. Choose hourly hire when you need a chauffeur to stay with
            you.
          </SectionHeading>
          <div className="mx-auto mt-10 max-w-4xl [&_.bg-card\/90]:bg-[#0F1525] [&_.border-border]:border-[#E3A501]/30">
            <ChauffeurBookingWidget />
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Reviews */}
      <section className="py-16 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 font-semibold text-white">
              Your journey. Your experience. Your feedback.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              From airport transfers to corporate travel, we make every journey
              comfortable, professional and seamless.
            </p>
            <p className="mt-6 font-heading text-xl italic text-[#E3A501]">
              “Share your experience with us.”
            </p>
            <Button
              asChild
              className="mt-8 h-auto w-full rounded-xl bg-[#E3A501] px-8 py-3.5 text-base font-bold text-black hover:bg-[#F4C430] sm:w-auto"
            >
              <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noreferrer">
                <Star className="mr-2 size-4 fill-black" />
                Leave a Google review
              </a>
            </Button>
            <p className="mt-5 text-sm text-[#9CA3AF]">
              Your feedback helps us continue delivering journeys that feel
              effortless.
            </p>
          </div>

          <form
            onSubmit={submitReview}
            className="rounded-2xl border border-[#E3A501]/30 bg-[#0F1525]/80 p-6 shadow-[0_0_40px_rgba(227,165,1,0.08)] sm:p-8"
          >
            <p className="font-heading text-lg font-semibold">
              Or send feedback to our team
            </p>
            <fieldset className="mt-5">
              <legend className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">
                Your rating
              </legend>
              <div className="mt-3 flex gap-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setSelectedRating(rating)}
                    className="rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A501]"
                    aria-label={`${rating} star${rating === 1 ? "" : "s"}`}
                    aria-pressed={rating <= selectedRating}
                  >
                    <Star
                      className={
                        rating <= selectedRating
                          ? "size-8 fill-[#E3A501] text-[#E3A501]"
                          : "size-8 text-white/25"
                      }
                    />
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-6 grid gap-4">
              <Input
                name="reviewName"
                placeholder="Your name (optional)"
                className={inputClass}
              />
              <Textarea
                name="review"
                required
                placeholder="Tell us about your journey"
                className={`${inputClass} h-auto min-h-32`}
              />
              <Button
                type="submit"
                variant="outline"
                className="h-12 rounded-xl border-[#E3A501]/60 bg-transparent font-semibold text-white hover:bg-[#E3A501] hover:text-black"
              >
                Send feedback
              </Button>
              <p className="flex items-center justify-center gap-2 text-xs text-[#9CA3AF]">
                <ShieldCheck className="size-4 text-[#E3A501]" />
                Sent directly to our team.
              </p>
            </div>
          </form>
        </div>
      </section>

      <GoldDivider />

      {/* Contact */}
      <section className="py-16 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E3A501]">
              Get in touch
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              Contact us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              Speak with our team about a booking, a corporate account, or a
              journey that needs personal planning.
            </p>
            <div className="mt-8 space-y-3 text-left">
              {[
                {
                  icon: Phone,
                  label: "Direct line",
                  value: PHONE_DISPLAY,
                  href: PHONE_LINK,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  icon: MapPin,
                  label: "Registered office",
                  value: "450 Bath Road, Longford, Heathrow, UB7 0EB",
                },
              ].map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#E3A501]/15 text-[#E3A501]">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-[#9CA3AF]">
                        {label}
                      </span>
                      <span className="block break-words font-semibold">
                        {value}
                      </span>
                    </span>
                  </>
                );
                const cls =
                  "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4";
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className={`${cls} transition-colors hover:border-[#E3A501]/60`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className={cls}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={submitContact}
            className="rounded-2xl border border-[#E3A501]/30 bg-[#0F1525]/80 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
              <Input
                name="email"
                required
                type="email"
                placeholder="Email address"
                className={inputClass}
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className={`${inputClass} sm:col-span-2`}
              />
              <Textarea
                name="message"
                required
                placeholder="How can we help?"
                className={`${inputClass} h-auto min-h-36 sm:col-span-2`}
              />
              <Button
                type="submit"
                className="h-12 rounded-xl bg-[#E3A501] font-bold text-black hover:bg-[#F4C430] sm:col-span-2"
              >
                Send enquiry
              </Button>
            </div>
          </form>
        </div>
      </section>

      <GoldDivider />

      {/* Thank you */}
      <section className="relative py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3A501]/10 blur-[110px]" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl rounded-3xl border border-[#E3A501]/40 bg-[#0F1525]/70 px-6 py-12 text-center shadow-[0_0_60px_rgba(227,165,1,0.12)] sm:px-12 sm:py-16">
            <img
              src="/socialconnect/founder.jpg"
              alt="Nurali Virani"
              className="mx-auto size-24 rounded-full border-2 border-[#E3A501] object-cover object-top shadow-[0_0_30px_rgba(227,165,1,0.35)] sm:size-28"
            />
            <h2 className="mt-8 font-heading text-5xl font-bold text-[#E3A501] sm:text-6xl">
              Thank You
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
              for connecting with us
            </p>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              Thank you for taking the time to get to know Corporate Wheels.
              Whether it is an airport transfer, a business journey or a special
              occasion, we look forward to welcoming you on board.
            </p>
            <div className="mt-8">
              <p className="font-heading text-xl font-semibold text-white">
                Nurali Virani
              </p>
              <p className="mt-1 text-sm text-[#E3A501]">
                Founder, Corporate Wheels
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-auto flex-1 rounded-xl bg-[#E3A501] py-3.5 text-base font-bold text-black hover:bg-[#F4C430]"
              >
                <a href={PHONE_LINK}>
                  <Phone className="mr-2 size-4" />
                  Call now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto flex-1 rounded-xl border-[#E3A501]/60 bg-transparent py-3.5 text-base font-semibold text-white hover:bg-[#E3A501]/10 hover:text-white"
              >
                <a href="/socialconnect/corporate-wheels.vcf" download>
                  <Download className="mr-2 size-4" />
                  Save contact
                </a>
              </Button>
            </div>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              Always on time
            </p>
          </div>
        </div>
      </section>

      <Dialog
        open={thankYouKind !== null}
        onOpenChange={(open) => {
          if (!open) setThankYouKind(null);
        }}
      >
        <DialogContent className="max-w-[calc(100%-2rem)] rounded-2xl border-[#E3A501]/45 bg-[#0A0F1C] p-8 text-center text-white sm:max-w-md">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-[#E3A501]/40 bg-[#E3A501]/10">
            <CheckCircle2 className="size-8 text-[#E3A501]" />
          </div>
          <DialogHeader className="text-center sm:text-center">
            <DialogTitle className="mt-3 text-3xl font-bold text-[#E3A501]">
              Thank you
            </DialogTitle>
            <DialogDescription className="mt-3 text-base leading-relaxed text-[#9CA3AF]">
              {thankYouKind === "review"
                ? "Thank you for sharing your experience. Your email app will help you send the feedback to our team."
                : "Thank you for contacting Corporate Wheels. Your email app will help you send the enquiry to our team."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 sm:justify-center">
            <Button
              type="button"
              onClick={() => setThankYouKind(null)}
              className="h-12 rounded-xl bg-[#E3A501] px-10 font-bold text-black hover:bg-[#F4C430]"
            >
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
