import { ProfileSection } from "@/app/components/molecules/profile-section"
import { KnowledgeSection } from "@/app/components/molecules/knowledge-section"
import { EducationSection } from "@/app/components/molecules/education-section"
import { PortfolioSection } from "@/app/components/molecules/portfolio-section"

export function MainContent() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto pr-2 pb-0 space-y-10">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
      </div>
    </div>
  )
}
