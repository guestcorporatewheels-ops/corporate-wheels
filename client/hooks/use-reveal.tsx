import { useEffect, useRef } from "react";

interface Options extends IntersectionObserverInit {}

export default function useReveal<T extends Element>(options?: Options) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, ...options },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
