import { Code2, Cloud, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "We build modern web, mobile, and enterprise applications designed for scalability and performance.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "We're creating developer-friendly cloud platforms that simplify deployment, infrastructure, and application management.",
  },
  {
    icon: Brain,
    title: "AI & Innovation",
    description:
      "We explore artificial intelligence to develop smarter digital products that solve real-world challenges.",
  },
];

export function WhatWeDo() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="What We Do" />

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Card className="h-full border-border/60 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
