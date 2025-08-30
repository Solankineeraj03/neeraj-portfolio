"use client";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/70 backdrop-blur border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <span className="sr-only">Neeraj Solanki</span>
        </a>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#projects" className="hover:text-brand">Projects</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
          <a href="/resume.pdf" target="_blank" className="hover:text-brand">Resume</a>
          <a href="#publications" className="hover:text-brand">Publications</a>

        </div>
      </nav>
    </header>
  );
}
