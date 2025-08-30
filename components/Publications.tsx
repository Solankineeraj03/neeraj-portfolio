import { BookOpenText, Award, ScrollText, Link as LinkIcon, Calendar } from "lucide-react";

type Pub = {
  title: string;
  venue: string;         // conference/journal name
  type: "Conference" | "Journal";
  year: number;
  month?: string;
  linkLabel?: string;    // label to show (e.g., DOI code)
  href?: string;         // optional URL – leave undefined if you don’t have one yet
};

const pubs: Pub[] = [
  // 2025 — conferences
  {
    title: "ATM-Net: Adaptive Termination and Multi-Precision Neural Networks for Energy-Harvested Edge Intelligence",
    venue: "HPCA 2025",
    type: "Conference",
    year: 2025,
  },
  {
    title: "SenGuard: In-Sensor Privacy-Preserving Processing for Smart Imaging",
    venue: "GLSVLSI 2025",
    type: "Conference",
    year: 2025,
  },
  {
    title: "OrganoSense: Biosignal Neural Processing via Organic Circuits",
    venue: "MWSCAS 2025",
    type: "Conference",
    year: 2025,
  },

  // 2024 — journals
  {
    title:
      "Enhanced Anomaly Detection Framework for 6G Software-Defined Networks: Integration of Machine Learning, Deep Neural Networks, and Dynamic Telemetry",
    venue: "IJISRT (International Journal of Innovative Science and Research Technology)",
    type: "Journal",
    year: 2024,
    month: "March",
    linkLabel: "IJISRT24MAR093",
    // href: "https://<ADD-URL-HERE>", // add when you have the link
  },
  {
    title:
      "Leveraging Fog Computing, Blockchain, and IoT for Enhanced Data Security and Efficiency",
    venue: "IJRASET (International Journal for Research in Applied Science and Engineering Technology)",
    type: "Journal",
    year: 2024,
    month: "February",
    linkLabel: "IJRASET Paper",
    // href: "https://<ADD-URL-HERE>", // add when you have the link
  },
];

// newest first
const sorted = pubs.sort((a, b) => b.year - a.year);

function TypeBadge({ type }: { type: Pub["type"] }) {
  const isConf = type === "Conference";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ${
        isConf
          ? "bg-brand/15 text-brand ring-brand/30"
          : "bg-amber-300/15 text-amber-200 ring-amber-300/30"
      }`}
    >
      {isConf ? <Award className="h-3.5 w-3.5" /> : <ScrollText className="h-3.5 w-3.5" />}
      {type}
    </span>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="section">
      <h2 className="h2">Publications</h2>

      <div className="mt-6 space-y-4">
        {sorted.map((p) => (
          <article key={p.title} className="card p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <h3 className="text-lg md:text-xl font-semibold flex items-start gap-2">
                <BookOpenText className="h-5 w-5 mt-0.5 text-white/70" />
                <span>{p.title}</span>
              </h3>

              <div className="flex items-center gap-2 shrink-0">
                <TypeBadge type={p.type} />
                <span className="hidden md:inline text-white/30">•</span>
                <span className="inline-flex items-center gap-1 text-sm text-white/70">
                  <Calendar className="h-4 w-4" />
                  {p.month ? `${p.month} ${p.year}` : p.year}
                </span>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
              <span className="px-2 py-1 rounded-md bg-white/10">{p.venue}</span>

              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 transition"
                >
                  <LinkIcon className="h-4 w-4" />
                  {p.linkLabel ?? "Link"}
                </a>
              ) : p.linkLabel ? (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10">
                  <LinkIcon className="h-4 w-4 opacity-70" />
                  {p.linkLabel}
                </span>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
