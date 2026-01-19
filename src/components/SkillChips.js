function SkillCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 h-full">
      <h4 className="text-base font-semibold">{title}</h4>

      {/* tighter chip spacing */}
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillChips({ groups }) {
  const map = Object.fromEntries(groups.map((g) => [g.title, g]));

  const ordered = [
    map["Languages"],
    map["ML / DL"],
    map["LLM / NLP"],
    map["Backend, APIs & DevOps"],
    map["Frontend"],
    map["Database"],
  ].filter(Boolean);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
      {ordered.map((g) => (
        <SkillCard key={g.title} title={g.title} items={g.items} />
      ))}
    </div>
  );
}
