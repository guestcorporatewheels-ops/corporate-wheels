import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "gold" | "warm";
  className?: string;
}

/**
 * Decorative animated glow shapes for section backgrounds.
 * Anchored to the section's corners (never the centered content column) and
 * blurred so they read as soft light rather than solid overlapping blocks —
 * safe to use behind text at any viewport width as long as the parent
 * section has `relative overflow-hidden`.
 */
export default function FloatingShapes({
  variant = "gold",
  className = "",
}: FloatingShapesProps) {
  const colorA = variant === "gold" ? "#E6A700" : "#FF6B35";
  const colorB = variant === "gold" ? "#FF6B35" : "#F4C430";

  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 pointer-events-none overflow-hidden ${className}`}
    >
      <motion.div
        className="hidden sm:block absolute -top-16 -left-16 w-48 h-48 md:w-72 md:h-72 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colorA}33 0%, transparent 70%)`,
        }}
        animate={{ y: [0, -20, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block absolute -bottom-20 -right-20 w-56 h-56 md:w-80 md:h-80 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colorB}2e 0%, transparent 70%)`,
        }}
        animate={{ y: [0, 18, 0], x: [0, -14, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl opacity-70"
        style={{
          background: `radial-gradient(circle, ${colorA}1f 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
