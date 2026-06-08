import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | OM EXPORTS" },
      { name: "description", content: "End-to-end agricultural export services: sourcing, quality inspection, packaging, documentation, logistics." },
      { property: "og:title", content: "Services | OM EXPORTS" },
      { property: "og:description", content: "End-to-end agricultural export services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: "agriculture", t: "Commodity Sourcing", d: "Direct network of 5,000+ farmers across India, ensuring fresh produce and competitive farm-gate pricing without intermediaries." },
  { icon: "microwave", t: "Quality Inspection", d: "Multi-stage laboratory testing for aflatoxins, pesticide residues, and moisture levels to guarantee international safety standards." },
  { icon: "inventory_2", t: "Packaging Solutions", d: "Customized, moisture-resistant industrial packing tailored for specific commodities like dry chillies and ground nuts." },
  { icon: "description", t: "Documentation Support", d: "Expert handling of Certificates of Origin, Phytosanitary clearances, and complex Bills of Lading for seamless customs entry." },
  { icon: "directions_boat", t: "International Logistics", d: "Ocean and air freight strategic alliances with Tier-1 carriers, offering prioritized container bookings and competitive transit times." },
  { icon: "hub", t: "Supply Chain Management", d: "End-to-end oversight with real-time tracking and inventory control, providing clients with full visibility of their cargo's journey." },
];

function ServicesPage() {
  return (
    <div className="bg-background text-on-background grain-texture">
      <SiteHeader />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[614px] flex items-center overflow-hidden bg-primary-container">
          <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
            <div className="max-w-3xl">
              <span className="text-secondary-fixed font-label-sm uppercase tracking-widest mb-4 block">Global Excellence</span>
              <h1 className="font-display text-display-xl text-primary-fixed mb-6 leading-none">
                End-to-End <br />Export Solutions
              </h1>
              <p className="font-body-rt text-subheading-md text-on-primary-container max-w-xl">
                Bridging Indian agricultural heritage with international logistics through precision, transparency, and a dedicated farmer-to-port network.
              </p>
            </div>
          </div>
        </section>

        {/* Service Grid */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-headline-lg text-primary mb-4">Core Competencies</h2>
              <p className="text-on-surface-variant text-body-rt">
                Our vertically integrated supply chain ensures every shipment meets the stringent quality benchmarks required by international buyers across 50+ global markets.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-secondary font-display text-headline-lg block">20+</span>
              <span className="font-label-sm uppercase text-outline">Years of Trading Mastery</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {services.map((s) => (
              <div key={s.t} className="glass-card p-10 flex flex-col group hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 text-secondary">
                  <span className="material-symbols-outlined text-5xl">{s.icon}</span>
                </div>
                <h3 className="font-subheading-md text-subheading-md text-primary mb-4">{s.t}</h3>
                <p className="text-on-surface-variant text-body-rt mb-8 flex-grow">{s.d}</p>
                <a className="inline-flex items-center gap-2 text-secondary font-button-text group-hover:gap-4 transition-all" href="#">
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-gap bg-surface-container relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover grayscale" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgMcmByT7QYg6Sx0R-SIWpEa2UcREbj0JLnSu6i9ZSkGCUqoC532r196ql9gLjD84h7ZcOqkJkNlo7McFLF5d6kfTTmbQOpkWVqJSmtvT1iUQPhpRlpnfeCjcKoVepob1QYsZ5C7CYC3JeUeQ6A1KP-I1BByJxQkgyutInYdMwK2ygcQSo9dDWz1t7R_dkZzetNG4VkX3bQqGGzM9y6h_6CEj1PUlXDQMcEjvOePr9gxZsbF-vrM2Ci98o08LSo-F1-5z-AxUo2x4" />
          </div>
          <div className="px-margin-desktop max-w-container-max mx-auto relative z-10">
            <div className="max-w-3xl">
              <h2 className="font-display text-headline-lg text-primary mb-6">Optimize Your Global Trading Strategy</h2>
              <p className="font-body-rt text-subheading-md text-on-surface-variant mb-10">
                Our experts are ready to provide bespoke logistics planning for your next bulk shipment. Secure your supply chain with OM EXPORTS.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-primary text-on-primary px-10 py-5 font-button-text text-lg gap-4 transition-all group hover:bg-primary-container">
                Consult our Trade Experts
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">trending_flat</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
