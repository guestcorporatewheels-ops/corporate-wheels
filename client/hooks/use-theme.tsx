import { useEffect, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";

export type Theme = "light" | "dark";

// Must match the inline script in index.html that applies the theme before first paint.
export const THEME_STORAGE_KEY = "cw-theme";

// Only these routes have been designed for the light theme so far; every other
// page is forced dark until it is converted.
const THEMEABLE_PATHS = new Set(["/"]);

export function isThemeablePath(pathname: string) {
  return THEMEABLE_PATHS.has(pathname);
}

function readTheme(): Theme {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

let current: Theme = readTheme();
const listeners = new Set<() => void>();

function setTheme(next: Theme) {
  current = next;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    /* ignore storage errors */
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, () => current);
  const { pathname } = useLocation();
  const themeable = isThemeablePath(pathname);
  return {
    theme,
    /** The theme actually shown on this route. */
    resolvedTheme: themeable ? theme : ("dark" as Theme),
    themeable,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}

/** Keeps the `dark` class on <html> in sync with the chosen theme and current route. */
export function ThemeSync() {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);
  return null;
}
