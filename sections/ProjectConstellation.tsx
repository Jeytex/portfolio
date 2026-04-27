"use client";

import { motion } from "framer-motion";

import { projectNodes } from "@/lib/content";

export function ProjectConstellation() {
  return (
    <section className="relative min-h-screen px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs uppercase text-cyan-200/70">Dummy project graph</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-none text-white sm:text-7xl">
              Proof modules before case studies.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-300">
            This phase establishes the interaction language: depth cards, signal
            labels, progressive reveals, and a layout that can later ingest real
            projects without changing the experience model.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projectNodes.map((project, index) => (
            <motion.article
              data-cursor="magnet"
              key={project.code}
              className="group relative min-h-[390px] overflow-hidden border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/30 backdrop-blur"
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, rotateX: 2, rotateY: index === 1 ? 0 : index === 0 ? -2 : 2 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>{project.code}</span>
                  <span>{project.metric}</span>
                </div>

                <div className="mt-12 h-28 border border-cyan-200/10 bg-black/30 p-3">
                  <div className="grid h-full grid-cols-8 gap-1">
                    {Array.from({ length: 32 }).map((_, barIndex) => (
                      <motion.span
                        key={barIndex}
                        className="self-end bg-cyan-200/70"
                        initial={{ height: "12%" }}
                        whileInView={{ height: `${18 + ((barIndex * 17 + index * 19) % 76)}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + barIndex * 0.01, duration: 0.45 }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="mt-8 text-3xl font-semibold leading-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{project.desc}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
