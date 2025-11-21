const transactions = [
  { id: 1, date: "Nov 20, 2025", description: "Payroll Deposit", category: "Income", amount: 5200, type: "credit" },
  { id: 2, date: "Nov 19, 2025", description: "Amazon Purchase", category: "Shopping", amount: -89.99, type: "debit" },
  { id: 3, date: "Nov 18, 2025", description: "Electric Bill", category: "Utilities", amount: -142.50, type: "debit" },
  { id: 4, date: "Nov 17, 2025", description: "Client Payment - ACME Corp", category: "Income", amount: 8500, type: "credit" },
  { id: 5, date: "Nov 16, 2025", description: "Office Supplies", category: "Business", amount: -340.20, type: "debit" },
  { id: 6, date: "Nov 15, 2025", description: "Restaurant", category: "Dining", amount: -67.80, type: "debit" },
  { id: 7, date: "Nov 14, 2025", description: "Gas Station", category: "Transportation", amount: -52.00, type: "debit" },
  { id: 8, date: "Nov 13, 2025", description: "Grocery Store", category: "Groceries", amount: -156.45, type: "debit" },
  { id: 9, date: "Nov 12, 2025", description: "Freelance Payment", category: "Income", amount: 1250, type: "credit" },
  { id: 10, date: "Nov 11, 2025", description: "Netflix Subscription", category: "Entertainment", amount: -15.99, type: "debit" },
];

interface TransactionsTableProps {
  limit?: number;
}

export default function TransactionsTable({ limit }: TransactionsTableProps) {
  const displayedTransactions = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-800 text-xs text-slate-400">
            <th className="pb-3 font-medium">Date</th>
            <th className="pb-3 font-medium">Description</th>
            <th className="pb-3 font-medium">Category</th>
            <th className="pb-3 font-medium text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {displayedTransactions.map((transaction) => (
            <tr key={transaction.id} className="group hover:bg-slate-800/30">
              <td className="py-3 text-slate-400">{transaction.date}</td>
              <td className="py-3 text-slate-200">{transaction.description}</td>
              <td className="py-3">
                <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
                  {transaction.category}
                </span>
              </td>
              <td
                className={`py-3 text-right font-medium ${
                  transaction.type === "credit" ? "text-emerald-400" : "text-slate-200"
                }`}
              >
                {transaction.type === "credit" ? "+" : ""}
                ${Math.abs(transaction.amount).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
