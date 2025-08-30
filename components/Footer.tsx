export default function Footer() {
    return (
      <footer className="section pt-8">
        <div className="text-sm text-center text-[var(--muted)]">
          © {new Date().getFullYear()} Neeraj Solanki • Built with Next.js & Tailwind
        </div>
      </footer>
    );
  }
  