import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emmanuel Bustamante - Full-Stack Developer & Systems Engineer",
  description:
    "Interactive portfolio of Emmanuel Bustamante Valbuena, full-stack developer and systems engineer specialized in modern web technologies, Python, and system-level programming.",
  icons: [
    {
      url: "/icons8-dibujos-animados-japoneses-32.png",
      type: "image/png",
      sizes: "32x32",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
