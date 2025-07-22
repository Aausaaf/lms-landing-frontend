"use client"
import { useState } from "react"
import { filterOptions } from "../constants/coursesData"

export default function CourseFilters({ filters, onFilterChange, onClearFilters }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value)
  }

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter((value) => value !== "All" && value !== "").length
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-orange-50 text-orange-600 px-4 py-3 rounded-xl font-medium"
        >
          <span>Filters {getActiveFiltersCount() > 0 && `(${getActiveFiltersCount()})`}</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Filters */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block space-y-6`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          {getActiveFiltersCount() > 0 && (
            <button onClick={onClearFilters} className="text-orange-600 hover:text-orange-700 text-sm font-medium">
              Clear All
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {filterOptions.categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange("category", category)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  filters.category === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        {filters.category !== "All" && filterOptions.subcategories[filters.category] && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Subcategory</label>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => handleFilterChange("subcategory", "All")}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  filters.subcategory === "All"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                All
              </button>
              {filterOptions.subcategories[filters.category].map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => handleFilterChange("subcategory", subcategory)}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    filters.subcategory === subcategory
                      ? "bg-orange-500 text-white"
                      : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Level</label>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {filterOptions.levels.map((level) => (
              <button
                key={level}
                onClick={() => handleFilterChange("level", level)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  filters.level === level
                    ? "bg-orange-500 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Language Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Language</label>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {filterOptions.languages.map((language) => (
              <button
                key={language}
                onClick={() => handleFilterChange("language", language)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  filters.language === language
                    ? "bg-orange-500 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Pricing</label>
          <div className="grid grid-cols-1 gap-2">
            {filterOptions.pricing.map((price) => (
              <button
                key={price}
                onClick={() => handleFilterChange("pricing", price)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  filters.pricing === price
                    ? "bg-orange-500 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {price}
              </button>
            ))}
          </div>
        </div>

        {/* Duration Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Duration</label>
          <div className="grid grid-cols-1 gap-2">
            {filterOptions.duration.map((duration) => (
              <button
                key={duration}
                onClick={() => handleFilterChange("duration", duration)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  filters.duration === duration
                    ? "bg-orange-500 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
