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

export const metadata = {
  title: "Corporación Técnica del Magdalena",
  description: "Nuestro objetivo es siempre ofrecer Programas de Formación para el Trabajo y el Desarrollo Humano, para crear oportunidades y mejoramiento de la calidad de vida de nuestros estudiantes y también un mayor crecimiento económico y social de la comunidad del Magdalena",
  icons: {
    icon: '/images/cotemag.png',
    shortcut: '/images/cotemag.png',
    apple: '/images/cotemag.png',
    other: {
      rel: '/apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
};

export default function RootLayout({ children }) {
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
