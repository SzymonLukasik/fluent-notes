import { Globe, Layers, Wand2, BookMarked, Search, Share2 } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Source tracking",
      description:
        "Every word remembers where it came from — articles, apps, or books.",
    },
    {
      icon: Wand2,
      title: "Auto translation",
      description:
        "Instant translations with context. See how words are actually used.",
    },
    {
      icon: Layers,
      title: "Smart categories",
      description:
        "AI organizes vocabulary by topic and difficulty automatically.",
    },
    {
      icon: BookMarked,
      title: "Context preservation",
      description:
        "Keep the original sentence. Context is everything for memory.",
    },
    {
      icon: Search,
      title: "Quick lookup",
      description:
        "Search across words, translations, and sources instantly.",
    },
    {
      icon: Share2,
      title: "Browser extension",
      description:
        "Highlight any word on any page. One click to save and organize.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Everything you need
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tools designed for how you actually learn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};