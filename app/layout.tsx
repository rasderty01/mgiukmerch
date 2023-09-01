import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MGiUK Merchandise Hub",
  description: "MGiUK Merchandise Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background flex flex-col h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
