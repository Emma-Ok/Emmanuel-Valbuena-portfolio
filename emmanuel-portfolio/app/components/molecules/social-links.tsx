import { SocialIcon } from "@/app/components/atoms/social-icon"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Emma-Ok", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/emmanuel-bustamante-valbuena-a7088a34b/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/emmanuel._.ok/", label: "Instagram" },
    { icon: Mail, href: "mailto:emmanuel.bustamante@udea.edu.co", label: "Email" },
  ]

  return (
    <div className="flex flex-col space-y-2 sm:space-y-3">
      {socialLinks.map((social, index) => (
        <SocialIcon
          key={index}
          icon={social.icon}
          href={social.href}
          label={social.label}
          iconClassName="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5"
        />
      ))}
    </div>
  )
}