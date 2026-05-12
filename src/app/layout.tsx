import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://maxime-maillary.fr"),
  title: "Portfolio de Maxime Maillary",
  description:
    "Portfolio de Maxime Maillary, étudiant en première année de Bachelor Développeur Fullstack à Coda.",
  openGraph: {
    title: "Portfolio de Maxime Maillary",
    description:
      "Portfolio de Maxime Maillary, étudiant en première année de Bachelor Développeur Fullstack à Coda.",
    url: "https://maxime-maillary.fr",
    siteName: "Maxime Maillary",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Maxime Maillary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Maxime Maillary",
    description:
      "Portfolio de Maxime Maillary, étudiant en première année de Bachelor Développeur Fullstack à Coda.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${outfit.className} bg-background text-text-primary min-h-screen`}
      >
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
