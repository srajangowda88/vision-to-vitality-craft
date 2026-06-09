import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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

const timeline = [
  { y: "1998", t: "Founding Roots", d: "OM EXPORTS established as a domestic trading house for Byadgi chillies in Karnataka." },
  { y: "2005", t: "First International Venture", d: "Expansion into UAE and Middle Eastern markets with premium spice blends." },
  { y: "2014", t: "Infrastructure Leap", d: "Inauguration of our flagship 50,000 sq. ft. automated warehouse and testing facility." },
  { y: "2024", t: "Global Leadership", d: "Recognized as one of India's leading exporters to 40+ countries across EU, Americas, and SE Asia." },
];

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
          <div className="max-w-4xl">
            <h1 className="font-display text-display-xl text-primary mb-6">Redefining Agricultural Exports</h1>
            <p className="font-subheading-md text-subheading-md text-on-surface-variant max-w-2xl">
              Bridging traditional Indian heritage with world-class logistics precision to deliver the finest agricultural produce to every corner of the globe.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="pb-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-gutter items-center mb-24">
            <div className="relative aspect-[4/5] bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover" alt="Chilli fields in Karnataka" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUL3hkbbQBMbUdYJsxBZ9b2ZILBuqsagW5WkuU74U_QO_Wn1by8Ign6mK35Ub0NZqcHNUfXZFnhNYgKAYXimUFr7XeM8RCeVbCg58cCWbV5F5Lo-7KLzm3wlCGfs0ic1Qf2VT804z4m7ChhxaBVxwzCAl9VUkMxABo9hSTJMVKhn4pNZLCtE9AAJJ_GEj68LaTbu9QQPBHTOZ6RbesaCjMOo7DPl4mmE9amGO29WSLO_L1BeuinFvDFSvYTWZ9_uUtjUZcYTyfRQ4" />
              <div className="absolute bottom-0 right-0 p-8 bg-surface-bright/90 backdrop-blur-sm max-w-xs">
                <p className="font-label-sm text-label-sm text-secondary mb-2">SINCE 1998</p>
                <p className="font-body-rt text-body-rt font-semibold">Our journey began in the fertile lands of Byadgi, Karnataka.</p>
              </div>
            </div>
            <div className="md:pl-16">
              <h2 className="font-display text-headline-lg text-primary mb-8">From Roots to Global Horizons</h2>
              <div className="space-y-6 text-on-surface-variant font-body-rt">
                <p>OM EXPORTS started with a singular vision: to bring the authentic flavors and high-quality staples of Indian agriculture to international markets without compromise.</p>
                <p>What began as a localized sourcing unit in Karnataka has evolved into a powerhouse of international logistics, quality assurance, and ethical supply chain management. We don't just export products; we export the integrity of the Indian farmer.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="border border-outline-variant/40 p-8 ambient-shadow bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-secondary mb-4 text-4xl">visibility</span>
                  <h3 className="font-subheading-md text-subheading-md mb-2">Our Vision</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed uppercase tracking-wider">To be the most trusted global bridge for sustainable agricultural trade.</p>
                </div>
                <div className="border border-outline-variant/40 p-8 ambient-shadow bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-secondary mb-4 text-4xl">flag</span>
                  <h3 className="font-subheading-md text-subheading-md mb-2">Our Mission</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed uppercase tracking-wider">Delivering premium quality, ensuring farmer prosperity, and maintaining logistics excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-primary-container py-section-gap text-on-primary">
          <div className="px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 mb-12 md:mb-0">
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img className="w-full h-full object-cover" alt="Founder portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC-ddSXHYpDoBWiMxgA831bIxx3MN06z8qjMNRdml7SXhHVMUze8PGqOoRMe0GqJVLzsZ7CPsUgc338u-jVVIU0sM7IUOsbMVTzIp7hm7EN89QldcnhhMZk3fWs2pZcG-JiHRanbYxqFvcMXZo1vHXNWrHGDbPDSZCaG9o5olhAct6OvJHIls7pk05UWM0wn9EUttuhuCQRtHbbfQS4i-99DnGSDh6R779zKr1E8ceVjzohwxq-_6dzXNGO5Zq19-9LbAs5pDa9mk" />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <span className="material-symbols-outlined text-secondary-fixed text-6xl mb-8">format_quote</span>
              <blockquote className="font-display text-headline-lg-mobile md:text-headline-lg mb-8 leading-tight italic text-primary-fixed">
                "At OM EXPORTS, we believe that quality is not a standard to be met, but a promise to be kept. Every shipment carries our reputation and the legacy of Indian agriculture."
              </blockquote>
              <div className="mt-8">
                <p className="font-subheading-md text-subheading-md text-on-primary">Omkar Nath Sharma</p>
                <p className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-widest mb-4">Founder & Managing Director</p>
                <div className="w-48 h-12 flex items-center">
                  <svg className="w-full h-full text-secondary-fixed fill-current opacity-80" viewBox="0 0 200 60">
                    <path d="M10,40 Q30,10 50,40 T90,40 Q110,10 130,40 T170,40 Q190,10 200,40" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M40,30 Q60,50 80,30" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain Ecosystem */}
        <section className="py-section-gap bg-surface-container-low overflow-hidden">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Network</span>
                <h2 className="font-display text-headline-lg text-primary mb-8">Integrated Supply Ecosystem</h2>
                <div className="space-y-12">
                  {[
                    { i: "agriculture", t: "Direct Farmer Sourcing", d: "We partner with over 5,000 farmers across Karnataka and Maharashtra, ensuring fair trade and heirloom quality." },
                    { i: "verified", t: "Multi-Stage QC", d: "Rigorous testing at farm-gate, warehouse arrival, and pre-loading stages to guarantee 100% purity." },
                    { i: "local_shipping", t: "Global Transit", d: "Strategic alliances with top-tier ocean and air freight carriers for seamless door-to-door delivery." },
                  ].map((s) => (
                    <div key={s.t} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary-fixed">{s.i}</span>
                      </div>
                      <div>
                        <h4 className="font-subheading-md mb-2">{s.t}</h4>
                        <p className="text-on-surface-variant">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
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
              </div>
            </div>
          </div>
        </section>



        {/* Infrastructure */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Facilities</span>
            <h2 className="font-display text-headline-lg text-primary">Precision Infrastructure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
              <img className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Smart warehouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39g0LO6fnoXFNymSDSN9QYZ6YPlbLYsYkZjXSRwLPqh9GdTixfajbhRbM-r1MFGNTjY3oEijRWI8k2m1gakdGb3ntu2aWtp_yQTKm7wRL3zdYhYN58-xwGC5ULcvFHa-K69q5E5XUYK2ky_BYIZ-k63GkarVMUQqwZYwuXtNcmfAKJ-cgzFBqmTRjrfP241rQU02XoYf2lV36pDN_ogJIijAWzLA2vqLO1f2c0oE6N3pPANI5Wz_C_Hk_y6ipjPJbGcejLey0OhA" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-subheading-md text-on-primary mb-2">Smart Warehousing</h4>
                <p className="font-label-sm text-primary-fixed">Climate-controlled 50,000 sq. ft. facility with real-time inventory tracking.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden">
              <img className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Testing lab" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFHAfokSgq1gHzlgPSfm1DOajXR7ug2V97J0A8uNpv18UsZr6R7e2abzF5M8j2Ry7oza9JFqa0RZ_j7Nzm_IEOSKn19bZwAjv0Rdf8225E9y6G0m-9-PAYbQACyuFTC4uXICHGSoSSLIubMmStTNryLeRgbqoV0973VuVUUkQY1u1-epHeyLStp2j5_sm9XcHcgAD7Q8DTCdvAuxkPSDa9RAbtRlQfMGE8fDjQyzbfjGWltMY0WQZIgKsc1p-7QwA0exPBWvDoJAI" />
            </div>
            <div className="relative group overflow-hidden">
              <img className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Packaging line" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFlWjlrvWjMQPPN6Tve2ljpDcjM9olcasIDVZW_MAHMHijKteKSBs-WRoir7GFb0tE7MbJO7M-IuYwJc1SLP7oo7GI_PRX-ibN90hO3_F3ao1h0bJ-u5C5va15hpIQDwN6PSq7hvC2CgEVhIJAw2Qd-abPoNJnTcjGcXH4g7m90t0mQ_MepFwNNdMhw0MwtoqLVAO8KRLmELmdHuQLnsQ4edAwfc6eq05-Ne1ZnklEYJLKcQ_W7PmOpUT7rUS_qLwNWQde-iIIvVQ" />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-24">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Evolution</span>
            <h2 className="font-display text-headline-lg text-primary">The Growth Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full timeline-line opacity-20 hidden md:block" />
            <div className="space-y-24">
              {timeline.map((e, i) => {
                const right = i % 2 === 1;
                return (
                  <div key={e.y} className="relative flex items-center group">
                    <div className={`md:w-1/2 ${right ? "md:pr-16 md:text-right md:order-1" : "md:pr-16 text-right hidden md:block"}`}>
                      {right ? (
                        <>
                          <div className="md:hidden font-display text-headline-lg text-secondary mb-2">{e.y}</div>
                          <h4 className="font-subheading-md text-subheading-md mb-2">{e.t}</h4>
                          <p className="text-on-surface-variant">{e.d}</p>
                        </>
                      ) : (
                        <span className="font-display text-headline-lg text-outline-variant group-hover:text-secondary transition-colors duration-500">{e.y}</span>
                      )}
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary z-10 hidden md:block" />
                    <div className={`md:w-1/2 md:pl-16 ${right ? "hidden md:block md:order-2" : ""}`}>
                      {right ? (
                        <span className="font-display text-headline-lg text-outline-variant group-hover:text-secondary transition-colors duration-500">{e.y}</span>
                      ) : (
                        <>
                          <div className="md:hidden font-display text-headline-lg text-secondary mb-2">{e.y}</div>
                          <h4 className="font-subheading-md text-subheading-md mb-2">{e.t}</h4>
                          <p className="text-on-surface-variant">{e.d}</p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto text-center border-t border-outline-variant/20">
          <h2 className="font-display text-headline-lg mb-8">Ready to Partner for Premium Quality?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 font-button-text hover:shadow-xl transition-all duration-300">
              Get in Touch
            </Link>
            <button className="border border-primary text-primary px-12 py-5 font-button-text hover:bg-primary hover:text-white transition-all duration-300">
              Download Corporate Brochure
            </button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
