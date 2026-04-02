import Layout from "@/components/Layout";

interface Thought {
  title: string;
  date: string;
  preview: string;
}

const thoughts: Thought[] = [
  {
    title: "Why most MVPs fail before launch",
    date: "2025.12",
    preview: "It's not about the product. It's about the story you tell yourself.",
  },
  {
    title: "Growth is not a department",
    date: "2025.10",
    preview: "Every line of code, every pixel, every word is growth.",
  },
  {
    title: "The art of shipping fast",
    date: "2025.08",
    preview: "Perfection is the enemy of traction. Here's how I think about it.",
  },
  {
    title: "Building in public — the real version",
    date: "2025.06",
    preview: "Not the curated highlight reel. The messy, honest truth.",
  },
];

const Thoughts = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <div className="space-y-3 animate-fade-in stagger-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            Thoughts<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Raw ideas, loosely held.
          </p>
        </div>

        <div className="space-y-1">
          {thoughts.map((thought, i) => (
            <div
              key={thought.title}
              className={`group py-5 border-b border-border hover:bg-secondary/30 px-3 -mx-3 rounded-lg transition-all cursor-pointer animate-fade-in stagger-${i + 2}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                    {thought.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {thought.preview}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground shrink-0 pt-0.5">
                  {thought.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Thoughts;
