import Layout from "@/components/Layout";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A tool that makes complex things feel simple.",
    tag: "product",
  },
  {
    title: "Growth Engine",
    description: "Scaled from 0 to 100k users with unconventional tactics.",
    tag: "growth",
  },
  {
    title: "Data Canvas",
    description: "Visual analytics that tell stories, not just numbers.",
    tag: "dev",
  },
  {
    title: "Launch Kit",
    description: "Everything you need to ship fast and iterate faster.",
    tag: "product",
  },
];

const tagColors: Record<string, string> = {
  product: "text-primary border-primary/20",
  growth: "text-emerald-400 border-emerald-400/20",
  dev: "text-sky-400 border-sky-400/20",
};

const Stuff = () => {
  return (
    <Layout>
      <div className="w-full max-w-2xl space-y-10 sm:space-y-14">
        <div className="space-y-3 animate-fade-in stagger-1">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            Stuff<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground/70 text-sm max-w-xs">
            Things I've built, broken, and shipped.
          </p>
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative flex items-center justify-between py-5 border-b border-border/40 hover:border-border transition-all duration-500 cursor-pointer animate-fade-in stagger-${i + 2}`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={12}
                    className="text-muted-foreground/0 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300">
                  {project.description}
                </p>
              </div>
              <span className={`font-mono text-[9px] uppercase tracking-[0.2em] border rounded-full px-2.5 py-1 shrink-0 ml-4 ${tagColors[project.tag] || "text-muted-foreground border-border"}`}>
                {project.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Stuff;
