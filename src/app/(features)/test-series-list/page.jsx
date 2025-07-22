import TestSeriesHeader from "./components/TestSeriesHeader"
import FeaturedTestSeries from "./components/FeaturedTestSeries"
import TestSeriesFilters from "./components/TestSeriesFilters"
import TestSeriesGrid from "./components/TestSeriesGrid"

export const metadata = {
  title: "Test Series - EduPrime LMS | Practice & Excel",
  description:
    "Comprehensive test series for competitive exams. Practice with exam-pattern tests, get detailed analytics, and track your progress with expert guidance.",
  keywords: "test series, mock tests, competitive exams, GATE, IAS, JEE, NEET, practice tests",
  openGraph: {
    title: "Test Series - EduPrime LMS",
    description: "Comprehensive test series for competitive exams",
    type: "website",
  },
}

export default function TestSeriesListPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <TestSeriesHeader />
      <FeaturedTestSeries />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <TestSeriesFilters />
            <div className="flex-1">
              <TestSeriesGrid />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
