import { Badge } from "@/components/ui/badge"

export function ExtraSkills() {
  const skills = [
    "Leadership",
    "Teamwork",
    "Effective communication",
    "Problem-solving",
    "Project management",
    "Agile methodologies",
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Additional Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
