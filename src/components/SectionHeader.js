export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <h2 className="h2">{title}</h2>
      {subtitle ? <p className="lead mt-3">{subtitle}</p> : null}
    </div>
  );
}
