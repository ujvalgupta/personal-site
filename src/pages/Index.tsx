import Layout from "@/components/Layout";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Twitter, href: "https://x.com/ujvalgupta", label: "X" },
  { icon: Github, href: "https://github.com/ujvalgupta", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/ujvalgupta", label: "LinkedIn" },
];

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center text-center w-full max-w-2xl">

        <span className="font-mono text-sm sm:text-base text-primary/70 tracking-[0.2em] animate-fade-in stagger-1">
          hey, i'm
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight mt-4 sm:mt-5 animate-fade-in stagger-2">
          Ujval Gupta
        </h1>

        <div className="flex items-center justify-center gap-3 mt-5 sm:mt-7 animate-fade-in stagger-3">
          <span className="text-sm sm:text-[17px] text-foreground/45 tracking-wide">Delusional</span>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <span className="text-sm sm:text-[17px] text-foreground/45 tracking-wide">22</span>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <span className="text-sm sm:text-[17px] text-foreground/45 tracking-wide">Building</span>
        </div>

        <div className="flex items-center justify-center gap-5 mt-7 sm:mt-9 animate-fade-in stagger-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={s.label}
            >
              <s.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 animate-fade-in stagger-5">
          <a
            href="/stuff"
            className="group inline-flex items-center gap-3 text-foreground hover:text-primary border border-border/60 hover:border-primary/40 rounded-full px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-300 hover:shadow-[0_0_28px_-8px_hsl(36_100%_50%_/_0.25)]"
          >
            <span className="font-mono text-xs sm:text-sm tracking-wide">See my stuff</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </Layout>
  );
};

export default Index;
