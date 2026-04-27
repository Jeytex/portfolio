"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

import { SmoothScroll } from "@/components/experience/SmoothScroll";
import { SystemCursor } from "@/components/experience/SystemCursor";

export function ExperienceShell({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#05060a] text-zinc-100 selection:bg-cyan-300/25">
      <SystemCursor />
      <motion.div
        aria-hidden
        className="fixed left-0 top-0 z-50 h-px w-full origin-left bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
        style={{ scaleX }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(244,63,94,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <SmoothScroll>
        <div className="relative z-10">{children}</div>
      </SmoothScroll>
    </main>
  );
}
