"use client"

import { useEffect, useState } from "react"
import { LeftSidebar } from "@/app/components/organisms/left-sidebar"
import { MainContent } from "@/app/components/organisms/main-content"
import { RightSidebar } from "@/app/components/organisms/right-sidebar"
import { Menu, X } from "lucide-react" // Icons for menu toggle

export function CVLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isMobileMenuOpen) {
        const sidebar = document.getElementById("left-sidebar")
        if (sidebar && !sidebar.contains(e.target as Node)) {
          e.preventDefault()
        }
      }
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
    } else {
      document.body.style.overflow = ""
      document.removeEventListener("touchmove", handleTouchMove)
    }

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("touchmove", handleTouchMove)
    }
  }, [isMobileMenuOpen])

  return (
    <div className="min-h-screen bg-background flex relative max-md:pb-2 md:pb-0">
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-card text-card-foreground rounded-md shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left Sidebar - Floating and Scrollable */}
      <div
        id="left-sidebar"
        className={
          `
          fixed top-4 left-2 z-20 h-[90vh] bg-sidebar shadow-lg 
          w-64 md:w-85 rounded-xl p-4 overflow-y-auto 
          transition-transform duration-300 ease-in-out 
          ${isMobileMenuOpen ? "translate-x-0 shadow-xl" : "-translate-x-full md:translate-x-0"}
        `
        }
      >
        <LeftSidebar closeMobileMenu={() => setIsMobileMenuOpen(false)} isMobileView={isMobileMenuOpen} />
      </div>

      {/* Overlay for Mobile Menu - click to close */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content - Scrollable */}
      <div className="flex-1 md:ml-96 md:mr-20 overflow-x-hidden">
        <MainContent />
      </div>

      {/* Right Sidebar - Floating and Responsive */}
      <div className="fixed bottom-100 right-2 z-30 w-10 sm:w-12 md:w-14 h-auto bg-sidebar rounded-xl shadow-lg p-2 flex flex-col items-center space-y-2">
        <RightSidebar />
      </div>
    </div>
  )
}
