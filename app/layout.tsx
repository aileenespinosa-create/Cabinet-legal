import "./globals.css";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Cabinet Legal",
  description: "Asesoría legal estratégica en República Dominicana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased bg-[#fcfaf6] text-[#0f2740]">
        {children}

        {/* BOTÓN WHATSAPP GLOBAL */}
        <WhatsAppButton />
      </body>
    </html>
  );
}