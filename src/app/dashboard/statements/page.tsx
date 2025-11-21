import { FileText, Download, Trash2 } from "lucide-react";

export default function StatementsPage() {
  const statements = [
    { id: 1, name: "November_2025_Statement.pdf", date: "Nov 1, 2025", size: "2.4 MB", status: "Processed" },
    { id: 2, name: "October_2025_Statement.pdf", date: "Oct 1, 2025", size: "2.1 MB", status: "Processed" },
    { id: 3, name: "September_2025_Statement.pdf", date: "Sep 1, 2025", size: "2.3 MB", status: "Processed" },
    { id: 4, name: "August_2025_Statement.pdf", date: "Aug 1, 2025", size: "2.2 MB", status: "Processed" },
    { id: 5, name: "July_2025_Statement.pdf", date: "Jul 1, 2025", size: "2.5 MB", status: "Processed" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-100">
            Bank Statements
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Manage your uploaded bank statements and conversions.
          </p>
        </div>
        <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400">
          Upload New Statement
        </button>
      </div>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs text-slate-400">
                <th className="pb-3 font-medium">File Name</th>
                <th className="pb-3 font-medium">Upload Date</th>
                <th className="pb-3 font-medium">Size</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {statements.map((statement) => (
                <tr key={statement.id} className="hover:bg-slate-800/30">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-200">{statement.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-slate-400">{statement.date}</td>
                  <td className="py-4 text-slate-400">{statement.size}</td>
                  <td className="py-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400">
                      {statement.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300">
                        <Download className="h-3 w-3" />
                        Download
                      </button>
                      <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-rose-400">
                        <Trash2 className="h-3 w-3" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
