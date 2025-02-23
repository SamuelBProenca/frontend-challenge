import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { MyHeader } from "../components/header";
import { FilterBar } from "../components/filter-bar";
import { FilterContextProvider } from "../context/filter-context"; // Certifique-se de que este caminho está correto

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className}`}>
        <FilterContextProvider>
          <MyHeader />
          {children}

        </FilterContextProvider>
      </body>
    </html>
  );
}
