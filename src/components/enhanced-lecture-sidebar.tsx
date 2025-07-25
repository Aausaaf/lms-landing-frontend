"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, CheckCircle, Clock, BookOpen, ChevronLeft, Star } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MobileSidebar } from "./mobile-sidebar"

const lectureData = {
  "unit-1": {
    title: "Relations and functions",
    unitNumber: 1,
    progress: 25,
    totalLectures: 4,
    completedLectures: 1,
    lectures: [
      {
        id: "lecture-1",
        title: "Equivalence relations and their properties",
        duration: "12:45",
        status: "completed",
        type: "video",
      },
      {
        id: "lecture-2",
        title: "Equivalence relations - Non math example",
        duration: "8:30",
        status: "current",
        type: "video",
      },
      {
        id: "lecture-3",
        title: "Equivalence relations in geometry",
        duration: "15:20",
        status: "not-started",
        type: "video",
      },
      {
        id: "lecture-4",
        title: "Empty and Universal relations",
        duration: "10:15",
        status: "not-started",
        type: "video",
      },
    ],
  },
}

interface EnhancedLectureSidebarProps {
  courseId: string
  unitId: string
  activeLectureId: string
}

export function EnhancedLectureSidebar({ courseId, unitId, activeLectureId }: EnhancedLectureSidebarProps) {
  const unitData = lectureData[unitId as keyof typeof lectureData]

  if (!unitData) return null

  const SidebarContent = () => (
    <div className="p-6">
      {/* Back to Course */}
      <Link href={`/course/${courseId}`} className="block mb-4">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Course
        </Button>
      </Link>

      {/* Unit Header - Clickable */}
      <Link href={`/course/${courseId}/unit/${unitId}`} className="block">
        <div className="mb-6 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group border">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <BookOpen className="w-3 h-3" />
            <span>COURSE: CLASS 12</span>
            <span>{">"}</span>
            <span>UNIT {unitData.unitNumber}</span>
          </div>
          <h2 className="text-lg font-semibold group-hover:text-orange-500 transition-colors">{unitData.title}</h2>

          {/* Unit Progress */}
          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Unit Progress</span>
              <span className="font-medium">{unitData.progress}%</span>
            </div>
            <Progress value={unitData.progress} className="h-1" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>
                {unitData.completedLectures} / {unitData.totalLectures} lectures
              </span>
              <span>Keep going!</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Lectures List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Lectures</h3>
          <Badge variant="outline" className="text-xs">
            {unitData.lectures.length} videos
          </Badge>
        </div>

        {unitData.lectures.map((lecture, index) => (
          <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lecture/${lecture.id}`} className="block">
            <Card
              className={cn(
                "p-4 hover:shadow-md transition-all duration-200 cursor-pointer group",
                activeLectureId === lecture.id
                  ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 shadow-md"
                  : "hover:bg-muted/50",
              )}
            >
              <div className="flex items-start space-x-3">
                <div className="flex flex-col items-center space-y-1">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
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
                  {index < unitData.lectures.length - 1 && (
                    <div className="w-0.5 h-8 bg-gray-200 dark:bg-gray-700"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4
                      className={cn(
                        "font-medium text-sm leading-tight",
                        activeLectureId === lecture.id && "text-blue-600 dark:text-blue-400",
                        lecture.status === "completed" && "text-green-600 dark:text-green-400",
                      )}
                    >
                      {lecture.title}
                    </h4>
                    {lecture.status === "completed" && <Star className="w-3 h-3 text-yellow-500 flex-shrink-0 ml-2" />}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{lecture.duration}</span>
                      <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                        {lecture.type}
                      </Badge>
                    </div>

                    {lecture.status === "current" && (
                      <Badge variant="default" className="text-xs bg-blue-500">
                        Current
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20">
        <h4 className="font-medium mb-3 text-sm">Quick Actions</h4>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <BookOpen className="w-4 h-4 mr-2" />
            Take Notes
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <Star className="w-4 h-4 mr-2" />
            Bookmark Lecture
          </Button>
        </div>
      </Card>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background border-r overflow-y-auto">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar title="Lecture Navigation">
        <SidebarContent />
      </MobileSidebar>
    </>
  )
}
