import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "الرئيسية" },
  { to: "/courses", label: "الدورات" },
  { to: "/about", label: "من أنا" },
  { to: "/booking", label: "الحجز والاستعلام" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-border/70">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-4 px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg border border-primary/40 font-display text-lg font-bold text-primary">م</div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold">{SITE.name}</div>
            <div className="font-display text-[10px] uppercase tracking-[0.22em] text-primary/80">NUCLEAR CHEMISTRY</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-9 text-[14px] text-muted-foreground md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="transition hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/booking" className="inline-flex items-center rounded-full border border-primary/50 bg-primary/5 px-5 py-2 text-[13px] font-medium text-primary transition hover:bg-primary/10">
          احجز جلسة
        </Link>
      </div>
      <nav className="flex justify-center gap-5 border-t border-border/50 py-3 text-[13px] text-muted-foreground md:hidden">
        {NAV.map((n) => (
          <Link key={n.to} to={n.to} activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>{n.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border/70">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row lg:px-10">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-lg border border-primary/40 font-display font-bold text-primary">م</div>
          <div className="text-[14px] text-muted-foreground">{SITE.name} · مهندس كيمياء نووية</div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-dim">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="transition hover:text-primary" dir="ltr">{SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`} className="transition hover:text-primary">{SITE.email}</a>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-6 left-6 z-50 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground glow-primary transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="size-7" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
    </a>
  );
}
