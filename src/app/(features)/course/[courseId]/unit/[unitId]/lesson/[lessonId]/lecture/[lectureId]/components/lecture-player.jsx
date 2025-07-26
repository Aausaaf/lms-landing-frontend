"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, Download, User, BookOpen, School, Club, Info, FileVideo, ChevronUp, ChevronDown, Users, Paperclip, Text, File } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import Tabs from "@/components/tab";
import { ContentCard } from "@/app/(features)/course/[courseId]/components/content-card";
import { EnhancedVideoPlayer } from "./enhanced-video-player";
import { lectureDetails } from "@/app/(features)/course/mock-data";
import { useResponsive } from "@/lib/hooks/use-responsive";
import { useErrorHandler } from "@/lib/hooks/use-error-handler";

/**
 * Loading skeleton component for lecture player
 */
const LecturePlayerSkeleton = memo(() => (
    <div className="w-full p-4 lg:p-8 space-y-8">
        <div className="space-y-4">
            <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
        </div>
        <div className="aspect-video bg-muted rounded-xl animate-pulse" />
        <div className="space-y-4">
            <div className="h-8 bg-muted rounded animate-pulse w-3/4" />
            <div className="h-4 bg-muted rounded animate-pulse w-full" />
            <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
        </div>
    </div>
));

LecturePlayerSkeleton.displayName = "LecturePlayerSkeleton";

/**
 * Enhanced lecture player component with improved video player and content sections
 */
export const LecturePlayer = memo(({ courseId, unitId, lessonId, lectureId }) => {
    // State management
    const [loading, setLoading] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [videoProgress, setVideoProgress] = useState(0);

    // Custom hooks
    const { isMobile, isTablet } = useResponsive();
    const { handleError } = useErrorHandler();

    // Get lecture data with error handling
    const lecture = lectureDetails[lectureId];

    // Loading effect
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    // Video event handlers
    const handleVideoPlay = useCallback(() => {
        console.log("Video started playing");
    }, []);

    const handleVideoPause = useCallback(() => {
        console.log("Video paused");
    }, []);

    const handleVideoProgress = useCallback((currentTime) => {
        setVideoProgress(currentTime);
    }, []);

    // Error handling for missing lecture
    if (!loading && !lecture) {
        return (
            <div className="w-full p-8 text-center">
                <h2 className="text-2xl font-bold text-muted-foreground dark:text-muted-foreground">Lecture not found</h2>
                <p className="text-muted-foreground dark:text-muted-foreground mt-2">The requested lecture could not be found.</p>
            </div>
        );
    }

    if (loading) {
        return <LecturePlayerSkeleton />;
    }

    // Breadcrumb navigation
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
            href: `/course/${courseId}/unit/${unitId}/lesson/${lessonId}`,
        },
        {
            title: "Lecture",
            icon: <BookOpen className="h-3.5 w-3.5" />,
        },
    ];

    // Tab configuration
    const tabs = [
        {
            id: "about",
            label: "About",
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    <ContentCard
                        subTitle="A detailed overview of what this video covers"
                        title="About This Video"
                        icon={<FileVideo className="w-[1.1rem] h-[1.1rem] text-orange-600 dark:text-orange-400" />}
                        headerColor="white"
                        isMobile={isMobile}
                    >
                        <div
                            className={`prose prose-lg dark:prose-invert max-w-none ${showFullDescription ? "" : "line-clamp-4"} ${isMobile ? "text-sm" : "text-sm"}`}
                            dangerouslySetInnerHTML={{
                                __html: lecture.description,
                            }}
                        />
                        <Button
                            variant="ghost"
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 p-0 h-auto font-semibold text-sm"
                            onClick={() => setShowFullDescription(!showFullDescription)}
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
                </div>
            ),
            icon: <Info className="w-4 h-4" />,
        },
        {
            id: "transcript",
            label: "Transcript",
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    {lecture.transcript && (
                        <ContentCard title="Transcript" Icon={FileText} headerColor="indigo" isMobile={isMobile} subTitle="Video transcription is here">
                            <div
                                className={`prose prose-lg dark:prose-invert max-w-none ${isMobile ? "text-sm" : "text-sm"}`}
                                dangerouslySetInnerHTML={{
                                    __html: lecture.transcript,
                                }}
                            />
                        </ContentCard>
                    )}
                </div>
            ),
            icon: <Text className="w-4 h-4" />,
        },
        {
            id: "instructor",
            label: "Instructor",
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    <ContentCard title="Instructors" Icon={Users} headerColor="purple" subTitle="Meet the educators who designed and will guide the video">
                        <div className={`grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-2"} gap-3 sm:gap-4`}>
                            {lecture.instructors?.map((instructor, index) => (
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
            id: "attachments",
            label: "Attachments",
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    {lecture.attachments?.length > 0 && lecture.attachments[0]?.title && (
                        <ContentCard title="Video Resources" Icon={Paperclip} headerColor="green" isMobile={isMobile} subTitle="Downloadable files and additional video materials">
                            <div className="grid gap-3 sm:gap-4">
                                {lecture.attachments
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
                </div>
            ),
            icon: <File className="w-4 h-4" />,
        },
    ];

    return (
        <div className="w-full p-4 max-w-[1100px] fade-in">
            {/* SEO-friendly breadcrumb navigation */}
            <Breadcrumb items={breadcrumbItems} />

            <div className="bg-white dark:bg-gray-900 rounded-sm">
                {/* Enhanced Video Player */}
                <div className="mb-2 mt-4">
                    <EnhancedVideoPlayer videoUrl={lecture.videoUrl || "/placeholder.svg"} title={lecture.title} onPlay={handleVideoPlay} onPause={handleVideoPause} onProgress={handleVideoProgress} />
                </div>

                {/* Lecture Information */}
                <div className="mb-2 p-4 pt-0">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                            <h1 className="text-xl font-semibold mb-1 text-foreground dark:text-foreground">{lecture.title}</h1>
                            <p className="text-md text-muted-foreground dark:text-muted-foreground leading-relaxed">{lecture.summary}</p>
                        </div>
                        <Badge variant="outline" className="ml-4 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400">
                            {lecture.duration}
                        </Badge>
                    </div>
                </div>
            </div>

            {/* Enhanced Tabs Section */}
            <Tabs variant="underline" defaultTab={{ id: "about" }} tabs={tabs} />

            {/* Navigation to Next Lecture */}
            <div className="flex justify-between items-center mt-8">
                <Button variant="outline" className="border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 bg-transparent">
                    Previous Lecture
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">Up next: video</Button>
            </div>
        </div>
    );
});

LecturePlayer.displayName = "LecturePlayer";
