"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, CheckCircle, Clock, BookOpen, ChevronLeft, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MobileSidebar } from "../../../../../../../components/mobile-sidebar";
import GlobalUtils from "@/lib/utils";

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
};

export function LectureSidebar({ courseId, unitId, activeLectureId, lessonId }) {
    const unitData = lectureData[unitId];

    if (!unitData) return null;

    const SidebarContent = () => (
        <div className="px-3 mt-6 custom-scrollbar">
            {/* Back to Lesson Details - NEW ADDITION */}
            {lessonId && (
                <Link href={`/course/${courseId}/unit/${unitId}/lesson/${lessonId}`} className="block mb-2 ">
                    <Button variant="ghost" size="sm" className="w-full justify-start hover:text-primary-500">
                        <ChevronLeft className="w-4 h-4 mr-2 ml-[-0.5rem]" />
                        Back to Lesson Details
                    </Button>
                </Link>
            )}

            {/* Unit Header - Clickable to navigate to unit overview */}
            <Link href={`/course/${courseId}/unit/${unitId}`} className="block">
                <div className="mb-4 p-4 rounded-lg hover:border-primary-400 transition-colors cursor-pointer group border border-border bg-white dark:bg-gray-900">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                        <BookOpen className="w-3 h-3" />
                        <span>COURSE: CLASS 12</span>
                        <span>{">"}</span>
                        <span>UNIT {unitData.unitNumber}</span>
                    </div>
                    <h2 className="text-lg font-semibold group-hover:text-orange-500 transition-colors text-foreground">{unitData.title}</h2>

                    {/* Unit Progress Display */}
                    <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Unit Progress</span>
                            <span className="font-medium text-foreground">{unitData.progress}%</span>
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

            {/* Lectures Navigation List */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">Lectures</h3>
                    <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                        {unitData.lectures.length} videos
                    </Badge>
                </div>

                {unitData.lectures.map((lecture, index) => (
                    <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lesson/${lessonId || "lesson-1"}/lecture/${lecture.id}`} className="block">
                        <Card
                            className={GlobalUtils.cn(
                                "p-4  hover:border-primary-400  transition-all duration-200 cursor-pointer group border-border shadow-sm",
                                activeLectureId === lecture.id ? "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800" : "bg-card border-transparent"
                            )}
                        >
                            <div className="flex items-start space-x-3">
                                <div className="flex flex-col items-center space-y-1">
                                    <div
                                        className={GlobalUtils.cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                            lecture.status === "completed" ? "bg-green-500" : lecture.status === "current" ? "bg-orange-500" : "bg-muted-foreground"
                                        )}
                                    >
                                        {lecture.status === "completed" ? <CheckCircle className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                                    </div>
                                    {/* Connection line between lectures */}
                                    {index < unitData.lectures.length - 1 && <div className="w-0.5 h-8 bg-border"></div>}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4
                                            className={GlobalUtils.cn(
                                                "font-medium text-sm leading-tight",
                                                activeLectureId === lecture.id && "text-orange-600 dark:text-orange-400",
                                                lecture.status === "completed" && "text-green-600 dark:text-green-400"
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
                                            <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-muted text-muted-foreground">
                                                {lecture.type}
                                            </Badge>
                                        </div>

                                        {lecture.status === "current" && (
                                            <Badge variant="default" className="text-xs bg-orange-500 text-white">
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
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden bg-gray-100 lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-card border-r border-border overflow-y-auto">
                <SidebarContent />
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar title="Lecture Navigation">
                <SidebarContent />
            </MobileSidebar>
        </>
    );
}
