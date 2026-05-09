import { contactData } from "@/lib/content";

export function Contact() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <h2 className="text-3xl font-black text-white">Let's Connect.</h2>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Currently exploring opportunities in cyber security and system architecture.
            Feel free to reach out.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${contactData.email}`}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.045] px-6 py-3 backdrop-blur-xl transition duration-300 hover:border-cyan-200/45 hover:bg-white/[0.075]"
          >
            <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan-200 transition duration-500 group-hover:scale-x-100" />
            <span className="text-sm font-medium text-white">Email</span>
          </a>
          
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-white/10 bg-white/[0.045] px-6 py-3 backdrop-blur-xl transition duration-300 hover:border-cyan-200/45 hover:bg-white/[0.075]"
          >
            <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan-200 transition duration-500 group-hover:scale-x-100" />
            <span className="text-sm font-medium text-white">GitHub</span>
          </a>
          
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-white/10 bg-white/[0.045] px-6 py-3 backdrop-blur-xl transition duration-300 hover:border-cyan-200/45 hover:bg-white/[0.075]"
          >
            <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan-200 transition duration-500 group-hover:scale-x-100" />
            <span className="text-sm font-medium text-white">LinkedIn</span>
          </a>

          <a
            href={contactData.resumeLink}
            download
            className="group relative ml-2 overflow-hidden bg-cyan-200 px-6 py-3 text-zinc-950 transition duration-300 hover:bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.3)] hover:shadow-[0_0_25px_rgba(103,232,249,0.5)]"
          >
            <span className="text-sm font-bold uppercase tracking-wider">Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
