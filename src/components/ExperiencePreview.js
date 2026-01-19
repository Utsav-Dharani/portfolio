import Link from "next/link";

export default function ExperiencePreview({ items }) {
  return (
    <div className="mt-6 grid gap-6">
      {items.map((e) => (
        <Link
          key={e.slug || e.title}
          href={`/experience#${e.slug}`}
          className="card p-6 block hover:shadow-md transition"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{e.title}</h3>
              <p className="text-slate-600 mt-1">
                {e.org} • {e.location}
              </p>
            </div>
            <p className="text-sm text-slate-600 whitespace-nowrap">{e.dates}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {(e.keywords || []).map((k) => (
              <span key={k} className="pill">
                {k}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
