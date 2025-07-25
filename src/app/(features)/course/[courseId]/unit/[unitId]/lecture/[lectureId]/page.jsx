import { LecturePlayer } from "@/app/(features)/course/[courseId]/unit/[unitId]/lecture/[lectureId]/components/lecture-player";
import { LectureSidebar } from "@/app/(features)/course/[courseId]/unit/[unitId]/lecture/[lectureId]/components/lecture-sidebar";
import { Header } from "@/components/header";

export default function LecturePage({ params }) {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="flex">
                <LectureSidebar courseId={params.courseId} unitId={params.unitId} activeLectureId={params.lectureId} />
                <main className="flex-1 lg:ml-80">
                    <LecturePlayer courseId={params.courseId} unitId={params.unitId} lectureId={params.lectureId} />
                </main>
            </div>
        </div>
    );
}
