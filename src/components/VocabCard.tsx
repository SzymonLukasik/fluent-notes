import { BookOpen, ExternalLink, Clock, Tag } from "lucide-react";

interface VocabCardProps {
  word: string;
  translation: string;
  context: string;
  source: string;
  sourceType: "app" | "web" | "book";
  category: string;
  timestamp: string;
}

export const VocabCard = ({
  word,
  translation,
  context,
  source,
  sourceType,
  category,
  timestamp,
}: VocabCardProps) => {
  const sourceIcon = {
    app: "📱",
    web: "🌐",
    book: "📖",
  };

  return (
    <div className="group bg-card rounded-xl p-5 shadow-card card-hover border border-border/50">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {word}
          </h3>
          <p className="text-primary font-medium">{translation}</p>
        </div>
        <span className="text-2xl flex-shrink-0" title={sourceType}>
          {sourceIcon[sourceType]}
        </span>
      </div>

      <div className="mt-4 p-3 bg-secondary/50 rounded-lg border-l-2 border-primary/30">
        <p className="text-sm text-muted-foreground italic font-serif leading-relaxed">
          "{context}"
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <ExternalLink className="w-3.5 h-3.5" />
          <span className="truncate max-w-[150px]">{source}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5" />
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-1.5 ml-auto">
          <Clock className="w-3.5 h-3.5" />
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
};
