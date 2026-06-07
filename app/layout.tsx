import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diz Osteoartriti - Tedavi ve Rehabilitasyon Rehberi",
  description: "Diz osteoartriti hakkında bilgi, tedavi yöntemleri ve rehabilitasyon egzersizleri. Ortopedi ve fizik tedavi iş birliği ile diz OA yönetimi.",
  keywords: "diz osteoartriti, kireçlenme, ortopedi, fizik tedavi, rehabilitasyon, egzersiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
