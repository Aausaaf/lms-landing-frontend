"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Clock, Award, BookOpen, Info, Download, ExternalLink, FileText, Club, School, Users, GraduationCap, Paperclip, Link2, User, File, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContentCard } from "../../../../../../../../../components/contentCard";
import Tabs from "@/components/tab";

const lessonData = {
    "lesson-1": {
        title: "Types of relations",
        description: "Learn about different types of relations including reflexive, symmetric, and transitive relations with practical examples.",
        duration: "45 minutes",
        difficulty: "Medium",
        status: "in-progress",
        progress: 60,
        // Lesson overview and learning objectives
        overview:
            "This comprehensive lesson covers the fundamental types of relations in mathematics. Students will explore reflexive, symmetric, and transitive relations through theoretical concepts and practical examples, building a strong foundation for understanding equivalence relations.",
        learningOutcomes: [
            "Define and identify reflexive relations with examples",
            "Understand symmetric relation properties and applications",
            "Apply transitive relation concepts to solve problems",
            "Recognize and work with equivalence relations",
            "Solve complex problems involving multiple relation types",
        ],
        prerequisites: ["Basic set theory concepts", "Understanding of ordered pairs", "Elementary logic and reasoning"],
        keyTopics: [
            "Reflexive relations and properties",
            "Symmetric relations in mathematics",
            "Transitive relations and chains",
            "Equivalence relations",
            "Relation composition",
            "Real-world applications",
        ],
        // Lesson instructor information
        instructors: [
            {
                name: "Dr. Kushagra Thakral",
                role: "Lesson Instructor",
                avatar: "/placeholder.svg?height=60&width=60",
                bio: "Expert in discrete mathematics and relation theory with extensive teaching experience in making complex concepts accessible to students.",
                expertise: ["Discrete Mathematics", "Relation Theory", "Set Theory", "Mathematical Logic"],
                experience: "12+ years in mathematics education",
                rating: 4.9,
                specialization: "Relations and Functions",
            },
        ],
        // Video lectures for this lesson
        lectures: [
            {
                id: "lecture-1",
                title: "Equivalence relations and their properties",
                type: "video",
                duration: "12:45",
                status: "completed",
                description: "Introduction to equivalence relations and their three key properties",
            },
            {
                id: "lecture-2",
                title: "Equivalence relations - Non math example",
                type: "video",
                duration: "8:30",
                status: "current",
                description: "Real-world examples of equivalence relations outside mathematics",
            },
            {
                id: "lecture-3",
                title: "Equivalence relations in geometry",
                type: "video",
                duration: "15:20",
                status: "not-started",
                description: "Geometric applications of equivalence relations",
            },
            {
                id: "lecture-4",
                title: "Empty and Universal relations",
                type: "video",
                duration: "10:15",
                status: "not-started",
                description: "Understanding special types of relations",
            },
        ],
        // Lesson-specific downloadable resources
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
        // External learning resources
        resources: [
            {
                title: "Interactive Relation Visualizer",
                description: "Visual tool to understand different types of relations with interactive examples",
                url: "https://www.geogebra.org/m/relations-visualizer",
                type: "Interactive Tool",
            },
            {
                title: "Khan Academy - Relation Types",
                description: "Additional video explanations and practice problems on relation types",
                url: "https://www.khanacademy.org/math/discrete-math/relations",
                type: "Video Course",
            },
            {
                title: "MIT Discrete Math Notes",
                description: "Advanced reading material on relations from MIT OpenCourseWare",
                url: "https://ocw.mit.edu/courses/discrete-mathematics/",
                type: "Academic Resource",
            },
        ],
        // Lesson assessment
        assessment: {
            id: "assessment-1",
            title: "Types of Relations Quiz",
            description: "Test your understanding of reflexive, symmetric, and transitive relations",
            questions: 8,
            timeLimit: "20 minutes",
            passingScore: 70,
        },
    },
};

// Loading skeleton with theme support
function LessonDetailsSkeleton() {
    return (
        <div className="w-full p-4 lg:p-8 space-y-8 bg-gradient-orange min-h-screen">
            <div className="space-y-4">
                <div className="h-8 bg-muted rounded animate-pulse w-3/4" />
                <div className="h-4 bg-muted rounded animate-pulse w-full" />
                <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
            </div>
            <div className="h-10 bg-muted rounded animate-pulse w-full" />
            <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-32 bg-muted rounded animate-pulse" />
                ))}
            </div>
        </div>
    );
}

export function LessonDetails({ courseId, unitId, lessonId }) {
    const [loading, setLoading] = useState(true);
    const [viewportWidth, setViewportWidth] = useState(1024);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const lesson = lessonData[lessonId];

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    // Responsive breakpoints
    useEffect(() => {
        const updateViewport = () => {
            setViewportWidth(window.innerWidth);
        };

        updateViewport();
        window.addEventListener("resize", updateViewport);
        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    if (loading) {
        return <LessonDetailsSkeleton />;
    }

    if (!lesson) {
        return (
            <div className="w-full p-8 text-center bg-gradient-orange min-h-screen">
                <h2 className="text-2xl font-bold text-muted-foreground">Lesson not found</h2>
            </div>
        );
    }

    // Determine device type based on viewport width
    const isMobile = viewportWidth <= 768;

    const isTablet = viewportWidth > 768 && viewportWidth <= 1024;

    const tabs = [
        {
            id: "video",
            label: "Video",
            content: (
                <div className="mt-2 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                        {/* Video lectures section */}
                        <div>
                            <h3 className="font-semibold mb-4 flex items-center space-x-2 text-foreground">
                                <Play className="w-5 h-5 text-orange-500" />
                                <span>Video Lectures</span>
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {lesson.lectures.map((lecture, index) => (
                                    <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lesson/${lessonId}/lecture/${lecture.id}`} className="block">
                                        <Card className="hover:shadow-md transition-all duration-200 cursor-pointer bg-card shadow-sm">
                                            <CardContent className="p-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex flex-col items-center space-y-1">
                                                        <div
                                                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                                lecture.status === "completed" ? "bg-green-500" : lecture.status === "current" ? "bg-orange-500" : "bg-muted-foreground"
                                                            }`}
                                                        >
                                                            {lecture.status === "completed" ? <CheckCircle className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                                                        </div>
                                                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{index + 1}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-medium mb-1 text-foreground">{lecture.title}</h4>
                                                        <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{lecture.description}</p>
                                                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                            <Clock className="w-3 h-3" />
                                                            <span>{lecture.duration}</span>
                                                            {/* <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                                                                {lecture.type}
                                                            </Badge> */}
                                                            {lecture.status === "current" && (
                                                                <Badge variant="default" className="text-xs bg-orange-500 text-white">
                                                                    Current
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Practice exercises section */}
                        {/* <div>
                            <h3 className="font-semibold mb-4 flex items-center space-x-2 text-foreground">
                                <Target className="w-5 h-5 text-green-500" />
                                <span>Practice Exercises</span>
                            </h3>
                            <div className="space-y-4">
                                {lesson.practices.map((practice) => (
                                    <Card key={practice.id} className="bg-card border-border">
                                        <CardContent className="p-4">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex-1">
                                                    <h4 className="font-medium mb-1 text-foreground">{practice.title}</h4>
                                                    <p className="text-sm text-muted-foreground mb-2">{practice.description}</p>
                                                    <div className="flex items-center space-x-2">
                                                        <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                                                            {practice.questions} questions
                                                        </Badge>
                                                        <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                                                            {practice.difficulty}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <Badge variant="outline" className="border-border text-foreground bg-card">
                                                    Not started
                                                </Badge>
                                            </div>
                                            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">Start Practice</Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div> */}
                    </div>

                    {/* Lesson assessment with theme colors */}
                    <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">{lesson.assessment.title}</h3>
                                        <p className="text-muted-foreground mb-2">{lesson.assessment.description}</p>
                                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                            <span>{lesson.assessment.questions} questions</span>
                                            <span>•</span>
                                            <span>{lesson.assessment.timeLimit}</span>
                                            <span>•</span>
                                            <span className="text-purple-600 dark:text-purple-400 font-medium">{lesson.assessment.passingScore}% to pass</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-md">Take Assessment</Button>
                            </div>
                        </CardContent>
                    </Card>
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
                        icon={<FileText className="w-[1.1rem] h-[1.1rem] text-orange-600" />}
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
                            {lesson.instructors?.map((instructor) => (
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
                                                    {resource.link && (
                                                        <p title={resource.link} className="text-gray-600 dark:text-gray-400 text-sm mt-1 truncate max-w-44 break-words">
                                                            {resource.link}
                                                        </p>
                                                    )}
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

    return (
        <div className="w-full  p-4  fade-in min-h-screen">
            {/* SEO-friendly breadcrumb navigation */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Lesson header with key information */}
            <div className="mb-2 mt-4  p-4 bg-card shadow-sm rounded-lg">
                <h1 className="text-xl font-semibold mb-1 text-foreground">Lesson 1: {lesson.title}</h1>
                <p className="text-md text-muted-foreground  leading-relaxed">{lesson.description}</p>
            </div>

            <Tabs variant="underline" defaultTab={{ id: "video" }} tabs={tabs} />
        </div>
    );
}
