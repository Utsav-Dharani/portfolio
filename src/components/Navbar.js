import Link from "next/link";

const nav = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },

  // ✅ pages (not anchors)
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/certificates", label: "Certificates" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/#home" className="font-semibold tracking-tight">
          Utsav Dharani
        </Link>

        <nav className="hidden md:flex gap-5 text-sm text-slate-600">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-slate-900">
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
