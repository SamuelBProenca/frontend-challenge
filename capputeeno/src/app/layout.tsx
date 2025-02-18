import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { MyHeader } from "@/components/header";

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className}`}>
        <MyHeader />
        {children}
      </body>
    </html>
  );
}
