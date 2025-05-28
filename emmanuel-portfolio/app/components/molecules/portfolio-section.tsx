import { PortfolioCard } from "@/app/components/atoms/portfolio-card"

export function PortfolioSection() {
  const projects = [
    {
      title: "Phishing Detection System",
      description: "ML-based system to detect phishing websites using real-world datasets",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/yourusername/phishing-detector",
      liveUrl: "",
      details:
        "A machine learning project that analyzes website features to classify phishing URLs. It includes preprocessing, model training (Random Forest, SVM), performance evaluation, and detailed visual reporting. Developed using Python libraries and presented with IEEE LaTeX formatting.",
    },
    {
      title: "Chaos Engineering in OS",
      description: "Experimenting with system failures to test OS-level resilience",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Linux", "Bash", "Python", "Docker"],
      githubUrl: "https://github.com/yourusername/chaos-os",
      liveUrl: "",
      details:
        "Final operating systems project focused on simulating failure scenarios to study system behavior and improve fault tolerance. Chaos experiments were automated via scripts and containerized environments. Metrics were collected and analyzed for system recovery validation.",
    },
    {
      title: "Personal Portfolio Website",
      description: "Clean, fast and responsive developer portfolio built with Astro",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Astro", "TailwindCSS", "TypeScript"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.vercel.app",
      details:
        "This portfolio site was created to showcase my projects, skills and academic work. Built using Astro for performance and TailwindCSS for styling, it includes interactive components and responsive design with a professional touch.",
    },
    {
      title: "CLI Process Monitor",
      description: "A Linux terminal tool to visualize and manage system processes",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "psutil", "Rich", "Linux"],
      githubUrl: "https://github.com/yourusername/process-monitor-cli",
      liveUrl: "",
      details:
        "A command-line interface tool for monitoring active system processes in Linux. Features include resource usage stats, filtering, and live updates. Built with Python and the Rich library to provide a polished and usable terminal UI.",
    },
  ]

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Portfolio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A curated selection of my most relevant projects, highlighting technical expertise, problem-solving, and system-level thinking.
        </p>
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-6 w-max">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
