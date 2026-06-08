import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BookingStepLayoutProps {
  step: number;
  totalSteps?: number;
  title: string;
  progress: number;
  children: React.ReactNode;
  footer?: React.ReactNode;
  backTo?: string;
  backLabel?: string;
}

export default function BookingStepLayout({
  step,
  totalSteps = 4,
  title,
  progress,
  children,
  footer,
  backTo,
  backLabel = "Back",
}: BookingStepLayoutProps) {
  return (
    <div className="min-h-dvh bg-background pt-24 pb-12">
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4">
          <p className="text-sm text-muted-foreground mb-1">
            Step {step} of {totalSteps}
          </p>
          <h1 className="text-xl font-heading font-semibold text-foreground mb-3">
            {title}
          </h1>
          <Progress value={progress} className="h-2" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-8"
      >
        {children}
      </motion.div>
      {footer && (
        <div className="sticky bottom-0 border-t border-border bg-card/95 backdrop-blur">
          <div className="container py-4 flex flex-wrap items-center justify-between gap-3">
            {backTo && (
              <Link
                to={backTo}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                {backLabel}
              </Link>
            )}
            {footer}
          </div>
        </div>
      )}
    </div>
  );
}
