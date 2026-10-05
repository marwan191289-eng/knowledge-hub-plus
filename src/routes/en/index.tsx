import { createFileRoute, Link } from "@tanstack/react-router";
import reactor from "@/assets/reactor.jpg";
import instructor from "@/assets/instructor.jpg";
import { COURSES_EN, SITE_EN, waLink } from "@/lib/site";
import { CourseCard } from "@/components/CourseCard";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Eng. Mahmoud Shaltoot | Online Nuclear Chemistry Courses" },
      { name: "description", content: "Nuclear chemistry courses and private tutoring with Eng. Mahmoud Ismail Shaltoot — online for students in Saudi Arabia and the Gulf." },
      { property: "og:title", content: "Eng. Mahmoud Shaltoot | Nuclear Chemistry Courses" },
      { property: "og:description", content: "Nuclear chemistry, explained clearly and in real depth — online courses and private lessons." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomeEn,
});

const STATS = [
  { v: "500+", l: "Students", tone: "text-primary" },
  { v: "12", l: "Specialized courses", tone: "text-foreground" },
  { v: "98%", l: "Satisfaction", tone: "text-foreground" },
  { v: "5+", l: "Years of experience", tone: "text-accent" },
];

const STEPS = [
  "A free assessment session to map your level and goals",
  "A flexible weekly plan that fits your schedule",
  "Summaries, exercises and homework between sessions",
];

function HomeEn() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-16 pb-16 lg:px-10 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-1.5 text-[12px] text-muted-foreground">
              <span className="pulse-dot size-1.5 rounded-full bg-primary" />
              Enrollment open for the new cohort
            </div>
            <h1 className="text-[44px] font-bold leading-[1.12] tracking-tight lg:text-[64px]">
              Nuclear chemistry, <span className="text-primary">clearly</span>
              <br />
              and in <em className="italic text-accent">real depth</em>.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Courses and private lessons by <span className="font-medium text-foreground">{SITE_EN.title}</span> — nuclear chemistry engineer and instructor. We build understanding from the roots: reactions and isotopes through to reactors, in simple, precise language designed for students in Saudi Arabia and the Gulf.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/en/booking" className="btn-primary">Start now</Link>
              <Link to="/en/placement" className="btn-ghost">Take the free placement test</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glow-primary relative overflow-hidden rounded-2xl border border-border bg-panel">
              <div className="flex items-center justify-between border-b border-border/70 px-5 py-3 font-display text-[11px] uppercase tracking-[0.2em] text-dim">
                <span>REACTOR CORE</span><span className="text-primary">● ONLINE</span>
              </div>
              <img src={reactor} alt="Glowing nuclear reactor core" width={912} height={1008} className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] border-y border-border/70 px-6 py-10 lg:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className={`font-display text-4xl font-bold lg:text-5xl ${s.tone}`}>{s.v}</div>
              <div className="mt-2 text-[13px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="eyebrow mb-3">COURSES</div>
            <h2 className="text-3xl font-bold lg:text-4xl">Available courses</h2>
          </div>
          <Link to="/en/courses" className="hidden text-[13px] text-muted-foreground transition hover:text-primary sm:inline">View all →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {COURSES_EN.map((c) => <CourseCard key={c.id} c={c} lang="en" />)}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="glow-accent overflow-hidden rounded-2xl border border-border bg-panel">
              <img src={instructor} alt={SITE_EN.title} width={912} height={1104} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow mb-3">PRIVATE LESSONS</div>
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">One-to-one lessons, <span className="text-accent">built for you</span></h2>
            <p className="mb-8 text-[16px] leading-relaxed text-muted-foreground">Live online sessions shaped around your level and goals — exam revision, a graduation project, or preparing for a career in the nuclear sector.</p>
            <div className="mb-9 space-y-4">
              {STEPS.map((s, i) => (
                <div key={s} className="flex items-center gap-4 rounded-xl border border-border bg-panel/60 p-4">
                  <span className="font-display text-lg text-primary">0{i + 1}</span>
                  <span className="text-[15px]">{s}</span>
                </div>
              ))}
            </div>
            <Link to="/en/booking" search={{ course: "private" }} className="btn-accent">Book your first session</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10">
        <div className="glow-primary rounded-3xl border border-border bg-panel/70 p-10 text-center lg:p-16">
          <div className="eyebrow mb-4">GET STARTED</div>
          <h2 className="mb-5 text-3xl font-bold leading-tight lg:text-5xl">Ready to build understanding <span className="text-primary">from the roots</span>?</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/en/booking" className="btn-primary">Book now</Link>
            <a href={waLink("Hello Eng. Mahmoud, I have a question about your courses")} target="_blank" rel="noreferrer" className="btn-ghost">Talk to the instructor</a>
          </div>
        </div>
      </section>
    </>
  );
}
