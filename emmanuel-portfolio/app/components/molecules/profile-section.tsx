"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Eye } from "lucide-react"

export function ProfileSection() {
  return (
    <section className="mx-auto max-w-3xl bg-card rounded-lg shadow-md p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="relative w-3/5 sm:w-1/3 max-w-xs md:max-w-sm lg:max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-xl flex-shrink-0">
          <Image
            src="/profilepic.webp"
            alt="Emmanuel Bustamante Valbuena profile picture"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black/5 rounded-lg" />
        </div>

        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground mb-2">
            I&apos;m Emmanuel Bustamante Valbuena
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold mb-4">
            Systems Engineer & Developer
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
            Passionate about software engineering, I focus on building efficient, scalable, and secure solutions.​ My expertise includes Python, modern web technologies, and systems-level programming.​ Always eager to learn and apply new technologies to solve real-world problems.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 h-10">
                <Eye className="w-4 h-4 mr-2" />
                More About Me
              </Button>
            </DialogTrigger>
            <DialogContent
              className="max-h-[90vh] w-[95vw] sm:w-full sm:max-w-2xl overflow-y-auto p-4 rounded-lg"
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-card-foreground">About me</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-2 mb-2 mr-2 ml-2">
                <p className="text-sm sm:text-base text-muted-foreground">
                  Hello! I&apos;m Emmanuel, a curious, empathetic, and cheerful person who loves cats and anime (Hunter x Hunter is my absolute favorite). Beyond the code, I enjoy connecting with people, sharing knowledge, and always staying open to learning something new every day.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Academically, I&apos;m a Systems Engineering undergraduate passionate about backend development, Python, and applied machine learning.​ My journey includes projects focused on cybersecurity, chaos engineering, machine learning pipelines, and fullstack web development.​ I take pride in writing clean, maintainable code and solving real-world problems through thoughtful engineering and collaboration.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Work Philosophy:</h4>
                    <ul className="text-sm sm:text-base text-muted-foreground space-y-1">
                      <li>• Clean and maintainable code</li>
                      <li>• Practical problem-solving</li>
                      <li>• Continuous learning</li>
                      <li>• Collaboration and discipline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Interests:</h4>
                    <ul className="text-sm sm:text-base text-muted-foreground space-y-1">
                      <li>• Artificial Intelligence</li>
                      <li>• Operating Systems</li>
                      <li>• Software Architecture</li>
                      <li>• Open Source & Teaching</li>
                    </ul>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}