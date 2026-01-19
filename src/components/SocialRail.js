import Icon from "@/components/icons/Icon";

export default function SocialRail({ links }) {
  return (
    <div className="social-rail" aria-label="social links">
      {links.filter((l) => !l.href.startsWith("mailto:")).map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label} title={l.label}>
          <Icon name={l.icon || l.label} />
        </a>
      ))}
    </div>
  );
}
