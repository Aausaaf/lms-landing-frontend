import CourseCard from "./CourseCard";

export default function CourseGrid({ courses, loading }) {
    if (loading) {
        return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                        <div className="w-full h-48 bg-gray-200"></div>
                        <div className="p-6">
                            <div className="h-4 bg-gray-200 rounded mb-3"></div>
                            <div className="h-6 bg-gray-200 rounded mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded mb-4"></div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                <div className="h-4 bg-gray-200 rounded flex-1"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="h-8 bg-gray-200 rounded"></div>
                                <div className="h-8 bg-gray-200 rounded"></div>
                                <div className="h-8 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-12 bg-gray-200 rounded mb-3"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (courses.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-6">📚</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No courses found</h3>
                <p className="text-gray-600 mb-8">Try adjusting your filters to find more courses</p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200">Clear All Filters</button>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
}
