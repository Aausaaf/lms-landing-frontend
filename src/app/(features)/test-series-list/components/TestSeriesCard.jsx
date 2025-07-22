"use client"

import { FileText, Clock, Target, TrendingUp } from "lucide-react"

export default function TestSeriesCard({ testSeries }) {
  const getIcon = () => {
    switch (testSeries.type) {
      case "full-length":
        return FileText
      case "sectional":
        return Target
      case "mock":
        return Clock
      case "previous-year":
        return FileText
      case "practice":
        return TrendingUp
      default:
        return FileText
    }
  }

  const IconComponent = getIcon()

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className={`${testSeries.iconBg} p-3 rounded-lg`}>
          <IconComponent className={`w-8 h-8 ${testSeries.iconColor}`} />
        </div>
        <span className={`${testSeries.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {testSeries.badge}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{testSeries.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{testSeries.description}</p>

      {/* Instructor Info */}
      <div className="mb-4">
        <div className="flex items-center">
          {testSeries.multipleInstructors ? (
            <div className="flex -space-x-2 mr-3">
              <img
                src={testSeries.instructor.avatar || "/placeholder.svg"}
                alt={testSeries.instructor.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center border-2 border-white font-medium">
                +{testSeries.multipleInstructors}
              </div>
            </div>
          ) : (
            <img
              src={testSeries.instructor.avatar || "/placeholder.svg"}
              alt={testSeries.instructor.name}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
          )}
          <div>
            <div className="text-sm font-medium text-gray-900">
              {testSeries.instructor.name}
              {testSeries.multipleInstructors && ` & ${testSeries.multipleInstructors} others`}
            </div>
            <div className="text-xs text-gray-500">{testSeries.instructor.experience}</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-sm text-gray-500">Total Tests:</div>
          <div className="font-bold">{testSeries.totalTests}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Duration:</div>
          <div className="font-bold">
            {testSeries.duration === "60"
              ? "1 hour each"
              : testSeries.duration === "120"
                ? "2 hours each"
                : "3 hours each"}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Participants:</div>
          <div className="font-bold">{testSeries.participants}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Success Rate:</div>
          <div className="font-bold text-emerald-600">{testSeries.successRate}%</div>
        </div>
      </div>

      {/* Performance Indicators */}
      <div className="bg-emerald-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600">Avg. Score Improvement:</span>
          <span className="font-bold text-emerald-600">{testSeries.avgImprovement}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Success Metric:</span>
          <span className="font-bold text-emerald-600">{testSeries.rankImprovement}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-bold text-emerald-600">₹{testSeries.price.toLocaleString()}</span>
          <span className="text-sm text-gray-500 line-through ml-2">₹{testSeries.originalPrice.toLocaleString()}</span>
        </div>
        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
          {testSeries.discount}% OFF
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors">
          Start Test Series
        </button>
        <button className="w-full text-emerald-600 border border-emerald-600 font-semibold py-3 px-4 rounded-xl hover:bg-emerald-50 transition-colors">
          Take Demo Test
        </button>
      </div>
    </div>
  )
}
