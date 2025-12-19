import { Globe, Layers, Wand2, BookMarked, Search, Share2 } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Source Tracking",
      description:
        "Every word remembers where it came from — whether it's The Economist, a Reddit thread, or your favorite novel.",
    },
    {
      icon: Wand2,
      title: "Auto Translation",
      description:
        "Instant translations with context. See not just what a word means, but how it's used.",
    },
    {
      icon: Layers,
      title: "Smart Categories",
      description:
        "AI organizes your vocabulary by topic, source, and difficulty. Find related words effortlessly.",
    },
    {
      icon: BookMarked,
      title: "Context Preservation",
      description:
        "Keep the original sentence where you found the word. Context is everything for memory.",
    },
    {
      icon: Search,
      title: "Quick Lookup",
      description:
        "Search across all your saved words, translations, contexts, and sources in milliseconds.",
    },
    {
      icon: Share2,
      title: "Browser Extension",
      description:
        "Highlight any word on any webpage. One click to save, translate, and organize.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learn smarter, not harder
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tools designed for how you actually learn — by reading, discovering,
            and remembering in context.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
