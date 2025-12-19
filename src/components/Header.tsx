import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  showDashboard?: boolean;
  onToggleView?: () => void;
}

export const Header = ({ showDashboard, onToggleView }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">M</span>
          </div>
          <span className="font-semibold text-foreground">
            Margin
          </span>
        </div>

        <nav className="flex items-center gap-1">
          {showDashboard !== undefined && (
            <Button variant="ghost" size="sm" onClick={onToggleView}>
              {showDashboard ? "Home" : "My Words"}
            </Button>
          )}
          <Button size="sm" className="gap-1.5">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};