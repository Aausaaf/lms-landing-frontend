import { trustBarData } from "../constants/data"

export default function TrustBar() {
  return (
    <div className="fixed top-[4.5rem] left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 text-white py-3 z-40 border-b border-orange-600 dark:border-orange-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="animate-pulse text-yellow-300" aria-hidden="true">
              🔥
            </span>
            <span>
              <strong>{trustBarData.studentsOnline.toLocaleString()}</strong> students online now
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <span className="text-green-300" aria-hidden="true">
              ✅
            </span>
            <span>
              <strong>{trustBarData.recentEnrollment.name}</strong> just enrolled in{" "}
              {trustBarData.recentEnrollment.course}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-yellow-300" aria-hidden="true">
              🎯
            </span>
            <span>
              <strong>{trustBarData.passRate}%</strong> exam pass rate
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
