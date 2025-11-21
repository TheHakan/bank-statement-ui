"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CreditCard, TrendingUp, FileText } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Transactions", href: "/dashboard/transactions", icon: CreditCard },
    { name: "Analytics", href: "/dashboard/analytics", icon: TrendingUp },
    { name: "Statements", href: "/dashboard/statements", icon: FileText },
  ];

  return (
    <aside className="hidden w-64 border-r border-slate-800 bg-slate-900/50 lg:block">
      <div className="flex h-16 items-center gap-2 border-b border-slate-800 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-xs font-bold text-sky-300">
          SF
        </div>
        <span className="text-sm font-semibold text-slate-100">
          StatementFlow
        </span>
      </div>

      <nav className="space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-sky-500/10 text-sky-300 font-medium"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 w-64 border-t border-slate-800 p-4">
        <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
          <p className="text-xs font-medium text-slate-300">Demo Mode</p>
          <p className="mt-1 text-[10px] text-slate-500">
            This is a portfolio demo. No real data is processed.
          </p>
        </div>
      </div>
    </aside>
  );
}
