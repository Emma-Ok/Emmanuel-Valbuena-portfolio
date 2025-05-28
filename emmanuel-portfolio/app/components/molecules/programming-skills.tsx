import { SkillBar } from "@/app/components/atoms/skill-bar"

export function ProgrammingSkills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Go", level: 70 },
    { name: "Scikit-learn, Pytorch, TensorFlow", level: 75 },
    { name: "CI/CD", level: 60 },
    { name: "Linux, Bash", level: 70 },
    { name: "SQL, NoSQL", level: 70 },
    { name: "Git, GitHub", level: 70 }
  ]

  return (
    <div className="space-y-2.5 sm:space-y-3">
      <h3 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-1.5 sm:mb-2">Programming Languages & Frameworks</h3>
      <div className="space-y-2.5 sm:space-y-3">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} color="bg-chart-1" />
        ))}
      </div>
    </div>
  )
}
