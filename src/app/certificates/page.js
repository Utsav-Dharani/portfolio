import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { getCertificates } from "@/lib/content";

export default function CertificatesPage() {
  const certificates = getCertificates();

  return (
    <main className="sectionAlt">
      <div className="container">
        <SectionHeader title="Certificates" subtitle="" />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {certificates.map((c) => (
            <div
              key={c.slug || c.title}
              id={c.slug}
              className="card p-6 flex gap-5 items-start scroll-mt-24"
            >
              <div className="w-24 shrink-0">
                <div className="img-frame">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={240}
                    height={240}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="flex-1">
                <p
                  className="text-sm font-semibold"
                  style={{ color: "rgb(var(--accent))" }}
                >
                  {c.issuer}
                </p>

                <h3 className="text-lg font-semibold mt-1">{c.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{c.date}</p>

                {/* ✅ description (only on this page) */}
                {c.description ? (
                  <p className="muted mt-3 leading-relaxed">{c.description}</p>
                ) : null}

                {/* ✅ credential id + verify link */}
                {c.credentialId ? (
                  <p className="text-sm text-slate-700 mt-3">
                    <span className="text-slate-500">Credential ID:</span>{" "}
                    {c.credentialId}
                  </p>
                ) : null}

                {c.credentialUrl ? (
                  <p className="text-sm mt-2">
                    <a
                      className="link"
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify credential
                    </a>
                  </p>
                ) : null}

                {/* buttons */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {c.pdf ? (
                    <a className="btn" href={c.pdf} target="_blank" rel="noreferrer">
                      PDF
                    </a>
                  ) : null}

                  {c.image ? (
                    <a
                      className="btn-outline"
                      href={c.image}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
