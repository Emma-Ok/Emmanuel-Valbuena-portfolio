import type { LucideIcon } from "lucide-react"

interface ContactItemProps {
  icon: LucideIcon
  label: string
  value: string
}

export function ContactItem({ icon: Icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-start space-x-2.5 text-xs sm:text-sm flex-nowrap">
      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground min-w-fit mt-0.5" />
      <div>
        <span className="font-medium text-muted-foreground">{label}:</span>
        <span className="ml-1 text-foreground whitespace-normal break-all">{value}</span>
      </div>
    </div>
  )
}
