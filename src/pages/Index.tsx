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
      <div className="min-h-[75vh] flex flex-col justify-center">
        <div className="space-y-4">
          <div className="animate-fade-in stagger-1">
            <span className="font-mono text-xs text-primary/80 tracking-[0.2em]">
              hey, i'm
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-semibold tracking-tighter animate-fade-in stagger-2 leading-[0.9]">
            Ujval<span className="text-primary">.</span>
          </h1>

          <div className="flex items-center gap-3 animate-fade-in stagger-3 pt-0.5">
            <span className="text-[13px] text-foreground/50 tracking-wide">Delusional</span>
            <span className="w-1 h-1 rounded-full bg-primary/60"></span>
            <span className="text-[13px] text-foreground/50 tracking-wide">22</span>
            <span className="w-1 h-1 rounded-full bg-primary/60"></span>
            <span className="text-[13px] text-foreground/50 tracking-wide">Building</span>
          </div>

          <div className="flex items-center gap-4 pt-3 animate-fade-in stagger-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="pt-1 animate-fade-in stagger-5">
            <a
              href="/stuff"
              className="group inline-flex items-center gap-2.5 text-sm text-foreground hover:text-primary border border-border/60 hover:border-primary/40 rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-[0_0_20px_-6px_hsl(36_100%_50%_/_0.3)]"
            >
              <span className="font-mono text-[11px] tracking-wide">See my stuff</span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
