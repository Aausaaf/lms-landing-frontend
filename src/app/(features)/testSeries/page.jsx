"use client";
import { useState, useEffect, useMemo } from "react";
import { testSeriesData, testFilterOptions, testSortOptions } from "./constants/testSeriesData";
import TestSeriesCard from "./components/TestSeriesCard";
import { Layout } from "@/app/layout/layout";

export default function TestSeriesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("popularity");
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        category: "All",
        subcategory: "All",
        level: "All",
        language: "All",
        pricing: "All",
        testType: "All",
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
            testType: "All",
        });
        setSearchTerm("");
    };

    const filteredAndSortedTests = useMemo(() => {
        let filtered = testSeriesData.filter((test) => {
            // Search filter
            if (
                searchTerm &&
                !test.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                !test.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
                !test.instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return false;
            }

            // Category filter
            if (filters.category !== "All" && test.category !== filters.category) {
                return false;
            }

            // Subcategory filter
            if (filters.subcategory !== "All" && test.subcategory !== filters.subcategory) {
                return false;
            }

            // Level filter
            if (filters.level !== "All" && test.level !== filters.level) {
                return false;
            }

            // Language filter
            if (filters.language !== "All" && test.language !== filters.language) {
                return false;
            }

            // Pricing filter
            if (filters.pricing !== "All") {
                if (filters.pricing === "Free" && !test.isFree) return false;
                if (filters.pricing === "Paid" && test.isFree) return false;
                if (filters.pricing === "Under ₹2,000" && (test.isFree || test.pricing.current >= 2000)) return false;
                if (filters.pricing === "₹2,000 - ₹4,000" && (test.isFree || test.pricing.current < 2000 || test.pricing.current > 4000)) return false;
                if (filters.pricing === "Above ₹4,000" && (test.isFree || test.pricing.current <= 4000)) return false;
            }

            // Test Type filter
            if (filters.testType !== "All" && !test.testTypes.includes(filters.testType)) {
                return false;
            }

            return true;
        });

        // Sort tests
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
                case "tests":
                    return b.totalTests - a.totalTests;
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
                            Test <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Series</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Practice with our comprehensive test series designed by experts to help you excel in your exams</p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                                <div className="lg:hidden mb-4">
                                    <button className="w-full flex items-center justify-between bg-orange-50 text-orange-600 px-4 py-3 rounded-xl font-medium">
                                        <span>Filters</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                                        <button onClick={handleClearFilters} className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                                            Clear All
                                        </button>
                                    </div>

                                    {/* Category Filter */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                                        <div className="grid grid-cols-1 gap-2">
                                            {testFilterOptions.categories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => handleFilterChange("category", category)}
                                                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                                        filters.category === category ? "bg-orange-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                                                    }`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Level Filter */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">Level</label>
                                        <div className="grid grid-cols-1 gap-2">
                                            {testFilterOptions.levels.map((level) => (
                                                <button
                                                    key={level}
                                                    onClick={() => handleFilterChange("level", level)}
                                                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                                        filters.level === level ? "bg-orange-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                                                    }`}
                                                >
                                                    {level}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Test Type Filter */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">Test Type</label>
                                        <div className="grid grid-cols-1 gap-2">
                                            {testFilterOptions.testTypes.map((type) => (
                                                <button
                                                    key={type}
                                                    onClick={() => handleFilterChange("testType", type)}
                                                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                                        filters.testType === type ? "bg-orange-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                                                    }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Search and Sort */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                                    <div className="flex-1 w-full lg:max-w-md">
                                        <div className="relative">
                                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <input
                                                type="text"
                                                placeholder="Search test series..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-gray-600 text-sm">{filteredAndSortedTests.length} test series found</div>

                                    <div className="flex items-center space-x-3">
                                        <label className="text-sm font-medium text-gray-700">Sort by:</label>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="border-2 border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        >
                                            {testSortOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Test Series Grid */}
                            {loading ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[...Array(6)].map((_, index) => (
                                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                            <div className="w-full h-48 bg-gray-200"></div>
                                            <div className="p-6">
                                                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                                                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                                                <div className="grid grid-cols-3 gap-4 mb-4">
                                                    <div className="h-8 bg-gray-200 rounded"></div>
                                                    <div className="h-8 bg-gray-200 rounded"></div>
                                                    <div className="h-8 bg-gray-200 rounded"></div>
                                                </div>
                                                <div className="h-12 bg-gray-200 rounded mb-3"></div>
                                                <div className="h-10 bg-gray-200 rounded"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : filteredAndSortedTests.length === 0 ? (
                                <div className="text-center py-16">
                                    <div className="text-6xl mb-6">📝</div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">No test series found</h3>
                                    <p className="text-gray-600 mb-8">Try adjusting your filters to find more test series</p>
                                    <button
                                        onClick={handleClearFilters}
                                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredAndSortedTests.map((testSeries) => (
                                        <TestSeriesCard key={testSeries.id} testSeries={testSeries} />
                                    ))}
                                </div>
                            )}

                            {/* Load More Button */}
                            {filteredAndSortedTests.length > 0 && !loading && (
                                <div className="text-center mt-12">
                                    <button className="bg-white text-orange-600 border-2 border-orange-600 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
                                        Load More Test Series
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
