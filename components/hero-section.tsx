"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Gift } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <img
          src="https://ik.imagekit.io/6hr1tcsm9/superheroes.jpg?updatedAt=1759951937263"
          alt="Niños felices en jornada lúdica"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-32 left-4 md:top-40 md:left-10 animate-float">
          <Heart className="w-10 h-10 md:w-16 md:h-16 text-accent/40" />
        </div>
        <div className="absolute top-48 right-4 md:top-60 md:right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Users className="w-12 h-12 md:w-20 md:h-20 text-primary/40" />
        </div>
        <div
          className="absolute bottom-32 left-4 md:bottom-32 md:left-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Gift className="w-10 h-10 md:w-14 md:h-14 text-secondary/40" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full animate-in fade-in slide-in-from-top duration-700">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-primary text-center">
              PL 52 Vikāsa - Crecimiento y Servicio
            </span>
          </div>

          {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              <span
                className="block text-primary"
                style={{
                  // white outline simulated with several small white shadows + dark blur for contrast
                  textShadow:
                    '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 6px 18px rgba(0,0,0,0.32)'
                }}
              >
                ¡Jornada Lúdica:
              </span>
              <span
                className="block text-secondary"
                style={{
                  textShadow:
                    '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 6px 18px rgba(0,0,0,0.32)'
                }}
              >
                Regala Sonrisas y
              </span>
              <span
                className="block text-accent"
                style={{
                  textShadow:
                    '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 6px 18px rgba(0,0,0,0.32)'
                }}
              >
                Multiplica Alegría!
              </span>
            </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-200 text-pretty px-2">
            Vive con nosotros un día de unión, servicio y diversión para los niños y comunidades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-700 delay-300 px-2">
            <Link href="/legado" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                Únete a nuestra jornada
              </Button>
            </Link>
            <Link href="/equipo" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Conoce a nuestro equipo
              </Button>
            </Link>
            <Link href="/galeria" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#E0A000'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(224, 160, 0, 0.9)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#E0A000';
                }}
              >
                Rostros del cambio
              </Button>
            </Link>
            <Link href="/contacto" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contáctanos
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-8 md:pt-12 animate-in fade-in slide-in-from-bottom duration-700 delay-400 px-2">
            {[
              { icon: Heart, label: "Sonrisas", value: "100+" },
              { icon: Users, label: "Voluntarios", value: "20+" },
              { icon: Gift, label: "Donaciones", value: "30+" },
              { icon: Users, label: "Comunidades", value: "5+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
