import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, themeable, toggleTheme } = useTheme();
  if (!themeable) return null;

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-neutral-700 dark:text-white/80 hover:text-corporate-gold hover:border-corporate-gold/50 transition-colors",
        className,
      )}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
