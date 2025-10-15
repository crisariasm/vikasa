import { Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo & Tagline */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img src="/ico.ico" alt="Vikasa icon" className="w-8 h-8 object-contain" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                VIKĀSA
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fundación dedicada al crecimiento comunitario y el servicio social a través de jornadas lúdicas y
              recreativas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-foreground">Enlaces Rápidos</h3>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Inicio
              </Link>
              <Link href="/legado" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Legado
              </Link>
              <Link href="/equipo" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Equipo
              </Link>
              <Link href="/galeria" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Galería de Impacto
              </Link>
              <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Mission */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-foreground">Nuestra Misión</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crear espacios de alegría, unión y servicio que transformen comunidades y multipliquen sonrisas.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-border/50">
          <p className="text-xs md:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-2 text-center">
            <span className="flex items-center gap-2">
              Con amor y servicio
              <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            </span>
            <span>PL 52 Vikasa {currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
