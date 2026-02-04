import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="
        relative
        pt-28 sm:pt-36 lg:pt-40
        pb-20 sm:pb-28 lg:pb-32
        px-4
        overflow-hidden
      "
    >
      <div
        className="
          container mx-auto
          max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-7xl
          grid grid-cols-1 md:grid-cols-2
          gap-14 md:gap-20
          items-center
        "
      >
        {/* LEFT COLUMN */}
        <div
          className="
            animate-fade-in
            text-center md:text-left
            max-w-xl
            mx-auto md:mx-0
            flex flex-col
          "
        >
          {/* INTRO TEXT */}
          <div className="order-1 md:order-1 space-y-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              AI / ML Student · Full-Stack Developer
            </p>

            <h1
              className="
                font-heading font-bold tracking-tight leading-tight
                text-3xl sm:text-4xl lg:text-6xl
              "
            >
              Hi, I’m{" "}
              <span className="text-primary block sm:inline">
                Mohammed Ashiq
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I enjoy building clean, scalable web applications and exploring how
              AI can be used to solve real-world problems through thoughtful and
              user-friendly design.
            </p>
          </div>

          {/* PHOTO — MOBILE AFTER TEXT */}
          <div className="order-2 md:hidden mt-8 flex justify-center">
            <div
              className="
                relative
                p-3
                rounded-3xl
                bg-card/60 backdrop-blur-md
                shadow-xl
              "
            >
              <img
                src="/profile.jpeg"
                alt="Mohammed Ashiq"
                className="
                  object-cover rounded-2xl
                  w-56 h-72
                "
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20" />
            </div>
          </div>

          {/* BUTTONS — MOBILE AFTER PHOTO */}
          <div className="order-3 md:order-2 mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="cosmic-button">
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-6 py-3 rounded-full
                border border-border
                hover:bg-secondary transition
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — DESKTOP PHOTO ONLY */}
        <div className="hidden md:flex justify-center animate-fade-in-delay-2">
          <div
            className="
              relative
              p-4
              rounded-3xl
              bg-card/60 backdrop-blur-md
              shadow-xl animate-float
            "
          >
            <img
              src="/profile.jpeg"
              alt="Mohammed Ashiq"
              className="
                object-cover rounded-2xl
                w-72 h-88
                lg:w-80 lg:h-96
              "
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20" />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR — DESKTOP ONLY */}
      <div
        className="
          hidden lg:flex
          absolute bottom-10 left-1/2 -translate-x-1/2
          flex-col items-center
          animate-pulse-subtle
        "
      >
        <span className="text-xs text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="text-primary" />
      </div>
    </section>
  );
};
