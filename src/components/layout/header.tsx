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
      <nav className="flex items-center gap-3 text-sm text-slate-300 sm:gap-4 md:gap-6">
        <Link href="#features" className="hidden hover:text-sky-400 transition md:block">
          Features
        </Link>
        <Link href="#pricing" className="hidden hover:text-sky-400 transition sm:block">
          Pricing
        </Link>
        <Link href="#how-it-works" className="hidden hover:text-sky-400 transition lg:block">
          How it works
        </Link>
        <Link
          href="/#login"
          className="hidden rounded-lg px-3 py-1.5 text-sm text-slate-200 hover:text-sky-300 sm:block"
        >
          Log in
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-medium text-slate-950 shadow-md shadow-sky-500/30 hover:bg-sky-400 sm:px-3.5 sm:text-sm"
        >
          Demo
        </Link>
      </nav>
    </header>
  );
}
