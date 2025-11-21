import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StatementFlow - Convert Bank Statements to Excel | PDF to Data Converter",
  description: "Transform PDF bank statements into searchable Excel spreadsheets. Fast, secure bank statement converter for finance teams. Upload statements, extract transactions, analyze data instantly.",
  keywords: ["bank statement converter", "PDF to Excel", "statement parser", "financial data extraction", "transaction analyzer", "bank statement software"],
  openGraph: {
    title: "StatementFlow - Bank Statement PDF to Excel Converter",
    description: "Convert bank statements from PDF to Excel in seconds. Extract transactions, analyze patterns, export clean data.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
