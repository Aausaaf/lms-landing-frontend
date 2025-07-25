"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, ChevronRight, Trophy, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MobileSidebar } from "./mobile-sidebar"

const courseData = {
  "class-12-math": {
    title: "Class 12",
    subtitle: "13 UNITS • 125 SKILLS",
    progress: 15,
    totalHours: 120,
    completedHours: 18,
    units: [
      { id: "unit-1", title: "Relations and functions", number: 1, progress: 45, status: "in-progress" },
      { id: "unit-2", title: "Inverse trigonometric functions", number: 2, progress: 0, status: "not-started" },
      { id: "unit-3", title: "Matrices", number: 3, progress: 0, status: "not-started" },
      { id: "unit-4", title: "Determinants", number: 4, progress: 0, status: "not-started" },
      { id: "unit-5", title: "Continuity and differentiability", number: 5, progress: 0, status: "not-started" },
      { id: "unit-6", title: "Application of derivatives", number: 6, progress: 0, status: "not-started" },
      { id: "unit-7", title: "Integrals", number: 7, progress: 0, status: "not-started" },
      { id: "unit-8", title: "Application of integrals", number: 8, progress: 0, status: "not-started" },
      { id: "unit-9", title: "Differential equations", number: 9, progress: 0, status: "not-started" },
      { id: "unit-10", title: "Vector Algebra", number: 10, progress: 0, status: "not-started" },
    ],
  },
}

interface EnhancedUnitSidebarProps {
  courseId: string
  activeUnitId?: string
}

export function EnhancedUnitSidebar({ courseId, activeUnitId }: EnhancedUnitSidebarProps) {
  const course = courseData[courseId as keyof typeof courseData]

  if (!course) return null

  const SidebarContent = () => (
    <div className="p-6">
      {/* Course Header - Clickable */}
      <Link href={`/course/${courseId}`} className="block">
        <div className="flex items-center space-x-3 mb-6 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold group-hover:text-orange-500 transition-colors">{course.title}</h2>
            <p className="text-sm text-muted-foreground">{course.subtitle}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      {/* Progress Overview */}
      <Card className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium">Course Progress</span>
          </div>
          <span className="text-sm font-bold text-orange-600">{course.progress}%</span>
        </div>
        <Progress value={course.progress} className="mb-3" />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>
              {course.completedHours}h / {course.totalHours}h
            </span>
          </div>
          <span>
            {course.units.filter((u) => u.status === "completed").length} / {course.units.length} units
          </span>
        </div>
      </Card>

      {/* Units List */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Course Units</h3>
        {course.units.map((unit) => (
          <Link key={unit.id} href={`/course/${courseId}/unit/${unit.id}`} className="block">
            <Card
              className={cn(
                "p-4 hover:shadow-md transition-all duration-200 cursor-pointer border-l-4 group",
                activeUnitId === unit.id
                  ? "border-l-orange-500 bg-orange-50 dark:bg-orange-950/20 shadow-md"
                  : "border-l-transparent hover:border-l-orange-300 hover:bg-muted/50",
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                      unit.status === "completed"
                        ? "bg-green-500 text-white"
                        : unit.status === "in-progress"
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300",
                    )}
                  >
                    {unit.status === "completed" ? <CheckCircle className="w-4 h-4" /> : unit.number}
                  </div>
                  <div className="text-sm text-muted-foreground">UNIT {unit.number}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="mb-3">
                <div className="font-medium text-sm leading-tight group-hover:text-orange-500 transition-colors">
                  {unit.title}
                </div>
              </div>

              {unit.progress > 0 && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{unit.progress}%</span>
                  </div>
                  <Progress value={unit.progress} className="h-1" />
                </div>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background border-r overflow-y-auto">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar title="Course Navigation">
        <SidebarContent />
      </MobileSidebar>
    </>
  )
}
