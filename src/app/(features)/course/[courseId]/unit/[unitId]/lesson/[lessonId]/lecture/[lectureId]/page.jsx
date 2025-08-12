import { Layout } from "@/app/layout/layout";
import { ErrorBoundary } from "@/components/error-boundary";
import LectureDetails from "./components/lecture-details";

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
    return (
        <ErrorBoundary>
            <Layout fullWidth={true} skipFooter={true}>
                <LectureDetails />
            </Layout>
        </ErrorBoundary>
    );
}
