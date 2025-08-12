"use client";

import { useState, useEffect } from "react";
import Stats from "@/components/stats";
import { Book, BookOpen, Clock, File, GraduationCap, Play } from "lucide-react";

/**
 * Course Statistics Component
 * @description Displays course-related statistics and metrics
 */
const CourseStats = ({ className, data }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const generateData = (statsData) => ({
        grid: isMobile ? 2 : 4,
        gridItems: [
            {
                title: "Video Lectures",
                value: statsData?.totalVideos || 156,
                icon: <Play className="h-4 w-4 sm:h-5 sm:w-5" />,
                variant: "orange",
                trend: null,
            },
            {
                title: "Total Quizzes",
                value: statsData?.totalQuizzes || 89,
                icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />,
                variant: "blue",
                trend: null,
            },
            {
                title: "Total Assignments",
                value: statsData?.totalAssignments || 23,
                icon: <File className="h-4 w-4 sm:h-5 sm:w-5" />,
                variant: "purple",
                trend: null,
            },
            {
                title: "Avg Completion Time",
                value: statsData?.avgCompletionTime || 45,
                icon: <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />,
                variant: "green",
                trend: null,
            },
        ],
        url: "/course-stats",
        method: "GET",
    });

    return <Stats generateData={generateData} className={className} data={data} />;
};

export default CourseStats;
