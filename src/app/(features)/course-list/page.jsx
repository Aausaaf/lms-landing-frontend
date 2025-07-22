"use client";
import { useState, useEffect, useMemo } from "react";
import { coursesData } from "./constants/coursesData";
import CourseFilters from "./components/CourseFilters";
import SearchAndSort from "./components/SearchAndSort";
import CourseGrid from "./components/CourseGrid";
import { Layout } from "@/app/layout/layout";

export default function CourseListPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("popularity");
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        category: "All",
        subcategory: "All",
        level: "All",
        language: "All",
        pricing: "All",
        duration: "All",
    });

    const handleFilterChange = (filterType, value) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: value,
            // Reset subcategory when category changes
            ...(filterType === "category" && value !== prev.category ? { subcategory: "All" } : {}),
        }));
    };

    const handleClearFilters = () => {
        setFilters({
            category: "All",
            subcategory: "All",
            level: "All",
            language: "All",
            pricing: "All",
            duration: "All",
        });
        setSearchTerm("");
    };

    const filteredAndSortedCourses = useMemo(() => {
        let filtered = coursesData.filter((course) => {
            // Search filter
            if (
                searchTerm &&
                !course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                !course.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
                !course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return false;
            }

            // Category filter
            if (filters.category !== "All" && course.category !== filters.category) {
                return false;
            }

            // Subcategory filter
            if (filters.subcategory !== "All" && course.subcategory !== filters.subcategory) {
                return false;
            }

            // Level filter
            if (filters.level !== "All" && course.level !== filters.level) {
                return false;
            }

            // Language filter
            if (filters.language !== "All" && course.language !== filters.language) {
                return false;
            }

            // Pricing filter
            if (filters.pricing !== "All") {
                if (filters.pricing === "Free" && !course.isFree) return false;
                if (filters.pricing === "Paid" && course.isFree) return false;
                if (filters.pricing === "Under ₹10,000" && (course.isFree || course.pricing.current >= 10000)) return false;
                if (filters.pricing === "₹10,000 - ₹20,000" && (course.isFree || course.pricing.current < 10000 || course.pricing.current > 20000)) return false;
                if (filters.pricing === "Above ₹20,000" && (course.isFree || course.pricing.current <= 20000)) return false;
            }

            // Duration filter
            if (filters.duration !== "All") {
                const durationMonths = parseInt(course.duration.split(" ")[0]);
                if (filters.duration === "1-3 months" && (durationMonths < 1 || durationMonths > 3)) return false;
                if (filters.duration === "3-6 months" && (durationMonths < 3 || durationMonths > 6)) return false;
                if (filters.duration === "6-12 months" && (durationMonths < 6 || durationMonths > 12)) return false;
                if (filters.duration === "12+ months" && durationMonths < 12) return false;
            }

            return true;
        });

        // Sort courses
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "popularity":
                    return b.stats.students - a.stats.students;
                case "rating":
                    return b.stats.rating - a.stats.rating;
                case "price-low":
                    if (a.isFree && !b.isFree) return -1;
                    if (!a.isFree && b.isFree) return 1;
                    return a.pricing.current - b.pricing.current;
                case "price-high":
                    if (a.isFree && !b.isFree) return 1;
                    if (!a.isFree && b.isFree) return -1;
                    return b.pricing.current - a.pricing.current;
                case "newest":
                    return b.isNew - a.isNew;
                case "students":
                    return b.stats.students - a.stats.students;
                default:
                    return 0;
            }
        });

        return filtered;
    }, [searchTerm, filters, sortBy]);

    // Simulate loading when filters change
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [filters, searchTerm, sortBy]);

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 pt-20">
                <div className="max-w-[1500px] mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Courses</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover the perfect course to achieve your academic and career goals with expert instruction and comprehensive support
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1">
                            <CourseFilters filters={filters} onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} />
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <SearchAndSort searchTerm={searchTerm} onSearchChange={setSearchTerm} sortBy={sortBy} onSortChange={setSortBy} resultsCount={filteredAndSortedCourses.length} />

                            <CourseGrid courses={filteredAndSortedCourses} loading={loading} />

                            {/* Load More Button */}
                            {filteredAndSortedCourses.length > 0 && !loading && (
                                <div className="text-center mt-12">
                                    <button className="bg-white text-orange-600 border-2 border-orange-600 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
                                        Load More Courses
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
