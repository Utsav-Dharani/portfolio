import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container h-20 flex items-center justify-center text-sm text-slate-600">
        <span>© {new Date().getFullYear()}&nbsp;</span>
        <Link href="/" className="hover:text-slate-900">
          Utsav Dharani
        </Link>
      </div>
    </footer>
  );
}
