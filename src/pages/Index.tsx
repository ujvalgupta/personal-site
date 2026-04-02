import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col justify-center">
        <div className="space-y-6">
          <div className="animate-fade-in stagger-1">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              hey, i'm
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight animate-fade-in stagger-2">
            Ujval<span className="text-primary">.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in stagger-3">
            I build cool stuff — at the intersection of tech and growth.
          </p>

          <div className="flex items-center gap-3 animate-fade-in stagger-4">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-xs text-muted-foreground">
              building & shipping
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
