import { useState } from "react";
import { ButtonOut } from "@/components/Button-Out";
import { ExternalLink, X } from "lucide-react";

const projectsList = [
  {
    title: "Sistema web de Gestión de Incidencias - Acción Social",
    description:
      "Desarrollé un sistema web para gestionar incidencias en una organización sin fines de lucro, utilizando Vue.js para el frontend y Directus para el backend. El sistema permite a los usuarios reportar, rastrear y resolver incidencias de manera eficiente, mejorando la comunicación y la respuesta del equipo.",
    technologies: ["Vue.js", "Directus"],
    featured: true,
    github: "https://github.com/WaltG05/Sistema-de-Gestion-de-Incidencias",
    live: "https://integrasocial.innobitsolutions.com.ar",
    image: "./projects/preview-1.png",
    demo: false
  },
  {
    title: "Aplicación de Gestión Ciudadana (Web y Móvil)",
    description:
      "Creé una aplicación de gestión ciudadana para una municipalidad, utilizando Ionic para el desarrollo móvil y React para el frontend web. La aplicación permite a los ciudadanos reportar problemas en la comunidad y recibir actualizaciones en tiempo real, mejorando la participación ciudadana y la eficiencia del gobierno local.",
    technologies: ["Ionic", "React", "Firebase", "Directus"],
    featured: false,
    image: "./projects/preview-2.png",
    demo: false
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
          <h2 className="text-balace text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Una selección de proyectos que muestran mis habilidades y pasión
            por el desarrollo.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Tech items would go here */}
          {projectsList.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm 
                transition-all duration-300 hover:border-primary/50 hover:bg-card/50 
                ${project.featured ? "lg:col-span-2" : "lg:col-span-2"}`}
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div
                className={`p-8 ${project.featured ? "lg:flex lg:gap-8" : "lg:flex lg:gap-6"}`}
              >
                {/* Project Preview */}
                <div
                  className={`mb-2 overflow-hidden rounded-xl${
                    project.featured ? "lg:mb-0 lg:w-1/2" : "lg:mb-0 lg:w-1/2"
                  }`}
                >
                  <div className="aspect-auto">
                    {/* Mock App UI */}
                    <div className="h-full w-full overflow-hidden rounded-lg border border-border/30 bg-background/50">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-105"
                        onClick={() => project.image && setSelectedImage(project.image)}
                      />
                    </div>
                  </div>
                </div>
                {/* Project Info */}
                <div className={`${project.featured ? "lg:w-1/2" : "lg:w-1/2"}`}>
                  {project.featured && (
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-primary text-xs font-medium">
                      Proyecto Destacado
                    </span>
                  )}
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground text-pretty leading-relaxed">
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
                  {project.demo && (
                    <div className="flex gap-3">
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
                  </div>
                  )}
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
            className="absolute right-6 top-6 text-foreground transition-colors hover:text-primary cursor-pointer"
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
  );
};
