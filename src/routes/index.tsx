import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/animations/StaggerGrid";
import { CountUp } from "@/components/animations/CountUp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OM EXPORTS | Premium Agricultural Logistics" },
      { name: "description", content: "Exporting premium Indian agricultural products worldwide — spices, grains, oilseeds, fibers." },
      { property: "og:title", content: "OM EXPORTS | Premium Agricultural Logistics" },
      { property: "og:description", content: "Exporting premium Indian agricultural products worldwide." },
    ],
  }),
  component: HomePage,
});

const products = [
  { name: "Dry Red Chilli", sub: "Guntur Variety, High Pungency", img: "Images-Videos/WhatsApp Image 2026-06-07 at 12.22.53 PM.jpeg" },
  { name: "Fresh Onion", sub: "Nashik Pink & Red Onions", img: "Images-Videos/WhatsApp Image 2026-06-07 at 12.22.06 PM.jpeg" },
  { name: "Ground Nuts", sub: "Hand Picked Selection (HPS)", img: "Images-Videos/Groundnut,_seeds.jpg" },
  { name: "Sugar", sub: "S30 & M30 Grade Refined", img: "Images-Videos/sugar.png" },
];

const features = [
  { icon: "verified", title: "Quality Assurance", desc: "Multi-stage testing and international certifications for every batch." },
  { icon: "local_shipping", title: "Global Logistics", desc: "Seamless door-to-port delivery using our trusted logistics partners." },
  { icon: "payments", title: "Competitive Pricing", desc: "Direct sourcing allows us to offer the best rates in the industry." },
  { icon: "inventory_2", title: "Reliable Supply", desc: "Stable inventory levels to support high-volume recurring orders." },
  { icon: "package_2", title: "Custom Packaging", desc: "Tailored packaging solutions to meet specific market regulations." },
  { icon: "schedule", title: "Timely Delivery", desc: "Optimized routes ensure your goods arrive exactly when needed." },
];

const stats = [
  { v: 50, suffix: "+", k: "Countries Served" },
  { v: 15, suffix: "+", k: "Products Exported" },
  { v: 25, suffix: "+", k: "Years Experience" },
  { v: 500, suffix: "+", k: "Global Clients" },
];

const heroVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
} as const;

const heroItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

function HomePage() {
  return (
    <div className="bg-surface grain-bg text-on-surface overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Cargo container ship at golden hour"
            src="public/Images-Videos/hero-img.png"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div
          className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full text-white"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl">
            <motion.h1 variants={heroItem} className="font-display text-display-xl mb-6 text-shadow-sm leading-tight">
              Exporting Premium Indian Agricultural Products <span className="text-gold-accent">Worldwide</span>
            </motion.h1>
            <motion.p variants={heroItem} className="font-body-rt text-lg mb-10 opacity-90 max-w-xl leading-relaxed">
              Bridging the gap between Indian farmers and global markets with enterprise-level logistics and uncompromised quality.
            </motion.p>
            <motion.div variants={heroItem} className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gold-accent text-primary px-8 py-4 font-button-text rounded shadow-xl hover:bg-white transition-all transform hover:-translate-y-1">
                Request Quote
              </Link>
              <Link to="/products" className="border border-white/50 backdrop-blur-md text-white px-8 py-4 font-button-text rounded hover:bg-white/10 transition-all">
                Explore Products
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <span className="material-symbols-outlined text-white text-3xl">expand_more</span>
        </motion.div>
      </section>

      {/* Heritage */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-gutter items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-accent" />
            <img
              className="w-full h-[500px] object-cover rounded shadow-2xl"
              alt="Indian spices"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm_XtlH6ijaSFf-8YcKRKHiCCQn02ng_vI7qJCOgL5DPWmZBIDxQOOnJTPG2m2yhUc693w0I8zSSkGKB1-kqKNLCkMXiEfGYxd7DcnkJnZiLo6DXj9J8SOsRGOtVSZvebGFPxNESBtioCdmuM61J-RemlNQL0I6ooijrOdhb71yFEaLso89yt99MdjygJR1PTNp_GzGk5oAGgQAZikQ-h1MiJwlNChSYyNXniv6vb5_mse_Yx7ysxjBdtue7BG-h9vNyZ34HH9xiM"
            />
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.15} className="md:pl-12">
            <span className="text-gold-accent font-label-sm uppercase tracking-widest block mb-4">Our Heritage</span>
            <h2 className="font-display text-headline-lg text-primary mb-6">Redefining the Standard of Quality</h2>
            <p className="text-on-surface-variant font-body-rt leading-relaxed mb-8">
              Since our inception, OM EXPORTS has been at the forefront of the agricultural export industry. We combine decades of traditional sourcing expertise with modern supply chain technology to ensure that the essence of Indian soil reaches dinner tables around the world.
            </p>
            <div className="flex items-center gap-4 text-primary font-subheading-md">
              <div className="h-px w-12 bg-gold-accent" />
              <span>Global Reliability, Artisanal Scale</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-24">
        <StaggerGrid className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.15}>
          {stats.map((s) => (
            <StaggerItem key={s.k}>
              <div className="font-display text-4xl text-secondary-fixed mb-2">
                <CountUp value={s.v} suffix={s.suffix} />
              </div>
              <div className="text-on-primary-container font-label-sm uppercase">{s.k}</div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Featured Products */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-headline-lg text-primary mb-4">Premium Product Showcase</h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto" />
        </AnimatedSection>
        <StaggerGrid className="grid md:grid-cols-4 gap-gutter" staggerDelay={0.1}>
          {products.map((p) => (
            <StaggerItem key={p.name}>
              <div className="group relative bg-white border border-outline-variant/30 rounded shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} src={p.img} />
                </div>
                <div className="p-6">
                  <h3 className="font-subheading-md text-primary mb-2">{p.name}</h3>
                  <p className="text-on-surface-variant text-sm mb-4">{p.sub}</p>
                  <Link to="/products" className="text-gold-accent font-button-text flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Global Presence */}
      <section className="bg-primary-container py-section-gap relative overflow-hidden">
        <div className="px-margin-desktop max-w-container-max mx-auto relative z-10 grid lg:grid-cols-2 gap-gutter items-center">
          <AnimatedSection direction="left">
            <span className="text-gold-accent font-label-sm uppercase tracking-widest block mb-4">Our Reach</span>
            <h2 className="font-display text-headline-lg text-white mb-6">Connecting India to the World</h2>
            <p className="text-on-primary-container font-body-rt leading-relaxed mb-8">
              Our logistics network operates with surgical precision, ensuring timely delivery to key international hubs. From the spice markets of India to the retail shelves of Vietnam and South Africa, we manage the entire journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white"><span className="material-symbols-outlined text-gold-accent">location_on</span><span>Mumbai Port Hub</span></div>
              <div className="flex items-center gap-4 text-white"><span className="material-symbols-outlined text-gold-accent">location_on</span><span>Chennai Integrated Logistics</span></div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2} className="relative h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <span className="material-symbols-outlined text-[200px] text-on-primary-container">public</span>
            </div>
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 800 400">
              <path className="shipping-line" d="M200 150 Q 300 100 450 180" stroke="#D9A441" strokeLinecap="round" strokeWidth="2" />
              <path className="shipping-line" d="M200 150 Q 150 250 100 300" stroke="#D9A441" strokeLinecap="round" strokeWidth="2" style={{ animationDelay: "1s" }} />
              <path className="shipping-line" d="M200 150 Q 400 300 550 350" stroke="#D9A441" strokeLinecap="round" strokeWidth="2" style={{ animationDelay: "2s" }} />
              <circle cx="200" cy="150" fill="#D9A441" r="5" />
              <circle cx="450" cy="180" fill="white" r="3" />
              <circle cx="100" cy="300" fill="white" r="3" />
              <circle cx="550" cy="350" fill="white" r="3" />
            </svg>
          </AnimatedSection>
        </div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-fixed/5 blur-[120px] rounded-full" />
      </section>

      {/* Why Choose Us */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-headline-lg text-primary mb-4">Commitment to Excellence</h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto" />
        </AnimatedSection>
        <StaggerGrid className="grid md:grid-cols-3 gap-y-12 gap-x-gutter" staggerDelay={0.1}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded bg-surface-container flex items-center justify-center text-primary group-hover:bg-gold-accent group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                </div>
                <div>
                  <h3 className="font-subheading-md text-primary mb-2">{f.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Process */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <AnimatedSection className="mb-16">
            <h2 className="font-display text-headline-lg text-primary text-center">Our Export Process</h2>
          </AnimatedSection>
          <StaggerGrid className="flex flex-col md:flex-row items-center justify-between gap-8 relative" staggerDelay={0.2}>
            <div className="absolute top-8 md:top-1/2 left-0 w-full h-px bg-outline-variant/30 hidden md:block -translate-y-1/2" />
            {[
              { n: 1, t: "Ethical Sourcing", d: "Procured directly from audited farms across India.", fill: true },
              { n: 2, t: "Quality Check", d: "Rigorous laboratory testing and cleaning processes.", fill: false },
              { n: 3, t: "Premium Packing", d: "Secure, moisture-resistant industrial packaging.", fill: false },
              { n: 4, t: "Global Shipping", d: "Fast transit with real-time tracking updates.", fill: true },
            ].map((s) => (
              <StaggerItem key={s.n} className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg transition-transform duration-500 hover:scale-110 ${s.fill ? "bg-primary text-white" : "bg-white border-2 border-primary text-primary"}`}>{s.n}</div>
                <h4 className="font-subheading-md text-sm mb-2">{s.t}</h4>
                <p className="text-xs text-on-surface-variant">{s.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Shipping terminal at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmArGSodJ56ETdN5CS8VAc9a-CcBpbMWblIu1rcdFAsaa76ITaeAScy_YCWZ5mR9WbFyYA9AqkL3QhPiVpwhOkjQvPKtRQasdbhV7rS9Pw8buOfHpWsAMp9vqJ1WRkqMX6xt05PbyTnBB-DXHx3teBGiiscbLN2H-qVG1nmz7zeseC4Odm8W5vS3X3yqNXWwC2pdGJsNPz14F3CxI-N_W2Z_4mVpYBMPYnDjIiVbOEAx0cCwGAl9Uo9qkq64Tnxd2wjfNk8j4hmlI" />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        </div>
        <AnimatedSection className="relative z-10 px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8">Ready to Scale Your Sourcing?</h2>
          <p className="text-on-primary-container text-lg max-w-2xl mx-auto mb-12">
            Connect with our trade experts today to discuss custom requirements, bulk pricing, and international logistics solutions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-gold-accent text-primary px-10 py-5 font-button-text rounded-lg hover:scale-105 transition-all shadow-2xl">
              Get a Custom Quote
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 font-button-text rounded-lg hover:bg-white/20 transition-all">
              Contact Sales
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <SiteFooter />
    </div>
  );
}
