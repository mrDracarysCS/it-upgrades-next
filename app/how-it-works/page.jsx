// app/how-it-works/page.jsx
export const metadata = {
  title: "How it works – IT Upgrades",
  description:
    "A clear, step-by-step process: discovery, pre-build, plan selection, launch, and ongoing care — with SLAs, security, and a simple subscription.",
};

const steps = [
  {
    n: 1,
    title: "Discovery",
    lead:
      "Share your vision: goals, audience, pages, features, and examples you like.",
    bullets: [
      "Brand assets (logo, colors, fonts)",
      "Pages & features list",
      "Voice & tone preferences",
    ],
    deliverable: "Discovery summary + site map draft",
  },
  {
    n: 2,
    title: "Pre-build",
    lead:
      "We implement a working draft on a private staging URL. No big upfront bill.",
    bullets: [
      "Mobile-first layout & components",
      "Initial content placement",
      "Performance-minded structure",
    ],
    deliverable: "Interactive draft on staging",
  },
  {
    n: 3,
    title: "Plan selection",
    lead:
      "Choose the subscription tier that matches complexity and support needs.",
    bullets: [
      "Website Care — $129.99/mo",
      "Business Plus — $299/mo",
      "Managed IT + Web — $499+/mo",
    ],
    deliverable: "Stripe subscription + service agreement",
  },
  {
    n: 4,
    title: "Launch",
    lead:
      "We connect your domain, enable SSL, add analytics, and go live with monitoring.",
    bullets: ["Domain + SSL", "Analytics & basic SEO", "Accessibility pass"],
    deliverable: "Production site with monitoring enabled",
  },
  {
    n: 5,
    title: "Ongoing care",
    lead:
      "Security updates, backups, and support. Request changes anytime within fair-use.",
    bullets: [
      "Monthly updates & patches",
      "Daily backups & restore points",
      "Email/chat support",
    ],
    deliverable: "Monthly health report + changelog",
  },
];

const matrix = [
  {
    area: "Hosting & SSL",
    care: "✔",
    plus: "✔ + CDN",
    managed: "✔ + CDN + policy tuning",
  },
  {
    area: "Updates & Patching",
    care: "Monthly",
    plus: "Monthly + priority fixes",
    managed: "Continuous + fleet policies",
  },
  {
    area: "Backups",
    care: "Daily · 14d",
    plus: "Daily · 30d",
    managed: "Daily + on-demand · 30d",
  },
  {
    area: "Support",
    care: "Next business day",
    plus: "Same-day priority",
    managed: "Priority queue + IT desk",
  },
  {
    area: "Performance",
    care: "Best practices",
    plus: "Tuning + caching",
    managed: "Tuning + CDN rules + audits",
  },
];

export default function HowItWorks() {
  return (
    <main className="container py-12">
      {/* HERO */}
      <section className="mb-10">
        <div
          className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-3 border rounded-full px-3 py-1"
          style={{ borderColor: "var(--border)" }}
        >
          Website-as-a-Service · Hosting · Security · Support
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          How it works
        </h1>
        <p className="muted max-w-3xl mt-2">
          We pre-build your site from your ideas, host it on our stack, and keep
          it healthy under a simple monthly subscription. Below is the exact
          path from your first message to a secure, monitored launch—and the care
          that follows.
        </p>
      </section>

      {/* STEPS */}
      <section className="grid md:grid-cols-5 gap-4">
        {steps.map((s) => (
          <article key={s.n} className="neon-border p-5 feature">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold"
              style={{
                background:
                  "linear-gradient(135deg, var(--neon-1), var(--neon-3))",
                color: "#031216",
              }}
              aria-hidden
            >
              {s.n}
            </div>
            <h2 className="mt-3 font-semibold">{s.title}</h2>
            <p className="text-sm muted mt-1">{s.lead}</p>
            <ul className="list-disc ml-5 mt-3 text-sm text-zinc-300">
              {s.bullets.map((b) => (
                <li key={b} className="my-1">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-3 text-xs text-zinc-400">
              <span
                className="px-2 py-1 rounded-full"
                style={{
                  border: "1px solid rgba(124,255,0,.35)",
                  background: "rgba(124,255,0,.12)",
                }}
              >
                Deliverable:
              </span>{" "}
              {s.deliverable}
            </div>
          </article>
        ))}
      </section>

      {/* TIMELINE + CHECKLISTS */}
      <section className="grid md:grid-cols-3 gap-4 my-10">
        <div className="neon-border p-5">
          <h3 className="font-semibold">Typical timeline</h3>
          <ul className="text-sm mt-2 text-zinc-300 space-y-2">
            <li>
              <strong>Days 0–2:</strong> Discovery & asset handoff
            </li>
            <li>
              <strong>Days 3–7:</strong> Pre-build on staging
            </li>
            <li>
              <strong>Days 7–10:</strong> Feedback & revision
            </li>
            <li>
              <strong>Days 10–12:</strong> Plan selection & prep
            </li>
            <li>
              <strong>Days 12–14:</strong> Launch & monitoring
            </li>
          </ul>
          <p className="tiny mt-3 muted">
            *Complex features (e-commerce, bookings, integrations) may extend
            timelines slightly.
          </p>
        </div>

        <div className="neon-border p-5">
          <h3 className="font-semibold">What we handle</h3>
          <ul className="text-sm mt-2 text-zinc-300 space-y-2">
            <li>Hosting, SSL, CDN, caching</li>
            <li>Security hardening & updates</li>
            <li>Daily backups & monitored uptime</li>
            <li>Accessibility & performance checks</li>
            <li>Vendor liaison (domain, email, ISP)</li>
          </ul>
        </div>

        <div className="neon-border p-5">
          <h3 className="font-semibold">What we need from you</h3>
          <ul className="text-sm mt-2 text-zinc-300 space-y-2">
            <li>Brand assets (logo, colors, fonts)</li>
            <li>Initial copy (about, services, contact)</li>
            <li>High-quality images (or we can source stock)</li>
            <li>Point of contact for approvals</li>
            <li>Domain/DNS access (we can assist)</li>
          </ul>
        </div>
      </section>

      {/* SERVICE MATRIX */}
      <section className="neon-border p-5">
        <h3 className="font-semibold mb-3">What’s included by plan</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-zinc-400">
              <tr>
                <th className="py-2 pr-3">Area</th>
                <th className="py-2 px-3">Website Care</th>
                <th className="py-2 px-3">Business Plus</th>
                <th className="py-2 pl-3">Managed IT + Web</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              {matrix.map((row) => (
                <tr key={row.area} className="border-t" style={{ borderColor: "var(--border)" }}>
                  <td className="py-3 pr-3">{row.area}</td>
                  <td className="py-3 px-3">{row.care}</td>
                  <td className="py-3 px-3">{row.plus}</td>
                  <td className="py-3 pl-3">{row.managed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="tiny mt-3 muted">
          *Detailed SLAs and fair-use limits are specified in your Service Agreement.
        </p>
      </section>

      {/* GUARANTEES */}
      <section className="grid md:grid-cols-3 gap-4 my-10">
        <div className="neon-border p-5 feature">
          <h3 className="font-semibold">Clarity guarantee</h3>
          <p className="text-sm muted mt-1">
            No surprise invoices. Anything outside scope is quoted first and only
            starts with your approval.
          </p>
        </div>
        <div className="neon-border p-5 feature">
          <h3 className="font-semibold">Security first</h3>
          <p className="text-sm muted mt-1">
            Least-privilege access, 2FA on admin systems, WAF rules, malware
            scans, and off-site encrypted backups.
          </p>
        </div>
        <div className="neon-border p-5 feature">
          <h3 className="font-semibold">Simple exit</h3>
          <p className="text-sm muted mt-1">
            If you ever want to move, buyout is straightforward. We package
            files/database for migration.
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="neon-border p-6 neon-soft flex flex-col md:flex-row items-start md:items-center gap-4 justify-between"
        aria-label="Get started"
      >
        <div>
          <h3 className="text-lg font-semibold">Ready to get started?</h3>
          <p className="muted text-sm">
            Book a 20-minute call. We’ll map your pages, recommend a plan, and
            give you a launch window.
          </p>
        </div>
        <div className="flex gap-3">
          <a href="/contact" className="btn">Book a call</a>
          <a href="/#plans" className="btn-ghost">See plans</a>
        </div>
      </section>
    </main>
  );
}
