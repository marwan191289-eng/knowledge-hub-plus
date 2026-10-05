import { createFileRoute, Link } from "@tanstack/react-router";
import { COURSES_EN } from "@/lib/site";

export const Route = createFileRoute("/en/courses")({
  head: () => ({
    meta: [
      { title: "Courses | Eng. Mahmoud Shaltoot" },
      { name: "description", content: "Nuclear chemistry courses: fundamentals, reactions & reactors, and radiation safety — live online with Eng. Mahmoud Shaltoot." },
      { property: "og:title", content: "Nuclear Chemistry Courses | Mahmoud Shaltoot" },
      { property: "og:description", content: "Three progressive tracks from beginner to advanced, live online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesEn,
});

function CoursesEn() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24">
      <div className="eyebrow mb-3">COURSES</div>
      <h1 className="text-4xl font-bold lg:text-5xl">Available <span className="text-primary">courses</span></h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">Progressive tracks that build your understanding step by step. Every course includes live sessions, summaries and worked exercises.</p>
      <p className="mt-3 text-[14px] text-muted-foreground">Not sure where to start? <Link to="/en/placement" className="text-primary">Take the free placement test →</Link></p>
      <div className="mt-14 space-y-6">
        {COURSES_EN.map((c) => (
          <article key={c.id} className="grid gap-8 rounded-2xl border border-border bg-panel/60 p-8 transition hover:border-primary/50 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-[11px] uppercase tracking-[0.18em] text-dim">{c.level}</span>
                <span className={c.tagTone === "accent" ? "rounded-full bg-accent/10 px-3 py-1 text-[11px] text-accent" : "rounded-full bg-primary/10 px-3 py-1 text-[11px] text-primary"}>{c.tag}</span>
              </div>
              <h2 className="text-2xl font-semibold">{c.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-6 flex flex-wrap gap-6 text-[13px] text-dim">
                <span>Duration: <span className="text-foreground">{c.duration}</span></span>
                <span>Format: <span className="text-foreground">{c.mode}</span></span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="eyebrow mb-3">TOPICS</div>
              <ul className="space-y-2">
                {c.topics.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[14px]"><span className="size-1.5 rounded-full bg-primary" />{t}</li>
                ))}
              </ul>
              <Link to="/en/booking" search={{ course: c.id }} className="btn-primary mt-6">Reserve your seat</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
