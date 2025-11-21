import Sidebar from "@/components/layout/sidebar";
import DashboardHeader from "@/components/layout/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 px-4 pb-8 pt-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
