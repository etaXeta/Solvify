import { Code2 } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-accent p-2 rounded-lg">
        <Code2 className="text-accent-foreground" size={24} />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-xl text-foreground leading-none">
          Solvify
        </span>
        <span className="text-[10px] text-muted-foreground leading-tight">
          Solutions that scale
        </span>
      </div>
    </div>
  );
}