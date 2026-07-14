import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading title="Privacy Policy" centered={false} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="prose prose-neutral max-w-none space-y-6 text-muted dark:prose-invert">
            <p className="text-sm text-muted">
              Last updated: January 1, 2026
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed">
                When you visit our website or contact us, we may collect
                information such as your name, email address, and any message
                content you provide through our contact form.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                We use the information we collect to respond to your inquiries,
                send product updates and launch notifications, improve our
                website and services, and communicate with you about our products
                and offerings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                3. Data Storage and Security
              </h2>
              <p className="leading-relaxed">
                We take reasonable measures to protect your personal information
                from unauthorized access, alteration, or disclosure. Your data is
                stored securely and accessed only by authorized personnel.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                4. Third-Party Services
              </h2>
              <p className="leading-relaxed">
                We may use third-party services for analytics, email delivery, and
                hosting. These services have their own privacy policies governing
                the use of your information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                5. Your Rights
              </h2>
              <p className="leading-relaxed">
                You have the right to access, update, or delete your personal
                information. To exercise these rights, please contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                6. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us
                at{" "}
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
