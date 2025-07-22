"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CoursePagination() {
  const currentPage = 1
  const totalPages = 12

  return (
    <div className="mt-12 flex items-center justify-center space-x-4">
      <button
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </button>

      <div className="flex space-x-2">
        {[1, 2, 3, "...", totalPages].map((page, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
              page === currentPage
                ? "bg-orange-600 text-white"
                : page === "..."
                  ? "cursor-default"
                  : "border border-gray-300 hover:bg-gray-50"
            }`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  )
}
