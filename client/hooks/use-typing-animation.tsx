import { useState, useEffect } from "react";

export function useTypingAnimation(
  text: string,
  speed: number = 100,
  delay: number = 1000,
) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) {
      // Initial delay before starting the animation
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (hasStarted && currentIndex === text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, delay, hasStarted]);

  return { displayText, isComplete };
}
