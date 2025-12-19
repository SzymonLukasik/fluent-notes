import { ArrowRight, Sparkles, Globe, Layers } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>Smart vocabulary for language learners</span>
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Capture words,{" "}
            <span className="text-gradient">keep the context</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Mark any word while reading. Lexica automatically translates,
            categorizes, and preserves where you found it — so you never lose
            the meaning.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="hero" size="lg" onClick={onGetStarted}>
              Start learning
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="outline" size="lg">
              See how it works
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Words saved</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                12
              </div>
              <div className="text-sm text-muted-foreground">Sources</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                8
              </div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
