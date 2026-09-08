const softSkills = ["Resolución de problemas", "Trabajo colaborativo", "Aprendizaje autónomo"];

export const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Sobre Mí
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Quién soy?
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Estudiante de Análisis y Desarrollo de Software, con interés en el
            desarrollo web y móvil. Experiencia académica desarrollando
            aplicaciones con tecnologías como React, Vue.js y MySQL,
            participando en proyectos de gestión de incidencias y soluciones
            multiplataforma. Interés en continuar creciendo profesionalmente
            en entornos de desarrollo colaborativo y tecnologías modernas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/50 bg-secondary/20 px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};