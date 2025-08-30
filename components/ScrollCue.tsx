"use client";

type Props = {
  to: string;                 // id of the target section (e.g., "about")
  label?: string;
  dark?: boolean;
};

export default function ScrollCue({ to, label = "Scroll Down", dark = false }: Props) {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`mx-auto mb-6 flex flex-col items-center gap-1 text-sm ${
        dark ? "text-white/70" : "text-black/70"
      }`}
      style={{ display: "block" }}
    >
      <span>{label}</span>
      <span className="text-xl">↓</span>
    </button>
  );
}
