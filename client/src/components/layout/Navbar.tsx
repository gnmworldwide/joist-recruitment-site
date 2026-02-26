import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Employers", path: "/employers" },
    { name: "Candidates", path: "/candidates" },
    { name: "Sectors", path: "/sectors" },
    { name: "About", path: "/about" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
            <div className="w-3 h-3 bg-background -rotate-45" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            Joist<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="default" className="rounded-none bg-primary hover:bg-primary/90 text-white font-semibold">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={closeMenu}
              className={`text-lg font-medium ${
                location === link.path ? "text-primary" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu}>
            <Button className="w-full rounded-none bg-primary text-white font-bold h-12">
              Contact Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}