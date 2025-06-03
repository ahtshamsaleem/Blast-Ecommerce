import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
 import NextTopLoader from 'nextjs-toploader';


import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
 import { routing } from "@/src/i18n/routing";
 
 


// Load Arboria as main font
const arboria = localFont({
  src: "../../../public/fonts/Arboria-Medium.ttf",
  variable: "--font-main",
});

// Load Arco as heading font
const arco = localFont({
  src: "../../../public/fonts/ARCO.ttf",
  variable: "--font-arco",
});

export const metadata: Metadata = {
  title: "Your Site",
  description: "Using Arboria & Arco fonts",
};







export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {


  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${arboria.variable} ${arco.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider  >
          <NextTopLoader
            showSpinner={false}
            color="#4F46E5"
            height={3}
            shadow="0 0 10px rgba(79, 70, 229, 0.5)"
          />

          {/* Render the children components */}
        {children}

             

        </NextIntlClientProvider>

        
      </body>
    </html>
  );
}