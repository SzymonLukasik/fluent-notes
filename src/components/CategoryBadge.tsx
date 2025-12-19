import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  label: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
}

export const CategoryBadge = ({
  label,
  count,
  active = false,
  onClick,
}: CategoryBadgeProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
        active
          ? "bg-primary text-primary-foreground shadow-soft"
          : "bg-secondary text-secondary-foreground hover:bg-muted"
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "px-2 py-0.5 rounded-full text-xs",
          active
            ? "bg-primary-foreground/20 text-primary-foreground"
            : "bg-muted-foreground/10 text-muted-foreground"
        )}
      >
        {count}
      </span>
    </button>
  );
};
