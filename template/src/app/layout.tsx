import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"
      ></Script>
      <body className={inter.className}>
        {/* <header>Header</header> */}
        {children}
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  );
}
