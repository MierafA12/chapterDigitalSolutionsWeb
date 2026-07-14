import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, product updates, development insights, and technology tutorials from Chapter Digital Solutions.",
};

export default function BlogPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeading title="Blog" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Coming Soon</h2>
            <p className="mx-auto mt-4 max-w-md text-muted leading-relaxed">
              We&apos;re preparing technical articles, product updates,
              development insights, and technology tutorials. Stay tuned.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
