"use client";

import { useState, useEffect } from "react";
import { Star, Clock, Heart, Share2, ChevronRight, BookOpen } from "lucide-react";
import Image from "next/image";
import { useNavigation } from "@/components/navigation";
import GlobalUtils from "@/lib/utils";
import Link from "next/link";

/**
 * Course Card Component
 * @description Reusable card component for displaying course information
 */
export default function CourseCard({ data }) {
    const { navigate } = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Default course data structure
    const [courseData, setCourseData] = useState({
        id: "",
        name: "Course Title",
        description: "Course description",
        code: "",
        summary: "Course summary",
        rating: 0,
        tags: [],
        duration: 0,
        isFeatured: false,
        categories: [],
        instructors: [],
        price: null,
    });

    useEffect(() => {
        if (data) {
            setCourseData((prevData) => ({ ...prevData, ...data }));
        }
    }, [data]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const formatInstructorNames = () => {
        if (!courseData.instructors?.length) return "No instructor assigned";

        if (courseData.instructors.length === 1) {
            return courseData.instructors[0].name;
        } else if (courseData.instructors.length === 2) {
            return `${courseData.instructors[0].name} & ${courseData.instructors[1].name}`;
        } else {
            return `${courseData.instructors[0].name} +${courseData.instructors.length - 1}`;
        }
    };

    const toggleFavorite = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
        // TODO: Implement favorite functionality
    };

    const handleShare = (e) => {
        e.stopPropagation();
        // TODO: Implement share functionality
        if (navigator.share) {
            navigator.share({
                title: courseData.name,
                text: courseData.summary,
                url: window.location.origin + `/course/${courseData.id}`,
            });
        }
    };

    // Card Layout (default)
    return (
        <Link href={`/course/${courseData.id}`} className="cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-900 dark:hover:bg-gray-800">
                {/* Course Image */}
                <div className="relative h-32 sm:h-40 w-full overflow-hidden">
                    <Image
                        width={400}
                        height={isMobile ? 128 : 144}
                        src={GlobalUtils.getMediaUrl({ courseId: data.id, key: "thumbnailUrl" })}
                        alt={courseData.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                            e.target.src = `/placeholder.svg?height=${isMobile ? 128 : 144}&width=400`;
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Top badges */}
                    <div className="absolute right-2 top-2">
                        {courseData.tags?.slice(0, 1).map((badge, index) => (
                            <span key={index} className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-medium text-white shadow-md capitalize">
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star, index) => (
                                <Star
                                    key={index}
                                    className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${index < Math.floor(courseData.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-400 text-gray-400"}`}
                                />
                            ))}
                            <span className="ml-1 text-xs font-medium text-white">{courseData.rating || 0}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-200">
                            <Clock className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            <span>{courseData.duration || 0}h</span>
                        </div>
                    </div>
                </div>

                {/* Course Content */}
                <div className="relative p-3 sm:p-4">
                    {/* Category and Title */}
                    <div className="mb-2">
                        <div className="mb-1 flex items-center justify-between">
                            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 truncate max-w-[120px]">
                                {courseData.categories[0]?.name}
                            </span>
                            <div className="flex space-x-1">
                                <button
                                    onClick={toggleFavorite}
                                    className="rounded-full bg-gray-100 p-1 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                                >
                                    <Heart className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="rounded-full bg-gray-100 p-1 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                                >
                                    <Share2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                </button>
                            </div>
                        </div>
                        <h3
                            className={`text-sm font-semibold text-gray-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 line-clamp-2 ${
                                isHovered ? "text-orange-500" : ""
                            }`}
                        >
                            {courseData.name}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="mb-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{courseData.summary || "No description available"}</p>

                    {/* Instructor */}
                    <div className="mb-3 flex items-center space-x-2">
                        <div className="flex -space-x-1">
                            {courseData.instructors.slice(0, 2).map((instructor, index) => (
                                <Image
                                    key={index}
                                    width={isMobile ? 16 : 20}
                                    height={isMobile ? 16 : 20}
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt={instructor.name}
                                    className={`${isMobile ? "h-4 w-4" : "h-5 w-5"} rounded-full ring-1 ring-white dark:ring-gray-800`}
                                />
                            ))}
                            {(courseData.instructors?.length || 0) > 2 && (
                                <div
                                    className={`${
                                        isMobile ? "h-4 w-4" : "h-5 w-5"
                                    } rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-white dark:ring-gray-800`}
                                >
                                    +{courseData.instructors.length - 2}
                                </div>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate block">{formatInstructorNames()}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <BookOpen className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            {courseData.lessonCount || 0}
                        </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                        <button
                            onClick={() => navigate("/course-details")}
                            className={`group w-full bg-orange-50  text-orange-600 border border-orange-600 font-medium text-sm py-2 rounded-lg ${
                                isHovered ? "bg-orange-600 text-white" : ""
                            } transition-colors`}
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
