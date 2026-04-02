import Layout from "@/components/Layout";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col justify-center">
        <div className="space-y-8">
          <div className="animate-fade-in stagger-1">
            <span className="font-mono text-[10px] text-muted-foreground/70 tracking-[0.3em] uppercase">
              hey, i'm
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-semibold tracking-tighter animate-fade-in stagger-2 leading-none">
            Ujval<span className="text-primary">.</span>
          </h1>

          <p className="text-base text-muted-foreground max-w-sm leading-relaxed animate-fade-in stagger-3">
            I build cool stuff — at the intersection of tech and growth.
          </p>

          <div className="flex items-center gap-3 animate-fade-in stagger-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-[10px] text-muted-foreground/60 tracking-[0.2em] uppercase">
              building & shipping
            </span>
          </div>

          <div className="flex items-center gap-5 pt-6 animate-fade-in stagger-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={15} strokeWidth={1.5} />
                <span className="font-mono text-[10px] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          {/* Subtle CTA */}
          <div className="pt-8 animate-fade-in stagger-6">
            <a
              href="/stuff"
              className="group inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground/50 hover:text-primary tracking-widest uppercase transition-all duration-300"
            >
              see what i've built
              <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
