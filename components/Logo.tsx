"use client";

export default function Logo() {
  return (
    <span className="group relative inline-block">
      {/* glow */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/30 to-sky-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* ring + letter */}
      <span className="relative grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm shadow-sm overflow-hidden">
        {/* swap N → NS on hover without layout shift */}
        <span className="font-semibold tracking-wide text-white/90">
          <span className="block group-hover:hidden">N</span>
          <span className="hidden group-hover:block">NS</span>
        </span>
      </span>
    </span>
  );
}
