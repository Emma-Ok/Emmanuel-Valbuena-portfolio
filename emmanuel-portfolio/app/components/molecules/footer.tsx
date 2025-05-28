import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground p-4 text-center">
      <div className="flex flex-col items-center justify-center gap-2 text-sm sm:text-base">
        <span className="font-semibold">Let&apos;s work together!</span>
       
        <span className="flex items-center">
          Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Emmanuel Bustamante Valbuena ©
        </span>
      </div>
    </footer>
  )
}
