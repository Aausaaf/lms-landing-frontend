"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <div className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors duration-200"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-gray-700 hover:text-orange-500 transition-colors duration-200" />
      ) : (
        <Sun className="h-4 w-4 text-gray-300 hover:text-orange-400 transition-colors duration-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
