import { Layout } from "@/app/layout/layout";
import { ErrorBoundary } from "@/components/error-boundary";
import LessonDetails from "./components/lesson-details";

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
            <Layout fullWidth={true} skipFooter={true}>
                <LessonDetails courseId={params.courseId} unitId={params.unitId} lessonId={params.lessonId} />
            </Layout>
        </ErrorBoundary>
    );
}
