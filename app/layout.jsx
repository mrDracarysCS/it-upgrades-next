export const metadata = { title: "IT Upgrades – Website‑as‑a‑Service", description: "Launch your site. Keep it secure. Pay monthly." };
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 backdrop-blur border-b" style={{borderColor: 'var(--border)', background:'rgba(11,11,16,0.8)'}}>
          <div className="container py-3 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="IT Upgrades" className="w-7 h-7 rounded-lg"/>
              <span className="font-bold tracking-tight">IT Upgrades</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
              <Link href="/#features">Features</Link>
              <Link href="/#plans">Plans</Link>
              <Link href="/how-it-works">How it works</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/#plans" className="btn hidden md:inline-flex">Get Started</Link>
          </div>
        </header>
        {children}
        <footer className="border-t mt-10" style={{borderColor:'var(--border)'}}>
          <div className="container py-8 text-sm flex items-center justify-between text-zinc-400">
            <div>
              <div className="text-zinc-300 font-medium">IT Upgrades</div>
              <div className="text-xs">© {new Date().getFullYear()} SELMAN COMMERCE LLC · d/b/a IT Upgrades</div>
            </div>
            <div className="flex gap-4">
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
