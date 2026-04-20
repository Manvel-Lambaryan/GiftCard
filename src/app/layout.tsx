import type { Metadata } from "next";
import { Manrope, Noto_Sans_Armenian, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const armenian = Noto_Sans_Armenian({
  subsets: ["armenian", "latin"],
  variable: "--font-armenian",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Neetrino Gift Card",
  description: "Use your Neetrino gift card as a direct discount on your next digital product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${manrope.variable} ${armenian.variable} ${spaceGrotesk.variable} font-manrope antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
