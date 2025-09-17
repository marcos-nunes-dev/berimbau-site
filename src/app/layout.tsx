import type { Metadata } from "next";
import "./globals.css";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { tayBirdie, tayBenditos } from "@/lib/fonts";

export const metadata: Metadata = generateSEOMetadata({
  title: "Berimbau - Your Website Title",
  description: "Your website description here",
  keywords: ["your", "keywords", "here"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tayBirdie.variable} ${tayBenditos.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}