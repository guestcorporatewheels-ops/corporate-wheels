import React from "react";
import { cn } from "@/lib/utils";
import useReveal from "@/hooks/use-reveal";

interface Props {
  id: string;
  title: string;
  summary?: string;
  children?: React.ReactNode;
}

const HelpSection: React.FC<Props> = ({ id, title, summary, children }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      className={cn(
        "reveal transition-transform duration-700 ease-out",
        "opacity-0 translate-y-6 py-8 md:py-10",
      )}
    >
      <div>
        <h2
          id={`${id}-title`}
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          {title}
        </h2>
        {summary ? (
          <p className="mt-2 text-base md:text-lg text-muted-foreground">
            {summary}
          </p>
        ) : null}
      </div>

      <div className="mt-5 text-sm md:text-base text-muted-foreground">
        {children}
      </div>
    </section>
  );
};

export default HelpSection;
