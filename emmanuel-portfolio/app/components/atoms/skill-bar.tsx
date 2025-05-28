interface SkillBarProps {
    name: string
    level: number
    color: string
  }
  
  export function SkillBar({ name, level, color }: SkillBarProps) {
    return (
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-foreground">{name}</span>
          <span className="text-muted-foreground">{level}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div className={`h-2 rounded-full transition-all duration-300 ${color}`} style={{ width: `${level}%` }} />
        </div>
      </div>
    )
  }
  