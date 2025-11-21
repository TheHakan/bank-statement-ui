import { FileText, Download, BarChart3 } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "Statement Uploaded",
      detail: "November_2025_Statement.pdf",
      time: "2 hours ago",
      icon: FileText,
      color: "bg-sky-500/20 text-sky-300",
    },
    {
      id: 2,
      action: "Export Completed",
      detail: "Transactions exported to Excel",
      time: "5 hours ago",
      icon: Download,
      color: "bg-emerald-500/20 text-emerald-300",
    },
    {
      id: 3,
      action: "Report Generated",
      detail: "Monthly analytics report",
      time: "1 day ago",
      icon: BarChart3,
      color: "bg-purple-500/20 text-purple-300",
    },
    {
      id: 4,
      action: "Statement Uploaded",
      detail: "October_2025_Statement.pdf",
      time: "2 days ago",
      icon: FileText,
      color: "bg-sky-500/20 text-sky-300",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Recent Activity</h2>
      <div className="mt-4 space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${activity.color}`}
              >
                <Icon className="h-4 w-4" />
              </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                {activity.action}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">{activity.detail}</p>
              <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-500">{activity.time}</p>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
