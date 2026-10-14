import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const STORAGE_KEY = "cookieConsent";

type CookiePreferences = {
  essential: true; // always true
  analytics: boolean;
  marketing: boolean;
  status: "accepted" | "declined" | "custom";
};

const defaultPrefs: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  status: "declined",
};

function readPrefs(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePreferences;
  } catch (e) {
    return null;
  }
}

function writePrefs(p: CookiePreferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    // notify other parts of the app
    try {
      window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: p }));
    } catch (e) {
      // older browsers
      // no-op
    }
  } catch (e) {
    // ignore storage errors
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>(defaultPrefs);
  const [showPreferences, setShowPreferences] = useState(false);
  const prefsButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstPrefRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const p = readPrefs();
    if (!p) setVisible(true);
    else setPrefs(p);
  }, []);

  useEffect(() => {
    if (showPreferences) {
      // focus first toggle when modal opens
      setTimeout(() => firstPrefRef.current?.focus(), 0);
    }
  }, [showPreferences]);

  function acceptAll() {
    const p: CookiePreferences = { ...defaultPrefs, analytics: true, marketing: true, status: "accepted" };
    writePrefs(p);
    setPrefs(p);
    setVisible(false);
    setShowPreferences(false);
  }

  function rejectAll() {
    const p: CookiePreferences = { ...defaultPrefs, analytics: false, marketing: false, status: "declined" };
    writePrefs(p);
    setPrefs(p);
    setVisible(false);
    setShowPreferences(false);
  }

  function openPreferences() {
    setShowPreferences(true);
  }

  function closePreferences() {
    setShowPreferences(false);
    // return focus to the Preferences button
    prefsButtonRef.current?.focus();
  }

  function savePreferences(updated: Pick<CookiePreferences, "analytics" | "marketing">) {
    const status = updated.analytics && updated.marketing ? "accepted" : "custom";
    const p: CookiePreferences = { ...defaultPrefs, ...updated, status };
    writePrefs(p);
    setPrefs(p);
    setVisible(false);
    setShowPreferences(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed left-0 right-0 bottom-2 z-[60] flex justify-center px-0">
      <div className={`w-[95%] bg-white/95 text-neutral-900 border-gray-200 dark:bg-black/80 dark:text-white/90 dark:border-white/10 backdrop-blur-md border rounded-none md:rounded-xl shadow-lg p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6`}>
        <div className="flex-1 text-sm text-neutral-900/90 dark:text-white/90">
          <div className="font-medium text-neutral-900 dark:text-white mb-1">We use cookies</div>
          <div className="text-neutral-700 dark:text-white/80">
            We use essential cookies to make this site work and analytics cookies to improve your
            experience. You can accept all cookies, reject all non-essential cookies, or manage
            your preferences.
            {' '}
            <Link to="/privacy" className="underline hover:text-neutral-900 dark:hover:text-white">
              Privacy Policy
            </Link>
            .
          </div>
        </div>

        <div className="flex-shrink-0 flex gap-3 w-full md:w-auto">
          <button
            onClick={rejectAll}
            className="flex-1 md:flex-initial px-4 py-2 rounded-md border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white/90 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition"
            aria-label="Reject non-essential cookies"
          >
            Reject All
          </button>

          <button
            ref={prefsButtonRef}
            onClick={openPreferences}
            className="flex-1 md:flex-initial px-4 py-2 rounded-md bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white/90 hover:bg-black/10 dark:hover:bg-white/10 transition"
            aria-haspopup="dialog"
            aria-controls="cookie-preferences"
            aria-expanded={showPreferences}
          >
            Preferences
          </button>

          <button
            onClick={acceptAll}
            className="flex-1 md:flex-initial px-4 py-2 rounded-md bg-[#F4C430] text-black font-medium hover:bg-[#E6A700] transition"
            aria-label="Accept all cookies"
          >
            Accept All
          </button>
        </div>

        {/* Preferences modal */}
        {showPreferences && (
          <div
            id="cookie-preferences"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie preferences"
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            onKeyDown={(e) => {
              if (e.key === "Escape") closePreferences();
            }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={closePreferences} />
            <div className={`relative max-w-md w-full bg-white text-black dark:bg-[#0b0b0b] dark:text-white rounded-lg shadow-lg p-6 z-10`}>
              <h3 className={`text-lg font-medium mb-3 text-black dark:text-white`}>Cookie preferences</h3>
              <p className={`text-sm mb-4 text-muted-foreground dark:text-white/80`}>Choose which cookies you'd like to allow.</p>

              <div className="space-y-4">
                <div className={`flex items-start justify-between text-black dark:text-white`}>
                  <div>
                    <div className="font-medium">Essential</div>
                    <div className="text-sm text-muted-foreground">Required for site functionality.</div>
                  </div>
                  <div className="ml-4">
                    <input type="checkbox" checked readOnly aria-disabled />
                  </div>
                </div>

                <div className={`flex items-start justify-between text-black dark:text-white`}>
                  <div>
                    <div className="font-medium">Analytics</div>
                    <div className="text-sm text-muted-foreground">Helps us understand usage.</div>
                  </div>
                  <div className="ml-4">
                    <input
                      ref={firstPrefRef}
                      type="checkbox"
                      checked={prefs.analytics}
                      onChange={(e) => setPrefs((s) => ({ ...s, analytics: e.target.checked }))}
                      aria-label="Allow analytics cookies"
                    />
                  </div>
                </div>

                <div className={`flex items-start justify-between text-black dark:text-white`}>
                  <div>
                    <div className="font-medium">Marketing</div>
                    <div className="text-sm text-muted-foreground">Personalised ads and offers.</div>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={prefs.marketing}
                      onChange={(e) => setPrefs((s) => ({ ...s, marketing: e.target.checked }))}
                      aria-label="Allow marketing cookies"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={closePreferences}
                  className={`px-3 py-2 rounded-md border text-sm border-gray-200 text-black dark:border-white/10 dark:text-white`}
                >
                  Cancel
                </button>
                <button
                  onClick={() => savePreferences({ analytics: prefs.analytics, marketing: prefs.marketing })}
                  className="px-3 py-2 rounded-md bg-[#F4C430] text-black font-medium text-sm"
                >
                  Save preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
