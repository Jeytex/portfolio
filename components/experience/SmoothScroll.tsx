"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = usePrefersReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const content = contentRef.current;
    if (!content) return;

    const updateHeight = () => setHeight(content.getBoundingClientRect().height);
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(content);
    updateHeight();

    const tick = () => {
      targetRef.current = window.scrollY;
      currentRef.current += (targetRef.current - currentRef.current) * 0.095;

      const y = Math.abs(targetRef.current - currentRef.current) < 0.1
        ? targetRef.current
        : currentRef.current;

      content.style.transform = `translate3d(0, ${-y}px, 0)`;
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      content.style.transform = "";
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        ref={contentRef}
        className="fixed inset-x-0 top-0 will-change-transform"
      >
        {children}
      </div>
      <div aria-hidden style={{ height }} />
    </>
  );
}
