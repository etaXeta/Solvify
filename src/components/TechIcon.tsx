interface TechIconProps {
  icon: string;
  name: string;
  size?: number;
}

export function TechIcon({ icon, name, size = 40 }: TechIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div 
        className="flex items-center justify-center bg-white rounded-lg p-3 shadow-sm border border-gray-200 group-hover:shadow-md transition-all group-hover:scale-105"
        style={{ width: size + 24, height: size + 24 }}
      >
        <div dangerouslySetInnerHTML={{ __html: icon }} style={{ width: size, height: size }} />
      </div>
      <span className="text-xs font-medium text-muted-foreground text-center">{name}</span>
    </div>
  );
}
