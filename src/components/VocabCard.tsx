import { ExternalLink, Clock, Tag } from "lucide-react";

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
  const sourceLabel = {
    app: "App",
    web: "Web",
    book: "Book",
  };

  return (
    <div className="group bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground mb-0.5 group-hover:text-primary transition-colors">
            {word}
          </h3>
          <p className="text-sm text-primary">{translation}</p>
        </div>
        <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
          {sourceLabel[sourceType]}
        </span>
      </div>

      <div className="mt-3 p-3 bg-secondary/50 rounded-md border-l-2 border-primary/30">
        <p className="text-sm text-muted-foreground italic leading-relaxed">
          "{context}"
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <ExternalLink className="w-3 h-3" />
          <span className="truncate max-w-[120px]">{source}</span>
        </div>
        <div className="flex items-center gap-1">
          <Tag className="w-3 h-3" />
          <span className="bg-mint-light text-primary px-1.5 py-0.5 rounded text-xs">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <Clock className="w-3 h-3" />
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
};