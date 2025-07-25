import { UnitDetails } from "@/app/(features)/course/[courseId]/unit/[unitId]/components/unit-details";
import { CourseSidebar } from "@/app/(features)/course/[courseId]/components/course-sidebar";
import { Header } from "@/components/header";
import { Layout } from "@/app/layout/layout";

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
        <Layout skipFooter={true}>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
                <div className="flex">
                    {/* Course navigation sidebar */}
                    <CourseSidebar courseId={params.courseId} activeUnitId={params.unitId} />
                    {/* Main unit content */}
                    <main className="flex-1 lg:ml-80">
                        <UnitDetails courseId={params.courseId} unitId={params.unitId} />
                    </main>
                </div>
            </div>
        </Layout>
    );
}
