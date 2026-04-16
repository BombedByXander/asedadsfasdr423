import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSetupClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("setup");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate({ to: "/" });
            }
          }}
          className="font-display text-xl font-bold tracking-tight"
        >
          ProdBy<span className="brand-accent">Xander!</span>
        </button>

        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/setup"
            onClick={handleSetupClick}
            className={`text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-accent ${
              location.pathname === "/setup" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            My Setup
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-secondary border border-border hover:border-brand transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 brand-accent" />
            ) : (
              <Moon className="h-4 w-4 brand-accent" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
