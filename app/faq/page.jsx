export default function FAQ() {
  const items = [
    ["Do I own the website?","By default, websites are provided as a managed subscription (Website‑as‑a‑Service). If you wish to move to another provider, you can purchase the site for a one‑time buyout as stated in your agreement."],
    ["Is there an annual contract?","Month‑to‑month with a 30‑day cancellation window. Some promos may require a minimum term when the build is included upfront."],
    ["Can you build my website first?","Yes. We pre‑build based on your requirements and recommend the best plan. Before going live, you activate your subscription."],
    ["What platforms do you support?","We commonly manage WordPress, Webflow, and modern JAMStack sites. Custom frameworks on request."]
  ];
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-3">FAQs</h1>
      <div className="divide-y divide-white/10 card">
        {items.map(([q,a]) => (
          <details key={q} className="p-5">
            <summary className="cursor-pointer list-none font-medium">{q}</summary>
            <p className="mt-2 text-zinc-400 text-sm">{a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
