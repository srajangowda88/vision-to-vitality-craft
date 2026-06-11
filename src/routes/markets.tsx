import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/animations/StaggerGrid";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "Export Markets | OM EXPORTS" },
      { name: "description", content: "Active supply chains across 12+ countries — Asia Pacific, Middle East, Africa and beyond." },
      { property: "og:title", content: "Export Markets | OM EXPORTS" },
      { property: "og:description", content: "Global agricultural distribution from India." },
    ],
  }),
  component: MarketsPage,
});

function MarketsPage() {
  return (
    <div className="bg-background text-on-surface grain-texture overflow-x-hidden">
      <SiteHeader />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[700px] flex items-center overflow-hidden bg-primary-container py-20">
          <motion.div
            className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-gutter items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <span className="inline-block text-secondary-fixed font-label-sm tracking-widest uppercase">Global Distribution</span>
              <h1 className="font-display text-display-xl text-primary-fixed leading-none">Feeding the World from India</h1>
              <p className="text-on-primary-container text-subheading-md max-w-md">With 30+ years of agricultural export expertise, our experienced team bridges Indian excellence with global demand through precision logistics and artisanal care.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#interactive-map" className="bg-secondary-container text-on-secondary-container px-8 py-4 font-button-text transition-transform hover:scale-105">Explore Markets</a>
                <a href="#logistics" className="border border-outline-variant text-on-primary px-8 py-4 font-button-text hover:bg-white/10 transition-colors">Logistics Network</a>
              </div>
            </div>
            <div className="hidden md:block relative h-[600px]">
              <img className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10" alt="Global export operations" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.06 PM.jpeg" />
            </div>
          </motion.div>
        </section>

        {/* Map */}
        <section className="py-section-gap map-container-bg relative overflow-hidden" id="interactive-map">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <AnimatedSection className="text-center mb-16 space-y-4">
              <h2 className="font-display text-headline-lg text-primary-fixed">Our Global Presence</h2>
              <p className="text-on-primary-container max-w-2xl mx-auto">Active supply chains across 12 strategic nations, powered by real-time logistics monitoring.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative w-full aspect-[21/9] bg-primary/20 rounded-xl border border-white/5 p-4 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="relative w-full h-full flex items-center justify-center">
                  <img className="w-full h-full object-contain opacity-50 grayscale contrast-125" alt="World map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-GZ2hfjVsnO3K4nnQbkc2abciX2JTh_MFyaexcot8O-0xo41p8SDjnIhB1yEmryabVULJuuMizvIUvEukRTsfl737cMbVCZ5Oocgiup9K3HbtDq-T03NbEkUw50F2PsqbjHoDq8rRJnvrVSj4jt3AjUSADt-APfbJl_Z1xtSfTtl03-05uWcoaRYOH3BiHPt0yfqJL5W1lu-dVPjScJQGF0NgaVx0b5Wm4PGpk-gKmrL4PMxOUbuCW3IS7MQVzr09CESqMUKM8Ns" />
                  {[
                    { top: "45%", left: "68%" }, { top: "38%", left: "72%" },
                    { top: "42%", left: "55%" }, { top: "68%", left: "52%" },
                  ].map((m, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-secondary-fixed rounded-full animate-pulse-gold shadow-[0_0_15px_rgba(255,222,170,0.6)]"
                      style={m}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-8 left-8 bg-primary-container/80 backdrop-blur-md p-6 border border-white/10 rounded-lg">
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="flex items-center gap-2 text-primary-fixed text-label-sm"><span className="w-2 h-2 bg-secondary-fixed rounded-full" /> Major Hubs</span>
                    <span className="flex items-center gap-2 text-on-primary-container text-label-sm"><span className="w-2 h-2 border border-secondary-fixed rounded-full" /> Distribution Centers</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Experience & Team */}
        <section className="py-section-gap bg-primary-container relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover opacity-50"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/Images-Videos/WhatsApp Video 2026-06-07 at 12.23.03 PM.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary-container/70" />
          </div>
          <div className="px-margin-desktop max-w-container-max mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
              <AnimatedSection direction="left">
                <div className="space-y-6">
                  <span className="inline-block text-secondary-fixed font-label-sm tracking-widest uppercase">Three Decades of Excellence</span>
                  <h2 className="font-display text-headline-lg text-primary-fixed leading-tight">30+ Years of Agricultural Export Mastery</h2>
                  <p className="text-on-primary-container text-subheading-md">Since our inception, we've built an unmatched legacy in agricultural exports. Our experienced workforce understands not just the products, but the pulse of international markets and the unique needs of each region we serve.</p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="bg-primary/10 p-6 rounded-lg border border-white/10">
                      <h4 className="font-bold text-headline-sm text-primary-fixed mb-2">Expert Team</h4>
                      <p className="text-on-primary-container text-body-rt">Well-trained professionals who understand global quality standards and market requirements</p>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-lg border border-white/10">
                      <h4 className="font-bold text-headline-sm text-primary-fixed mb-2">Skilled Workers</h4>
                      <p className="text-on-primary-container text-body-rt">Experienced workforce with deep knowledge of product handling and processing techniques</p>
                    </div>
                  </div>
                              
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-secondary-fixed rounded-full"></span>
                      <span className="text-on-primary-container font-medium">Market Intelligence</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-secondary-fixed rounded-full"></span>
                      <span className="text-on-primary-container font-medium">Quality Assurance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-secondary-fixed rounded-full"></span>
                      <span className="text-on-primary-container font-medium">Customer Focus</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img className="w-full h-48 object-cover rounded-lg shadow-lg border border-white/10" alt="Agricultural processing facility" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.08 PM.jpeg" />
                    <img className="w-full h-32 object-cover rounded-lg shadow-lg border border-white/10" alt="Quality control process" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.09 PM.jpeg" />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img className="w-full h-32 object-cover rounded-lg shadow-lg border border-white/10" alt="Export packaging" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.37 PM.jpeg" />
                    <img className="w-full h-48 object-cover rounded-lg shadow-lg border border-white/10" alt="Team at work" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.38 PM.jpeg" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Statistics */}
            <AnimatedSection delay={0.4} className="mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <h4 className="font-display text-headline-lg text-secondary-fixed mb-2">30+</h4>
                    <p className="text-on-primary-container text-label-sm uppercase tracking-wider">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="font-display text-headline-lg text-secondary-fixed mb-2">12+</h4>
                    <p className="text-on-primary-container text-label-sm uppercase tracking-wider">Countries Served</p>
                  </div>
                  <div>
                    <h4 className="font-display text-headline-lg text-secondary-fixed mb-2">500+</h4>
                    <p className="text-on-primary-container text-label-sm uppercase tracking-wider">Happy Clients</p>
                  </div>
                  <div>
                    <h4 className="font-display text-headline-lg text-secondary-fixed mb-2">99.8%</h4>
                    <p className="text-on-primary-container text-label-sm uppercase tracking-wider">Quality Success Rate</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Region Cards */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <AnimatedSection direction="left" className="md:col-span-8 group relative overflow-hidden bg-white market-card-shadow border border-outline-variant/30 p-10 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img className="w-full h-full object-cover grayscale" alt="Agricultural products" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.07 PM.jpeg" />
              </div>
              <div className="relative z-10">
                <span className="text-secondary font-label-sm tracking-widest uppercase mb-2 block">Region 01</span>
                <h3 className="font-display text-headline-lg text-primary mb-4">Asia Pacific</h3>
                <p className="text-on-surface-variant max-w-md mb-8">Our strongest growth corridor, built on three decades of expertise. Our experienced team serves culinary hubs across Singapore, Malaysia, Vietnam, and mainland China with premium spices and grains.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-subheading-md font-bold">14 Days</p>
                    <p className="text-label-sm text-on-surface-variant uppercase">Avg. Lead Time</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-subheading-md font-bold">4 Hubs</p>
                    <p className="text-label-sm text-on-surface-variant uppercase">Direct Distribution</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Singapore", "Malaysia", "Vietnam", "China"].map((c) => (
                  <span key={c} className="bg-surface-container-high px-3 py-1 text-label-sm rounded-full">{c}</span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15} className="md:col-span-4 bg-primary text-on-primary p-10 market-card-shadow flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1/2 opacity-10">
                <img className="w-full h-full object-cover" alt="Middle East operations" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.46 PM.jpeg" />
              </div>
              <div className="relative z-10">
                <span className="text-secondary-fixed font-label-sm tracking-widest uppercase mb-2 block">Region 02</span>
                <h3 className="font-display text-headline-lg leading-tight mb-4">Middle East</h3>
                <p className="text-on-primary-container text-body-rt mb-6">Leveraging decades of regional expertise, our experienced team maintains high-volume trade routes supplying UAE, Saudi Arabia, and the Gulf with certified organic produce.</p>
                <div className="bg-white/10 p-4 rounded-lg mb-6">
                  <p className="text-on-primary text-label-sm font-medium">"30 years of understanding Middle Eastern market preferences has made us the trusted choice for premium imports."</p>
                </div>
              </div>
              <div className="space-y-4 relative z-10">
                {["UAE", "Saudi Arabia", "Oman & Qatar"].map((c) => (
                  <div key={c} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="font-label-sm">{c}</span>
                    <span className="material-symbols-outlined text-secondary-fixed">trending_up</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="md:col-span-12 bg-surface-container-low p-10 border border-outline-variant/20 flex flex-col md:flex-row gap-gutter items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
                <img className="w-full h-full object-cover" alt="African market operations" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.25.39 PM.jpeg" />
              </div>
              <div className="flex-1 relative z-10">
                <span className="text-secondary font-label-sm tracking-widest uppercase mb-2 block">Region 03</span>
                <h3 className="font-display text-headline-lg text-primary mb-4">Africa & Emerging Markets</h3>
                <p className="text-on-surface-variant max-w-xl mb-6">Our experienced team, with deep understanding of diverse cultural and regulatory landscapes, connects South Africa and developing markets across the continent to India's vast agricultural heritage. Three decades of expertise ensures seamless distribution through strategic partnerships in Cape Town and Durban.</p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="text-primary text-body-rt font-medium">"Our workers understand the unique requirements of each African market, ensuring products meet local preferences and quality standards."</p>
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white p-6 market-card-shadow rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2">shield_lock</span>
                  <p className="font-bold">SGS Certified</p>
                  <p className="text-label-sm text-on-surface-variant mt-1">Since 1994</p>
                </div>
                <div className="bg-white p-6 market-card-shadow rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2">potted_plant</span>
                  <p className="font-bold">100% Traceable</p>
                  <p className="text-label-sm text-on-surface-variant mt-1">Farm to Fork</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Logistics */}
        <section className="py-section-gap bg-surface" id="logistics">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <AnimatedSection className="flex flex-col md:flex-row gap-gutter items-end mb-16">
              <div className="md:w-1/2">
                <h2 className="font-display text-headline-lg text-primary mb-4">Network Logistics</h2>
                <p className="text-on-surface-variant text-subheading-md">Optimized shipping routes from India's premier export gateways: Mumbai (JNPT) and Chennai Ports.</p>
              </div>
              <div className="md:w-1/2 flex justify-end gap-8">
                <div className="text-right">
                  <p className="text-headline-lg font-bold text-secondary">08</p>
                  <p className="text-label-sm uppercase">Weekly Sailings</p>
                </div>
                <div className="text-right">
                  <p className="text-headline-lg font-bold text-secondary">42</p>
                  <p className="text-label-sm uppercase">Vessel Partners</p>
                </div>
              </div>
            </AnimatedSection>
            <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-12" staggerDelay={0.15}>
              {[
                { icon: "anchor", title: "Mumbai (JNPT) Hub", desc: "Primary gateway for Middle East and African markets. State-of-the-art cold storage and rapid transit handling.", routes: ["Jebel Ali: 6 Days", "Jeddah: 9 Days", "Durban: 18 Days"] },
                { icon: "sailing", title: "Chennai Port Gateway", desc: "Direct express routes serving the ASEAN and East Asian corridors with optimized container cycling.", routes: ["Singapore: 4 Days", "Port Klang: 5 Days", "Shanghai: 12 Days"] },
              ].map((p) => (
                <StaggerItem key={p.title}>
                  <div className="bg-white p-8 market-card-shadow border border-outline-variant/30 flex gap-6 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-24 h-24 bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white text-4xl">{p.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-subheading-md text-subheading-md text-primary mb-2">{p.title}</h4>
                      <p className="text-body-rt text-on-surface-variant mb-4">{p.desc}</p>
                      <ul className="space-y-2 text-label-sm font-semibold">
                        {p.routes.map((r) => (
                          <li key={r} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full" /> {r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Trust */}
        <section className="py-section-gap relative bg-gradient-to-b from-surface to-surface-container-low">
          <div className="absolute inset-0 opacity-5">
            <img className="w-full h-full object-cover" alt="Company operations" src="/Images-Videos/Logo.png" />
          </div>
          <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto text-center"> 
            <AnimatedSection>
              <span className="inline-block text-secondary font-label-sm tracking-widest uppercase mb-4">Trusted Since 1994</span>
              <h2 className="font-display text-headline-lg text-primary mb-6">Why Global Partners Choose Us</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto mb-16">Three decades of agricultural export excellence, powered by experienced professionals who understand both traditional farming wisdom and modern international standards.</p>
            </AnimatedSection>
            <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-gutter" staggerDelay={0.12}>
              {[
                { i: "workspace_premium", t: "30+ Years of Quality Standards", d: "Three decades of experience in maintaining stringent multi-level quality checks that exceed international FDA and FSSAI requirements for every batch." },
                { i: "group", t: "Expert Team & Workers", d: "Well-trained professionals and skilled workers with deep understanding of product handling, processing techniques, and international market requirements." },
                { i: "handshake", t: "Market Intelligence Expertise", d: "Our experienced team understands regional specificities—from Middle Eastern spice profiles to Asian grain preferences, built over 30 years of relationships." },
              ].map((x) => (
                <StaggerItem key={x.t}>
                  <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-secondary text-5xl mb-6">{x.i}</span>
                    <h4 className="font-subheading-md text-subheading-md text-primary mb-4">{x.t}</h4>
                    <p className="text-on-surface-variant">{x.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
            
            {/* Company Values */}
            <AnimatedSection delay={0.3} className="mt-16">
              <div className="bg-primary-container/30 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="font-display text-headline-sm text-primary mb-6">Our Commitment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <img className="w-16 h-16 object-cover rounded-lg" alt="Quality process" src="/Images-Videos/WhatsApp Image 2026-06-07 at 1.01.24 PM.jpeg" />
                      <div>
                        <h5 className="font-bold text-primary mb-2">Understanding Client Needs</h5>
                        <p className="text-on-surface-variant text-body-rt">Our experienced team takes time to understand each client's unique requirements and market conditions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <img className="w-16 h-16 object-cover rounded-lg" alt="Team collaboration" src="/Images-Videos/WhatsApp Image 2026-06-07 at 12.22.53 PM.jpeg" />
                      <div>
                        <h5 className="font-bold text-primary mb-2">Continuous Innovation</h5>
                        <p className="text-on-surface-variant text-body-rt">While respecting traditional methods, we continuously adapt to modern technologies and market demands.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="mt-12">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 font-button-text rounded hover:bg-primary-container transition-all">
                Partner with Experience <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
