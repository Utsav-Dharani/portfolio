import Link from "next/link";

export default function PublicationsPreview({ items, limit = 2 }) {
  const pubs = (items || []).slice(0, limit);

  return (
    <div className="mt-6 grid gap-4">
      {pubs.map((p) => (
        <Link
          key={p.slug}
          href={`/publications/${encodeURIComponent(p.slug)}`}
          className="card p-6 block hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>

          <p className="text-sm text-slate-600 mt-2">
            {p.authors}
          </p>

          <p className="text-sm text-slate-600">
            {p.venue} • {p.year}
          </p>
        </Link>
      ))}
    </div>
  );
}
