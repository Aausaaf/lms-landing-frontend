"use client";

import { useState } from "react";
import { X, Filter } from "lucide-react";

export default function CourseFilters() {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        categories: [],
        price: "",
        difficulty: [],
        duration: [],
        rating: [],
        language: [],
    });

    const filterOptions = {
        categories: [
            { value: "engineering", label: "Engineering", count: 45 },
            { value: "civil-services", label: "Civil Services", count: 23 },
            { value: "school", label: "School Education", count: 67 },
            { value: "medical", label: "Medical", count: 18 },
            { value: "banking", label: "Banking & Finance", count: 12 },
        ],
        // priceRanges: [
        //   { value: "free", label: "Free" },
        //   { value: "0-5000", label: "₹0 - ₹5,000" },
        //   { value: "5000-15000", label: "₹5,000 - ₹15,000" },
        //   { value: "15000+", label: "₹15,000+" },
        // ],
        difficulties: [
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
        ],
        // durations: [
        //   { value: "0-20", label: "0-20 hours" },
        //   { value: "20-50", label: "20-50 hours" },
        //   { value: "50-100", label: "50-100 hours" },
        //   { value: "100+", label: "100+ hours" },
        // ],
        ratings: [
            { value: "4.5+", label: "4.5+ ⭐" },
            { value: "4.0+", label: "4.0+ ⭐" },
            { value: "3.5+", label: "3.5+ ⭐" },
        ],
        languages: [
            { value: "english", label: "English" },
            { value: "hindi", label: "Hindi" },
            { value: "both", label: "Both" },
        ],
    };

    const clearAllFilters = () => {
        setFilters({
            categories: [],
            price: "",
            difficulty: [],
            duration: [],
            rating: [],
            language: [],
        });
    };

    const handleCheckboxChange = (filterType, value) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: prev[filterType].includes(value) ? prev[filterType].filter((item) => item !== value) : [...prev[filterType], value],
        }));
    };

    const handleRadioChange = (filterType, value) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: value,
        }));
    };

    return (
        <>
            {/* Mobile Filter Button */}
            <button onClick={() => setIsOpen(true)} className="lg:hidden fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-lg z-40 hover:bg-orange-700 transition-colors">
                <Filter className="h-6 w-6" />
            </button>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-80 max-w-72 bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                    <button onClick={clearAllFilters} className="text-sm text-orange-600 hover:text-orange-800 font-medium">
                        Clear All
                    </button>
                </div>

                <FilterContent filterOptions={filterOptions} filters={filters} handleCheckboxChange={handleCheckboxChange} handleRadioChange={handleRadioChange} />
            </aside>

            {/* Mobile Filter Drawer */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                    <div className="fixed inset-y-0 left-0 max-w-sm w-full bg-white shadow-xl overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b">
                            <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <FilterContent filterOptions={filterOptions} filters={filters} handleCheckboxChange={handleCheckboxChange} handleRadioChange={handleRadioChange} />

                            <div className="pt-6 border-t mt-6">
                                <button onClick={() => setIsOpen(false)} className="w-full bg-orange-600 text-white py-3 px-4 rounded-xl hover:bg-orange-700 transition-colors mb-3">
                                    Apply Filters
                                </button>
                                <button onClick={clearAllFilters} className="w-full text-gray-600 border border-gray-300 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors">
                                    Clear All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function FilterContent({ filterOptions, filters, handleCheckboxChange, handleRadioChange }) {
    return (
        <div className="space-y-8 ">
            {/* Categories */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
                <div className="space-y-3">
                    {filterOptions.categories.map((category) => (
                        <label key={category.value} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.categories.includes(category.value)}
                                onChange={() => handleCheckboxChange("categories", category.value)}
                                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">
                                {category.label} ({category.count})
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
                <div className="space-y-3">
                    {filterOptions?.priceRanges?.map((price) => (
                        <label key={price.value} className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="price"
                                value={price.value}
                                checked={filters.price === price.value}
                                onChange={() => handleRadioChange("price", price.value)}
                                className="border-gray-300 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{price.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Difficulty Level */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Difficulty Level</h4>
                <div className="space-y-3">
                    {filterOptions.difficulties.map((difficulty) => (
                        <label key={difficulty.value} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.difficulty.includes(difficulty.value)}
                                onChange={() => handleCheckboxChange("difficulty", difficulty.value)}
                                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{difficulty.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Duration */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Duration</h4>
                <div className="space-y-3">
                    {filterOptions?.durations?.map((duration) => (
                        <label key={duration.value} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.duration.includes(duration.value)}
                                onChange={() => handleCheckboxChange("duration", duration.value)}
                                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{duration.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Rating</h4>
                <div className="space-y-3">
                    {filterOptions.ratings.map((rating) => (
                        <label key={rating.value} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.rating.includes(rating.value)}
                                onChange={() => handleCheckboxChange("rating", rating.value)}
                                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{rating.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Language */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-4">Language</h4>
                <div className="space-y-3">
                    {filterOptions.languages.map((language) => (
                        <label key={language.value} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.language.includes(language.value)}
                                onChange={() => handleCheckboxChange("language", language.value)}
                                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="ml-3 text-sm text-gray-700">{language.label}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
