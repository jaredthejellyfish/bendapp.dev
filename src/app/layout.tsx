import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${satoshi.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
