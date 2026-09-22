"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf } from "lucide-react";
import Image from "next/image";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Services" },
    { label: "Testimonials" },
    { label: "Contact" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2" size="sm">
          <Menu className="h-6 w-6 text-stone-600" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-200">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <Image width={64} height={64} src="/logo.jpeg" alt="logo" />
              <span className="text-lg font-serif text-stone-800">
                ATHMA Wellness Sanctuary
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 mt-8">
            {navItems.map((item) => (
              <span
                key={item.label}
                className="text-lg text-stone-600 py-2 px-4 rounded-lg cursor-default"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </span>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
              Book Session
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-auto pt-8 space-y-3 text-sm text-stone-600">
            <div>
              <p className="font-medium text-stone-800">Contact</p>
              <p>+971 56 604 1875</p>
              <p>healwith@athma.ae</p>
            </div>
            <div>
              <p className="font-medium text-stone-800">Hours</p>
              <p>Mon-Sat: 8AM-6.30PM</p>
              {/* <p>Sat: 9AM-2PM</p> */}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
