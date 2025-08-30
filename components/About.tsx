import { Brain, Cpu, Bot, Network } from "lucide-react";


/* Right-side tiles stay the same */
const features = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Applied ML",
    text:
      "Classification, ranking, anomaly detection, and explainability. E2E from EDA → features → reliable metrics.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Edge & Optimization",
    text:
      "Quantization and early-exit ideas for tight-budget inference that still feels snappy.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "LLMs & RAG",
    text:
      "Retriever design, chunking, prompt systems, guardrails, and objective evaluations.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "MLOps & Serving",
    text:
      "APIs, containers, caching/batching, tracing & alerts — simple and observable in prod.",
  },
];

export default function About() {
  return (
    <section id="about" className="section relative scroll-mt">
      <h2 className="h2 mb-6">About Me</h2>

      <div className="grid gap-6 md:grid-cols-3 items-stretch">
        {/* LEFT — longer narrative */}
        <article className="card p-6 md:p-8 md:col-span-2">
          <p className="p">
            I’m Neeraj — an MS CS student at the University of Illinois Chicago and a
            Machine Learning Researcher. Right now I’m exploring how to make models{" "}
            <em>efficient and reliable</em> under tight compute/energy budgets: early-exit
            strategies for small/edge models, post-training quantization, and
            communication-efficient updates for federated learning. I enjoy the kind of
            engineering where a constraint forces a better design.
          </p>

          <p className="p mt-4">
            Before grad school I worked at <strong>Deloitte</strong>, where I shipped
            fraud/anomaly analytics into production. That work improved precision to ~97%
            and cut pipeline latency by ~40%, and taught me the value of measurable wins,
            clean interfaces, and observability once models meet real traffic.
          </p>

          <p className="p mt-4">
            My approach sits at the intersection of <strong>ML × systems</strong>: craft
            good datasets and features, train and evaluate with guardrails, then deploy
            with simple, observable services (APIs with batching/caching, tracing, alerts).
            I care about models that feel fast, are easy to reason about, and
            <em> actually ship</em>.
          </p>

          <p className="p mt-4">
            Recently I’ve been building eval harnesses for RAG (retrievers, chunking,
            safety/guardrails) and profiling quantized inference paths. I like taking
            notebook ideas to the point where a recruiter or PM can try a URL and feel
            the difference.
          </p>

          <p className="p mt-4">
            I’m looking to collaborate on applied ML/Edge AI and platform work where
            constraints matter—think on-device intelligence, cost-aware serving, or
            measurable product impact. If that sounds like your team, I’d love to chat.
          </p>
        </article>

        {/* RIGHT — 2×2 equal-height tiles */}
        <div className="grid grid-cols-2 gap-6 auto-rows-[1fr]">
          {features.map((f) => (
            <div key={f.title} className="feature-tile">
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__text clamp-6">{f.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
