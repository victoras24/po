import { useTheme } from "next-themes";
import type { ActiveItem } from "@/components/HoverDeck/HoverDeck";
import { cn } from "@/lib/utils";

type SiteFooterProps = {
  active: ActiveItem;
  onActiveChange: (active: ActiveItem) => void;
};

export const SiteFooter = ({ active, onActiveChange }: SiteFooterProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const trigger = (item: "about" | "stack", label: string) => (
    <button
      type="button"
      onMouseEnter={() => onActiveChange(item)}
      onMouseLeave={() => onActiveChange(null)}
      onFocus={() => onActiveChange(item)}
      onBlur={() => onActiveChange(null)}
      onClick={() => onActiveChange(item)}
      className={cn(
        "cursor-default text-[24px] font-medium tracking-[-0.02em] transition-opacity duration-300",
        active !== null && active !== item && "opacity-30"
      )}
    >
      {label}
    </button>
  );

  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] py-[22px]">
      <div className="flex items-center gap-7">
        {trigger("about", "About")}
        {trigger("stack", "Stack")}
      </div>
      <div className="flex items-center gap-[22px] font-mono text-[12px]">
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="cursor-pointer rounded-full border border-border px-3 py-1.5"
        >
          {isDark ? "Light" : "Dark"}
        </button>
        <span className="text-muted-foreground">e-saakidis.online</span>
      </div>
    </footer>
  );
};
