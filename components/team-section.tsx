"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"

const teamMembers = [
  {
    name: "Estefanía Bedoya Muñoz",
    description: "Yo soy una mujer amorosa, valiente, segura, y decidida.",
    image: "https://ik.imagekit.io/6hr1tcsm9/tefa.jpg?updatedAt=1759956588939?height=200&width=200",
    initials: "EB",
    color: "from-primary to-primary/70",
  },
  {
    name: "Juan José Ortiz Guarín",
    description: "Yo soy un hombre valiente, exitoso y poderoso",
    image: "https://ik.imagekit.io/6hr1tcsm9/Juan%20Jose.jpg?updatedAt=1759964233346?height=200&width=200",
    initials: "JO",
    color: "from-secondary to-secondary/70",
  },
  {
    name: "Maria Nancy Buitrago Muñoz",
    description: "Yo soy una mujer lider, empoderada y amorosa",
    image: "https://ik.imagekit.io/6hr1tcsm9/Nancy.jpg?updatedAt=1759964939495?height=200&width=200",
    initials: "MB",
    color: "from-accent to-accent/70",
  },
  {
    name: "Gloria Elena López Moreno",
    description: "Yo soy una mujer amorosa, poderosa y abundante",
    image: "https://ik.imagekit.io/6hr1tcsm9/Gloria.jpg?updatedAt=1759964715455?height=200&width=200",
    initials: "GL",
    color: "from-primary to-secondary",
  },
  {
    name: "Mariana Rodríguez Ocampo",
    description: "Yo soy una mujer fuerte, exitosa, abundante y amorosa",
    image: "https://ik.imagekit.io/6hr1tcsm9/Mariana.jpg?updatedAt=1759964636600?height=200&width=200",
    initials: "MR",
    color: "from-secondary to-accent",
  },
  {
    name: "Danilo Medina Montes",
    description: "Yo soy un hombre amoroso, resiliente y poderoso",
    image: "https://ik.imagekit.io/6hr1tcsm9/Danilo.jpg?updatedAt=1759964055216?height=200&width=200",
    initials: "DM",
    color: "from-accent to-primary",
  },
  {
    name: "Fabian Cedano",
    description: "yo soy un hombre exitoso, amoroso respetuoso y leal",
    image: "https://ik.imagekit.io/6hr1tcsm9/Fabian.jpg?updatedAt=1759938711286?height=200&width=200",
    initials: "FC",
    color: "from-primary to-primary/70",
  },
  {
    name: "Franklin Oswaldo Gamba Ayala",
    description: "yo soy un hombre Exitoso, Lider y Comprometido",
    image: "https://ik.imagekit.io/6hr1tcsm9/Franklin.jpg?updatedAt=1759938711532?height=200&width=200",
    initials: "FG",
    color: "from-secondary to-secondary/70",
  },
  {
    name: "Juliana Bustamante Arango",
    description: "Yo soy una mujer amorosa, decidida, disciplinada y espontánea",
    image: "https://ik.imagekit.io/6hr1tcsm9/Juliana.jpg?updatedAt=1759938711433?height=200&width=200",
    initials: "JB",
    color: "from-accent to-accent/70",
  },
  {
    name: "Daniela Tamayo Fandiño",
    description: "Yo soy una mujer valiente, amorosa, segura y exitosa",
    image: "https://ik.imagekit.io/6hr1tcsm9/Daniela.jpg?updatedAt=1759938711553?height=200&width=200",
    initials: "DT",
    color: "from-primary to-secondary",
  },
  {
    name: "Juan Pablo Ospina Suárez",
    description: "Yo soy un hombre creativo, decidido, enfocado y exitoso",
    image: "https://ik.imagekit.io/6hr1tcsm9/Juan%20pablo.jpg?updatedAt=1759956588827?height=200&width=200",
    initials: "JO",
    color: "from-secondary to-accent",
  },
  {
    name: "Luz Karime Arango Ríos",
    description: "Yo soy una mujer poderosa, amorosa y soñadora",
    image: "https://ik.imagekit.io/6hr1tcsm9/Luzka.jpg?updatedAt=1759956588966?height=200&width=200",
    initials: "LA",
    color: "from-accent to-primary",
  },
  {
    name: "Juan Carlos Arias Giraldo",
    description: "yo soy un hombre exitoso, determinado, empático y amoroso",
    image: "https://ik.imagekit.io/6hr1tcsm9/Juan%20Carlos.jpg?updatedAt=1759938711367?height=200&width=200",
    initials: "JA",
    color: "from-primary to-primary/70",
  },
  {
    name: "Laura Daniela Londoño",
    description: "Yo soy una mujer exitosa, abundante y leal",
    image: "https://ik.imagekit.io/6hr1tcsm9/Laura.jpg?updatedAt=1759950544597?height=200&width=200",
    initials: "LL",
    color: "from-secondary to-secondary/70",
  },
  {
    name: "John Fredy Álvarez Ocampo",
    description: "Yo soy un Hombre Empoderado, Libre, Apasionado y Éxitoso",
    image: "https://ik.imagekit.io/6hr1tcsm9/Fredy.jpg?updatedAt=1759964355810?height=200&width=200",
    initials: "JA",
    color: "from-accent to-accent/70",
  },
  {
    name: "Luz Stella Valencia Campuzano",
    description: "YO SOY UNA MUJER ABUNDANTE, ÉXITOSA Y AMOROSA",
    image: "https://ik.imagekit.io/6hr1tcsm9/luz%20stella.jpg?updatedAt=1759964486087?height=200&width=200",
    initials: "LV",
    color: "from-primary to-secondary",
  },
  {
    name: "Gilma Rosa Gomez",
    description: "Yo soy una mujer generosa, cariñosa y exitosa",
    image: "https://ik.imagekit.io/6hr1tcsm9/Gilma.jpg?updatedAt=1759938711489?height=200&width=200",
    initials: "GG",
    color: "from-secondary to-accent",
  },
  {
    name: "Leonardo Palomino",
    description: "Yo soy un hombre coherente, exitoso, comprometido y amoroso",
    image: "https://ik.imagekit.io/6hr1tcsm9/Leo.jpg?updatedAt=1759938711290?height=200&width=200",
    initials: "LP",
    color: "from-accent to-primary",
  },
  {
    name: "Lina Marcela Muñoz Duque",
    description: "Yo soy una Mujer Visionaria, Determinada y Compasiva",
    image: "https://ik.imagekit.io/6hr1tcsm9/Lina.jpg?updatedAt=1759938711547?height=200&width=200",
    initials: "LM",
    color: "from-primary to-primary/70",
  },
  {
    name: "Paula Andrea Escobar Cardona",
    description: "Yo soy una mujer libre, amorosa y comprometida",
    image: "https://ik.imagekit.io/6hr1tcsm9/Paula.jpg?updatedAt=1759938711519?height=200&width=200",
    initials: "PE",
    color: "from-secondary to-secondary/70",
  },
  {
    name: "Ruby Galvis Osorio",
    description: "Yo soy una mujer lider, segura y exitosa",
    image: "https://ik.imagekit.io/6hr1tcsm9/Ruby.jpg?updatedAt=1759965010712?height=200&width=200",
    initials: "RG",
    color: "from-accent to-accent/70",
  },
  {
    name: "Mariluz Medina Arango",
    description: "Yo soy una mujer fuerte, segura, decidida y amorosa",
    image: "https://ik.imagekit.io/6hr1tcsm9/MariLuz.jpg?updatedAt=1759938711506?height=200&width=200",
    initials: "MM",
    color: "from-primary to-secondary",
  },
  {
    name: "Cristian Arias",
    description: "Yo soy un hombre próspero, exitoso y poderoso.",
    image: "https://ik.imagekit.io/6hr1tcsm9/3d682b36-e616-4f78-9d68-c4cf36e79098.jpg?updatedAt=1759964197231?height=200&width=200",
    initials: "CA",
    color: "from-secondary to-accent",
  },
  {
    name: "Ana Milena Alvarez Bray",
    description: "Yo soy una mujer Amorosa, decidida, valiente y exitosa",
    image: "https://ik.imagekit.io/6hr1tcsm9/Ana.jpg?updatedAt=1759964451349?height=200&width=200",
    initials: "AA",
    color: "from-accent to-primary",
  },
]

export function TeamSection() {
  return (
    <section className="pt-8 md:pt-16 pb-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Users className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-primary">Nuestro Equipo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-balance">
              Quienes Hacen Posible Cada Sonrisa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un equipo apasionado dedicado a crear impacto social positivo
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col"
            >
              <div className="p-8 flex flex-col items-center text-center space-y-4 flex-1">
                {/* Avatar with gradient ring */}
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110`}
                  />
                  <div
                    className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${member.color} p-1 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Avatar className="w-full h-full border-4 border-background">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary/20 to-secondary/20">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{member.description}"</p>
                </div>

                {/* Hover effect */}
                <div className="h-6 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs text-primary font-medium">
                      <div className="flex items-center gap-2">
                        <img src="/ico.ico" alt="icon" className="w-4 h-4 object-contain" />
                        VIKĀSA
                      </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
