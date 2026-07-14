"use client";

import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function JoinWaitlistButton({
  children = "Join Telegram Channel",
  ...props
}: ButtonProps) {
  return (
    <Button asChild {...props}>
      <Link href={siteConfig.social.telegram} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </Button>
  );
}
