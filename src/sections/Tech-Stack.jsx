import { FaReact, FaGithub, FaLinux } from "react-icons/fa";
import {
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiVuedotjs,
  SiPostgresql,
  SiMysql,
  SiDirectus,
  SiDocker,
  SiNginx,
  SiGit,
  SiTailwindcss,
  SiInertia,
  SiK6,
} from "react-icons/si";
import { Layers, TestTube2, Gauge } from "lucide-react";

const categories = [
  {
    title: "Backend & Frontend",
    items: [
      { name: "Laravel", icon: <SiLaravel className="h-8 w-8" />, color: "text-red-500" },
      { name: "PHP", icon: <SiPhp className="h-8 w-8" />, color: "text-indigo-400" },
      { name: "React", icon: <FaReact className="h-8 w-8" />, color: "text-cyan-400" },
      { name: "Inertia.js", icon: <SiInertia className="h-8 w-8" />, color: "text-purple-400" },
      { name: "JavaScript", icon: <SiJavascript className="h-8 w-8" />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript className="h-8 w-8" />, color: "text-blue-400" },
      { name: "Angular", icon: <SiAngular className="h-8 w-8" />, color: "text-rose-500" },
      { name: "Vue.js", icon: <SiVuedotjs className="h-8 w-8" />, color: "text-emerald-400" },
    ],
  },
  {
    title: "Bases de Datos & CMS",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="h-8 w-8" />, color: "text-sky-400" },
      { name: "MySQL", icon: <SiMysql className="h-8 w-8" />, color: "text-blue-400" },
      { name: "Directus", icon: <SiDirectus className="h-8 w-8" />, color: "text-purple-400" },
    ],
  },
  {
    title: "Infraestructura & Testing",
    items: [
      { name: "Docker", icon: <SiDocker className="h-8 w-8" />, color: "text-sky-500" },
      { name: "Nginx", icon: <SiNginx className="h-8 w-8" />, color: "text-emerald-500" },
      { name: "Linux", icon: <FaLinux className="h-8 w-8" />, color: "text-neutral-200" },
      { name: "PHPUnit", icon: <TestTube2 className="h-8 w-8" />, color: "text-teal-400" },
      { name: "k6", icon: <SiK6 className="h-8 w-8" />, color: "text-violet-400" },
    ],
  },
  {
    title: "Herramientas & UI",
    items: [
      { name: "Git", icon: <SiGit className="h-8 w-8" />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub className="h-8 w-8" />, color: "text-foreground" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8" />, color: "text-cyan-300" },
    ],
  },
];

export const TechStack = () => {
  return (
    <section id="stack" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Tecnologías
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Stack Tecnológico
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Tecnologías y herramientas que utilizo para diseñar, probar y
            desplegar aplicaciones web en producción.
          </p>
        </div>
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
                  >
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
          ))}
        </div>
      </div>
    </section>
  );
};