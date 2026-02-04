import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("hero");

  /* THEME */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  /* SCROLL SPY */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-background/80 backdrop-blur-md dark:border-b dark:border-primary/20">
        <div className="container h-14 md:h-16 flex items-center justify-between">

          {/* MOBILE THEME */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="md:hidden p-2 rounded-full border border-border transition-transform hover:scale-110"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* DESKTOP LOGO */}
          <a href="#hero" className="hidden md:block text-lg font-bold text-primary">
           <span className="text-foreground">Portfolio</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "text-sm font-medium transition",
                  activeSection === item.id
                    ? "text-primary text-glow"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* DESKTOP THEME */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:inline-flex p-2 rounded-full bg-secondary transition-transform hover:scale-110"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-full border border-border"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* ================= FULLSCREEN MOBILE MENU ================= */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          menuOpen ? "flex" : "hidden"
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

        <div className="relative w-full h-full flex flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-lg font-semibold text-primary">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full border border-border"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-2xl font-medium transition",
                  activeSection === item.id
                    ? "text-primary text-glow"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pb-10 flex justify-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full bg-secondary"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
