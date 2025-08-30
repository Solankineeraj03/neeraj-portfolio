
const EMAIL   = "neerajsolanki2000@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/neeraj-solanki-8266211a6";
const GITHUB   = "https://github.com/Solankineeraj03";
const PHONE    = "+1-312-375-3980";

export default function Contact() {
  return (
    <section id="contact" className="section relative scroll-mt">
      <div className="card p-8">
        <h2 className="h2">Contact</h2>
        <p className="p mt-2">Reach out for research collabs, internships, or product builds.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn" href={`mailto:${EMAIL}`}>Email</a>
          <a className="btn bg-white/20 hover:bg-white/30" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn bg-white/20 hover:bg-white/30" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn bg-white/20 hover:bg-white/30" href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>Call</a>
        </div>

        <p className="p mt-4">
          Or mail me directly at <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>

    </section>
  );
}
