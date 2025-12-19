import { BookOpen, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  showDashboard?: boolean;
  onToggleView?: () => void;
}

export const Header = ({ showDashboard, onToggleView }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-honey to-honey-light flex items-center justify-center shadow-soft">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">
            Lexica
          </span>
        </div>

        <nav className="flex items-center gap-2">
          {showDashboard !== undefined && (
            <Button variant="ghost" onClick={onToggleView}>
              {showDashboard ? "Home" : "My Words"}
            </Button>
          )}
          <Button variant="soft" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Word</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};
