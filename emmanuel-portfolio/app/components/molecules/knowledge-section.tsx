import { KnowledgeCard } from "@/app/components/atoms/knowledge-card"
import { Code, Cpu, Terminal, Brain, FlaskConical, Server } from "lucide-react"

export function KnowledgeSection() {
  const knowledgeAreas = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web development using frameworks like Astro, React, and TailwindCSS.",
      color: "bg-accent text-chart-1",
    },
    {
      icon: Cpu,
      title: "Systems Engineering",
      description: "Strong understanding of operating systems, process management, and low-level concepts.",
      color: "bg-accent text-chart-2",
    },
    {
      icon: Terminal,
      title: "Linux & CLI",
      description: "Efficient with Linux environments, shell scripting, and system automation tasks.",
      color: "bg-secondary text-secondary-foreground",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Focused on practical ML applications such as phishing detection using Python and Scikit-learn.",
      color: "bg-accent text-chart-4",
    },
    {
      icon: FlaskConical,
      title: "Chaos Engineering",
      description: "Applying chaos principles to test and improve system resilience under failure conditions.",
      color: "bg-accent text-chart-3",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "RESTful APIs, data handling, and server-side logic using Python and modern stacks.",
      color: "bg-accent text-chart-5",
    },
  ]

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">My Knowledge</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Areas of expertise I&apos;ve developed through hands-on projects, academic work, and continuous learning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeAreas.map((area, index) => (
          <KnowledgeCard
            key={index}
            icon={area.icon}
            title={area.title}
            description={area.description}
            iconColor={area.color}
          />
        ))}
      </div>
    </section>
  )
}
