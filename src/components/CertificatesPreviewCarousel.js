"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function CertificatesPreviewCarousel({ items = [] }) {
  const pageSize = 2;
  const [start, setStart] = useState(0);

  const maxStart = Math.max(0, items.length - pageSize);

  const visible = useMemo(
    () => items.slice(start, start + pageSize),
    [items, start]
  );

  const prev = () => setStart((v) => Math.max(0, v - pageSize));
  const next = () => setStart((v) => Math.min(maxStart, v + pageSize));

  return (
    // ✅ extra padding so arrows don't overlap cards
    <div className="relative px-14">
      {/* arrows */}
      {items.length > pageSize ? (
        <>
          <button
            type="button"
            onClick={prev}
            disabled={start === 0}
            className="
              absolute left-2 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full
              border border-slate-200 bg-white shadow-md
              flex items-center justify-center
              text-2xl leading-none
              disabled:opacity-40
            "
            aria-label="Previous certificates"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            disabled={start >= maxStart}
            className="
              absolute right-2 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full
              border border-slate-200 bg-white shadow-md
              flex items-center justify-center
              text-2xl leading-none
              disabled:opacity-40
            "
            aria-label="Next certificates"
          >
            ›
          </button>
        </>
      ) : null}

      {/* cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((c) => (
          <Link
            key={c.slug || c.title}
            href={`/certificates#${encodeURIComponent(c.slug)}`}
            className="card p-6 block hover:shadow-md transition"
          >
            <p className="text-sm font-semibold" style={{ color: "rgb(var(--accent))" }}>
              {c.issuer}
            </p>
            <h3 className="text-lg font-semibold mt-1">{c.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{c.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
