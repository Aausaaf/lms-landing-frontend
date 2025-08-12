"use client";
import LoadingWrapper from "@/components/ContainerWithLoading";
import { useCourse } from "@/services/context/course";
import React, { useEffect } from "react";
import { CourseSidebar } from "./course-sidebar";
import { CourseOverview } from "./course-overview";
import { useParams } from "next/navigation";

const CourseDetails = () => {
    const params = useParams();
    const { courseDetails } = useCourse();

    useEffect(() => {
        courseDetails.fetch({ dynamicRoute: `${params.courseId}` });
    }, []);

    return (
        <LoadingWrapper
            loadingText={"Loading Course Details"}
            isLoading={courseDetails.isLoading}
            data={{ data: courseDetails.data, message: "Course details Not Found" }}
            message={courseDetails.success || courseDetails.error}
            loadingClassName="mt-6"
        >
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="flex">
                    {/* Course navigation sidebar */}
                    <CourseSidebar courseId={params.courseId} />
                    {/* Main course overview content */}
                    <main className="flex-1 lg:ml-80">
                        <CourseOverview courseId={params.courseId} />
                    </main>
                </div>
            </div>
        </LoadingWrapper>
    );
};

export default CourseDetails;
