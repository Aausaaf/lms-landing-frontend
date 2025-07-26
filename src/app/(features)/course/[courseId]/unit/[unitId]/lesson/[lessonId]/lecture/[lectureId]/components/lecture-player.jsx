"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Play,
    Pause,
    Volume2,
    Maximize,
    Settings,
    FileText,
    Download,
    User,
    BookOpen,
    Target,
    School,
    Club,
    Info,
    FileVideo,
    ChevronUp,
    ChevronDown,
    Users,
    Paperclip,
    Text,
    File,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import Tabs from "@/components/tab";
import { ContentCard } from "@/app/(features)/course/[courseId]/components/content-card";

const lectureDetails = {
    "lecture-1": {
        title: "Equivalence relations and their properties",
        summary: "Dive deep into the fascinating world of quantum mechanics and discover the fundamental principles that govern the behavior of matter and energy at the smallest scales.",
        description:
            "In this video, we break down the properties of equivalence relations in a clear and engaging way! You'll learn how to understand them mathematically, with step-by-step explanations and examples that make both the theory and applications crystal clear.",
        videoUrl: "/placeholder.svg?height=400&width=800",
        duration: "12:45",
        // Lecture-specific details for About tab
        description:
            "This lecture introduces the fundamental concept of equivalence relations and explores their three key properties: reflexive, symmetric, and transitive. We'll examine real-world examples and mathematical applications.",

        transcript: `Welcome to this lesson on equivalence relations and their properties.

An equivalence relation is a binary relation that is reflexive, symmetric, and transitive.

Let's start with the definition of reflexive property...

For a relation to be reflexive, every element must be related to itself.

Now, let's examine the symmetric property...

If element a is related to element b, then b must also be related to a.

Finally, the transitive property states...

If a is related to b, and b is related to c, then a must be related to c.

Let's look at some examples to make this clearer...`,
        instructors: [
            {
                name: "Kushagra Thakral",
                role: "Created by Kushagra Thakral",
                avatar: "/placeholder.svg?height=40&width=40",
                bio: "Mathematics educator specializing in algebra and discrete mathematics",
                expertise: ["Relations", "Functions", "Set Theory"],
            },
        ],
        attachments: [
            {
                title: "Lesson Workbook",
                description: "Comprehensive PDF guide with exercises and examples",
                file: "workbook.pdf",
            },
            {
                title: "Code Examples",
                description: "Starter code and completed projects",
                file: "code-examples.zip",
            },
            {
                title: "Resource Links",
                description: "Curated list of helpful development resources",
                file: "resources.txt",
            },
        ],
        // Lecture-specific resources
        resources: [
            { name: "Lecture 1 Notes.pdf", size: "1.2 MB", type: "pdf", description: "Detailed notes for this lecture" },
            { name: "Practice Problems.pdf", size: "800 KB", type: "pdf", description: "Additional practice exercises" },
            {
                name: "Visual Examples.pdf",
                size: "1.5 MB",
                type: "pdf",
                description: "Graphical representations and examples",
            },
        ],
    },
};

// Loading skeleton for lecture player
function LecturePlayerSkeleton() {
    return (
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
    );
}

export function LecturePlayer({ courseId, unitId, lessonId, lectureId }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(true);
    const [viewportWidth, setViewportWidth] = useState(1024);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const lecture = lectureDetails[lectureId];

    // Responsive breakpoints
    useEffect(() => {
        const updateViewport = () => {
            setViewportWidth(window.innerWidth);
        };

        updateViewport();
        window.addEventListener("resize", updateViewport);
        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    // Determine device type based on viewport width
    const isMobile = viewportWidth <= 768;

    const isTablet = viewportWidth > 768 && viewportWidth <= 1024;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LecturePlayerSkeleton />;
    }

    if (!lecture) {
        return (
            <div className="w-full p-8 text-center">
                <h2 className="text-2xl font-bold text-muted-foreground">Lecture not found</h2>
            </div>
        );
    }

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

    const tabs = [
        {
            id: "about",
            label: "About",
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    {/* Video Description */}
                    <ContentCard
                        subTitle="A detailed overview of what this video covers"
                        title="About This Video"
                        icon={<FileVideo className="w-[1.1rem] h-[1.1rem] text-orange-600" />}
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
                        <ContentCard title="Transcript" Icon={FileText} headerColor="indigo" isMobile={isMobile} subTitle={"video transcription is here "}>
                            <div
                                className={`prose prose-lg dark:prose-invert max-w-none ${isMobile ? "text-sm" : "text-sm"}`}
                                dangerouslySetInnerHTML={{
                                    __html: lecture.transcript,
                                }}
                            ></div>
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
                    {/* Instructors */}
                    <ContentCard title="Instructors" Icon={Users} headerColor="purple" subTitle="Meet the educators who designed and will guide the video">
                        <div className={`grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-2"} gap-3 sm:gap-4`}>
                            {lecture.instructors?.map((instructor) => (
                                <div
                                    key={instructor.id}
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
            icon: <Info className="w-4 h-4" />,
        },
        {
            id: "attachments",
            label: "Attachments",
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    {/* Attachments */}
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
        <div className="w-full p-4 max-w-[1100px]  fade-in">
            {/* SEO-friendly breadcrumb navigation */}
            <Breadcrumb items={breadcrumbItems} />
            <div className="bg-white dark:bg-gray-900 rounded-sm">
                {/* Video Player */}
                <Card className="mb-2 mt-4 overflow-hidden ">
                    <div className="relative bg-black aspect-video">
                        <img src={lecture.videoUrl || "/placeholder.svg"} alt={lecture.title} className="w-full h-full object-cover" />

                        {/* Video Controls Overlay */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-colors">
                            <Button size="lg" className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={() => setIsPlaying(!isPlaying)}>
                                {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
                            </Button>
                        </div>

                        {/* Video Controls Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <div className="flex items-center space-x-4">
                                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={() => setIsPlaying(!isPlaying)}>
                                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                </Button>

                                <div className="flex-1 bg-white/20 rounded-full h-1">
                                    <div className="bg-orange-500 h-1 rounded-full w-1/4"></div>
                                </div>

                                <span className="text-white text-sm">3:12 / {lecture.duration}</span>

                                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                    <Volume2 className="w-4 h-4" />
                                </Button>

                                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                    <Settings className="w-4 h-4" />
                                </Button>

                                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                    <Maximize className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Lecture Information */}
                <div className="mb-2 p-4 pt-0">
                    <h1 className="text-xl font-semibold mb-1 text-foreground">{lecture.title}</h1>
                    <p className="text-md text-muted-foreground  leading-relaxed">{lecture.summary}</p>
                </div>
            </div>

            <Tabs variant="underline" defaultTab={{ id: "about" }} tabs={tabs} />

            {/* Navigation to Next Lecture */}
            <div className="flex justify-end mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600">Up next: video</Button>
            </div>
        </div>
    );
}
