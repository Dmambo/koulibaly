import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollToTopButton from "@/components/scrolltotop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sotrelec Afrique",
  description: "Fournissant des solutions solaires et électriques expertes adaptées aux projets résidentiels, commerciaux et industriels à travers l'Afrique de l'Ouest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        <ScrollToTopButton />
        </body>
    </html>
  );
}
