"use client";

import { useNavigation } from "@/components/navigation";
import { categoriesData } from "../constants/data";

export default function CategoriesShowcase() {
    const { navigate } = useNavigation();

    return (
        <section className="py-20 bg-white dark:bg-gray-800" id="categories">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">{categoriesData.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{categoriesData.subtitle}</p>
                </div>

                {/* Categories Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categoriesData.categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 shadow-sm  dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 p-8 text-center group hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300 hover:-translate-y-1 "
                        >
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${
                                    category.color === "primary"
                                        ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30"
                                        : category.color === "accent"
                                        ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 group-hover:bg-red-100 dark:group-hover:bg-red-900/30"
                                        : category.color === "secondary"
                                        ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:bg-green-100 dark:group-hover:bg-green-900/30"
                                        : "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/30"
                                }`}
                            >
                                <span className="text-2xl" aria-hidden="true">
                                    {<category.icon />}
                                </span>
                            </div>
                            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">{category.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                            <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-6">{category.enrolled} enrolled</div>
                            <button
                                onClick={() => navigate("/course-list")}
                                className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                                aria-label={`Explore ${category.title} courses`}
                            >
                                Explore Courses
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
