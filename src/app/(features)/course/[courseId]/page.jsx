import { Layout } from "@/app/layout/layout"
import { CourseOverview } from "@/app/(features)/course/[courseId]/components/course-overview"
import { CourseSidebar } from "@/app/(features)/course/[courseId]/components/course-sidebar"
import { ErrorBoundary } from "@/components/error-boundary"

// SEO metadata for course pages
export async function generateMetadata({ params }) {
  return {
    title: "Class 12 Mathematics | Premium Learning Platform",
    description:
      "Comprehensive Class 12 Mathematics course based on NCERT 2023-2024 curriculum with 13 units, video lectures, and practice exercises.",
    keywords: "class 12 mathematics, NCERT, relations functions, calculus, algebra, geometry",
    openGraph: {
      title: "Class 12 Mathematics | Premium Learning Platform",
      description: "Master Class 12 Mathematics with expert instruction and comprehensive curriculum coverage.",
      type: "website",
    },
  }
}

export default function CoursePage({ params }) {
  return (
    <ErrorBoundary>
      <Layout skipFooter={true}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="flex">
            {/* Course navigation sidebar */}
            <CourseSidebar courseId={params.courseId} />
            {/* Main course overview content */}
            <main className="flex-1 lg:ml-80">
              <CourseOverview courseId={params.courseId} />
            </main>
          </div>
        </div>
      </Layout>
    </ErrorBoundary>
  )
}
