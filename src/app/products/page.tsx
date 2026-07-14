import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Chapter Digital Solutions products and upcoming solutions.",
};

export default function ProductsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeading
            title="Our Products"
            subtitle="Innovative solutions built for developers and businesses."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-foreground">
              More products coming soon
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted leading-relaxed">
              We are actively building and refining new tools and digital
              products. Check back soon for updates.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
            <h3 className="text-xl font-semibold text-muted">
              Future Products
            </h3>
            <p className="mt-2 text-muted">Coming Soon...</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
