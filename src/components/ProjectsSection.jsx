import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with a clean, responsive layout to showcase projects and skills.",
    image: "/portfolio.png",
    tech: "React · Tailwind CSS · JavaScript",
    demoUrl: "https://mohammedashiq.vercel.app/",
    githubUrl: "https://github.com/Mohammedashiq12/my--portfolio",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "Built as a learning project to strengthen JavaScript fundamentals, including DOM manipulation, event handling, and localStorage.",
    image: "/todo-app.png",
    tech: "HTML · CSS · JavaScript",
    demoUrl: "http://todo-mohammedashiq.vercel.app/",
    githubUrl: "https://github.com/Mohammedashiq12/todo-app",
  },
  {
    id: 3,
    title: "Loading Soon",
    description: "More projects are currently under development.",
    image: "/placeholder.png",
    tech: "—",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-4">
      <div className="container mx-auto max-w-6xl text-center">

        {/* SECTION HEADER */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-violet-500 dark:text-violet-400">
            Projects
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            A selection of projects highlighting my approach to building
            clean and user-focused applications.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group
                max-w-md mx-auto
                rounded-2xl
                overflow-hidden
                bg-card
                border border-border
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-primary/40"
              
            >
              {/* IMAGE */}
              <div className="h-56 sm:h-64 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3 text-left">
                <h3 className="text-lg font-semibold tracking-tight text-violet-500 dark:text-violet-400">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {project.tech}
                </p>

                {/* LINKS */}
                <div className="flex items-center gap-5 pt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    Live <ExternalLink size={13} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-muted-foreground inline-flex items-center gap-1 hover:text-primary"
                  >
                    Code <Github size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
