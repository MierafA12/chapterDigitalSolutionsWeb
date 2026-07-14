import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="Terms of Service" centered={false} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="prose prose-neutral max-w-none space-y-6 text-muted dark:prose-invert">
            <p className="text-sm text-muted">
              Last updated: January 1, 2026
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using the {siteConfig.name} website, you agree
                to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                2. Use of Website
              </h2>
              <p className="leading-relaxed">
                You may use our website for lawful purposes only. You agree not
                to use the website in any way that violates applicable laws or
                regulations, or that could harm, disable, or impair the website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                3. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos,
                and software, is the property of {siteConfig.name} and is
                protected by intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our written
                permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                4. Communications
              </h2>
              <p className="leading-relaxed">
                By joining our Telegram channel or other official social media
                channels, you consent to receive updates from us regarding
                product launches, announcements, and company news. You may
                leave those channels at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                5. Disclaimer of Warranties
              </h2>
              <p className="leading-relaxed">
                Our website and services are provided &quot;as is&quot; without
                warranties of any kind. We do not guarantee that the website will
                be uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                6. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                {siteConfig.name} shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your
                use of the website or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                7. Contact
              </h2>
              <p className="leading-relaxed">
                For questions about these Terms of Service, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
