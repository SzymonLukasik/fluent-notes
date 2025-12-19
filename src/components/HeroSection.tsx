import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-light text-primary text-sm font-medium mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>For language learners</span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4 animate-fade-up tracking-tight"
            style={{ animationDelay: "50ms" }}
          >
            Capture words.
            <br />
            <span className="text-primary">Keep the context.</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Mark any word while reading. Margin translates, categorizes, and preserves where you found it.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "150ms" }}
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