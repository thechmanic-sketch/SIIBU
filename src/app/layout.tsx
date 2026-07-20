import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MenuOverlay from "@/components/MenuOverlay";
import MiniPlayer from "@/components/MiniPlayer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";
import ErrorBoundary from "@/components/ErrorBoundary";
import { PlayerProvider } from "@/lib/PlayerContext";
import { LenisProvider } from "@/lib/LenisContext";
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
          <LenisProvider>
            <ErrorBoundary
              fallback={
                <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-umber px-6 text-center text-sand">
                  <p className="text-sm text-sand/70">Something went wrong loading this page.</p>
                  <a
                    href={process.env.NEXT_PUBLIC_BASE_PATH || "/"}
                    className="text-xs uppercase tracking-widest text-ochre hover:text-sand"
                  >
                    Reload
                  </a>
                </div>
              }
            >
              <PageTransition>{children}</PageTransition>
            </ErrorBoundary>
          </LenisProvider>
          <MiniPlayer />
        </PlayerProvider>
      </body>
    </html>
  );
}
