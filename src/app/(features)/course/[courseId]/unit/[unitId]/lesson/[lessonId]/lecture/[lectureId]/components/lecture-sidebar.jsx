"use client";

import { useState, useCallback, memo, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, CheckCircle, Clock, SkipBack, SkipForward, Grid3X3, List, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { MobileSidebar } from "@/components/mobile-sidebar";
import GlobalUtils from "@/lib/utils";
import { lectureList } from "@/app/(features)/course/mock-data";

/**
 * Enhanced lecture sidebar with improved navigation and features
 */
export const LectureSidebar = memo(({ courseId, unitId, activeLectureId, lessonId }) => {
    const [isCollapsed, setIsCollapsed] = useState({});
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    // Find current lesson index
    useEffect(() => {
        const index = lectureList.findIndex((lesson) => lesson.id === lessonId);
        if (index !== -1) {
            setCurrentLessonIndex(index);
        }
    }, [lessonId]);

    // Toggle sidebar expansion
    const toggleExpansion = (id) => {
        setIsCollapsed((prev) => ({ ...prev, [id]: prev[id] ? false : true }));
    };
    console.log("isCollapsed", isCollapsed);
    // Navigate to previous/next lesson
    const navigateLesson = useCallback(
        (direction) => {
            const newIndex = direction === "next" ? Math.min(currentLessonIndex + 1, lectureList.length - 1) : Math.max(currentLessonIndex - 1, 0);

            const targetLesson = lectureList[newIndex];
            if (targetLesson && targetLesson.lectures.length > 0) {
                // Navigate to first lecture of the lesson
                const firstLecture = targetLesson.lectures[0];
                window.location.href = `/course/${courseId}/unit/${unitId}/lesson/${targetLesson.id}/lecture/${firstLecture.id}`;
            }
        },
        [currentLessonIndex, courseId, unitId]
    );

    // Scroll to lesson section
    const scrollToLesson = useCallback((lessonIndex) => {
        const lessonElement = document.getElementById(`lesson-${lessonIndex}`);
        if (lessonElement && scrollContainerRef.current) {
            lessonElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            {/* Navigation Header */}
            <div className="p-2 mt-4 border-b border-border dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10">
                {/* View Mode Toggle */}
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">All Lessons</h3>
                    <div className="flex items-center gap-1 bg-muted dark:bg-gray-800 rounded-md p-1">
                        <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")} className="h-6 w-6 p-0">
                            <Grid3X3 className="w-3 h-3" />
                        </Button>
                        <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")} className="h-6 w-6 p-0">
                            <List className="w-3 h-3" />
                        </Button>
                    </div>
                </div>
                {/* Previous/Next Navigation */}
                <div className="flex items-center justify-between">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateLesson("prev")}
                        disabled={currentLessonIndex === 0}
                        className="flex items-center gap-2 text-xs border-border dark:border-gray-600 hover:bg-muted dark:hover:bg-gray-700"
                    >
                        <SkipBack className="w-3 h-3" />
                    </Button>

                    <div className="text-center">
                        <div className="text-sm font-semibold text-foreground dark:text-foreground truncate max-w-52">{lectureList[currentLessonIndex]?.title}</div>
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateLesson("next")}
                        disabled={currentLessonIndex === lectureList.length - 1}
                        className="flex items-center gap-2 text-xs border-border dark:border-gray-600 hover:bg-muted dark:hover:bg-gray-700"
                    >
                        <SkipForward className="w-3 h-3" />
                    </Button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-3 space-y-4 pb-10">
                    {lectureList.map((lesson, lessonIndex) => (
                        <div key={lesson.id} id={`lesson-${lessonIndex}`} className="space-y-3">
                            {/* Lesson Header */}
                            <div
                                className={`p-3 rounded-lg border transition-all ${
                                    lesson.id === lessonId
                                        ? "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800"
                                        : "bg-card dark:bg-gray-800 border-border dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700"
                                }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-2 flex-1">
                                        <div
                                            className={`w-4 h-4 mt-[0.3rem] rounded-full flex items-center justify-center text-xs font-bold ${
                                                lesson.status === "completed"
                                                    ? "bg-green-500 text-white"
                                                    : lesson.status === "in-progress"
                                                    ? "bg-orange-500 text-white"
                                                    : "bg-muted-foreground dark:bg-gray-600 text-white"
                                            }`}
                                        >
                                            {lesson.status === "completed" ? <CheckCircle className="w-3 h-3" /> : lessonIndex + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <Link
                                                href={`/course/${courseId}/unit/${unitId}/lesson/${lesson.id}`}
                                                className="hover:text-orange-500 hover:underline font-medium text-sm text-foreground dark:text-foreground truncate"
                                            >
                                                {lesson.title}
                                            </Link>
                                            <p title={lesson.description} className="text-xs text-muted-foreground dark:text-muted-foreground line-clamp-2 mt-1">
                                                {lesson.description}
                                            </p>
                                            {lesson.progress > 0 && (
                                                <div className="mt-2">
                                                    <div className="flex justify-between text-xs mb-1">
                                                        <span className="text-muted-foreground dark:text-muted-foreground">Progress</span>
                                                        <span className="font-medium text-foreground dark:text-foreground">{lesson.progress}%</span>
                                                    </div>
                                                    <Progress value={lesson.progress} className="h-1" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => toggleExpansion(lesson.id)} className="p-1 h-6 w-6 ml-2">
                                        {isCollapsed[lesson.id] ? <ChevronRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                    </Button>
                                </div>
                            </div>

                            {/* Lectures List/Grid */}
                            {!isCollapsed[lesson.id] && (
                                <div className="ml-2">
                                    {viewMode === "grid" ? (
                                        /* Grid View */
                                        <div className="grid grid-cols-1 gap-2">
                                            {lesson.lectures.map((lecture, index) => (
                                                <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lesson/${lesson.id}/lecture/${lecture.id}`} className="block">
                                                    <Card
                                                        className={GlobalUtils.cn(
                                                            "p-2.5 hover:border-primary-400 transition-all duration-200 cursor-pointer group border-border shadow-sm",
                                                            activeLectureId === lecture.id
                                                                ? "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800"
                                                                : "bg-card dark:bg-gray-800 border-transparent hover:bg-muted/50 dark:hover:bg-gray-700/50"
                                                        )}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            {/* Thumbnail */}
                                                            <div className="relative flex-shrink-0 rounded-sm overflow-hidden">
                                                                <div className="w-[100px] h-[4.5rem] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-md flex items-center justify-center overflow-hidden">
                                                                    <img
                                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VZvB9cHXsJDK76TxYAEEx3HXElbjBMCEpQ&s"
                                                                        alt={lecture.title}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                                        <Play className="w-4 h-4 text-white" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Content */}
                                                            <div className="flex-1 min-w-0">
                                                                <h5
                                                                    className={GlobalUtils.cn(
                                                                        "font-medium text-[0.8rem] leading-tight line-clamp-2",
                                                                        activeLectureId === lecture.id && "text-orange-600 dark:text-orange-400",
                                                                        lecture.status === "completed" && "text-green-600 dark:text-green-400"
                                                                    )}
                                                                >
                                                                    {lecture.title}
                                                                </h5>

                                                                <div className="flex items-center justify-between mt-2">
                                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground dark:text-muted-foreground">
                                                                        <Clock className="w-3 h-3" />
                                                                        <span>{lecture.duration}</span>
                                                                    </div>

                                                                    {lecture.status === "current" && (
                                                                        <Badge variant="default" className="text-xs bg-orange-500 dark:bg-orange-600 text-white px-1 py-0">
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
                                    ) : (
                                        /* List View */
                                        <div className="space-y-2">
                                            {lesson.lectures.map((lecture, index) => (
                                                <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lesson/${lesson.id}/lecture/${lecture.id}`} className="block">
                                                    <Card
                                                        className={GlobalUtils.cn(
                                                            "p-3 hover:border-primary-400 transition-all duration-200 cursor-pointer group border-border shadow-sm",
                                                            activeLectureId === lecture.id
                                                                ? "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800"
                                                                : "bg-card dark:bg-gray-800 border-transparent hover:bg-muted/50 dark:hover:bg-gray-700/50"
                                                        )}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex flex-col items-center space-y-1">
                                                                <div
                                                                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                                                        lecture.status === "completed"
                                                                            ? "bg-green-500"
                                                                            : lecture.status === "current"
                                                                            ? "bg-orange-500"
                                                                            : "bg-muted-foreground dark:bg-gray-600"
                                                                    }`}
                                                                >
                                                                    {lecture.status === "completed" ? <CheckCircle className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 text-white" />}
                                                                </div>
                                                            </div>

                                                            <div className="flex-1 min-w-0">
                                                                <h5
                                                                    className={GlobalUtils.cn(
                                                                        "font-medium text-sm leading-tight",
                                                                        activeLectureId === lecture.id && "text-orange-600 dark:text-orange-400",
                                                                        lecture.status === "completed" && "text-green-600 dark:text-green-400"
                                                                    )}
                                                                >
                                                                    {lecture.title}
                                                                </h5>

                                                                <div className="flex items-center justify-between mt-1">
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
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden bg-gray-100 dark:bg-gray-900 lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-[370px] bg-card border-r border-border dark:border-gray-800 overflow-hidden">
                <SidebarContent />
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar title="Course Navigation">
                <SidebarContent />
            </MobileSidebar>
        </>
    );
});

LectureSidebar.displayName = "LectureSidebar";
