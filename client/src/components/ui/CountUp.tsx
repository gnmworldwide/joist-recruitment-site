import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a whole number from 0 to `to` when it scrolls into view.
 * Used for the homepage positioning strip.
 */
export function CountUp({
  to,
  duration = 1.2,
}: {
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / (duration * 1000), 1);
      setValue(Math.round(progress * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{value}</span>;
}
