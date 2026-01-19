export default function Timeline({ items = [] }) {
  return (
    <div className="mt-10 space-y-6">
      {items.map((it) => (
        <div
          key={it.slug || it.title}
          id={it.slug}
          className="card p-6 scroll-mt-24"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="text-slate-600 mt-1">
                {it.org} • {it.location}
              </p>
            </div>
            <p className="text-sm text-slate-600">{it.dates}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {(it.keywords || []).map((k) => (
              <span key={k} className="pill">{k}</span>
            ))}
          </div>

          <ul className="mt-5 space-y-2 text-slate-700">
            {(it.bullets || []).map((b, idx) => (
              <li key={idx} className="leading-relaxed">• {b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
