import { Lightbulb, Shield, TrendingUp, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern technologies and continuous improvement.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Secure and dependable digital solutions.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Built to grow with businesses of every size.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Tools and platforms designed for developers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-cream/50 px-4 py-20 dark:bg-card/30 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Why Choose Us" />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <Card className="h-full text-center">
                <CardHeader className="items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted">{reason.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
