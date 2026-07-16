import Link from "next/link";
import {
  Briefcase,
  Code,
  Play,
  Send,
  Music2,
  Users,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/constants";

const socialIcons = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Briefcase },
  { href: siteConfig.social.github, label: "GitHub", Icon: Code },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: Users },
  { href: siteConfig.social.telegram, label: "Telegram", Icon: Send },
  { href: siteConfig.social.tiktok, label: "TikTok", Icon: Music2 },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: Play },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-sand/80">
              Building innovative software, cloud platforms, and digital
              solutions that empower businesses and developers across Africa and
              beyond.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sand">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sand">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              {socialIcons.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cream/80 transition-all hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-cream/60">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
