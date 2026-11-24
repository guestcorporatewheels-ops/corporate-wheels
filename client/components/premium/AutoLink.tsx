import { Fragment } from "react";

const EMAIL_RE = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

/** Renders text verbatim, turning any email address in it into a mailto link. */
export default function AutoLink({ text }: { text: string }) {
  const parts = text.split(EMAIL_RE);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={`mailto:${p}`}
            className="text-corporate-gold underline decoration-corporate-gold/40 underline-offset-4 hover:decoration-corporate-gold"
          >
            {p}
          </a>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}
