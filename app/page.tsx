"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const concepts = [
  {
    name: "Neon Command Deck",
    pitch: "A portfolio framed as a futuristic mission control dashboard with live status cards and logs.",
  },
  {
    name: "Digital Museum",
    pitch: "Each project appears as a curated exhibit with guided storytelling and artifacts.",
  },
  {
    name: "Glitch Comic Universe",
    pitch: "A scrolling cyber-comic where projects are episodes and interactions trigger panel effects.",
  },
];

const experiments = [
  {
    title: "Jeytex Signal",
    type: "Launch Case",
    summary: "Marketing system designed as a high-conversion visual narrative.",
    href: "/projects/jeytex",
    stack: ["Next.js", "Motion", "UX Writing"],
  },
  {
    title: "Portfolio OS",
    type: "Identity Build",
    summary: "A personal operating system for showcasing ideas, process, and execution.",
    href: "#",
    stack: ["Branding", "Type", "Interaction"],
  },
  {
    title: "Midnight Product Lab",
    type: "Concept",
    summary: "Rapid product prototypes tested through animation and story-driven flows.",
    href: "#",
    stack: ["Product", "Animation", "Iteration"],
  },
];

const selectedConcept = concepts[0];

export default function Home() {
  return (
    <main className="grid-bg min-h-screen overflow-x-hidden bg-[#07070a] text-[#d8f6ff]">
      <div className="scanlines pointer-events-none fixed inset-0 z-10 opacity-40" />

      <header className="relative z-20 border-b border-cyan-300/20 bg-[#07070a]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-200">SIDHU // COMMAND DECK</p>
          <div className="flex gap-5 text-xs uppercase tracking-[0.2em] text-cyan-100/80">
            <a href="#concept">Concept</a>
            <a href="#lab">Lab</a>
            <a href="#transmit">Transmit</a>
          </div>
        </nav>
      </header>

      <section className="relative z-20 mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.3fr_0.7fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">Active Mode: Creative Overdrive</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] sm:text-6xl md:text-7xl">
            Portfolio,
            <br />
            reimagined as a
            <span className="block text-cyan-300">Neon Command Deck.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-cyan-50/75">
            You asked for different. So this experience behaves like a sci-fi control room where each project is a mission, each section is a system module, and every visual detail feels custom-made.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#lab" className="rounded-sm border border-cyan-200/70 bg-cyan-300/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-100 hover:bg-cyan-300/20">
              Open Mission Log
            </a>
            <a href="#transmit" className="rounded-sm border border-fuchsia-300/70 bg-fuchsia-300/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-fuchsia-100 hover:bg-fuchsia-300/20">
              Transmit Request
            </a>
          </div>
        </motion.div>

        <motion.aside
          id="concept"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="terminal-panel rounded-2xl border border-cyan-300/30 p-5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-200">concept selection</p>
          <div className="mt-4 space-y-3">
            {concepts.map((concept) => (
              <div
                key={concept.name}
                className={`rounded-lg border p-3 ${
                  concept.name === selectedConcept.name
                    ? "border-cyan-200/70 bg-cyan-300/10"
                    : "border-cyan-400/20 bg-black/30"
                }`}
              >
                <p className="font-semibold text-cyan-100">{concept.name}</p>
                <p className="mt-1 text-sm text-cyan-100/70">{concept.pitch}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 border-t border-cyan-300/20 pt-4 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
            Selected: {selectedConcept.name}
          </p>
        </motion.aside>
      </section>

      <section id="lab" className="relative z-20 mx-auto w-full max-w-6xl px-6 pb-10 pt-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-300">Mission Log / Project Lab</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">status: online</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {experiments.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="terminal-panel group rounded-2xl border border-cyan-300/20 p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fuchsia-200">{project.type}</p>
              <h3 className="mt-3 text-2xl font-bold text-cyan-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-cyan-100/70">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-sm border border-cyan-300/30 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>

              <Link href={project.href} className="mt-6 inline-flex font-mono text-xs uppercase tracking-[0.2em] text-cyan-300 transition group-hover:text-fuchsia-200">
                inspect mission →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="transmit" className="relative z-20 mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
        <div className="terminal-panel rounded-3xl border border-fuchsia-300/40 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-200">open channel</p>
          <h2 className="mt-4 text-4xl font-black text-cyan-100 sm:text-5xl">Let&apos;s build something nobody else would dare to ship.</h2>
          <p className="mt-4 max-w-2xl text-cyan-100/75">
            Need a bold portfolio, product site, or launch experience? I can craft one with a distinct visual language instead of another copy-paste trend layout.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex rounded-sm border border-fuchsia-200/70 bg-fuchsia-300/20 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-fuchsia-100 hover:bg-fuchsia-300/30"
          >
            transmit message
          </a>
        </div>
      </section>
    </main>
  );
}
