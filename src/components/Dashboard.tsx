import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { VocabCard } from "./VocabCard";
import { CategoryBadge } from "./CategoryBadge";
import { Button } from "./ui/button";

const MOCK_WORDS = [
  {
    word: "Ubiquitous",
    translation: "Wszechobecny",
    context:
      "The ubiquitous smartphone has transformed how we communicate and consume information.",
    source: "The Economist",
    sourceType: "app" as const,
    category: "Technology",
    timestamp: "2 hours ago",
  },
  {
    word: "Ephemeral",
    translation: "Ulotny, krótkotrwały",
    context:
      "Social media stories are designed to be ephemeral, disappearing after 24 hours.",
    source: "Medium.com",
    sourceType: "web" as const,
    category: "Social Media",
    timestamp: "Yesterday",
  },
  {
    word: "Serendipity",
    translation: "Szczęśliwy traf",
    context:
      "The discovery was pure serendipity — they were looking for something entirely different.",
    source: "Scientific American",
    sourceType: "app" as const,
    category: "Science",
    timestamp: "2 days ago",
  },
  {
    word: "Eloquent",
    translation: "Wymowny, elokwentny",
    context:
      "Her eloquent speech moved the entire audience to tears.",
    source: "The New Yorker",
    sourceType: "web" as const,
    category: "Writing",
    timestamp: "3 days ago",
  },
  {
    word: "Pragmatic",
    translation: "Pragmatyczny, praktyczny",
    context:
      "We need a pragmatic approach to solving this problem, not idealistic dreams.",
    source: "Harvard Business Review",
    sourceType: "app" as const,
    category: "Business",
    timestamp: "4 days ago",
  },
  {
    word: "Melancholy",
    translation: "Melancholia, smutek",
    context:
      "A sense of melancholy pervaded the old house, as if the walls remembered happier times.",
    source: "Pride and Prejudice",
    sourceType: "book" as const,
    category: "Literature",
    timestamp: "1 week ago",
  },
];

const CATEGORIES = [
  { label: "All", count: 156 },
  { label: "Technology", count: 42 },
  { label: "Business", count: 28 },
  { label: "Science", count: 35 },
  { label: "Literature", count: 24 },
  { label: "Writing", count: 27 },
];

export const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWords = MOCK_WORDS.filter((word) => {
    const matchesCategory =
      activeCategory === "All" || word.category === activeCategory;
    const matchesSearch =
      word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.translation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search words or translations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-md border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <Button variant="outline" size="sm" className="h-10 gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <CategoryBadge
              key={cat.label}
              label={cat.label}
              count={cat.count}
              active={activeCategory === cat.label}
              onClick={() => setActiveCategory(cat.label)}
            />
          ))}
        </div>

        {/* Results count */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredWords.length} words
          </p>
        </div>

        {/* Words grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((word, index) => (
            <VocabCard key={`${word.word}-${index}`} {...word} />
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No words found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};