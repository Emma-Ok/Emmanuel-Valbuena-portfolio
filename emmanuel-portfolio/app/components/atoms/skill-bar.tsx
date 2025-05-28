interface SkillBarProps {
    name: string
    level: number
    color: string
  }
  
  export function SkillBar({ name, level, color }: SkillBarProps) {
    return (
      <div className="space-y-0.5 sm:space-y-1">
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-foreground font-medium">{name}</span>
          <span className="text-muted-foreground">{level}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-1.5 sm:h-2">
          <div className={`h-full rounded-full transition-all duration-300 ${color}`} style={{ width: `${level}%` }} />
        </div>
      </div>
    )
  }
  