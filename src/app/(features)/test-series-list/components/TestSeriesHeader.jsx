"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function TestSeriesHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  const quickSearchTerms = ["GATE Mock Tests", "IAS Prelims", "JEE Mains", "NEET Tests"]

  const handleQuickSearch = (term) => {
    setSearchQuery(term)
  }

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Master Exams with Practice Tests</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practice with exam-pattern tests, get detailed performance analytics, and track your progress to excel in
            competitive exams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search test series by exam, subject, or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-32 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg bg-white"
            />
            <button className="absolute right-2 top-2 bg-emerald-600 text-white font-semibold py-2 px-8 rounded-xl hover:bg-emerald-700 transition-colors">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="text-sm text-gray-500 font-medium">Popular searches:</span>
            {quickSearchTerms.map((term) => (
              <button
                key={term}
                onClick={() => handleQuickSearch(term)}
                className="text-sm bg-white text-emerald-600 px-4 py-2 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-200 shadow-sm border border-emerald-200"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
