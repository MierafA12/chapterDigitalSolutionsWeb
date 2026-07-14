import { Target, Eye } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function MissionVision() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn direction="left">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                To empower individuals and organizations through innovative
                technology that is accessible, reliable, and built for the
                future.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                To become a trusted technology company delivering world-class
                digital solutions across Africa and beyond.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
