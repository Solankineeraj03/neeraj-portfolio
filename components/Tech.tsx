import {
  Brain, Cpu, Bot, Boxes, Box, Database, Cloud, Layers, FlaskConical,
  Server, Network, GitBranch, Activity, Wand2, Binary, Terminal,
  Sparkles, FileSearch, ShieldCheck, BookText, Rocket
} from "lucide-react";

type Skill = { name: string; icon: JSX.Element };
type Group = { title: string; items: Skill[] };

const groups: Group[] = [
  {
    title: "LLMs & RAG",
    items: [
      { name: "Transformers", icon: <Bot className="icon" /> },
      { name: "LangChain", icon: <Layers className="icon" /> },
      { name: "Prompting", icon: <Wand2 className="icon" /> },
      { name: "Guardrails", icon: <ShieldCheck className="icon" /> },
      { name: "RAG Eval", icon: <FileSearch className="icon" /> },
      { name: "Vector DB (FAISS/Pinecone/Qdrant)", icon: <Database className="icon" /> },
    ],
  },
  {
    title: "Core ML",
    items: [
      { name: "PyTorch", icon: <Cpu className="icon" /> },
      { name: "TensorFlow", icon: <Cpu className="icon" /> },
      { name: "scikit-learn", icon: <Brain className="icon" /> },
      { name: "XGBoost / LightGBM", icon: <Activity className="icon" /> },
      { name: "ONNX / Quantization", icon: <Box className="icon" /> },
    ],
  },
  {
    title: "Data & ETL",
    items: [
      { name: "Python", icon: <Binary className="icon" /> },
      { name: "NumPy", icon: <Boxes className="icon" /> },
      { name: "Pandas / Polars", icon: <Boxes className="icon" /> },
      { name: "Apache Spark", icon: <Rocket className="icon" /> },
      { name: "SQL", icon: <BookText className="icon" /> },
    ],
  },
  {
    title: "Serving & APIs",
    items: [
      { name: "FastAPI", icon: <Server className="icon" /> },
      { name: "Flask", icon: <FlaskConical className="icon" /> },
      { name: "gRPC", icon: <Network className="icon" /> },
      { name: "Batching / Caching", icon: <Box className="icon" /> },
      { name: "Tracing / Alerts", icon: <Activity className="icon" /> },
    ],
  },
  {
    title: "MLOps & Observability",
    items: [
      { name: "Docker", icon: <Box className="icon" /> },
      { name: "Kubernetes", icon: <Boxes className="icon" /> },
      { name: "MLflow / DVC", icon: <GitBranch className="icon" /> },
      { name: "Weights & Biases", icon: <Activity className="icon" /> },
      { name: "CI/CD", icon: <Terminal className="icon" /> },
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: <Database className="icon" /> },
      { name: "MongoDB / Redis", icon: <Database className="icon" /> },
      { name: "AWS (S3, Lambda, EC2)", icon: <Cloud className="icon" /> },
      { name: "Vercel", icon: <Cloud className="icon" /> },
      { name: "Secrets & IAM", icon: <ShieldCheck className="icon" /> },
    ],
  },
];

export default function Tech() {
  return (
    <section id="tech" className="section relative scroll-mt">
      <h2 className="h2">My Skills</h2>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="skill-card">
            <div className="skill-title">{g.title}</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {g.items.map((s) => (
                <span key={s.name} className="skill-pill">
                  {s.icon}
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
