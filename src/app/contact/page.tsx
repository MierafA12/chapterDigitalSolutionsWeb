import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Chapter Digital Solutions. We'd love to hear from you.",
};

const socialLinks = [
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
  { href: siteConfig.social.github, label: "GitHub" },
  { href: siteConfig.social.facebook, label: "Facebook" },
  { href: siteConfig.social.telegram, label: "Telegram" },
  { href: siteConfig.social.tiktok, label: "TikTok" },
  { href: siteConfig.social.youtube, label: "YouTube" },
];

export default function ContactPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            title="Contact Us"
            subtitle="Have a question or want to work together? We'd love to hear from you."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 text-muted transition-colors hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="mt-1 text-muted">{siteConfig.location}</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-foreground">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                    >
                      <Send className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-6 text-lg font-semibold">Send a Message</h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
