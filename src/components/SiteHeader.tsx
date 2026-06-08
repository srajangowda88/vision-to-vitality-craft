import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/products", label: "Products" },
  { to: "/markets", label: "Markets" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Company" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/20 shadow-sm">
      <nav className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="font-display text-subheading-md font-bold tracking-tighter text-primary uppercase">
          OM EXPORTS
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-subheading-md text-[14px] text-on-surface hover:text-secondary transition-colors duration-300"
              activeProps={{ className: "font-subheading-md text-[14px] text-secondary border-b-2 border-secondary pb-1" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-subheading-md text-[14px] text-on-surface hover:text-secondary transition-colors duration-300"
            activeProps={{ className: "font-subheading-md text-[14px] text-secondary border-b-2 border-secondary pb-1" }}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block font-button-text text-on-surface-variant hover:text-primary transition-all">
            EN/IN
          </button>
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-6 py-3 font-button-text rounded hover:bg-secondary transition-all active:scale-95 duration-200"
          >
            Request Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
