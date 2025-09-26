import { NextResponse } from 'next/server';
import crypto from 'crypto';

function generateColorScheme(seed) {
  const h = parseInt(seed.slice(0, 8), 16);
  const hue = h % 360;
  const hue2 = (hue + 40) % 360;
  const hue3 = (hue + 200) % 360;
  return {
    primary: `hsl(${hue}, 90%, 55%)`,
    secondary: `hsl(${hue2}, 85%, 60%)`,
    accent: `hsl(${hue3}, 80%, 65%)`,
    bg: "#0b0b10",
    text: "#e5e7eb",
    muted: "#9ca3af"
  };
}

function extractKeywords(text) {
  const words = (text || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const stop = new Set(["the","and","a","an","for","of","to","in","on","at","we","our","with","from","by","is","are","it","this","that"]);
  const counts = {};
  for (const w of words) { if (!stop.has(w) && w.length > 2) counts[w] = (counts[w] || 0) + 1; }
  return Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k])=>k);
}

function suggestPages(keywords) {
  const base = ["Home", "Services", "About", "Contact"];
  if (keywords.some(k => ["shop","store","commerce","sell","products"].includes(k))) base.splice(1,0,"Shop");
  if (keywords.some(k => ["booking","appointment","schedule","reserve"].includes(k))) base.splice(1,0,"Book");
  if (keywords.some(k => ["portfolio","work","projects","gallery"].includes(k))) base.splice(1,0,"Portfolio");
  if (keywords.some(k => ["menu","food","restaurant","cafe"].includes(k))) base.splice(1,0,"Menu");
  if (keywords.some(k => ["blog","news","articles"].includes(k))) base.push("Blog");
  return [...new Set(base)].slice(0,7);
}

function buildWireframeHTML(idea, email) {
  const seed = crypto.createHash('sha1').update(idea + "|" + email).digest('hex');
  const palette = generateColorScheme(seed);
  const keywords = extractKeywords(idea);
  const pages = suggestPages(keywords);
  const heroTitle = (keywords[0] ? keywords[0][0].toUpperCase() + keywords[0].slice(1) : "Your Business") + " — Modern Website";
  const heroSubtitle = "Clean design. Fast performance. Built and managed by IT Upgrades.";

  const features = ["Managed hosting & SSL","Security updates & monitoring","Daily backups with easy restores","SEO‑ready structure","Mobile‑first design"];
  const featureCards = features.map(f => `<div class='card' style='border-color:rgba(255,255,255,.1);background:#0f1117;padding:12px;border-radius:12px;margin:4px 0;display:flex;gap:10px;align-items:center'><div style='width:10px;height:10px;border-radius:999px;background:${palette.accent}'></div><div>${f}</div></div>`).join("");
  const navLinks = pages.map(p => `<a style='color:#9ca3af;text-decoration:none'>${p}</a>`).join("");

  const styles = `
    <style>
      :root { --primary:${palette.primary}; --secondary:${palette.secondary}; --accent:${palette.accent}; --bg:${palette.bg}; --text:${palette.text}; --muted:${palette.muted}; --border: rgba(255,255,255,0.1); }
      body { margin:0; background: var(--bg); color: var(--text); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
      .nav { display:flex; align-items:center; justify-content:space-between; padding:16px 24px; border-bottom:1px solid var(--border); background: rgba(10,10,16,0.8); backdrop-filter: blur(6px); position: sticky; top: 0; }
      .logo { display:flex; align-items:center; gap:10px; font-weight:600; }
      .badge { width:28px; height:28px; border-radius:8px; background: linear-gradient(135deg, var(--primary), var(--secondary)); }
      .links { display:flex; gap:18px; color: var(--muted); font-size: 14px; }
      .hero { display:grid; grid-template-columns: 1.2fr 1fr; gap: 24px; padding: 28px 24px; max-width: 1100px; margin: 0 auto; }
      .title { font-size: clamp(28px, 4vw, 44px); font-weight: 700; line-height: 1.1; }
      .subtitle { color: var(--muted); margin-top: 8px; }
      .btn { padding: 10px 16px; border-radius: 12px; border: 1px solid var(--border); background: var(--primary); color: #0b0b10; font-weight: 700; }
      .btn.secondary { background: transparent; color: var(--text); }
      .panel { border: 1px solid var(--border); background: #11131a; border-radius: 16px; padding: 16px; }
      .footer { padding: 20px 24px; display:flex; justify-content:space-between; color: var(--muted); border-top: 1px solid var(--border); margin-top: 24px; }
      @media (max-width: 900px) { .hero { grid-template-columns: 1fr; } }
    </style>`;

  const html = `
    ${styles}
    <nav class='nav'>
      <div class='logo'><div class='badge'></div><span>${pages[0] || "Home"}</span></div>
      <div class='links'>${navLinks}</div>
    </nav>
    <section class='hero'>
      <div>
        <div class='title'>${heroTitle}</div>
        <div class='subtitle'>${heroSubtitle}</div>
        <div style='margin-top:12px;display:flex;gap:10px'>
          <button class='btn'>Get Started</button>
          <button class='btn secondary'>See Plans</button>
        </div>
      </div>
      <div class='panel'>
        ${featureCards}
      </div>
    </section>
    <div class='footer'>
      <div>Suggested pages: ${pages.join(" · ")}</div>
      <div>Palette: <span style='color:${palette.primary}'>●</span> <span style='color:${palette.secondary}'>●</span> <span style='color:${palette.accent}'>●</span></div>
    </div>`;

  return { html, pages, palette };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, idea } = body || {};
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!idea || typeof idea !== "string") {
      return NextResponse.json({ error: "idea is required." }, { status: 400 });
    }
    const words = (idea.trim().match(/\S+/g) || []).length;
    if (words > 500) {
      return NextResponse.json({ error: "Please keep your idea to 500 words or fewer." }, { status: 400 });
    }
    const result = buildWireframeHTML(idea, email);
    return NextResponse.json({ ok: true, mockup_html: result.html, pages: result.pages, palette: result.palette });
  } catch (e) {
    return NextResponse.json({ error: "Failed to generate mockup." }, { status: 500 });
  }
}
