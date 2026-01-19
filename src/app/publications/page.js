import SectionHeader from "@/components/SectionHeader";
import { getPublications } from "@/lib/content";

export default function PublicationsPage() {
  const publications = getPublications();

  return (
    <main className="sectionAlt">
      <div className="container">
        <SectionHeader title="Publications" subtitle="" />

        <div className="mt-10 grid gap-6">
          {publications.map((pub) => (
            <div key={pub.title} className="card p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-snug">{pub.title}</h3>

                  {pub.authors ? (
                    <p className="text-sm text-slate-600 mt-2">{pub.authors}</p>
                  ) : null}

                  <p className="text-sm text-slate-600">
                    {pub.venue} • {pub.year}
                  </p>
                </div>

                {pub.pdf ? (
                  <a className="btn shrink-0" href={pub.pdf} target="_blank" rel="noreferrer">
                    PDF
                  </a>
                ) : null}
              </div>

              {pub.summary ? (
                <p className="muted mt-6 leading-relaxed">{pub.summary}</p>
              ) : null}

              {(pub.bullets?.length ?? 0) > 0 ? (
                <ul className="mt-5 space-y-2 text-slate-700">
                  {pub.bullets.map((b, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
