import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Maxime Maillary",
  description: "Portfolio de projets développeur fullstack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geist.className} bg-gray-950 text-white min-h-screen`}
      >
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
