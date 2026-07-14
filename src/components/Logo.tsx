import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "light";
}

export function Logo({ className, showText = true, variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary shadow-md transition-transform group-hover:scale-105">
        <Image
          src="/cds.png"
          alt="Chapter Digital Solutions"
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={cn(
              "text-sm font-bold tracking-tight",
              isLight ? "text-cream" : "text-foreground"
            )}
          >
            Chapter Digital
          </span>
          <span
            className={cn(
              "text-[10px] font-medium tracking-wider uppercase",
              isLight ? "text-sand/80" : "text-muted"
            )}
          >
            Solutions
          </span>
        </div>
      )}
    </Link>
  );
}
