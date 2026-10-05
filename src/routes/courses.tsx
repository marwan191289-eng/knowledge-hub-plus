import { createFileRoute, Link } from "@tanstack/react-router";
import { COURSES } from "@/lib/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "الدورات | المهندس محمود شلتوت" },
      { name: "description", content: "دورات الكيمياء النووية: الأساسيات، التفاعلات والمفاعلات، والسلامة الإشعاعية — أونلاين مع المهندس محمود شلتوت." },
      { property: "og:title", content: "دورات الكيمياء النووية | محمود شلتوت" },
      { property: "og:description", content: "ثلاث مسارات متدرجة من المبتدئ إلى المتقدم، أونلاين مباشر." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24">
      <div className="eyebrow mb-3">COURSES</div>
      <h1 className="text-4xl font-bold lg:text-5xl">الدورات <span className="text-primary">المتاحة</span></h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">مسارات متدرجة تبني فهمك خطوة بخطوة. كل دورة تشمل جلسات مباشرة، ملخصات، وتمارين محلولة.</p>

      <div className="mt-14 space-y-6">
        {COURSES.map((c) => (
          <article key={c.id} className="grid gap-8 rounded-2xl border border-border bg-panel/60 p-8 transition hover:border-primary/50 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-[11px] uppercase tracking-[0.18em] text-dim">{c.level}</span>
                <span className={c.tagTone === "accent" ? "rounded-full bg-accent/10 px-3 py-1 text-[11px] text-accent" : "rounded-full bg-primary/10 px-3 py-1 text-[11px] text-primary"}>{c.tag}</span>
              </div>
              <h2 className="text-2xl font-semibold">{c.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-6 flex flex-wrap gap-6 text-[13px] text-dim">
                <span>المدة: <span className="text-foreground">{c.duration}</span></span>
                <span>النظام: <span className="text-foreground">{c.mode}</span></span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="eyebrow mb-3">المحاور</div>
              <ul className="space-y-2">
                {c.topics.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[14px]"><span className="size-1.5 rounded-full bg-primary" />{t}</li>
                ))}
              </ul>
              <Link to="/booking" search={{ course: c.id }} className="btn-primary mt-6">احجز مقعدك</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
