import CourseListHeader from "./components/CourseListHeader";
import CourseFilters from "./components/CourseFilters";
import CourseGrid from "./components/CourseGrid";
import CoursePagination from "./components/CoursePagination";
import { Layout } from "@/app/layout/layout";
import CourseList from "./components/CourseList";

export const metadata = {
    title: "Course List - EduPrime LMS | Find Your Perfect Course",
    description: "Browse our comprehensive collection of online courses. Filter by category, instructor, price, and more. Find the perfect course for your learning journey.",
    keywords: "online courses, education, learning, GATE, IAS, JEE, NEET, engineering courses",
    openGraph: {
        title: "Course List - EduPrime LMS",
        description: "Browse our comprehensive collection of online courses",
        type: "website",
    },
};

export default function CourseListPage() {
    return (
        <Layout>
            <main className="min-h-screen bg-gray-50">
                <CourseListHeader />

                <section className="py-12">
                    <CourseList />
                </section>
            </main>
        </Layout>
    );
}
