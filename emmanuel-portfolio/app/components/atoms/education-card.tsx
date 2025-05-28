import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  status: string
  description: string
}

export function EducationCard({ institution, degree, period, status, description }: EducationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">{institution}</h3>
              <Badge variant="secondary">{status}</Badge>
            </div>
            <h4 className="text-md font-medium text-foreground">{degree}</h4>
            <p className="text-sm text-muted-foreground">{period}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
