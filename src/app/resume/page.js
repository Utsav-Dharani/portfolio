import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="section">
      <div className="container">
        <Link className="link" href="/#home">← Back to home</Link>

        <div className="mt-6 max-w-5xl">
          <h1 className="text-4xl font-semibold">Resume</h1>
          <p className="lead mt-3">View or download my resume (PDF).</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">View PDF</a>
            <a className="btn-outline" href="/resume.pdf" download>Download PDF</a>
            <Link className="btn-outline" href="/#contact">Contact</Link>
          </div>

          <div className="card p-4 mt-8">
            <iframe src="/resume.pdf" className="w-full h-[78vh] rounded-xl" title="Resume PDF" />
          </div>
        </div>
      </div>
    </section>
  );
}
