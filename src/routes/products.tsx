import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/animations/StaggerGrid";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | OM EXPORTS — Premium Agricultural Catalog" },
      { name: "description", content: "Browse our premium agricultural export catalog: spices, grains, oilseeds, vegetables, and fibers from India." },
      { property: "og:title", content: "Products | OM EXPORTS" },
      { property: "og:description", content: "Premium agricultural export catalog from India." },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  { name: "All Products", count: 124, active: true },
  { name: "Spices", count: 32 },
  { name: "Grains", count: 18 },
  { name: "Oilseeds", count: 14 },
  { name: "Fibers", count: 8 },
];

const products = [
  {
    name: "Dry Red Chilli", tag: "Spices", grade: "Grade A",
    desc: "Available in Guntur & Byadgi types. Hand-picked and sun-dried to perfection.",
    specs: [["Moisture", "Max 12%"], ["ASTA Color", "40 - 160"]],
    img: "public/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.46 PM.jpeg",
  },
  {
    name: "Fresh Onion", tag: "Vegetables",
    desc: "Premium Nasik Red variety. Optimized for long-distance transit and shelf life.",
    specs: [["Size", "45mm - 60mm+"], ["Origin", "Maharashtra"]],
    img: "public/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.06 PM.jpeg",
  },
  {
    name: "Ground Nuts", tag: "Oilseeds",
    desc: "HPS Bold and Java varieties. High oil content and consistent size calibration.",
    specs: [["Count/Oz", "40/50, 50/60"], ["Aflatoxin", "< 4 PPB"]],
    img: "public/Images-Videos/Groundnut,_seeds.jpg",
  },
  {
    name: "Sugar", tag: "Grains",
    desc: "Indian Cane Sugar S30/M30. International standard ICUMSA 45-150.",
    specs: [["ICUMSA", "Under 100"], ["Purity", "99.8% Min"]],
    img: "public/Images-Videos/sugar.png",
  },
  {
    name: "Yellow Maize", tag: "Grains",
    desc: "High-energy animal feed grade. Mechanically cleaned and low moisture content.",
    specs: [["Moisture", "Max 14%"], ["Protein", "8% - 9%"]],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVnYSA8GX0hE87lX3MsPvNOwe82GZwM3M_VhFhkZScTYvdCO_dvejU3JhmVhBhrmdiAKDtmUmjAFZkqAvmkMplGH4ESgnGa2Klg8-KyBXrd8FWOYnmA5RXXQyPVGL3AjTzhEGZjrD6SOyfbIXc8ul9jC7vUwu6Dg9QhrEtd2MEn_ikL4L-sS7XeXaO8XRVav_Tb8d7TmG25Y666-AAQVuVfQwuKnPVIqcPg2Pk-QNO0GQO_R_87l9lHS2comqFXzfuDd-aFET7dIk",
  },
  {
    name: "Coconut Fiber", tag: "Fibers",
    desc: "Bale-packaged long fiber. Ideal for upholstery and erosion control applications.",
    specs: [["Length", "5cm - 15cm"], ["Impurity", "< 3%"]],
    img: "public/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.38 PM.jpeg",
  },
];

const certs = [
  { icon: "verified_user", label: "FSSAI" },
  { icon: "fact_check", label: "APEDA" },
  { icon: "security", label: "ISO 22000" },
  { icon: "eco", label: "ORGANIC" },
  { icon: "public", label: "GLOBAL G.A.P" },
];

function ProductsPage() {
  return (
    <div className="bg-surface grain-texture text-on-surface min-h-screen">
      <SiteHeader />

      <header className="pt-32 pb-16 px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-outline-variant/30 pb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-4 block">International Trade Excellence</span>
            <h1 className="font-display text-display-xl text-primary leading-tight">Premium Agricultural <br />Catalog</h1>
          </div>
          <div className="max-w-sm text-on-surface-variant font-body-rt">
            <p>Curating the finest harvests from the heart of India. We bridge domestic tradition with global logistics precision to deliver certified excellence.</p>
          </div>
        </motion.div>
      </header>

      <main className="px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
            <AnimatedSection direction="left" className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow border border-outline-variant/20">
              <h3 className="font-subheading-md text-subheading-md text-primary mb-6">Categories</h3>
              <nav className="flex flex-col gap-3">
                {categories.map((c) => (
                  <button
                    key={c.name}
                    className={`flex items-center justify-between py-2 ${c.active ? "text-secondary font-bold" : "text-on-surface-variant hover:text-secondary transition-colors"}`}
                  >
                    <span>{c.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${c.active ? "bg-secondary/10" : "bg-surface-container-high"}`}>{c.count}</span>
                  </button>
                ))}
              </nav>
              <div className="mt-10 pt-10 border-t border-outline-variant/20">
                <h3 className="font-subheading-md text-subheading-md text-primary mb-6">Quality Grade</h3>
                <div className="space-y-3">
                  {["Export Quality (A)", "Premium Grade", "Organic Certified"].map((q) => (
                    <label key={q} className="flex items-center gap-3 cursor-pointer group">
                      <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                      <span className="text-body-rt text-on-surface-variant group-hover:text-on-surface">{q}</span>
                    </label>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.15} className="bg-primary p-8 rounded-xl text-on-primary relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-subheading-md text-white mb-2">Need a custom quote?</h4>
                <p className="text-on-primary-container text-sm mb-6">Our trade desk is available for volume-based negotiations.</p>
                <Link to="/contact" className="block w-full text-center bg-secondary-fixed text-on-secondary-fixed py-3 rounded-lg font-button-text hover:bg-white transition-colors">
                  Contact Expert
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]">public</span>
              </div>
            </AnimatedSection>
          </aside>

          {/* Grid */}
          <section className="flex-grow">
            <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter" staggerDelay={0.08}>
              {products.map((p) => (
                <StaggerItem key={p.name}>
                  <article className="group bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow border border-outline-variant/10 hover:border-secondary transition-all flex flex-col">
                    <div className="h-64 overflow-hidden relative">
                      <img alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={p.img} />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{p.tag}</span>
                        {p.grade && (
                          <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">{p.grade}</span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-subheading-md text-primary">{p.name}</h3>
                        <button title="Download Spec Sheet">
                          <span className="material-symbols-outlined text-outline hover:text-secondary transition-colors">description</span>
                        </button>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-4">{p.desc}</p>
                      <div className="space-y-2 mb-6 text-xs font-label-sm text-on-surface-variant uppercase tracking-wider">
                        {p.specs.map(([k, v]) => (
                          <div key={k} className="flex justify-between border-b border-outline-variant/10 pb-1">
                            <span>{k}</span>
                            <span className="text-primary font-bold">{v}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/contact" className="w-full mt-auto bg-primary text-white py-3 rounded-lg font-button-text hover:bg-secondary transition-all flex items-center justify-center gap-2">
                        Enquire Now
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </section>
        </div>
      </main>

      {/* Trust Bar */}
      <section className="bg-surface-container-low py-16 border-y border-outline-variant/20 overflow-hidden">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-label-sm text-label-sm text-outline-variant tracking-[0.2em] uppercase">Globally Certified Quality Standards</h2>
          </AnimatedSection>
          <StaggerGrid className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60" staggerDelay={0.1}>
            {certs.map((c) => (
              <StaggerItem key={c.label}>
                <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
                  <span className="material-symbols-outlined text-4xl text-primary">{c.icon}</span>
                  <span className="font-label-sm text-[10px] text-primary">{c.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
