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
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 space-y-1 sm:space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
              <h3 className="text-base sm:text-lg font-semibold text-foreground order-2 sm:order-1">{institution}</h3>
              <Badge variant="secondary" className="mb-2 sm:mb-0 order-1 sm:order-2 text-xs sm:text-sm">{status}</Badge>
            </div>
            <h4 className="text-sm sm:text-md font-medium text-foreground">{degree}</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">{period}</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
