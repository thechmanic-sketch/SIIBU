import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import MenuOverlay from "@/components/MenuOverlay";
import MiniPlayer from "@/components/MiniPlayer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import { PlayerProvider } from "@/lib/PlayerContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIIBU",
  description: "Artist, actor, and musician — official portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-umber">
        <PlayerProvider>
          <Preloader />
          <CustomCursor />
          <MenuOverlay />
          <SmoothScroll>{children}</SmoothScroll>
          <MiniPlayer />
        </PlayerProvider>
      </body>
    </html>
  );
}
