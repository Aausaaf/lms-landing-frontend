"use client";
import { useState, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCourse } from "@/services/context/course";
import CourseCard from "./CourseCard";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function CourseGrid() {
    const { courseList } = useCourse();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get sort value from URL params with fallback
    const currentSort = searchParams.get("sort") || "relevance";

    const sortOptions = [
        { value: "relevance", label: "Relevance" },
        { value: "popularity", label: "Popularity" },
        { value: "rating", label: "Highest Rated" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "newest", label: "Newest" },
    ];

    // Memoize results count to prevent unnecessary re-renders
    const resultsCount = useMemo(() => {
        return courseList.data?.data?.pagination?.totalDocuments || 0;
    }, [courseList.data?.data?.totalDocuments]);

    // Update URL parameters without causing page reload
    const updateUrlParams = useCallback(
        (key, value) => {
            const params = new URLSearchParams(searchParams.toString());

            if (value && value !== "relevance") {
                params.set(key, value);
            } else {
                params.delete(key);
            }

            // Reset to page 1 when sorting changes
            if (key === "sort") {
                params.delete("page");
            }

            const newUrl = params.toString() ? `?${params.toString()}` : "";
            router.push(newUrl, { scroll: false });
        },
        [searchParams, router]
    );

    // Handle sort change
    const handleSortChange = useCallback(
        (e) => {
            const newSort = e.target.value;
            updateUrlParams("sort", newSort);
        },
        [updateUrlParams]
    );

    return (
        <div>
            {/* Filter Bar */}
            <div className="flex items-center justify-between mb-8">
                <div className="text-gray-600">
                    <span className="font-semibold text-gray-900">{resultsCount}</span> courses found
                </div>
                <div className="flex items-center space-x-4">
                    <label htmlFor="sort-select" className="text-sm text-gray-600 font-medium">
                        Sort by:
                    </label>
                    <select
                        id="sort-select"
                        value={currentSort}
                        onChange={handleSortChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                        aria-label="Sort courses by"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {courseList.data?.data?.records?.map((course) => (
                    <CourseCard key={course.id} data={course} />
                ))}
            </div>

            {/* Loading State */}
            {courseList.isLoading && (
                <div className="flex justify-center items-center py-12">
                    <LoadingSpinner />
                </div>
            )}

            {/* Empty State */}
            {!courseList.isLoading && (!courseList.data?.data?.records || courseList.data.data.records.length === 0) && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
                    <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
                </div>
            )}
        </div>
    );
}
