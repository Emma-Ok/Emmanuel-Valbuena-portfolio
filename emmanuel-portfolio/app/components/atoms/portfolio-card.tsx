"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  details: string
}

export function PortfolioCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  details,
}: PortfolioCardProps) {
  return (
    <Card className="w-80 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-t-lg" />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  Ver más
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="relative h-64 w-full">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
                  </div>
                  <p className="text-muted-foreground">{details}</p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button asChild variant="outline" className="flex-1">
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild className="flex-1">
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Look Project
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
