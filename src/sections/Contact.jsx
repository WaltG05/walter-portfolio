import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://github.com/WaltG05",
    icon: FiGithub,
    name: "GitHub",
  },
  {
    href: "https://linkedin.com/in/waltergonz",
    icon: FiLinkedin,
    name: "LinkedIn",
  },
  {
    href: "mailto:waltergonzalez2857@gmail.com",
    icon: FiMail,
    name: "Email",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-12 backdrop-blur-sm md:p-16">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-75 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Hablemos
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Contactame
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              Siempre estoy abierto a hablar de nuevos proyectos, ideas o
              oportunidades de sumarme a tu equipo. ¡Escribime sin problema!
            </p>

            {/* Social Links */}
            <div className="mt-10 flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border/50 bg-secondary/30 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
                  aria-label={link.name}
                  title={link.name}
                >
                  <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>

            {/* Email */}
            <p className="mt-8 text-muted-foreground">
              O escribime directamente a{" "}
              <a
                href="mailto:waltergonzalez2857@gmail.com"
                className="text-primary transition-colors hover:text-primary/80"
              >
                waltergonzalez2857@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
