import TransactionsTable from "@/components/dashboard/transactions-table";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            All Transactions
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            View and manage all your bank transactions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search transactions..."
            className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:border-sky-500"
          />
          <button className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
            Filter
          </button>
          <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400">
            Export
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-4">
          <p className="text-xs text-slate-600 dark:text-slate-400">Total Transactions</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">1,247</p>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-4">
          <p className="text-xs text-slate-600 dark:text-slate-400">Average Transaction</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-600 dark:text-emerald-400">$432.50</p>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-4">
          <p className="text-xs text-slate-600 dark:text-slate-400">Categories</p>
          <p className="mt-2 text-2xl font-semibold text-sky-600 dark:text-sky-400">12</p>
        </div>
      </div>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
        <TransactionsTable />
      </section>
    </div>
  );
}
