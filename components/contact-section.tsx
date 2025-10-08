"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

function FormBlock() {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Require all fields
    if (!name.trim() || !subject.trim() || !message.trim()) {
      // Shouldn't happen because button is disabled, but guard anyway
      alert("Por favor completa Nombre, Asunto y Mensaje antes de enviar.")
      return
    }

    // Build WhatsApp message
    const lines = []
    lines.push(`Nombre: ${name}`)
    lines.push(`Asunto: ${subject}`)
    lines.push(`Mensaje: ${message}`)

    const text = encodeURIComponent(lines.join("\n"))

    // Default number: organization WhatsApp (international format without +), change if needed
    const waNumber = "573122208918"
    const href = `https://wa.me/${waNumber}?text=${text}`

    window.open(href, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nombre Completo
        </label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" className="border-2 focus:border-primary transition-colors" />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Asunto
        </label>
        <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="¿En qué podemos ayudarte?" className="border-2 focus:border-primary transition-colors" />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensaje
        </label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Cuéntanos cómo quieres ayudar..." rows={5} className="border-2 focus:border-primary transition-colors resize-none" />
      </div>

      <div className="md:col-span-2">
        <Button
          type="submit"
          size="lg"
          disabled={!name.trim() || !subject.trim() || !message.trim()}
          className={`w-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 flex items-center justify-center gap-3 py-4 ${
            !name.trim() || !subject.trim() || !message.trim()
              ? "opacity-50 cursor-not-allowed hover:scale-100"
              : "hover:bg-primary/90 hover:shadow-xl hover:scale-105"
          }`}
          aria-disabled={!name.trim() || !subject.trim() || !message.trim()}
        >
          {/* WhatsApp SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 .04 5.33.04 12c0 2.11.55 4.17 1.59 5.98L0 24l5.15-1.69A11.95 11.95 0 0 0 12 24c6.63 0 11.96-5.33 11.96-12 0-1.99-.5-3.86-1.44-5.52z" fill="#25D366" />
            <path d="M17.56 14.51c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14s-.73.94-.9 1.13c-.16.19-.33.21-.62.07-.29-.14-1.23-.45-2.34-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.44-.5.15-.17.2-.29.3-.49.1-.19.05-.36-.03-.5-.08-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.48-.16 0-.35-.02-.54-.02s-.5.07-.76.36c-.26.29-1 1-1 2.43s1.03 2.82 1.18 3.02c.15.19 2.05 3.12 4.97 4.37 1.17.5 2.08.8 2.79 1.02.88.28 1.68.24 2.31.15.71-.11 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.17-.55-.3z" fill="#fff" />
          </svg>
          <span>Enviar mensaje</span>
        </Button>
      </div>
    </form>
  )
}

export function ContactSection() {
  return (
    <section id="contacto" className="pt-8 md:pt-16 pb-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-balance">
              ¿Quieres Unirte o Apoyar Nuestras Jornadas?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Contáctanos y sé parte del cambio que quieres ver en el mundo
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Contact Form */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envíanos un Mensaje</h3>
            <FormBlock />
          </Card>

          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Otras Formas de Contacto</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Email */}
              <a
                href="mailto:contacto@vikasa.org"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold text-foreground truncate">vikasapl52@gmail.com</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+573122208918"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-secondary/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Teléfono</div>
                  <div className="font-semibold text-foreground">+57 312 220 8918</div>
                </div>
              </a>

              {/* Location (Pereira) */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pereira%2C+Colombia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-accent/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Ubicación</div>
                  <div className="font-semibold text-foreground">Pereira, Colombia</div>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1BfKy1vdtJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors flex-shrink-0">
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Síguenos en</div>
                  <div className="font-semibold text-foreground">Facebook</div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vikasapl52?igsh=MXQwcWgxZnZyOGY2Mg=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors flex-shrink-0">
                  <Instagram className="w-6 h-6 text-secondary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Síguenos en</div>
                  <div className="font-semibold text-foreground">Instagram</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/573122208918?text=${encodeURIComponent("Hola! Me contacto desde la web de Vikāsa. Quisiera recibir más información.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">Escríbenos por</div>
                  <div className="font-semibold text-foreground">WhatsApp</div>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
