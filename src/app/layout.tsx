import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "aura IMAGE STUDIO — Personal Image Consulting",
  description: "Your style. Your story. Your moment. Discover an approach to your image that begins with getting to know you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans bg-[#F2F7FA] text-[#1b2838] min-h-screen selection:bg-[#cbdde6] selection:text-[#0f1b26]">
        {children}
      </body>
    </html>
  );
}
