import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="container py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-3 border rounded-full px-3 py-1" style={{borderColor:'var(--border)'}}>Website‑as‑a‑Service + Managed IT</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Launch your site. Keep it secure. Pay monthly.</h1>
          <p className="mt-3 muted max-w-prose">We pre‑build your website from your ideas, host it for you, and maintain everything — security, backups, updates, and support. No big upfront bill. Just a simple subscription.</p>
          <div className="mt-6 flex gap-3">
            <a href="#plans" className="btn">See Plans</a>
            <Link href="/try-mockup" className="btn-ghost">Try the AI mockup</Link>
          </div>
          <p className="mt-3 text-xs muted">Operating under SELMAN COMMERCE LLC (d/b/a IT Upgrades).</p>
        </div>
        <div className="card p-6">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {["Managed hosting & SSL","Security updates & monitoring","Daily backups with easy restores","Mobile‑first design"].map(x => (
              <div key={x} className="flex items-center gap-2 border rounded-xl p-3" style={{borderColor:'var(--border)'}}>
                <div className="w-2.5 h-2.5 rounded-full" style={{background:'#8b5cf6'}}/>
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Security, backups, human support</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="card p-5"><h3 className="font-semibold mb-1">Security & Monitoring</h3><p className="muted">24/7 uptime checks, SSL, firewall/WAF, and vulnerability patching keep your site safe.</p></div>
          <div className="card p-5"><h3 className="font-semibold mb-1">Daily Backups</h3><p className="muted">Automated backups with off‑site storage and fast restores for peace of mind.</p></div>
          <div className="card p-5"><h3 className="font-semibold mb-1">Human Support</h3><p className="muted">Real experts who respond quickly by email or chat. No tickets lost in the void.</p></div>
        </div>
      </section>

      <section id="plans" className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">Simple monthly plans</h2>
        <p className="muted mb-6">No big upfront costs. Scale as you grow.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {name:'Website Care', price:'$129.99/mo', badge:'Most Popular', desc:'Managed hosting + updates + backups for brochure sites.', perks:['Managed cloud hosting','Monthly core & plugin updates','Daily backups & restore','Uptime monitoring (24/7)','Email/chat support (next‑business‑day)'], cta:'#stripe-basic'},
            {name:'Business Plus', price:'$299/mo', desc:'For dynamic sites/e‑commerce with priority support.', perks:['Everything in Care Plan','E‑commerce / dynamic features supported','Security hardening & WAF','Performance tuning & CDN','Priority helpdesk (same‑day)'], cta:'#stripe-plus'},
            {name:'Managed IT + Web', price:'$499+/mo', desc:'Website + small‑business IT support in one plan.', perks:['All Business Plus features','Remote IT helpdesk (hours included)','Device/AV monitoring','Vendor management (ISP, email)','Quarterly strategy review'], cta:'/contact'}
          ].map(t => (
            <div key={t.name} className="card p-6 flex flex-col gap-3" style={{borderColor:'var(--border)'}}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.badge && <span className="text-xs px-2 py-1 rounded-full border" style={{borderColor:'rgba(99,102,241,.35)', color:'#c7d2fe', background:'rgba(67,56,202,.2)'}}>{t.badge}</span>}
              </div>
              <div className="text-3xl font-semibold">{t.price}</div>
              <p className="muted text-sm">{t.desc}</p>
              <ul className="text-sm list-disc ml-5">{t.perks.map(p => <li key={p} className="my-1">{p}</li>)}</ul>
              <a className="btn mt-3 text-center" href={t.cta}>Subscribe</a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs muted mt-2">Build‑then‑subscribe: we pre‑build from your requirements, then you choose a plan before going live.</p>
      </section>
    </main>
  )
}
