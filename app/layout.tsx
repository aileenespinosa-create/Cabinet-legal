import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinetlegal.com.do"),
  title: {
    default: "Cabinet Legal",
    template: "%s | Cabinet Legal",
  },
  description: "Asesoría legal estratégica en República Dominicana",
  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Cabinet Legal",
  url: "https://cabinetlegal.com.do",
  logo: "https://cabinetlegal.com.do/logo-cabinet-legal.jpg",
  image: "https://cabinetlegal.com.do/hero-legal.jpg",
  email: "info@cabinetlegal.com.do",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla",
    addressLocality: "Santo Domingo de Guzmán",
    addressRegion: "Distrito Nacional",
    addressCountry: "DO",
  },
  areaServed: {
    "@type": "Country",
    name: "Dominican Republic",
  },
  priceRange: "$$",
  knowsLanguage: ["es", "en"],
  sameAs: [] as string[],
  founder: [
    {
      "@type": "Person",
      name: "Aileen Espinosa",
      jobTitle: "Managing Partner",
    },
    {
      "@type": "Person",
      name: "Ellis Beato",
      jobTitle: "Founding Partner",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
      </head>
      <body>
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
