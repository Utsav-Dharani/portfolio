import Link from "next/link";

export default function ProjectsPreview({ items }) {
  return (
    <div className="mt-6 grid gap-4">
      {items.map((p) => (
        <Link
          key={p.slug}
          href={`/projects/${encodeURIComponent(p.slug)}`} // ✅ case study route
          className="card p-6 block hover:shadow-md transition"
        >
          {p.category ? (
            <p
              className="text-sm font-semibold"
              style={{ color: "rgb(var(--accent))" }}
            >
              {p.category}
            </p>
          ) : null}

          <h3 className="text-xl font-semibold mt-1">{p.title}</h3>

          {p.summary ? (
            <p className="text-slate-600 mt-2 leading-relaxed">{p.summary}</p>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {(p.tags || []).map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
