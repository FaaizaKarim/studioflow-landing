"use client";

import { useEffect, useState } from "react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const features = [
  { icon: "🗂️", title: "Briefs that stay put", text: "Every project starts with a structured brief: goals, assets, deadlines. No more digging through email threads for what the client actually asked for." },
  { icon: "🖼️", title: "Visual review & markup", text: "Clients pin comments directly on designs, videos, and PDFs. Feedback lands exactly where it belongs, with full version history." },
  { icon: "✅", title: "One-click approvals", text: "Send an approval link, get a decision. Approvals are logged and time-stamped so scope disputes end before they start." },
  { icon: "📊", title: "Workload at a glance", text: "See who's overloaded and who's free this week. Rebalance work by dragging tasks between teammates." },
  { icon: "⏰", title: "Deadline autopilot", text: "Studioflow nudges clients before their feedback is due, so your team isn't the one chasing." },
  { icon: "🔌", title: "Plays well with your stack", text: "Slack, Google Drive, Figma, and calendar integrations included on every plan, even the free one." },
];

const tiers = [
  { name: "Solo", price: "$0", period: "forever", cta: "Start free", highlight: false, points: ["1 user", "3 active projects", "Visual review & markup", "Client approval links", "Slack + Drive integrations"] },
  { name: "Studio", price: "$12", period: "per user / month", cta: "Start 14-day trial", highlight: true, points: ["Unlimited projects", "Workload dashboard", "Deadline auto-reminders", "Version history", "Priority support"] },
  { name: "Agency", price: "$29", period: "per user / month", cta: "Talk to us", highlight: false, points: ["Everything in Studio", "White-label client portal", "SSO & advanced permissions", "API access", "Dedicated success manager"] },
];

const testimonials = [
  { quote: "We stopped losing feedback in email chains the first week. Our revision rounds dropped from four to two.", name: "Mariam K.", role: "Creative Director, Karachi" },
  { quote: "The approval links alone are worth it. Clients decide faster when there's a big obvious button.", name: "Tom R.", role: "Founder, design studio, Berlin" },
  { quote: "First PM tool my designers didn't mutiny against. The visual markup feels like it was built for us.", name: "Ana P.", role: "Studio Manager, Lisbon" },
];

const faqs = [
  { q: "Do clients need an account?", a: "No. Clients review, comment, and approve through a secure link, no signup, no password. They see only what you share." },
  { q: "Can I import projects from Trello, Asana, or Notion?", a: "Yes. One-click importers for Trello and Asana, and a CSV importer that covers Notion and everything else." },
  { q: "What happens when my trial ends?", a: "You drop to the free Solo plan automatically. Your data stays intact, nothing is deleted." },
  { q: "Is my work private and secure?", a: "All data is encrypted in transit and at rest. Review links can be password-protected and expire on a date you choose." },
  { q: "Do you offer discounts for small studios?", a: "Studios under 5 people get 30% off the Studio plan for the first year. Students and nonprofits, ask us." },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left font-semibold text-slate-900 hover:text-brand-600 transition"
        aria-expanded={open}
      >
        {q}
        <span className={`ml-4 text-brand-600 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="mt-3 text-slate-600 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Home() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <main>
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur border-b border-slate-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 text-lg font-extrabold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">S</span>
            Studioflow
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-brand-600 transition">Features</a>
            <a href="#pricing" className="hover:text-brand-600 transition">Pricing</a>
            <a href="#testimonials" className="hover:text-brand-600 transition">Customers</a>
            <a href="#faq" className="hover:text-brand-600 transition">FAQ</a>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition">Start free</a>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        </nav>
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            {["features", "pricing", "testimonials", "faq", "contact"].map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block py-2 font-medium text-slate-700 capitalize hover:text-brand-600">
                {id}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white px-5 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center animate-fadeUp">
          <span className="mb-5 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
            Built for design studios, agencies & freelance teams
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Ship creative work <span className="text-brand-600">on time</span>, without the chaos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            Studioflow puts briefs, feedback, approvals, and deadlines in one place, so your studio spends less time chasing clients and more time creating.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="w-full rounded-lg bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition sm:w-auto">
              Start free, no card needed
            </a>
            <a href="#features" className="w-full rounded-lg border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 hover:border-brand-600 hover:text-brand-600 transition sm:w-auto">
              See how it works
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">Free plan forever · 14-day Studio trial · Cancel anytime</p>
        </div>

        {/* Product mock */}
        <div className="mx-auto mt-16 max-w-4xl reveal">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-slate-400">studioflow.app / projects / rebrand-2026</span>
            </div>
            <div className="grid gap-0 text-left md:grid-cols-3">
              <div className="border-b border-slate-100 p-5 md:border-b-0 md:border-r">
                <p className="text-xs font-semibold uppercase text-slate-400">In review</p>
                <p className="mt-1 text-3xl font-extrabold text-slate-900">7</p>
                <p className="mt-1 text-xs font-semibold text-amber-600">2 awaiting client</p>
              </div>
              <div className="border-b border-slate-100 p-5 md:border-b-0 md:border-r">
                <p className="text-xs font-semibold uppercase text-slate-400">Approved this week</p>
                <p className="mt-1 text-3xl font-extrabold text-slate-900">12</p>
                <p className="mt-1 text-xs font-semibold text-green-600">▲ 40% vs last week</p>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-slate-400">On-time delivery</p>
                <p className="mt-1 text-3xl font-extrabold text-slate-900">96%</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">last 90 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
          <span>2,400+ studios</span><span>·</span><span>38 countries</span><span>·</span><span>1.2M approvals delivered</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center reveal">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Everything between "brief" and "approved"</h2>
            <p className="mt-4 text-slate-600">Six things your studio stops worrying about the day you switch.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="reveal rounded-2xl border border-slate-200 p-7 transition hover:border-brand-200 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-xl">{f.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center reveal">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Pricing that scales with your studio</h2>
            <p className="mt-4 text-slate-600">Start free. Upgrade when the work does.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className={`reveal rounded-2xl border p-8 ${t.highlight ? "relative border-brand-600 bg-white shadow-xl shadow-brand-600/10" : "border-slate-200 bg-white"}`}>
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">Most popular</span>
                )}
                <h3 className="font-bold text-slate-900">{t.name}</h3>
                <p className="mt-3 text-4xl font-extrabold text-slate-900">{t.price}</p>
                <p className="text-sm text-slate-500">{t.period}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-brand-600">✓</span>{p}</li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-8 block rounded-lg px-5 py-3 text-center font-semibold transition ${t.highlight ? "bg-brand-600 text-white hover:bg-brand-700" : "border border-slate-300 text-slate-700 hover:border-brand-600 hover:text-brand-600"}`}>
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 md:text-4xl reveal">Studios that switched, stayed</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="reveal rounded-2xl border border-slate-200 bg-white p-7">
                <div className="text-brand-500" aria-hidden>★★★★★</div>
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">"{t.quote}"</blockquote>
                <figcaption className="mt-5">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 md:text-4xl reveal">Questions, answered</h2>
          <div className="mt-10 reveal">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="px-5 py-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-brand-900 px-8 py-14 text-center reveal">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold text-white md:text-4xl">Your next project, minus the chaos</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-brand-100">Start free today, or tell us about your studio and we'll set you up personally.</p>
          {sent ? (
            <p className="relative mt-8 font-semibold text-white">Thanks! We'll get back to you within one business day.</p>
          ) : (
            <form
              className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <label htmlFor="email" className="sr-only">Work email</label>
              <input id="email" type="email" required placeholder="Work email"
                className="flex-1 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              <button type="submit" className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-900 transition hover:bg-brand-50">
                Get started
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Studioflow · A portfolio project by <a href="https://github.com/FaaizaKarim" className="font-medium text-brand-600 hover:underline">Faaiza Saand</a></p>
          <div className="flex gap-6">
            <a href="#features" className="transition hover:text-brand-600">Features</a>
            <a href="#pricing" className="transition hover:text-brand-600">Pricing</a>
            <a href="#faq" className="transition hover:text-brand-600">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
