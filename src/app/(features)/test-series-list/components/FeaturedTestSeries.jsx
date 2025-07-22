"use client"

import { Activity, TrendingUp, Clock } from "lucide-react"

export default function FeaturedTestSeries() {
  const featuredTests = [
    {
      id: 1,
      title: "GATE 2025 Mock Tests",
      description: "50 full-length mock tests with detailed solutions and performance analysis",
      totalTests: 50,
      participants: "15,420+",
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      status: "LIVE SERIES",
      statusColor: "bg-red-500",
      borderColor: "border-blue-500",
      icon: Activity,
    },
    {
      id: 2,
      title: "IAS Prelims Test Series",
      description: "30 comprehensive tests covering GS, CSAT with current affairs updates",
      totalTests: 30,
      participants: "8,750+",
      price: 3999,
      originalPrice: 6999,
      discount: 43,
      status: "POPULAR",
      statusColor: "bg-orange-500",
      borderColor: "border-emerald-500",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "JEE Main 2025 Tests",
      description: "40 chapter-wise and full-length tests for JEE Main preparation",
      totalTests: 40,
      participants: "22,340+",
      price: 2499,
      originalPrice: 3999,
      discount: 38,
      status: "NEW LAUNCH",
      statusColor: "bg-blue-500",
      borderColor: "border-purple-500",
      icon: Clock,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trending Test Series</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Most popular test series with high success rates and detailed performance analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTests.map((test) => {
            const IconComponent = test.icon
            return (
              <div
                key={test.id}
                className={`bg-white rounded-2xl shadow-lg p-8 border-l-4 ${test.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-emerald-600">{test.status}</span>
                  </div>
                  <span className={`${test.statusColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {test.status === "LIVE SERIES"
                      ? "Limited Time"
                      : test.status === "POPULAR"
                        ? "Bestseller"
                        : "Fresh Content"}
                  </span>
                </div>

                <div className="mb-6">
                  <IconComponent className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
                  <p className="text-gray-600">{test.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500">Total Tests:</div>
                    <div className="font-bold text-lg">{test.totalTests}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Participants:</div>
                    <div className="font-bold text-lg">{test.participants}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-emerald-600">₹{test.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ₹{test.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {test.discount}% OFF
                  </span>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors">
                    Start Test Series
                  </button>
                  <button className="w-full text-emerald-600 border border-emerald-600 font-semibold py-3 px-4 rounded-xl hover:bg-emerald-50 transition-colors">
                    Take Sample Test
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
