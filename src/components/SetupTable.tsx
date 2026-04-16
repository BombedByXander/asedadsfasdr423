import { Cpu } from "lucide-react";
import type { SetupSection } from "../data/setup";

export function SetupTable({ section }: { section: SetupSection }) {
  const Icon = section.icon;
  return (
    <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-md overflow-hidden shadow-sm">
      <div
        className="px-6 py-4 flex items-center justify-center gap-2 font-display font-semibold"
        style={{ backgroundColor: "var(--color-brand)", color: "var(--color-brand-foreground)" }}
      >
        <Icon className="h-5 w-5" />
        <span>{section.title}</span>
      </div>

      <div className="divide-y divide-border">
        {section.rows.map((row, idx) => (
          <div
            key={row.part}
            className={`grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-5 text-sm sm:text-base ${
              idx % 2 === 1 ? "bg-secondary/40" : ""
            }`}
          >
            <div className="flex items-center gap-2 font-medium text-foreground">
              <Cpu className="h-4 w-4 brand-accent sm:hidden" />
              {row.part}
            </div>
            <div className="text-muted-foreground">{row.brand}</div>
            <div className="text-foreground font-medium">{row.product}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
