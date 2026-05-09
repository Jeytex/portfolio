"use client";

import { proofData } from "@/lib/content";

export function ProofOfSkill() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-xs uppercase text-cyan-200/70">Execution Evidence</p>
          <h2 className="mt-5 text-4xl font-black leading-none text-white sm:text-5xl">
            Proof of Skill
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {proofData.map((proof) => (
            <article key={proof.id} className="relative border border-white/10 bg-zinc-950/70 p-6 backdrop-blur">
              <h3 className="text-lg font-bold text-white">{proof.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{proof.description}</p>
              
              <div className="mt-6 rounded border border-white/5 bg-black/50 p-4 font-mono text-sm text-zinc-300">
                {proof.type === "code" ? (
                  <pre className="overflow-x-auto text-cyan-200/80">
                    <code>{proof.placeholder}</code>
                  </pre>
                ) : (
                  <div className="flex h-40 items-center justify-center border border-dashed border-zinc-700 bg-zinc-900/30">
                    <span className="text-xs tracking-widest text-zinc-500">[{proof.placeholder}]</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
