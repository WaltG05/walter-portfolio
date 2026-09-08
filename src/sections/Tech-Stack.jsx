import { FaReact, FaGithub } from "react-icons/fa";
import { SiVuedotjs, SiDirectus, SiMysql, SiLaravel, SiTailwindcss, SiCanva, SiCanvas } from "react-icons/si";

const techItems = [
  { name: "React", icon: <FaReact className="h-8 w-8"/>, color: "text-cyan-400" },
  { name: "Vue.js", icon: <SiVuedotjs className="h-8 w-8" />, color: "text-emerald-400" },
  { name: "Laravel", icon: <SiLaravel className="h-8 w-8" />, color: "text-red-500" },
  { name: "Directus", icon: <SiDirectus className="h-8 w-8" />, color: "text-purple-400" },
  { name: "MySQL", icon: <SiMysql className="h-8 w-8" />, color: "text-sky-400" },
  { name: "GitHub", icon: <FaGithub className="h-8 w-8" />, color: "text-foreground" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8" />, color: "text-cyan-300"},
  { name: "Canva", icon: <SiCanva className="h-10 w-10" />, color: "text-cyan-400" }
];

export const TechStack = () => {
  return (
    <section id="stack" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Tecnologías
          </p>
          <h2 className="text-balace text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Stack Tecnológico
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Las herramientas y tecnologías que uso para dar vida a las ideas
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Tech items would go here */}
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="group relative rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col items-center gap-3 text-center">
                <div
                  className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
