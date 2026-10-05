import { Link } from "@tanstack/react-router";
import type { Course } from "@/lib/site";

export function CourseCard({ c }: { c: Course }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-panel/60 p-6 transition hover:border-primary/50">
      <div className="mb-6 flex items-center justify-between">
        <span className="font-display text-[11px] uppercase tracking-[0.18em] text-dim">{c.level}</span>
        <span className={c.tagTone === "accent" ? "rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent" : "rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary"}>{c.tag}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{c.title}</h3>
      <p className="mb-6 flex-1 text-[14px] leading-relaxed text-muted-foreground">{c.desc}</p>
      <div className="flex items-center justify-between border-t border-border/70 pt-5 text-[13px] text-dim">
        <span>{c.duration} · {c.mode}</span>
        <Link to="/booking" search={{ course: c.id }} className="font-medium text-primary">سجّل الآن</Link>
      </div>
    </div>
  );
}
