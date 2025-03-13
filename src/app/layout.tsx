import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight  : ['100', '200', '300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <link href="https://fonts.cdnfonts.com/css/uncut-sans" rel="stylesheet"/>
    <link href="https://fonts.cdnfonts.com/css/pp-neue-montreal" rel="stylesheet"/>

    </head>
      <body
        className={`${geistSans.className} ${ibmPlexMono.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
