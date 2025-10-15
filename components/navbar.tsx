"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/legado", label: "Legado" },
    { href: "/equipo", label: "Equipo" },
    { href: "/galeria", label: "Galería de Impacto" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#556B2F]/95 backdrop-blur-md shadow-lg" : "bg-[#556B2F]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <img src="/ico.ico" alt="Vikasa icon" className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-glow" />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#E0A000' }}>
              VIKĀSA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 hover:scale-110 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden relative overflow-hidden animate-in slide-in-from-top duration-300">
            {/* Clean subtle overlay */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md border-t border-border/50" />

            <div className="relative py-4 px-4">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group block animate-in slide-in-from-left duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02]">
                      {/* Subtle left accent */}
                      <div className="w-1 h-6 bg-primary/30 rounded-full transition-all duration-200 group-hover:h-8 group-hover:bg-primary" />
                      
                      {/* Content */}
                      <div className="flex-1">
                        <span className="text-base font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                          {link.label}
                        </span>
                      </div>

                      {/* Arrow indicator */}
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-110">
                        <div className="w-1.5 h-1.5 border-r border-t border-muted-foreground rotate-45 transition-colors duration-200 group-hover:border-primary" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Simple bottom accent */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                  <span>VIKĀSA</span>
                  <div className="w-1 h-1 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '500ms' }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
