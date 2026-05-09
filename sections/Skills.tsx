import { skillsData } from "@/lib/content";

export function Skills() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-xs uppercase text-cyan-200/70">Technical Arsenal</p>
          <h2 className="mt-5 text-4xl font-black leading-none text-white sm:text-5xl">
            Core Competencies
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Frontend */}
          <article className="group relative overflow-hidden border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-200/45 hover:bg-white/[0.075]">
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-cyan-200 transition duration-500 group-hover:scale-x-100" />
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Frontend Architecture</h3>
            <ul className="space-y-4">
              {skillsData.frontend.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span className="text-zinc-300">{skill.name}</span>
                  <span className="text-xs text-cyan-200/70">{skill.level}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Backend */}
          <article className="group relative overflow-hidden border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-300 hover:border-rose-300/45 hover:bg-white/[0.075]">
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-rose-300 transition duration-500 group-hover:scale-x-100" />
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Backend Systems</h3>
            <ul className="space-y-4">
              {skillsData.backend.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span className="text-zinc-300">{skill.name}</span>
                  <span className="text-xs text-rose-300/70">{skill.level}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Tools */}
          <article className="group relative overflow-hidden border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-200/45 hover:bg-white/[0.075]">
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-cyan-200 transition duration-500 group-hover:scale-x-100" />
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Infrastructure & Tools</h3>
            <ul className="space-y-4">
              {skillsData.tools.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span className="text-zinc-300">{skill.name}</span>
                  <span className="text-xs text-cyan-200/70">{skill.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
