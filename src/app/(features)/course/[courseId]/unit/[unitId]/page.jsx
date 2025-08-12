import { UnitDetails } from "@/app/(features)/course/[courseId]/unit/[unitId]/components/unit-details";
import { CourseSidebar } from "@/app/(features)/course/[courseId]/components/course-sidebar";
import { Layout } from "@/app/layout/layout";
import { ErrorBoundary } from "@/components/error-boundary";

// SEO metadata for unit pages
export async function generateMetadata({ params }) {
    return {
        title: `Unit ${params.unitId} - Relations and Functions | Class 12 Mathematics`,
        description: "Learn about relations and functions including types of relations, function properties, and their real-world applications in mathematics.",
        keywords: "relations, functions, mathematics, class 12, equivalence relations, function composition",
        openGraph: {
            title: `Unit ${params.unitId} - Relations and Functions | Class 12 Mathematics`,
            description: "Comprehensive unit covering relations and functions with video lectures and practice exercises.",
            type: "article",
        },
    };
}

export default function UnitPage({ params }) {
    return (
        <ErrorBoundary>
            <Layout fullWidth={true} skipFooter={true}>
                <UnitDetails params={params} />
            </Layout>
        </ErrorBoundary>
    );
}
