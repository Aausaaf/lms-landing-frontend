"use client";
import LoadingWrapper from "@/components/ContainerWithLoading";
import { useVideo } from "@/services/context/video";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { LecturePlayer } from "./lecture-player";
import { LectureSidebar } from "./lecture-sidebar";

const LectureDetails = () => {
    const { courseId, unitId, lessonId, lectureId } = useParams();
    const { lectureDetails } = useVideo();

    useEffect(() => {
        lectureDetails.fetch({ dynamicRoute: `/${courseId}/module/${unitId}/lesson/${lessonId}/video/${lectureId}` });
    }, [courseId, unitId, lessonId, lectureId]);

    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <div className="flex">
                {/* Left sidebar with video lectures navigation */}
                <LectureSidebar courseId={courseId} unitId={unitId} activeLectureId={lectureId} lessonId={lessonId} />
                {/* Main content area with lesson details */}
                <main className="flex-1 lg:ml-[370px]">
                    <LoadingWrapper
                        loadingText={"Loading Lesson Details"}
                        isLoading={lectureDetails.isLoading}
                        data={{ data: lectureDetails.data, message: "Lesson details Not Found" }}
                        message={lectureDetails.success || lectureDetails.error}
                        loadingClassName="mt-6"
                        className={"w-full min-h-screen"}
                    >
                        <LecturePlayer />
                    </LoadingWrapper>
                </main>
            </div>
        </div>
    );
};

export default LectureDetails;
