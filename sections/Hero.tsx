"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField").then((mod) => mod.ParticleField),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black/20" />,
  },
);

export function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 24 });
  const panelX = useTransform(springX, [-1, 1], [-18, 18]);
  const panelY = useTransform(springY, [-1, 1], [-12, 12]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 2);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [pointerX, pointerY]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
      <ParticleField />

      <div className="relative z-10 grid w-full grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="max-w-5xl">
          <motion.p
            className="mb-5 text-xs font-medium uppercase text-cyan-200/70"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Interactive portfolio shell / build phase 01
          </motion.p>
          <motion.h1
            className="max-w-5xl text-[clamp(3.8rem,12vw,12.5rem)] font-black leading-[0.78] text-white"
            initial={{ opacity: 0, y: 42, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            SIDHARTH
            <span className="block text-cyan-200">SYSTEMS</span>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7 }}
          >
            A portfolio disguised as a high-density interface: realtime motion,
            spatial depth, and product-grade polish before the real case studies
            are wired in.
          </motion.p>
        </div>

        <motion.aside
          data-cursor="magnet"
          className="relative overflow-hidden border border-white/12 bg-white/[0.055] p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl"
          style={{ x: panelX, y: panelY }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.75 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>EXPERIENCE CORE</span>
            <span>ONLINE</span>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2">
            {[74, 91, 62].map((value, index) => (
              <div key={value} className="border border-white/10 bg-black/20 p-3">
                <div className="h-24 overflow-hidden bg-zinc-950">
                  <motion.div
                    className="h-full origin-bottom bg-gradient-to-t from-cyan-300 to-rose-300"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: value / 100 }}
                    transition={{ delay: 0.45 + index * 0.1, duration: 1.1 }}
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{value}%</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-zinc-300">
            Camera-like scrolling and pointer-reactive surfaces are now installed.
            The next layer can add timeline transitions, command navigation, and
            real project ingestion.
          </p>
        </motion.aside>
      </div>

      <div className="absolute bottom-5 left-5 z-10 text-xs text-zinc-500 sm:left-8 lg:left-12">
        SCROLL TO BREACH
      </div>
    </section>
  );
}
