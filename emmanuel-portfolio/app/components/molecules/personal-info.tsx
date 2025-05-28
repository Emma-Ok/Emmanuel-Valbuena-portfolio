import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PersonalInfo() {
  return (
    <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
      <Avatar className="flex justify-center w-28 h-28 sm:w-32 sm:h-32 mx-auto">
        <AvatarImage src="/iconpic.webp" alt="Profile" />
        <AvatarFallback>EV</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-sidebar-foreground">Emmanuel Bustamante Valbuena</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">Systems Engineer</p>
      </div>
    </div>
  )
}
