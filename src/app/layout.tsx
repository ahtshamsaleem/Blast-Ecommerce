import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Load Arboria as main font
const arboria = localFont({
  src: "../../public/fonts/Arboria-Medium.ttf",
  variable: "--font-main",
});

// Load Arco as heading font
const arco = localFont({
  src: "../../public/fonts/ARCO.ttf",
  variable: "--font-arco",
});

export const metadata: Metadata = {
  title: "Your Site",
  description: "Using Arboria & Arco fonts",
};







export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${arboria.variable} ${arco.variable}`}>
      <body className="antialiased">
             
        {children}

        
              <Footer />
      </body>
    </html>
  );
}