'use client'
import { useState } from 'react';

export default function TryMockup() {
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [html, setHtml] = useState('');
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) && count>0 && count<=500;

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Describe your business (max 500 words)</h1>
      <p className="muted text-sm">Enter your email to enable the Generate button.</p>
      <form className="grid gap-3 mt-4" onSubmit={async (e)=>{
        e.preventDefault(); if(!valid) return;
        setLoading(true);
        try {
          const res = await fetch('/api/mockup', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, idea }) });
          const data = await res.json();
          if (res.ok) setHtml(data.mockup_html); else setHtml(`<div class='text-sm text-zinc-400'>${data.error || 'Failed to generate mockup.'}</div>`);
        } finally { setLoading(false); }
      }}>
        <input className="rounded-xl border p-2 bg-zinc-950" type="email" placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)} required style={{borderColor:'var(--border)'}}/>
        <textarea className="rounded-xl border p-2 bg-zinc-950" rows={8} placeholder="Tell us about your business, goals, audience, and any features you want..." value={idea} onChange={e=>{setIdea(e.target.value); setCount((e.target.value.trim().match(/\S+/g)||[]).length);}} required style={{borderColor:'var(--border)'}}/>
        <div className="flex items-center justify-between"><div className="text-xs muted">{count}/500 words</div><button className="btn" type="submit" disabled={!valid || loading}>{loading ? 'Generating…' : 'Generate mockup'}</button></div>
      </form>
      <div className="card p-4 mt-4">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}
