import Link from "next/link";
import { Header } from "@/components/layout/header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* top gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-6 pb-16 sm:px-6 lg:px-8">
        {/* NAVBAR */}
        <Header />

        {/* HERO */}
        <section className="mt-16 flex flex-1 flex-col items-start justify-center gap-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-300">
              SaaS for bank statements
            </p>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Convert{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                bank statements
              </span>{" "}
              from PDF to Excel instantly
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              StatementFlow is a powerful bank statement converter that transforms 
              PDF files into clean Excel spreadsheets. Upload your bank statements, 
              extract transaction data automatically, and export organized financial 
              reports in seconds. Perfect for accountants, bookkeepers, and finance teams.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400"
              >
                Start free trial
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-slate-300 hover:text-sky-300"
              >
                View dashboard demo →
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              Free trial available · Convert PDF statements to Excel · Secure cloud processing · Built for accounting professionals
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

        {/* Features section - SEO optimized */}
        <section id="features" className="mt-20 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-100">
              Powerful Bank Statement Processing Features
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 max-w-3xl">
              Our bank statement converter uses advanced OCR technology to extract data 
              from PDF statements. Convert multiple bank statements simultaneously, 
              recognize various bank formats, and export to Excel, CSV, or JSON formats.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="font-medium text-slate-100">Automatic Data Extraction</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Extract transaction dates, descriptions, amounts, and balances from 
                any bank statement PDF automatically.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="font-medium text-slate-100">Multi-Bank Support</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Works with statements from major banks worldwide. Upload statements 
                from different banks and convert them all.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="font-medium text-slate-100">Secure Processing</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Bank-level encryption protects your financial data. All statements 
                are processed securely and deleted after conversion.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works - SEO content */}
        <section id="how-it-works" className="mt-16 border-t border-slate-800 pt-12">
          <h2 className="text-2xl font-semibold text-slate-100">
            How to Convert Bank Statements to Excel
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-2xl">
            Transform your PDF bank statements into organized spreadsheets in three simple steps.
          </p>
          
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sm font-semibold text-sky-300">
                1
              </div>
              <div>
                <h3 className="font-medium text-slate-100">Upload Your Bank Statement PDF</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Drag and drop or select PDF bank statements from your computer. 
                  Supports single or batch uploads.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sm font-semibold text-sky-300">
                2
              </div>
              <div>
                <h3 className="font-medium text-slate-100">Automatic Transaction Parsing</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Our system extracts all transactions, dates, amounts, and descriptions 
                  automatically using intelligent pattern recognition.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sm font-semibold text-sky-300">
                3
              </div>
              <div>
                <h3 className="font-medium text-slate-100">Download Excel Spreadsheet</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Review extracted data, make adjustments if needed, and export to 
                  Excel, CSV, or integrate with accounting software.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-100">
            Why Choose StatementFlow for Bank Statement Conversion?
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3">
              <div className="text-emerald-400">✓</div>
              <div>
                <p className="font-medium text-slate-200 text-sm">Save Hours of Manual Data Entry</p>
                <p className="text-xs text-slate-400 mt-1">Eliminate tedious copy-paste work</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-emerald-400">✓</div>
              <div>
                <p className="font-medium text-slate-200 text-sm">Reduce Human Errors</p>
                <p className="text-xs text-slate-400 mt-1">Automated extraction ensures accuracy</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-emerald-400">✓</div>
              <div>
                <p className="font-medium text-slate-200 text-sm">Process Multiple Statements</p>
                <p className="text-xs text-slate-400 mt-1">Batch convert dozens of PDFs at once</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-emerald-400">✓</div>
              <div>
                <p className="font-medium text-slate-200 text-sm">Export to Any Format</p>
                <p className="text-xs text-slate-400 mt-1">Excel, CSV, JSON, or direct API access</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing section */}
        <section id="pricing" className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-100">
            Affordable Pricing for Bank Statement Conversion
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Simple, transparent pricing for individuals and teams. Start with our free trial 
            and upgrade as you grow.
          </p>
          
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Starter</h3>
              <p className="mt-2 text-xs text-slate-400">Perfect for individuals</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-slate-100">$9</span>
                <span className="text-slate-400 text-sm">/month</span>
              </div>
              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>10 bank statement conversions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>PDF to Excel & CSV export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Basic transaction categorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="mt-6 w-full rounded-lg border border-slate-700 bg-slate-800 py-2 text-sm font-medium text-slate-100 hover:bg-slate-750">
                Start free trial
              </button>
            </div>

            {/* Professional Plan */}
            <div className="rounded-2xl border-2 border-sky-500 bg-slate-900/50 p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-sky-500 px-3 py-1 text-[10px] font-semibold text-slate-950">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-100">Professional</h3>
              <p className="mt-2 text-xs text-slate-400">For small businesses</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-slate-100">$29</span>
                <span className="text-slate-400 text-sm">/month</span>
              </div>
              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>100 bank statement conversions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>All export formats (Excel, CSV, JSON)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Advanced categorization & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Batch processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="mt-6 w-full rounded-lg bg-sky-500 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400">
                Start free trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Enterprise</h3>
              <p className="mt-2 text-xs text-slate-400">For large organizations</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-slate-100">Custom</span>
              </div>
              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Unlimited conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Custom API integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>On-premise deployment option</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>24/7 phone & chat support</span>
                </li>
              </ul>
              <button className="mt-6 w-full rounded-lg border border-slate-700 bg-slate-800 py-2 text-sm font-medium text-slate-100 hover:bg-slate-750">
                Contact sales
              </button>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-100">
            Who Uses Bank Statement Converters?
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-3xl">
            StatementFlow helps professionals across industries streamline their financial data processing.
          </p>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <h3 className="font-semibold text-slate-100">Accountants & Bookkeepers</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Process client bank statements faster. Convert multiple statements simultaneously 
                and integrate data directly into accounting software like QuickBooks, Xero, or Sage.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <h3 className="font-semibold text-slate-100">Small Business Owners</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Track business expenses and income efficiently. Extract transaction data from 
                business bank accounts and credit cards for accurate financial reporting.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <h3 className="font-semibold text-slate-100">Financial Analysts</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Analyze spending patterns and cash flow trends. Convert historical statements 
                into structured data for forecasting and financial modeling.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <h3 className="font-semibold text-slate-100">Loan Officers & Underwriters</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Speed up loan application processing. Extract and verify bank statement data 
                quickly for mortgage, business, or personal loan applications.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-100">
            Frequently Asked Questions About Bank Statement Conversion
          </h2>
          <div className="mt-8 space-y-4">
            <details className="group rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <summary className="cursor-pointer font-medium text-slate-100 text-sm list-none flex items-center justify-between">
                How accurate is the bank statement converter?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                Our OCR technology achieves 98%+ accuracy on standard bank statement formats. 
                The system recognizes transactions from major banks worldwide and handles various 
                PDF layouts, including scanned documents and digital statements.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <summary className="cursor-pointer font-medium text-slate-100 text-sm list-none flex items-center justify-between">
                Is my financial data secure?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                Yes. We use bank-level 256-bit SSL encryption for all data transfers. Your bank 
                statements are processed in secure cloud servers and automatically deleted after 
                conversion. We never store or share your financial information.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <summary className="cursor-pointer font-medium text-slate-100 text-sm list-none flex items-center justify-between">
                Which bank statement formats are supported?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                StatementFlow supports PDF bank statements from over 200 banks worldwide, including 
                Chase, Bank of America, Wells Fargo, HSBC, Barclays, and more. We handle both 
                digital PDFs and scanned documents.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <summary className="cursor-pointer font-medium text-slate-100 text-sm list-none flex items-center justify-between">
                Can I convert multiple bank statements at once?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                Yes! Our batch processing feature allows you to upload and convert dozens of 
                bank statements simultaneously. Perfect for accountants handling multiple clients 
                or businesses with several bank accounts.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <summary className="cursor-pointer font-medium text-slate-100 text-sm list-none flex items-center justify-between">
                What file formats can I export to?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                You can export converted bank statements to Excel (.xlsx), CSV, JSON, or connect 
                directly to accounting software via our API. All formats preserve transaction 
                details including dates, descriptions, amounts, and balances.
              </p>
            </details>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-100">
            Trusted by Finance Professionals
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                ★★★★★
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                &ldquo;StatementFlow saved our accounting firm countless hours. We process 50+ client 
                statements monthly and the accuracy is incredible. Highly recommended!&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-sky-500/20 flex items-center justify-center text-xs font-semibold text-sky-300">
                  SA
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-200">Sarah Anderson</p>
                  <p className="text-[10px] text-slate-500">Senior Accountant</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                ★★★★★
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                &ldquo;As a small business owner, this tool is a game-changer. No more manual data 
                entry. I can convert my statements and get back to running my business.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-semibold text-emerald-300">
                  MJ
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-200">Michael Johnson</p>
                  <p className="text-[10px] text-slate-500">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                ★★★★★
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                &ldquo;The batch processing feature is perfect for our loan department. We can verify 
                applicant statements in minutes instead of hours. Great ROI!&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-semibold text-purple-300">
                  EL
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-200">Emily Lopez</p>
                  <p className="text-[10px] text-slate-500">Loan Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 rounded-2xl border border-sky-500/30 bg-linear-to-br from-sky-500/10 to-cyan-500/10 p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-100">
            Ready to Transform Your Bank Statement Processing?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
            Join thousands of accountants, bookkeepers, and finance professionals who save hours 
            every week with StatementFlow. Start your free trial today—no credit card required.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#register"
              className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400"
            >
              Start free trial
            </Link>
            <Link
              href="/#pricing"
              className="rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-100 hover:bg-slate-800"
            >
              View pricing
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-800 pt-12 pb-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-xs font-bold text-sky-300">
                  SF
                </div>
                <span className="text-sm font-semibold text-slate-100">StatementFlow</span>
              </div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                Professional bank statement converter for accountants and finance teams. 
                Convert PDF to Excel instantly.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-100">Product</h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li><Link href="#features" className="hover:text-sky-400">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-sky-400">Pricing</Link></li>
                <li><Link href="#how-it-works" className="hover:text-sky-400">How it works</Link></li>
                <li><Link href="/dashboard" className="hover:text-sky-400">Dashboard demo</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-100">Resources</h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li><Link href="/blog" className="hover:text-sky-400">Blog</Link></li>
                <li><Link href="/help" className="hover:text-sky-400">Help center</Link></li>
                <li><Link href="/api" className="hover:text-sky-400">API docs</Link></li>
                <li><Link href="/security" className="hover:text-sky-400">Security</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-100">Company</h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li><Link href="/about" className="hover:text-sky-400">About us</Link></li>
                <li><Link href="/contact" className="hover:text-sky-400">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-sky-400">Privacy policy</Link></li>
                <li><Link href="/terms" className="hover:text-sky-400">Terms of service</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © 2025 StatementFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <Link href="/sitemap" className="hover:text-sky-400">Sitemap</Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-sky-400">Accessibility</Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "StatementFlow",
            "applicationCategory": "FinanceApplication",
            "offers": {
              "@type": "Offer",
              "price": "9.00",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "287"
            },
            "description": "Convert bank statements from PDF to Excel instantly. Extract transaction data, analyze spending patterns, and export to multiple formats."
          })
        }}
      />
    </main>
  );
}
