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
    <div className="space-y-2.5 sm:space-y-3">
      <h3 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-1.5 sm:mb-2">Additional Skills</h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
