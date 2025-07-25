"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Play,
    File,
    Award,
    BookOpen,
    Download,
    ExternalLink,
    FileText,
    LinkIcon,
    ChevronRight,
    School,
    Info,
    User,
    Users,
    ChevronDown,
    ChevronUp,
    CheckCircle,
    GraduationCap,
    Paperclip,
    Clock,
    Link2,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import Tabs from "@/components/tab";
import { ContentCard } from "../../../../../../../components/contentCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const unitData = {
    "unit-1": {
        title: "Relations and functions",
        description:
            "This comprehensive unit covers the fundamental concepts of relations and functions, including types of relations, function properties, and their real-world applications in mathematics.",
        masteryPoints: 800,
        duration: "2.5 hours",
        difficulty: "Medium",
        progress: 25,
        // Unit overview and learning objectives
        about: {
            description: `
        <p>This comprehensive bootcamp takes you from absolute beginner to professional web developer. 
        You'll learn HTML, CSS, JavaScript, React, Node.js, and more through hands-on projects and real-world examples.</p>
        <p>Our step-by-step approach ensures you build a solid foundation before moving on to more advanced topics. 
        By the end of this module, you'll have the skills to build complete web applications and the confidence to apply for web development positions.</p>
        <p>The module includes practical projects, coding exercises, and real-world scenarios that prepare you for the modern web development landscape.</p>
    `,
            learningOutcomes: [
                "Build responsive websites with HTML, CSS, and JavaScript",
                "Create dynamic web applications with React",
                "Develop backend APIs with Node.js and Express",
                "Deploy full-stack applications to production",
                "Implement authentication and database integration",
                "Master modern development tools and workflows",
            ],
            attachments: [
                {
                    title: "Module Workbook",
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
            prerequisites: ["Basic computer skills", "No prior programming experience required"],
            resources: [
                {
                    title: "Khan Academy - Relations and Functions",
                    description: "Interactive exercises and video explanations on relations and functions",
                    url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:functions",
                    type: "Interactive Course",
                },
                {
                    title: "Wolfram MathWorld - Relation",
                    description: "Comprehensive mathematical reference for relation theory",
                    url: "https://mathworld.wolfram.com/Relation.html",
                    type: "Reference",
                },
                {
                    title: "MIT OpenCourseWare - Discrete Mathematics",
                    description: "Advanced topics in discrete mathematics including relations",
                    url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/",
                    type: "Course Material",
                },
                {
                    title: "GeoGebra - Function Explorer",
                    description: "Interactive tool to visualize and explore functions",
                    url: "https://www.geogebra.org/graphing",
                    type: "Interactive Tool",
                },
            ],
            instructors: [
                {
                    name: "Dr. Kushagra Thakral",
                    role: "Unit Instructor",
                    avatar: "/placeholder.svg?height=60&width=60",
                    bio: "Specialized in algebra and discrete mathematics with focus on relations and functions",
                    expertise: ["Algebra", "Discrete Mathematics", "Set Theory"],
                    experience: "15+ years teaching experience",
                    rating: 4.9,
                },
            ],
        },
        // Unit instructor information
        instructors: [
            {
                name: "Dr. Kushagra Thakral",
                role: "Unit Instructor",
                avatar: "/placeholder.svg?height=60&width=60",
                bio: "Specialized in algebra and discrete mathematics with focus on relations and functions",
                expertise: ["Algebra", "Discrete Mathematics", "Set Theory"],
                experience: "15+ years teaching experience",
                rating: 4.9,
            },
        ],
        // Unit lessons with video content
        lessons: [
            {
                id: "lesson-1",
                title: "Types of relations",
                description: "Learn about different types of relations including reflexive, symmetric, and transitive relations with practical examples.",
                duration: "45 minutes",
                lectureCount: 4,
                difficulty: "Medium",
                status: "in-progress",
                progress: 60,
                lecturesList: [
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
            },
            {
                id: "lesson-2",
                title: "Function fundamentals",
                description: "Master the basics of functions including domain, range, and function notation with comprehensive examples.",
                duration: "50 minutes",
                lectureCount: 3,
                difficulty: "Medium",
                status: "not-started",
                progress: 0,
                lecturesList: [
                    {
                        id: "lecture-5",
                        title: "Introduction to functions",
                        type: "video",
                        duration: "15:30",
                        status: "not-started",
                        description: "Basic concepts and definition of functions",
                    },
                    {
                        id: "lecture-6",
                        title: "Domain and range concepts",
                        type: "video",
                        duration: "18:45",
                        status: "not-started",
                        description: "Understanding domain and range in functions",
                    },
                    {
                        id: "lecture-7",
                        title: "Function notation and evaluation",
                        type: "video",
                        duration: "16:20",
                        status: "not-started",
                        description: "Proper function notation and evaluation techniques",
                    },
                ],
            },
        ],
        // Downloadable resources
        attachments: [
            {
                name: "Unit 1 - Relations Notes.pdf",
                size: "1.5 MB",
                type: "pdf",
                description: "Comprehensive notes on relations",
            },
            {
                name: "Function Examples.pdf",
                size: "900 KB",
                type: "pdf",
                description: "Worked examples and practice problems",
            },
            {
                name: "Quick Reference Sheet.pdf",
                size: "600 KB",
                type: "pdf",
                description: "Formulas and key concepts summary",
            },
        ],
        // External learning resources
        externalResources: [
            {
                title: "Khan Academy - Relations and Functions",
                description: "Interactive exercises and video explanations on relations and functions",
                url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:functions",
                type: "Interactive Course",
            },
            {
                title: "Wolfram MathWorld - Relation",
                description: "Comprehensive mathematical reference for relation theory",
                url: "https://mathworld.wolfram.com/Relation.html",
                type: "Reference",
            },
            {
                title: "MIT OpenCourseWare - Discrete Mathematics",
                description: "Advanced topics in discrete mathematics including relations",
                url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/",
                type: "Course Material",
            },
            {
                title: "GeoGebra - Function Explorer",
                description: "Interactive tool to visualize and explore functions",
                url: "https://www.geogebra.org/graphing",
                type: "Interactive Tool",
            },
        ],
        // Unit assessment quiz
        quiz: {
            id: "quiz-1",
            title: "Unit 1 Assessment",
            description: "Comprehensive quiz covering all topics in relations and functions",
            masteryPoints: 160,
            questions: 15,
            timeLimit: "45 minutes",
        },
    },
};

// Loading skeleton component with theme support
function UnitDetailsSkeleton() {
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

export function UnitDetails({ courseId, unitId }) {
    const [loading, setLoading] = useState(true);
    const [expandedLessons, setExpandedLessons] = useState({ "lesson-1": true });
    const [viewportWidth, setViewportWidth] = useState(1024);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const unit = unitData[unitId];
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
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    // Toggle lesson expansion for better content organization
    const toggleLessonExpansion = (lessonId) => {
        setExpandedLessons((prev) => ({
            ...prev,
            [lessonId]: !prev[lessonId],
        }));
    };

    if (loading) {
        return <UnitDetailsSkeleton />;
    }

    if (!unit) {
        return (
            <div className="w-full p-8 text-center bg-gradient-orange min-h-screen">
                <h2 className="text-2xl font-bold text-muted-foreground">Unit not found</h2>
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
    ];
    const unitDetails = unit.about;
    const tabs = [
        {
            id: "lessons",
            label: "Lessons",
            content: (
                <div className="mt-2 space-y-6">
                    {unit.lessons.map((lesson, index) => (
                        <Card key={lesson.id} className="hover:shadow-lg shadow-0 transition-all duration-300 border border-gray-200 hover:border-orange-500 bg-card">
                            <CardContent className="p-6">
                                {/* Clickable lesson header - navigates to lesson details */}
                                <Link href={`/course/${courseId}/unit/${unitId}/lesson/${lesson.id}`}>
                                    <div className="cursor-pointer group" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-start justify-between mb-1">
                                            <div className="flex items-start space-x-4 flex-1">
                                                {/* Lesson number indicator with theme colors */}
                                                <div className="w-8 h-8 bg-orange-300/30 text-orange-500  rounded-lg flex items-center justify-center font-bold text-md">{index + 1}</div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold group-hover:text-orange-500 transition-colors text-foreground">{lesson.title}</h3>
                                                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{lesson.description}</p>
                                                </div>
                                            </div>
                                            {lesson.progress > 0 && <span className="text-sm text-muted-foreground">{lesson.progress}% complete</span>}
                                        </div>
                                        {/* Progress bar for lessons in progress */}
                                        {lesson.progress > 0 && <Progress value={lesson.progress} className="h-1" />}
                                    </div>
                                </Link>

                                {/* Expandable video lectures section */}
                                {expandedLessons[lesson.id] && (
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="font-semibold flex items-center space-x-2 text-foreground">
                                                <Play className="w-4 h-4 text-orange-500" />
                                                <span>Video Lectures</span>
                                            </h4>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-border text-foreground hover:bg-muted bg-transparent"
                                                onClick={() => toggleLessonExpansion(lesson.id)}
                                            >
                                                Collapse
                                            </Button>
                                        </div>

                                        {/* Video lectures grid */}
                                        <div className="grid gap-3">
                                            {lesson.lecturesList.map((lecture, lectureIndex) => (
                                                <Link key={lecture.id} href={`/course/${courseId}/unit/${unitId}/lesson/${lesson.id}/lecture/${lecture.id}`} className="block">
                                                    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer border border-border bg-card">
                                                        <div className="flex items-center space-x-3">
                                                            {/* Video status indicator with theme colors */}
                                                            <div
                                                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                                    lecture.status === "completed" ? "bg-green-500" : lecture.status === "current" ? "bg-orange-500" : "bg-muted-foreground"
                                                                }`}
                                                            >
                                                                <Play className="w-4 h-4 text-white" />
                                                            </div>
                                                            <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">{lectureIndex + 1}</span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h5 className="font-medium mb-1 text-foreground">{lecture.title}</h5>
                                                            <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{lecture.description}</p>
                                                            <div className="flex items-center space-x-3 text-sm">
                                                                <div className="flex items-center space-x-1 text-muted-foreground">
                                                                    <Clock className="w-3 h-3" />
                                                                    <span>{lecture.duration}</span>
                                                                </div>
                                                                <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                                                                    {lecture.type}
                                                                </Badge>
                                                                {lecture.status === "current" && (
                                                                    <Badge variant="default" className="text-xs bg-orange-500 text-white">
                                                                        Current
                                                                    </Badge>
                                                                )}
                                                                {lecture.status === "completed" && (
                                                                    <Badge variant="default" className="text-xs bg-green-500 text-white">
                                                                        Completed
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Toggle button for collapsed lessons */}
                                {!expandedLessons[lesson.id] && (
                                    <div className="pt-4">
                                        <Button variant="outline" size="sm" onClick={() => toggleLessonExpansion(lesson.id)} className="w-full border-border text-foreground hover:bg-muted">
                                            <ChevronDown className="w-4 h-4 mr-2" />
                                            Show {lesson.lectureCount} Video Lectures
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}

                    {/* Unit assessment quiz with theme colors */}
                    <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-orange-light">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">{unit.quiz.title}</h3>
                                        <p className="text-muted-foreground mb-2">{unit.quiz.description}</p>
                                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                            <span>{unit.quiz.questions} questions</span>
                                            <span>•</span>
                                            <span>{unit.quiz.timeLimit}</span>
                                            <span>•</span>
                                            <span className="text-orange-600 dark:text-orange-400 font-medium">{unit.quiz.masteryPoints} points</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md">Take Quiz</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ),
            icon: <BookOpen className="w-4 h-4" />,
        },
        {
            id: "unit-details",
            label: "Unit details",
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    {/* Module Description */}
                    <ContentCard
                        subTitle="A detailed overview of what this module covers"
                        title="About This Module"
                        icon={<FileText className="w-[1.1rem] h-[1.1rem] text-orange-600" />}
                        headerColor="white"
                        isMobile={isMobile}
                    >
                        <div
                            className={`prose prose-lg dark:prose-invert max-w-none ${showFullDescription ? "" : "line-clamp-4"} ${isMobile ? "text-sm" : "text-sm"}`}
                            dangerouslySetInnerHTML={{
                                __html: unitDetails.description || "<p>Module description will appear here...</p>",
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
                    {unitDetails.learningOutcomes?.length > 0 && unitDetails.learningOutcomes[0] && (
                        <ContentCard title="What You'll Learn" Icon={GraduationCap} headerColor="purple" subTitle="Key knowledge and skills you'll gain by completing the module" isMobile={isMobile}>
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
                        <ContentCard title="Prerequisites" Icon={Award} headerColor="green" isMobile={isMobile} subTitle="Topics or knowledge you should know before taking this module">
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
                    <ContentCard title="Instructors" Icon={Users} headerColor="purple" subTitle="Meet the educators who designed and will guide the module">
                        <div className={`grid ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-2"} gap-3 sm:gap-4`}>
                            {unitDetails.instructors?.map((instructor) => (
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
            icon: <File className="w-4 h-4" />,
            content: (
                <div className={`mt-2 ${isMobile || isTablet ? "space-y-4 sm:space-y-6" : "xl:col-span-2 space-y-6"}`}>
                    {/* Attachments */}
                    {unitDetails.attachments?.length > 0 && unitDetails.attachments[0]?.title && (
                        <ContentCard title="Module Resources" Icon={Paperclip} headerColor="green" isMobile={isMobile} subTitle="Downloadable files and additional module materials">
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
        },
    ];

    return (
        <div className="w-full p-4  fade-in">
            {/* SEO-friendly breadcrumb navigation */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Unit header with key information */}
            <div className="mb-2 mt-4 bg-card  p-5 shadow-sm rounded-lg">
                <h1 className="text-xl font-semibold mb-2 text-foreground">Unit 1: {unit.title}</h1>
                <p className="text-md text-muted-foreground leading-relaxed">{unit.description}</p>
            </div>

            <Tabs variant="underline" defaultTab={{ id: "lessons" }} tabs={tabs} />
        </div>
    );
}
