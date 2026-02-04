import { Briefcase, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl text-center">

        {/* SECTION TITLE */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-3xl mx-auto space-y-8">

          {/* STATEMENT */}
          <h3 className="font-heading text-2xl md:text-3xl font-semibold leading-snug">
            I build clean, scalable, and thoughtful digital experiences.
          </h3>

          {/* SHORT DESCRIPTION */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I’m an AI/ML student with a strong interest in full-stack development.
            I enjoy creating responsive, user-friendly web applications using
            modern technologies, with a strong focus on clean code and usability.
          </p>

          {/* CTA */}
          <div className="pt-6 flex justify-center gap-4">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-primary text-primary-foreground
                         font-medium transition-all duration-300
                         hover:shadow-[0_0_14px_rgba(139,92,246,0.5)]
                         hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>

            <a
              href="/Mohammed_Ashiq_CV.pdf"
              target="_blank"
              className="px-7 py-3 rounded-full border border-primary text-primary
                         font-medium transition-all duration-300
                         hover:bg-primary/10"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* SKILL / ROLE CARDS */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <InfoCard
            icon={<Code className="h-5 w-5 text-primary" />}
            title="Web Development"
            text="Building responsive and accessible web applications using modern tools and frameworks."
          />

          <InfoCard
            icon={<UserIcon />}
            title="UI / UX Design"
            text="Designing clean, intuitive interfaces focused on clarity and usability."
          />

          <InfoCard
            icon={<Cpu className="h-5 w-5 text-primary" />}
            title="AI & Machine Learning"
            text="Exploring machine learning concepts and experimenting with practical applications."
          />

          <InfoCard
            icon={<Briefcase className="h-5 w-5 text-primary" />}
            title="Project Management"
            text="Planning and delivering projects with a structured and thoughtful approach."
          />
        </div>
      </div>
    </section>
  );
};

/* COMPACT CARD */
const InfoCard = ({ icon, title, text }) => (
  <div className="border border-border rounded-lg px-5 py-4">
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-full bg-primary/10 shrink-0">
        {icon}
      </div>
      <div className="text-left">
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-snug">
          {text}
        </p>
      </div>
    </div>
  </div>
);

/* USER ICON */
const UserIcon = () => (
  <svg
    className="h-5 w-5 text-primary"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 10-16 0" />
  </svg>
);
