"use client";
import React, { useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import CourseFilters from "./CourseFilters";
import CourseGrid from "./CourseGrid";
import CoursePagination from "./CoursePagination";
import { useCourse } from "@/services/context/course";
import LoadingWrapper from "@/components/ContainerWithLoading";

const CourseList = () => {
    const { courseList } = useCourse();
    const searchParams = useSearchParams();

    // Memoize search parameters to prevent unnecessary re-renders
    const searchParamsObject = useMemo(() => {
        const params = {};

        // Get all search parameters
        for (const [key, value] of searchParams.entries()) {
            params[key] = value;
        }

        return params;
    }, [searchParams]);

    // Create stable fetch parameters
    const fetchParams = useMemo(() => {
        const params = {
            page: parseInt(searchParamsObject.page || "1", 10),
            sort: searchParamsObject.sort || "relevance",
            limit: 12, // Default items per page
            ...searchParamsObject,
        };

        // Remove undefined/null values
        Object.keys(params).forEach((key) => {
            if (params[key] === undefined || params[key] === null || params[key] === "") {
                delete params[key];
            }
        });

        return params;
    }, [searchParamsObject]);

    // Memoized fetch function to prevent unnecessary API calls
    const fetchCourses = useCallback(() => {
        courseList.fetch(fetchParams);
    }, [courseList.fetch, fetchParams]);

    // Effect to fetch courses when parameters change
    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <LoadingWrapper
                data={{
                    data: courseList.data,
                    message: courseList.success || courseList.error,
                }}
                isLoading={courseList.isLoading && !courseList.data}
                loadingText="Loading Course List"
                className="min-h-[400px]"
            >
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0">
                        <div className="sticky top-4">
                            <CourseFilters />
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <CourseGrid />
                        <CoursePagination />
                    </main>
                </div>
            </LoadingWrapper>
        </div>
    );
};

export default CourseList;
