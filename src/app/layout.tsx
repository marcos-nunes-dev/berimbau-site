import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { tayBirdie, tayBenditos } from "@/lib/fonts";

export const metadata: Metadata = generateSEOMetadata({
  title: "Berimbau Brazilian Table - Authentic Brazilian Restaurant NYC",
  description: "Experience authentic Brazilian cuisine at Berimbau Brazilian Table. Two NYC locations in West Village and Midtown. Brazil is a feeling - discover our cultural space where flavors become feelings and moments become memories.",
  keywords: ["brazilian restaurant", "brazilian food nyc", "west village restaurant", "midtown restaurant", "authentic brazilian cuisine", "berimbau nyc", "brazilian table", "caipirinha", "brazilian culture", "nyc dining", "reservations", "delivery"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tayBirdie.variable} ${tayBenditos.variable}`}>
      <body className="antialiased">
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSJ2JSJR');`,
          }}
        />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSJ2JSJR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  );
}