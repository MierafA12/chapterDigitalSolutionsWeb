import Link from "next/link";
import { Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { ethioCloudFeatures } from "@/lib/constants";

export function FeaturedProject() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary-dark to-primary shadow-xl">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
              <div className="flex flex-col justify-center">
                <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  Featured Project
                </span>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  EthioCloud
                </h2>
                <p className="mt-4 text-sand/90 leading-relaxed">
                  Our flagship cloud hosting platform is currently under
                  development.
                </p>
                <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  <Rocket className="h-4 w-4 text-accent" />
                  Coming Soon
                </div>
                <Button asChild variant="accent" size="lg" className="mt-8 w-fit">
                <Link href="/products">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sand">
                  Features
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {ethioCloudFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-cream/90"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
