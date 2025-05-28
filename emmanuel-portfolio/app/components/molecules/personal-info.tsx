import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PersonalInfo() {
  return (
    <div className="text-center space-y-4">
      <Avatar className="w-24 h-24 mx-auto">
        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-xl font-bold text-sidebar-foreground">Emmanuel Bustamante Valbuena</h2>
        <p className="text-sm text-muted-foreground">Systems Engineer</p>
      </div>
    </div>
  )
}
