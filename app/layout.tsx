import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { Leaf } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ATHMA Wellness Sanctuary",
  description: "Holistic wellness and healing services in Dubai",
  generator: "v0.dev",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                {/* <Leaf className="h-8 w-8 text-sage-600" /> */}
                <Image width={64} height={64} src="/logo.jpeg" alt="logo" />
                <h1 className="text-2xl font-serif text-stone-800">
                  ATHMA Wellness Sanctuary
                </h1>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <span className="text-stone-600 cursor-default">About</span>
                <span className="text-stone-600 cursor-default">Services</span>
                <span className="text-stone-600 cursor-default">
                  Testimonials
                </span>
                <span className="text-stone-600 cursor-default">Contact</span>
                <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                  Book a Session
                </Button>
              </nav>

              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
