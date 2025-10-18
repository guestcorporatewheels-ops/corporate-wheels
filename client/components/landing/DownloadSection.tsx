export default function DownloadSection() {
  return (
    <section id="download" className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
          {/* subtle background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_40%,rgba(230,167,0,0.10),transparent_60%)]" />

          <div className="grid items-center gap-10 p-8 md:p-12 lg:p-16 md:grid-cols-2">
            {/* Left: copy + features + actions */}
            <div>
              <h3 className="font-heading text-3xl md:text-4xl text-white">
                <span className="text-gradient-gold">Effortless travel</span>
                <span className="block text-white mt-2 text-lg md:text-xl font-medium">
                  at your fingertips
                </span>
              </h3>

              <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl">
                Book, track and manage your journey easily on our app. Instant
                confirmations, live tracking and secure payments.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-corporate-gold"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Live tracking & ETA
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-corporate-gold"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Secure payments
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-corporate-gold"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Easy corporate billing
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-corporate-gold"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  24/7 global support
                </li>
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
                {/* QR + store badges card */}
                <div className="flex items-center gap-4">
                  <div className="rounded-lg p-3 bg-white/5 border border-white/6 shadow-glow flex items-center gap-4">
                    <img
                      src="https://images.ctfassets.net/ov8o7v78mnye/4qZi5AXwLS3ciw4lUtd4DC/68e6b66dbacbe330be3bac30cb6e7d0a/app_qrcode.svg"
                      alt="QR code to download the app"
                      className="h-24 w-24 rounded-md bg-white object-cover p-2"
                    />
                    <div className="hidden sm:block text-sm text-muted-foreground">
                      <div className="font-semibold text-white">
                        Scan to download
                      </div>
                      <div className="mt-1">
                        Open the app and manage bookings instantly.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <a href="#" aria-label="Download on the App Store">
                      <img
                        src="/appstoredownload.png"
                        alt="Download on the App Store"
                        className="h-12 w-auto"
                        loading="lazy"
                      />
                    </a>
                    <a href="#" aria-label="Get it on Google Play">
                      <img
                        src="/google-play-badge-logo-svgrepo-com.svg"
                        alt="Get it on Google Play"
                        className="h-12 w-auto"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[520px] w-[260px] rounded-[38px] border border-white/15 bg-black/60 shadow-2xl overflow-hidden">
                {/* animated screen */}
                <div className="absolute inset-[10px] rounded-[30px] overflow-hidden hero-phone-screen animate-float" />
                {/* side glare */}
                <div className="absolute -inset-x-4 inset-y-0 rounded-[46px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
