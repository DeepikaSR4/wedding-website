import type { Metadata } from "next";
import "./globals.css";
import Hearts from "@/components/Hearts";

export const metadata: Metadata = {
  title: "Ajinkrisha & Anusree",
  description: "Wedding Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Playwrite+US+Modern:wght@100;200;300;400&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body>
        <Hearts />
        {children}
      </body>
    </html>
  );
}
