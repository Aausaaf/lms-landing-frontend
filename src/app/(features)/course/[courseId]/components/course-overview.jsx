"use client";

import { useState, useEffect, memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Award,
    Download,
    CheckCircle,
    Play,
    Clock,
    Users,
    Star,
    BookOpen,
    ArrowLeft,
    SparkleIcon,
    User,
    File,
    FileText,
    ChevronUp,
    ChevronDown,
    GraduationCap,
    Lightbulb,
    Paperclip,
    BadgeIcon,
} from "lucide-react";
import Link from "next/link";
import Tabs from "@/components/tab";
import { ContentCard } from "./content-card";
import { courseData } from "@/app/(features)/course/mock-data";
import CourseStats from "./course-stats";
import { useCourse } from "@/services/context/course";
import GlobalUtils from "@/lib/utils";

/**
 * Loading skeleton component with enhanced dark mode support
 */
const CourseOverviewSkeleton = memo(() => (
    <div className="w-full p-4 lg:p-8 space-y-8">
        <div className="space-y-6">
            <div className="h-64 lg:h-80 bg-muted dark:bg-gray-800 rounded-xl animate-pulse" />
            <div className="space-y-4">
                <div className="h-8 bg-muted dark:bg-gray-800 rounded animate-pulse w-3/4" />
                <div className="h-4 bg-muted dark:bg-gray-800 rounded animate-pulse w-full" />
                <div className="h-4 bg-muted dark:bg-gray-800 rounded animate-pulse w-2/3" />
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-20 bg-muted dark:bg-gray-800 rounded animate-pulse" />
            ))}
        </div>
    </div>
));

CourseOverviewSkeleton.displayName = "CourseOverviewSkeleton";

/**
 * Enhanced course overview component with improved performance and dark mode
 */
export const CourseOverview = memo(({ courseId }) => {
    const { courseDetails } = useCourse();
    // State management
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Get course data with error handling
    const course = courseDetails?.data?.data;
    const units = courseData[courseId]?.units;

    // Toggle description handler
    const toggleDescription = useCallback(() => {
        setShowFullDescription((prev) => !prev);
    }, []);

    // Error handling for missing course
    if (!courseDetails.isLoading && !course) {
        return (
            <div className="w-full p-8 text-center">
                <h2 className="text-2xl font-bold text-muted-foreground dark:text-muted-foreground">Course not found</h2>
                <p className="text-muted-foreground dark:text-muted-foreground mt-2">The requested course could not be found.</p>
            </div>
        );
    }

    if (courseDetails.isLoading) {
        return <CourseOverviewSkeleton />;
    }

    // Tab configuration with enhanced content
    const tabs = [
        {
            id: "overview",
            label: "Overview",
            content: (
                <div className="space-y-6 mt-2">
                    {/* Course State */}
                    <CourseStats />

                    {/* About Course */}
                    <ContentCard
                        subTitle="A detailed overview of what this course covers"
                        title="About This Course"
                        icon={<FileText className="w-[1.1rem] h-[1.1rem] text-orange-600 dark:text-orange-400" />}
                        headerColor="white"
                    >
                        <div
                            className={`text-gray-600 dark:text-gray-300 prose prose-lg dark:prose-invert max-w-none ${showFullDescription ? "" : "line-clamp-4"}`}
                            dangerouslySetInnerHTML={{
                                __html: course.description || "<p>...</p>",
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

                    {/* Features/Skills */}
                    {course.features?.length > 0 && course.features[0]?.name && (
                        <ContentCard title="Skills You'll Master" Icon={Lightbulb} headerColor="orange" subTitle="Practical skills and capabilities you'll develop">
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4`}>
                                {course.features
                                    .filter((feature) => feature.name.trim())
                                    .map((feature, index) => (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 p-3 sm:p-4 rounded-xl border border-orange-100 dark:border-orange-900/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform flex-shrink-0">
                                                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className={`text-gray-800 dark:text-gray-200 font-bold truncate text-base`}>{feature.name}</p>
                                                    {feature.level && (
                                                        <span className="inline-block px-2 py-1 bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-xs font-medium rounded-full mt-1">
                                                            {feature.level}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </ContentCard>
                    )}

                    {/* Learning Outcomes */}
                    {course.learningOutcomes?.length > 0 && course.learningOutcomes[0] && (
                        <ContentCard title="What You'll Learn" Icon={GraduationCap} headerColor="purple" subTitle="Key knowledge and skills you'll gain by completing the course">
                            <div className="grid gap-0">
                                {course.learningOutcomes
                                    .filter((outcome) => outcome.trim())
                                    .map((outcome, index) => (
                                        <div key={index} className="flex items-start group hover:bg-purple-50 dark:hover:bg-purple-950/20 p-2 sm:p-3 rounded-lg transition-colors">
                                            <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform">
                                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                            </div>
                                            <p className={`text-gray-800 dark:text-gray-200 font-medium leading-relaxed text-sm`}>{outcome}</p>
                                        </div>
                                    ))}
                            </div>
                        </ContentCard>
                    )}

                    {/* Prerequisites */}
                    {course.prerequisites?.length > 0 && course.prerequisites[0] && (
                        <ContentCard title="Prerequisites" Icon={Award} headerColor="green" subTitle="Topics or knowledge you should know before taking this course">
                            <div className="space-y-0">
                                {course.prerequisites
                                    .filter((prereq) => prereq.trim())
                                    .map((prerequisite, index) => (
                                        <div key={index} className="flex items-start group hover:bg-green-50 dark:hover:bg-green-950/20 p-2 sm:p-3 rounded-lg transition-colors">
                                            <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform">
                                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                            </div>
                                            <p className={`text-gray-800 dark:text-gray-200 font-medium leading-relaxed text-sm`}>{prerequisite}</p>
                                        </div>
                                    ))}
                            </div>
                        </ContentCard>
                    )}
                </div>
            ),
            icon: <SparkleIcon className="w-4 h-4" />,
        },
        {
            id: "curriculum",
            label: "Curriculum",
            content: (
                <div className="">
                    <ContentCard
                        title={"Course Curriculum"}
                        Icon={BookOpen}
                        subTitle={<span className="text-sm text-muted-foreground">Explore all units with summaries, lectures, and learning outcomes</span>}
                    >
                        <div className="space-y-4">
                            {units.map((unit, index) => (
                                <Link
                                    href={`/course/${courseId}/unit/${unit.id}`}
                                    key={unit.id}
                                    className="border group block border-border dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow bg-card dark:bg-gray-800 hover:border-orange-300"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-orange-200/30 dark:bg-orange-600/30 text-orange-500 dark:text-orange-400 rounded-lg flex items-center justify-center font-bold text-md">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg mb-1 text-foreground dark:text-foreground group-hover:text-orange-500">{unit.name}</h3>
                                                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3">{unit.summary}</p>
                                                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground dark:text-muted-foreground">
                                                    <div className="flex items-center space-x-1">
                                                        <Play className="w-4 h-4" />
                                                        <span>{unit.lectures} lectures</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{unit.duration}</span>
                                                    </div>
                                                    {unit.categories.map((item) => (
                                                        <Badge variant="outline" className="text-xs border-border dark:border-gray-600 text-muted-foreground dark:text-muted-foreground">
                                                            {item.name}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Link href={`/course/${courseId}/unit/${unit.id}`}>
                                                <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">Start Learning</Button>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="ml-16 space-y-2">
                                        <h4 className="text-sm font-medium text-muted-foreground dark:text-muted-foreground mb-2">Topics covered:</h4>
                                        {unit.learningOutcomes.map((topic, topicIndex) => (
                                            <div key={topicIndex} className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                                <div className="w-1.5 h-1.5 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
                                                <span>{topic}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ContentCard>
                </div>
            ),
            icon: <BookOpen className="w-4 h-4" />,
        },
        {
            id: "instructor",
            label: "Instructor",
            content: (
                <ContentCard title="Instructors" Icon={Users} headerColor="purple" subTitle="Meet the educators who designed and will guide the course">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4`}>
                        {course.instructors?.map((instructor, index) => (
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
                                        className={`font-medium text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors truncate text-xs md:text-sm`}
                                    >
                                        {instructor.name}
                                    </h3>
                                    <p className="text-purple-600 dark:text-purple-400 text-[10px] sm:text-xs truncate">{instructor.designation || instructor.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ContentCard>
            ),
            icon: <User className="w-4 h-4" />,
        },
        {
            id: "resources",
            label: "Resources",
            content: (
                <ContentCard title="Course Resources" Icon={Paperclip} headerColor="green" subTitle="Downloadable files and additional course materials">
                    <div className="grid gap-3 sm:gap-4">
                        {course.attachments?.length > 0 && course.attachments?.[0]?.title
                            ? course.attachments
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
                                                  <p className={`text-gray-800 dark:text-gray-200 font-bold truncate text-sm md:text-base`}>{attachment.title}</p>
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
                                  ))
                            : "Resources  Not Found"}
                    </div>
                </ContentCard>
            ),
            icon: <File className="w-4 h-4" />,
        },
        {
            id: "certificate",
            label: "Certificate",
            content: (
                <ContentCard title="Course Certificate" Icon={BadgeIcon} headerColor="indigo" subTitle="Get recognized with a certificate after course completion">
                    {course.certificateCriteria?.certificateDescription && (
                        <div className="space-y-4 sm:space-y-6">
                            {course.certificateCriteria.certificateImagePreview && (
                                <div className="flex justify-center">
                                    <div className="relative group">
                                        <img
                                            src={course.certificateCriteria.certificateImagePreview || "/placeholder.svg"}
                                            alt="Certificate Preview"
                                            className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800 max-h-32 sm:max-h-48 object-contain shadow-lg group-hover:shadow-xl transition-shadow"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>
                            )}

                            <p className={`text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-sm`}>{course.certificateCriteria.certificateDescription}</p>

                            {course.certificateCriteria.certificateBenefits?.length > 0 && (
                                <div className="grid">
                                    {course.certificateCriteria.certificateBenefits
                                        .filter((benefit) => benefit.trim())
                                        .map((benefit, index) => (
                                            <div key={index} className="flex items-center group hover:bg-indigo-50 dark:hover:bg-indigo-950/20 p-2 sm:p-3 rounded-lg transition-colors">
                                                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform flex-shrink-0">
                                                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                                </div>
                                                <p className={`text-gray-800 dark:text-gray-200 font-medium text-sm md:text-sm`}>{benefit}</p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    )}
                </ContentCard>
            ),
        },
    ];

    return (
        <div className="w-full p-4 fade-in">
            {/* Back to Course List Navigation */}
            <div className="mb-3">
                <Link
                    href="/course-list"
                    className="text-sm inline-flex items-center text-muted-foreground dark:text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <span>Back to Course List</span>
                </Link>
            </div>

            {/* Hero Section with Course Image and Basic Info */}
            <div className="mb-0">
                <div className="relative rounded-xl overflow-hidden mb-4">
                    <img src={GlobalUtils.getMediaUrl({ courseId, key: "bannerImage" }) || "/placeholder.svg"} alt={course.title} className="w-full h-64 lg:h-80 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-2">{course.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span>{course.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{course.students?.toLocaleString() || "100"} students</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{course.duration} Hrs</span>
                            </div>
                            {course.difficultyLevel?.map((item) => (
                                <Badge variant="secondary" className="bg-white/20 text-white">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-2">
                    <p className="text-md text-muted-foreground dark:text-muted-foreground flex-1">{course.summary}</p>
                </div>
            </div>

            <Tabs variant="underline" defaultTab={{ id: "overview" }} tabs={tabs} />
        </div>
    );
});

CourseOverview.displayName = "CourseOverview";
