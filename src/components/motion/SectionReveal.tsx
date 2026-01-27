import * as React from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Uniform section reveal animation (no `viewport` prop used).
 * Uses scroll progress against the wrapper element.
 */
export default function SectionReveal({ children, className }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // start animating when section enters near bottom, finish around mid-screen
    offset: ["start 0.92", "start 0.55"],
  });

  const p = useSpring(scrollYProgress, reduce ? { stiffness: 999, damping: 999 } : { stiffness: 140, damping: 26 });

  const opacity = useTransform(p, [0, 1], [0, 1]);
  const y = useTransform(p, [0, 1], [24, 0]);
  const scale = useTransform(p, [0, 1], [0.985, 1]);

  return (
    <motion.div
      ref={ref}
      className={["transform-gpu will-change-transform", className].filter(Boolean).join(" ")}
      style={reduce ? undefined : { opacity, y, scale }}
    >
      {children}
    </motion.div>
  );
}
