import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '200', '300','400','500','600',]
});

export const metadata: Metadata = {
  title: "FREE WC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${roboto.className} h-full antialiased`}
    >
      <Analytics />
      <body className={` ${roboto.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
