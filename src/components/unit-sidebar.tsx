"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const courseData = {
  "class-12-math": {
    title: "Class 12",
    subtitle: "13 UNITS • 125 SKILLS",
    units: [
      { id: "unit-1", title: "Relations and functions", number: 1 },
      { id: "unit-2", title: "Inverse trigonometric functions", number: 2 },
      { id: "unit-3", title: "Matrices", number: 3 },
      { id: "unit-4", title: "Determinants", number: 4 },
      { id: "unit-5", title: "Continuity and differentiability", number: 5 },
      { id: "unit-6", title: "Application of derivatives", number: 6 },
      { id: "unit-7", title: "Integrals", number: 7 },
      { id: "unit-8", title: "Application of integrals", number: 8 },
      { id: "unit-9", title: "Differential equations", number: 9 },
      { id: "unit-10", title: "Vector Algebra", number: 10 },
    ],
  },
}

interface UnitSidebarProps {
  courseId: string
  activeUnitId?: string
}

export function UnitSidebar({ courseId, activeUnitId }: UnitSidebarProps) {
  const course = courseData[courseId as keyof typeof courseData]

  if (!course) return null

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background border-r overflow-y-auto hidden md:block">
      <div className="p-6">
        <Link href={`/course/${courseId}`} className="block">
          <div className="flex items-center space-x-3 mb-6 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p className="text-sm text-muted-foreground">{course.subtitle}</p>
            </div>
          </div>
        </Link>

        <div className="space-y-2">
          {course.units.map((unit) => (
            <Link key={unit.id} href={`/course/${courseId}/unit/${unit.id}`} className="block">
              <Card
                className={cn(
                  "p-4 hover:shadow-md transition-all duration-200 cursor-pointer border-l-4",
                  activeUnitId === unit.id
                    ? "border-l-orange-500 bg-orange-50 dark:bg-orange-950/20"
                    : "border-l-transparent hover:border-l-orange-300",
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">UNIT {unit.number}</div>
                    <div className="font-medium">{unit.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
