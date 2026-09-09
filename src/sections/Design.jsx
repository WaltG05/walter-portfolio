import { useState } from "react";
import { X } from "lucide-react";

const designItems = [
  {
    title: "Logo — GameCenter",
    description:
      "Identidad visual para GameCenter, tienda de juegos digitales y gift cards.",
    image: "/design/gamecenter-logo.png",
    lightBg: true,
  },
  {
    title: "Banner — Sobre Mí",
    description:
      "Banner de presentación con estética gaming, diseñado para un amigo.",
    image: "/design/sobre-mi-banner.png",
  },
  {
    title: "Infografía — Robótica",
    description:
      "Infografía educativa sobre tipos de robots, componentes y sistemas de control.",
    image: "/design/robotica-infografia.png",
  },
];

export const Design = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="design" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Diseño Gráfico
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Piezas en Canva
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Algunos trabajos de diseño y contenido visual que hice en Canva.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {designItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
            >
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div
                className={`flex h-64 items-center justify-center overflow-hidden p-4 ${
                  item.lightBg ? "bg-neutral-100" : "bg-background/50"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full cursor-pointer object-contain transition-transform duration-500 hover:scale-105"
                  onClick={() => setSelectedItem(item)}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-pretty leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute right-6 top-6 text-foreground transition-colors hover:text-primary cursor-pointer"
            onClick={() => setSelectedItem(null)}
            aria-label="Cerrar"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className={`max-h-[90vh] max-w-[90vw] rounded-xl p-4 shadow-2xl ${
              selectedItem.lightBg ? "bg-neutral-100" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt="Vista ampliada del diseño"
              className="max-h-[80vh] max-w-[80vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
