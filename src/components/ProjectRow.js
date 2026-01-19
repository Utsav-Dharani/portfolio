import Link from "next/link";

export default function ProjectRow({ project }) {
  return (
    <div
      id={project.slug}
      className="grid gap-6 lg:grid-cols-2 items-start scroll-mt-24"
    >
      {/* LEFT: Main project card */}
      <div className="card p-6">
        {project.category ? (
          <p
            className="text-sm font-semibold"
            style={{ color: "rgb(var(--accent))" }}
          >
            {project.category}
          </p>
        ) : null}

        <h3 className="text-2xl font-semibold mt-1">{project.title}</h3>

        {project.summary ? (
          <p className="text-slate-600 mt-2 leading-relaxed">
            {project.summary}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {(project.tags || []).map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="btn" href={`/projects/${encodeURIComponent(project.slug)}`}>
            Case Study
          </Link>

          {/* Optional demo only (GitHub removed) */}
          {project.links?.demo ? (
            <a className="btn-outline" href={project.links.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : null}
        </div>
      </div>

      {/* RIGHT: Highlights card (no screenshot card anymore) */}
      {project.highlights?.length ? (
        <div className="card p-6">
          <p className="text-sm font-semibold mb-3">Highlights</p>
          <ul className="space-y-2 text-slate-700">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="leading-relaxed">
                • {h}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
