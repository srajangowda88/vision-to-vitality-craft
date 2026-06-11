import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/animations/StaggerGrid";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | OM EXPORTS" },
      { name: "description", content: "Discover the journey of OM EXPORTS — from Karnataka roots to global agricultural leadership." },
      { property: "og:title", content: "About Us | OM EXPORTS" },
      { property: "og:description", content: "From Karnataka to global agricultural leadership." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-surface grainy-bg text-on-surface">
      <SiteHeader />
      <main className="pt-20">
        {/* Hero */}
        <section className="pt-20 pb-section-gap px-margin-desktop max-w-container-max mx-auto">
          <nav className="flex gap-2 mb-8 items-center font-label-sm text-label-sm text-outline">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-primary-container">Company</span>
          </nav>
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-display-xl text-primary mb-6">Redefining Agricultural Exports</h1>
            <p className="font-subheading-md text-subheading-md text-on-surface-variant max-w-2xl">
              Bridging traditional Indian heritage with world-class logistics precision to deliver the finest agricultural produce to every corner of the globe.
            </p>
          </motion.div>
        </section>

        {/* Story */}
        <section className="pb-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-gutter items-center mb-24">
            <AnimatedSection direction="left" className="relative aspect-[4/5] bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover" alt="Chilli fields in Karnataka" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUL3hkbbQBMbUdYJsxBZ9b2ZILBuqsagW5WkuU74U_QO_Wn1by8Ign6mK35Ub0NZqcHNUfXZFnhNYgKAYXimUFr7XeM8RCeVbCg58cCWbV5F5Lo-7KLzm3wlCGfs0ic1Qf2VT804z4m7ChhxaBVxwzCAl9VUkMxABo9hSTJMVKhn4pNZLCtE9AAJJ_GEj68LaTbu9QQPBHTOZ6RbesaCjMOo7DPl4mmE9amGO29WSLO_L1BeuinFvDFSvYTWZ9_uUtjUZcYTyfRQ4" />
              <div className="absolute bottom-0 right-0 p-8 bg-surface-bright/90 backdrop-blur-sm max-w-xs">
                <p className="font-label-sm text-label-sm text-secondary mb-2">SINCE 1998</p>
                <p className="font-body-rt text-body-rt font-semibold">Our journey began in the fertile lands of Byadgi, Karnataka.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15} className="md:pl-16">
              <h2 className="font-display text-headline-lg text-primary mb-8">From Roots to Global Horizons</h2>
              <div className="space-y-6 text-on-surface-variant font-body-rt">
                <p>OM EXPORTS started with a singular vision: to bring the authentic flavors and high-quality staples of Indian agriculture to international markets without compromise.</p>
                <p>What began as a localized sourcing unit in Karnataka has evolved into a powerhouse of international logistics, quality assurance, and ethical supply chain management. We don't just export products; we export the integrity of the Indian farmer.</p>
              </div>
              <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12" staggerDelay={0.15}>
                <StaggerItem>
                  <div className="border border-outline-variant/40 p-8 ambient-shadow bg-surface-container-lowest hover:-translate-y-1 transition-transform duration-300">
                    <span className="material-symbols-outlined text-secondary mb-4 text-4xl">visibility</span>
                    <h3 className="font-subheading-md text-subheading-md mb-2">Our Vision</h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed uppercase tracking-wider">To be the most trusted global bridge for sustainable agricultural trade.</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border border-outline-variant/40 p-8 ambient-shadow bg-surface-container-lowest hover:-translate-y-1 transition-transform duration-300">
                    <span className="material-symbols-outlined text-secondary mb-4 text-4xl">flag</span>
                    <h3 className="font-subheading-md text-subheading-md mb-2">Our Mission</h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed uppercase tracking-wider">Delivering premium quality, ensuring farmer prosperity, and maintaining logistics excellence.</p>
                  </div>
                </StaggerItem>
              </StaggerGrid>
            </AnimatedSection>
          </div>
        </section>

        {/* Supply Chain Ecosystem */}
        <section className="py-section-gap bg-surface-container-low overflow-hidden">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <AnimatedSection direction="left">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Network</span>
                <h2 className="font-display text-headline-lg text-primary mb-8">Integrated Supply Ecosystem</h2>
                <div className="space-y-12">
                  {[
                    { i: "agriculture", t: "Direct Farmer Sourcing", d: "We partner with over 5,000 farmers across Karnataka and Maharashtra, ensuring fair trade and heirloom quality." },
                    { i: "verified", t: "Multi-Stage QC", d: "Rigorous testing at farm-gate, warehouse arrival, and pre-loading stages to guarantee 100% purity." },
                    { i: "local_shipping", t: "Global Transit", d: "Strategic alliances with top-tier ocean and air freight carriers for seamless door-to-door delivery." },
                  ].map((s) => (
                    <div key={s.t} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-secondary-fixed">{s.i}</span>
                      </div>
                      <div>
                        <h4 className="font-subheading-md mb-2">{s.t}</h4>
                        <p className="text-on-surface-variant">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2} className="relative">
                <div className="aspect-square bg-white ambient-shadow rounded-full flex items-center justify-center p-12 relative">
                  <div className="w-full h-full border-2 border-dashed border-outline-variant rounded-full relative animate-[spin_60s_linear_infinite]">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[16px]">public</span>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[16px]">inventory</span>
                    </div>
                  </div>
                  <div className="absolute inset-20 border-2 border-dashed border-outline-variant rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                  <div className="absolute z-10 text-center px-8">
                    <span className="font-display text-subheading-md text-primary font-bold">100% TRACEABLE</span>
                    <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mt-2">Seed to Shelf</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Facilities</span>
            <h2 className="font-display text-headline-lg text-primary">Precision Infrastructure</h2>
          </AnimatedSection>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            <StaggerItem className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
              <img className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Smart warehouse" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.08 PM.jpeg" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-subheading-md text-on-primary mb-2">Smart Warehousing</h4>
                <p className="font-label-sm text-primary-fixed">Climate-controlled facility with real-time inventory tracking.</p>
              </div>
            </StaggerItem>
            <StaggerItem className="relative group overflow-hidden">
              <img className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Quality control" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.09 PM.jpeg" />
            </StaggerItem>
            <StaggerItem className="relative group overflow-hidden">
              <img className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Processing facility" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.37 PM.jpeg" />
            </StaggerItem>
          </StaggerGrid>
          
          {/* Additional Images */}
          <AnimatedSection delay={0.3} className="mt-16">
            <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              <StaggerItem className="relative group overflow-hidden">
                <img className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-700" alt="Export operations" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.06 PM.jpeg" />
              </StaggerItem>
              <StaggerItem className="relative group overflow-hidden">
                <img className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-700" alt="Agricultural products" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.07 PM.jpeg" />
              </StaggerItem>
              <StaggerItem className="relative group overflow-hidden">
                <img className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-700" alt="Team operations" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.38 PM.jpeg" />
              </StaggerItem>
              <StaggerItem className="relative group overflow-hidden">
                <img className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-700" alt="Quality processes" src="public/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.08 PM (1).jpeg" />
              </StaggerItem>
            </StaggerGrid>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <AnimatedSection className="py-section-gap px-margin-desktop max-w-container-max mx-auto text-center border-t border-outline-variant/20">
          <h2 className="font-display text-headline-lg mb-8">Ready to Partner for Premium Quality?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 font-button-text hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Get in Touch
            </Link>
            {/* <button className="border border-primary text-primary px-12 py-5 font-button-text hover:bg-primary hover:text-white transition-all duration-300">
              Download Corporate Brochure
            </button> */}
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  );
}
