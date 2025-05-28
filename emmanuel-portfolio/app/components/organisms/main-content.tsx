import { ProfileSection } from "@/app/components/molecules/profile-section"
import { KnowledgeSection } from "@/app/components/molecules/knowledge-section"
import { EducationSection } from "@/app/components/molecules/education-section"
import { PortfolioSection } from "@/app/components/molecules/portfolio-section"
import { Footer } from "@/app/components/molecules/footer"

export function MainContent() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </div>
    </div>
  )
}
