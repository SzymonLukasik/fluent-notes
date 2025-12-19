import { ArrowRight, Languages, Sparkles, Target, Trophy, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const valuePoints = [
  { icon: Languages, label: "For language learners" },
  { icon: Sparkles, label: "Automate organising" },
  { icon: Target, label: "Reflect, plan, iterate" },
  { icon: Trophy, label: "Rewards for progress" },
  { icon: BookOpen, label: "Backed by science" },
];

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Value Points */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-fade-up">
            {valuePoints.map((point, index) => (
              <div
                key={point.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-light text-primary text-sm font-medium"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <point.icon className="w-3.5 h-3.5" />
                <span>{point.label}</span>
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4 animate-fade-up tracking-tight"
            style={{ animationDelay: "100ms" }}
          >
            Capture. Organise.
            <br />
            <span className="text-primary">Grow every day.</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            From vocabulary to ideas — Margin helps you collect knowledge, build habits, and track your growth with science-backed methods.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button size="lg" onClick={onGetStarted}>
              Get started
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button variant="ghost" size="lg">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};