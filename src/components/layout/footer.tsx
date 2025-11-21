import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-xs font-bold text-sky-600 dark:text-sky-300">
              SF
            </div>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">StatementFlow</span>
          </div>
          <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Professional bank statement converter for accountants and finance teams. 
            Convert PDF to Excel instantly.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Product</h4>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li><Link href="#features" className="hover:text-sky-500 dark:hover:text-sky-400">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-sky-500 dark:hover:text-sky-400">Pricing</Link></li>
            <li><Link href="#how-it-works" className="hover:text-sky-500 dark:hover:text-sky-400">How it works</Link></li>
            <li><Link href="/dashboard" className="hover:text-sky-500 dark:hover:text-sky-400">Dashboard demo</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Resources</h4>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li><Link href="/blog" className="hover:text-sky-500 dark:hover:text-sky-400">Blog</Link></li>
            <li><Link href="/help" className="hover:text-sky-500 dark:hover:text-sky-400">Help center</Link></li>
            <li><Link href="/api" className="hover:text-sky-500 dark:hover:text-sky-400">API docs</Link></li>
            <li><Link href="/security" className="hover:text-sky-500 dark:hover:text-sky-400">Security</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Company</h4>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li><Link href="/about" className="hover:text-sky-500 dark:hover:text-sky-400">About us</Link></li>
            <li><Link href="/contact" className="hover:text-sky-500 dark:hover:text-sky-400">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-sky-500 dark:hover:text-sky-400">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-sky-500 dark:hover:text-sky-400">Terms of service</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 dark:text-slate-500">
          © 2025 StatementFlow. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <Link href="/sitemap" className="hover:text-sky-500 dark:hover:text-sky-400">Sitemap</Link>
          <span>•</span>
          <Link href="/accessibility" className="hover:text-sky-500 dark:hover:text-sky-400">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
