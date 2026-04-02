import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Stuff", path: "/stuff" },
  { label: "Thoughts", path: "/thoughts" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="h-screen overflow-hidden bg-background relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Ambient glow */}
      <div className="ambient-glow animate-float" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-300">
            <span className="text-primary">~/</span>ujval
          </Link>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-wide uppercase transition-all duration-300 link-hover ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-2xl mx-auto px-6 pt-28 pb-20 h-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
