import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* top gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-6 pb-16 sm:px-6 lg:px-8">
        {/* NAVBAR */}
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
              href="/login"
              className="rounded-lg px-3 py-1.5 text-sm text-slate-200 hover:text-sky-300"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-sky-500 px-3.5 py-1.5 text-sm font-medium text-slate-950 shadow-md shadow-sky-500/30 hover:bg-sky-400"
            >
              Get started
            </Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="mt-16 flex flex-1 flex-col items-start justify-center gap-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-300">
              SaaS for bank statements
            </p>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Turn messy{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                bank statements
              </span>{" "}
              into clear, searchable reports.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              StatementFlow converts PDFs into clean tables and rich analytics.
              Upload a statement, track transactions, highlight patterns, and
              export insights in seconds.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400"
              >
                Start free trial
              </Link>
              <button className="text-sm text-slate-300 hover:text-sky-300">
                View dashboard demo →
              </button>
            </div>

            <p className="text-xs text-slate-500">
              No credit card required · PDF to Excel in seconds · Built for
              finance teams.
            </p>
          </div>

          {/* Right preview */}
          <div className="mt-10 flex-1 md:mt-0">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl backdrop-blur">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>Dashboard preview</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
                  Demo mode
                </span>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                    <p className="text-[11px] text-slate-500">Total inflow</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-300">
                      $82,430
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                    <p className="text-[11px] text-slate-500">Total outflow</p>
                    <p className="mt-1 text-sm font-semibold text-rose-300">
                      $63,210
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                    <p className="text-[11px] text-slate-500">Net balance</p>
                    <p className="mt-1 text-sm font-semibold text-sky-300">
                      $19,220
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-[11px] text-slate-400">
                  <p>Recent transactions</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span>Payroll deposit</span>
                      <span className="text-emerald-300">+$5,200</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Office supplies</span>
                      <span className="text-rose-300">-$340</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Client payment</span>
                      <span className="text-emerald-300">+$8,500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-500">
                <span>Built with Next.js · Tailwind · TypeScript</span>
                <span>UI only · Portfolio</span>
              </div>
            </div>
          </div>
        </section>

        {/* simple anchor sections */}
        <section id="features" className="mt-20">
          <h2 className="text-lg font-semibold text-slate-100">
            Built for finance workflows
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Upload PDFs, review transactions, and export structured data in a
            few clicks.
          </p>
        </section>

        <section id="pricing" className="mt-10">
          <h2 className="text-lg font-semibold text-slate-100">
            Simple pricing for teams
          </h2>
          {/* later: pricing cards */}
        </section>

        <section
          id="how-it-works"
          className="mt-10 border-t border-slate-800 pt-6"
        >
          <p className="text-xs text-slate-500">
            1. Upload statement · 2. We parse and clean · 3. You analyze &
            export.
          </p>
        </section>
      </div>
    </main>
  );
}
