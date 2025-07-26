import { LessonDetails } from "@/app/(features)/course/[courseId]/unit/[unitId]/lesson/[lessonId]/components/lesson-details";
import { Layout } from "@/app/layout/layout";
import { LectureSidebar } from "./lecture/[lectureId]/components/lecture-sidebar";

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
        <Layout skipFooter={true}>
            <div className="bg-gray-100">
                <div className="flex">
                    {/* Left sidebar with video lectures navigation */}
                    <LectureSidebar courseId={params.courseId} unitId={params.unitId} activeLectureId="" />
                    {/* Main content area with lesson details */}
                    <main className="flex-1 lg:ml-80">
                        <LessonDetails courseId={params.courseId} unitId={params.unitId} lessonId={params.lessonId} />
                    </main>
                </div>
            </div>
        </Layout>
    );
}
