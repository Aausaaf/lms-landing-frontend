import { LessonDetails } from "@/app/(features)/course/[courseId]/unit/[unitId]/lesson/[lessonId]/components/lesson-details";
import { Layout } from "@/app/layout/layout";
import { EnhancedLectureSidebar } from "./lecture/[lectureId]/components/enhanced-lecture-sidebar";
import { ErrorBoundary } from "@/components/error-boundary";

// SEO metadata for lesson pages
export async function generateMetadata({ params }) {
    return {
        title: `Lesson ${params.lessonId} - Unit ${params.unitId} | Class 12 Mathematics`,
        description: "Learn about types of relations including reflexive, symmetric, and transitive relations with practical examples and video lectures.",
        keywords: "mathematics, relations, functions, class 12, NCERT, equivalence relations",
        openGraph: {
            title: `Lesson ${params.lessonId} - Unit ${params.unitId} | Class 12 Mathematics`,
            description: "Comprehensive lesson on types of relations with video lectures and practice exercises.",
            type: "article",
        },
    };
}

export default function LessonDetailsPage({ params }) {
    return (
        <ErrorBoundary>
            <Layout skipFooter={true}>
                <div className="bg-gray-100 dark:bg-gray-900">
                    <div className="flex">
                        {/* Left sidebar with video lectures navigation */}
                        <EnhancedLectureSidebar courseId={params.courseId} unitId={params.unitId} activeLectureId="" lessonId={params.lessonId} />
                        {/* Main content area with lesson details */}
                        <main className="flex-1 lg:ml-[370px]">
                            <LessonDetails courseId={params.courseId} unitId={params.unitId} lessonId={params.lessonId} />
                        </main>
                    </div>
                </div>
            </Layout>
        </ErrorBoundary>
    );
}
