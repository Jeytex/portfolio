import { signalStack } from "@/lib/content";

export function Signals() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {signalStack.map((signal) => (
          <article
            key={signal.label}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/45 hover:bg-white/[0.075]"
          >
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-cyan-200 transition duration-500 group-hover:scale-x-100" />
            <p className="text-xs uppercase text-zinc-500">{signal.label}</p>
            <h2 className="mt-5 text-2xl font-semibold text-white">{signal.value}</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{signal.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
