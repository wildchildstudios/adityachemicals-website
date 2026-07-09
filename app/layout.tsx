import type { Metadata } from "next";
import { Manrope, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aditya Chemicals | GMP Certified API & Chelated Minerals Manufacturer",
    template: "%s | Aditya Chemicals"
  },
  description: "Aditya Chemicals is a leading global API & Chelated Minerals manufacturer. FDA-registered & GMP-certified bulk supplier of Amino Acids, Excipients, and Vitamins to the USA, UK, Europe, and Asia.",
  keywords: [
    "chemical manufacturer", "API manufacturing company", "bulk chelated minerals supplier", 
    "amino acids exporter", "GMP certified factory", "FDA registered chemical plant", 
    "USA chemical supplier", "Europe chemical exporter", "UK compliant chemical manufacturing"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${hankenGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
