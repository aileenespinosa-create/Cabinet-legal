import "./globals.css";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

eexport const metadata = {
  title: "Cabinet Legal",
  description: "Asesoría legal estratégica en República Dominicana",
  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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