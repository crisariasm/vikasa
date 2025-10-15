"use client"

import { Play, Heart, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState, useEffect } from "react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Responsive visible images
  const [visibleImages, setVisibleImages] = useState(4);

  const handleVideoEnded = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    video.currentTime = 0;
    video.pause();
  };

  const images = [
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3612.JPG?updatedAt=1760498307974",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3294%20(1).HEIC?updatedAt=1760498315069",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3117.HEIC?updatedAt=1760498315426",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3227.HEIC?updatedAt=1760498315276",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3343.jpg?updatedAt=1760498315119",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3239.HEIC?updatedAt=1760498315120",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3266.HEIC?updatedAt=1760498314670",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3210.HEIC?updatedAt=1760498314255",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3259.HEIC?updatedAt=1760498314123",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_2876.HEIC?updatedAt=1760498314036",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_2877.HEIC?updatedAt=1760498314745",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/superheroes.png?updatedAt=1760498309962",
    "https://ik.imagekit.io/6hr1tcsm9/carrusel%20vikasa/IMG_3298.HEIC?updatedAt=1760498315589"
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  // Carousel navigation functions
  const nextCarouselImage = () => {
    setCurrentImageIndex((prev) => {
      const maxIndex = images.length - visibleImages;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevCarouselImage = () => {
    setCurrentImageIndex((prev) => {
      const maxIndex = images.length - visibleImages;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentImageIndex(slideIndex * visibleImages);
  };

  // Responsive behavior
  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(1); // Mobile: 1 image
      } else if (window.innerWidth < 1024) {
        setVisibleImages(2); // Tablet: 2 images
      } else {
        setVisibleImages(4); // Desktop: 4 images
      }
    };

    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);
    return () => window.removeEventListener('resize', updateVisibleImages);
  }, []);

  // Reset carousel when visibleImages changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [visibleImages]);

  const videos = [
    {
      id: 1,
      title: "Juntos podemos hacer más",
      url: "https://ik.imagekit.io/6hr1tcsm9/IMG_3510.MOV/ik-video.mp4?updatedAt=1760459059097", 
      description: "La fuerza del trabajo en equipo y la unión comunitaria para lograr cambios positivos duraderos."
    },
    {
      id: 2,
      title: "Pequeños gestos que transforman días",
      url: "https://ik.imagekit.io/6hr1tcsm9/IMG_3077.MOV/ik-video.mp4?updatedAt=1760459064037",
      description: "Momentos especiales donde pequeñas acciones crean grandes sonrisas y transforman la vida de las familias."
    },
    {
      id: 3,
      title: "Pequeños aportes, grandes cambios", 
      url: "https://ik.imagekit.io/6hr1tcsm9/IMG_3366.MOV/ik-video.mp4?updatedAt=1760459068541",
      description: "Cómo cada contribución, por pequeña que sea, genera un impacto significativo en nuestra comunidad."
    }
  ]

  return (
    <section className="pt-8 md:pt-16 pb-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Heart className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium text-primary">Galería de Impacto</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-balance">
              Historias que Transforman Vidas
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre los momentos más especiales de nuestro impacto en la comunidad.
          </p>
        </div>

        {/* Videos Grid - Vertical Stories Format */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom w-full max-w-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Vertical Video Container */}
                <div className="relative aspect-[9/16] bg-black/5 overflow-hidden">
                  <video
                    className="w-full h-full object-cover rounded-t-2xl"
                    controls
                    preload="metadata"
                    controlsList="nodownload"
                    playsInline
                    onEnded={handleVideoEnded}
                  >
                    <source src={video.url} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>

                {/* Content */}
                <div className="p-4 bg-card">
                  <h3 className={`font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 ${
                    index === 0 ? 'text-lg' : 'text-base'
                  }`}>
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Photo Carousel */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Momentos que Dejan Huella
              </span>
            </h3>
            <p className="text-muted-foreground">
              Revive los mejores momentos de nuestras jornadas comunitarias
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevCarouselImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white shadow-lg rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextCarouselImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white shadow-lg rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentImageIndex * (100 / visibleImages)}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 px-2 cursor-pointer group`}
                    style={{ width: `${100 / visibleImages}%` }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <img
                        src={image}
                        alt={`Momento especial ${index + 1}`}
                        className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(images.length / visibleImages) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentImageIndex / visibleImages) === index
                      ? 'bg-primary scale-125'
                      : 'bg-primary/30 hover:bg-primary/60'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 bg-muted/30 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500 ease-out"
                style={{ 
                  width: `${((currentImageIndex + visibleImages) / images.length) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>

        {/* Modal/Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Main image */}
            <div className="relative max-w-4xl max-h-full">
              <img
                src={images[selectedImage]}
                alt={`Momento especial ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>

            {/* Click outside to close */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={() => setSelectedImage(null)}
            />
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Quieres ser parte de nuestra historia?
          </h3>
          <p className="text-muted-foreground mb-6">
            Únete a nuestras jornadas comunitarias y ayuda a crear más momentos de transformación y alegría.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Únete como Voluntario
            </a>
            <a 
              href="https://wa.me/573122208918?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20las%20actividades%20de%20Vikāsa%20y%20cómo%20puedo%20contribuir."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}