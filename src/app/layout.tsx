import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Boardman | Engineering Leader",
  description:
    "Engineering leader focused on AI transformation, accessibility, design systems, executive operations, and product platforms.",
  openGraph: {
    title: "Richard Boardman | Engineering Leader",
    description:
      "Engineering leader focused on AI transformation, accessibility, design systems, executive operations, and product platforms.",
    url: "https://www.richardboardman.com",
    siteName: "Richard Boardman",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
