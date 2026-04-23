export default function JeytexProject() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-5xl font-bold">Jeytex Website</h1>

      <p className="mt-6 max-w-2xl text-gray-400 text-lg">
        A modern animated website built using Next.js, Tailwind CSS, and
        Framer Motion. Focused on smooth UI, performance, and clean design.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="https://jeytex.online"
          target="_blank"
          className="px-6 py-3 bg-white text-black rounded-full"
        >
          Visit Live →
        </a>

        <a
          href="/"
          className="px-6 py-3 border border-white/20 rounded-full"
        >
          Back Home
        </a>
      </div>
    </main>
  );
}