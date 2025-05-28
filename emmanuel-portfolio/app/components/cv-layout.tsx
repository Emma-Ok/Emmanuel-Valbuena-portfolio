"use client"

import { LeftSidebar } from "@/app/components/organisms/left-sidebar"
import { MainContent } from "@/app/components/organisms/main-content"
import { RightSidebar } from "@/app/components/organisms/right-sidebar"

export function CVLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar - Fixed */}
      <div className="w-80 fixed left-0 top-0 h-full bg-sidebar shadow-lg z-10">
        <LeftSidebar />
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 ml-80 mr-20">
        <MainContent />
      </div>

      {/* Right Sidebar - Fixed */}
      <div className="w-20 fixed right-0 top-0 h-full bg-sidebar shadow-lg z-10">
        <RightSidebar />
      </div>
    </div>
  )
}
