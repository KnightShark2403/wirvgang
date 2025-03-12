import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Saturn from "./ui/saturn";
import Bunny from "./ui/bunny";
import Concrete from "./ui/concrete";
import Nin from "./ui/ninswitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Workshop Project",
  description: "A fun project born out of boredom and creativity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-red-600 to-red-800 text-white min-h-screen`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative">
          <div className="p-6 flex items-center justify-center">
            <div className="w-full h-full">
              <Concrete />
            </div>
          </div>
          
          <div className="p-6 flex items-center justify-center">
            <div className="w-full h-full">
            {/* Saturn in Section 2 (Top Right) */}
            <Saturn />
            </div>
          </div>
          
          <div className="p-6 flex items-center justify-center">
              <Bunny />
          
          </div>
          
          <div className="p-6 flex items-center justify-center">
            <Nin />
          </div>
        </div>
        
        {/* Main content from page.tsx */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="pointer-events-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}