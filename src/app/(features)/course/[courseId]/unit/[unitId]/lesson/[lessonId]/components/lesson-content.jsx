"use client";

import { useState, useEffect, memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Award, BookOpen, Info, Download, ExternalLink, FileText, Club, School, Users, GraduationCap, Paperclip, Link2, User, File, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContentCard } from "../../../../../../../../../components/contentCard";
import Tabs from "@/components/tab";
import { lectureList, lessonData } from "@/app/(features)/course/mock-data";
import { useResponsive } from "@/lib/hooks/use-responsive";
import VideoList from "./video-list";
import { useParams } from "next/navigation";
import { useLesson } from "@/services/context/lesson";

/**
 * Loading skeleton component with improved dark mode support
 */
const LessonDetailsSkeleton = memo(() => (
    <div className="w-full p-4 lg:p-8 space-y-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="space-y-4">
            <div className="h-8 bg-muted dark:bg-gray-800 rounded animate-pulse w-3/4" />
            <div className="h-4 bg-muted dark:bg-gray-800 rounded animate-pulse w-full" />
            <div className="h-4 bg-muted dark:bg-gray-800 rounded animate-pulse w-2/3" />
        </div>
        <div className="h-10 bg-muted dark:bg-gray-800 rounded animate-pulse w-full" />
        <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-32 bg-muted dark:bg-gray-800 rounded animate-pulse" />
            ))}
        </div>
    </div>
));

LessonDetailsSkeleton.displayName = "LessonDetailsSkeleton";

/**
 * Enhanced lesson details component with improved performance and dark mode
 */
export const LessonContent = memo(() => {
    const { courseId, unitId, lessonId } = useParams();
    const { lessonDetails } = useLesson();
    const lesson = lessonDetails.data.data;
    // State management
    const [loading, setLoading] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Custom hooks
    const { isMobile, isTablet } = useResponsive();

    // Get lesson data with error handling
    // const lesson = lessonData[lessonId];

    // Toggle description handler
    const toggleDescription = useCallback(() => {
        setShowFullDescription((prev) => !prev);
    }, []);

    // Breadcrumb configuration
    const breadcrumbItems = [
        {
            title: "Courses List",
            href: `/course-list`,
            icon: <School className="h-3.5 w-3.5" />,
        },
        {
            title: "Math",
            href: `/course/${courseId}`,
            icon: <BookOpen className="h-3.5 w-3.5" />,
        },
        {
            title: "Unit 1",
            href: `/course/${courseId}/unit/${unitId}`,
            icon: <Club className="h-3.5 w-3.5" />,
        },
        {
            title: "Lesson",
            icon: <BookOpen className="h-3.5 w-3.5" />,
        },
    ];

    // Tab configuration with enhanced content
    const tabs = [
        {
            id: "video",
            label: "Video",
            content: (
                <div className="mt-0 space-y-6">
                    <VideoList lesson={lectureList[0]} />
                </div>
            ),
            icon: <Play className="w-4 h-4" />,
        },
        {
            id: "lesson-details",
            label: "Lesson details",
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    {/* Lesson Description */}
                    <ContentCard
                        subTitle="A detailed overview of what this lesson covers"
                        title="About This Lesson"
                        icon={<FileText className="w-[1.1rem] h-[1.1rem] text-orange-600 dark:text-orange-400" />}
                        headerColor="white"
                        isMobile={isMobile}
                    >
                        <div
                            className={`prose prose-lg dark:prose-invert max-w-none ${showFullDescription ? "" : "line-clamp-4"} ${isMobile ? "text-sm" : "text-sm"}`}
                            dangerouslySetInnerHTML={{
                                __html: lesson.description || "<p>Lesson description will appear here...</p>",
                            }}
                        />
                        <Button
                            variant="ghost"
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 p-0 h-auto font-semibold text-sm"
                            onClick={toggleDescription}
                        >
                            {showFullDescription ? (
                                <span className="flex items-center">
                                    Show Less <ChevronUp className="ml-2 h-4 w-4" />
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    Read More <ChevronDown className="ml-2 h-4 w-4" />
                                </span>
                            )}
                        </Button>
                    </ContentCard>

                    {/* Learning Outcomes */}
                    {lesson.learningOutcomes?.length > 0 && lesson.learningOutcomes[0] && (
                        <ContentCard title="What You'll Learn" Icon={GraduationCap} headerColor="purple" subTitle="Key knowledge and skills you'll gain by completing the lesson" isMobile={isMobile}>
                            <div className="grid gap-0">
                                {lesson.learningOutcomes
                                    .filter((outcome) => outcome.trim())
                                    .map((outcome, index) => (
                                        <div key={index} className="flex items-start group hover:bg-purple-50 dark:hover:bg-purple-950/20 p-2 sm:p-3 rounded-lg transition-colors">
                                            <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform mt-0.5">
                                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                            </div>
                                            <p className={`text-gray-800 dark:text-gray-200 font-medium leading-relaxed ${isMobile ? "text-sm" : "text-sm"}`}>{outcome}</p>
                                        </div>
                                    ))}
                            </div>
                        </ContentCard>
                    )}

                    {/* Prerequisites */}
                    {lesson.prerequisites?.length > 0 && lesson.prerequisites[0] && (
                        <ContentCard title="Prerequisites" Icon={Award} headerColor="green" isMobile={isMobile} subTitle="Topics or knowledge you should know before taking this lesson">
                            <div className="space-y-0">
                                {lesson.prerequisites
                                    .filter((prereq) => prereq.trim())
                                    .map((prerequisite, index) => (
                                        <div key={index} className="flex items-start group hover:bg-green-50 dark:hover:bg-green-950/20 p-2 sm:p-3 rounded-lg transition-colors">
                                            <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform mt-0.5">
                                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                            </div>
                                            <p className={`text-gray-800 dark:text-gray-200 font-medium leading-relaxed ${isMobile ? "text-sm" : "text-sm"}`}>{prerequisite}</p>
                                        </div>
                                    ))}
                            </div>
                        </ContentCard>
                    )}
                </div>
            ),
            icon: <Info className="w-4 h-4" />,
        },
        {
            id: "instructors",
            label: "Instructors",
            content: (
                <div className="mt-2">
                    <ContentCard title="Instructors" Icon={Users} headerColor="purple" subTitle="Meet the educators who designed and will guide the lesson">
                        <div className={`grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-2"} gap-3 sm:gap-4`}>
                            {lesson.instructors?.map((instructor, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-2 sm:p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800/40 hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-all group"
                                >
                                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-purple-100 dark:border-purple-900/30 group-hover:border-purple-300 dark:group-hover:border-purple-700/50 transition-colors flex-shrink-0">
                                        <AvatarImage src={instructor.image || "/placeholder.svg"} alt={instructor.name} />
                                        <AvatarFallback className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs">
                                            {instructor.name
                                                ?.split(" ")
                                                ?.map((n) => n[0])
                                                ?.join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                                        <h3
                                            className={`font-medium text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors truncate ${
                                                isMobile ? "text-xs" : "text-sm"
                                            }`}
                                        >
                                            {instructor.name}
                                        </h3>
                                        <p className="text-purple-600 dark:text-purple-400 text-[10px] sm:text-xs truncate">{instructor.designation || instructor.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentCard>
                </div>
            ),
            icon: <User className="w-4 h-4" />,
        },
        {
            id: "resources",
            label: "Resources",
            content: (
                <div className={`${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    {/* Attachments */}
                    {lesson.attachments?.length > 0 && lesson.attachments[0]?.title && (
                        <ContentCard title="Lesson Resources" Icon={Paperclip} headerColor="green" isMobile={isMobile} subTitle="Downloadable files and additional lesson materials">
                            <div className="grid gap-3 sm:gap-4">
                                {lesson.attachments
                                    .filter((attachment) => attachment.title.trim())
                                    .map((attachment, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-green-100 dark:border-green-900/30 hover:border-green-200 dark:hover:border-green-800/40 transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 hover:shadow-lg transform hover:-translate-y-1"
                                        >
                                            <div className="flex items-center min-w-0 flex-1">
                                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                                                    <Paperclip className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className={`text-gray-800 dark:text-gray-200 font-bold truncate ${isMobile ? "text-sm" : "text-base"}`}>{attachment.title}</p>
                                                    {attachment.description && <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">{attachment.description}</p>}
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 group-hover:scale-110 transition-transform flex-shrink-0 ml-2"
                                            >
                                                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                                            </Button>
                                        </div>
                                    ))}
                            </div>
                        </ContentCard>
                    )}

                    {/* External Resources */}
                    {lesson.resources?.length > 0 && lesson.resources[0]?.title && (
                        <ContentCard title="External Resources" subTitle="Helpful links and references to supplement your learning" Icon={Link2} headerColor="violet" isMobile={isMobile}>
                            <div className="grid gap-4">
                                {lesson.resources
                                    .filter((resource) => resource.title.trim())
                                    .map((resource, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center justify-between p-4 rounded-xl border border-violet-100 dark:border-violet-900/30 hover:border-violet-200 dark:hover:border-violet-800/40 transition-all duration-300 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 hover:shadow-lg transform hover:-translate-y-1"
                                        >
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                                    <ExternalLink className="h-4 w-4 text-white" />
                                                </div>
                                                <div>
                                                    <p className={`text-gray-800 dark:text-gray-200 font-semibold ${isMobile ? "text-sm" : "text-md"}`}>{resource.title}</p>
                                                    {resource.description && <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 truncate max-w-44 break-words">{resource.description}</p>}
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 group-hover:scale-110 transition-transform"
                                                onClick={() => window.open(resource.url, "_blank")}
                                            >
                                                <ExternalLink className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    ))}
                            </div>
                        </ContentCard>
                    )}
                </div>
            ),
            icon: <File className="w-4 h-4" />,
        },
    ];

    return (
        <div className="w-full p-4 fade-in min-h-screen">
            {/* SEO-friendly breadcrumb navigation */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Lesson header with key information */}
            <div className="mb-2 mt-4 p-4 bg-card dark:bg-gray-800 shadow-sm rounded-lg border border-border dark:border-gray-700">
                <h1 className="text-xl font-semibold mb-1 text-foreground dark:text-foreground">Lesson 1: {lesson.name}</h1>
                <p className="text-md text-muted-foreground dark:text-muted-foreground leading-relaxed">{lesson.summary}</p>
            </div>

            <Tabs variant="underline" defaultTab={{ id: "video" }} tabs={tabs} />
        </div>
    );
});

LessonContent.displayName = "LessonContent";
