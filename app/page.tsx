"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Jeytex Website",
    desc: "A modern animated website built with Next.js and deployed on Vercel.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://jeytex.online",
  },
  {
    title: "Portfolio v1",
    desc: "My first personal portfolio with smooth animations and clean UI.",
    tech: ["React", "CSS"],
    link: "#",
  },
];

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
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
    <main className="bg-black text-white">
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed left-0 top-0 z-[1000] h-1 w-full bg-white/10">
        <div
          className="h-full bg-white transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* CUSTOM CURSOR */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[999] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-transform duration-150"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/30 px-8 py-4 backdrop-blur-md">
        <h1 className="font-semibold">Sidhu</h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#hero" className="transition hover:text-white">
            Home
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex h-screen items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />

        <div className="relative z-10 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold sm:text-6xl md:text-7xl"
          >
            Manognya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg text-gray-400 sm:text-xl"
          >
            I build cool stuff.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/20"
          >
            View Projects
          </motion.a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="flex min-h-screen items-center justify-center px-6 py-24 scroll-mt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-4xl font-semibold sm:text-5xl">About Me</h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            I'm a student who loves to learn and build modern, animated websites
            and create cool digital experiences.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="flex min-h-screen items-center justify-center px-6 py-24 scroll-mt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-6xl"
        >
          <div className="text-center">
            <h2 className="text-4xl font-semibold sm:text-5xl">Projects</h2>
            <p className="mt-4 text-gray-400">
              A few things I’ve built or am building.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
              >
                {/* FAKE PREVIEW IMAGE */}
                <div className="h-40 rounded-xl bg-gradient-to-br from-white/10 to-transparent mb-5" />

                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.desc}</p>

                {/* TECH TAGS */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* HOVER INDICATOR */}
                <div className="mt-6 text-sm text-gray-500 group-hover:text-white transition">
                  View Project →
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
