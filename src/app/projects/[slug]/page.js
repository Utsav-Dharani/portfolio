import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { getProjects } from "@/lib/content";

// ✅ needed for static export + also good practice
export function generateStaticParams() {
  return getProjects()
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudyPage({ params }) {
  const projects = getProjects();

  // ✅ find by slug
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <main className="sectionAlt">
      <div className="container">
        <div className="mb-6">
          <Link className="link" href="/projects">← Back to Projects</Link>
        </div>

        <SectionHeader title={project.title} subtitle={project.category || ""} />

        {project.summary ? (
          <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {(project.tags || []).map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        <div className="mt-8 grid gap-6">
          {project.problem ? (
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Problem</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{project.problem}</p>
            </div>
          ) : null}

          {project.approach ? (
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Approach</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{project.approach}</p>
            </div>
          ) : null}

          {project.contributions ? (
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Contributions</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{project.contributions}</p>
            </div>
          ) : null}

          {project.results ? (
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Results</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{project.results}</p>
            </div>
          ) : null}

          {project.highlights?.length ? (
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Highlights</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="leading-relaxed">• {h}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.stack ? (
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Tech Stack</h3>
              <p className="mt-2 text-slate-700">{project.stack}</p>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
