import { Briefcase } from "lucide-react";

type Exp = {
  role: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
  stack?: string;
};

const experience: Exp[] = [
  {
    role: "Machine Learning Researcher",
    org: "University of Illinois at Chicago",
    location: "Chicago, IL",
    date: "Sep 2024 – Present",
    stack: "PyTorch, FL, Quantization, Early-Exit, WNNs",
    bullets: [
      "Designed comm-efficient FL updates (MSB/LSB, selective gradients) to reduce bandwidth while maintaining accuracy.",
      "Prototyped early-exit inference for energy-aware training on small/edge models.",
      "Explored LUT-based WNNs for biosignal tasks; built uncertainty-driven active learning.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Deloitte USI",
    location: "Mumbai, India",
    date: "Jan 2022 – Jul 2024",
    stack: "Python, PySpark, Transformers, REST, AWS",
    bullets: [
      "Shipped anomaly detection across 30+ data sources, improving detection precision to ~97%.",
      "Built real-time data/feature pipelines; reduced detection latency ~40%.",
      "Led root-cause analysis and model monitoring aligned to MITRE ATT&CK.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Happiest Minds",
    location: "Mumbai, India",
    date: "Mar 2021 – Jun 2022",
    stack: "Python, REST, Docker",
    bullets: [
      "Predictive analytics and anomaly models improving reliability ~30%.",
      "Feature/pipeline optimizations cutting training time ~25%.",
      "Containerized serving for smooth rollout on cloud instances.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section relative scroll-mt">
      <h2 className="h2 mb-6">Professional Experience</h2>

      <div className="grid gap-6">
        {experience.map((e) => (
          <article key={e.role + e.org} className="card p-6 md:p-8 hover:ring-1 hover:ring-white/10 transition">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/90 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <p className="p mt-0.5">
                  {e.org} — {e.location} • {e.date}
                </p>
                {e.stack && <p className="text-sm text-[var(--muted)] mt-1 italic">{e.stack}</p>}
                <ul className="mt-4 list-disc pl-5 text-[var(--muted)] space-y-2">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      
    </section>
  );
}
