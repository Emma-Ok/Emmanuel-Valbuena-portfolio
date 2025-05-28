import { KnowledgeCard } from "@/app/components/atoms/knowledge-card"
import { Code, Cpu, Terminal, Brain, FlaskConical, Server } from "lucide-react"

export function KnowledgeSection() {
  const knowledgeAreas = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building fast, expressive, and visually engaging websites using React, Astro, and TailwindCSS often for real clients and creative portfolios.",
      color: "bg-accent text-chart-1",
    },
    {
      icon: Cpu,
      title: "Systems Engineering",
      description: "Applying core systems principles like concurrency, memory management, and chaos engineering to build robust, scalable architectures.",
      color: "bg-accent text-chart-2",
    },
    {
      icon: Terminal,
      title: "Python & Teaching",
      description: "Skilled in Python for academic support. I've led mentoring sessions focused on solving problems with Python, helping others build solid programming foundations.",
      color: "bg-secondary text-secondary-foreground",
    },
    
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Practical ML projects focused on real problems such as phishing detection using Python, Scikit-learn, PyTorch, and data visualization.",
      color: "bg-accent text-chart-4",
    },
    {
      icon: FlaskConical,
      title: "Chaos Engineering",
      description: "Simulating failure scenarios to explore system resilience as part of academic and operational explorations in backend infrastructure.",
      color: "bg-accent text-chart-3",
    },
    {
      icon: Server,
      title: "Full-Stack & APIs",
      description: "Designing full-stack applications with RESTful APIs, robust backends in NestJS or FastAPI, and PostgreSQL for data consistency.",
      color: "bg-accent text-chart-5",
    },
  ]

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">My Knowledge</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
          A snapshot of the technical areas I specialize in, driven by real-world challenges, collaborative projects, and continuous experimentation.
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
