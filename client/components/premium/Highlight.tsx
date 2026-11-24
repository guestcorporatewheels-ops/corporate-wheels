import { Fragment } from "react";

interface HighlightProps {
  text: string;
  /** Exact substrings of `text` to emphasise. The text itself is never altered. */
  phrases?: readonly string[];
  className?: string;
}

/** Renders copy verbatim, styling selected phrases in brand gold. */
export default function Highlight({
  text,
  phrases = [],
  className = "text-corporate-gold font-medium",
}: HighlightProps) {
  if (!phrases.length) return <>{text}</>;

  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));

  return (
    <>
      {parts.map((part, i) =>
        phrases.includes(part) ? (
          <span key={i} className={className}>
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
