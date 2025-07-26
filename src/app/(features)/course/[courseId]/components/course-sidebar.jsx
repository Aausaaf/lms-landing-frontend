"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, ChevronRight, Trophy, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import GlobalUtils from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";

const courseData = {
    "class-12-math": {
        title: "Class 12",
        subtitle: "13 UNITS • 125 Lessons",
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
};

export function CourseSidebar({ courseId, activeUnitId }) {
    const course = courseData[courseId];

    if (!course) return null;

    const SidebarContent = () => (
        <div className="p-4">
            {/* Course Header - Clickable to navigate to course overview */}
            <Link href={`/course/${courseId}`} className="block">
                <div className="flex items-center space-x-3 mb-4  mt-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                        <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold group-hover:text-orange-500 transition-colors">{course.title}</h2>
                        <p className="text-[0.8rem] text-muted-foreground">{course.subtitle}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </Link>

            {/* Course Progress Overview */}
            <Card className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium">Course Progress</span>
                    </div>
                    <span className="text-sm font-bold text-orange-600">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="mb-3 h-2" />
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

            {/* Units Navigation List */}
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Course Units</h3>
                {course.units.map((unit) => (
                    <Link key={unit.id} href={`/course/${courseId}/unit/${unit.id}`} className="block">
                        <Card
                            className={GlobalUtils.cn(
                                "p-4 hover:shadow-md transition-all duration-200 cursor-pointer border-2 group",
                                activeUnitId === unit.id ? "border-orange-500 bg-orange-50 dark:bg-orange-950/20 shadow-md" : "border-transparent hover:border-orange-400 hover:bg-muted/50"
                            )}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-3">
                                    <div
                                        className={GlobalUtils.cn(
                                            "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                                            unit.status === "completed"
                                                ? "bg-green-500 text-white"
                                                : unit.status === "in-progress"
                                                ? "bg-orange-500 text-white"
                                                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                        )}
                                    >
                                        {unit.status === "completed" ? <CheckCircle className="w-4 h-4" /> : unit.number}
                                    </div>
                                    <div className="text-sm text-muted-foreground">UNIT {unit.number}</div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="">
                                <div className="font-medium text-sm leading-tight group-hover:text-orange-500 transition-colors">{unit.title}</div>
                            </div>

                            {/* Unit Progress Bar */}
                            {unit.progress > 0 && (
                                <div className="space-y-1 mb-3">
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
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden bg-gray-100  lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background border-r overflow-y-auto">
                <SidebarContent />
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar title="Course Navigation">
                <SidebarContent />
            </MobileSidebar>
        </>
    );
}
