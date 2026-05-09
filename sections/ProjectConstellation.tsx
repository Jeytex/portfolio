"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projectNodes } from "@/lib/content";

function ProjectCard({ project, index, isExpanded, onToggle }: any) {
  return (
    <motion.article
      layout
      data-cursor="magnet"
      className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/30 backdrop-blur cursor-pointer"
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: isExpanded ? 0 : -10, rotateX: isExpanded ? 0 : 2, rotateY: isExpanded ? 0 : (index === 1 ? 0 : index === 0 ? -2 : 2) }}
      onClick={onToggle}
      style={{ minHeight: "390px" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <motion.div layout className="relative flex h-full flex-col">
        <motion.div layout className="flex items-center justify-between text-xs text-zinc-500">
          <span>{project.code}</span>
          <span>{project.metric}</span>
        </motion.div>

        {!isExpanded && (
          <motion.div layout className="mt-12 h-28 border border-cyan-200/10 bg-black/30 p-3">
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
          </motion.div>
        )}

        <motion.h3 layout className="mt-8 text-3xl font-semibold leading-tight text-white">
          {project.title}
        </motion.h3>
        <motion.p layout className="mt-4 text-sm leading-6 text-zinc-400">{project.desc}</motion.p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 space-y-4 overflow-hidden border-t border-white/10 pt-6"
            >
              <div>
                <h4 className="text-xs uppercase text-cyan-200/70">Why I built this</h4>
                <p className="mt-1 text-sm text-zinc-300">{project.whyBuilt}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase text-cyan-200/70">Key Highlight</h4>
                <p className="mt-1 text-sm text-zinc-300">{project.keyHighlight}</p>
              </div>
              <div className="pt-2">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Demo &rarr;
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="mt-auto flex flex-wrap gap-2 pt-8">
          {(isExpanded && project.techStack ? project.techStack : project.tags).map((tag: string) => (
            <span
              key={tag}
              className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export function ProjectConstellation() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs uppercase text-cyan-200/70">Case Studies</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-none text-white sm:text-7xl">
              Systems & Interfaces.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-300">
            Click on any project card to expand details. This section outlines the thought
            process, technical architecture, and key performance highlights behind each build.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-start">
          {projectNodes.map((project, index) => (
            <ProjectCard
              key={project.code}
              project={project}
              index={index}
              isExpanded={expandedId === project.code}
              onToggle={() => setExpandedId(expandedId === project.code ? null : project.code)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

