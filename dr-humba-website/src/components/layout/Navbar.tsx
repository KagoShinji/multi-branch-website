import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Signature Dish", href: "#signature" },
    { name: "Branches", href: "#branches" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-50">
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-brand-dark" : "text-white"}`}>
            Dr. <span className="text-brand-pink">Humba</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-pink ${
                  isScrolled ? "text-brand-dark/80" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button
            asChild
            className="bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full px-6"
          >
            <a href="#branches">Order Now</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-brand-dark" : "text-white"}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-none w-[300px]">
              <SheetTitle className="text-left mb-6 font-bold text-2xl">
                Dr. <span className="text-brand-pink">Humba</span>
              </SheetTitle>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-brand-dark hover:text-brand-pink transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Button className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full">
                    <a href="#branches" className="w-full">Order Now</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
