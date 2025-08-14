"use client";

import { useNavigation } from "@/components/navigation";
import { featuredCoursesData } from "../constants/data";

export default function FeaturedCourses() {
    const { navigate } = useNavigation();

    const getBadgeColor = (badge: string) => {
        const colors = {
            Bestseller: "bg-orange-600 dark:bg-orange-700",
            "New Launch": "bg-green-600 dark:bg-green-700",
            Popular: "bg-red-600 dark:bg-red-700",
        };
        return colors[badge as keyof typeof colors] || "bg-orange-600 dark:bg-orange-700";
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900" id="courses">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{featuredCoursesData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{featuredCoursesData.subtitle}</p>
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCoursesData.courses.map((course) => (
                        <article
                            key={course.id}
                            className="bg-white shadow-sm dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden group hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300"
                        >
                            {/* Course Image */}
                            <div className="relative">
                                <img
                                    src={course.image || "/placeholder.svg"}
                                    alt={course.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                <div className={`absolute top-4 left-4 ${getBadgeColor(course.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>{course.badge}</div>
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium text-gray-900 dark:text-white">
                                    {course.rating} ⭐
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">{course.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{course.description}</p>

                                {/* Instructor */}
                                <div className="flex items-center mb-4">
                                    <img src={course.instructor.image || "/placeholder.svg"} alt={course.instructor.name} className="w-10 h-10 rounded-full object-cover mr-3" loading="lazy" />
                                    <div>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">{course.instructor.name}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">{course.instructor.experience}</div>
                                    </div>
                                </div>

                                {/* Course Stats */}
                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
                                    <span>📚 {course.stats.hours} hours</span>
                                    <span>👥 {course.stats.students} students</span>
                                    <span>🎯 {course.stats.successRate} success rate</span>
                                </div>

                                {/* Pricing */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <span className="text-2xl font-medium text-orange-600 dark:text-orange-400">₹{course.pricing.current.toLocaleString()}</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">₹{course.pricing.original.toLocaleString()}</span>
                                    </div>
                                    <span className="bg-green-500 dark:bg-green-600 text-white px-2 py-1 rounded text-sm">{course.pricing.discount}</span>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={() => navigate("/course-details")}
                                        className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200"
                                        aria-label={`Enroll in ${course.title}`}
                                    >
                                        Enroll Now
                                    </button>
                                    <button className="w-full text-orange-600 dark:text-orange-400 border border-orange-600 dark:border-orange-400 py-2 px-4 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                                        Preview Course
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Courses */}
                <div className="text-center mt-12">
                    <button className="bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border border-orange-600 dark:border-orange-400 font-medium text-lg px-8 py-4 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                        View All 200+ Courses
                    </button>
                </div>
            </div>
        </section>
    );
}
