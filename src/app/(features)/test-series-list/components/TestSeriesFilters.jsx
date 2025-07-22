"use client"

import { useState } from "react"
import { X, Filter } from "lucide-react"

export default function TestSeriesFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    categories: [],
    types: [],
    difficulty: "",
    duration: [],
    analytics: [],
    price: "",
  })

  const filterOptions = {
    categories: [
      { value: "gate", label: "GATE", count: 28 },
      { value: "ias", label: "IAS/UPSC", count: 15 },
      { value: "jee", label: "JEE Main/Advanced", count: 32 },
      { value: "neet", label: "NEET", count: 18 },
      { value: "banking", label: "Banking", count: 12 },
      { value: "ese", label: "ESE", count: 9 },
    ],
    types: [
      { value: "full-length", label: "Full Length Tests" },
      { value: "sectional", label: "Sectional Tests" },
      { value: "mock", label: "Mock Tests" },
      { value: "previous-year", label: "Previous Year Papers" },
      { value: "practice", label: "Practice Sets" },
    ],
    difficulties: [
      { value: "beginner", label: "Beginner" },
      { value: "intermediate", label: "Intermediate" },
      { value: "advanced", label: "Advanced" },
      { value: "progressive", label: "Progressive (All Levels)" },
    ],
    durations: [
      { value: "30-60", label: "30-60 minutes" },
      { value: "60-120", label: "1-2 hours" },
      { value: "120-180", label: "2-3 hours" },
      { value: "180+", label: "3+ hours" },
    ],
    analyticsFeatures: [
      { value: "detailed-analysis", label: "Detailed Analysis" },
      { value: "rank-prediction", label: "Rank Prediction" },
      { value: "comparison", label: "Peer Comparison" },
      { value: "weak-areas", label: "Weak Areas Identification" },
    ],
    priceRanges: [
      { value: "free", label: "Free" },
      { value: "0-1000", label: "₹0 - ₹1,000" },
      { value: "1000-3000", label: "₹1,000 - ₹3,000" },
      { value: "3000+", label: "₹3,000+" },
    ],
  }

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      types: [],
      difficulty: "",
      duration: [],
      analytics: [],
      price: "",
    })
  }

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }))
  }

  const handleRadioChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg z-40 hover:bg-emerald-700 transition-colors"
      >
        <Filter className="h-6 w-6" />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Filters</h3>
          <button onClick={clearAllFilters} className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
            Clear All
          </button>
        </div>

        <TestSeriesFilterContent
          filterOptions={filterOptions}
          filters={filters}
          handleCheckboxChange={handleCheckboxChange}
          handleRadioChange={handleRadioChange}
        />
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
              <TestSeriesFilterContent
                filterOptions={filterOptions}
                filters={filters}
                handleCheckboxChange={handleCheckboxChange}
                handleRadioChange={handleRadioChange}
              />

              <div className="pt-6 border-t mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors mb-3"
                >
                  Apply Filters
                </button>
                <button
                  onClick={clearAllFilters}
                  className="w-full text-gray-600 border border-gray-300 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function TestSeriesFilterContent({ filterOptions, filters, handleCheckboxChange, handleRadioChange }) {
  return (
    <div className="space-y-8">
      {/* Exam Categories */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Exam Categories</h4>
        <div className="space-y-3">
          {filterOptions.categories.map((category) => (
            <label key={category.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.value)}
                onChange={() => handleCheckboxChange("categories", category.value)}
                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-sm text-gray-700">
                {category.label} ({category.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Test Types */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Test Types</h4>
        <div className="space-y-3">
          {filterOptions.types.map((type) => (
            <label key={type.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.types.includes(type.value)}
                onChange={() => handleCheckboxChange("types", type.value)}
                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-sm text-gray-700">{type.label}</span>
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
                type="radio"
                name="difficulty"
                value={difficulty.value}
                checked={filters.difficulty === difficulty.value}
                onChange={() => handleRadioChange("difficulty", difficulty.value)}
                className="border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-sm text-gray-700">{difficulty.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Test Duration */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Test Duration</h4>
        <div className="space-y-3">
          {filterOptions.durations.map((duration) => (
            <label key={duration.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.duration.includes(duration.value)}
                onChange={() => handleCheckboxChange("duration", duration.value)}
                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-sm text-gray-700">{duration.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Analytics Features */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Analytics Features</h4>
        <div className="space-y-3">
          {filterOptions.analyticsFeatures.map((feature) => (
            <label key={feature.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.analytics.includes(feature.value)}
                onChange={() => handleCheckboxChange("analytics", feature.value)}
                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-sm text-gray-700">{feature.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
        <div className="space-y-3">
          {filterOptions.priceRanges.map((price) => (
            <label key={price.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="price"
                value={price.value}
                checked={filters.price === price.value}
                onChange={() => handleRadioChange("price", price.value)}
                className="border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-sm text-gray-700">{price.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
