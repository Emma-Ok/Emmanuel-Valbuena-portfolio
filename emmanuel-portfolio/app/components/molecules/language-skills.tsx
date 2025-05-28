export function LanguageSkills() {
  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2" },
  ]

  return (
    <div className="space-y-2.5 sm:space-y-3">
      <h3 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-1.5 sm:mb-2">Languages</h3>
      <div className="space-y-1 sm:space-y-1.5">
        {languages.map((lang, index) => (
          <div key={index} className="flex gap-4 justify-start text-sm sm:text-base">
            <span className="font-medium text-foreground">{lang.name}</span>
            <span className="text-muted-foreground">{lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
