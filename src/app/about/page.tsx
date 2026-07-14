import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { coreValues, technologies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Chapter Digital Solutions — our story, core values, and the technologies we use to build innovative digital products.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeading
            title="About Us"
            subtitle="Creating innovative digital products that solve real-world problems."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mb-16">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Chapter Digital Solutions was founded with a vision to create
              innovative digital products that solve real-world problems. We
              believe technology should be accessible, scalable, and designed
              to empower people and businesses.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Core Values
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-semibold text-primary">{value}</h3>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section>
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
