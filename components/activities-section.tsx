"use client"

import { Card } from "@/components/ui/card"
import { Gamepad2, Gift, Coffee, UtensilsCrossed, MapPin, Calendar, Clock, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const activities = [
  {
    icon: Gamepad2,
    title: "Recreación",
    description: "Juegos, dinámicas y actividades lúdicas llenas de diversión",
    color: "from-primary to-primary/70",
  },
  {
    icon: Gift,
    title: "Ropa y Juguetes",
    description: "Donaciones de ropa y juguetes para los niños",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Coffee,
    title: "Refrigerios",
    description: "Snacks y bebidas para todos los participantes",
    color: "from-accent to-accent/70",
  },
  {
    icon: UtensilsCrossed,
    title: "Almuerzo Comunitario",
    description: "Comida compartida en un ambiente de unión y solidaridad",
    color: "from-primary to-secondary",
  },
]

export function ActivitiesSection() {
  return (
    <section className="pt-8 md:pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(76,175,80,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(33,150,243,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">¡GRAN INVITACIÓN!</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-balance">
              JORNADA LÚDICA
            </span>
          </h2>

          <p className="text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto">
            Para los niños del barrio Las Brisas – Comuna Villa Santana
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¡Queremos regalar sonrisas y compartir un día lleno de alegría!
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer"
            >
              <div className="p-6 space-y-4 flex flex-col items-center text-center">
                {/* Icon with gradient background */}
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Next Event Card */}
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden mb-8 md:mb-12">
          <div className="p-6 md:p-12 space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Detalles del Evento</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Date */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Fecha</div>
                  <div className="text-lg font-semibold text-foreground">Domingo 26 de octubre</div>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Hora</div>
                  <div className="text-lg font-semibold text-foreground">9:00 AM</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Punto de encuentro</div>
                  <div className="text-lg font-semibold text-foreground">Escuela taller Calle Ancha (mz 18)</div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
              <p className="text-center text-lg text-foreground font-medium">
                Te esperamos para vivir juntos un día de diversión, unión y solidaridad.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const waNumber = "573122208918"
                  const message = encodeURIComponent(
                    "Hola, confirmo mi asistencia a la Jornada Lúdica el domingo 26 de octubre a las 9:00 AM. ¡Muchas gracias!"
                  )
                  const href = `https://wa.me/${waNumber}?text=${message}`
                  window.open(href, "_blank")
                }}
              >
                Confirmar Asistencia
              </Button>
            </div>
          </div>
        </Card>

        {/* Donations Section */}
        <Card className="max-w-4xl mx-auto border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5 overflow-hidden">
          <div className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Donaciones</h3>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Nequi Logo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white p-3 md:p-4 shadow-lg flex items-center justify-center">
                  <img
                    src="https://ik.imagekit.io/6hr1tcsm9/nequi-logo.png?updatedAt=1759952495681"
                    alt="Nequi"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Donation Info */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <p className="text-lg text-muted-foreground">Puedes hacer tu donación por Nequi</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Smartphone className="w-5 h-5 text-accent" />
                    <span className="text-2xl font-bold text-foreground">313 7327306</span>
                  </div>
                  <p className="text-lg font-medium text-foreground">
                    A nombre de: <span className="text-primary">Juliana Bustamante</span>
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Tu aporte nos ayuda a seguir llevando alegría y esperanza a más comunidades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
