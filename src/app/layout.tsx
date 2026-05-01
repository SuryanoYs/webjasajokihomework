import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "JasajokiHomework - Solusi Tugas Sekolah & Kuliah",
  description: "Layanan jasa joki tugas sekolah, kuliah, presentasi, makalah, dan produk digital. Cepat, Terpercaya, Bayar Setelah Selesai!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
