"use client"

import { Card } from "@/components/ui/card"
import { Play, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const lectureData = {
  "unit-1": [
    {
      id: "lecture-1",
      title: "Equivalence relations and their properties",
      duration: "12:45",
      status: "current",
    },
    {
      id: "lecture-2",
      title: "Equivalence relations - Non math example",
      duration: "8:30",
      status: "not-started",
    },
    {
      id: "lecture-3",
      title: "Equivalence relations in geometry",
      duration: "15:20",
      status: "not-started",
    },
    {
      id: "lecture-4",
      title: "Empty and Universal relations",
      duration: "10:15",
      status: "not-started",
    },
  ],
}

interface LectureSidebarProps {
  courseId: string
  unitId: string
  activeLectureId: string
}

export function LectureSidebar({ courseId, unitId, activeLectureId }: LectureSidebarProps) {
  const lectures = lectureData[unitId as keyof typeof lectureData] || []

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background border-r overflow-y-auto">
      <div className="p-6">
        <Link href={`/course/${courseId}/unit/${unitId}`} className="block">
          <div className="mb-6 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <span>COURSE: CLASS 12</span>
              <span>{">"}</span>
              <span>UNIT 1</span>
            </div>
            <h2 className="text-lg font-semibold">Lesson 1: Types of relations</h2>
          </div>
        </Link>

        <div className="space-y-2">
          {lectures.map((lecture) => (
            <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lecture/${lecture.id}`} className="block">
              <Card
                className={cn(
                  "p-4 hover:shadow-md transition-all duration-200 cursor-pointer",
                  activeLectureId === lecture.id
                    ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                    : "hover:bg-muted/50",
                )}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={cn(
                      "w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5",
                      lecture.status === "completed"
                        ? "bg-green-500"
                        : lecture.status === "current"
                          ? "bg-blue-500"
                          : "bg-gray-300 dark:bg-gray-600",
                    )}
                  >
                    {lecture.status === "completed" ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={cn(
                        "font-medium text-sm leading-tight mb-2",
                        activeLectureId === lecture.id && "text-blue-600 dark:text-blue-400",
                      )}
                    >
                      {lecture.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{lecture.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
