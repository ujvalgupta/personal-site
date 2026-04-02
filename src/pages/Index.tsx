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
            <span className="font-mono text-xs text-primary/80 tracking-[0.2em]">
              hey, i'm
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-semibold tracking-tighter animate-fade-in stagger-2 leading-none">
            Ujval<span className="text-primary">.</span>
          </h1>

          <p className="text-base text-foreground/60 max-w-sm leading-relaxed animate-fade-in stagger-3">
            A delusional 22 year old building cool stuff
          </p>


          <div className="flex items-center gap-4 animate-fade-in stagger-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 animate-fade-in stagger-6">
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
