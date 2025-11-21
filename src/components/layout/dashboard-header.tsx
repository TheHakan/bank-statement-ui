"use client";

import { Menu, Upload, User } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-xs font-medium text-white hover:bg-sky-400">
          <Upload className="h-3.5 w-3.5" />
          Upload Statement
        </button>
        
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
        
        <ThemeToggle />
        
        <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20">
            <User className="h-4 w-4 text-sky-600 dark:text-sky-300" />
          </div>
          <span className="hidden sm:inline text-xs">John Doe</span>
        </button>
      </div>
    </header>
  );
}
