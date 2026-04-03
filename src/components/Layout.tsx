import Nav from "@/components/layout/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100dvh] overflow-hidden bg-background relative">
      {/* Grain texture */}
      <div className="noise-overlay" />

      {/* Ambient glow — full bleed, no hard edges */}
      <div className="ambient-glow" />

      <Nav />

      <main className="relative z-10 w-full h-full pt-14 flex items-center justify-center px-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
