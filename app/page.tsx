"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Jeytex Website",
    desc: "High-energy marketing site with fluid motion and conversion-first sections.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    href: "/projects/jeytex",
    status: "Live",
  },
  {
    title: "Portfolio v2",
    desc: "A personal brand system focused on storytelling, speed, and premium UI polish.",
    tech: ["React", "Design System", "A11y"],
    href: "#",
    status: "In Progress",
  },
  {
    title: "Product Concept",
    desc: "Experimental product experience with smooth micro-interactions and clean UX.",
    tech: ["TypeScript", "Motion", "Performance"],
    href: "#",
    status: "Coming Soon",
  },
];

const highlights = [
  { label: "Lighthouse-minded", value: "Fast" },
  { label: "User-first design", value: "Clear" },
  { label: "Interaction quality", value: "Smooth" },
];

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500/40">
      <div className="fixed left-0 top-0 z-[1000] h-1 w-full bg-white/10">
        <div className="h-full bg-violet-400 transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      {!reduceMotion && (
        <div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/80 bg-violet-300/20 backdrop-blur-sm md:block"
          style={{ left: position.x, top: position.y }}
        />
      )}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-[0.2em] text-violet-300">SIDHU</p>
          <div className="flex gap-5 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(167,139,250,0.25),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.2),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-sm tracking-[0.2em] text-violet-300">
            DESIGN • DEVELOPMENT • EXPERIENCE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 max-w-4xl text-5xl font-black leading-tight sm:text-6xl md:text-7xl"
          >
            I turn simple ideas into premium web experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
          >
            I&apos;m Sidharth Ammisetti — a builder focused on sharp visuals, smooth interactions, and websites that feel expensive.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-violet-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-300">
              Explore Work
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:border-white/40 hover:bg-white/5">
              Let&apos;s Build
            </a>
          </motion.div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">About</h2>
          <p className="mt-5 text-slate-300 leading-7">
            I care about one thing: making digital products feel exceptional. From concept to deployment, I focus on clarity, motion, and performance.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            "Performance-focused builds",
            "Responsive by default",
            "Animation with purpose",
            "Clean architecture for growth",
          ].map((point) => (
            <div key={point} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="mt-3 text-slate-300">Selected builds focused on real user impact.</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs tracking-[0.18em] text-slate-400">{project.status}</p>
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
              </div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <Link href={project.href} className="mt-7 inline-flex text-sm font-semibold text-violet-300 transition group-hover:text-violet-200">
                View Project →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-violet-300/20 bg-violet-400/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Want a website that actually stands out?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Let&apos;s design something unforgettable — modern visuals, clean engineering, and launch-ready quality.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex rounded-full bg-violet-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-300"
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  );
}
