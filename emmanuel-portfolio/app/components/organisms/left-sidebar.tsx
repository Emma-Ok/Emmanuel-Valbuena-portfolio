import { PersonalInfo } from "@/app/components/molecules/personal-info"
import { ContactInfo } from "@/app/components/molecules/contact-info"
import { LanguageSkills } from "@/app/components/molecules/language-skills"
import { ProgrammingSkills } from "@/app/components/molecules/programming-skills"
import { ExtraSkills } from "@/app/components/molecules/extra-skills"

export function LeftSidebar() {
  return (
    <div className="h-full overflow-y-auto p-6 space-y-8">
      <PersonalInfo />
      <ContactInfo />
      <LanguageSkills />
      <ProgrammingSkills />
      <ExtraSkills />
    </div>
  )
}
