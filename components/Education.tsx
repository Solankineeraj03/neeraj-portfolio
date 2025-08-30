import { GraduationCap } from "lucide-react";


type Edu = {
  degree: string;
  school: string;
  location: string;
  date: string;
  bullets?: string[];
};

const education: Edu[] = [
  {
    degree: "M.S. in Computer Science",
    school: "University of Illinois at Chicago",
    location: "Chicago, IL",
    date: "Aug 2024 – May 2026 (expected)",
    bullets: ["Focus: Applied ML, Edge AI, Responsible AI"],
  },
  {
    degree: "B.Tech in Computer Engineering (CGPA: 8.86)",
    school: "MIT – World Peace University",
    location: "Pune, India",
    date: "2018 – 2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="section relative scroll-mt">
      <h2 className="h2 mb-6">Education</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((ed) => (
          <article key={ed.degree} className="card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{ed.degree}</h3>
                <p className="p mt-0.5">
                  {ed.school} — {ed.location} • {ed.date}
                </p>
                {ed.bullets && (
                  <ul className="mt-3 list-disc pl-5 text-[var(--muted)] space-y-2">
                    {ed.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      
    </section>
  );
}
