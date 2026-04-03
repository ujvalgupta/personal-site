import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/config/nav";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-primary">~/</span>ujval
        </Link>
        <div className="flex gap-6 sm:gap-10">
          {NAV_ITEMS.map((item) => (
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
  );
};

export default Nav;
