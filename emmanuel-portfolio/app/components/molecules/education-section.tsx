import { EducationCard } from "@/app/components/atoms/education-card"

export function EducationSection() {
  const education = [
    {
      institution: "Universidad de Antioquia",
      degree: "Systems Engineering",
      period: "2019 - Currently",
      status: "Student",
      description:
        "Formación integral en desarrollo de software, algoritmos, estructuras de datos y arquitectura de sistemas. Proyecto de grado enfocado en aplicaciones web escalables.",
    },
  ]

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Educación</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mi trayectoria académica y formación continua en tecnologías de desarrollo.
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
