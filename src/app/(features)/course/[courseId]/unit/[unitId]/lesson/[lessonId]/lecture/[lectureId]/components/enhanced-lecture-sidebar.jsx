"use client";

import { useState, useCallback, memo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, CheckCircle, Clock, BookOpen, ChevronLeft, Star, ChevronDown, ChevronUp, SkipBack, SkipForward } from "lucide-react";
import Link from "next/link";
import { MobileSidebar } from "../../../../../../../components/mobile-sidebar";
import GlobalUtils from "@/lib/utils";
import { lectureData } from "@/app/(features)/course/mock-data";
import { useResponsive } from "@/lib/hooks/use-responsive";
import { Select } from "@/components/ui/select";

/**
 * Enhanced lecture sidebar with improved navigation and features
 */
export const EnhancedLectureSidebar = memo(({ courseId, unitId, activeLectureId, lessonId }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const { isMobile } = useResponsive();

    const lessonData = lectureData[lessonId];
    console.log(lessonData, "lesson-1", lessonId);
    // Find current lecture index for navigation
    const currentLectureIndex = lessonData?.lectures?.findIndex((lecture) => lecture.id === activeLectureId) ?? -1;

    const previousLecture = currentLectureIndex > 0 ? lessonData.lectures[currentLectureIndex - 1] : null;

    const nextLecture = currentLectureIndex < lessonData.lectures.length - 1 ? lessonData.lectures[currentLectureIndex + 1] : null;

    // Toggle sidebar expansion
    const toggleExpansion = useCallback(() => {
        setIsExpanded((prev) => !prev);
    }, []);

    // Quick jump to lecture handler
    const handleQuickJump = useCallback(
        (lectureId) => {
            // Navigate to selected lecture
            window.location.href = `/course/${courseId}/unit/${unitId}/lesson/${lessonId}/lecture/${lectureId}`;
        },
        [courseId, unitId, lessonId]
    );

    if (!lessonData) return null;

    const SidebarContent = () => (
        <div className="px-3 mt-6 custom-scrollbar">
            {/* Quick Jump Dropdown */}
            {/* <Select value={activeLectureId} options={lessonData.lectures.map((item) => ({ value: item.id, label: item.title }))} onChange={(e) => handleQuickJump(e.target.value)} /> */}
            {/* Unit Header */}
            {activeLectureId ? (
                <Link href={`/course/${courseId}/unit/${unitId}/lesson/${lessonId}`} className="block">
                    <div className="mb-4 p-4 rounded-lg hover:border-primary-400 transition-colors cursor-pointer group border border-border bg-white dark:bg-gray-900">
                        <h2 className="text-lg font-semibold group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors text-foreground dark:text-foreground">
                            {lessonData.title}
                        </h2>

                        {/* Unit Progress Display */}
                        <div className="mt-2 space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground dark:text-muted-foreground">Lesson Progress</span>
                                <span className="font-medium text-foreground dark:text-foreground">{lessonData.progress}%</span>
                            </div>
                            <Progress value={lessonData.progress} className="h-1" />
                            <div className="flex justify-between text-xs text-muted-foreground dark:text-muted-foreground">
                                <span>
                                    {lessonData.completedLectures} / {lessonData.totalLectures} lectures
                                </span>
                                <span>Keep going!</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ) : (
                <Link href={`/course/${courseId}/unit/${unitId}`} className="block">
                    <div className="mb-4 p-4 rounded-lg hover:border-primary-400 transition-colors cursor-pointer group border border-border bg-white dark:bg-gray-900">
                        <h2 className="text-lg font-semibold group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors text-foreground dark:text-foreground">
                            {lessonData.unit.title}
                        </h2>

                        {/* Unit Progress Display */}
                        <div className="mt-2 space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground dark:text-muted-foreground">Unit Progress</span>
                                <span className="font-medium text-foreground dark:text-foreground">{lessonData.unit.progress}%</span>
                            </div>
                            <Progress value={lessonData.unit.progress} className="h-1" />
                            <div className="flex justify-between text-xs text-muted-foreground dark:text-muted-foreground">
                                <span>
                                    {lessonData.unit.completedLectures} / {lessonData.unit.totalLesson} lesson
                                </span>
                                <span>Keep going!</span>
                            </div>
                        </div>
                    </div>
                </Link>
            )}

            {/* Lectures Navigation List */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">Lectures</h3>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-border text-muted-foreground dark:text-muted-foreground">
                            {lessonData.lectures.length} videos
                        </Badge>
                        <Button variant="ghost" size="sm" onClick={toggleExpansion} className="p-1 h-6 w-6">
                            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </Button>
                    </div>
                </div>

                {isExpanded &&
                    lessonData.lectures.map((lecture, index) => (
                        <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lesson/${lessonId || "lesson-1"}/lecture/${lecture.id}`} className="block">
                            <Card
                                className={GlobalUtils.cn(
                                    "p-4 hover:border-primary-400 transition-all duration-200 cursor-pointer group border-border shadow-sm",
                                    activeLectureId === lecture.id
                                        ? "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800"
                                        : "bg-card dark:bg-gray-800 border-transparent hover:bg-muted/50 dark:hover:bg-gray-700/50"
                                )}
                            >
                                <div className="flex items-start space-x-3">
                                    <div className="flex flex-col items-center space-y-1">
                                        <div
                                            className={GlobalUtils.cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                                lecture.status === "completed" ? "bg-green-500" : lecture.status === "current" ? "bg-orange-500" : "bg-muted-foreground dark:bg-gray-600"
                                            )}
                                        >
                                            {lecture.status === "completed" ? <CheckCircle className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                                        </div>
                                        {/* Connection line between lectures */}
                                        {index < lessonData.lectures.length - 1 && <div className="w-0.5 h-8 bg-border dark:bg-gray-700"></div>}
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
                                            <div className="flex items-center space-x-2 text-xs text-muted-foreground dark:text-muted-foreground">
                                                <Clock className="w-3 h-3" />
                                                <span>{lecture.duration}</span>
                                                <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-muted dark:bg-gray-700 text-muted-foreground dark:text-gray-300">
                                                    {lecture.type}
                                                </Badge>
                                            </div>

                                            {lecture.status === "current" && (
                                                <Badge variant="default" className="text-xs bg-orange-500 dark:bg-orange-600 text-white">
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
            <div className="hidden bg-gray-100 dark:bg-gray-900 lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-card dark:bg-gray-900 border-r border-border dark:border-gray-800 overflow-y-auto">
                <SidebarContent />
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar title="Lecture Navigation">
                <SidebarContent />
            </MobileSidebar>
        </>
    );
});

EnhancedLectureSidebar.displayName = "EnhancedLectureSidebar";
