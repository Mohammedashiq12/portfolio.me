import { useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", icon: SiPython, category: "core", color: "text-yellow-400" },
  { name: "JavaScript", icon: SiJavascript, category: "core", color: "text-yellow-300" },
  { name: "HTML", icon: SiHtml5, category: "core", color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, category: "core", color: "text-blue-500" },

  { name: "React", icon: SiReact, category: "frameworks", color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, category: "frameworks", color: "text-foreground" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frameworks", color: "text-sky-400" },

  { name: "Git", icon: SiGit, category: "tools", color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, category: "tools", color: "text-foreground" },
];

const categories = ["all", "core", "frameworks", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies and tools I enjoy working with
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 flex flex-col items-center gap-4 card-hover"
              >
                <Icon className={`text-4xl ${skill.color}`} />
                <h3 className="text-sm font-medium text-center">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
