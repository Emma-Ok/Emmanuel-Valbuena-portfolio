import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Let&apos;s work together!</h3>
        <p className="max-w-md mx-auto">
          Always open to new opportunities and interesting projects. Don&apos;t hesitate to contact me.
        </p>
        <div className="flex items-center justify-center space-x-1 text-sm">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-destructive fill-destructive" />
          <span>by Emmanuel Bustamante Valbuena © 2025</span>
        </div>
      </div>
    </footer>
  )
}
