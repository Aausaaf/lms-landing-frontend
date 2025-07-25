"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileSidebar({ children, title }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed top-20 left-4 z-40 bg-background shadow-md">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold">{title}</h2>
          </div>
          <div className="overflow-y-auto h-full">{children}</div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
