import type { LucideIcon } from "lucide-react"

interface ContactItemProps {
  icon: LucideIcon
  label: string
  value: string
}

export function ContactItem({ icon: Icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-3 text-sm flex-nowrap">
      <Icon className="w-4 h-4 text-muted-foreground min-w-fit" />
      <div>
        <span className="text-muted-foreground">{label}:</span>
        <span className="ml-1 text-foreground whitespace-normal break-all">{value}</span>
      </div>
    </div>
  )
}
