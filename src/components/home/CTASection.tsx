"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-linear-to-br from-sand/20 to-cream px-8 py-16 text-center shadow-sm dark:from-primary/10 dark:to-card">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Join Our Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted leading-relaxed">
              We&apos;re building exciting products that will transform the way
              developers build and deploy software. Stay connected and be the
              first to hear about upcoming releases.
            </p>
            <Button asChild variant="accent" size="lg" className="mt-8">
              <Link href={siteConfig.social.telegram} target="_blank" rel="noopener noreferrer">
                Join Telegram Channel
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
