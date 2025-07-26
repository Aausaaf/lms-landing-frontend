import { Layout } from "@/app/layout/layout";
import { LecturePlayer } from "./components/lecture-player";
import { EnhancedLectureSidebar } from "./components/enhanced-lecture-sidebar";
import { ErrorBoundary } from "@/components/error-boundary";

// SEO metadata for lecture pages
export async function generateMetadata({ params }) {
    return {
        title: `Lecture ${params.lectureId} - Lesson ${params.lessonId} | Class 12 Mathematics`,
        description: "Watch video lecture on equivalence relations and their properties with detailed explanations and examples.",
        keywords: "mathematics, relations, functions, class 12, NCERT, video lecture, equivalence relations",
        openGraph: {
            title: `Lecture ${params.lectureId} - Lesson ${params.lessonId} | Class 12 Mathematics`,
            description: "Comprehensive video lecture with detailed explanations and practical examples.",
            type: "article",
        },
    };
}

export default function LecturePage({ params }) {
    console.log("params", params);
    
    return (
        <ErrorBoundary>
            <Layout skipFooter={true}>
                <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
                    <div className="flex">
                        {/* Enhanced left sidebar with improved navigation */}
                        <EnhancedLectureSidebar courseId={params.courseId} unitId={params.unitId} activeLectureId={params.lectureId} lessonId={params.lessonId} />
                        {/* Main content area with enhanced lecture player */}
                        <main className="flex-1 lg:ml-80">
                            <LecturePlayer courseId={params.courseId} unitId={params.unitId} lessonId={params.lessonId} lectureId={params.lectureId} />
                        </main>
                    </div>
                </div>
            </Layout>
        </ErrorBoundary>
    );
}
