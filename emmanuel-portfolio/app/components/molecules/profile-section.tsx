"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Eye } from "lucide-react"

export function ProfileSection() {
  return (
    <section className="bg-card rounded-lg shadow-md p-8">
      <div className="flex items-center gap-8">
        <Avatar className="w-32 h-32">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
          <AvatarFallback>EB</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-card-foreground mb-2">I&apos;m Emmanuel Bustamante Valbuena</h1>
          <h2 className="text-2xl text-primary font-semibold mb-4">Systems Engineer & Developer</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Passionate about software engineering, I focus on building efficient, scalable, and secure solutions.
            My expertise includes Python, modern web technologies, and systems-level programming. Always eager to learn
            and apply new technologies to solve real-world problems.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Eye className="w-4 h-4 mr-2" />
                More About Me
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>About Emmanuel Bustamante Valbuena</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Hello! I&apos;m a Systems Engineer with strong interests in backend development, Linux environments,
                  and applied machine learning. Over the last few years, I&apos;ve worked on academic and personal projects 
                  involving cybersecurity, OS-level experimentation, and data science. I enjoy tackling challenging 
                  problems and writing clean, maintainable code.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Work Philosophy:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Clean and maintainable code</li>
                      <li>• Practical problem-solving</li>
                      <li>• Continuous learning</li>
                      <li>• Collaboration and discipline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Interests:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Artificial Intelligence</li>
                      <li>• Operating Systems</li>
                      <li>• Software Architecture</li>
                      <li>• Open Source & Teaching</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV (PDF)
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
