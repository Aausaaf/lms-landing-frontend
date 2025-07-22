"use client"

import { useState } from "react"
import TestSeriesCard from "./TestSeriesCard"

export default function TestSeriesGrid() {
  const [sortBy, setSortBy] = useState("relevance")
  const [resultsCount] = useState(89)

  const testSeries = [
    {
      id: 1,
      title: "GATE 2025 Mock Tests - Mechanical",
      description:
        "50 full-length mock tests with detailed solutions and performance analysis for Mechanical Engineering",
      category: "gate",
      type: "full-length",
      difficulty: "advanced",
      duration: "180",
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      successRate: 92,
      totalTests: 50,
      participants: "15,420+",
      avgImprovement: "+38%",
      rankImprovement: "+145 ranks",
      badge: "Live",
      badgeColor: "bg-red-500",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      instructor: {
        name: "Dr. Rajesh Kumar",
        avatar: "/placeholder.svg?height=40&width=40&text=RK",
        experience: "IIT Delhi Alumni • Mechanical Expert",
      },
    },
    {
      id: 2,
      title: "IAS Prelims Test Series 2025",
      description: "30 comprehensive tests covering GS, CSAT with current affairs and weekly updates",
      category: "ias",
      type: "sectional",
      difficulty: "intermediate",
      duration: "120",
      price: 3999,
      originalPrice: 6999,
      discount: 43,
      successRate: 78,
      totalTests: 30,
      participants: "8,750+",
      avgImprovement: "+42%",
      rankImprovement: "78% cleared",
      badge: "Popular",
      badgeColor: "bg-orange-500",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      instructor: {
        name: "Prof. Anita Sharma",
        avatar: "/placeholder.svg?height=40&width=40&text=AS",
        experience: "JNU Alumni • UPSC Expert",
      },
    },
    {
      id: 3,
      title: "JEE Main 2025 Complete Tests",
      description: "40 chapter-wise and full-length tests with detailed video solutions and analysis",
      category: "jee",
      type: "mock",
      difficulty: "advanced",
      duration: "180",
      price: 2499,
      originalPrice: 3999,
      discount: 38,
      successRate: 85,
      totalTests: 40,
      participants: "22,340+",
      avgImprovement: "+25 percentile",
      rankImprovement: "85% cleared",
      badge: "New",
      badgeColor: "bg-blue-600",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      instructor: {
        name: "Dr. Vikram Singh",
        avatar: "/placeholder.svg?height=40&width=40&text=VS",
        experience: "IIT Alumni • JEE Experts",
      },
      multipleInstructors: 3,
    },
    {
      id: 4,
      title: "NEET 2025 Biology Focus Tests",
      description: "25 biology-focused practice tests with detailed explanations and concept reinforcement",
      category: "neet",
      type: "practice",
      difficulty: "intermediate",
      duration: "180",
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      successRate: 88,
      totalTests: 25,
      participants: "18,560+",
      avgImprovement: "+52 marks",
      rankImprovement: "88% cleared",
      badge: "High Success",
      badgeColor: "bg-emerald-600",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      instructor: {
        name: "Dr. Priya Nair",
        avatar: "/placeholder.svg?height=40&width=40&text=PN",
        experience: "AIIMS Alumni • Biology Expert",
      },
    },
    {
      id: 5,
      title: "Banking Exam Test Series 2025",
      description: "20 sectional tests for SBI, IBPS with quantitative aptitude and reasoning focus",
      category: "banking",
      type: "sectional",
      difficulty: "beginner",
      duration: "60",
      price: 1499,
      originalPrice: 2299,
      discount: 35,
      successRate: 76,
      totalTests: 20,
      participants: "6,890+",
      avgImprovement: "+28%",
      rankImprovement: "76% selected",
      badge: "Affordable",
      badgeColor: "bg-indigo-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      instructor: {
        name: "Prof. Suresh Kumar",
        avatar: "/placeholder.svg?height=40&width=40&text=SK",
        experience: "Banking Experts • 14+ years exp",
      },
      multipleInstructors: 1,
    },
    {
      id: 6,
      title: "ESE 2025 Previous Year Papers",
      description: "15 previous year papers for Engineering Services Exam with detailed solutions",
      category: "ese",
      type: "previous-year",
      difficulty: "advanced",
      duration: "180",
      price: 1799,
      originalPrice: 2499,
      discount: 28,
      successRate: 82,
      totalTests: 15,
      participants: "2,890+",
      avgImprovement: "82%",
      rankImprovement: "45% selected",
      badge: "Expert Level",
      badgeColor: "bg-orange-500",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      instructor: {
        name: "Er. Suresh Patel",
        avatar: "/placeholder.svg?height=40&width=40&text=SP",
        experience: "PSU Engineer • ESE Expert",
      },
    },
  ]

  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "popularity", label: "Popularity" },
    { value: "difficulty", label: "Difficulty" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "success-rate", label: "Success Rate" },
  ]

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-gray-600">
          <span className="font-semibold text-gray-900">{resultsCount}</span> test series found
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-600 font-medium">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Test Series Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {testSeries.map((testSeries) => (
          <TestSeriesCard key={testSeries.id} testSeries={testSeries} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <button className="bg-emerald-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-emerald-700 transition-colors">
          Load More Test Series
        </button>
      </div>
    </div>
  )
}
