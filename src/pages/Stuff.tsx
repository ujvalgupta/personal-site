import Layout from "@/components/Layout";

interface Project {
  title: string;
  description: string;
  tag: string;
  link?: string;
}

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
  product: "text-primary",
  growth: "text-emerald-400",
  dev: "text-sky-400",
};

const Stuff = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <div className="space-y-3 animate-fade-in stagger-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            Stuff<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Things I've built, broken, and shipped.
          </p>
        </div>

        <div className="space-y-1">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group flex items-center justify-between py-4 border-b border-border hover:bg-secondary/30 px-3 -mx-3 rounded-lg transition-all cursor-pointer animate-fade-in stagger-${i + 2}`}
            >
              <div className="space-y-1">
                <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <span className={`font-mono text-[10px] uppercase tracking-widest ${tagColors[project.tag] || "text-muted-foreground"}`}>
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
