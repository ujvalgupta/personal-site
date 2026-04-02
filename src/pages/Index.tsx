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
      <div className="min-h-[75vh] flex flex-col justify-center items-center text-center">
        <div className="flex flex-col items-center">
          <div className="animate-fade-in stagger-1">
            <span className="font-mono text-base text-primary/70 tracking-[0.2em]">
              hey, i'm
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight animate-fade-in stagger-2 leading-tight mt-5">
            Ujval Gupta
          </h1>

          <div className="flex items-center justify-center gap-3 animate-fade-in stagger-3 mt-7">
            <span className="text-[17px] text-foreground/45 tracking-wide">Delusional</span>
            <span className="w-1 h-1 rounded-full bg-primary/50"></span>
            <span className="text-[17px] text-foreground/45 tracking-wide">22</span>
            <span className="w-1 h-1 rounded-full bg-primary/50"></span>
            <span className="text-[17px] text-foreground/45 tracking-wide">Building</span>
          </div>

          <div className="flex items-center justify-center gap-5 mt-9 animate-fade-in stagger-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="mt-10 animate-fade-in stagger-5">
            <a
              href="/stuff"
              className="group inline-flex items-center gap-3 text-foreground hover:text-primary border border-border/60 hover:border-primary/40 rounded-full px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_28px_-8px_hsl(36_100%_50%_/_0.25)]"
            >
              <span className="font-mono text-sm tracking-wide">See my stuff</span>
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
