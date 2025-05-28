import { EducationCard } from "@/app/components/atoms/education-card"

export function EducationSection() {
  const education = [
    {
      institution: "University of Antioquia",
      degree: "Systems Engineering",
      period: "2019 – Present",
      status: "Undergraduate Student",
      description:
        "Ongoing undergraduate studies in software development, algorithms, data structures, and system architecture. Actively involved as an academic tutor for Logic and Representation II, supporting peers through practical problem-solving using Python."
    },
  ]

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
          My academic background and ongoing training in software engineering and system design.
        </p>
      </div>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <EducationCard
            key={index}
            institution={edu.institution}
            degree={edu.degree}
            period={edu.period}
            status={edu.status}
            description={edu.description}
          />
        ))}
      </div>
    </section>
  )
}
