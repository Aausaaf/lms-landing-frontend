"use client";

import { useState, memo, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, File, Award, BookOpen, Download, ExternalLink, FileText, School, Info, User, Users, ChevronDown, ChevronUp, CheckCircle, GraduationCap, Paperclip, Clock, Link2 } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import Tabs from "@/components/tab";
import { ContentCard } from "../../../../../../../components/contentCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { lectureList, unitData } from "@/app/(features)/course/mock-data";
import { useResponsive } from "@/lib/hooks/use-responsive";
import { useParams } from "next/navigation";
import { useModule } from "@/services/context/module";
import VideoList from "../lesson/[lessonId]/components/video-list";

/**
 * Loading skeleton component with enhanced dark mode support
 */
const UnitDetailsSkeleton = memo(() => (
    <div className="w-full p-4 lg:p-8 space-y-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="space-y-4">
            <div className="h-8 b | Premium Learning g-muted dark:bg-gray-800 rounded animate-pulse w-3/4" />
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

UnitDetailsSkeleton.displayName = "UnitDetailsSkeleton";

const UnitContent = () => {
    const { courseId, unitId } = useParams();
    let { unitDetails } = useModule();
    unitDetails = unitDetails.data.data;
    const [expandedLessons, setExpandedLessons] = useState({ "lesson-1": true });
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Custom hooks
    const { isMobile, isTablet } = useResponsive();

    // Get unit data with error handling
    const unit = unitData[unitId];

    // Toggle lesson expansion handler
    const toggleLessonExpansion = (lessonId) => {
        setExpandedLessons((prev) => ({
            ...prev,
            [lessonId]: !prev[lessonId],
        }));
    };

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
            title: "Course Details",
            href: `/course/${courseId}`,
            icon: <BookOpen className="h-3.5 w-3.5" />,
        },
        {
            title: "Unit",
            href: `/course/${courseId}/unit/${unit.id}`,
            icon: <FileText className="h-3.5 w-3.5" />,
        },
    ];

    console.log("expandedLessons", expandedLessons);

    // Tab configuration with enhanced content
    const tabs = useMemo(
        () => [
            {
                id: "lessons",
                label: "Lessons",
                content: (
                    <div className="mt-2 space-y-6">
                        {lectureList.map((lesson, index) => (
                            <Card
                                key={lesson.id}
                                className="hover:shadow-lg shadow-0 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 bg-card dark:bg-gray-800"
                            >
                                <CardContent className="p-5">
                                    {/* Clickable lesson header */}
                                    <Link href={`/course/${courseId}/unit/${unitId}/lesson/${lesson.id}`}>
                                        <div className="cursor-pointer group" onClick={(e) => e.stopPropagation()}>
                                            <div className="flex items-start justify-between mb-1">
                                                <div className="flex items-start space-x-4 flex-1">
                                                    {/* Lesson number indicator */}
                                                    <div className="w-8 h-8 mt-1 bg-orange-300/30 dark:bg-orange-600/30 text-orange-500 dark:text-orange-400 rounded-lg flex items-center justify-center font-bold text-md">
                                                        {index + 1}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors text-foreground dark:text-foreground">
                                                            {lesson.title}
                                                        </h3>
                                                        <p className="text-muted-foreground dark:text-muted-foreground  leading-relaxed text-sm">{lesson.description}</p>
                                                    </div>
                                                </div>
                                                {lesson.progress > 0 && <span className="text-sm  text-muted-foreground dark:text-muted-foreground">{lesson.progress}% complete</span>}
                                            </div>
                                            {/* Progress bar for lessons in progress */}
                                            {lesson.progress > 0 && <Progress value={lesson.progress} className="h-1 mt-4" />}
                                        </div>
                                    </Link>
                                    {expandedLessons[lesson.id] && (
                                        <div className="mt-4">
                                            <VideoList lesson={lesson} toggleLessonExpansion={() => toggleLessonExpansion(lesson.id)} />
                                        </div>
                                    )}

                                    {/* Toggle button for collapsed lessons */}
                                    {!expandedLessons[lesson.id] && (
                                        <div className="pt-4">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => toggleLessonExpansion(lesson.id)}
                                                className="w-full border-border dark:border-gray-600 text-foreground dark:text-foreground hover:bg-muted dark:hover:bg-gray-700"
                                            >
                                                <ChevronDown className="w-4 h-4 mr-2" />
                                                Show {lesson.lectureCount} Video Lectures
                                            </Button>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ),
                icon: <BookOpen className="w-4 h-4" />,
            },
            {
                id: "unit-details",
                label: "Unit details",
                content: (
                    <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                        {/* Unit Description */}
                        <ContentCard
                            subTitle="A detailed overview of what this Unit covers"
                            title="About This Unit"
                            icon={<FileText className="w-[1.1rem] h-[1.1rem] text-orange-600 dark:text-orange-400" />}
                            headerColor="white"
                            isMobile={isMobile}
                        >
                            <div
                                className={`prose prose-lg dark:prose-invert max-w-none ${showFullDescription ? "" : "line-clamp-4"} ${isMobile ? "text-sm" : "text-sm"}`}
                                dangerouslySetInnerHTML={{
                                    __html: unitDetails.description || "<p>Unit description will appear here...</p>",
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
                        {unitDetails.learningOutcomes?.length > 0 && unitDetails.learningOutcomes[0] && (
                            <ContentCard title="What You'll Learn" Icon={GraduationCap} headerColor="purple" subTitle="Key knowledge and skills you'll gain by completing the Unit" isMobile={isMobile}>
                                <div className="grid gap-0">
                                    {unitDetails.learningOutcomes
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
                        {unitDetails.prerequisites?.length > 0 && unitDetails.prerequisites[0] && (
                            <ContentCard title="Prerequisites" Icon={Award} headerColor="green" isMobile={isMobile} subTitle="Topics or knowledge you should know before taking this Unit">
                                <div className="space-y-0">
                                    {unitDetails.prerequisites
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
                    <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                        {/* Instructors */}
                        <ContentCard title="Instructors" Icon={Users} headerColor="purple" subTitle="Meet the educators who designed and will guide the Unit">
                            <div className={`grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-2"} gap-3 sm:gap-4`}>
                                {unitDetails.instructors?.map((instructor, index) => (
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
                icon: <File className="w-4 h-4" />,
                content: (
                    <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                        {/* Attachments */}
                        {unitDetails.attachments?.length > 0 && unitDetails.attachments[0]?.title && (
                            <ContentCard title="Unit Resources" Icon={Paperclip} headerColor="green" isMobile={isMobile} subTitle="Downloadable files and additional Unit materials">
                                <div className="grid gap-3 sm:gap-4">
                                    {unitDetails.attachments
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
                        {unitDetails.resources?.length > 0 && unitDetails.resources[0]?.title && (
                            <ContentCard title="External Resources" subTitle="Helpful links and references to supplement your learning" Icon={Link2} headerColor="violet" isMobile={isMobile}>
                                <div className="grid gap-4">
                                    {unitDetails.resources
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
                                                        {resource.link && <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 truncate max-w-44 break-words">{resource.link}</p>}
                                                    </div>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    role="link"
                                                    className="text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 group-hover:scale-110 transition-transform"
                                                    onClick={() => window.open(resource.link, "_blank")}
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
            },
        ],
        [expandedLessons]
    );

    return (
        <div className="w-full p-4 fade-in">
            {/* SEO-friendly breadcrumb navigation */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Unit header with key information */}
            <div className="mb-2 mt-4 bg-card dark:bg-gray-800 p-5 shadow-sm rounded-lg border border-border dark:border-gray-700">
                <h1 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground capitalize">Unit 1: {unitDetails.name}</h1>
                <p className="text-md text-muted-foreground dark:text-muted-foreground leading-relaxed">{unitDetails.summary}</p>
            </div>

            <Tabs variant="underline" defaultTab={{ id: "lessons" }} tabs={tabs} />
        </div>
    );
};

export default UnitContent;
