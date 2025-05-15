import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LargeNavigation from "@/components/layouts/LargeNavigation";
import Footer from "@/components/layouts/Footer";

// Local fonts configuration
const proximaNova = localFont({
  src: [
    {
      path: '../../public/fonts/ProximaNova-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    // {
    //   path: '../../public/fonts/ProximaNova-Semibold.otf',
    //   weight: '600',
    //   style: 'normal',
    // },
    {
      path: '../../public/fonts/ProximaNova-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ProximaNova-Extrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-proximaNova',
  display: 'swap',
});

const interstateCond = localFont({
  src: [
    {
      path: '../../public/fonts/InterstateCondensed-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/InterstateCondensed-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-interstate',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Diego's Amazing Mock Up",
  description: "Truely just the best work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${proximaNova.variable} ${interstateCond.variable} antialiased`}
      >
        <LargeNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
