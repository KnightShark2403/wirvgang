import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import WasiCard from "@/components/cards/wasiCard";
import RishitCard from "@/components/cards/rishitCard";
import IshitaCard from "@/components/cards/ishitaCard";
import VetriCard from "@/components/cards/vetriCard";
import Link from "next/link";
import { FancyButton } from "@/components/ui/fancyButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team Cards | Creative Workshop Project",
  description: "Meet our talented development team!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-8`}
      >
        <FancyButton>
          <Link 
            href="/"
            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/20 hover:bg-white/20 transition-colors duration-200 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </Link>
        </FancyButton>

        <h1 className="text-4xl font-bold text-center mb-12 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Meet Our Team</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="transform transition-all duration-300 hover:scale-105">
            <WasiCard />
          </div>
          
          <div className="transform transition-all duration-300 hover:scale-105">
            <RishitCard />
          </div>
          
          <div className="transform transition-all duration-300 hover:scale-105">
            <IshitaCard />
          </div>
          
          <div className="transform transition-all duration-300 hover:scale-105">
            <VetriCard />
          </div>
        </div>
        
        {/* Main content from page.tsx */}
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}