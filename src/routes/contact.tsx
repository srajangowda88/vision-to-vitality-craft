import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | OM EXPORTS — Global Trade Desk" },
      { name: "description", content: "Get a custom quote from OM EXPORTS. Connect with our trade desk for bulk agricultural exports." },
      { property: "og:title", content: "Contact Us | OM EXPORTS" },
      { property: "og:description", content: "Connect with our global trade desk." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  }

  return (
    <div className="bg-surface grainy-bg text-on-surface">
      <SiteHeader />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-20">
          <div className="relative z-10 text-center px-margin-mobile">
            <h1 className="font-display text-display-xl text-primary mb-4">Connect with our Global Trade Desk</h1>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="mt-6 font-body-rt text-body-rt text-on-surface-variant max-w-2xl mx-auto">
              Bridging Indian agricultural excellence with international demand. Our experts are ready to facilitate your next high-volume procurement.
            </p>
          </div>
        </section>

        {/* Form + details */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="glass-panel p-10 rounded-xl custom-shadow">
              <h2 className="font-display text-headline-lg text-primary mb-8">Get a Custom Quote</h2>
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Full Name"><input className={inputClass} placeholder="John Doe" type="text" required /></Field>
                  <Field label="Company Name"><input className={inputClass} placeholder="Global Logistics Inc." type="text" /></Field>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Email Address"><input className={inputClass} placeholder="john@company.com" type="email" required /></Field>
                  <Field label="Phone Number"><input className={inputClass} placeholder="+1 (555) 000-0000" type="tel" /></Field>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Product of Interest">
                    <select className={inputClass}>
                      <option>Dry Red Chilli</option>
                      <option>Ground Nuts</option>
                      <option>Spices & Herbs</option>
                      <option>Grains & Pulses</option>
                    </select>
                  </Field>
                  <Field label="Quantity (Metric Tons)"><input className={inputClass} placeholder="e.g. 50" type="number" /></Field>
                </div>
                <Field label="Destination Country"><input className={inputClass} placeholder="e.g. UAE, Netherlands, Japan" type="text" /></Field>
                <Field label="Your Message">
                  <textarea className={inputClass} placeholder="Outline your specific quality requirements or shipping timelines..." rows={4} />
                </Field>
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`w-full py-4 font-button-text rounded-lg shadow-lg transition-all hover:-translate-y-0.5 ${status === "sent" ? "bg-green-600 text-white" : "bg-primary text-on-primary"} ${status === "sending" ? "opacity-60" : ""}`}
                >
                  {status === "sending" ? "Sending Inquiry..." : status === "sent" ? "Request Sent Successfully" : "Send Inquiry"}
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-12">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-4 block">Corporate Headquarters</span>
                  <h3 className="font-subheading-md text-subheading-md text-primary mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">location_on</span> Location Details
                  </h3>
                  <p className="font-body-rt text-body-rt text-on-surface-variant leading-relaxed max-w-sm">
                    2696/A/1940/296/A, Huliyar Road, Nanjaina Kottige, Hiriyur, Chitradurga, Karnataka – 577598, India.
                  </p>
                </div>
                <Block icon="mail" title="Direct Correspondence">
                  <p className="text-on-surface-variant">Exports: trade@omexports.com</p>
                  <p className="text-on-surface-variant">Inquiries: info@omexports.com</p>
                </Block>
                <Block icon="call" title="Voice Support">
                  <p className="text-on-surface-variant">+91 98765 43210 (Main Line)</p>
                  <p className="text-on-surface-variant">+91 80 1234 5678 (Trade Desk)</p>
                </Block>
                <Block icon="schedule" title="Business Hours">
                  <p className="text-on-surface-variant">Monday – Saturday: 09:00 AM – 07:00 PM (IST)<br />Sunday: Closed</p>
                </Block>
                <div className="pt-6 border-t border-outline-variant/30">
                  <a className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all shadow-md group" href="#">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                    <span className="font-button-text">Connect on WhatsApp</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global desks */}
        <section className="bg-primary text-on-primary py-section-gap">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="mb-16">
              <h2 className="font-display text-headline-lg text-primary-fixed mb-4">Global Network Points</h2>
              <p className="text-on-primary-container max-w-xl">Dedicated logistics and quality assurance desks for our primary export markets.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                { i: "language", t: "Asia Pacific", items: ["Southeast Asia Trade Hub", "East Asia Quality Controls", "SAARC Logistics Support"] },
                { i: "location_city", t: "Middle East & GCC", items: ["UAE Distribution Center", "Saudi Arabia Trade Desk", "GCC Custom Compliances"] },
                { i: "public", t: "European Union", items: ["EU Quality Standards Desk", "Rotterdam Port Logistics", "UK & Benelux Operations"] },
              ].map((r) => (
                <div key={r.t} className="p-8 rounded-xl bg-primary-container border border-on-primary-container/10 hover:border-secondary-fixed transition-colors">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">{r.i}</span>
                  <h4 className="font-subheading-md text-subheading-md text-white mb-4">{r.t}</h4>
                  <ul className="space-y-3 text-on-primary-container">
                    {r.items.map((it) => <li key={it}>• {it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="w-full h-[500px] relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            title="Office Location"
            allowFullScreen
            className="w-full h-full border-0"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.90382379435!2d76.608307!3d13.938833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb0394747717445%3A0xe54952084f728c7f!2sHiriyur%2C%20Karnataka%20577598!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          />
        </section>
      </main>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <a className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300" href="#" aria-label="WhatsApp">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        </a>
      </div>

      <SiteFooter />
    </div>
  );
}

const inputClass =
  "border border-outline-variant bg-surface-container-low focus:border-secondary focus:ring-secondary focus:outline-none rounded-lg px-4 py-3 font-body-rt text-body-rt w-full";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{label}</label>
      {children}
    </div>
  );
}

function Block({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-subheading-md text-subheading-md text-primary mb-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-secondary">{icon}</span> {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
