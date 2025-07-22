import CourseListHeader from "./components/CourseListHeader";
import CourseFilters from "./components/CourseFilters";
import CourseGrid from "./components/CourseGrid";
import CoursePagination from "./components/CoursePagination";
import { Layout } from "@/app/layout/layout";

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
                    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                            <CourseFilters />
                            <div className="flex-1">
                                <CourseGrid />
                                <CoursePagination />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
