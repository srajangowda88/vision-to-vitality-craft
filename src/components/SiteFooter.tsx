import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-on-primary w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1">
          <div className="font-display text-subheading-md text-primary-fixed mb-6">OM EXPORTS</div>
          <p className="text-outline-variant text-sm leading-relaxed pr-8">
            Premium Indian agricultural logistics serving over 50 countries with uncompromised quality standards.
          </p>
        </div>
        <div>
          <h5 className="text-secondary-fixed font-bold mb-6">Quick Links</h5>
          <ul className="space-y-4 text-sm">
            <li><Link to="/products" className="text-outline-variant hover:text-secondary-fixed transition-all">Products</Link></li>
            <li><Link to="/markets" className="text-outline-variant hover:text-secondary-fixed transition-all">Export Markets</Link></li>
            <li><Link to="/services" className="text-outline-variant hover:text-secondary-fixed transition-all">Services</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-secondary-fixed font-bold mb-6">Resources</h5>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="text-outline-variant hover:text-secondary-fixed transition-all">About Us</Link></li>
            <li><a className="text-outline-variant hover:text-secondary-fixed transition-all" href="#">Certifications</a></li>
            <li><Link to="/contact" className="text-outline-variant hover:text-secondary-fixed transition-all">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/10 px-margin-desktop max-w-container-max mx-auto text-center text-outline-variant text-xs">
        © {new Date().getFullYear()} OM EXPORTS. Premium Agricultural Logistics. All Rights Reserved.
      </div>
    </footer>
  );
}
