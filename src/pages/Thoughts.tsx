import Layout from "@/components/Layout";
import type { Thought } from "@/types";

const thoughts: Thought[] = [
  {
    title: "Why most MVPs fail before launch",
    date: "Dec '25",
    preview: "It's not about the product. It's about the story you tell yourself.",
  },
  {
    title: "Growth is not a department",
    date: "Oct '25",
    preview: "Every line of code, every pixel, every word is growth.",
  },
  {
    title: "The art of shipping fast",
    date: "Aug '25",
    preview: "Perfection is the enemy of traction. Here's how I think about it.",
  },
  {
    title: "Building in public — the real version",
    date: "Jun '25",
    preview: "Not the curated highlight reel. The messy, honest truth.",
  },
];

const Thoughts = () => {
  return (
    <Layout>
      <div className="w-full max-w-2xl space-y-10 sm:space-y-14">
        <div className="space-y-3 animate-fade-in stagger-1">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            Thoughts<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground/70 text-sm max-w-xs">
            Raw ideas, loosely held.
          </p>
        </div>

        <div className="space-y-0">
          {thoughts.map((thought, i) => (
            <div
              key={thought.title}
              className={`group py-5 sm:py-6 border-b border-border/40 hover:border-border transition-all duration-500 cursor-pointer animate-fade-in stagger-${i + 2}`}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors duration-300 leading-snug">
                    {thought.title}
                  </h3>
                  <p className="text-xs text-muted-foreground/50 leading-relaxed max-w-sm group-hover:text-muted-foreground/70 transition-colors duration-500">
                    {thought.preview}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground/40 shrink-0 pt-0.5 tracking-wide">
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
