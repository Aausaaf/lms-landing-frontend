"use client";
import { useState, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp, X, Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const CourseFilters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // State for collapsible sections
    const [expandedSections, setExpandedSections] = useState({
        category: true,
        level: true,
        price: true,
        duration: true,
        rating: true,
    });

    // Filter options
    const filterOptions = {
        category: [
            { value: "web-development", label: "Web Development", count: 45 },
            { value: "mobile-development", label: "Mobile Development", count: 32 },
            { value: "data-science", label: "Data Science", count: 28 },
            { value: "design", label: "Design", count: 35 },
            { value: "marketing", label: "Marketing", count: 22 },
            { value: "business", label: "Business", count: 18 },
        ],
        level: [
            { value: "beginner", label: "Beginner", count: 67 },
            { value: "intermediate", label: "Intermediate", count: 58 },
            { value: "advanced", label: "Advanced", count: 40 },
        ],
        duration: [
            { value: "0-5", label: "0-5 hours", count: 23 },
            { value: "5-15", label: "5-15 hours", count: 45 },
            { value: "15-30", label: "15-30 hours", count: 52 },
            { value: "30+", label: "30+ hours", count: 45 },
        ],
        rating: [
            { value: "4.5+", label: "4.5 & up", count: 78 },
            { value: "4.0+", label: "4.0 & up", count: 112 },
            { value: "3.5+", label: "3.5 & up", count: 145 },
            { value: "3.0+", label: "3.0 & up", count: 165 },
        ],
    };

    // Get current filter values from URL
    const currentFilters = useMemo(() => {
        const filters = {};
        Object.keys(filterOptions).forEach((filterType) => {
            const value = searchParams.get(filterType);
            filters[filterType] = value ? value.split(",").filter(Boolean) : [];
        });
        console.log("Current Filters:", filters); // Debug: Log current filters
        return filters;
    }, [searchParams]);

    // Count active filters
    const activeFilterCount = useMemo(() => {
        const count = Object.values(currentFilters).reduce((total, filterArray) => total + filterArray.length, 0);
        console.log("Active Filter Count:", count); // Debug: Log filter count
        return count;
    }, [currentFilters]);

    // Update URL with new filter values
    const updateFilters = useCallback(
        (filterType, values) => {
            const params = new URLSearchParams(searchParams.toString());
            console.log(`Updating ${filterType} with values:`, values); // Debug: Log update
            if (values.length > 0) {
                params.set(filterType, values.join(","));
            } else {
                params.delete(filterType);
            }
            // Reset to page 1 when filters change
            params.delete("page");
            const newUrl = params.toString() ? `?${params.toString()}` : "/course-list";
            console.log("New URL:", newUrl); // Debug: Log new URL
            router.push(newUrl, { scroll: false });
        },
        [searchParams, router]
    );

    // Handle checkbox change
    const handleFilterChange = useCallback(
        (filterType, value, checked) => {
            const currentValues = currentFilters[filterType] || [];
            const newValues = checked ? [...new Set([...currentValues, value])] : currentValues.filter((v) => v !== value);

            console.log(`Filter Change - ${filterType}:`, { value, checked, newValues }); // Debug: Log filter change
            updateFilters(filterType, newValues);
        },
        [currentFilters, updateFilters]
    );

    // Clear all filters
    const clearAllFilters = useCallback(() => {
        console.log("Clearing all filters"); // Debug: Log clear action
        router.replace("/course-list", { scroll: false }); // Use replace to ensure clean URL
    }, [router]);

    // Toggle section expansion
    const toggleSection = useCallback((section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    }, []);

    // Filter section component
    const FilterSection = ({ title, filterType, options, isLastOne }) => {
        const isExpanded = expandedSections[filterType];
        const activeValues = currentFilters[filterType] || [];

        return (
            <div className={`${!isLastOne ? "border-b pb-4" : ""} border-gray-200`}>
                <button onClick={() => toggleSection(filterType)} className="flex items-center justify-between w-full text-left" aria-expanded={isExpanded}>
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                    {isExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>

                {isExpanded && (
                    <div className="mt-3 space-y-3">
                        {options.map((option) => {
                            const isChecked = activeValues.includes(option.value);

                            return (
                                <label key={option.value} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                                    <Checkbox checked={isChecked} onChange={(e) => handleFilterChange(filterType, option.value, e.target.checked)} />
                                    <span className="ml-3 text-sm text-gray-700 flex-1">{option.label}</span>
                                    <span className="text-xs text-gray-500">({option.count})</span>
                                </label>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <Filter className="h-5 w-5 text-gray-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
                    {activeFilterCount > 0 && <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{activeFilterCount}</span>}
                </div>

                {activeFilterCount > 0 && (
                    <button onClick={clearAllFilters} className="text-sm text-orange-600 hover:text-orange-800 font-medium">
                        Clear all
                    </button>
                )}
            </div>

            {/* Active Filters */}
            {activeFilterCount > 0 && (
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Active Filters:</h4>
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(currentFilters).map(([filterType, values]) =>
                            values.map((value) => {
                                const option = filterOptions[filterType]?.find((opt) => opt.value === value);
                                if (!option) return null;

                                return (
                                    <span key={`${filterType}-${value}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                        {option.label}
                                        <button onClick={() => handleFilterChange(filterType, value, false)} className="ml-2 hover:text-orange-600" aria-label={`Remove ${option.label} filter`}>
                                            <X className="h-3 w-3" />
                                        </button>
                                    </span>
                                );
                            })
                        )}
                    </div>
                </div>
            )}

            {/* Filter Sections */}
            <div className="space-y-4">
                <FilterSection title="Category" filterType="category" options={filterOptions.category} />
                <FilterSection title="Difficulty Level" filterType="level" options={filterOptions.level} />
                <FilterSection isLastOne={true} title="Rating" filterType="rating" options={filterOptions.rating} />
            </div>
        </div>
    );
};

export default CourseFilters;
