import type { LucideIcon } from "lucide-react"

interface SocialIconProps {
  icon: LucideIcon
  href: string
  label: string
  iconClassName?: string
}

export function SocialIcon({ icon: Icon, href, label, iconClassName }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors duration-300 group"
      aria-label={label}
    >
      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 ${iconClassName || ''}`} />
    </a>
  )
}
