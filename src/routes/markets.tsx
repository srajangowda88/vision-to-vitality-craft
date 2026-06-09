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
              <p className="text-on-primary-container text-subheading-md max-w-md">Bridging Indian agricultural excellence with international demand through high-stakes precision logistics and artisanal care.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#interactive-map" className="bg-secondary-container text-on-secondary-container px-8 py-4 font-button-text transition-transform hover:scale-105">Explore Markets</a>
                <a href="#logistics" className="border border-outline-variant text-on-primary px-8 py-4 font-button-text hover:bg-white/10 transition-colors">Logistics Network</a>
              </div>
            </div>
            <div className="hidden md:block relative h-[600px]">
              <img className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10" alt="Container ship" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBeiIKOCfhCAJGUP6Olq0gx3s7E0tzQqJE_EkRPQ1RenFvBJGY0W9PtORDOGGrUztesbdP2me6kkvkk2FGaywRu9JgXwh9H7YjDJV91bp_Acx880sQioRg9mUfj-dE_0ZuIR3hp5CPUHL6TpcFWhrdg_8Rvb1UORGXPOGFr3b5v6-owjJbdA39l6_cuMkJUWxhBUWhUTu9IX0Na24X3v2BAKjyxbTlZwf_uamk0x13H8oUnvPGqFSUaBg5zYAg7lMz3C6hEhHy6-o" />
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

        {/* Region Cards */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <AnimatedSection direction="left" className="md:col-span-8 group relative overflow-hidden bg-white market-card-shadow border border-outline-variant/30 p-10 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img className="w-full h-full object-cover grayscale" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRlTmKYnCu5MOsTCraY0dC4h832QCXGGtbj0f-fkMnYpmNSuy8WMc4o9XCmiYNiswrd1Byj21zTkHApKVBeRfoCkO8PulcmLdRvqMnWcEJ0Ba5fZkV6zCawOsp5Gw7YiqnhcMOV8l59YvqCpNWIOXnYyKC4AmmdmchdkR78xIMl3T76xxQlpsod8DSh9vpVRlR4XoFwwYlR-r5Hw96xQ9WqsRjoRivOli_vn9nPYg_AIv92ZFaaZMqzYCahTuKt3DY5KACbAkQpxE" />
              </div>
              <div className="relative z-10">
                <span className="text-secondary font-label-sm tracking-widest uppercase mb-2 block">Region 01</span>
                <h3 className="font-display text-headline-lg text-primary mb-4">Asia Pacific</h3>
                <p className="text-on-surface-variant max-w-md mb-8">Our strongest growth corridor, serving the culinary hubs of Singapore, Malaysia, Vietnam, and mainland China with premium spices and grains.</p>
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

            <AnimatedSection direction="right" delay={0.15} className="md:col-span-4 bg-primary text-on-primary p-10 market-card-shadow flex flex-col justify-between">
              <div>
                <span className="text-secondary-fixed font-label-sm tracking-widest uppercase mb-2 block">Region 02</span>
                <h3 className="font-display text-headline-lg leading-tight mb-4">Middle East</h3>
                <p className="text-on-primary-container text-body-rt mb-6">High-volume trade routes supplying UAE, Saudi Arabia, and the Gulf with certified organic produce.</p>
              </div>
              <div className="space-y-4">
                {["UAE", "Saudi Arabia", "Oman & Qatar"].map((c) => (
                  <div key={c} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="font-label-sm">{c}</span>
                    <span className="material-symbols-outlined text-secondary-fixed">trending_up</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="md:col-span-12 bg-surface-container-low p-10 border border-outline-variant/20 flex flex-col md:flex-row gap-gutter items-center">
              <div className="flex-1">
                <span className="text-secondary font-label-sm tracking-widest uppercase mb-2 block">Region 03</span>
                <h3 className="font-display text-headline-lg text-primary mb-4">Africa & Emerging</h3>
                <p className="text-on-surface-variant max-w-xl">Connecting South Africa and developing markets across the continent to India's vast agricultural heritage. Strategic partnerships in Cape Town and Durban ensure seamless distribution.</p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 market-card-shadow rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2">shield_lock</span>
                  <p className="font-bold">SGS Certified</p>
                </div>
                <div className="bg-white p-6 market-card-shadow rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2">potted_plant</span>
                  <p className="font-bold">100% Traceable</p>
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
        <section className="py-section-gap relative">
          <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-headline-lg text-primary mb-16">Why We Are Preferred Globally</h2>
            </AnimatedSection>
            <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-gutter" staggerDelay={0.12}>
              {[
                { i: "workspace_premium", t: "Quality Standards", d: "Stringent multi-level quality checks that exceed international FDA and FSSAI requirements for every batch." },
                { i: "timer", t: "Just-in-Time Logistics", d: "Real-time tracking and strategic warehousing ensure produce arrives at peak freshness, every time." },
                { i: "handshake", t: "Cultural Expertise", d: "Understanding regional specificities—from Middle Eastern spice profiles to Asian grain preferences." },
              ].map((x) => (
                <StaggerItem key={x.t}>
                  <div className="p-8 hover:-translate-y-1 transition-transform duration-300">
                    <span className="material-symbols-outlined text-secondary text-5xl mb-6">{x.i}</span>
                    <h4 className="font-subheading-md text-subheading-md text-primary mb-4">{x.t}</h4>
                    <p className="text-on-surface-variant">{x.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
            <AnimatedSection delay={0.3} className="mt-16">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 font-button-text rounded hover:bg-primary-container transition-all">
                Start a Conversation <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
