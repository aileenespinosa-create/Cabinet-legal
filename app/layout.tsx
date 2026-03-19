import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabinet Legal | Firma de abogados en República Dominicana",
  description:
    "Firma de abogados en República Dominicana con enfoque corporativo, propiedad intelectual, litigios y asesoría estratégica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}