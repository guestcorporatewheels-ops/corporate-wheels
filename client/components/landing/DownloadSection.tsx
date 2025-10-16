export default function DownloadSection() {
  return (
    <section id="download" className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
          {/* subtle background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_40%,rgba(230,167,0,0.10),transparent_60%)]" />

          <div className="grid items-center gap-10 p-8 md:p-12 lg:p-16 md:grid-cols-2">
            {/* Left: copy + actions */}
            <div>
              <h3 className="font-heading text-3xl md:text-4xl text-white">
                Effortless travel at your fingertips
              </h3>
              <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl">
                Book, track and manage your journey easily on our app.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
                {/* QR */}
                <img
                  src="https://images.ctfassets.net/ov8o7v78mnye/4qZi5AXwLS3ciw4lUtd4DC/68e6b66dbacbe330be3bac30cb6e7d0a/app_qrcode.svg"
                  alt="QR code to download the app"
                  className="h-28 w-28 md:h-32 md:w-32 rounded-md bg-white object-cover p-2 shadow"
                />

                {/* Store badges */}
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="block focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md"
                    aria-label="Download on the App Store"
                  >
                    <img
                      src="/appstoredownload.png"
                      alt="Download on the App Store"
                      className="h-17 md:h-18 w-auto"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="#"
                    className="block focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md"
                    aria-label="Get it on Google Play"
                  >
                    <img
                      src="/google-play-badge-logo-svgrepo-com.svg"
                      alt="Get it on Google Play"
                      className="h-17 md:h-18 w-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[520px] w-[260px] rounded-[38px] border border-white/15 bg-black/60 shadow-2xl">
                {/* screen */}
                <div className="absolute inset-[10px] rounded-[30px] overflow-hidden bg-[url('https://images.ctfassets.net/ov8o7v78mnye/4nd4iEDEP4NunG4HHzJzRw/2b658ff83396e36fb3b274c313f0e471/mobile-banner-image.png?w=600&q=95&fm=webp')] bg-cover bg-center" />
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
