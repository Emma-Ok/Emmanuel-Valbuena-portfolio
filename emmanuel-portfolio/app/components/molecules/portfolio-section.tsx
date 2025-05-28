import { PortfolioCard } from "@/app/components/atoms/portfolio-card"

export function PortfolioSection() {
  const projects = [
    {
      title: "Phishing Detection System",
      description: "ML-powered phishing detection tool developed to solve a real-world academic challenge in the Modelos 2 course.",
      image: "/phishing.webp",
      technologies: ["Python", "Scikit-learn", "PyTorch", "Seaborn", "LaTeX"],
      githubUrl: "https://github.com/Emma-Ok/Phishing-Detection-ML",
      liveUrl: "",
      details:
        "This machine learning project was created as part of the Modelos 2 course to address a real-world cybersecurity problem. It focuses on detecting phishing websites by analyzing their structural and behavioral features. The process included data preprocessing, model training, performance evaluation, and advanced visual reporting. The system was built using Python and libraries such as Scikit-learn and PyTorch, and the final results were documented following the IEEE LaTeX formatting standard.",
    },
    
    {
      title: "Academic Support: Logic & Representation II",
      description: "Academic monitor for an undergraduate course focused on logic and data representation using Python.",
      image: "/academicpython.webp",
      technologies: ["Python", "Pandas", "NumPy", "Trees", "Graphs", "Dinamic Programming"],
      githubUrl: "https://github.com/Emma-Ok/MonitoriasLogica2",
      liveUrl: "",
      details:
        "As an academic monitor, I support students in understanding core concepts of logical reasoning, data structures, and algorithmic thinking. I create and deliver practical tutorials using Python, Pandas, and NumPy, and help students apply theoretical knowledge to real data manipulation and problem-solving tasks.",
    },
    {
      title: "Luy's Artistic Portfolio",
        description: "A visually striking portfolio site crafted for Luy, a Medellín based audiovisual director, emphasizing his artistic identity.",
        image: "/luy.webp",
        technologies: ["Astro", "TailwindCSS", "TypeScript", "Vercel"],
        githubUrl: "https://github.com/Emma-Ok/TripboyflameLanding",
        liveUrl: "https://tripboyflame-landing.vercel.app/",
        details:
          "This portfolio site was developed for Luy, an audiovisual director from Medellín, to visually express his creative journey and professional projects. Beyond just listing work, the design and structure reflect his bold, experimental style. Built with Astro for optimal performance and TailwindCSS for expressive, responsive UI, the site blends speed with visual storytelling to represent his unique artistic voice.",
    },
    {
      title: "TripsBoysGang E-commerce Platform",
      description: "A full-stack e-commerce web app created to promote and sell products from the local brand TripsBoysGang.",
      image: "/tbg.webp",
      technologies: ["Next.js", "React", "TailwindCSS", "NestJS", "PostgreSQL", "Docker", "AWS"],
      githubUrl: "https://github.com/Emma-Ok/TBG-Frontend",
      liveUrl: "https://tripboysgang.vercel.app/",
      details:
        "This project is a complete e-commerce solution developed for TripsBoysGang, a local streetwear brand. It includes product listing, shopping cart, user authentication, order management, and admin dashboard. The frontend is built with Next.js and TailwindCSS, while the backend uses NestJS, PostgreSQL, Docker, and AWS to ensure scalability, performance, and maintainability.",
    }
    
    
    
  ]

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Portfolio</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
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
