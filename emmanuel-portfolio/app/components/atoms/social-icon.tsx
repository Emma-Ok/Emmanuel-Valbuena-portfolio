import type { LucideIcon } from "lucide-react"

interface SocialIconProps {
  icon: LucideIcon
  href: string
  label: string
}

export function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors duration-300 group"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}
