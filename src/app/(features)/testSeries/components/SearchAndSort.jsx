"use client";
import { sortOptions } from "../constants/testSeriesData";

export default function SearchAndSort({ searchTerm, onSearchChange, sortBy, onSortChange, resultsCount }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="flex-1 w-full lg:max-w-md">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Results Count */}
                <div className="text-gray-600 text-sm">
                    {resultsCount} course{resultsCount !== 1 ? "s" : ""} found
                </div>

                {/* Sort */}
                <div className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-gray-700">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => onSortChange(e.target.value)}
                        className="border-2 border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
