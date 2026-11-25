import { useState } from "react";
import { ButtonOut } from "@/components/Button-Out";
import { ExternalLink, LockIcon, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projectsList = [
  {
    badge: "Proyecto destacado · Producción",
    title: "Plataforma de Códigos QR Dinámicos y Analítica",
    description: "Sistema web desarrollado y llevado a producción para una empresa de Guatemala. Permite gestionar campañas de códigos QR dinámicos, analítica de escaneos y consumo vía API REST autenticada. Optimicé la ruta pública de redirección con APCu y validé el rendimiento con k6 (p95 de 49 a 25 ms a 20 visitas/s y +60 % de capacidad, de ~37 a ~60 visitas/s), respaldado por 584 pruebas automatizadas.",
    technologies: [
      "Laravel",
      "React",
      "Inertia.js",
      "PostgreSQL",
      "Docker",
      "k6",
      "PHPUnit",
    ],
    featured: true,
    isPrivate: true,
    image: "./projects/webqr.png",
    metrics: [
      { value: "584", label: "Pruebas automatizadas" },
      { value: "49 → 25 ms", label: "Latencia p95 (k6)" },
      { value: "+60 %", label: "Capacidad (~37 → ~60 visitas/s)" },
    ],
  },
  {
    badge: "Demo en vivo",
    title: "GameCenter — E-commerce Full Stack",
    description:
      "Tienda online con arquitectura desacoplada desarrollada como proyecto final integrador. Incluye API REST en Laravel con CRUD completo, búsqueda, filtros avanzados y ordenamiento, junto a un frontend modular en Angular (Signals, PrimeNG y Tailwind CSS) con panel administrativo, catálogo público y carrito persistente en Local Storage.",
    technologies: [
      "Laravel",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "PrimeNG",
      "API REST",
    ],
    featured: false,
    live: "https://gamecenterprog.netlify.app",
    github: "",
    image: "./projects/gamecenter.png",
  },
  {
    badge: "Práctica Profesional · Equipo de 5",
    title: "Sistema web de Gestión de Incidencias - Acción Social",
    description:
      "Sistema para digitalizar el registro, seguimiento de estados y reportes estadísticos de casos del área de Acción Social municipal, desarrollado en equipo. Fui el autor principal del frontend en Vue.js (46 de 111 commits y ~75 % del código), que consume una API REST sobre Directus con control de acceso basado en roles (RBAC).",
    technologies: ["Vue.js", "Directus", "JavaScript", "MySQL", "API REST"],
    featured: false,
    isPrivate: true,
    privateLabel: "Código privado (proyecto en equipo)",
    image: "./projects/preview-1.png",
  },
];

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Proyectos
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Sistemas en producción, demos interactivas y proyectos desarrollados
            con foco en arquitectura limpia, pruebas y rendimiento.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50 lg:col-span-2"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="p-8 lg:flex lg:items-center lg:gap-8">
                {/* Project Preview o Tarjeta de Métricas */}
                <div className="mb-6 overflow-hidden rounded-xl lg:mb-0 lg:w-1/2">
                  {project.image ? (
                    <div className="h-full w-full overflow-hidden rounded-lg border border-border/30 bg-background/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-105"
                        onClick={() => setSelectedImage(project.image)}
                      />
                    </div>
                  ) : (
                    <div className="flex h-full min-h-65 flex-col justify-between rounded-lg border border-border/40 bg-background/60 p-6">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-mono uppercase tracking-wider text-primary">
                          Arquitectura &amp; Métricas
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-border/50 px-2.5 py-0.5 text-[11px]">
                          <LockIcon className="h-3 w-3" />
                          Producción
                        </span>
                      </div>

                      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {project.metrics?.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-lg border border-border/40 bg-card/40 p-4 text-center"
                          >
                            <p className="text-xl font-bold text-primary">
                              {metric.value}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="font-mono text-xs text-muted-foreground/80">
                        Nginx → Laravel + APCu → PostgreSQL 16 (Docker)
                      </p>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2">
                  {project.badge && (
                    <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.badge}
                    </span>
                  )}
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/50 bg-secondary/20 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.live && (
                      <ButtonOut
                        size="sm"
                        className="gap-2 bg-primary text-tertiary hover:bg-primary/90"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Ver Demo
                        </a>
                      </ButtonOut>
                    )}

                    {project.github && (
                      <ButtonOut
                        size="sm"
                        variant="outline"
                        className="gap-2 border-border hover:bg-secondary/40 duration-300"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <FiGithub className="h-4 w-4" />
                          GitHub
                        </a>
                      </ButtonOut>
                    )}

                    {project.isPrivate && (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground">
                        <LockIcon className="h-3.5 w-3.5" />
                        {project.privateLabel ?? "Código privado (propiedad del cliente)"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Imagen Ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 cursor-pointer text-foreground transition-colors hover:text-primary"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Vista ampliada del proyecto"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );};
