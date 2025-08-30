import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* bright gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-300 via-sky-600 to-sky-700" />
      {/* fade into dark site background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--bg)]" />

      {/* make the hero fill the viewport */}
      <div className="section min-h-[100svh] flex items-center pt-28 md:pt-36 pb-28 text-white">
        <div className="grid items-center gap-10 md:grid-cols-[320px,1fr] w-full">
          {/* avatar (use /public/me.png) */}
          <div className="mx-auto">
            <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full ring-4 ring-white/70 shadow-2xl overflow-hidden">
              <Image src="/me.png" alt="Neeraj Solanki" fill className="object-cover" priority />
            </div>
          </div>

          {/* text */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-glow">
              Hi, I&apos;m Neeraj Solanki
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-white/95 text-glow">
              Machine Learning Engineer • Applied ML & Edge AI
            </p>
            {/* yellowish-white paragraph */}
            <p className="p mt-5 max-w-2xl !text-amber-200 text-glow">
              I turn data and ideas into useful AI—lean models, fast inference, clean UX.
              Cloud or edge, I care about products that feel quick, stay reliable, and
              actually move the needle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
  <a href="/resume.pdf" target="_blank" className="btn-primary btn-focus">
    Resume
  </a>
  <a href="#projects" className="btn-primary btn-focus">
    View My Work
  </a>
  <a href="#contact" className="btn-primary btn-focus">
    Contact Me
  </a>
</div>

          </div>
        </div>
      </div>

      {/* centered cue to next section */}
      
    </section>
  );
}
