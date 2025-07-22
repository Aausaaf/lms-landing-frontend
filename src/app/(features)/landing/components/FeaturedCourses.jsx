import { useNavigation } from "@/components/navigation";
import { featuredCoursesData } from "../constants/data";

export default function FeaturedCourses() {
    const { navigate } = useNavigation();
    const getBadgeColor = (badge) => {
        const colors = {
            Bestseller: "bg-orange-600",
            "New Launch": "bg-green-600",
            Popular: "bg-red-600",
        };
        return colors[badge] || "bg-orange-600";
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{featuredCoursesData.title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{featuredCoursesData.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCoursesData.courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className={`absolute top-4 left-4 ${getBadgeColor(course.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>{course.badge}</div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">{course.rating} ⭐</div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                                <p className="text-gray-600 mb-4">{course.description}</p>

                                {/* Instructor */}
                                <div className="flex items-center mb-4">
                                    <img src={course.instructor.image || "/placeholder.svg"} alt={course.instructor.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                                    <div>
                                        <div className="text-sm font-medium">{course.instructor.name}</div>
                                        <div className="text-xs text-gray-500">{course.instructor.experience}</div>
                                    </div>
                                </div>

                                {/* Course Stats */}
                                <div className="flex justify-between text-sm text-gray-600 mb-6">
                                    <span>📚 {course.stats.hours} hours</span>
                                    <span>👥 {course.stats.students} students</span>
                                    <span>🎯 {course.stats.successRate} success rate</span>
                                </div>

                                {/* Pricing */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <span className="text-2xl font-bold text-orange-600">₹{course.pricing.current.toLocaleString()}</span>
                                        <span className="text-sm text-gray-500 line-through ml-2">₹{course.pricing.original.toLocaleString()}</span>
                                    </div>
                                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">{course.pricing.discount}</span>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={() => navigate("/course-details")}
                                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200"
                                    >
                                        Enroll Now
                                    </button>
                                    <button className="w-full text-orange-600 border-2 border-orange-600 py-2 px-4 rounded-xl hover:bg-orange-50 transition-colors">Preview Course</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Courses */}
                <div className="text-center mt-12">
                    <button className="bg-white text-orange-600 border-2 border-orange-600 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
                        View All 200+ Courses
                    </button>
                </div>
            </div>
        </section>
    );
}
