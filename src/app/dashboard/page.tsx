import OverviewCards from "@/components/dashboard/overview-cards";
import TransactionsTable from "@/components/dashboard/transactions-table";
import RecentActivity from "@/components/dashboard/recent-activity";
import { Upload, FileBarChart, Search, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Overview
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Welcome back! Here&apos;s your financial summary for November 2025.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs text-slate-700 dark:text-slate-300 outline-none focus:border-sky-500">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
            <option>All time</option>
          </select>
        </div>
      </div>

      <OverviewCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Recent Transactions
              </h2>
              <button className="text-xs text-sky-500 hover:text-sky-400 dark:text-sky-400 dark:hover:text-sky-300">
                View all →
              </button>
            </div>
            <TransactionsTable limit={5} />
          </section>
        </div>

        <div>
          <RecentActivity />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Spending by Category
          </h2>
          <div className="mt-4 space-y-3">
            {[
              { name: "Groceries", amount: "$1,240", percentage: 35, color: "bg-emerald-500" },
              { name: "Utilities", amount: "$820", percentage: 23, color: "bg-sky-500" },
              { name: "Entertainment", amount: "$640", percentage: 18, color: "bg-purple-500" },
              { name: "Transportation", amount: "$480", percentage: 14, color: "bg-orange-500" },
              { name: "Other", amount: "$360", percentage: 10, color: "bg-slate-500" },
            ].map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700 dark:text-slate-300">{category.name}</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{category.amount}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className={`h-full ${category.color}`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Quick Actions
          </h2>
          <div className="mt-4 space-y-3">
            <button className="flex w-full items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 p-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">
              <Upload className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-100">Upload Statement</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">Convert PDF to Excel</p>
              </div>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 p-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">
              <FileBarChart className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-100">Generate Report</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">Export analytics</p>
              </div>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 p-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">
              <Search className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-100">Search Transactions</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">Find specific entries</p>
              </div>
            </button>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="rounded-2xl border border-sky-500/30 bg-linear-to-br from-sky-500/10 to-cyan-500/10 p-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-500/20">
            <Sparkles className="h-8 w-8 text-sky-600 dark:text-sky-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Upgrade to Professional Plan
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Unlock unlimited conversions, advanced analytics, batch processing, and priority support. 
              Save hours every week with premium features.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link
              href="/#pricing"
              className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400"
            >
              View Plans
            </Link>
            <Link
              href="/#features"
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 px-5 py-2.5 text-sm font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
