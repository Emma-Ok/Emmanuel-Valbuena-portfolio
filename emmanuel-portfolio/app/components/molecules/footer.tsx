import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background text-primary-foreground p-2 text-center">
      <div className="flex flex-col items-center justify-center gap-2 text-sm sm:text-base">
        <span className="text-muted-foreground font-semibold">Let&apos;s work together!</span>
       
        <span className="flex text-muted-foreground items-center gap-2">
          Made with <Heart className="w-4 h-4 text-muted-foreground fill-destructive" /> by Emmanuel Bustamante Valbuena ©
        </span>
      </div>
    </footer>
  )
}
