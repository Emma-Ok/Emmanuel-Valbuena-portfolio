import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface KnowledgeCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
}

export function KnowledgeCard({ icon: Icon, title, description, iconColor }: KnowledgeCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 text-center space-y-4">
        <div className={`w-16 h-16 rounded-full ${iconColor} flex items-center justify-center mx-auto`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
