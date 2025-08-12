"use client";

import { useEffect, memo } from "react";
import { useLesson } from "@/services/context/lesson";
import LoadingWrapper from "@/components/ContainerWithLoading";
import { LectureSidebar } from "../lecture/[lectureId]/components/lecture-sidebar";
import { useParams } from "next/navigation";
import { LessonContent } from "./lesson-content";

/**
 * Enhanced lesson details component with improved performance and dark mode
 */
const LessonDetails = () => {
    const { courseId, unitId, lessonId } = useParams();
    const { lessonDetails } = useLesson();

    useEffect(() => {
        lessonDetails.fetch({ dynamicRoute: `/${courseId}/module/${unitId}/lesson/${lessonId}` });
    }, [courseId, unitId, lessonId]);

    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <div className="flex">
                {/* Left sidebar with video lectures navigation */}
                <LectureSidebar courseId={courseId} unitId={unitId} activeLectureId="" lessonId={lessonId} />
                {/* Main content area with lesson details */}
                <main className="flex-1 lg:ml-[370px]">
                    <LoadingWrapper
                        loadingText={"Loading Lesson Details"}
                        isLoading={lessonDetails.isLoading}
                        data={{ data: lessonDetails.data, message: "Lesson details Not Found" }}
                        message={lessonDetails.success || lessonDetails.error}
                        loadingClassName="mt-6"
                        className={"w-full min-h-screen"}
                    >
                        <LessonContent />
                    </LoadingWrapper>
                </main>
            </div>
        </div>
    );
};

// LessonDetails.displayName = "LessonDetails";
export default LessonDetails;
