import { Wallet, TrendingUp, TrendingDown, CreditCard } from "lucide-react";

export default function OverviewCards() {
  const cards = [
    {
      title: "Total Balance",
      value: "$19,220.50",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Wallet,
    },
    {
      title: "Total Income",
      value: "$82,430.00",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
    {
      title: "Total Expenses",
      value: "$63,209.50",
      change: "-3.1%",
      changeType: "positive" as const,
      icon: TrendingDown,
    },
    {
      title: "Transactions",
      value: "1,247",
      change: "+156",
      changeType: "neutral" as const,
      icon: CreditCard,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-600 dark:text-slate-400">{card.title}</p>
              <Icon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
            </div>
          <div className="mt-3">
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{card.value}</p>
            <p
              className={`mt-1 text-xs ${
                card.changeType === "positive"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {card.change} from last month
            </p>
          </div>
        </div>
        );
      })}
    </div>
  );
}
