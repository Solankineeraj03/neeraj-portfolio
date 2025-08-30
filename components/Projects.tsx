import Image from "next/image";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  link: string;
  image: string;   // /projects/...
  alt: string;
};

const projects: Project[] = [
  {
    title: "ChurnGuard — SaaS Churn Prediction",
    blurb:
      "End-to-end churn modeling with feature pipelines, calibrated probs, and actionability hooks.",
    tags: ["ML", "Feature Eng", "Probs/Calibration"],
    link: "https://github.com/Solankineeraj03/ChurnGuard-SaaS-Prediction",
    image: "/projects/churnguard.png",
    alt: "ChurnGuard SaaS prediction dashboard",
  },
  {
    title: "Converso — LLM Chatbot",
    blurb:
      "RAG-ready chatbot: retrievers, chunking, guardrails, and an eval harness for prompts.",
    tags: ["LLM", "RAG", "Guardrails"],
    link: "https://github.com/Solankineeraj03/Converso-LLM-Chatbot",
    image: "/projects/converso.png",
    alt: "Converso LLM chatbot UI",
  },
  {
    title: "FLARE — Early-Exit FL on Quantized SLMs",
    blurb:
      "Comm-efficient rounds (MSB/LSB) + early-exit inference on small models for edge training.",
    tags: ["Federated Learning", "Quantization", "Early Exit"],
    link: "https://github.com/Solankineeraj03/FLARE",
    image: "/projects/flare.png",
    alt: "FLARE early-exit federated learning diagram",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="h2">Featured Projects</h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="card p-0 hover:ring-1 hover:ring-brand/50 transition block overflow-hidden"
          >
            {/* image */}
            <div className="relative aspect-[16/9]">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 ring-1 ring-white/5 rounded-2xl pointer-events-none" />
            </div>

            {/* text */}
            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="p mt-2">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-md bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
