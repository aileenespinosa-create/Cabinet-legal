import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabinet Legal | Firma de Abogados en República Dominicana",
  description:
    "Firma de abogados en República Dominicana especializada en derecho corporativo, inmobiliario, litigios y propiedad intelectual.",
  verification: {
    google: "AQUI_TU_CODIGO",
  },
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