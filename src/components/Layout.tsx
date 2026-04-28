import Nav from "@/components/layout/Nav";

const Layout = ({ children, scrollable }: { children: React.ReactNode; scrollable?: boolean }) => {
  return (
    <div className="h-[100dvh] overflow-hidden bg-background relative">
      {/* Grain texture */}
      <div className="noise-overlay" />

      {/* Ambient glow — full bleed, no hard edges */}
      <div className="ambient-glow" />

      <Nav />

      <main
        className={`relative z-10 w-full h-full pt-14 px-6 ${
          scrollable
            ? "overflow-y-auto flex flex-col items-center"
            : "flex items-center justify-center"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
