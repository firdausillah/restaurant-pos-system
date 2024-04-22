import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aruna Resto App",
  description: "Aruna Restaurant POS System UI/UX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/aruna-resto-logo.png" sizes="any" />
      <body className="h-screen">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
