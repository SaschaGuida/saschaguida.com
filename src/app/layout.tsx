import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Orbitron.ttf",
  variable: "--font-geist-sans",
  weight: "700",
});
const geistMono = localFont({
  src: "./fonts/Orbitron.ttf",
  variable: "--font-geist-mono",
  weight: "700",
});

export const metadata: Metadata = {
  title: "SASCHA GUIDA",
  description: "WebDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
