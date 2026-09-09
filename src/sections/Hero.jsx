import { Button } from "@/components/Button";
import { ButtonOut } from "@/components/Button-Out";
import { ArrowRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Green Dots */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 90}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}

      {/* Content  */}
      {/* <div className="container mx-auto px-20 pt-55 pb-20 relative z-10"> */}
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="animate-fade-in space-y-4">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Software Developer
              </p>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-balance text-5xl font-bold leading-tight tracking-wide text-foreground lg:text-6xl xl:text-7xl">
                Walter Gonzalez
              </h1>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Creando experiencias web modernas con{" "}
                <span className="text-foreground">React</span>,{" "}
                <span className="text-foreground">Vue.js</span>,{" "}
                <span className="text-foreground">Laravel</span>,{" "}
                <span className="text-foreground">Tailwind</span> y{" "}
                <span className="text-foreground">Directus</span>. Apasionado
                por el código limpio y las interfaces intuitivas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <ButtonOut variant="default"
                size="sm"
                className="gap-2 text-tertiary hover:bg-primary/30 hover:scale-105 transition-all duration-400"
              >
                <a
                  href="#projects"
                  className="flex items-center gap-2 font-semibold"
                >
                  Ver Proyectos <ArrowRight className="h-4 w-4" />
                </a>
              </ButtonOut>

              <ButtonOut variant="outline" size="sm" className="gap-2 border-border hover:bg-secondary/30 duration-300">
                <a
                  href="https://github.com/WaltG05"
                  target="_blank"
                  rel="noopeer"
                  className="flex items-center gap-2"
                >
                  <FiGithub className="h-4 w-4" /> Github
                </a>
              </ButtonOut>
            </div>
            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Tecnologías</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2+</p>
                <p className="text-sm text-muted-foreground">Proyectos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2+</p>
                <p className="text-sm text-muted-foreground">Años Aprendiendo</p>
              </div>
            </div>
          </div>
          {/* Right Column - Profile Image
          <div className="animate-fade-in">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full max-w-sm rounded-lg shadow-lg mx-auto"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
