"use client";

import { useEffect, useState } from "react";
import { useCourse } from "@/services/context/course";
import CourseCard from "./CourseCard";

export default function CourseGrid() {
    const { courseList } = useCourse();
    const [sortBy, setSortBy] = useState("relevance");
    const [resultsCount] = useState(165);

    const sortOptions = [
        { value: "relevance", label: "Relevance" },
        { value: "popularity", label: "Popularity" },
        { value: "rating", label: "Highest Rated" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "newest", label: "Newest" },
    ];

    useEffect(() => {
        courseList.fetch({});
    }, []);

    console.log("courseList.data, courseList.success, courseList.error, courseList.isLoading", courseList.data, courseList.success, courseList.error, courseList.isLoading);

    return (
        <div>
            {/* Filter Bar */}
            <div className="flex items-center justify-between mb-8">
                <div className="text-gray-600">
                    <span className="font-semibold text-gray-900">{resultsCount}</span> courses found
                </div>

                <div className="flex items-center space-x-4">
                    <label className="text-sm text-gray-600 font-medium">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
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
        </div>
    );
}
