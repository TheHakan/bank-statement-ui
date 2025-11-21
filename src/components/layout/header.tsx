import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-xs font-bold text-sky-300">
          SF
        </div>
        <span className="text-sm font-semibold tracking-wide text-slate-100">
          StatementFlow
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm text-slate-300">
        <Link href="#features" className="hover:text-sky-400 transition">
          Features
        </Link>
        <Link href="#pricing" className="hover:text-sky-400 transition">
          Pricing
        </Link>
        <Link href="#how-it-works" className="hover:text-sky-400 transition">
          How it works
        </Link>
        <Link
          href="/#login"
          className="rounded-lg px-3 py-1.5 text-sm text-slate-200 hover:text-sky-300"
        >
          Log in
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg bg-sky-500 px-3.5 py-1.5 text-sm font-medium text-slate-950 shadow-md shadow-sky-500/30 hover:bg-sky-400"
        >
          Demo
        </Link>
      </nav>
    </header>
  );
}
