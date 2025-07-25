import { LecturePlayer } from "@/app/(features)/course/[courseId]/unit/[unitId]/lecture/[lectureId]/components/lecture-player";
import { LectureSidebar } from "@/app/(features)/course/[courseId]/unit/[unitId]/lecture/[lectureId]/components/lecture-sidebar";
import { Layout } from "@/app/layout/layout";

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
        <Layout skipFooter={true}>
            <div className="bg-gray-100 min-h-screen">
                <div className="flex">
                    {/* Left sidebar with video lectures navigation - now includes lesson navigation */}
                    <LectureSidebar courseId={params.courseId} unitId={params.unitId} activeLectureId={params.lectureId} lessonId={params.lessonId} />
                    {/* Main content area with lecture player */}
                    <main className="flex-1 lg:ml-80">
                        <LecturePlayer courseId={params.courseId} unitId={params.unitId} lessonId={params.lessonId} lectureId={params.lectureId} />
                    </main>
                </div>
            </div>
        </Layout>
    );
}
