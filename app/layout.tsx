import type { Metadata } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-bodoni", // token name kept so globals.css needs no change
  display: "swap",
});

const sans = Syne({
  subsets: ["latin"],
  variable: "--font-dmsans", // token name kept so globals.css needs no change
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bikram J Singh Photography — Wedding photography & films",
  description: "Wedding photography and films that keep the day the way it felt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}