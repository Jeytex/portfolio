"use client";

import { useState, useEffect } from "react";
import { terminalCommands } from "@/lib/content";

export function Signature() {
  const [history, setHistory] = useState<any[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  useEffect(() => {
    if (currentCommandIndex < terminalCommands.length) {
      const timer = setTimeout(() => {
        setHistory((prev) => [...prev, terminalCommands[currentCommandIndex]]);
        setCurrentCommandIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentCommandIndex]);

  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-rose-500/50" />
            <div className="h-3 w-3 rounded-full bg-amber-500/50" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
            <span className="ml-3 text-xs text-zinc-500 font-mono tracking-wider">root@sidharth-sys:~</span>
          </div>
          
          <div className="min-h-[200px] p-6 font-mono text-sm leading-relaxed">
            {history.map((item, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex items-center text-cyan-400">
                  <span className="mr-3 opacity-50 select-none">$</span>
                  <span>{item.cmd}</span>
                </div>
                <div className="mt-2 pl-5 text-zinc-400">
                  {item.output}
                </div>
              </div>
            ))}
            {currentCommandIndex < terminalCommands.length ? (
              <div className="flex items-center text-cyan-400">
                <span className="mr-3 opacity-50 select-none">$</span>
                <span className="inline-block h-4 w-2 animate-pulse bg-cyan-400" />
              </div>
            ) : (
              <div className="flex items-center mt-5 text-emerald-400/80">
                <span className="mr-3 opacity-50 select-none">&gt;</span>
                <span className="text-xs tracking-widest uppercase">System Ready.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
