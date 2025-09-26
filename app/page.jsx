'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

const headlines = [
  "Launch your site.",
  "Keep it secure.",
  "Scale as you grow.",
  "Pay monthly."
];

function useRotator(list, ms=1800){
  const [i,setI]=useState(0);
  useEffect(()=>{ const id=setInterval(()=>setI(v=>(v+1)%list.length), ms); return ()=>clearInterval(id); },[list,ms]);
  return list[i];
}

function Counter({from=0,to=1000,duration=1200,suffix=""}){
  const [n,setN]=useState(from);
  useEffect(()=>{
    let start; const diff=to-from;
    const step = (t)=>{ start??=t; const p=Math.min(1,(t-start)/duration); setN(Math.round(from + diff * (1 - Math.pow(1-p,2)))); if(p<1) requestAnimationFrame(step); };
    const r = requestAnimationFrame(step); return ()=>cancelAnimationFrame(r);
  },[from,to,duration]);
  return <span className="stat">{n.toLocaleString()}<small>{suffix}</small></span>;
}

export default function HomePage() {
  const current = useRotator(headlines, 1700);

  const features = useMemo(()=>[
    { title:"Managed Hosting & SSL", desc:"Fast global CDN, auto-SSL, HTTP/3", dot:"var(--neon-3)" },
    { title:"Security & Monitoring", desc:"WAF, malware scans, uptime alerts", dot:"var(--neon-1)" },
    { title:"Daily Backups", desc:"Off-site snapshots & one-click restore", dot:"var(--neon-4)" },
    { title:"Mobile-first", desc:"Lighthouse-friendly, responsive UI", dot:"var(--neon-2)" },
  ],[]);

  const logos = ["Acme", "Globex", "Initech", "Umbrella", "Soylent", "Stark", "Wayne", "Hooli"];

  return (
    <main>
      {/* HERO */}
      <section className="container py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-3 border rounded-full px-3 py-1"
               style={{borderColor:'var(--border)'}}>Website-as-a-Service + Managed IT</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="neon-text">{current}</span> <span className="caret"></span>
          </h1>
          <p className="mt-3 muted max-w-prose">
            We pre-build your website from your ideas, host it for you, and maintain everything — security, backups, updates, and support.
            No big upfront bill. Just a simple subscription.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#plans" className="btn">See Plans</a>
            <Link href="/try-mockup" className="btn-ghost">Try the AI mockup</Link>
          </div>
         
          <hr className="hr-neon mt-6" />
          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-6">
            <div><Counter to={24} suffix="h" /><div className="text-xs muted mt-1">Avg. response</div></div>
            <div><Counter to={99} suffix=".9%" /><div className="text-xs muted mt-1">Uptime target</div></div>
            <div><Counter to={500} suffix="+"/><div className="text-xs muted mt-1">Monthly updates</div></div>
          </div>
        </div>

        <div className="neon-border p-6 neon-soft">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {features.map(f => (
              <div key={f.title} className="feature border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full" style={{background:f.dot}}/>
                  <span className="font-medium">{f.title}</span>
                </div>
                <div className="text-zinc-400">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR (marquee) */}
      <section className="container py-6">
        <div className="marquee card p-3">
          <div className="marquee-track">
            {[...logos, ...logos].map((l,i)=>(
              <div key={i} className="text-zinc-400 text-sm border rounded-full px-3 py-1"
                   style={{borderColor:'var(--border)'}}>{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Security, backups, human support</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="card p-5 feature">
            <h3 className="font-semibold mb-1">Security & Monitoring</h3>
            <p className="muted">24/7 uptime checks, SSL, firewall/WAF, and vulnerability patching keep your site safe.</p>
          </div>
          <div className="card p-5 feature">
            <h3 className="font-semibold mb-1">Daily Backups</h3>
            <p className="muted">Automated backups with off-site storage and fast restores for peace of mind.</p>
          </div>
          <div className="card p-5 feature">
            <h3 className="font-semibold mb-1">Human Support</h3>
            <p className="muted">Real experts who respond quickly by email or chat. No tickets lost in the void.</p>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">Simple monthly plans</h2>
        <p className="muted mb-6">No big upfront costs. Scale as you grow.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {name:'Website Care', price:'$129.99/mo', badge:'Most Popular', desc:'Managed hosting + updates + backups for brochure sites.', perks:['Managed cloud hosting','Monthly core & plugin updates','Daily backups & restore','Uptime monitoring (24/7)','Email/chat support (next-business-day)'], cta:'#stripe-basic'},
            {name:'Business Plus', price:'$299/mo', desc:'For dynamic sites/e-commerce with priority support.', perks:['Everything in Care Plan','E-commerce / dynamic features supported','Security hardening & WAF','Performance tuning & CDN','Priority helpdesk (same-day)'], cta:'#stripe-plus'},
            {name:'Managed IT + Web', price:'$499+/mo', desc:'Website + small-business IT support in one plan.', perks:['All Business Plus features','Remote IT helpdesk (hours included)','Device/AV monitoring','Vendor management (ISP, email)','Quarterly strategy review'], cta:'/contact'}
          ].map(t => (
            <div key={t.name} className="neon-border p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.badge && (
                  <span className="text-xs px-2 py-1 rounded-full border"
                        style={{borderColor:'rgba(124,255,0,.4)', color:'#C8FFD2', background:'rgba(124,255,0,.12)'}}>{t.badge}</span>
                )}
              </div>
              <div className="text-3xl font-semibold">{t.price}</div>
              <p className="muted text-sm">{t.desc}</p>
              <ul className="text-sm list-disc ml-5">{t.perks.map(p => <li key={p} className="my-1">{p}</li>)}</ul>
              <a className="btn mt-3 text-center" href={t.cta}>Subscribe</a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs muted mt-2">Build-then-subscribe: we pre-build from your requirements, then you choose a plan before going live.</p>
      </section>
    </main>
  );
}
