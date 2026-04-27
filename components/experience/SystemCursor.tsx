"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SystemCursor() {
  const reduceMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-80);
  const cursorY = useMotionValue(-80);
  const x = useSpring(cursorX, { stiffness: 420, damping: 36, mass: 0.45 });
  const y = useSpring(cursorY, { stiffness: 420, damping: 36, mass: 0.45 });

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor='magnet']")));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [cursorX, cursorY, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-7 w-7 rounded-full border border-cyan-200/70 mix-blend-screen shadow-[0_0_28px_rgba(103,232,249,0.7)] md:block"
      animate={{ scale: active ? 1.9 : 1, opacity: active ? 0.5 : 0.85 }}
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      transition={{ duration: 0.18 }}
    />
  );
}
