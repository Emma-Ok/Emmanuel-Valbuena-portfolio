import { PersonalInfo } from "@/app/components/molecules/personal-info"
import { ContactInfo } from "@/app/components/molecules/contact-info"
import { LanguageSkills } from "@/app/components/molecules/language-skills"
import { ProgrammingSkills } from "@/app/components/molecules/programming-skills"
import { ExtraSkills } from "@/app/components/molecules/extra-skills"
import { Button } from "@/components/ui/button"


interface LeftSidebarProps {
  closeMobileMenu: () => void;
  isMobileView: boolean;
}

export function LeftSidebar({ closeMobileMenu, isMobileView }: LeftSidebarProps) {
  return (
    <div 
      className={`
        h-full overflow-y-auto space-y-6 relative 
        pb-6 pr-6 pl-2 
        ${isMobileView ? 'pt-16' : 'pt-6'} 
      `}
    >
      {isMobileView && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 md:hidden text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground z-10"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
        </Button>
      )}
      <PersonalInfo />
      <ContactInfo />
      <LanguageSkills />
      <ProgrammingSkills />
      <ExtraSkills />
    </div>
  )
}
