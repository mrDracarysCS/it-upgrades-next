export default function Contact() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Let’s talk</h1>
      <p className="text-zinc-400 text-sm">Tell us about your business and the website you want. We’ll pre‑build and recommend the right plan.</p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
        <input className="rounded-xl border p-2 bg-zinc-950" placeholder="Your name" required style={{borderColor:'var(--border)'}}/>
        <input className="rounded-xl border p-2 bg-zinc-950" type="email" placeholder="Email" required style={{borderColor:'var(--border)'}}/>
        <input className="rounded-xl border p-2 bg-zinc-950 md:col-span-2" placeholder="Business name" style={{borderColor:'var(--border)'}}/>
        <textarea className="rounded-xl border p-2 bg-zinc-950 md:col-span-2" placeholder="Describe your website (pages, features, style)" rows={6} style={{borderColor:'var(--border)'}}></textarea>
        <button className="btn md:col-span-2" type="submit">Send</button>
      </form>
    </main>
  )
}
