import { useState, useEffect } from "react";

export function useTypingAnimation(
  text: string,
  speed: number = 100,
  delay: number = 1000,
) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    // Start the animation after initial delay
    const startTimeout = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText("");
      setIsComplete(false);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  return { displayText, isComplete };
}
