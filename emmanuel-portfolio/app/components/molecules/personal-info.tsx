import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PersonalInfo() {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Avatar className="flex justify-center w-36 h-36 mx-auto">
        <AvatarImage src="/iconpic.webp" alt="Profile" />
        <AvatarFallback>EV</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-xl font-bold text-sidebar-foreground">Emmanuel Bustamante Valbuena</h2>
        <p className="text-sm text-muted-foreground">Systems Engineer</p>
      </div>
    </div>
  )
}
