import { Button } from "@/components/Button";
import { ButtonOut } from "@/components/Button-Out";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 z-50 border-b border-border/50 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          <span className="text-primary">W</span>G
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 ml-19 md:flex">
          <div className="glass rounded-full px-2 py-1 flex justify-center items-start gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" className="font-semibold gap-2 text-secondary border-border hover:bg-primary/30 hover:scale-105 transition-all duration-400">
            <a href="#contact">
            Contact Me
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animation-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button size="sm" className="w.full mt-4 text-secondary hover:bg-primary/30 hover:scale-105 transition-all duration-400">
              <a
                href="#contact"
                className="flex items-center gap-2 font-semibold"
              >
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
