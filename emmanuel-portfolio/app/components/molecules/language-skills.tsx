import { SkillBar } from "@/app/components/atoms/skill-bar"

export function LanguageSkills() {
  const languages = [
    { name: "Spanish", level: 100 },
    { name: "English", level: 85 },
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Languages</h3>
      <div className="space-y-3">
        {languages.map((lang, index) => (
          <SkillBar key={index} name={lang.name} level={lang.level} color="bg-primary" />
        ))}
      </div>
    </div>
  )
}
