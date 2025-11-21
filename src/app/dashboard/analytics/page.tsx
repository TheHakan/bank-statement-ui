import { Home, ShoppingCart, Zap, Car, Shield, DollarSign, Target } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Analytics</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Deep insights into your financial patterns and trends.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Income vs Expenses
          </h2>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300">Income</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">$82,430</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full bg-emerald-500" style={{ width: "75%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300">Expenses</span>
                <span className="font-semibold text-rose-600 dark:text-rose-400">$63,210</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full bg-rose-500" style={{ width: "58%" }} />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
            <div>
              <p className="text-xs text-slate-600 dark:text-slate-400">Net Income</p>
              <p className="mt-1 text-xl font-semibold text-sky-600 dark:text-sky-400">$19,220</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 dark:text-slate-400">Savings Rate</p>
              <p className="mt-1 text-xl font-semibold text-purple-600 dark:text-purple-400">23.3%</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Monthly Trend
          </h2>
          <div className="mt-6 flex items-end justify-between gap-2" style={{ height: "200px" }}>
            {[65, 78, 52, 89, 76, 92, 68, 85, 73, 88, 95, 82].map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg bg-linear-to-t from-sky-500 to-cyan-400 transition-all hover:opacity-80"
                style={{ height: `${height}%` }}
                title={`Month ${i + 1}`}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Top Expenses
          </h2>
          <div className="mt-4 space-y-3">
            {[
              { name: "Rent/Mortgage", amount: "$2,400", icon: Home },
              { name: "Groceries", amount: "$1,240", icon: ShoppingCart },
              { name: "Utilities", amount: "$820", icon: Zap },
              { name: "Transportation", amount: "$680", icon: Car },
              { name: "Insurance", amount: "$450", icon: Shield },
            ].map((expense, i) => {
              const Icon = expense.icon;
              return (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{expense.name}</span>
                  </div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{expense.amount}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Income Sources
          </h2>
          <div className="mt-4 space-y-3">
            {[
              { name: "Salary", amount: "$5,200", percentage: 63, color: "bg-emerald-500" },
              { name: "Freelance", amount: "$2,100", percentage: 26, color: "bg-sky-500" },
              { name: "Investments", amount: "$900", percentage: 11, color: "bg-purple-500" },
            ].map((income, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700 dark:text-slate-300">{income.name}</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{income.amount}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className={`h-full ${income.color}`}
                    style={{ width: `${income.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Financial Goals
          </h2>
          <div className="mt-4 space-y-4">
            {[
              { name: "Emergency Fund", current: 8500, goal: 10000, icon: Target },
              { name: "Vacation Savings", current: 2400, goal: 5000, icon: DollarSign },
              { name: "New Car", current: 12000, goal: 25000, icon: Car },
            ].map((goal, i) => {
              const percentage = (goal.current / goal.goal) * 100;
              const Icon = goal.icon;
              return (
                <div key={i}>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                      <span className="text-slate-700 dark:text-slate-300">{goal.name}</span>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      {percentage.toFixed(0)}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className="h-full bg-linear-to-r from-sky-500 to-cyan-400"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                    ${goal.current.toLocaleString()} of ${goal.goal.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
