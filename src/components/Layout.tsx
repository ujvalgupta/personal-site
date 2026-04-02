import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Stuff", path: "/stuff" },
  { label: "Thoughts", path: "/thoughts" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm text-foreground hover:text-primary transition-colors">
            ujval.
          </Link>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
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
      <main className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
