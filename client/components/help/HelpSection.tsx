import React from "react";
import { cn } from "@/lib/utils";
import useReveal from "@/hooks/use-reveal";

interface Props {
  id: string;
  title: string;
  summary?: string;
  children?: React.ReactNode;
}

const Icon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="10" fill="#E6A700" />
    <path d="M9 12h6" stroke="#000" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const HelpSection: React.FC<Props> = ({ id, title, summary, children }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      className={cn(
        "reveal rounded-lg border border-sidebar-border bg-card/50 p-6 shadow-sm transition-transform duration-700 ease-out",
        "opacity-0 translate-y-6"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <Icon />
        </div>
        <div>
          <h2 id={`${id}-title`} className="text-lg font-semibold">
            {title}
          </h2>
          {summary ? <p className="mt-1 text-sm text-muted-foreground">{summary}</p> : null}
        </div>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">{children}</div>
    </section>
  );
};

export default HelpSection;
