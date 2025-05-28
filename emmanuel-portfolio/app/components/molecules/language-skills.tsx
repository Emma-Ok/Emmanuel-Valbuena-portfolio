import { SkillBar } from "@/app/components/atoms/skill-bar"

export function LanguageSkills() {
  const languages = [
    { name: "Spanish", level: 100 },
    { name: "English", level: 85 },
  ]

  return (
    <div className="space-y-2.5 sm:space-y-3">
      <h3 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-1.5 sm:mb-2">Languages</h3>
      <div className="space-y-2.5 sm:space-y-3">
        {languages.map((lang, index) => (
          <SkillBar key={index} name={lang.name} level={lang.level} color="bg-primary" />
        ))}
      </div>
    </div>
  )
}
