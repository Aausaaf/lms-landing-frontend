import { Layout } from "@/app/layout/layout";
import { ErrorBoundary } from "@/components/error-boundary";
import CourseDetails from "./components/course-details";

// SEO metadata for course pages
export async function generateMetadata({ params }) {
    return {
        title: `${params.courseId} | Premium Learning Platform`,
        description: "Comprehensive Class 12 Mathematics course based on NCERT 2023-2024 curriculum with 13 units, video lectures, and practice exercises.",
        keywords: "class 12 mathematics, NCERT, relations functions, calculus, algebra, geometry",
        openGraph: {
            title: "Class 12 Mathematics | Premium Learning Platform",
            description: "Master Class 12 Mathematics with expert instruction and comprehensive curriculum coverage.",
            type: "website",
        },
    };
}

export default function CoursePage({ params }) {
    return (
        <ErrorBoundary>
            <Layout fullWidth={true} skipFooter={true}>
                <CourseDetails params={params} />
            </Layout>
        </ErrorBoundary>
    );
}
